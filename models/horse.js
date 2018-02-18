// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var horse = {
  all: function(cb) {
    orm.selectAll("horses", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(name, cb) {
    orm.insertOne("horses", name, function(res) {
      cb(res);
    });
  },
  update: function(horseData, condition, cb) {
    orm.updateOne("horses", horseData, condition, function(res) {
      cb(res);
    });
  }
};


module.exports = horse;
