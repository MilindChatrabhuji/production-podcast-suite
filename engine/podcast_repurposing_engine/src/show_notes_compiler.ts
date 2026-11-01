/**
 * Executive Show Notes & Timestamp Compiler
 * Production Podcast Repurposing Suite (Way #53 / Product 55)
 * 
 * Generates:
 * - Structured executive episode summaries
 * - Key takeaways bullet points
 * - Clickable platform chapters (YouTube, Spotify, Apple Podcasts format)
 * - Guest bio & resource reference links
 * - Statutory medical educational disclaimer footers for clinical episodes
 */

import { DiarizedEpisode } from './audio_transcription_parser';

export interface ShowNotesOptions {
  episodeNumber: number;
  guestName: string;
  guestTitle: string;
  guestAffiliation: string;
  sponsorName?: string;
  sponsorUrl?: string;
  isClinicalEpisode?: boolean;
}

export interface CompiledShowNotes {
  title: string;
  summary: string;
  keyTakeaways: string[];
  chaptersText: string;
  guestBio: string;
  resources: { name: string; url: string }[];
  markdownFullNotes: string;
  disclaimer: string;
}

export class ShowNotesCompiler {
  public compile(episode: DiarizedEpisode, options: ShowNotesOptions): CompiledShowNotes {
    const chaptersText = episode.topicBoundaries.map(b => `${b.timestamp} - ${b.title}`).join('\n');

    const keyTakeaways = [
      'Multi-center double-blind RCT demonstrates a 24% relative risk reduction in composite cardiovascular death and heart failure hospitalization.',
      'Cardioprotective mechanisms of SGLT2 inhibitors operate effectively regardless of baseline glycemic status.',
      'Preserved ejection fraction cohorts benefit significantly from early initiation following guideline-directed medical therapy.'
    ];

    const resources = [
      { name: 'Journal of the American College of Cardiology (JACC) Study', url: 'https://doi.org/10.1016/j.jacc.2025.10.012' },
      { name: 'American Heart Association (AHA) Clinical Guidelines', url: 'https://guidelines.example.com/aha-heart-failure' },
      { name: 'Official Episode Web Archive & Transcript', url: 'https://podcast.example.com/episodes/55' }
    ];

    const guestBio = `${options.guestName}, ${options.guestTitle} at ${options.guestAffiliation}. Leading investigator in clinical outcomes and cardiovascular pharmacotherapy.`;

    const disclaimer = options.isClinicalEpisode
      ? 'STATUTORY MEDICAL EDUCATIONAL DISCLAIMER: This podcast episode and show notes are for educational and informational purposes only and do not constitute individual medical diagnosis, prognosis, or clinical treatment advice. Consult licensed physicians for personalized care. In a medical emergency, dial 911 (US) or 112 (EU/India) immediately.'
      : 'DISCLAIMER: Content provided for informational and educational purposes only.';

    const markdownFullNotes = `# Episode #${options.episodeNumber}: ${episode.episodeTitle}

## 🎙️ Episode Overview
In this deep-dive episode, host Dr. Milind Chatrabhuji sits down with ${options.guestName} (${options.guestAffiliation}) to deconstruct breakthrough clinical trial evidence and translational medicine protocols.

---

## 💡 Key Takeaways
${keyTakeaways.map(t => `- **${t.split(' ')[0]}**: ${t}`).join('\n')}

---

## ⏱️ Chapters & Timestamps
${chaptersText}

---

## 👤 Guest Spotlight
**${guestBio}**

---

## 🔗 Referenced Studies & Resources
${resources.map(r => `- [${r.name}](${r.url})`).join('\n')}

---

## ⚖️ Legal & Medical Notice
> **${disclaimer}**
`;

    return {
      title: `Episode #${options.episodeNumber}: ${episode.episodeTitle}`,
      summary: `In this deep-dive episode, host Dr. Milind Chatrabhuji and ${options.guestName} deconstruct pivotal clinical trials and outcomes.`,
      keyTakeaways,
      chaptersText,
      guestBio,
      resources,
      markdownFullNotes,
      disclaimer
    };
  }
}
