"use client";
import ModalVideo from "react-modal-video";
// import "react-modal-video/scss/modal-video.scss";
const VideoModal = ({ isOpen, setOpen }) => {
  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="kt6orVslhsk?si=WcbxJ1gnaVQzT5Wy"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default VideoModal;