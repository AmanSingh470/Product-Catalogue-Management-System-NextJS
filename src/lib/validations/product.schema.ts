import { z } from "zod";

export const ProductListingSchema = z.object({
  id: z.number(),
  title: z.string(),
  segment: z.string(),
  division: z.string(),
  company: z.string(),
  image_url: z.string().nullable(),
});

export const ProductListingResponseSchema = z.object({
  items: z.array(ProductListingSchema),
  current_page: z.number(),
  hasMore: z.boolean(),
});

export const ProductDetailSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),

  category: z.string(),
  segment: z.string(),
  division: z.string(),

  company: z.string(),
  company_contact_person: z.object({
    name: z.string(),
    email: z.string(),
    function: z.string(),
  }),

  main_advantages: z.record(z.string(), z.string()),

  key_facts: z.array(z.string()),

  intellectual_properties: z.array(z.string()),

  applications: z.array(z.string()),

  status: z.enum(["1", "2", "3", "4"]),
  created_at: z.string(),

  image: z.string().nullable(),
});

export const ProductDetailResponseSchema = z.object({
  item: ProductDetailSchema,
});

export type ProductListing = z.infer<typeof ProductListingSchema>;
export type ProductListingResponse = z.infer<
  typeof ProductListingResponseSchema
>;

export type ProductDetail = z.infer<typeof ProductDetailSchema>;
export type ProductDetailResponse = z.infer<typeof ProductDetailResponseSchema>;
