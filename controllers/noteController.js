const express = require("express");
const Notes = require("../models/Notes");

const createNote = async (req, res) => {
  try {
    const data = req.body;
    const newNote = new Notes(data);
    const response = await newNote.save();
    console.log("data save succesfully");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// create get method  to get data

const getNote = async (req, res) => {
  try {
    const data = await Notes.find();
    console.log("data fetching Succesfully");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server err" });
  }
};

// create PUT method to update data
const updateNote = async (req, res) => {
  try {
    const noteId = req.body.id;
    const updateNoteData = req.body;

    const response = await Notes.findByIdAndUpdate(noteId, updateNoteData, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      return res.status(400).json({ massage: "Note NOT found" });
    }
    console.log("Data Update Succesfully");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server err" });
  }
};

//create DELETE method to delete data
const deleteNote =async (req,res)=>{
    try {
        const noteId = req.body.id;
    const response = await Notes.findByIdAndDelete(noteId);

    if(!response){
        return res.status(400).json({massage : "Not not found"});
    }
    console.log("data delete successfully");
    res.status(200).json(response);
    } catch (error) {
         console.log(error);
    res.status(500).json({ error: "Internal server err" });
    }
    
}
module.exports = { createNote, getNote, updateNote, deleteNote };
