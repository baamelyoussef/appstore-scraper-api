// index.js
const express = require('express');
const store = require('app-store-scraper');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('🎉 App Store Scraper API is running');
});

// GET /search
app.get('/search', async (req, res) => {
  try {
    const { term, num, page, country, lang } = req.query;
    const result = await store.search({
      term,
      num: parseInt(num) || 10,
      page: parseInt(page) || 1,
      country: country || 'us',
      lang: lang || 'en-us'
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

// GET /app
app.get('/app', async (req, res) => {
  try {
    const { id, appId, ratings, country, lang } = req.query;
    const result = await store.app({
      id: id ? parseInt(id) : undefined,
      appId,
      ratings: ratings === 'true',
      country: country || 'us',
      lang: lang || undefined
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

// GET /developer
app.get('/developer', async (req, res) => {
  try {
    const { devId, country, lang } = req.query;
    const result = await store.developer({
      devId,
      country: country || 'us',
      lang: lang || undefined
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

// GET /suggest
app.get('/suggest', async (req, res) => {
  try {
    const { term } = req.query;
    const result = await store.suggest({ term });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

// GET /reviews
app.get('/reviews', async (req, res) => {
  try {
    const { id, appId, country, sort, page } = req.query;
    const result = await store.reviews({
      id: id ? parseInt(id) : undefined,
      appId,
      page: parseInt(page) || 1,
      sort: store.sort[sort?.toUpperCase()] || store.sort.RECENT,
      country: country || 'us'
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

// GET /ratings
app.get('/ratings', async (req, res) => {
  try {
    const { id, appId, country } = req.query;
    const result = await store.ratings({
      id: id ? parseInt(id) : undefined,
      appId,
      country: country || 'us'
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

// GET /similar
app.get('/similar', async (req, res) => {
  try {
    const { id, appId } = req.query;
    const result = await store.similar({
      id: id ? parseInt(id) : undefined,
      appId
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

// GET /versionHistory
app.get('/versionHistory', async (req, res) => {
  try {
    const { id } = req.query;
    const result = await store.versionHistory({
      id: parseInt(id)
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

// GET /privacy
app.get('/privacy', async (req, res) => {
  try {
    const { id } = req.query;
    const result = await store.privacy({ id: parseInt(id) });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

// GET /list
app.get('/list', async (req, res) => {
  try {
    const {
      collection = 'TOP_FREE_IOS',
      category,
      country = 'us',
      lang,
      num,
      fullDetail
    } = req.query;

    const result = await store.list({
      collection: store.collection[collection],
      category: category ? store.category[category] : undefined,
      country,
      lang,
      num: parseInt(num) || 10,
      fullDetail: fullDetail === 'true'
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running`);
});