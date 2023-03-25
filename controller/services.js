import services from "../model/services.js";
import { v2 as cloudinary } from "cloudinary";

const getServices = async (req, res) => {
    try {
        const servicesData = await services.find();
        res.status(200).json(servicesData);
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
};


const createServices = async (req, res) => {
    try {
        const { title, icon} = req.body;

        const photo = await cloudinary.uploader.upload(icon);

        const newService = await services.create({
            title,
            icon: photo.url,
        });

        res.status(201).json(newService);
    }
    catch (error) {
        res.status(500).json({ msg: error.message });
    }    
};

export { getServices, createServices };