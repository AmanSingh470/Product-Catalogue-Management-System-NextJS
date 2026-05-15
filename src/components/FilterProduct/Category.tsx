"use client";
import { useProducts } from "@/context/product-context";

interface Props {
  id: number,
  name: string;
  type: "company" | "segment" | "division";
  total_products: number;
}

export default function Category({ id, name, type, total_products }: Props) {
  const {
    selectedCompanies,
    setSelectedCompanies,
    selectedSegments,
    setSelectedSegments,
    selectedDivisions,
    setSelectedDivisions
  } = useProducts();


  const getState = (): [number[], (value: React.SetStateAction<number[]>) => void] => {
    if (type === "company") {
      return [selectedCompanies, setSelectedCompanies];
    }
    if (type === "segment") {
      return [selectedSegments, setSelectedSegments];
    }
    return [selectedDivisions, setSelectedDivisions];
  };

  const [selected, setSelected] = getState();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelected((prev: number[]) => [...prev, id]);
    } else {
      setSelected((prev: number[]) =>
        prev.filter((item) => item !== id)
      );
    }
  };

  return (

    <div className="flex flex-col">
      <div className="flex justify-between text-[var(--grey-500)] hover:text-black">
        <label className="flex cursor-pointer text-sm" >
          <input
            type="checkbox"
            checked={selected.includes(id)}
            onChange={handleCheckboxChange}
            className="cursor-pointer accent-red-500 peer"
          />
          <span className="ml-2 peer-checked:text-black">{name}</span>
        </label>
        <div className={selected.includes(id) ? "text-black" : ""}>
          {total_products}
        </div>
      </div>
    </div>
  );
}