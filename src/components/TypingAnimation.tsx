import { useEffect, useState } from 'react';

interface TypingAnimationProps {
  texts: string[];
  className?: string;
}

export const TypingAnimation = ({ texts, className = "" }: TypingAnimationProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const targetText = texts[currentTextIndex];
    
    if (isTyping) {
      if (currentText.length < targetText.length) {
        const timer = setTimeout(() => {
          setCurrentText(targetText.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (currentText.length > 0) {
        const timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [currentText, currentTextIndex, isTyping, texts]);

  return (
    <span className={`typing-cursor ${className}`}>
      {currentText}
    </span>
  );
};