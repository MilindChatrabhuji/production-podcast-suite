/**
 * Podcast Repurposing Engine Entry Point
 * Production Podcast Repurposing Suite (Way #53 / Product 55)
 */

export * from './audio_transcription_parser';
export * from './show_notes_compiler';
export * from './clip_highlight_extractor';

import { AudioTranscriptionParser } from './audio_transcription_parser';
import { ShowNotesCompiler, ShowNotesOptions } from './show_notes_compiler';
import { ClipHighlightExtractor } from './clip_highlight_extractor';

export class PodcastRepurposingEngine {
  public parser = new AudioTranscriptionParser();
  public showNotes = new ShowNotesCompiler();
  public clipExtractor = new ClipHighlightExtractor();

  public repurposeEpisode(rawTranscript: string, options: ShowNotesOptions) {
    const episode = this.parser.parseVttOrSrt(rawTranscript);
    const notes = this.showNotes.compile(episode, options);
    const clips = this.clipExtractor.extractClips(episode);

    return {
      episode,
      notes,
      clips
    };
  }
}
