import { TRPCError } from "@trpc/server";
import { BLOG_PLATFORMS } from "~/lib/constants";
import { linkBlogFormSchema } from "~/lib/formSchemas";
import { generateWebhookUrl } from "~/lib/webhooks/hashnode";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";
import SCHEMA from "~/server/db/schema";

export const blogsRouter = createTRPCRouter({
  listBlogs: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.userId;
    const blogs = await db.query.blogs.findMany({
      where: (blog, {eq}) => eq(blog.userId, userId),
      columns: {
        webhookUrl: false,
        webhookSecret: false
      }
    })

    return blogs
  }),

  link: protectedProcedure
    .input(linkBlogFormSchema)
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.userId;
      const splittedUrl = input.webhookUrl.split("/")
      const platformId = splittedUrl[splittedUrl.length - 1]

      if (!platformId) {
        throw new TRPCError({message: "Invalid Webhook URL", code: "BAD_REQUEST"})
      }

      await db.insert(SCHEMA.blogs).values({
        id: platformId,
        blogName: input.blogName,
        blogUrl: input.blogUrl,
        platformName: BLOG_PLATFORMS.HASHNODE,
        userId,
        webhookUrl: input.webhookUrl,
        webhookSecret: input.webhookSecret
      })

      return "Blog linked successfully"
    }),

  generateWebhookUrl: protectedProcedure.query(async ({ctx}) => {
    const userId = ctx.userId;
    const platformId = crypto.randomUUID();
    return generateWebhookUrl(userId, platformId)
  })
});
