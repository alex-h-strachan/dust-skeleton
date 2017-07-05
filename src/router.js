import express from 'express';

const router = express.Router();

router.get('/login', async (req, res) => {
  res.end('hello world');
});

router.get('/signup', async (req, res) => {
  res.end('hello world');
});

export default router;
