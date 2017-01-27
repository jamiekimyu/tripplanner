var Sequelize = require('sequelize');
var db = require('./_db');

var Restaurant = db.define('restaurant',{
    name: {
        type: Sequelize.STRING,
        allowNull: false      
    },
    cuisine: {
        //(comma delimited string list)
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
            max: 5,
            min: 1
        }
    }
});

module.exports = Restaurant;

