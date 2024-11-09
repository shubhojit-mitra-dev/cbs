import { pgTableCreator, text, timestamp, boolean, jsonb, integer } from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `cbs_${name}`);

const createdAt = timestamp("created_at").notNull().defaultNow();
const updatedAt = timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date());

// Content Platforms table (blogs, YouTube channels)
export const contentPlatforms = createTable('content_platforms', {
  id: integer('id').primaryKey(),
  userId: text('user_id').notNull(), // Auth0 user ID
  platformName: text('platform_name').notNull(), // 'medium', 'hashnode', 'youtube', etc.

  webhookSecret: text('webhook_secret'), // For webhook verification
  webhookUrl: text('webhook_url'), // Configured webhook URL
  integrationConfig: jsonb('integration_config'), // Platform-specific settings
  
  // autoPost: boolean('auto_post').notNull().default(true),
  createdAt,
  updatedAt,
});

// // Social Media Accounts table
// export const socialAccounts = createTable('social_accounts', {
//   id: text('id').primaryKey(),
//   userId: text('user_id').notNull(), // Auth0 user ID
//   platform: text('platform').notNull(), // 'twitter', 'linkedin', 'facebook'
//   accountName: text('account_name').notNull(),
  
//   // Auth related fields
//   accessToken: text('access_token').notNull(),
//   refreshToken: text('refresh_token'),
//   tokenExpiresAt: timestamp('token_expires_at'),
//   scope: text('scope'), // API permissions scope
//   accountId: text('account_id'), // Platform's internal account ID
//   profileUrl: text('profile_url'), // Social media profile URL
//   integrationConfig: jsonb('integration_config'), // Platform-specific settings
  
//   credentials: text('credentials').notNull(), // encrypted credentials/tokens
//   active: boolean('active').notNull().default(true),
//   lastPosted: timestamp('last_posted'), // Track last successful post
//   postingEnabled: boolean('posting_enabled').notNull().default(true),
//   createdAt,
//   updatedAt,
// });

// Platform-Social Links table (for platform-specific posting settings)
// export const platformSocialLinks = createTable('platform_social_links', {
//   id: text('id').primaryKey(),
//   contentPlatformId: text('content_platform_id')
//     .notNull()
//     .references(() => contentPlatforms.id),
//   socialAccountId: text('social_account_id')
//     .notNull()
//     .references(() => socialAccounts.id),
//   autoPost: boolean('auto_post').notNull().default(false),
//   customTemplate: text('custom_template'), // Optional custom template for this platform
//   hashtagConfig: jsonb('hashtag_config'), // Platform-specific hashtag settings
//   postingSchedule: jsonb('posting_schedule'), // Custom scheduling rules
//   contentFilters: jsonb('content_filters'), // Filtering rules for content
//   active: boolean('active').notNull().default(true),
//   createdAt,
//   updatedAt,
// });

// Content Queue table (for pending/scheduled posts)
// export const contentQueue = createTable('content_queue', {
//   id: text('id').primaryKey(),
//   contentPlatformId: text('content_platform_id')
//     .notNull()
//     .references(() => contentPlatforms.id),
//   originalContent: text('original_content').notNull(), // Original content URL or ID
//   originalContentType: text('original_content_type').notNull(), // 'blog_post', 'video', etc.
//   generatedContent: text('generated_content').notNull(), // AI-generated summary
//   status: text('status').notNull(), // 'pending', 'posted', 'failed'
//   scheduledFor: timestamp('scheduled_for'),
//   retryCount: integer('retry_count').notNull().default(0),
//   errorLog: jsonb('error_log'), // Store any posting errors
//   metadata: jsonb('metadata'), // Additional content metadata
//   createdAt,
//   updatedAt,
// });

// Posted Content table (tracking what's been posted where)
// export const postedContent = createTable('posted_content', {
//   id: text('id').primaryKey(),
//   queueId: text('queue_id')
//     .notNull()
//     .references(() => contentQueue.id),
//   socialAccountId: text('social_account_id')
//     .notNull()
//     .references(() => socialAccounts.id),
//   postUrl: text('post_url'), // URL of the posted content
//   postId: text('post_id'), // Platform-specific post ID
//   status: text('status').notNull(), // 'success', 'failed'
//   engagementMetrics: jsonb('engagement_metrics'), // Likes, shares, comments, etc.
//   postedAt: timestamp('posted_at').notNull().defaultNow(),
//   lastMetricUpdate: timestamp('last_metric_update'),
//   createdAt,
//   updatedAt,
// });

const SCHEMA = {
  contentPlatforms
};

export default SCHEMA;