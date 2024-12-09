const express = require("express");
const router = express.Router();

let temperature = 22;
let windowStatus = "Закрыто";
let doorStatus = "Закрыто";

router.post("/api/toggle-light", (req, res) => {
  res.json({ status: "Свет включен/выключен" });
});

router.post("/api/set-temperature", (req, res) => {
  const { temperature: newTemperature } = req.body;
  temperature = newTemperature;
  res.json({ temperature });
});

router.post("/api/toggle-window", (req, res) => {
  windowStatus = windowStatus === "Открыто" ? "Закрыто" : "Открыто";
  res.json({ status: windowStatus });
});

router.post("/api/toggle-door", (req, res) => {
  doorStatus = doorStatus === "Открыто" ? "Закрыто" : "Открыто";
  res.json({ status: doorStatus });
});

module.exports = router;
