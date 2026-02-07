import express from "express";
import postsRouter from "./routes/posts.routes.js";

const app = express();

app.use("/api/v1/posts", postsRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
