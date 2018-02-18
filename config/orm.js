var connection = require("./connection.js");

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
}

var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableInput], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    insertOne: function(tableInput, val, cb) {
      var queryString = "INSERT INTO ?? (horseName, racing) VALUES (?, false);";
      connection.query(queryString, [tableInput, val], function(err, result) {
        //   console.log("Error adding horse:" + err);
        if (err) throw err;
        cb(result);
      });
    },
    updateOne: function(tableInput, obj, condition, cb) {
      var objSQL = obj.racing;
      var idSQL = obj.id;
      var queryString = "UPDATE ?? SET racing = ? WHERE id = ?;";
    //   console.log(Boolean('false'));
    //   console.log(Number(idSQL));
      connection.query(queryString, [tableInput, objSQL, idSQL], function(err, result) {

    //   var queryString = `UPDATE ${tableInput} SET racing = ${objSQL} WHERE ${condition};`;
    //   connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    }
  };

module.exports = orm;