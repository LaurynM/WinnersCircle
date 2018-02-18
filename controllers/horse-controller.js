var express = require("express");
var horse = require("../models/horse.js");

var router = express.Router();

router.get("/", function(req, res) {
    horse.all(function(data) {
      var hbsObject = {
        horses: data
      };
      res.render("index", hbsObject);
    });
  });
  
router.post("/api/horses", function(req, res) {
    horse.create(req.body.horseName, function(result) {
      res.json({ id: result.insertId });
    });
});
  
router.put("/api/horses/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    horse.update({
      racing: req.body.racing,
      id: req.body.id
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

module.exports = router;