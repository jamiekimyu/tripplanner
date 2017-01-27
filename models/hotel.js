var Sequelize = require('sequelize');
var db = require('./_db');

var Hotel = db.define('hotel',{
    name: {
        type: Sequelize.STRING,
        allowNull: false      
    },
    num_stars: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            max: 5,
            min: 1
        }
    },
    amenities: {
        //(string of comma delimited items)
        type: Sequelize.STRING,
        allowNull:false
    }
});

module.exports = Hotel;