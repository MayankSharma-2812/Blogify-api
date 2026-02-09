import { Router } from "express"
import * as postController from "../controllers/posts.controller.js"

const router = Router()

router.get("/", postController.getAllPosts)
router.get("/:postId", postController.getPostById)

export default router
