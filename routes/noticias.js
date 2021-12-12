var express = require('express');
var router = express.Router();
var Noticia = require('../models/noticia')

/* GET home page. */
router.get('/', async function (req, res, next) {
  vizualiza = await Noticia.find();

  res.json(vizualiza);
});

router.get('/vizualizar', async function (req, res, next) {
  vizualiza = await Noticia.findById(req.query.id);

  res.json(vizualiza); 
});

router.get('/contador', async function (req, res, next) {
  contador = await Noticia.find(req.lenght).count();

  res.json({quantidade: contador}); 
});

module.exports = router;