import { useCallback, useEffect, useRef, useState } from "react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider = ({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      setPosition((x / rect.width) * 100);
    },
    []
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) handleMove(e.touches[0].clientX);
    };
    const handleUp = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
    };
  }, [isDragging, handleMove]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] rounded-lg overflow-hidden cursor-col-resize select-none"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After image (full) */}
      <img src={afterSrc} alt={afterLabel} className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeSrc}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "saturate(0.5)" }}
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-accent z-10"
        style={{
          left: `${position}%`,
          boxShadow: "0 0 20px hsl(204 52% 49% / 0.5), 0 0 40px hsl(204 52% 49% / 0.2)",
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 3L2 8L5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground"/>
            <path d="M11 3L14 8L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1 rounded-full">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 bg-accent/80 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
        {afterLabel}
      </span>
    </div>
  );
};

export default BeforeAfterSlider;
