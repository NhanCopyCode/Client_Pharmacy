import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

function ModalVideo({ isShow, onCLoseModal, url, title }) {
	return (
		<Modal
			open={isShow}
			onClose={onCLoseModal}
			center
			classNames={{
				modal: "w-[100vw] max-w-[1000px] aspect-video p-0 overflow-hidden",
			}}
			styles={{
				modal: {
					background: "black", // mimic YouTube black background
				},
			}}
		>
			<iframe
				width="100%"
				height="100%"
				src={url}
				title={title}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			></iframe>
		</Modal>
	);
}

export default ModalVideo;
