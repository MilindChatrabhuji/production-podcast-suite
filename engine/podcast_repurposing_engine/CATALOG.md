# Pack 1 Architecture & API Catalog
**Module Identifier:** `engine/podcast_repurposing_engine`  
**Version:** 1.0.0  
**License:** Commercial Single Pack ($9.00 USD) / Master Suite ($19.00 USD)

## Exported Classes & Methods
- `AudioTranscriptionParser`:
  - `parseVttOrSrt(rawContent: string, episodeTitle?: string): DiarizedEpisode`
- `ShowNotesCompiler`:
  - `compile(episode: DiarizedEpisode, options: ShowNotesOptions): CompiledShowNotes`
- `ClipHighlightExtractor`:
  - `extractClips(episode: DiarizedEpisode): ExtractedClip[]`
- `PodcastRepurposingEngine`:
  - `repurposeEpisode(rawTranscript: string, options: ShowNotesOptions)`
