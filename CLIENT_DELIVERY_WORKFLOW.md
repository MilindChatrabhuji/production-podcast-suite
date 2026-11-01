# Client Delivery & Retainer Execution Workflow
**Standard Operating Procedure for Podcast Repurposing Retainers**

---

## 1. Episode Ingestion (T-0 Hours)
1. Receive raw audio or video file from client via secure cloud folder.
2. Ingest transcript into `AudioTranscriptionParser` to scrub filler words and align speaker diarization.

---

## 2. Production & Repurposing (T-24 Hours)
1. Compile executive show notes and clickable chapter timestamps via `ShowNotesCompiler`.
2. Extract 3 vertical video clips (30s, 60s, 90s) with FFmpeg cue commands via `ClipHighlightExtractor`.
3. Synthesize 1,500-word SEO blog post with JSON-LD FAQ schema via `SeoArticleGenerator`.
4. Generate 7-tweet X thread, 10-slide LinkedIn carousel, and YouTube description via `SocialThreadGenerator`.

---

## 3. Client Review & Delivery (T-48 Hours)
1. Transmit complete 12-asset bundle to client for 24h approval.
2. Execute client adjustments.
3. Archive assets and update Cloudflare D1 episode record.
