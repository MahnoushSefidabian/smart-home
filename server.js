const express = require("express");
const cors = require("cors");
const http = require("http");
const fs = require("fs");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

let sensorData = {
  temperature: 25,  // مقدار پیش‌فرض
  heater: 0,        // 0 = خاموش، 1 = روشن
  light: 0,         // 0 = خاموش، 1 = روشن
  buzzer: 0,         // 0 = خاموش، 1 = روشن
  lightSensor:1
};

//  خواندن مقدار سنسورها از فایل JSON
const filePath = "sensorData.json";
if (fs.existsSync(filePath)) {
  const fileContent = fs.readFileSync(filePath, "utf8");
  sensorData = JSON.parse(fileContent);
}

//  بررسی تغییرات در فایل JSON و ارسال تغییرات به کلاینت‌ها
fs.watchFile(filePath, { interval: 500 }, () => {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const newData = JSON.parse(fileContent);

  // فقط در صورت تغییر، داده‌ها را بفرست
  if (JSON.stringify(sensorData) !== JSON.stringify(newData)) {
    sensorData = newData;
    io.emit("sensorUpdate", sensorData);
  }
});

//  ارسال داده‌ها هر ۱ ثانیه
setInterval(() => {
  io.emit("sensorUpdate", sensorData);
}, 1000);

// API دریافت داده‌های سنسور
app.get("/sensor", (req, res) => {
  res.json(sensorData);
});

//  API کنترل سخت‌افزار (روشن/خاموش
app.post("/control", (req, res) => {
  const { light, buzzer, heater } = req.body;
  if (light !== undefined) sensorData.light = light ? 1 : 0;
  if (buzzer !== undefined) sensorData.buzzer = buzzer ? 1 : 0;
  if (heater !== undefined) sensorData.heater = heater ? 1 : 0;

  // ذخیره مقدارهای جدید در فایل JSON
  fs.writeFileSync(filePath, JSON.stringify(sensorData, null, 2), "utf8");

  io.emit("sensorUpdate", sensorData);
  res.json({ success: true, message: "Device state updated!", sensorData });
});
app.post("/save", (req, res) => {
  const { temperature,lightSensor,buzzer,light, heater } = req.body;
  if (light !== undefined) sensorData.light = light ? 1 : 0;
  if (buzzer !== undefined) sensorData.buzzer = buzzer ? 1 : 0;
  if (heater !== undefined) sensorData.heater = heater ? 1 : 0;

  // ذخیره مقدارهای جدید در فایل JSON
  fs.writeFileSync(filePath, JSON.stringify(sensorData, null, 2), "utf8");

  io.emit("sensorUpdate", sensorData);
  res.json({ success: true, message: "Device state updated!", sensorData });
});
//  راه‌اندازی سرور
const PORT = 5050;
server.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
