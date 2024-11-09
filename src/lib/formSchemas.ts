import { z } from "zod";

export const linkBlogFormSchema = z.object({
    blogName: z.string({ message: "Blog name is required" }).min(1, "Blog name is required"),
    blogUrl: z.string({message: "Blog Url is required"}).url("Invalid URL"),
    webhookSecret: z.string().min(1, "Webhook secret is required"),
    webhookUrl: z.string({message: "Webhook Url is required"}).url("Invalid URL")
});