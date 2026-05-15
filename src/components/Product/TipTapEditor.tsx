"use client";

import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import { JSX } from "react";
import LeftAlign from "@/components/Icons/LeftAlign";
import CenterAlign from "@/components/Icons/CenterAlign";
import RightAlign from "@/components/Icons/RightAlign";
import List from "@/components/Icons/List";
import { useState, useEffect } from "react";

type Props = {
  value: string;
  onChange: (content: string) => void;
};

export default function TipTapEditor({ value, onChange }: Props): JSX.Element {
  
  const editor: Editor | null = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: "Write description...",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: value || "",
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
  if (editor && value !== editor.getHTML()) {
    editor.commands.setContent(value || "");
  }
}, [value, editor]);

  const [isActiveBold, setIsActiveBold] = useState(false);
  const [isActiveItalic, setIsActiveItalic] = useState(false);
  const [isActiveUnderline, setIsActiveUnderline] = useState(false);
  const [isActiveBulletList, setIsActiveBulletList] = useState(false);
  const [isActiveOrderedList, setIsActiveOrderedList] = useState(false);
  const [isActiveLeftAlign, setIsActiveLeftAlign] = useState(false);
  const [isActiveCenterAlign, setIsActiveCenterAlign] = useState(false);
  const [isActiveRightAlign, setIsActiveRightAlign] = useState(false);

  if (!editor) return <></>;

  return (
    <div className="w-full">
      <div className="border border-gray-300 rounded-md overflow-hidden hover:border-black">

        {/* Toolbar */}
        <div className="flex flex-wrap gap-2 p-2 text-sm justify-space-evenly text-black">

          <div
            onClick={() => {
              editor.chain().focus().toggleBold().run()
              if (isActiveBold === true) {
                setIsActiveBold(false);
              } else {
                setIsActiveBold(true);
              }
            }}
            className={`size-5 text-center text-bold cursor-pointer ${isActiveBold ? "bg-black text-white" : "bg-white text-black"}`}>
            B
          </div>
          <div
            onClick={() => {
              editor.chain().focus().toggleItalic().run()
              if (isActiveItalic === true) {
                setIsActiveItalic(false);
              } else {
                setIsActiveItalic(true);
              }
            }}
            className={`size-5 text-center italic cursor-pointer ${isActiveItalic ? "bg-black text-white" : "bg-white text-black"}`}>
            I
          </div>
          <div
            onClick={() => {
              editor.chain().focus().toggleUnderline().run()
              setIsActiveUnderline(!isActiveUnderline);
            }}
            className={`size-5 text-center underline cursor-pointer ${isActiveUnderline ? "bg-black text-white" : "bg-white text-black"}`}>
            U
          </div>
          <div
            onClick={() => {
              editor.chain().focus().toggleBulletList().run();
              setIsActiveBulletList(!isActiveBulletList);
            }}
            className={`size-5 text-center cursor-pointer ${isActiveBulletList ? "bg-black text-white" : "bg-white text-black"
              }`}
          >
            <List
              size="size-5"
              color={isActiveBulletList ? "white" : "black"}
            />
          </div>
          <div onClick={() => {
            editor.chain().focus().toggleOrderedList().run()
            setIsActiveOrderedList(!isActiveOrderedList);
          }}
            className={`size-5 text-center cursor-pointer ${isActiveOrderedList ? "bg-black text-white" : "bg-white text-black"}`}>
            1.
          </div>
          <div
            onClick={() => {
              editor.chain().focus().setTextAlign("left").run()
              setIsActiveLeftAlign(!isActiveLeftAlign);
            }}
            className={`size-5 text-center cursor-pointer ${isActiveLeftAlign ? "bg-black text-white" : "bg-white text-black"}`}>
            <button
              type="button"
              className={`cursor-pointer`}
            >
              <LeftAlign size="size-5" color={`${isActiveLeftAlign ? "white" : "black"}`} />
            </button>
          </div>
          <div
            onClick={() => {
              editor.chain().focus().setTextAlign("center").run()
              setIsActiveCenterAlign(!isActiveCenterAlign);
            }}
            className={`size-5 text-center cursor-pointer ${isActiveCenterAlign ? "bg-black text-white" : "bg-white text-black"}`}>
            <CenterAlign size="size-5" color={`${isActiveCenterAlign ? "white" : "black"}`} />
          </div>
          <div
            onClick={() => {
              editor.chain().focus().setTextAlign("right").run()
              setIsActiveRightAlign(!isActiveRightAlign);
            }}
            className={`size-5 text-center cursor-pointer ${isActiveRightAlign ? "bg-black text-white" : "bg-white text-black"}`} >
            <RightAlign size="size-5" color={`${isActiveRightAlign ? "white" : "black"}`} />
          </div>
        </div>

        {/* Editor */}
        <EditorContent
          editor={editor}
          className="px-4 py-2 h-40 text-xs focus:outline-none text-black hover:border-black"
          required
        />
      </div>
    </div>
  );
}