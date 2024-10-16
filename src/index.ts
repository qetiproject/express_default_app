import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import swaggerDocs from './swaggerOptions';
import exampleRouter from "./routes/example";

dotenv.config();

const app: Express = express();
const PORT: number = parseInt(process.env["PORT"] as string, 10) || 3000; 

app.use(express.json());


async function main() {
  // await connectToMongoDB();

  app.use(cors());

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

  app.use('/example', exampleRouter);

  app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
  });

}

export default main()