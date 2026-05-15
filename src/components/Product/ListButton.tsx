"use client"
import {useView} from "@/context/view-context";
import ParallelBar from "@/components/Icons/ParallelBarIcon";

export default function ListButton() {
    const { view, setView } = useView();

    return (
    <button id="list-button" className={`${view==="list"?"text-black":"text-gray-500"} text-black cursor-pointer`} onClick={() => setView("list")}>
            <ParallelBar />
            <p className="text-xs text-gray-80">List</p>
    </button>
    )
}
