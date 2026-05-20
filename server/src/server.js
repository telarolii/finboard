import app from "./app.js";
import dotenv from "dotenv";

const PORT = 3000;

const startServer = async () => {
  // It will wait for the database to load before starting the server

  app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
  });
};

startServer();
