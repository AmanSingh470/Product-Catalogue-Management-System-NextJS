import api from "@/lib/axios";
import { ProductListingResponseSchema } from "@/lib/validations/product.schema";
import type { ProductListingResponse } from "@/lib/validations/product.schema";
import { ProductDetailResponseSchema } from "@/lib/validations/product.schema";
import type { ProductDetailResponse } from "@/lib/validations/product.schema";
import qs from "qs";

const FALLBACK_LISTING: ProductListingResponse = {
  items: [],
  current_page: 1,
  hasMore: false,
};

type Filters = {
  search?: string;
  division?: number[];
  company?: number[];
  segment?: number[];
};

type Params = {
  page?: number;
  filters?: Filters;
};

export const getProducts = async ({ page = 1, filters = {} }: Params = {}) => {
  try {
    const res = await api.get("/get-products", {
      params: {
        page,
        ...(filters.search?.length && { search: filters.search }),
        ...(filters.division?.length && { division: filters.division }),
        ...(filters.company?.length && { company: filters.company }),
        ...(filters.segment?.length && { segment: filters.segment }),
      },
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    });

    const contentType = res.headers["content-type"] || "";
    if (!contentType.includes("application/json")) {
      return FALLBACK_LISTING;
    }

    if (typeof res.data === "string") {
      return FALLBACK_LISTING;
    }

    return ProductListingResponseSchema.parse(res.data);
  } catch (err) {
    return FALLBACK_LISTING;
  }
};

const FALLBACK_DETAIL: ProductDetailResponse = {
  item: {
    id: 0,
    title: "abc",
    description: "",
    category: "",
    segment: "",
    division: "",
    company: "",
    company_contact_person: "",
    main_advantages: null,
    key_facts: null,
    applications: null,
    status: "inactive",
    created_at: "",
    media: [],
  },
};

export const getProductById = async (id: Number) => {
  try {
    const res = await api.get(`/get-products/${id}`);

    const contentType = res.headers["content-type"] || "";
    if (!contentType.includes("application/json")) {
      return FALLBACK_DETAIL;
    }

    if (typeof res.data === "string") {
      return FALLBACK_DETAIL;
    }
    console.log("Coming from Service: ", res.data);

    return ProductDetailResponseSchema.parse(res.data);
  } catch (err) {
    console.log("going in catch of zod");
    
    return FALLBACK_DETAIL;
  }
};
