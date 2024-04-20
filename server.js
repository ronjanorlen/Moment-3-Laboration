// Inställningar
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

require("dotenv").config();

app.use(cors());
app.use(express.json());

// Anslut till MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Ansluten till MongoDB");
}).catch((error) => {
    console.log("Fel vid anslutning till databas: " + error);
})

// Schema för abetserfarenheter
const workSchema = new mongoose.Schema({
    companyname: {
        type: String, 
        required: [true, "Fyll i företagsnamn"]
    },
    jobtitle: {
        type: String,
        required: [true, "Fyll i jobbtitel"]
    },
    location: {
        type: String,
        required: [true, "Fyll i plats"]
    },
    startdate: {
        type: Date,
        required: [true, "Fyll i startdatum"]
    },
    enddate: {
        type: Date,
        required: [true, "Fyll i slutdatum"]
    },
    description: {
        type: String,
        required: [true, "Fyll i en beskrivning"]
    }
});

// Tabell med namn och vilket schema som ska användas
const Workexperience = mongoose.model("Workexperience", workSchema);


// Routes
app.get("/api", async (req, res) => {

    res.json({message: "Välkommen till mitt API för moment 3 i kursen DT207G"});
});

// Koppla till tabell Workexperience
app.get("/workexperiences", async (req, res) => {
    try {
        let job = await Workexperience.find({});

        // om det inte finns några arbetserfarenheter att hämta
        if (job.length === 0) {
            return res.status(404).json({ message: "Det finns inga arbetserfarenheter att hämta" });
        }

        return res.json(job);

    } catch (error) {
        return res.status(500).json(error);
    }
});

// POST-anrop
app.post("/workexperiences", async (req, res) => {
    try {
        let newJob = await Workexperience.create(req.body);

        // Returnera meddelande och jobb som lagts till
        return res.json({ message: "Arbetslivserfarenheten har lagts till", newJob });

    } catch (error) {
        return res.status(400).json(error);
    }
});

// PUT-anrop med id
app.put("/workexperiences/:id", async (req, res) => {

    // Hämta id och uppdatera
    try {
        const id = req.params.id;
        let updateJob = await Workexperience.findByIdAndUpdate(id, req.body, { new: true });

        if (!updateJob) {
            return res.status(404).json({ message: "Dokumentet hittades inte" });
        }
        // Returnera meddelande och jobb som uppdaterats
        return res.json({ message: "Arbetserfarenhet uppdaterad", updateJob });

    } catch (error) {
        return res.status(400).json(error);
    }
});

// DELETE-anrop
app.delete("/workexperiences/:id", async (req, res) => {
    try {
        const id = req.params.id;
        
        // Hitta id och ta bort
        const deleteJob = await Workexperience.findByIdAndDelete(id);

        if (!deleteJob) {
            return res.status(404).json({ message: "Dokumentet hittades inte" });
        }
        // Returnera meddelande och jobb som togs bort
        return res.json({ message: "Arbetserfarenhet har tagits bort", deleteJob });

    } catch (error) {
        return res.status(500).json(error);
    }
});

// Starta applikationen
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});