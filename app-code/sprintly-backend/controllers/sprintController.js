
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createSprint = async (req, res) => {
  const { userId, title, startDate, endDate } = req.body;

  try {
    const sprint = await prisma.sprint.create({
      data: {
        userId,
        title,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      },
    });
    res.status(201).json(sprint);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create sprint' });
  }
};

exports.getSprintsByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const sprints = await prisma.sprint.findMany({
      where: { userId },
      orderBy: { startDate: 'desc' },
    });
    res.json(sprints);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch sprints' });
  }
};

exports.getSprintById = async (req, res) => {
  const { id } = req.params;

  try {
    const sprint = await prisma.sprint.findUnique({
      where: { id },
    });

    if (!sprint) {
      return res.status(404).json({ error: 'Sprint not found' });
    }

    res.json(sprint);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch sprint' });
  }
};
