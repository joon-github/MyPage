"use client";
import React, { useState, useEffect } from "react";
import "./styles.scss";

interface TypingProps {
  documents: string[];
}

const Typing = ({ documents }: TypingProps) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pause = 2000;

  useEffect(() => {
    const type = () => {
      if (charIndex < documents[textIndex].length && !isDeleting) {
        setCurrentText((prev) => prev + documents[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (charIndex === documents[textIndex].length && !isDeleting) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (charIndex === 0 && isDeleting) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % documents.length);
      }
    };

    const timeout = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, documents, textIndex]);

  return (
    <div className="typing-container">
      <span className={`typing-text text-wrap`}>{currentText}</span>
      <span>|</span>
    </div>
  );
};

export default Typing;
