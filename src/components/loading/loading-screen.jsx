import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Star, Music2 } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const useLoading = (initialState = true) => {
  const [isLoading, setIsLoading] = useState(initialState);
  const stopLoading = () => setIsLoading(false);
  const startLoading = () => setIsLoading(true);

  return { isLoading, stopLoading, startLoading };
};

const LoadingScreen = ({ isLoading, onLoadingComplete, connectionSpeed = "normal" }) => {
  const [progress, setProgress] = useState(0);
  const [currentLetter, setCurrentLetter] = useState(0);

  const text = "AKHIR SEBUAH CERITA,";
  const year = "awal sebuah perjalanan.";
  const letters = text.split("");

  useEffect(() => {
    if (!isLoading) return;

    const getProgressSpeed = () => {
      switch (connectionSpeed) {
        case "slow": return 0.5;
        case "fast": return 3;
        default: return 1.5;
      }
    };

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            if (onLoadingComplete) onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + getProgressSpeed();
      });
    }, 50);

    const letterInterval = setInterval(() => {
      setCurrentLetter((prev) => (prev + 1) % letters.length);
    }, 200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(letterInterval);
    };
  }, [isLoading, onLoadingComplete, connectionSpeed, letters.length]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-12 p-6 overflow-hidden">

      <div className="relative z-10 text-center flex flex-col items-center mt-10 md:mt-0" data-aos="fade-right">
        <div className="flex justify-center space-x-1 md:space-x-2 mb-8">
          {letters.map((letter, index) => (
            <span
              key={index}
              className={`text-xl md:text-4xl font-bold transition-all duration-300 ${index === currentLetter ? "text-red-800 scale-125" : "text-gray-300 scale-100"
                }`}
              style={{
                textShadow: index === currentLetter ? "0 0 20px rgba(37, 99, 235, 0.4)" : "none",
                display: letter === " " ? "margin-right: 1rem" : "inline-block"
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
        <span className=" text-xl font-serif font-bold tracking-tight bg-gradient-to-r from-black to-red-600 bg-clip-text text-transparent">{year}</span>
      </div>

      <div
        data-aos="fade-left"
        className="relative w-full max-w-xs bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-2xl"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative aspect-square mb-8 rounded-2xl overflow-hidden shadow-lg group"
        >
          <img
            src="img/loading/lagu3.png"
            alt="Album Art"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute bottom-4 left-4 flex items-end gap-1 h-8">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                animate={{ height: [4, 16, 8, 20, 4] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                className="w-1 bg-white rounded-full"
              />
            ))}
          </div>
        </motion.div>

        <div className="flex justify-between items-start mb-6">
          <div className="space-y-1">
            <h1 className="font-bold text-lg tracking-tight bg-gradient-to-r from-black to-red-600 bg-clip-text text-transparent">
              Di Akhir Perang
            </h1>
            <p className="text-gray-500 text-sm font-medium">Nadin Amizah</p>
          </div>
          <button className="text-gray-400 hover:text-red-500 transition-colors">
            <Star size={20} />
          </button>
        </div>

        <div className="mb-8">
          <div className="bg-gray-100 rounded-full h-1.5 w-full mb-3 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-black to-red-600"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-gray-400 font-mono">
            <span>0:{Math.floor(progress / 2).toString().padStart(2, '0')}</span>
            <span className="text-red-500">LOADING {Math.round(progress)}%</span>
          </div>
        </div>

        <div className="flex justify-between items-center px-2">
          <SkipBack className="text-gray-400 cursor-pointer" size={24} />
          <div className="relative">
            <button className="bg-black text-white p-4 rounded-full hover:scale-105 transition-transform shadow-xl">
              {progress < 100 ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
            </button>
          </div>
          <SkipForward className="text-gray-400 cursor-pointer" size={24} />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;