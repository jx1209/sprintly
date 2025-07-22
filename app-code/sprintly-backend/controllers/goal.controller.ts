import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
/**
 * Controller to handle goal-related operations.
 * This includes creating a new goal for a sprint.
 */

export const createGoal = async (req, res) => {
  const { sprintId, title, description, status, priority } = req.body;

  try {
    const goal = await prisma.goal.create({
      data: {
        sprintId,
        title,
        description,
        status, // e.g., 'PENDING'
        priority,
      },
    });
    res.json(goal);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create goal' });
  }
};
