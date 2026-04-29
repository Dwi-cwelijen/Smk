import React, { useEffect, useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import { data } from "../../core/mock/nav-data";
import { Music2, Home, CircleUser, Newspaper, Headset,Play, SkipBack, SkipForward, Shuffle, Repeat,ImageMinus } from 'lucide-react';
import { HashLink } from "react-router-hash-link";
import { FaInstagram, FaGlobe, FaEnvelope, FaPhone,FaWhatsapp,FaGithub } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import LoadingScreen, { useLoading } from "../../components/loading/loading-screen";
import AOS from 'aos';
import '../../index.css';
import 'aos/dist/aos.css';

export const Layout = () => {
    const { isLoading, connectionSpeed, stopLoading } = useLoading(true);
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [showStartButton, setShowStartButton] = useState(false); 

    useEffect(() => {
        const audio = new Audio("/audio/lagu.mp3"); 
        audio.loop = true;
        audio.volume = 0.1;
        audioRef.current = audio;

        AOS.init({ duration: 1000, once: true });

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const startExperience = () => {
        if (audioRef.current) {
            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                    stopLoading(); 
                })
                .catch(err => {
                    console.error("Gagal putar musik:", err);
                    stopLoading(); 
                });
        }
    };

    const toggleMusic = () => {
        if (!audioRef.current) return;
        if (audioRef.current.paused) {
            audioRef.current.play().then(() => setIsPlaying(true));
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleLoadingComplete = () => {
        setShowStartButton(true); 
    };

    useEffect(() => {
        const handleFirstClick = () => {
            if (audioRef.current && !isPlaying && !isLoading) {
                audioRef.current.play().then(() => setIsPlaying(true));
                window.removeEventListener("click", handleFirstClick);
            }
        };
        window.addEventListener("click", handleFirstClick);
        return () => window.removeEventListener("click", handleFirstClick);
    }, [isPlaying, isLoading]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isLoading) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActiveSection(entry.target.id);
            });
        }, { rootMargin: '-40% 0px -40% 0px' });

        document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, [isLoading]);

    const menus = data || [];

    const getIcon = (name, isActive) => {
        const style = `text-xl transition-all ${isActive ? "scale-125" : ""}`;
        if (name.toLowerCase().includes('home')) return <Home className={style} />;
        if (name.toLowerCase().includes('about')) return <CircleUser className={style} />;
        if (name.toLowerCase().includes('project')) return <Newspaper className={style} />;
        if (name.toLowerCase().includes('galery')) return <ImageMinus className={style} />;
        return <Home className={style} />;
    };

    return (
        <>
           
            <LoadingScreen
                isLoading={isLoading}
                onLoadingComplete={handleLoadingComplete}
                connectionSpeed={connectionSpeed}
            />

            {showStartButton && isLoading && (
                <div className="fixed inset-0 z-[999] flex items-center px-5 md:px-0 justify-center bg-[#0B1120]/80 backdrop-blur-sm">
                    <div className="w-full max-w-md p-6 bg-[#181818] rounded-xl shadow-2xl border border-white/10">
                        <div className="mb-6">
                            <div className="relative w-full h-1 bg-gray-600 rounded-full overflow-hidden">
                                <div className="absolute top-0 left-0 h-full bg-white w-[35%]"></div>
                            </div>
                            <div className="flex justify-between mt-2 text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                                <span>1:17</span>
                                <span>-2:18</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between px-4">
                            <button className="text-gray-400 hover:text-white transition-colors relative">
                                <Shuffle size={20} />
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                            </button>
                            <button className="text-white hover:scale-110 transition-transform">
                                <SkipBack size={28} fill="currentColor" />
                            </button>
                            <button 
                                onClick={startExperience}
                                className="w-14 h-14 flex items-center justify-center bg-white text-black rounded-full hover:scale-105 transition-all shadow-lg active:scale-95"
                            >
                                <Play size={24} fill="currentColor" className="ml-1" />
                            </button>
                            <button className="text-white hover:scale-110 transition-transform">
                                <SkipForward size={28} fill="currentColor" />
                            </button>
                            <button className="text-gray-400 hover:text-white transition-colors">
                                <Repeat size={20} />
                            </button>
                        </div>
                        
                        <p className="text-center text-gray-500 text-[10px] mt-6 font-bold uppercase tracking-widest">
                            Click Play to Start Experience
                        </p>
                    </div>
                </div>
            )}

            {!isLoading && (
                <div className="relative min-h-screen flex flex-col font-sans bg-[#0B1120]">
                    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                        isScrolled ? "bg-white/60 backdrop-blur-lg py-4 shadow-lg" : "bg-transparent py-6"
                    }`}>
                        <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center">
                            <HashLink smooth to="#home" className="flex items-center gap-3">
                                <h1 className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? "text-black" : "text-white"}`}>
                                    <Typewriter options={{ strings: ['DWI RAHMAWATI', 'PACAR MARK DISINII'], autoStart: true, loop: true }} />
                                </h1>
                            </HashLink>

                            <div className="hidden md:flex items-center gap-8">
                                <ul className="flex items-center space-x-8">
                                    {menus.filter(m => m.name !== "Masuk").map((menu, index) => {
                                        const isActive = activeSection === menu.path.replace("#", "");
                                        return (
                                            <li key={index}>
                                                <HashLink
                                                    smooth to={menu.path}
                                                    className={`text-[14px] font-semibold transition-all duration-300 relative py-1
                                                        ${isScrolled 
                                                        ? (isActive ? "text-red-800" : "text-gray-600 hover:text-red-800") 
                                                        : (isActive ? "text-white" : "text-white/60 hover:text-white")}
                                                    `}
                                                >
                                                    {menu.name}
                                                    <span className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 ${isActive ? "w-full" : "w-0"}`}></span>
                                                </HashLink>
                                            </li>
                                        );
                                    })}
                                    <li className="ml-2">
                                        <button onClick={toggleMusic} className={`p-2 rounded-full border transition-all duration-300 flex items-center justify-center ${isScrolled ? "border-red-200 text-red-800" : "border-white/20 text-white"}`}>
                                            <Music2 size={18} className={isPlaying ? "animate-spin" : "opacity-50"} style={{ animationDuration: '3s' }} />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <main className="flex-grow">
                        <Outlet />
                    </main>

                    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t z-[100] py-3 rounded-t-3xl shadow-lg">
                        <div className="flex justify-around items-center px-4">
                            {menus.filter(m => m.name !== "Masuk").map((menu, index) => {
                                const isActive = activeSection === menu.path.replace("#", "");
                                return (
                                    <HashLink key={index} smooth to={menu.path} className={`flex flex-col items-center gap-1 ${isActive ? "text-red-800" : "text-gray-400"}`}>
                                        {getIcon(menu.name, isActive)}
                                        <span className="text-[10px] font-bold">{menu.name}</span>
                                    </HashLink>
                                );
                            })}
                            <button onClick={toggleMusic} className={isPlaying ? "text-red-800" : "text-gray-400"}>
                                <Music2 size={20} className={isPlaying ? "animate-spin" : ""} />
                            </button>
                        </div>
                    </div>

                    <footer className="bg-[#0B1120] text-gray-400 py-8 px-6 border-t border-gray-800 font-sans">
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-4">
                                <img src="/images/SMKNLOGO1.png" alt="Logo" className="w-10 h-12 object-contain" />
                                <div>
                                    <h2 className="text-white text-[18px] font-semibold uppercase tracking-wider">DWI RAHMAWATI</h2>
                                    <p className="text-gray-400 font-medium text-[11px]">Frontend Developer</p>
                                </div>
                            </div>

                            <div className="text-[13px] text-center md:text-left tracking-wide">
                                <p>&copy; 2026 Dwi Rahmawati</p>
                            </div>

                            <div className="flex gap-6 text-gray-400">
                                <a href="https://www.instagram.com/smknegeri3pamekasan?igsh=MThmYzFoN29kODEyZA==" 
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white 
                                hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] 
                                transition-all duration-300 shadow-lg hover:shadow-pink-500/20"
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>

                                <a href="mailto:smkn3pmk@yahoo.com" 
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white 
                                hover:bg-[#24292e] transition-all duration-300"
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <FaGithub size={18} />
                                </a>

                                <a href="https://wa.me/62324322576" 
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white 
                                hover:bg-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.4)] 
                                transition-all duration-300"
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <FaWhatsapp />
                                </a>
                            </div>
                        </div>
                    </footer>
                </div>
            )}
        </>
    );
};