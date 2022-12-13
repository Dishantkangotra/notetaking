const router = require("express").Router();
const express = require("express");
const MyNotes = require("../model/noteModel");

router.route('/')
.get((req, res)=>{
    Notes.find({}, (err,notes)=>{
if(err) throw err;
console.log(notes);
    
    }
    )
})


.post((req, res)=>{
    const title= req.body.title;
    const content = req.body.content;

    const myNote= new Notes({
       title,
       content
    })
    myNote.save();
})

module.exports = router;