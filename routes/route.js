import express from "express";
import { createPost, getPosts } from "../controller/post-controller.js";
const router = express.Router();
router.get("/hello", (req, res) => {
    res.json("hi")
})
router.post("/create-new", createPost);
router.get("/get-posts", getPosts)
router.get('*', function (req, res) {
    res.status(404).send('Not found');
});
export default router;
