import React, { useEffect, useRef, useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

function SunEditorWithUpload({ placeholder, onChange, initialContent = "" }) {
	const editorRef = useRef(null);
	const [content, setContent] = useState(initialContent);

	useEffect(() => {
		setContent(initialContent || "");
		if (editorRef.current) {
			editorRef.current.setContents(initialContent || "");
		}
	}, [initialContent]);
	return (
		<SunEditor
			ref={editorRef}
			placeholder={placeholder}
			setContents={content}
			onChange={(value) => {
				setContent(value);
				onChange?.(value);
			}}
			setOptions={{
				height: 250,
				buttonList: [
					[
						"bold",
						"italic",
						"underline",
						"link",
						"image",
						"codeView",
						"fontColor",
						"formatBlock",
					],
				],
				imageUploadUrl: "http://127.0.0.1:8000/api/editor-upload", 
				imageUploadHeader: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
				imageUploadSizeLimit: 10 * 1024 * 1024, 
			}}
		/>
	);
}

export default SunEditorWithUpload;
