"use client";
import TipTapEditor from "@/components/Product/TipTapEditor";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useAddProduct } from "@/context/add-product-context";
import { useFilter } from "@/context/filter-context";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "@/lib/axios";
import { productRequestSchema } from "@/lib/validations/productRequestSchema";
import Spinner from "@/components/Layout/Spinner";

interface AddProductFormData {
  title: string;
  category_id: string;
  company_id: string;
  division_id: string;
  segment_id: string;
  description?: string;
}

export default function AddProductForm() {
  const [text, setText] = useState("");
  const { divisionProducts, segmentProducts, companyProducts, categoryProducts } = useFilter();
  const { closeModal } = useAddProduct();  
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors }
  } = useForm<AddProductFormData>({ resolver: zodResolver(productRequestSchema) });

  useEffect(() => {
    register("description");
  }, [register]);

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: AddProductFormData) => {
    try {
      setLoading(true);
      const res = await api.post("/product-request-form", data);
      if (res.status === 201 && res.data.status == "success") {
        toast.success("Product Addition Request Send Successfully!", {
          duration: 5000,
          style: {
            border: "1px solid black",
            padding: "10px",
            backgroundColor: "green",
            color: "white",
          },
        });
        setLoading(false);
      }
      else {
        toast.error("Product Addition Request failed!", {
          duration: 5000,
          style: {
            border: "1px solid black",
            padding: "10px",
            backgroundColor: "red",
            color: "white",
          },
        });
      }
      reset();
      closeModal();
    }
    catch (e) {
    }
  };

  return (
    <form
      id="add-product-form"
      className="relative space-y-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      {loading && <Spinner />}
      <div>
        <label className="text-sm font-medium text-black">
          Title<span className="text-red-500">*</span>
        </label>
        <p className="text-xs text-gray-400 mb-1">Brand Vehicle product name</p>

        <div className="relative bg-white">
          {errors.title && (
            <p className="text-red-500 text-xs">{errors.title.message}</p>
          )}
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none hover:border-black text-black text-xs"
            placeholder="Title"
            maxLength={100}
            required
            value={text}
            {...register("title", {
              onChange: (e) => setText(e.target.value),
            })}
          />
          <span className="absolute right-3 top-2 text-xs text-gray-400">
            {text.length}/100 characters
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-black">
            Category<span className="text-red-500">*</span>
          </label>
          {errors.category_id && (
            <p className="text-red-500 text-xs">{errors.category_id.message}</p>
          )}
          <select
            className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-xs text-black bg-white hover:border-black"
            required
            {...register("category_id")}
          >
            <option value="" hidden>
              Choose category
            </option>

            {categoryProducts.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-black">
            Company<span className="text-red-500">*</span>
          </label>
          {errors.company_id && (
            <p className="text-red-500 text-xs">{errors.company_id.message}</p>
          )}
          <select
            className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-xs text-black bg-white hover:border-black"
            required
            {...register("company_id")}
          >
            <option value="" hidden>
              Choose company
            </option>
            {companyProducts.map((company) => (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-black">
            Division<span className="text-red-500">*</span>
          </label>
          {errors.division_id && (
            <p className="text-red-500 text-xs">{errors.division_id.message}</p>
          )}
          <select
            className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-xs text-black bg-white hover:border-black"
            required
            {...register("division_id")}
          >
            <option value="" hidden>
              Choose division
            </option>
            {divisionProducts.map((division) => (
              <option key={division.id} value={division.id}>
                {division.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-black">
            Segment<span className="text-red-500">*</span>
          </label>
          {errors.segment_id && (
            <p className="text-red-500 text-xs">{errors.segment_id.message}</p>
          )}
          <select
            className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-xs text-black bg-white hover:border-black"
            required
            {...register("segment_id")}
          >
            <option value="" hidden>
              Choose segment
            </option>
            {segmentProducts.map((segment) => (
              <option key={segment.id} value={segment.id}>
                {segment.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-black">Description</label>
        {errors.description && (
          <p className="text-red-500 text-xs">{errors.description.message}</p>
        )}
        <TipTapEditor
          value={watch("description") || ""}
          onChange={(content: string) => setValue("description", content)}
        />
      </div>

      <div className="p-4 flex justify-evenly z-51">
        <button
          id="applyAddProductModalBtn"
          className="mx-1 w-full bg-red-500 text-white py-3 rounded-lg font-bold cursor-pointer"
          type="submit"
        >
          Submit
        </button>
        <button
          id="applyAddProductModalBtn"
          className="mx-1 w-full bg-gray-500 text-white py-3 rounded-lg font-bold cursor-pointer"
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
