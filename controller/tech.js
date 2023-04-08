import tech from "../model/tech.js";
import { v2 as cloudinary } from "cloudinary";

const getTech = async (req, res) => {
  try {
    const techData = await tech.find();
    res.status(200).json(techData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

const createTech = async (req, res) => {
  try {
    const { name, icon } = req.body;

    const photo = await cloudinary.uploader.upload(icon);

    const newTech = await tech.create({
      name,
      icon: photo.url,
    });

    res.status(201).json(newTech);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export { getTech, createTech };
