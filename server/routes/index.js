var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dough', (req, res, next) => {
  models.dough.findAll({})
    .then(dough => {
      res.header('Content-Type', 'application/json')
      res.send(JSON.stringify(dough))
    })
})

router.get('/toppings/:id', (req, res, next) => {
  models.topping.findAll({
    where: { topping_id: req.params.id },
    attributes: ['topping_id', 'topping', 'topping_type', 'price']
  }).then(topping => {
    res.header('Content-Type', 'application/json')
    res.send(JSON.stringify(topping))
  })
})

router.get('/dough/:id', (req, res, next) => {
  models.dough.findAll({
    where: { dough_id: req.params.id },
    attributes: ['dough_size'],
    include: {
      attributes: ['section'],
      model: models.section,
      include: {
        attributes: ['pizza_id', 'pizza_name'],
        model: models.pizza
      }
    }
  })
    .then(pizzas => {
      res.header('Content-Type', 'application/json')
      res.send(JSON.stringify(pizzas))
    })
})

router.get('/stuffed', (req, res, next) => {
  models.section.findAll({
    where: { section_id: 5 },
    include: {
      attributes: ['dough_size'],
      model: models.dough,
      include: {
        attributes: ['pizza_id', 'pizza_name'],
        model: models.pizza
      }
    }
  }).then(pizzas => {
    res.header('Content-Type', 'application/json')
    res.send(JSON.stringify(pizzas))
  })
})

router.get('/:size/:pizza', (req, res, next) => {
  models.dough.findAll({
    where: { dough_size: req.params.size },
    include: {
      where: { pizza_name: req.params.pizza },
      attributes: ['pizza_name', 'pizza_id'],
      model: models.pizza,
      include: {
        attributes: ['topping', 'topping_id'],
        model: models.topping
      }
    }
  }).then(pizza => {
    res.header('Content-Type', 'application/json')
    res.send(JSON.stringify(pizza))
  })
})

router.get('/toppings', (req, res, next) => {
  models.topping.findAll({
    attributes: ['topping_id', 'topping', 'topping_type', 'price']
  }).then(toppings => {
    res.header('Content-Type', 'application/json')
    res.send(JSON.stringify(toppings))
  })
})

router.post('/order/closed', (req, res, next) => {
  models.orders.findOrCreate({
    where: { order_id: 0 },
    defaults: {
      order_status: 1,
      order_name: req.body.name ? req.body.name : null,
      subtotal: req.body.price.toFixed(2),
      tax: req.body.tax.toFixed(2),
      total: req.body.total.toFixed(2),
      paid_amount: req.body.paidAmount.toFixed(2),
      change: req.body.change.toFixed(2),
    }
  }).spread((result, created) => {
    if (created) {
      for (let i = 0; i < req.body.pizzas.length; i++) {
        models.order_pizzas.findOrCreate({
          where: { order_id: 0 },
          defaults: {
            order_id: result.order_id,
            pizza_id: req.body.pizzas[i].id,
            size: req.body.pizzas[i].size.size,
            price: req.body.pizzas[i].price.toFixed(2),
          }
        })
      }
    }
  })
})

router.get('/order', (req, res, next) => {
  models.orders.findAll({
    where: { order_status: 1 },
    attributes: ['order_id', 'order_name']
  }).then(order => {
    res.header('Content-Type', 'application/json')
    res.send(JSON.stringify(order))
  })
})

router.get('/order/id/:orderId', (req, res, next) => {
  models.orders.findOne({
    where: { order_id: req.params.orderId },
    attributes: ['order_name', 'subtotal', 'tax', 'total', 'paid_amount', 'change'],
    include: {
      model: models.pizza,
      attributes: ['pizza_name']
    }
  }).then(order => {
    res.header('Content-Type', 'application/json')
    res.send(JSON.stringify(order))
  })
})

module.exports = router;