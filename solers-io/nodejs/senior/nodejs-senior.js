const express = require("express");

const createServer = (pool, port = 3000) => {
  const app = express();

  app.get("/posts/:postId/comments", async (req, res) => {
    const { postId } = req.params;

    try {
      const client = await pool.connect();

      const postResult = await client.query(
        `SELECT 1 FROM posts WHERE id = $1`,
        [postId]
      );

      if (postResult.rowCount === 0) {
        res.sendStatus(404);
        return;
      }

      const commentsResult = await client.query(
        `SELECT c1.id AS parent_id, c1.text AS parent_text, c2.id AS child_id, c2.text AS child_text
         FROM comments AS c1
         LEFT JOIN comments AS c2 ON c2.parent_id = c1.id
         WHERE c1.post_id = $1
         ORDER BY c1.text, c2.text`,
        [postId]
      );

      const parentsList = [];
      let currentParent = null;

      for (const row of commentsResult.rows) {
        const { parent_id, parent_text, child_id, child_text } = row;

        if (parent_id !== currentParent) {
          let parentComment;
          if(child_id) {
            parentComment = { id: parent_id, text: parent_text, children: [] };
          } else {
            parentComment = { id: parent_id, text: parent_text };
          }
          parentsList.push(parentComment);
          currentParent = parent_id;
        }

        if (child_id) {
          const childComment = { id: child_id, text: child_text };
          parentsList[parentsList.length - 1].children.push(childComment);
        }
      }

      res.json({ data: parentsList });

      client.release();
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });

  const server = app.listen(port, () =>
    console.log(`[server] listening on port ${port}`)
  );
  return {
    app,
    close: () =>
      new Promise((resolve) => {
        server.close(() => {
          resolve();
          console.log("[server] closed");
        });
      }),
  };
};

module.exports = { createServer };