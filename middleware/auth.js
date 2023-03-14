import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.status(401).json({ msg: "No token" });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {

      if (err) return res.status(403).json({ msg: "Invalid token" });

      req.user = user;

      next();
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default auth;
