-- Cloudflare D1 SQL Schema for Podcast Repurposing Platform
-- Way #53 / Product 55

CREATE TABLE IF NOT EXISTS podcasts (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  host_name TEXT NOT NULL,
  category TEXT NOT NULL,
  feed_url TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS episodes (
  id TEXT PRIMARY KEY,
  podcast_id TEXT NOT NULL,
  episode_number INTEGER NOT NULL,
  title TEXT NOT NULL,
  raw_audio_url TEXT,
  duration_seconds INTEGER,
  status TEXT CHECK (status IN ('uploaded', 'transcribed', 'repurposed', 'published')) DEFAULT 'uploaded',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (podcast_id) REFERENCES podcasts(id)
);

CREATE TABLE IF NOT EXISTS transcripts (
  id TEXT PRIMARY KEY,
  episode_id TEXT NOT NULL,
  full_text TEXT NOT NULL,
  cleaned_text TEXT NOT NULL,
  cues_json TEXT NOT NULL,
  word_count INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (episode_id) REFERENCES episodes(id)
);

CREATE TABLE IF NOT EXISTS clips (
  id TEXT PRIMARY KEY,
  episode_id TEXT NOT NULL,
  title TEXT NOT NULL,
  duration_seconds INTEGER NOT NULL,
  start_timestamp TEXT NOT NULL,
  end_timestamp TEXT NOT NULL,
  virality_score INTEGER,
  ffmpeg_command TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (episode_id) REFERENCES episodes(id)
);

CREATE TABLE IF NOT EXISTS social_posts (
  id TEXT PRIMARY KEY,
  episode_id TEXT NOT NULL,
  platform TEXT CHECK (platform IN ('twitter_thread', 'linkedin_carousel', 'youtube_desc', 'instagram_caption')) NOT NULL,
  content TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (episode_id) REFERENCES episodes(id)
);

CREATE TABLE IF NOT EXISTS retainers (
  id TEXT PRIMARY KEY,
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  tier TEXT CHECK (tier IN ('Starter', 'Growth', 'Enterprise')) NOT NULL,
  monthly_rate REAL NOT NULL,
  currency TEXT CHECK (currency IN ('USD', 'INR')) NOT NULL,
  status TEXT CHECK (status IN ('active', 'paused', 'cancelled')) DEFAULT 'active',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
