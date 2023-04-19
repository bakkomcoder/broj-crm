import express from "express";

const PORT = 4000;

const app = express();

const handleListening = () =>
  console.log(`✅ Server listneing on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
