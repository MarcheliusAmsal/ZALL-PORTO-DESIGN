import { useRef, useEffect } from 'react';

interface FadingVideoProps {
  src: string | string[];
  className?: string;
  style?: React.CSSProperties;
}

export default function FadingVideo({ src, className, style }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const srcArray = Array.isArray(src) ? src : [src];
  const srcIndex = useRef(0);
  const isFadingOut = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number;

    const fade = (start: number, end: number, duration: number, onComplete?: () => void) => {
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        video.style.opacity = (start + (end - start) * progress).toString();
        
        if (progress < 1) {
          rafId = requestAnimationFrame(animate);
        } else if (onComplete) {
          onComplete();
        }
      };
      rafId = requestAnimationFrame(animate);
    };

    const handleLoadedData = () => {
      isFadingOut.current = false;
      fade(0, 1, 500);
    };

    const handleTimeUpdate = () => {
      const remaining = video.duration - video.currentTime;
      if (remaining <= 0.55 && !isFadingOut.current) {
        isFadingOut.current = true;
        fade(1, 0, 550);
      }
    };

    const handleEnded = () => {
      if (srcArray.length === 1) {
        video.currentTime = 0;
        video.play();
        isFadingOut.current = false;
        fade(0, 1, 500);
      } else {
        srcIndex.current = (srcIndex.current + 1) % srcArray.length;
        video.src = srcArray[srcIndex.current];
        video.play();
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [srcArray]);

  return (
    <video
      ref={videoRef}
      src={srcArray[0]}
      className={className}
      style={{ ...style, opacity: 0 }}
      autoPlay
      muted
      playsInline
      preload="auto"
    />
  );
}