import express from "express";
import cors from "cors";
import {properties} from "./data/properties.js";

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("MiniHomeFinder API is running");
});

app.get("/api/properties", (req, res) => {
    res.json(properties);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
