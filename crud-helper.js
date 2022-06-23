// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
// const User = require('./models/user');
const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');
Item.create({
    
})

// User.create(name: whatever)
Item.create({type: "food", price: 5})
Item.create({type: "cleaner", price: 10})
Item.create({type: "cat food", price: 3})

// Local variables will come in handy for holding retrieved documents
// let user, item, category, order;
// let users, items, categories, orders;

