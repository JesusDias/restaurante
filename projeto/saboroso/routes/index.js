var conn = require('./../includes/db'); //inclusão da minha conexão
var express = require('express');
var menus = require('./../includes/menus');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  menus.getMenus().then(results => {

      res.render('index', { 
      title: 'Restaurante Saboroso',
      menus: results

    });

  });
 
});

router.get('/contacts', function(req, res, next) {

  res.render('contacts', { 
    title: 'Contato - Restaurante Saboroso',
    background: 'images/img_bg_3.jpg',
    h1: 'Diga um oi!',
  });
  
});

router.get('/menus', function(req, res, next) {

  menus.getMenus().then(results => {

      res.render('menus', { 
      title: 'Contato - Restaurante Saboroso',
      background: 'images/img_bg_1.jpg',
      h1: 'Saboreie nosso menu!',
      menus: results
    });

  });

});

router.get('/reservations', function(req, res, next) {

  res.render('reservations', { 
    title: 'Contato - Restaurante Saboroso',
    background: 'images/img_bg_2.jpg',
    h1: 'Reserve uma Mesa!',
  });
  
});

router.get('/services', function(req, res, next) {

  res.render('services', { 
    title: 'Contato - Restaurante Saboroso',
    background: 'images/img_bg_1.jpg',
    h1: 'É um prazer poder servir!',
  });
  
});

module.exports = router;
