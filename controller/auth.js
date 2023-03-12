import auth from "../model/auth.js";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await auth.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = await auth.create({
      username,
      email,
      password: passwordHash,
    });

    const accessToken = Jwt.sign(
      { id: newUser._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    res.status(201).json({
      status: true,
      newUser,
      accessToken,
      msg: "User created successfully",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await auth.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Incorrect password" });
    }

    const accessToken = Jwt.sign(
      { id: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      status: true,
      user,
      accessToken,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export { register, login };
