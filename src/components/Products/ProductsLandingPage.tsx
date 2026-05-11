import { useProductDetail } from "@/context/product-detail-context";

export default function ProductsLandingPage() {
  const {productDetail}: any = useProductDetail();
  const { title, segment, category, description, company_contact_person, company, division, updated_at }: any = productDetail || {};
  
  return (
    <div className="mb-22">

      {<h1 className="text-3xl md:text-4xl mt-4 md:mt-8 mb-4">{title}</h1>}
      <h3 className="text-[var(--grey-600)] text-sm">Segment - {segment}</h3>
      <h3 className="text-[var(--grey-600)] text-sm">Category - {category}</h3>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 gap-4">

        <div className="text-[var(--grey-600)] text-xs md:text-sm col-span-1 md:col-span-2 lg-col-span-2">
          {description}
        </div>

        <div className="col-span-2 md:col-span-1 lg-col-span-1">
          <ul className="text-[var(--grey-600)] text-xs md:text-sm">
            <li>Contact - {company_contact_person.name}</li>
            <li>Email - {company_contact_person.email}</li>
            <li>Function - {company_contact_person.function}</li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1 `lg-col-span-1">
          <ul className="text-[var(--grey-600)] text-xs md:text-sm">
            <li>Company - {company}</li>
            <li>Division - {division}</li>
            <li>Last Modified - {updated_at}</li>
            <li className="mt-2 text-red-600">
              <a className="cursor-pointer underline" href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/files/products/file1.pdf`} download target="_blank">
                Download Factsheet
              </a>
            </li>
          </ul>
        </div>

      </div>

    </div>
  )
}
