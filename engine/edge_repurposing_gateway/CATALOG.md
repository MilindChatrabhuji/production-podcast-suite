# Pack 2 Architecture & API Catalog
**Module Identifier:** `engine/edge_repurposing_gateway`  
**Version:** 1.0.0  
**License:** Commercial Single Pack ($9.00 USD) / Master Suite ($19.00 USD)

## Exported Classes & Methods
- `SeoArticleGenerator`:
  - `generate(options: ArticleGenerationOptions): GeneratedSeoArticle`
- `SocialThreadGenerator`:
  - `generate(meta: PodcastEpisodeMeta): GeneratedSocialPayload`
- `worker`:
  - Default Cloudflare Workers fetch handler for edge API routes.
