import { getProducts } from "@/services/product.service";
import { getFilters } from "@/services/filter.service";
import HomeClient from "@/app/HomeClient";

export const dynamic = "force-dynamic";
export default async function Page() {
  // const products = await getProducts(1);
  const products = await getProducts({
    page: 1,
    filters: {
      search: "",
      division: [],
      company: [],
      segment: [],
    },
  });

  const filters = await getFilters();

  return <HomeClient initialProducts={products.items} initialFilters={filters.data} />;
}