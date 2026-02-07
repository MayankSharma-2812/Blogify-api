import { Router } from "express";

const router = Router();

// GET /api/v1/posts
router.get("/", (req, res) => {
  res.json({
    message: "All blog posts",
  });
});

export default router;
