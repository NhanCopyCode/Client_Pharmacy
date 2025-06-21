import {
	FaBold,
	FaItalic,
	FaUnderline,
	FaUndo,
	FaRedo,
	FaQuoteRight,
	FaListOl,
	FaListUl,
	FaImage,
	FaEraser,
} from "react-icons/fa";
import { MdTitle } from "react-icons/md";
import { useRef } from "react";
import axiosInstance from "../../services/api/axiosInstance";

function TipTapToolbar({ editor }) {
	const fileInputRef = useRef(null);
	if (!editor) return null;

	const buttonClass = (active) =>
		`p-2 rounded-md border bg-white shadow-sm hover:bg-gray-100 transition-all ${
			active ? "bg-blue-500 text-white" : "text-gray-700"
		}`;

	const handleImageUpload = async (event) => {
		const file = event.target.files[0];
		if (!file) return;

		const formData = new FormData();
		formData.append("file", file);

		try {
			const response = await axiosInstance.post(
				"editor-upload",
				formData,
				{
					headers: { "Content-Type": "multipart/form-data" },
				}
			);
			const imageUrl = response.data.result.url;
			editor.chain().focus().setImage({ src: imageUrl }).run();
		} catch (error) {
			console.error("Image upload failed:", error);
			alert("Tải ảnh thất bại.");
		}
	};

	return (
		<div className="flex flex-wrap gap-2 mb-3 px-2 py-2 bg-gray-50 border border-gray-300 rounded-lg">
			{/* TEXT FORMATTING */}
			<button
				className={buttonClass(editor.isActive("bold"))}
				onClick={() => editor.chain().focus().toggleBold().run()}
			>
				<FaBold />
			</button>
			<button
				className={buttonClass(editor.isActive("italic"))}
				onClick={() => editor.chain().focus().toggleItalic().run()}
			>
				<FaItalic />
			</button>
			<button
				className={buttonClass(editor.isActive("underline"))}
				onClick={() => editor.chain().focus().toggleUnderline().run()}
			>
				<FaUnderline />
			</button>

			{/* HEADING */}
			<button
				className={buttonClass(
					editor.isActive("heading", { level: 2 })
				)}
				onClick={() =>
					editor.chain().focus().toggleHeading({ level: 2 }).run()
				}
			>
				<MdTitle className="text-lg" />
			</button>

			{/* QUOTE + LIST */}
			<button
				className={buttonClass(editor.isActive("blockquote"))}
				onClick={() => editor.chain().focus().toggleBlockquote().run()}
			>
				<FaQuoteRight />
			</button>
			<button
				className={buttonClass(editor.isActive("bulletList"))}
				onClick={() => editor.chain().focus().toggleBulletList().run()}
			>
				<FaListUl />
			</button>
			<button
				className={buttonClass(editor.isActive("orderedList"))}
				onClick={() => editor.chain().focus().toggleOrderedList().run()}
			>
				<FaListOl />
			</button>

			{/* IMAGE UPLOAD */}
			<button
				className={buttonClass()}
				onClick={() => fileInputRef.current.click()}
			>
				<FaImage />
			</button>
			<input
				type="file"
				ref={fileInputRef}
				accept="image/*"
				className="hidden"
				onChange={handleImageUpload}
			/>

			{/* UNDO / REDO / CLEAR */}
			<button
				className={buttonClass()}
				onClick={() => editor.chain().focus().undo().run()}
			>
				<FaUndo />
			</button>
			<button
				className={buttonClass()}
				onClick={() => editor.chain().focus().redo().run()}
			>
				<FaRedo />
			</button>
			<button
				className={buttonClass()}
				onClick={() =>
					editor.chain().focus().clearNodes().unsetAllMarks().run()
				}
			>
				<FaEraser />
			</button>
		</div>
	);
}

export default TipTapToolbar;
