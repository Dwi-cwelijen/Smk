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
                        Portofolio
                    </h2>

                    <h1 className="relative text-5xl md:text-8xl lg:text-[180px] bungee-regular text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] tracking-tighter leading-none">
                        Portofolio
                    </h1>

                    <div className="mt-4 flex flex-col items-center">
                        <p className="text-[#570005] font-mono tracking-[0.5em] text-sm md:text-xl uppercase font-bold">
                            Frontend Developer
                        </p>
                        <div className="h-[2px] w-12 bg-[#570005] mt-2 animate-pulse"></div>
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
                <div className="absolute top-68 -right-53 text-[100px] font-bold text-white/20 select-none pointer-events-none rotate-90">
                    ABOUT ME
                </div>

                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    
                    <div className="relative group" data-aos="fade-right">
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 border-2 border-white translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                            <div className="absolute inset-0 bg-[#570005] overflow-hidden">
                                <img 
                                    src="img/me/me4.png" 
                                    alt="Profile" 
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 opacity-80"
                                />
                            </div>

                            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl hidden md:block">
                                <p className="text-[#0B1120] font-bold text-3xl">PPLG</p>
                                <p className="text-[#570005] text-xs font-bold tracking-widest uppercase">Student</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8" data-aos="fade-left">
                        <div>
                            <h3 className="text-white font-mono tracking-widest mb-2">INTRODUCING</h3>
                            <h2 className="text-5xl text-white md:text-6xl font-bold bungee-regular leading-tight">
                                ABOUT <span className="text-transparent [-webkit-text-stroke:1px_white]">ME</span>
                            </h2>
                            <div className="h-1 w-20 bg-[#570005] mt-4"></div>
                        </div>

                        <div className="space-y-4 text-gray-400 text-lg leading-relaxed max-w-xl">
                            <p>
                                Haloo Cewe Mark Disinii kenalinn nama saya <span className="text-white font-semibold">Dwi Rahmawati</span>, seorang Frontend Developer yang berfokus pada pembuatan antarmuka web yang estetis dan fungsional. 
                            </p>
                            <p>
                                Sebagai siswa <span className="text-white italic">PPLG di SMKN 3 Pamekasan</span>, saya menggabungkan logika pemrograman dengan sentuhan desain modern untuk menciptakan pengalaman digital yang menarik.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4 text-white text-3xl font-mono font-bold drop-shadow-[0_0_10px_rgba(220,38,38,0.8)] animate-pulse">
                            <div className="flex items-center space-x-3">
                                <div className="h-2 w-2 bg-white rotate-45"></div>
                                <span className="font-mono text-sm">React.js</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="h-2 w-2 bg-white rotate-45"></div>
                                <span className="font-mono text-sm">Tailwind CSS</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="h-2 w-2 bg-white rotate-45"></div>
                                <span className="font-mono text-sm">Laravel</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="h-2 w-2 bg-white rotate-45"></div>
                                <span className="font-mono text-sm">UI/UX Design</span>
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