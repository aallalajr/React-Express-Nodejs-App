module.exports = function (app) {
    
    var GroceryItem = require('./../models/GroceryItem.js');
        
    app.route('/api/items')
    .get(function(req, res){
        GroceryItem.find(function(err, doc) {
            res.send(doc);
        })
    })
    .post(function(req, res){
        var item = req.body;
        console.log("Adding item...", item);
        var groceryItem = new GroceryItem(item);
        groceryItem.save(function (err, data) {
            res.status(300).send();
        })
    });
    
    app.route('/api/items/:id')
    .delete(function(req, res) {
        console.log("removing...", req.params.id)
        GroceryItem.findOne({
            _id:req.params.id
        }).remove(function(x) {
            console.log("removed.", x);
        });
    })
    .patch(function(req, res) {
        console.log("patching...", req.body._id)
        GroceryItem.findOne({
            _id:req.body._id
        }, function(error, doc) {
            for (var key in req.body) {
                doc[key] = req.body[key];
            }
            doc.save();
            res.status(200).send();
        })
    });
};