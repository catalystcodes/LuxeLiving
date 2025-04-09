import React, { useEffect, useRef } from "react";

interface VideoPlayerProps {
  id: string;
  publicId: string;
  width: string;
  height: string;
  [key: string]: any; // Allow additional props
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  id,
  publicId,
  width,
  height,
  ...props
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cloudinaryRef = useRef<any>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (cloudinaryRef.current) return;

    cloudinaryRef.current = (window as any).cloudinary;

    if (videoRef.current && cloudinaryRef.current) {
      playerRef.current = cloudinaryRef.current.videoPlayer(videoRef.current, {
        cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
        secure: true,
      });
    }
  }, []);

  return (
    <div style={{ width: "100%", aspectRatio: `${width} / ${height}` }}>
      <video
        ref={videoRef}
        id={id}
        className="cld-video-player cld-fluid"
        controls
        autoPlay
        data-cld-public-id={publicId}
        {...props}
      />
    </div>
  );
};

export default VideoPlayer;
