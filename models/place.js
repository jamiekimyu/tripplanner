var Sequelize = require('sequelize');
var db = require('./_db');

var Place = db.define('place', {
    address: {
        type: Sequelize.STRING,
        allowNull: false      
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull:false
    },
    phone: {
        type: Sequelize.STRING,
    },
    location: {
        //(lat, lon float array)
        type: Sequelize.ARRAY(Sequelize.FLOAT)
        //ask how to constrain array length
    } 
})

module.exports = Place;