import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
// import { connectToMongoDB } from "./common/db";

dotenv.config();

const app: Express = express();
const PORT: number = parseInt(process.env["PORT"] as string, 10);

app.use(express.json());

async function main() {
  // await connectToMongoDB();

  app.use(cors());

  app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
  });

  app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
  });
}

main();