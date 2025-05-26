import { useEffect } from "react";

export default function MatrixBackground() {
  useEffect(() => {
    const matrixBg = document.getElementById('matrixBg');
    if (!matrixBg) return;

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    function createChar() {
      const char = document.createElement('div');
      char.className = 'matrix-char';
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = Math.random() * window.innerWidth + 'px';
      char.style.animationDuration = (Math.random() * 3 + 2) + 's';
      char.style.animationDelay = Math.random() * 2 + 's';
      
      matrixBg.appendChild(char);
      
      setTimeout(() => {
        char.remove();
      }, 5000);
    }
    
    const interval = setInterval(createChar, 300);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className="matrix-bg" id="matrixBg" />;
}
