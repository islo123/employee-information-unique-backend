const mongoose = require("mongoose")


const EmployeeSchema = new mongoose.Schema({
    name: String, // Sanotan konelle että name on String eli sitä luetan niin kuin kirjoitaisin "" välissä
    team: String,
    firstDay: {
        type: Date,
        default: Date.now
    },
    lastDay: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("Employee", EmployeeSchema)