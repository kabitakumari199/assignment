const express = require("express");
const router = express.Router();
const Contacts = require('../model/Contacts');
const { Op } = require("sequelize");

router.post('/updateContact', (req,res)=>{
  console.log('ghghgh')
})

router.get('/deleteContact/:id', async(req,res)=>{
  const user = await Contacts.findAll({
    where: {
      id: req.params.id
    }
  });
 
  res.send(user);
});


module.exports = router;