import express, { Application, Request, Response } from "express";
import cors from "cors";
import GlobalErrorHandler from "./app/middleware/globalErrorHandler";
import NotFound from "./app/middleware/notFound";
import router from "./app/router";

const app: Application = express();

//perser
app.use(express.json());
app.use(cors());

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
    success: true,
    message: "QuirkSphere server is running",
    timestamp: new Date().toISOString(),
  });
});

// Global error handler
app.use(GlobalErrorHandler);

// not found
app.use(NotFound);

export default app;
