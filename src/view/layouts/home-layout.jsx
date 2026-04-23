import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { data } from "../../core/mock/nav-data";
import { HashLink } from "react-router-hash-link";
import { FaInstagram, FaGlobe, FaEnvelope, FaPhone, FaHome, FaInfoCircle, FaNewspaper, FaImages, FaSignInAlt } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Home,
  Info,
  Newspaper,
  CircleUser,
  Headset,
} from "lucide-react";

export const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', 
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const menus = data || [];
  const navScrolled = isScrolled;

  const getIcon = (name, isActive) => {
    const iconName = name.toLowerCase();
    const style = `text-xl transition-all ${isActive ? "scale-125" : ""}`;
    
    if (iconName.includes('home')) return <Home className={style} />;
    if (iconName.includes('about')) return <CircleUser className={style} />;
    if (iconName.includes('project')) return <Newspaper className={style} />;
    if (iconName.includes('kontak')) return <Headset className={style} />;

    return <Home className={style} />;
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-[#0B1120]">
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            navScrolled ? "bg-white/60 backdrop-blur-lg py-4 shadow-lg" : "bg-transparent py-6"
        }`}>
            <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center">
            <HashLink smooth to="#home" className="flex items-center gap-3">
                <h1 className={`text-xl font-bold  transition-colors duration-300 ${navScrolled ? "text-black" : "text-white"}`}>
                <Typewriter options={{ strings: ['DWI RAHMAWATI', 'Frontend Developer'], autoStart: true, loop: true }} />
                </h1>
            </HashLink>

            <div className="hidden md:flex items-center gap-8">
                <ul className="flex items-center space-x-8">
                {menus.filter(m => m.name !== "Masuk").map((menu, index) => {
                    const isActive = activeSection === menu.path.replace("#", "");
                    return (
                    <li key={index}>
                        <HashLink
                        smooth
                        to={menu.path}
                        className={`text-[14px] font-semibold transition-all duration-300 relative py-1
                            ${navScrolled 
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
                </ul>
            </div>
            </div>
        </nav>

        <main className="flex-grow">
            <Outlet />
        </main>

        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t z-[100] py-3 shadow-[0_-5px_15px_rgba(0,0,0,0.1)] rounded-t-3xl">
            <div className="flex justify-around items-center px-4">
            {menus.filter(m => m.name !== "Masuk").map((menu, index) => {
                const isActive = activeSection === menu.path.replace("#", "");
                return (
                <HashLink
                    key={index}
                    smooth
                    to={menu.path}
                    className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                    isActive ? "text-red-800 -translate-y-1" : "text-gray-400"
                    }`}
                >
                    {getIcon(menu.name, isActive)}
                    <span className={`text-[10px] font-bold ${isActive ? "opacity-100" : "opacity-70"}`}>{menu.name}</span>
                </HashLink>
                );
            })}
            </div>
        </div>
      
        <footer className=" bg-[#0B1120] text-gray-400 py-12 px-6 border-t border-gray-800 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <img src="/images/SMKNLOGO1.png" alt="Logo" className="w-12 h-14 object-contain" />
                        <div>
                            <h2 className="text-white text-[20px] font-semibold uppercase">DWI RAHMAWATI</h2>
                            <p className="text-white font-medium text-[12px]">Frontend Developer</p>
                        </div>
                    </div>
                    <p className="text-[14px] leading-relaxed">
                        Sebagai Frontend Developer, saya fokus menciptakan tampilan yang tidak hanya 
                        indah tetapi juga fungsional, responsif, dan nyaman digunakan oleh pengguna.
                    </p>
                    <div className="flex gap-4 mt-6 text-red-500">
                        <a href="https://www.instagram.com/smknegeri3pamekasan?igsh=MThmYzFoN29kODEyZA==" 
                        className="hover:text-red-800 transition text-lg" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://smkn3pamekasan.sch.id/" className="hover:text-red-800 transition text-lg" target="_blank" rel="noopener noreferrer">
                            <FaGlobe />
                        </a>
                        <a href="mailto:smkn3pmk@yahoo.com" className="hover:text-red-800 transition text-lg" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope />
                        </a>
                        <a href="tel:+62324322576" className="hover:text-red-800 transition text-lg" target="_blank" rel="noopener noreferrer">
                            <FaPhone />
                        </a>
                    </div>
                </div>

                <div className=" hidden md:block">
                    <h3 className="text-white font-bold text-[15px] mb-4 border-l-4 border-red-600 pl-3">About Me</h3>
                    <p className="text-[13px] leading-relaxed text-justify text-gray-300">
                        Saya adalah seorang Pelajar SMKN 3 Pamekasan yang tertarik dibidang Frontend Developer yang dimana bidang ini
                        berfokus pada pembuatan tampilan web yang modern, responsif, dan user-friendly.
                        Saya juga terus belajar dan mengembangkan kemampuan untuk menciptakan pengalaman pengguna yang lebih baik melalui
                        desain yang clean dan performa yang optimal.
                    </p>
                </div>

                <div className="hidden md:block lg:col-span-2">
                    <h3 className="text-white font-bold text-[15px] mb-4 border-l-4 border-red-600 pl-3">What I Do</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-[12px] leading-snug text-gray-300">
                        <li className="flex items-start gap-2">
                            <span className="text-red-500">•</span>
                            Membangun tampilan website yang modern, responsif, dan menarik
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-500">•</span>
                            Mengubah desain (UI/UX) menjadi kode yang rapi dan terstruktur
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-500">•</span>
                            Mengembangkan komponen UI yang reusable dan efisien
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-500">•</span>
                            Mengoptimalkan performa dan pengalaman pengguna
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-500">•</span>
                            Mengelola tampilan menggunakan teknologi frontend modern.
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  );
};