import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  // It will wait for the database to load before starting the server

  app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
  });
};

startServer();
