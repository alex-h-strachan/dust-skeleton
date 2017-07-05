import express from 'express';
import path from 'path';
import render from './utils/render';
import './views/partials';
import index from './views/index.dust';
import error500 from './views/error500.dust';

const router = express.Router();

router.get('/styles.css', (req, res) => {
  res.sendFile(path.resolve('./dist/styles.css'));
});

router.get('/', async (req, res) => {
  try {
    const data = { // await some backend call
      name: 'User',
    };

    const html = await render(index, data);
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(html);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    const errPage = await render(error500, {});

    res.writeHead(500, { 'content-type': 'text/html' });
    res.end(errPage);
  }
});

export default router;
