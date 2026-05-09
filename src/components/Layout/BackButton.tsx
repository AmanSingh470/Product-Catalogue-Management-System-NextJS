"use client";
import BackIcon from "@/components/Icons/BackIcon";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="top-15 transition-all duration-300">
      <div className="mx-5 md:mx-10 py-2"
        onClick={() => router.back()}
      >
        <div className={`flex w-14 items-center justify-between cursor-pointer`}>
          <div>
            <BackIcon />
          </div>
          <div>Back</div>
        </div>
      </div>
    </div>

  );
}