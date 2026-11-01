# Pack 1: Podcast Transcription & Repurposing Engine
**Core Engine for Way #53 / Product 55: Production Podcast Repurposing Suite**

---

## 🌟 Executive Overview
The **Podcast Transcription & Repurposing Engine** ingests raw audio transcripts (Whisper JSON, VTT, SRT), cleans filler words, segments topic boundaries, compiles executive show notes with clickable timestamps, and extracts short-form clips with exact FFmpeg cue points.

## 🚀 Key Modules
1. **`audio_transcription_parser.ts`**:
   - Parses WebVTT, SRT, and Whisper timestamped transcripts.
   - Diarization alignment identifying Host and Guest speakers.
   - Algorithmic filler word scrubber ("um", "uh", "you know") and silence gap detector.
2. **`show_notes_compiler.ts`**:
   - Generates executive show notes formatted for YouTube, Spotify, and Apple Podcasts.
   - Structured key takeaways and resource citations (PubMed/DOI for clinical episodes).
   - Mandatory statutory medical educational disclaimer footers for clinical topics.
3. **`clip_highlight_extractor.ts`**:
   - Extracts 30s hook, 60s insight, and 90s deep-dive clips.
   - Generates exact FFmpeg 9:16 vertical video crop commands and multi-platform captions.

## 📦 Commercial Integration
- Standalone Pack License: **$9.00 USD** (~₹750 INR)
- Master Production Suite: **$19.00 USD** (~₹1,599 INR)
- Official Remittance: Domestic UPI `milind.chatrabhuji@okhdfcbank` | Global PayPal `milind.chatrabhuji@gmail.com`
