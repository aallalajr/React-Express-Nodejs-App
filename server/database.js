var mongoose = require('mongoose');
var GroceryItem = require('./models/GroceryItem.js');

mongoose.connect('mongodb://Localhost/grocery', function() {
    console.log("connected to db");
        
    GroceryItem.find(function(err, doc)  {
    
        // mongoose.connection.db.dropDatabase();     
    
        if(!doc) {
            var items = [{
                name:"Ice Cream"
            },{
                name:"Waffles"
            },{
                name:"Candy",
                purchased:true
            },{
                name:"Snarks"
            }];
            
            items.forEach(function(item) {
                new GroceryItem(item).save();
            })
        }
    })
});