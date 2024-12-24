import foodModel from "../models/foodModel.js";
import fs from "fs";
import path from "path";

// Add food item
const addFood = async (req, res) => {
  const image_filename = req.filename || "default.jpg";

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.status(201).json({ success: true, message: "Food added" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        success: false,
        message: "Error adding food",
        error: error.message,
      });
  }
};

// List all food items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.status(200).json({ success: true, data: foods });
  } catch (error) {
    console.error("Error fetching food list:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "Error fetching food list",
        error: error.message,
      });
  }
};

// Remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);

    if (!food) {
      return res
        .status(404)
        .json({ success: false, message: "Food not found" });
    }

    const imagePath = path.join("uploads", food.image);
    fs.unlink(imagePath, (err) => {
      if (err) console.error("Error deleting file:", err);
    });

    await foodModel.findByIdAndDelete(req.body.id);
    res.status(200).json({ success: true, message: "Food removed" });
  } catch (error) {
    console.error("Error removing food:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "Error removing food",
        error: error.message,
      });
  }
};

export { addFood, listFood, removeFood };
