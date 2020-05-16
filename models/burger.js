var Sequelize = require("sequalize");
var sequelize = require("../config/connection");

var burger = sequelize.define("burger", {
  burgerName: Sequelize.STRING,
  devoured: Sequelize.BOOLEAN
});




module.exports = burger;