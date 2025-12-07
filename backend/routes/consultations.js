const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Consultation = require('../models/Consultation');

// @route   GET /api/consultations
// @desc    Get user's consultations
router.get('/', auth, async (req, res) => {
  try {
    const consultations = await Consultation.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(consultations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST /api/consultations
// @desc    Book a consultation
router.post('/', auth, async (req, res) => {
  const { date, time, notes } = req.body;

  try {
    const consultation = new Consultation({
      user: req.user.id,
      date,
      time,
      notes,
    });

    await consultation.save();
    res.json(consultation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   PUT /api/consultations/:id
// @desc    Update consultation status
router.put('/:id', auth, async (req, res) => {
  const { status } = req.body;

  try {
    let consultation = await Consultation.findById(req.params.id);

    if (!consultation) {
      return res.status(404).json({ message: 'Consultation not found' });
    }

    // Check user owns consultation
    if (consultation.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    consultation.status = status || consultation.status;
    await consultation.save();
    res.json(consultation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;