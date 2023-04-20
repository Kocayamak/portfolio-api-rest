import projects from "../model/projects.js";
import { v2 as cloudinary } from "cloudinary";

const getProjects = async (req, res) => {
    try {
        const projectsData = await projects.find();
        res.status(200).json(projectsData);
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
};

const createProjects = async (req, res) => {
    try {
        const { name, description, image, source_code_link, tags } = req.body;
    
        const photo = await cloudinary.uploader.upload(image);
    
        const newProject = await projects.create({
        name,
        description,
        image: photo.url,
        source_code_link,
        tags,
        });
    
        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};   


export { getProjects, createProjects };