"use client";

import { Column, Text } from "@once-ui-system/core";
import { useEffect, useRef } from "react";

interface InlineVideoProps extends React.ComponentProps<typeof Column> {
  src: string;
  poster?: string;
  /** Shown under the video */
  caption?: React.ReactNode;
}

/**
 * Muted, looping clip for case studies. Plays only while on screen; controls let
 * viewers unmute (autoplay requires muted video).
 */
export const InlineVideo: React.FC<InlineVideoProps> = ({ src, poster, caption, ...flex }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <Column fillWidth gap="8" marginTop="8" marginBottom="16" {...flex}>
      <Column
        fillWidth
        radius="m"
        border="neutral-alpha-medium"
        overflow="hidden"
        style={{ aspectRatio: "16 / 9" }}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          controls
          preload="none"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </Column>
      {caption && (
        <Text variant="body-default-s" onBackground="neutral-weak">
          {caption}
        </Text>
      )}
    </Column>
  );
};
