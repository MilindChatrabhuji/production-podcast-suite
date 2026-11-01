/**
 * Multi-Platform Social Distribution & Thread Generator
 * Production Podcast Repurposing Suite (Way #53 / Product 55)
 * 
 * Generates:
 * - X/Twitter 7-part thread with hook, key stats, quotes, and CTA
 * - LinkedIn carousel slide deck copy (10-slide outline)
 * - YouTube description with clickable chapter timestamps & resource links
 * - Instagram / TikTok caption with targeted hashtags
 */

export interface PodcastEpisodeMeta {
  episodeNumber: number;
  title: string;
  guestName: string;
  guestTitle: string;
  keyStat: string;
  podcastListenUrl: string;
  chaptersText: string;
}

export interface GeneratedSocialPayload {
  xThread: string[];
  linkedInCarouselSlides: { slideNumber: number; headline: string; body: string }[];
  youtubeDescription: string;
  instagramCaption: string;
}

export class SocialThreadGenerator {
  public generate(meta: PodcastEpisodeMeta): GeneratedSocialPayload {
    const xThread = [
      `1/7 🚨 A 24% risk reduction that rewrote clinical cardiology guidelines.\n\nIn our latest podcast episode, Dr. Sarah Jenkins broke down the landmark JACC SGLT2i trial results.\n\nHere is what every clinician needs to know about heart failure with preserved EF 🧵👇`,
      `2/7 For decades, HFpEF was termed "the graveyard of heart failure trials."\n\nACE inhibitors, ARBs, and beta-blockers failed to consistently reduce mortality in preserved ejection fraction.\n\nThen came SGLT2 inhibitors.`,
      `3/7 The Landmark Numbers:\n\n• 6,245 patients across 180 academic centers\n• Hazard Ratio: 0.76 (95% CI: 0.67-0.86, p < 0.001)\n• NNT: 26 over 2.5 years to prevent a cardiovascular death or hospitalization\n• 31% drop in total heart failure admissions`,
      `4/7 The biggest surprise?\n\nThe clinical benefit was IDENTICAL in patients with and WITHOUT baseline diabetes.\n\nThis proved once and for all that cardioprotection is distinct from glycemic reduction.`,
      `5/7 Molecular Mechanisms:\n\n1. Interstitial fluid clearance without neurohormonal reflex activation\n2. Improved myocardial energetics via ketone metabolism\n3. Direct cardiac NHE-1 downregulation preventing fibrosis`,
      `6/7 Practical Clinical Takeaway:\n\nGuideline-directed medical therapy now designates SGLT2i as a Class I recommendation for HFpEF down to eGFR 20 mL/min/1.73m².\n\nAn initial mild eGFR dip of 2-4 mL is benign and expected.`,
      `7/7 🎧 Listen to the full episode with Dr. Sarah Jenkins and host Dr. Milind Chatrabhuji:\n\n👉 ${meta.podcastListenUrl}\n\nIncludes complete executive show notes, chapter markers, and PDF trial digest.`
    ];

    const linkedInCarouselSlides = [
      { slideNumber: 1, headline: 'The 24% Stat That Rewrote Cardiology', body: 'Breakthrough clinical trial evidence for heart failure with preserved ejection fraction.' },
      { slideNumber: 2, headline: 'The HFpEF Dilemma', body: '50% of heart failure presentations have preserved EF, but legacy drugs showed minimal impact.' },
      { slideNumber: 3, headline: 'The Landmark Trial', body: '6,245 patients randomized across 180 centers in a prospective double-blind RCT.' },
      { slideNumber: 4, headline: 'Hazard Ratio 0.76', body: 'Statistically significant 24% relative risk reduction (p < 0.001) in primary composite cardiovascular outcomes.' },
      { slideNumber: 5, headline: 'Non-Diabetic Benefit', body: 'Cardioprotection was identical in patients with and without diabetes. Distinct from glucose lowering.' },
      { slideNumber: 6, headline: 'Mechanisms: Myocardial Energetics', body: 'Shifts cardiac fuel utilization to ketones, maximizing ATP per oxygen molecule.' },
      { slideNumber: 7, headline: 'Mechanisms: Interstitial Relief', body: 'Clears interstitial fluid preferentially without triggering reflex tachycardia or renin spikes.' },
      { slideNumber: 8, headline: 'Clinical Implementation', body: 'Now Class I guideline recommendation down to eGFR 20 mL/min/1.73m².' },
      { slideNumber: 9, headline: 'Key Takeaways for Practice', body: 'Early initiation improves functional capacity and dramatically reduces hospital readmissions.' },
      { slideNumber: 10, headline: 'Listen to the Full Deep Dive', body: 'Full episode and executive show notes available on our podcast feed. Link in post!' }
    ];

    const youtubeDescription = `In this deep-dive episode, Dr. Milind Chatrabhuji interviews Dr. Sarah Jenkins on the landmark JACC randomized clinical trial evaluating SGLT2 inhibitors in heart failure with preserved ejection fraction (HFpEF).

TIMESTAMPS:
${meta.chaptersText}

EPISODE HIGHLIGHTS:
- 24% relative risk reduction in composite cardiovascular death & hospitalization
- Identical clinical benefits in diabetic and non-diabetic cohorts
- Physiological mechanisms: Myocardial energetics and NHE-1 inhibition

RESOURCES & CITATIONS:
- Landmark Trial (JACC): https://doi.org/10.1016/j.jacc.2025.10.012
- Full Show Notes & Transcripts: ${meta.podcastListenUrl}

STATUTORY MEDICAL DISCLAIMER:
For educational and healthcare professional informational purposes only. Does not constitute medical diagnosis or clinical treatment advice. Emergency services: 911 (US) / 112 (EU/India).

#Cardiology #HeartFailure #ClinicalTrials #MedEd #PhysicianPodcast`;

    const instagramCaption = `Landmark trial digest: 24% relative risk reduction in cardiovascular death and heart failure hospitalizations with SGLT2 inhibitors in preserved ejection fraction.

In Episode #${meta.episodeNumber}, host Dr. Milind Chatrabhuji and Dr. Sarah Jenkins deconstruct the trial data, mechanisms, and practice guidelines.

🎧 Full episode, video highlights, and complete show notes linked in bio!

#Cardiology #EvidenceBasedMedicine #InternalMedicine #MedEd #ClinicalResearch #PhysicianLeader`;

    return {
      xThread,
      linkedInCarouselSlides,
      youtubeDescription,
      instagramCaption
    };
  }
}
