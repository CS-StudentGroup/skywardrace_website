import { defineCollection, z, reference } from "astro:content";
import { glob } from "astro/loaders";

const roadmap = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/roadmap" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(["planned", "in-progress", "done"]).default("planned"),
    startedAt: z.coerce.date().optional(),
    target: z.string().optional(),
    order: z.number().default(0),
    featured: z.boolean().default(false),
  }),
});

const devlog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/devlog" }),
  schema: z.object({
    roadmap: reference("roadmap"),
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
  }),
});

export const collections = { roadmap, devlog };
