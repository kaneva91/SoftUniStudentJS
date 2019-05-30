let Product = require('../models/Product');

module.exports = {
  getIndex: function (req, res) {
    Product.find({}).
      then(products => {
        res.render('index', { products });
      })
  },

  getCreate: function (req, res) {
    res.render('create');
  },

  postCreate: function (req, res) {
    let product = req.body;
    Product.create(product).
      then(() => res.redirect('/'))
  },

  getEdit: function (req, res) {
    const id = req.params.id;
    Product.findById(id).
    then(product => {
      res.render('edit', { product})
    })
  },

  postEdit: function (req, res) {
     const id = req.params.id;
     const updatedProduct = req.body;

     Product.findByIdAndUpdate(id, updatedProduct).
     then(() => {
       res.redirect('/');
     })
  },
  getDelete: function (req, res) {
    const id = req.params.id;
    res.render('delete', {id});
  },

  postDelete: function (req, res) {
     const id = req.params.id;
     Product.findByIdAndRemove(id).
     then(() => {
       res.redirect('/');
     });
  }
};