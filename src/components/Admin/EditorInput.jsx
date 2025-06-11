import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { nanoid } from "nanoid";

const EditorInput = ({ defaultValue = {}, onChange }) => {
	const holderId = useRef(`editor-${nanoid()}`);
	const editorRef = useRef(null);

	useEffect(() => {
		const editor = new EditorJS({
			holder: holderId.current,
			tools: {
				header: Header,
				list: List,
			},
			data: defaultValue,
			placeholder: "Nhập nội dung...",
			onChange: async () => {
				const savedData = await editor.save();
				if (onChange) onChange(savedData);
			},
		});

		editorRef.current = editor;

		return () => {
			editor.isReady.then(() => editor.destroy()).catch(() => {});
		};
	}, []);

	return (
		<div className="border border-gray-300 rounded p-3 bg-white shadow-sm">
			<div id={holderId.current} />
		</div>
	);
};

export default EditorInput;
