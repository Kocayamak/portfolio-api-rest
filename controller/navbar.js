import navbarController from "../model/navbar.js";

const getNavbar = async (req, res) => {
  try {
    const navbar = await navbarController.find();
    res.status(200).json(navbar);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

const createNavbar = async (req, res) => {
  try {
    const { title, link } = req.body;
    const newNavbar = await navbarController.create({
      title,
      link,
    });
    res.status(201).json(newNavbar);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export { getNavbar, createNavbar };
