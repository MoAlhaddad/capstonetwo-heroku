const express = require("express");
const router = express.Router();
const { getJobs, setJob, updateJob, saveJob, searchJob, deleteJob, savedJobs } = require('../controllers/jobController')

const { protect } = require('../middleware/authMiddlware')

router.get("/", protect, getJobs);

router.get("/save", protect, savedJobs);

router.post("/", protect, setJob);

router.put("/:id", protect, updateJob);

router.delete("/:id", protect, deleteJob);

router.post("/save", protect, saveJob);

router.post("/search", protect, searchJob);

module.exports = router;