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
import add_icon_white from "./assests/add_icon_white.png";
import removeicon from "./assests/removeicon.png";
import add_icon_green from "./assests/add_icon_green.png";
import remove_icon_red from "./assests/remove_icon_red.png";
import add_icon from "./assests/add_icon.png";
import Bakery_one from "./assests/Bakery_one.jpg";
import bakery_two from "./assests/bakery_two.png";
import bakery_three from "./assests/bakery_three.jpg";
import bakery_four from "./assests/bakery_four.jpg";
import bakery_five from "./assests/bakery_five.jpg";
import bakery_six from "./assests/bakery_six.jpg";
import california_pizza from "./assests/california_pizza.webp";
import chicago_pizza from "./assests/chicago_pizza.webp";
import greek_pizza from "./assests/greek_pizza.webp";
import new_york_style_pizza from "./assests/new_york_style_pizza.jpg";
import neapolitian_pizza from "./assests/neapolitan_pizza.jpg";
import chicken_roll from "./assests/Chicken_roll.png";
import Paneer_roll from "./assests/Paneer_roll.png";
import veg_roll from "./assests/veg_roll.png";
import Mutton_roll from "./assests/Mutton_roll.png";
import malai_tikka_roll from "./assests/malai_tikka_roll.png";
import Roast_beef from "./assests/Roast_beef.jpg";
import Seafood_Sandwich from "./assests/Seafood_Sandwich.jpg";
import Egg_Sandwich from "./assests/Egg_Sandwich.jpg";
import Chicken_Sandwich from "./assests/Chicken_Sandwich.jpg";
import Turkey_burger from "./assests/Turkey_burger.jpg.webp";
import veg_khana_set from "./assests/veg_khana_set.jpg";
import khanaset from "./assests/khanaset.jpg";
import mutton_khana from "./assests/mutton_khana.jpg";

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
  add_icon_white,
  removeicon,
  add_icon_green,
  remove_icon_red,
  add_icon,
  Bakery_one,
  bakery_two,
  bakery_three,
  bakery_four,
  bakery_five,
  bakery_six,
  california_pizza,
  chicago_pizza,
  greek_pizza,
  new_york_style_pizza,
  neapolitian_pizza,
  chicken_roll,
  Paneer_roll,
  veg_roll,
  Mutton_roll,
  malai_tikka_roll,
  Roast_beef,
  Seafood_Sandwich,
  Egg_Sandwich,
  Chicken_Sandwich,
  Turkey_burger,
  veg_khana_set,
  khanaset,
  mutton_khana,
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
  { menu_name: "bakery", menu_image: Pastries },
  { menu_name: "Naran Momo", menu_image: naranmomo },
];

export const food_list = [
  {
    _id: "1",
    name: "Pizza",
    image: assests.one, // Corrected to use `assests`
    price: "400",
    description: "Sweet and cheesy pizza with a crispy crust.",
    category: "pizza",
  },
  {
    _id: "2",
    name: "Momo",
    image: assests.nine,
    price: "200",
    description: "Delicious dumplings filled with juicy meat.",
    category: "momo",
  },
  {
    _id: "3",
    name: "Jhol Momo",
    image: ten,
    price: "250",
    description: "Spicy and tangy momo in a flavorful broth.",
    category: "momo",
  },
  {
    _id: "4",
    name: "Roll",
    image: four,
    price: "130",
    description: "A savory roll with fresh ingredients.",
    category: "pizza",
  },
  {
    _id: "5",
    name: "Burger",
    image: five,
    price: "220",
    description: "Juicy burger with fresh vegetables and sauce.",
    category: "non-veg",
  },
  {
    _id: "6",
    name: "Steak",
    image: six,
    price: "300",
    description: "Tender and perfectly grilled steak.",
    category: "non-veg",
  },
  {
    _id: "7",
    name: "Fry Momo",
    image: fifteen,
    price: "190",
    description: "Crispy fried momos served with chutney.",
    category: "momo",
  },
  {
    _id: "8",
    name: "Khana set",
    image: eleven,
    price: "650",
    description: "A wholesome meal with rice, lentils, and curry.",
    category: "non-veg",
  },
  {
    _id: "9",
    name: "Sandwich",
    image: sandwich,
    price: "400",
    description: "A hearty sandwich with fresh fillings.",
    category: "veg",
  },
  {
    _id: "10",
    name: "MonsterMeal",
    image: MonsterMeal,
    price: "550",
    description: "A combo meal with everything you crave.",
    category: "non-veg",
  },
  {
    _id: "11",
    name: "Pastries",
    image: Pastries,
    price: "110",
    description: "Sweet pastries with delightful flavors.",
    category: "veg",
  },
  {
    _id: "12",
    name: "Naran Momo",
    image: naranmomo,
    price: "185",
    description: "Special momos made with unique spices.",
    category: "momo",
  },

  {
    _id: "13",
    name: "Bakery",
    image: Bakery_one,
    price: "150",
    description: "Freshly baked bread with a soft texture.",
    category: "bakery",
  },
  {
    _id: "14",
    name: "Bakery Two",
    image: bakery_two,
    price: "200",
    description: "Delicious pastries with rich flavors.",
    category: "bakery",
  },
  {
    _id: "15",
    name: "Bakery Three",
    image: bakery_three,
    price: "120",
    description: "Savory buns with a variety of fillings.",
    category: "bakery",
  },
  {
    _id: "16",
    name: "Bakery Four",
    image: bakery_four,
    price: "180",
    description: "Sweet muffins perfect for a quick snack.",
    category: "bakery",
  },
  {
    _id: "17",
    name: "Bakery Five",
    image: bakery_five,
    price: "250",
    description: "Rich and creamy cakes for special occasions.",
    category: "bakery",
  },
  {
    _id: "18",
    name: "Bakery Six",
    image: bakery_six,
    price: "300",
    description: "Exquisite pastries with artisan designs.",
    category: "bakery",
  },
  {
    _id: "19",
    name: "California Pizza",
    image: california_pizza,
    price: "400",
    description: "Thin crust pizza with fresh Californian toppings.",
    category: "pizza",
  },
  {
    _id: "20",
    name: "Chicago Pizza",
    image: chicago_pizza,
    price: "500",
    description: "Deep-dish pizza with a hearty filling.",
    category: "pizza",
  },
  {
    _id: "21",
    name: "Greek Pizza",
    image: greek_pizza,
    price: "450",
    description: "Mediterranean-inspired pizza with feta and olives.",
    category: "pizza",
  },
  {
    _id: "22",
    name: "New York Style Pizza",
    image: new_york_style_pizza,
    price: "350",
    description: "Classic New York pizza with a foldable crust.",
    category: "pizza",
  },
  {
    _id: "23",
    name: "Neapolitan Pizza",
    image: neapolitian_pizza,
    price: "600",
    description: "Authentic Italian pizza with fresh ingredients.",
    category: "pizza",
  },
  {
    _id: "24",
    name: "Chicken Roll",
    image: chicken_roll,
    price: "150",
    description: "Juicy chicken wrapped in a soft roll.",
    category: "roll",
  },
  {
    _id: "25",
    name: "Paneer Roll",
    image: Paneer_roll,
    price: "120",
    description: "Soft paneer with flavorful spices wrapped in a roll.",
    category: "roll",
  },
  {
    _id: "26",
    name: "Veg Roll",
    image: veg_roll,
    price: "100",
    description: "Healthy and tasty vegetables in a crispy roll.",
    category: "roll",
  },
  {
    _id: "27",
    name: "Mutton Roll",
    image: Mutton_roll,
    price: "200",
    description: "Tender mutton wrapped in a flaky roll.",
    category: "roll",
  },
  {
    _id: "28",
    name: "Malai Tikka Roll",
    image: malai_tikka_roll,
    price: "180",
    description: "Creamy malai tikka wrapped in a delicious roll.",
    category: "roll",
  },
  {
    _id: "29",
    name: "Roast Beef Sandwich",
    image: Roast_beef,
    price: "350",
    description: "Perfectly cooked roast beef with savory flavors.",
    category: "Sandwich",
  },
  {
    _id: "30",
    name: "Seafood Sandwich",
    image: Seafood_Sandwich,
    price: "220",
    description: "A delightful sandwich with fresh seafood fillings.",
    category: "Sandwich",
  },
  {
    _id: "31",
    name: "Egg Sandwich",
    image: Egg_Sandwich,
    price: "180",
    description: "A simple yet tasty sandwich with egg fillings.",
    category: "Sandwich",
  },
  {
    _id: "32",
    name: "Chicken Sandwich",
    image: Chicken_Sandwich,
    price: "250",
    description: "Juicy chicken sandwich with fresh veggies.",
    category: "non-veg",
  },
  {
    _id: "33",
    name: "Turkey Burger",
    image: Turkey_burger,
    price: "300",
    description: "Delicious turkey patty in a soft bun.",
    category: "Burger",
  },
  {
    _id: "34",
    name: "Veg Khana Set",
    image: veg_khana_set,
    price: "500",
    description: "A wholesome vegetarian meal set.",
    category: "Khana set",
  },
  {
    _id: "35",
    name: "Khana Set",
    image: khanaset,
    price: "650",
    description: "A complete meal with rice, curry, and lentils.",
    category: "Khana set",
  },
  {
    _id: "36",
    name: "Mutton Khana",
    image: mutton_khana,
    price: "750",
    description: "A special meal set with tender mutton curry.",
    category: "Khana set",
  },
];
