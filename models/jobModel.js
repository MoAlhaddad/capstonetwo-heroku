const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    title: { type: String, required: [true, "Please add a job title"] },
    location: { type: String, required: true },
    minSalary: { type: Number, required: true },
    maxSalary: { type: Number, required: true },
    description: { type: String, required: true },
    company: { type: String, required: true },
    adzunaId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);