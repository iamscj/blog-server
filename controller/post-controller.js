import { pool } from "../database/db.js";
import { v4 as uuidv4 } from 'uuid';
export const createPost = async (request, response) => {
    const { content } = request.body;

    const post_id = uuidv4();

    try {
        const query = `
        INSERT INTO posts (post_id, content)
        VALUES ($1, $2)
        RETURNING *
      `;

        const values = [post_id, content];

        const result = await pool.query(query, values);
        response.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error creating post:', error);
        response.status(500).json({ error: 'Error creating post' });
    }
};

export const getPosts = async (request, response) => {
    console.log("/getPosts")
    try {
        const query = 'SELECT * FROM posts';
        const result = await pool.query(query);

        response.json(result.rows);
    } catch (error) {
        console.error('Error fetching posts:', error);
        response.status(500).json({ error: 'Error fetching posts' });
    }
};