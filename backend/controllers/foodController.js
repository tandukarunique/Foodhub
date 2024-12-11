import foodModel from "../models/foodModel.js";
import fs from "fs";

//Add food item

const addFood = async (req, res) => {
  let image_filename = `${req.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,

    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

//All food list

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log("error");
    res.json({ success: false, message: "Error" });
  }
};

//remove food item
const removeFood = async (req,res) => {
try {
  const food = await foodModel.findById()
} catch (error) {
  
}

}

export { addFood, listFood ,removeFood};
