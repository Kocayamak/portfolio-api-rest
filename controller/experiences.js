import experiences from "../model/experiences.js";
import { v2 as cloudinary } from "cloudinary";

const getExperiences = async (req, res) => {
    try {
        const experiencesData = await experiences.find();
        res.status(200).json(experiencesData);
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
};

const createExperiences = async (req, res) => {
  try {
    const { title, company_name, icon, iconBg, work_date, points } = req.body;

    const photo = await cloudinary.uploader.upload(icon);

    const newExperience = await experiences.create({
      title,
      company_name,
      icon: photo.url,
      iconBg,
      work_date,
      points,
    });

    res.status(201).json(newExperience);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


export { getExperiences, createExperiences };