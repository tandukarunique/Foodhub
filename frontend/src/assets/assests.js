import React from "react";
import one from "./assests/one.png";
import four from "./assests/four.png";
import basketicon from "./assests/basketicon.png";
import five from "./assests/five.jpg";
import six from "./assests/six.png";
import seven from "./assests/seven.jpg";
import eight from "./assests/eight.jpg";
import nine from "./assests/nine.png";
import ten from "./assests/ten.png";
import eleven from "./assests/eleven.png";
import twelve from "./assests/twelve.png";
import thirteen from "./assests/thirteen.png";
import fourteen from "./assests/fourteen.jpg";
import fifteen from "./assests/fifteen.jpg";
import header from "./assests/header.jpg";
import logo from "./assests/logo.png";
import sandwich from "./assests/sandwich.png";
import naranmomo from "./assests/naranmomo.jpg";
import MonsterMeal from "./assests/MonsterMeal.jpg";
import Pastries from "./assests/Pastries.jpg";

export const assests = {
  basketicon,
  one,
  eight,
  four,
  five,
  six,
  seven,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fifteen,
  header,
  logo,
  sandwich,
  naranmomo,
};

export const menu_list = [
  { menu_name: "Pizza", menu_image: one },
  { menu_name: "Momo", menu_image: nine },
  { menu_name: "Jhol Momo", menu_image: ten },
  { menu_name: "Roll", menu_image: four },
  { menu_name: "Burger", menu_image: five },
  { menu_name: "Steak", menu_image: six },
  { menu_name: "Fry Momo", menu_image: fifteen },
  { menu_name: "Khana set", menu_image: eleven },
  { menu_name: "Sandwich", menu_image: sandwich },
  { menu_name: "MonsterMeal", menu_image: MonsterMeal },
  { menu_name: "Pastries", menu_image: Pastries },
  { menu_name: "Naran Momo", menu_image: naranmomo },
];

export const food_list = [
  {
    _id: "1",
    name: "Pizza",
    image: assests.one, // Corrected to use `assests`
    price: "400",
    description: "Sweet and cheesy pizza with a crispy crust.",
  },
  {
    _id: "2",
    name: "Momo",
    image: assests.nine,
    price: "200",
    description: "Delicious dumplings filled with juicy meat.",
  },
  {
    _id: "3",
    name: "Jhol Momo",
    image: ten,
    price: "250",
    description: "Spicy and tangy momo in a flavorful broth.",
  },
  {
    _id: "4",
    name: "Roll",
    image: four,
    price: "130",
    description: "A savory roll with fresh ingredients.",
  },
  {
    _id: "5",
    name: "Burger",
    image: five,
    price: "220",
    description: "Juicy burger with fresh vegetables and sauce.",
  },
  {
    _id: "6",
    name: "Steak",
    image: six,
    price: "300",
    description: "Tender and perfectly grilled steak.",
  },
  {
    _id: "7",
    name: "Fry Momo",
    image: fifteen,
    price: "190",
    description: "Crispy fried momos served with chutney.",
  },
  {
    _id: "8",
    name: "Khana set",
    image: eleven,
    price: "650",
    description: "A wholesome meal with rice, lentils, and curry.",
  },
  {
    _id: "9",
    name: "Sandwich",
    image: sandwich,
    price: "400",
    description: "A hearty sandwich with fresh fillings.",
  },
  {
    _id: "10",
    name: "MonsterMeal",
    image: MonsterMeal,
    price: "550",
    description: "A combo meal with everything you crave.",
  },
  {
    _id: "11",
    name: "Pastries",
    image: Pastries,
    price: "110",
    description: "Sweet pastries with delightful flavors.",
  },
  {
    _id: "12",
    name: "Naran Momo",
    image: naranmomo,
    price: "185",
    description: "Special momos made with unique spices.",
  },
];
