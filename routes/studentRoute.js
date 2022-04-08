var express = require("express");
var router = express.Router();
var StudentModel = require("../models/Student");

router.post("/add_student", function (req, res) {
  var newStudent = new StudentModel(req.body);

  newStudent.save(function (error, data) {
    if (error) {
      console.log(error);
    } else {
      res.send("Data inseré avec succes ! ");
    }
  });
});

router.get("/get_students/:nom", (req, res) => {

  StudentModel.find({ Name: req.params.nom }, function (error, data) {
   

    if (error) {
      console.log(error);
    } else {
      res.send(data);
    }
  });
});

router.get("/get_students", (req, res) => {
  StudentModel.find(function (error, data) {
 
    if (error) {
      console.log(error);
    } else {
      res.send(data);
    }
  });
});

router.put("/update_student/:id", function (req, res) {
  StudentModel.findOneAndUpdate(
    { StudentId: req.params.id },
    { $set: { Email: req.body.Email } },
    { new: true }, 

    function (err, doc) {
      if (err) {
        console.log("un probleme durant la mise a jour");
      }

      res.send(doc);
    }
  );
});

router.delete("/delete_student/:id", function (req, res) {
  StudentModel.findOneAndRemove({ _id: req.params.id }, (err, doc) => {
    if (err) {
      console.log("probleme suppresion ");
    }

    res.send("supprimé avec succes ! ");
  });
});

module.exports = router;
