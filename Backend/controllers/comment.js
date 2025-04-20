const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// POST /comment
exports.create = async (req, res) => {
    try {
      const { content, createdAt } = req.body;
  
      if (!content || content.trim() === "") {
        return res.status(400).json({ error: "Content is required." });
      }
  
      // แปลงวันที่จาก 'YYYY-MM-DD' เป็น Date
      const date = createdAt ? new Date(createdAt) : undefined;
  
      const comment = await prisma.comment.create({
        data: {
          content,
          createdAt: date,
        },
      });
  
      res.status(201).json(comment);
    } catch (err) {
      console.error("Create comment error:", err);
      res.status(500).json({ error: "Something went wrong.", details: err.message });
    }
  };
  
  
// GET /comment
exports.list = async (req, res) => {
  try {
    const comments = await prisma.comment.findMany({
      orderBy: { id: 'desc' },
    });
    res.status(200).json(comments);
  } catch (err) {
    console.error("List comment error:", err);
    res.status(500).json({ error: "Something went wrong." });
  }
};
