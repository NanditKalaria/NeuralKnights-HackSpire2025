import React, { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Volume2, StopCircle } from 'lucide-react'; // Import icons for better UX

const FlashCard = ({ title, content }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const speechSynthRef = useRef(null);

  const handleSpeak = () => {
    // If already speaking, stop it
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    // Cancel any ongoing speech synthesis
    window.speechSynthesis.cancel();

    // Create new speech synthesis instance
    const utterance = new SpeechSynthesisUtterance(content);
    
    // Configure speech settings
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    // Handle speech end
    utterance.onend = () => {
      setIsSpeaking(false);
    };

    // Handle speech error
    utterance.onerror = () => {
      setIsSpeaking(false);
    };

    // Store reference to current utterance
    speechSynthRef.current = utterance;

    // Start speaking
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <Card className="h-[400px] w-full bg-[#0C1F17] border border-white/10 shadow-2xl rounded-xl text-white overflow-hidden hover:border-emerald-500/50 transition-all duration-300">
      <div className="h-full flex flex-col">
        {/* Header - Fixed at top */}
        <div className="p-6 pb-3 bg-[#0C1F17] border-b border-white/5 flex justify-between items-center">
          <span className="text-emerald-400 font-bold uppercase tracking-wider text-lg">
            {title}
          </span>
          <button
            onClick={handleSpeak}
            className={`p-2 rounded-full transition-all duration-300 ${
              isSpeaking 
                ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' 
                : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30'
            }`}
            aria-label={isSpeaking ? "Stop speaking" : "Start speaking"}
          >
            {isSpeaking ? <StopCircle size={20} /> : <Volume2 size={20} />}
          </button>
        </div>

        {/* Content - Scrollable area */}
        <div className="flex-1 p-6 pt-4 overflow-y-auto custom-scrollbar">
          <p className="text-white/90 text-base leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default FlashCard;