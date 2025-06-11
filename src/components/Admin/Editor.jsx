import React, { useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

const Editor = ({ placeholder }) => {
	const [content, setContent] = useState("");

	return (
		<>
			<SunEditor
				placeholder={placeholder}
				setContents={content}
				onChange={setContent}
				setOptions={{
					buttonList: [
						["bold", "italic", "image", "link", "codeView", "fontColor", "formatBlock"],
					],
				}}
			/>
		</>
	);
};

export default Editor;
