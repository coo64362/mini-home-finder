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

app.get("/api/properties/:id", (req,res) => {
    const propertyId = Number(req.params.id);

    const property = properties.find((property) => property.id === propertyId);

    if(!property) {
        return res.status(404).json({message: "Property not found"});
    }

    res.json(property);
});

app.post("/api/properties", (req, res) => {
    const newProperty = {
        id: properties.length + 1,
        ...req.body,
    };

    properties.push(newProperty);

    res.status(201).json(newProperty);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
