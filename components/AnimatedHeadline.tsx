"use client"

import React, { useState, useEffect } from 'react';

interface AnimatedHeadlineProps {
  baseText: string;
  phrases: string[];
  interval?: number;
  className?: string;
  periodColors?: string[];
}

const FADE_TRANSITION_DURATION = 500;
const DEFAULT_PERIOD_COLORS = ['#2062af', '#00aa7e', '#ffd000', '#e6000a', '#ffffff'];

const AnimatedHeadline: React.FC<AnimatedHeadlineProps> = ({
  baseText,
  phrases,
  interval = 2000,
  className = '',
  periodColors = DEFAULT_PERIOD_COLORS,
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isPhraseVisible, setIsPhraseVisible] = useState(true);

  useEffect(() => {
    if (!phrases || phrases.length === 0) {
        setIsPhraseVisible(true);
        setCurrentPhraseIndex(0);
        return;
    }
    if (phrases.length === 1) {
        setIsPhraseVisible(true);
        setCurrentPhraseIndex(0);
        return;
    }

    setIsPhraseVisible(true);

    const timer = setInterval(() => {
      setIsPhraseVisible(false);

      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsPhraseVisible(true);
      }, FADE_TRANSITION_DURATION);
    }, interval + FADE_TRANSITION_DURATION);

    return () => clearInterval(timer);
  }, [phrases, interval, periodColors]);

  const currentPhrase = (phrases && phrases.length > 0) ? phrases[currentPhraseIndex] : '';

  return (
    <h1 className={className}>
      {baseText}{' '}
      <span
        className={`inline-block transition-opacity duration-500 ease-in-out ${isPhraseVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {currentPhrase}
      </span>
    </h1>
  );
};

export default AnimatedHeadline;