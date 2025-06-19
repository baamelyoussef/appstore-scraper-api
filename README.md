# 📱 App Store Scraper API

An Express.js REST API wrapper for the [app-store-scraper](https://github.com/facundoolano/app-store-scraper) package. Easily retrieve data like top charts, search results, reviews, ratings, similar apps, and more from the Apple App Store.

---

## 🚀 Features

* 🔍 Search apps by name
* 📄 Get app details by ID or bundle ID
* 🧑‍💻 Get apps by developer
* 💬 Get reviews and ratings
* 📈 Get top charts (free, paid, iPad, etc.)
* 🔁 Get similar apps
* 🧠 Search suggestions (autocomplete)
* 📜 View privacy details and version history

---

## 📦 Installation

```bash
npm install
```

---

## ▶️ Run the Server

```bash
node index.js
```

---

## 🌐 Available API Routes

### `GET /search`

Search the App Store for apps.

**Query Parameters:**

* `term` (required): Search term
* `num`: Number of results (default: 10)
* `page`: Page number (default: 1)
* `country`: Storefront (default: `us`)
* `lang`: Language (default: `en-us`)

### `GET /app`

Get details about an app.

**Query Parameters:**

* `id`: iTunes track ID (number)
* `appId`: App bundle ID (string)
* `ratings`: `true` to include rating histogram
* `country`, `lang`

### `GET /developer`

List all apps by a developer.

**Query Parameters:**

* `devId`: Developer ID
* `country`, `lang`

### `GET /suggest`

Get autocomplete suggestions for a term.

**Query Parameters:**

* `term`: Query string

### `GET /reviews`

Get user reviews for an app.

**Query Parameters:**

* `id` or `appId`
* `country`: Storefront (default: `us`)
* `page`: Review page number
* `sort`: `RECENT` or `HELPFUL`

### `GET /ratings`

Get ratings and histogram.

**Query Parameters:**

* `id` or `appId`
* `country`

### `GET /similar`

Get similar/recommended apps.

**Query Parameters:**

* `id` or `appId`

### `GET /versionHistory`

View all version changelogs.

**Query Parameters:**

* `id`: App ID (number)

### `GET /privacy`

View privacy data collected by the app.

**Query Parameters:**

* `id`: App ID (number)

### `GET /list`

Retrieve curated collections from App Store (top charts).

**Query Parameters:**

* `collection`:

  * `TOP_FREE_IOS`
  * `TOP_PAID_IOS`
  * `TOP_GROSSING_IOS`
  * `TOP_FREE_IPAD`
  * `TOP_PAID_IPAD`
  * `TOP_GROSSING_IPAD`
* `category` (optional):

  * `BOOKS`
  * `BUSINESS`
  * `CATALOGS`
  * `EDUCATION`
  * `ENTERTAINMENT`
  * `FINANCE`
  * `FOOD_AND_DRINK`
  * `GAMES_ACTION`, `GAMES_ADVENTURE`, `GAMES_ARCADE`, `GAMES_BOARD`, `GAMES_CARD`, `GAMES_CASINO`, `GAMES_DICE`, `GAMES_EDUCATIONAL`, `GAMES_FAMILY`, `GAMES_MUSIC`, `GAMES_PUZZLE`, `GAMES_RACING`, `GAMES_ROLE_PLAYING`, `GAMES_SIMULATION`, `GAMES_SPORTS`, `GAMES_STRATEGY`, `GAMES_TRIVIA`, `GAMES_WORD`
  * `HEALTH_AND_FITNESS`
  * `LIFESTYLE`
  * `MAGAZINES_AND_NEWSPAPERS`
  * `MEDICAL`
  * `MUSIC`
  * `NAVIGATION`
  * `NEWS`
  * `PHOTO_AND_VIDEO`
  * `PRODUCTIVITY`
  * `REFERENCE`
  * `SHOPPING`
  * `SOCIAL_NETWORKING`
  * `SPORTS`
  * `STICKERS`
  * `TRAVEL`
  * `UTILITIES`
  * `WEATHER`
* `country`, `lang`
* `num`: Number of apps to fetch (max: 200)
* `fullDetail`: `true` to enrich each result with full app data

---

## 📘 Example Requests

* `/search?term=camera`
* `/app?id=553834731`
* `/developer?devId=284882218`
* `/list?collection=TOP_FREE_IPAD&category=GAMES_ACTION&num=5`
* `/reviews?id=553834731&sort=HELPFUL&page=2`

---

## ☁️ Deploy for Free

You can deploy this on:

* [Railway](https://railway.app/)
* [Render](https://render.com/)
* [Fly.io](https://fly.io/)
* [Vercel + Express adapter](https://vercel.com)

> Just add `index.js` and `package.json`, link the repo, and go live 🚀

---

## 🛠 Dependencies

* `express`
* `app-store-scraper`

---

## 📄 License

MIT
