"use client"

import { useState, useEffect } from 'react';

interface PromptInputBoxProps {
  onPromptChange?: (prompt: string) => void;
}

export default function PromptInputBox({ onPromptChange }: PromptInputBoxProps) {
  const [inputValue, setInputValue] = useState('');
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const placeholders = [
    "I run an IT services firm. I want steady leads and booked sales meetings.",
    "I want to grow my business with more leads and less manual work.",
    "Help me automate my sales funnel so I can focus on closing deals.",
    "Help me qualify SaaS leads automatically and move them to my sales team.",
    "I’m a real estate broker I want more qualified buyer leads and faster closings.",
    "Help me automate follow-ups so my open house leads book calls automatically.",
    "Show me how I can turn online property inquiries into signed deals.",
  ];

  const currentPlaceholder = placeholders[currentPlaceholderIndex];

  useEffect(() => {
    const typeText = () => {
      if (isTyping && charIndex < currentPlaceholder.length) {
        setDisplayedText(currentPlaceholder.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isTyping) {
        // Finished typing, wait then start erasing
        setTimeout(() => setIsTyping(false), 2000);
      } else if (charIndex > 0) {
        // Erasing
        setDisplayedText(currentPlaceholder.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        // Finished erasing, move to next placeholder
        setIsTyping(true);
        setCurrentPlaceholderIndex(prev => (prev + 1) % placeholders.length);
      }
    };

    const timeout = setTimeout(typeText, isTyping ? 30 + Math.random() * 30 : 20);
    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, currentPlaceholderIndex, currentPlaceholder, placeholders.length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onPromptChange?.(value);
  };

  return (
    <div className="relative bg-gray-800/40 backdrop-blur-sm border border-gray-400/50 rounded-2xl p-4" data-testid="prompt-input-box">
      {inputValue === '' && (
        <div className="absolute top-4 left-4 right-4 pointer-events-none text-gray-500 font-normal text-base text-left">
          {displayedText}
          {/* Describe your business or goal… */}
          <span className="animate-blink text-gray-500">|</span>
        </div>
      )}
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        className="w-full bg-transparent text-gray-200 border-none outline-none resize-none font-normal text-base min-h-[60px] relative z-10"
        data-testid="prompt-input"
        rows={3}
      />
    </div>
  );
}