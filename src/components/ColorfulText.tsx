import { useState, useRef } from 'react';

interface ColorfulTextProps {
  text: string;
  className?: string;
}

export default function ColorfulText({ text, className = '' }: ColorfulTextProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const textRef = useRef<HTMLParagraphElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLParagraphElement>) => {
    if (!textRef.current) return;
    const rect = textRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getColorForDistance = (charX: number, charY: number) => {
    const distance = Math.sqrt(
      Math.pow(mousePos.x - charX, 2) + Math.pow(mousePos.y - charY, 2)
    );

    const radius = 150; // Hover radius

    if (distance > radius) {
      return 'rgba(255, 255, 255, 0.8)'; // Default white
    }

    const intensity = 1 - distance / radius;

    // Cycle through watercolor colors based on position
    const angle = Math.atan2(mousePos.y - charY, mousePos.x - charX);
    const normalizedAngle = (angle + Math.PI) / (2 * Math.PI);

    if (normalizedAngle < 0.33) {
      // Emerald green
      return `rgba(107, 155, 127, ${0.8 + intensity * 0.2})`;
    } else if (normalizedAngle < 0.66) {
      // Golden amber
      return `rgba(212, 165, 116, ${0.8 + intensity * 0.2})`;
    } else {
      // Pastel blue-green
      return `rgba(168, 197, 192, ${0.8 + intensity * 0.2})`;
    }
  };

  return (
    <p
      ref={textRef}
      className={`${className} select-none`}
      onMouseMove={handleMouseMove}
      style={{ lineHeight: '1.9' }}
    >
      {text.split('').map((char, index) => {
        // Calculate approximate position (this is a simplified version)
        const charsPerLine = 80; // Approximate
        const lineHeight = 30; // Approximate in pixels
        const charWidth = 10; // Approximate in pixels

        const line = Math.floor(index / charsPerLine);
        const col = index % charsPerLine;

        const charX = col * charWidth;
        const charY = line * lineHeight;

        return (
          <span
            key={index}
            style={{
              color: getColorForDistance(charX, charY),
              transition: 'color 0.1s ease',
              display: char === '\n' ? 'block' : 'inline',
            }}
          >
            {char}
          </span>
        );
      })}
    </p>
  );
}
