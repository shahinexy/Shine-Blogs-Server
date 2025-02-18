import { z } from "zod";

const createBlogSchemaValidation = z.object({
  body: z.object({
    title: z.string().min(1, { message: "Title is required." }),
    content: z.string().min(1, { message: "Content is required." })
  })
});

const updateBlogSchemaValidation = z.object({
  body: z.object({
    title: z.string().min(1, { message: "Title is required." }).optional(),
    content: z.string().min(1, { message: "Content is required." }).optional()
  })
});

export const BlogValidetions = {
    createBlogSchemaValidation,
    updateBlogSchemaValidation
}
