import RecentProductCard from "@/components/Admin/Dashboard/RecentProductCard";
export default function RecentModifiedProducts() {
  return (
    <div className="h-full">
            <h3 className="font-medium mb-3">
                Recent Modified Products
            </h3>

            <div className="grid grid-cols-[120px_1fr_95px] grid-rows-[1fr_1fr_1fr_1fr] h-full border-t border-gray-300 mb-4">
                <RecentProductCard />
                <RecentProductCard />
                <RecentProductCard />
                <RecentProductCard />
            </div>
        </div>
  )
}
