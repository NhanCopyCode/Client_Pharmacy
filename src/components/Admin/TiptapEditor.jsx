import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import TipTapToolbar from "./TipTapToolbar";

function TiptapEditor({ placeholder, onChange, initialContent = "" }) {
	const editor = useEditor({
		extensions: [StarterKit, Underline, Image],
		content: initialContent,
		autofocus: true,
		onUpdate: ({ editor }) => {
			const html = editor.getHTML();
			onChange?.(html);
		},
	});

	// Only set content once
	useEffect(() => {
		if (editor && initialContent !== editor.getHTML()) {
			editor.commands.setContent(initialContent || "");
		}
	}, [initialContent, editor]);

	if (!editor) return null;
	return (
		<div>
			<TipTapToolbar editor={editor} />
			<div className="border border-gray-300 rounded-lg p-2 min-h-[150px] focus:outline-none">
				<EditorContent editor={editor} />
			</div>
		</div>
	);
}

export default TiptapEditor;
