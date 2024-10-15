import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToMongoDB } from "./common/db";

dotenv.config();
const app = express();
const PORT: number = parseInt(process.env["PORT"] as string, 10);

if (!process.env["PORT"]) {
  process.exit();
}

app.use(express.json());

async function main() {
  await connectToMongoDB();

  app.use(cors());

  app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
  });

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

main();