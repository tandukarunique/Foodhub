import mongoose, { connect } from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://uniquetandukar:hesoyamamomhrer@cluster0.okuaj.mongodb.net/food-hub"
    )
    .then(() => console.log("DB connected"));
};
