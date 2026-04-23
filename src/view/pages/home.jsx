import LightPillar from '../../components/LightPillar';
import '../../App.css'
import {MapPinned, } from 'lucide-react';


export default function Home() {
    return (
        <div className="flex flex-col w-full bg-[#0B1120]">
            <section id="home" className="relative w-full h-screen overflow-hidden flex items-center justify-center ">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <LightPillar
                        topColor="#FFFFFF"
                        bottomColor="#FF0000"
                        intensity={0.6}
                        rotationSpeed={0.6}
                        pillarWidth={3}
                        interactive={false}
                        pillarRotation={70} 
                    />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center w-full select-none" data-aos="zoom-out">
                    
                    <h2 className=" hidden md:block absolute text-[100px] md:text-[200px] lg:text-[300px] bungee-regular text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] leading-none translate-y-[-20px]">
                        CHRONICLES
                    </h2>

                    <h1 className="relative text-5xl md:text-8xl lg:text-[180px] bungee-regular text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] tracking-tighter leading-none">
                        EPILOG SMK
                    </h1>

                    <div className="mt-4 flex flex-col items-center">
                        <p className="bg-gradient-to-r from-white to-red-700 bg-clip-text text-transparent font-mono tracking-[0.5em] text-sm md:text-xl uppercase font-bold">
                            Frontend Developer
                        </p>
                        <div className="h-[2px] w-12 bg-white mt-2 animate-pulse"></div>
                    </div>
                </div>

                <div className="absolute top-18 left-10 hidden lg:block border-l border-white/20 pl-4 py-2">
                    <p className="text-white/40 text-xs font-mono uppercase tracking-widest leading-relaxed">
                        Haloo Calon Idol Disinii<br /> Pamekasan, Jawa Timur
                    </p>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent z-20" />
                
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce opacity-50">
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
                </div>
            </section>


            <section id="about" className="relative w-full min-h-screen flex items-center justify-center bg-[#0B1120] py-20 overflow-hidden">
                <div className="absolute top-68 -right-53 text-[100px] font-bold text-white/5 select-none pointer-events-none rotate-90 bungee-regular">
                    THE STORY
                </div>

                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    
                    <div className="relative group" data-aos="fade-right">
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 border-2 border-[#d1a355] translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                            <div className="absolute inset-0 bg-[#570005] overflow-hidden group-hover:shadow-[0_0_30px_rgba(87,0,5,0.5)] transition-all duration-500">
                                <img 
                                    src="img/me/me4.png" 
                                    alt="Profile" 
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100 group-hover:scale-105"
                                />
                            </div>

                            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-xl hidden md:block">
                                <p className="text-white font-bold text-3xl drop-shadow-md">PPLG</p>
                                <p className="text-[#d1a355] text-xs font-bold tracking-widest uppercase mt-1">Class of 2026</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3" data-aos="fade-left">
                        <div>
                            <h3 className="text-[#d1a355] font-mono tracking-widest mb-1 text-sm">CHAPTER 1: THE BEGINNING</h3>
                            <h2 className="text-5xl text-white md:text-6xl font-bold bungee-regular leading-tight">
                                BEHIND THE <span className="text-transparent [-webkit-text-stroke:1px_#d1a355]">CODE</span>
                            </h2>
                            <div className="h-1 w-20 bg-[#570005] "></div>
                        </div>

                        <div className="space-y-3 text-gray-400 text-lg leading-relaxed max-w-xl">
                            <p>
                                Haloo Cewe Mark Disinii! Kenalin, aku <span className="text-white font-semibold">Dwi Rahmawati</span>. Halaman ini bukan sekadar informasi, tapi kapsul waktu yang merangkum perjalananku sebagai Siswa PPLG selama di SMK.
                            </p>
                            <p>
                                Tiga tahun belajar di <span className="text-white italic">SMKN 3 Pamekasan</span> penuh dengan logika, *error* yang bikin begadang, sampai kepuasan saat kode akhirnya berjalan mulus. Di sinilah aku menggabungkan barisan kode dengan sentuhan desain modern.
                            </p>
                        </div>

                        <div className="pt-4 border-t border-white/10 max-w-xl">
                            <p className="text-[#d1a355] font-mono text-xs tracking-widest uppercase mb-6">Tech Stack In Use</p>
                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center">
                                
                                <div className="relative group p-4 bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:border-[#d1a355]/50 hover:bg-[#d1a355]/5" style={{ borderRadius: '1rem' }}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-10 h-10 transition-all group-hover:scale-110" alt="HTML5" />
                                    <span className="absolute -bottom-6 text-[10px] text-gray-600 font-mono opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity uppercase">HTML5</span>
                                </div>

                                <div className="relative group p-4 bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:border-[#d1a355]/50 hover:bg-[#d1a355]/5" style={{ borderRadius: '1rem' }}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-10 h-10 transition-all group-hover:scale-110" alt="CSS3" />
                                    <span className="absolute -bottom-6 text-[10px] text-gray-600 font-mono opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity uppercase">CSS3</span>
                                </div>

                                <div className="relative group p-4 bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:border-[#d1a355]/50 hover:bg-[#d1a355]/5" style={{ borderRadius: '1rem' }}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-10 h-10 transition-all group-hover:scale-110" alt="JS" />
                                    <span className="absolute -bottom-6 text-[10px] text-gray-600 font-mono opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity uppercase">JS</span>
                                </div>

                                <div className="relative group p-4 bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:border-[#d1a355]/50 hover:bg-[#d1a355]/5" style={{ borderRadius: '1rem' }}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-10 h-10 transition-all group-hover:scale-110" alt="React" />
                                    <span className="absolute -bottom-6 text-[10px] text-gray-600 font-mono opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity uppercase">React</span>
                                </div>

                                <div className="relative group p-4 bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:border-[#d1a355]/50 hover:bg-[#d1a355]/5" style={{ borderRadius: '1rem' }}>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" className="w-10 h-10 transition-all group-hover:scale-110" alt="Tailwind" />
                                    <span className="absolute -bottom-6 text-[10px] text-gray-600 font-mono opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity uppercase">Tailwind</span>
                                </div>

                                <div className="relative group p-4 bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:border-[#d1a355]/50 hover:bg-[#d1a355]/5" style={{ borderRadius: '1rem' }}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" className="w-10 h-10 transition-all group-hover:scale-110" alt="Laravel" />
                                    <span className="absolute -bottom-6 text-[10px] text-gray-600 font-mono opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity uppercase">Laravel</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="project" className="relative w-full min-h-screen flex items-center justify-center bg-[#0B1120] text-white">
                <div className="container mx-auto px-6" data-aos="fade-right">
                    <h1 className="text-4xl font-bold border-l-4 border-blue-600 pl-4">project</h1>
                   
                </div>
            </section>
            <section id="kontak" className="relative w-full min-h-screen flex items-center justify-center bg-[#0B1120] text-white">
                <div className="container mx-auto px-6" data-aos="fade-right">
                    <h1 className="text-4xl font-bold border-l-4 border-blue-600 pl-4">kontak</h1>
                </div>
            </section>
            
        </div>
    );
}