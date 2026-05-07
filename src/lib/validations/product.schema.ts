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
  company_contact_person: z.string(),

  main_advantages: z.string().nullable(),
  key_facts: z.string().nullable(),
  applications: z.string().nullable(),

  status: z.enum(["active", "inactive"]),
  created_at: z.string(),

  media: z.array(
    z.object({
      id: z.number(),
      product_id: z.number(),
      image: z.string().nullable(),
      file: z.string().nullable(),
      video: z.string().nullable(),
      created_at: z.string(),
      updated_at: z.string(),
    }),
  ),
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
