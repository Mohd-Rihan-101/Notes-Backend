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

module.exports = {createNote};
