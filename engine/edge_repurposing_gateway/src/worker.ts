/**
 * Cloudflare Workers Edge Gateway
 * Production Podcast Repurposing Suite (Way #53 / Product 55)
 */

import { SeoArticleGenerator } from './seo_article_generator';
import { SocialThreadGenerator } from './social_thread_generator';

export interface Env {
  DB?: any;
  API_AUTH_KEY?: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Content-Type': 'application/json'
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Health check
    if (url.pathname === '/health' || url.pathname === '/') {
      return new Response(JSON.stringify({
        status: 'healthy',
        service: 'Production Podcast Repurposing Gateway (Way #53)',
        version: '1.0.0',
        timestamp: new Date().toISOString()
      }), { headers: corsHeaders });
    }

    // Transcribe parse mock endpoint
    if (url.pathname === '/api/transcribe/parse' && request.method === 'POST') {
      return new Response(JSON.stringify({
        success: true,
        episodeTitle: 'Landmark SGLT2i Outcomes in HFpEF',
        durationSeconds: 1840,
        speakers: ['Host (Dr. Milind Chatrabhuji)', 'Guest (Dr. Sarah Jenkins)'],
        wordCount: 3820,
        fillersScrubbed: 42
      }), { headers: corsHeaders });
    }

    // Blog generation endpoint
    if (url.pathname === '/api/blog/generate' && request.method === 'POST') {
      const generator = new SeoArticleGenerator();
      const article = generator.generate({
        primaryKeyword: 'SGLT2 inhibitors HFpEF',
        secondaryKeywords: ['cardioprotection', 'preserved ejection fraction', 'JACC trial'],
        targetAudience: 'Clinicians and Healthcare Professionals',
        authorName: 'Dr. Milind Chatrabhuji',
        canonicalUrl: 'https://podcast.example.com/blog/episode-55'
      });
      return new Response(JSON.stringify({ success: true, article }), { headers: corsHeaders });
    }

    // Social threads endpoint
    if (url.pathname === '/api/threads/generate' && request.method === 'POST') {
      const threadGen = new SocialThreadGenerator();
      const payload = threadGen.generate({
        episodeNumber: 55,
        title: 'Breakthrough SGLT2i Outcomes in Preserved EF',
        guestName: 'Dr. Sarah Jenkins',
        guestTitle: 'Professor of Cardiovascular Medicine',
        keyStat: '24% Relative Risk Reduction',
        podcastListenUrl: 'https://podcast.example.com/episodes/55',
        chaptersText: '00:00 - Introduction\n00:45 - Trial Results\n02:40 - Mechanisms'
      });
      return new Response(JSON.stringify({ success: true, payload }), { headers: corsHeaders });
    }

    // Retainer tiers endpoint
    if (url.pathname === '/api/retainers') {
      return new Response(JSON.stringify({
        tiers: [
          { tier: 'Starter', priceUsd: 500, scope: '2 Episodes / mo: Clean Transcript + Executive Show Notes + Timestamps' },
          { tier: 'Growth', priceUsd: 1500, scope: '4 Episodes / mo: Show Notes + 3 Video Clips + 1,500-word SEO Blog + Social Threads' },
          { tier: 'Enterprise', priceUsd: 3000, scope: '8 Episodes / mo: Full Multi-Platform Distribution + Dedicated Audio Engineer' }
        ]
      }), { headers: corsHeaders });
    }

    return new Response(JSON.stringify({ error: 'Endpoint not found' }), {
      status: 404,
      headers: corsHeaders
    });
  }
};
