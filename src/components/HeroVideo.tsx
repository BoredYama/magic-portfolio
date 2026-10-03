"use client";

import { Column } from "@once-ui-system/core";
import { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  src: string;
  /** Smaller encode served below 1024px viewport width */
  srcMobile?: string;
  /** First frame, shown while the video loads */
  posterStart: string;
  /** Last frame, shown when motion is reduced or autoplay is blocked */
  posterEnd: string;
}

/**
 * Full-bleed background video for the hero. Plays once and holds on its last frame.
 * Must be placed inside a positioned wrapper; it stretches up to the top of the page.
 */
export const HeroVideo: React.FC<HeroVideoProps> = ({ src, srcMobile, posterStart, posterEnd }) => {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  // Position relative to the wrapper so the video spans the page edge to edge (100vw would
  // include the scrollbar and cause horizontal scrolling)
  const [bleed, setBleed] = useState({ top: 0, left: 0, width: 0 });
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [stillOnly, setStillOnly] = useState(false);

  useEffect(() => {
    const parent = ref.current?.parentElement;
    const measure = () => {
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      setBleed({
        // Reach up behind the header so the video starts at the very top of the page
        top: rect.top + window.scrollY,
        left: rect.left,
        width: document.documentElement.clientWidth,
      });
    };
    measure();
    window.addEventListener("resize", measure);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStillOnly(true);
    } else {
      setVideoSrc(srcMobile && window.innerWidth < 1024 ? srcMobile : src);
    }
    return () => window.removeEventListener("resize", measure);
  }, [src, srcMobile]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: re-run when the source is chosen, which mounts the video
  useEffect(() => {
    videoRef.current?.play().catch((error: DOMException) => {
      // Autoplay blocked (e.g. low-power mode): show the final frame instead. Other rejections,
      // like Chrome pausing a background tab, resume on their own when the tab is shown.
      if (error.name === "NotAllowedError") setStillOnly(true);
    });
  }, [videoSrc]);

  return (
    <Column
      ref={ref}
      aria-hidden
      position="absolute"
      overflow="hidden"
      zIndex={-1}
      style={{
        top: -bleed.top,
        bottom: 0,
        left: -bleed.left,
        width: bleed.width || "100%",
        pointerEvents: "none",
        background: `#05080c url(${posterStart}) center / cover no-repeat`,
      }}
    >
      {stillOnly ? (
        <img src={posterEnd} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        videoSrc && (
          <video
            src={videoSrc}
            poster={posterStart}
            autoPlay
            muted
            playsInline
            preload="auto"
            onError={() => setStillOnly(true)}
            ref={videoRef}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )
      )}
      <Column
        position="absolute"
        fill
        style={{
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.45) 72%, var(--page-background) 100%)",
        }}
      />
    </Column>
  );
};
