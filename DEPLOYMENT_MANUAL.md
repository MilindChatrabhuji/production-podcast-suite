# Production Deployment & Installation Manual
**Way #53 / Product #55: Production Podcast Repurposing Suite**

---

## 1. Prerequisites
- Node.js v18.0.0 or higher
- npm or pnpm
- Cloudflare Wrangler CLI (`npm install -g wrangler`)
- Optional: FFmpeg installed locally for video clip rendering

---

## 2. Local Setup & Testing
1. Clone the repository:
   ```bash
   git clone https://github.com/MilindChatrabhuji/production-podcast-suite.git
   cd production-podcast-suite
   ```

2. Test Pack 1 (Transcription & Repurposing Engine):
   ```bash
   cd engine/podcast_repurposing_engine
   npm install
   npm run build
   ```

3. Test Pack 2 (Edge Gateway):
   ```bash
   cd ../edge_repurposing_gateway
   npm install
   npx wrangler dev
   ```

4. Launch Showcase:
   Open `showcase/index.html` directly in any web browser.

---

## 3. Cloudflare Edge Deployment
Deploy the edge gateway microservice:
```bash
cd engine/edge_repurposing_gateway
npx wrangler deploy
```

---

## 4. D1 Database Initialization (Optional)
```bash
npx wrangler d1 create podcast-db
npx wrangler d1 execute podcast-db --file=../../monetization_podcast_kit/schema.sql
```
