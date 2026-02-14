/**
 * Express router for handling comment-related API endpoints
 * @type {Object}
 */

/**
 * Retrieves all comments from the database
 * @async
 * @route GET /
 * @returns {Promise<void>} JSON array of all comments
 * @throws {Object} 500 - Failed to fetch comments
 */

/**
 * Deletes a specific comment by its ID
 * @async
 * @route DELETE /:id
 * @param {string} req.params.id - The comment ID to delete
 * @returns {Promise<void>} JSON object with success message
 * @throws {Object} 404 - Comment not found
 * @throws {Object} 500 - Failed to delete comment
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});
router.delete("/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
});
