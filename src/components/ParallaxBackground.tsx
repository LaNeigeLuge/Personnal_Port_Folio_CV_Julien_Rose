import { useEffect, useState } from 'react';

export default function ParallaxBackground() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = position / maxScroll;
      setScrollPosition(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate vertical position based on scroll
  // The image scrolls slower than content (parallax effect)
  // As you scroll down, background travels through your vertical watercolor painting
  const imageOffset = scrollPosition * 40; // Smooth parallax movement

  return (
    <div
      className="page-background"
      style={{
        backgroundImage: 'url(/src/assets/parallax-bg.jpg)',
        backgroundPosition: `center ${imageOffset}%`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        willChange: 'background-position',
      }}
    />
  );
}
