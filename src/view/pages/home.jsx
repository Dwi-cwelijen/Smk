import LightPillar from "../../components/LightPillar";
import "../../App.css";
import {  MapPinned,ArrowLeft,ArrowRight,ExternalLink,X,Code2,ShieldAlert} from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GithubIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

export default function Home() {
    return (
        <div className="flex flex-col w-full overflow-x-hidden bg-[#0B1120]">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <GallerySection />
        </div>
    );
}


function HeroSection() {
    return (
        <section id="home" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
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
                <h2 className="hidden md:block absolute text-[100px] md:text-[200px] lg:text-[300px] bungee-regular text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] leading-none translate-y-[-20px]">
                    CHRONICLES
                </h2>
                <h1 className="relative text-5xl md:text-8xl lg:text-[180px] bungee-regular text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] tracking-tighter leading-none">
                    EPILOG SMK
                </h1>
                <div className="mt-4 flex flex-col items-center">
                    <p className="bg-gradient-to-r from-white to-red-700 bg-clip-text text-transparent font-mono tracking-[0.5em] text-sm md:text-xl uppercase font-bold">
                        DWI RAHMAWATI
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
    );
}


function AboutSection() {
    const techStacks = [
        { name: "HTML5", icon: "html5/html5-original.svg" },
        { name: "CSS3", icon: "css3/css3-original.svg" },
        { name: "JS", icon: "javascript/javascript-original.svg" },
        { name: "PHP", icon: "php/php-original.svg" },
        { name: "Git", icon: "git/git-original.svg" },
        { name: "React", icon: "react/react-original.svg" },
        { name: "Tailwind", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", isExternal: true },
        { name: "Laravel", icon: "laravel/laravel-original.svg" },
    ];
     return (
        <section id="about" className="relative w-full min-h-screen flex items-center justify-center bg-[#0B1120] py-20 overflow-hidden">
            <div className="absolute top-68 -right-53 text-[100px] font-bold text-white/5 select-none pointer-events-none rotate-90 bungee-regular">
                THE STORY
            </div>
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="relative group" data-aos="fade-right">
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 border-2 border-[#d1a355] translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        <div className="absolute inset-0 bg-[#570005] overflow-hidden group-hover:shadow-[0_0_30px_rgba(87,0,5,0.5)] transition-all duration-500">
                            <img src="img/me/me4.png" alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100 group-hover:scale-105" />
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
                        <div className="h-1 w-20 bg-[#570005]"></div>
                    </div>
                    <div className="space-y-3 text-gray-400 text-lg leading-relaxed max-w-xl">
                        <p>
                          Haloo Cewe Mark Disinii! Kenalin, aku 
                          <span className="text-white font-semibold ml-1">Dwi Rahmawati</span>. 
                          Halaman ini bukan sekadar informasi, tapi kapsul waktu yang merangkum
                          perjalananku sebagai Siswa PPLG selama di SMK.
                        </p>
                        <p>
                          Tiga tahun belajar di 
                          <span className="text-white italic ml-1 mr-1">SMKN 3 Pamekasan</span> 
                          penuh dengan kenangan, Moment Magang, Ujian Tugas besar, UKK, 
                          Sampe waktu zoom bareng mentor pun masih terekam jelas di benak ku.
                        </p>
                    </div>
                    <div className="pt-4 border-t border-white/10 max-w-xl">
                        <p className="text-[#d1a355] font-mono text-xs tracking-widest uppercase mb-6">Tech Stack In Use</p>
                        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center">
                            {techStacks.map((tech, i) => (
                                <div key={i} className="relative group p-4 bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:border-[#d1a355]/50 hover:bg-[#d1a355]/5 rounded-[1rem]">
                                    <img 
                                        src={tech.isExternal ? tech.icon : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}`} 
                                        className="w-10 h-10 transition-all group-hover:scale-110" 
                                        alt={tech.name} 
                                    />
                                    <span className="absolute -bottom-5 text-[10px] text-gray-600 font-mono opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity uppercase">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      category: "Web Systeme",
      title: "SEMESTA (UKK)",
      description: "SEMESTA (Sentral Media Sumber Transformasi Academy). Aplikasi ini saya beri nama SEMESTA, singkatan dari Sentral Media Sumber Transformasi Academy. Saya memilih nama 'Semesta' karena kata tersebut mewakili cakrawala pengetahuan yang luas dan tak terbatas, yang ingin saya hadirkan dalam platform ini.",
      image: "img/project/semesta.png",
      imgDetail:"img/project/semestaDetail.png",
      techStack: ["Laravel", "Tailwind", "MySQL"],
      githubLink: "https://github.com/Dwi-cwelijen/ukk",
      demoLink: null,
    },
    {
      id: 2,
      category: "Web System",
      title: "SEMINAR",
      description: "SEMINAR (Sistem Elektronik Management Izin dan Absensi Real-Time) adalah solusi digital untuk efisiensi birokrasi sekolah. Proyek kolaborasi TEFA SMKN 3 Pamekasan ini dikembangkan oleh tim TEFA, Hilman (PM), Nando, Dwi, Saipul, & Fairuz (Frontend), Ega & Ghyhiat (Backend), Angga, Vita, & Jaka (UI/UX), serta Valen (QA) untuk menjamin kualitas sistem yang optimal.",
      image: "img/project/seminar.png",
      imgDetail:"img/project/seminarDetail.png",
      techStack: ["React", "Laravel", "Figma", "Tailwind", "MySQL", "JS", "PHP" ,"Git"],
      githubLink: "#", 
      demoLink: "https://seminar.mischool.id/",
    },
    {
      id: 3,
      category: "Web System",
      title: "Promosi Sekolah",
      description: "Etalase digital khusus jurusan PPLG yang berfokus pada integrasi teknologi dan kreativitas. Menyediakan informasi sepputar jurusan PPLG bagi calon siswa mengenai keahlian utama seperti Frontend dan Backend Development, desain UI/UX.",
      image: "https://i.pinimg.com/736x/14/20/fd/1420fdb2c1b84a55bc9a61e3050b0fa5.jpg",
      techStack: ["Tailwind", "JS", "React", "Git"],
      githubLink: "#",
      demoLink: "https://dh1828gc-5173.asse.devtunnels.ms/",
    },
  ];

  return (
    <section
      id="project"
      className="relative w-full min-h-screen py-24 px-6 md:px-12 bg-[#0B1120] flex flex-col justify-center"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col mb-16" data-aos="fade-right">
          <h3 className="text-[#d1a355] font-mono tracking-widest mb-1 text-sm uppercase">
            Chapter 2: The Masterpiece
          </h3>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
            FEATURED{" "}
            <span className="text-transparent [-webkit-text-stroke:1px_#d1a355]">
              PROJECTS
            </span>
          </h2>
          <div className="h-1 w-20 bg-[#570005] mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group flex flex-col bg-[#0F172A] rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-white/20 transition-colors duration-300"
              data-aos="fade-up"
            >
              <div className="relative h-48 w-full overflow-hidden bg-[#1E293B]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <span className="text-gray-400 font-mono text-xs uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#d1a355] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-[#d1a355] font-medium">
                    View Details &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl max-h-[85vh] mb-15 bg-[#0F172A] border border-white/10 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-y-auto md:overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-transparent text-gray-400 hover:text-red-600 hover:bg-red-600/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-1/2 h-84 md:h-auto bg-[#1E293B] shrink-0">
                <img
                  src={selectedProject.imgDetail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col md:overflow-y-auto">
                <span className="text-[#d1a355] font-mono text-xs uppercase tracking-wider mb-2">
                  {selectedProject.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h2>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-auto">
                  {selectedProject.demoLink === "#" || selectedProject.demoLink === null ? (
                    <div className="flex-1 flex items-center justify-center gap-2 px-2 py-1 md:px-5 md:py-3 bg-white/5 border border-white/10 text-gray-500 text-[12px] md:text-sm font-medium rounded-lg cursor-not-allowed">
                      <ExternalLink size={18} className="opacity-50" />
                      <span>Not Hosted Yet</span>
                    </div>
                  ) : (
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-2 md:px-5 py-1 md:py-3 bg-[#d1a355] text-black hover:bg-[#b88f4a] text-sm font-bold rounded-lg transition-colors"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}


                  {selectedProject.githubLink === "#" || selectedProject.githubLink === null ? (
                    <div className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-gray-500 text-sm font-medium rounded-lg cursor-not-allowed">
                      <GithubIcon size={18} className="opacity-50" />
                      <span>Private Code</span>
                    </div>
                  ) : (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-transparent border border-white/20 text-white hover:bg-white/10 text-sm font-medium rounded-lg transition-colors"
                    >
                      <GithubIcon size={18} /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


function GallerySection() {
    const [activeCategory, setActiveCategory] = useState('class');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const [showImg, setShowImg] = useState(null);

    const categories = [
        { name: "class", label: "Class" },
        { name: "pmr", label: "PMR" },
        { name: "tefa", label: "TEFA" },
        { name: "friend", label: "Friend" },
    ];

    const galleryItems = [

        //anak kelas
        { id: 1, category: 'class', title: 'Suasana Magang',      img: "img/gallery/class/class1.jpg" },
        { id: 2, category: 'class', title: '17 Agustus',         img: "img/gallery/class/class10.jpg" },
        { id: 3, category: 'class', title: 'Foto Kalender 2025', img: "img/gallery/class/class3.jpg" },
        { id: 4, category: 'class', title: 'Hari Guru 2024',     img: "img/gallery/class/class4.jpg" },
        { id: 5, category: 'class', title: 'Last Day Kakak PPL', img: "img/gallery/class/class5.jpg" },
        { id: 6, category: 'class', title: 'Last Day Kakak PPL', img: "img/gallery/class/class6.jpg"},
        { id: 7, category: 'class', title: 'Last Day Kakak PPL', img: "img/gallery/class/class7.jpg" },
        { id: 8, category: 'class', title: 'Tugas Besar',        img: "img/gallery/class/class8.jpg" },
        { id: 9, category: 'class', title: 'JJS',                img: "img/gallery/class/class9.jpg" },
        { id: 10, category: 'class', title: 'Sebelum Magang',    img: "img/gallery/class/class12.jpg" },
        { id: 11, category: 'class', title: 'Sebelum Magang',    img: "img/gallery/class/class13.jpg" },
        { id: 12, category: 'class', title: 'Foto Kalender 2026',img: "img/gallery/class/class14.jpg" },
        { id: 13, category: 'class', title: 'JJS',               img: "img/gallery/class/class15.jpg" },
        { id: 14, category: 'class', title: 'JJS',               img: "img/gallery/class/class16.jpg" },
        { id: 15, category: 'class', title: 'Sebelum Magang',    img: "img/gallery/class/class11.jpg" },
        { id: 16, category: 'class', title: 'Hari Guru 2025',    img: "img/gallery/class/class17.jpg" },
        { id: 17, category: 'class', title: 'Suasana Magang',    img: "img/gallery/class/class18.jpeg" },
        { id: 18, category: 'class', title: 'Suasana Magang',    img: "img/gallery/class/class19.jpeg" },
        { id: 19, category: 'class', title: 'Bakar Bakar',       img: "img/gallery/class/class20.jpg" },
        { id: 20, category: 'class', title: 'DONE YAAA UKK',     img: "img/gallery/class/class26.jpg" },
        { id: 21, category: 'class', title: 'Yah Lulus',         img: "img/gallery/class/class23.jpg" },


        // pmr
        { id: 22, category: 'pmr', title: 'PMR Activity', img:"img/gallery/pmr/pmr1.jpg"},
        { id: 23, category: 'pmr', title: 'First Aid Training', img:"img/gallery/pmr/pmr2.jpg" },
        { id: 24, category: 'pmr', title: 'First Aid Training',img:"img/gallery/pmr/pmr3.jpg" },
        { id: 25, category: 'pmr', title: 'First Aid Training',img:"img/gallery/pmr/pmr4.jpg" },
        { id: 26, category: 'pmr', title: 'First Aid Training',img:"img/gallery/pmr/pmr5.jpg" },
        { id: 27, category: 'pmr', title: 'First Aid Training',img:"img/gallery/pmr/pmr17.jpg" },
        { id: 28, category: 'pmr', title: 'First Aid Training',img:"img/gallery/pmr/pmr19.jpg" },
        { id: 29, category: 'pmr', title: 'First Aid Training',img:"img/gallery/pmr/pmr8.jpg" },
        { id: 30, category: 'pmr', title: 'First Aid Training',img:"img/gallery/pmr/pmr21.jpg" },
        { id: 31, category: 'pmr', title: 'First Aid Training',img:"img/gallery/pmr/pmr10.jpg" },
        { id: 32, category: 'pmr', title: 'First Aid Training',img:"img/gallery/pmr/pmr11.jpg" },
        { id: 33, category: 'pmr', title: 'First Aid Training',img:"img/gallery/pmr/pmr12.jpg" },
        { id: 34, category: 'pmr', title: 'First Aid Training',img:"img/gallery/pmr/pmr23.jpg" },
        { id: 35, category: 'pmr', title: 'First Aid Training',img:"img/gallery/pmr/pmr14.jpg" },
        { id: 36, category: 'pmr', title: 'First Aid Training',img:"img/gallery/pmr/pmr15.jpg" },
        { id: 37, category: 'pmr', title: 'First Aid Training',img:"img/gallery/pmr/pmr22.jpg" },

        //tefa
        { id: 38, category: 'tefa', title: '1 Jam Sebelumnya',img: "img/gallery/tefa/tefa1.jpg" },
        { id: 39, category: 'tefa', title: '1 Jam Sebelumnya',img: "img/gallery/tefa/tefa2.jpg" },
        { id: 41, category: 'tefa', title: '1 Jam Sebelumnya',img: "img/gallery/tefa/tefa3.jpg" },
        { id: 42, category: 'tefa', title: 'DEYMM',img: "img/gallery/tefa/tefa4.jpg" },
        { id: 43, category: 'tefa', title: 'Done',img: "img/gallery/tefa/tefa5.jpg" },
        { id: 44, category: 'tefa', title: 'Cek Alat',img: "img/gallery/tefa/tefa6.jpg" },
        { id: 45, category: 'tefa', title: 'Sehabis Konser',img: "img/gallery/tefa/tefa7.jpg" },
        { id: 46, category: 'tefa', title: 'FE, -Fairuz',img: "img/gallery/tefa/tefa8.png" },
        { id: 47, category: 'tefa', title: 'CCTV',img: "img/gallery/tefa/tefa9.jpg" },

        //teman
        { id: 48, category: 'friend', title: 'MAFIAAA', img: "img/gallery/friend/friend1.png"},
        { id: 49, category: 'friend', title: 'Ketuaa PMR', img: "img/gallery/friend/friend17.jpg"},
        { id: 50, category: 'friend', title: 'Nak PMR', img: "img/gallery/friend/friend3.jpg"},
        { id: 51, category: 'friend', title: 'VITAA', img: "img/gallery/friend/friend4.jpeg"},
        { id: 52, category: 'friend', title: 'Gatau G Kenal', img: "img/gallery/friend/friend5.jpg"},
        { id: 53, category: 'friend', title: 'Circle epep', img: "img/gallery/friend/friend6.jpg"},
        { id: 54, category: 'friend', title: 'Sebelum Pisah', img: "img/gallery/friend/friend20.png"},
        { id: 55, category: 'friend', title: 'GENK roblox', img: "img/gallery/friend/friend8.jpg"},
        { id: 56, category: 'friend', title: 'Ketua Mafia x Wakil Mafia', img: "img/gallery/friend/friend9.jpg"},
        { id: 57, category: 'friend', title: 'PUPUTT', img: "img/gallery/friend/friend10.jpeg"},
        { id: 58, category: 'friend', title: 'Ara Araa', img: "img/gallery/friend/friend11.jpg"},
        { id: 59, category: 'friend', title: 'MAFIAAA', img: "img/gallery/friend/friend12.jpg"},
        { id: 60, category: 'friend', title: 'Gatau G Kenal', img: "img/gallery/friend/friend13.jpg"},
        { id: 61, category: 'friend', title: 'Sepiring Nasi Goreng', img: "img/gallery/friend/friend14.jpg"},
        { id: 62, category: 'friend', title: 'Seporsi Seblak', img: "img/gallery/friend/friend15.jpg"},
        { id: 63, category: 'friend', title: 'DESIIII', img: "img/gallery/friend/friend16.jpg"},
        { id: 64, category: 'friend', title: 'Miss', img: "img/gallery/friend/friend21.jpg"},
        { id: 65, category: 'friend', title: 'Ciee yang UKK nya aman', img: "img/gallery/friend/friend24.jpg"},
        
    ];

    const filteredItems = galleryItems.filter(item => item.category === activeCategory);
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItemsDesktop = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    return (
        <section id="galery" className="relative w-full min-h-screen py-24 px-6 md:px-12 bg-[#0B1120] text-white flex flex-col justify-center">
            
            <div className="flex flex-col " data-aos="fade-right">
              <h3 className="text-[#d1a355] font-mono tracking-widest mb-1 text-sm uppercase">
                CHAPTER 3: MEMORIAL PHOTO
              </h3>
              <h2 className="text-4xl md:text-6xl font-bold">
                GALLERY <span className="text-transparent [-webkit-text-stroke:1px_#d1a355]">SMK</span>
              </h2>
              <div className="h-1 w-20 bg-[#570005] mt-2 md:mt-4"></div>
            </div>

            <div className="flex flex-wrap mt-4 md:mt-0 md:justify-end gap-3 mb-5 overflow-x-auto pb-2 md:overflow-visible">
                {categories.map((item, index) => (
                  <button 
                      key={index}
                      onClick={() => handleCategoryChange(item.name)}
                      className={` px-5 md:px-6 py-2 text-sm md:text-lg rounded-full font-medium whitespace-nowrap transition-all duration-300 border 
                          ${activeCategory === item.name 
                              ? 'bg-[#570005]/80 text-white border-white' 
                              : 'bg-white/5 text-gray-400 border-white/10 hover:border-[#570005]'
                          }`}
                  >
                      {item.label}
                  </button>
                ))}
                <div className=" md:hidden w-full border mt-6 border-gray-200 bg-gray-500/50 p-3 rounded-lg shadow-lg">
                  <h1 className="text-white flex items-center gap-2 font-bold font-serif text-sm">
                    <ShieldAlert />
                    Click Foto Untuk Lihat Lebih Detail
                  </h1>
                </div>
            </div>

            <div className="w-full">
                {filteredItems.length > 0 ? (
                    <> 
                      <div className="hidden md:flex justify-center items-center gap-6 w-full max-w-6xl">
                          {totalPages > 1 && (
                              <button 
                                  disabled={currentPage === 1}
                                  onClick={() => setCurrentPage(prev => prev - 1)}
                                  className="p-3 bg-white/5 border border-white/10 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#570005] hover:scale-105 active:scale-95 transition-all duration-300 shrink-0 z-10"
                                  aria-label="Previous page"
                              >
                                  <ArrowLeft className="w-5 h-5 text-white" />
                              </button>
                          )}

                          <div className='flex-1 grid grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[220px]'> 
                              {currentItemsDesktop.map((item, index) => (
                                  <div key={index} className='relative group h-full overflow-hidden rounded-xl bg-neutral-900 border border-white/5 shadow-lg'>
                                      <img 
                                          src={item.img}  
                                          onClick={() => setShowImg(item.img)}
                                          alt={item.category || "Gallery image"} 
                                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-zoom-in"
                                      />
                                      
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"></div>
                                      
                                      <div className="absolute inset-0 p-4 flex items-end justify-start pointer-events-none">
                                          <p className="font-semibold text-white/95 backdrop-blur-md bg-black/40 px-3 py-1.5 rounded-lg border border-white/10 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                                              {item.title}
                                          </p>
                                      </div>
                                  </div>
                              ))}
                          </div>

                          {totalPages > 1 && (
                              <button 
                                  disabled={currentPage === totalPages}
                                  onClick={() => setCurrentPage(prev => prev + 1)}
                                  className="p-3 bg-white/5 border border-white/10 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#570005] hover:scale-105 active:scale-95 transition-all duration-300 shrink-0 z-10"
                                  aria-label="Next page"
                              >
                                  <ArrowRight className="w-5 h-5 text-white" />
                              </button>
                          )}
                      </div>

                      <div className='md:hidden flex flex-row gap-4 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide'>
                          {filteredItems.map((item, index) => (
                            <div 
                              key={index} 
                              className='relative group shrink-0 w-[310px] h-[350px] overflow-hidden rounded-xl snap-center cursor-zoom-in'
                            >
                                <img 
                                    src={item.img}  
                                    onClick={() => setShowImg(item.img)}
                                    alt={item.category} 
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                                />
                                
                                <div className="absolute inset-0 p-4 flex items-end justify-start bg-transparent pointer-events-none">
                                    <p className="font-bold text-white/90 backdrop-blur-md bg-black/30 px-3 py-1 rounded-md">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                          ))}
                      </div>
                    </>
                ) : (
                    <div className="w-full flex justify-center items-center h-40 text-gray-500">
                        Belum ada foto di kategori ini.
                    </div>
                )}
            </div>
            {showImg && (
              <div 
                onClick={() => setShowImg(null)} 
                className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              >
                <div className="relative w-full h-full flex flex-col items-center justify-center ">
                  <button 
                    onClick={() => setShowImg(null)} 
                    className="absolute top-0 right-0 text-white hover:text-gray-300 transition-colors bg-black/50 p-2 rounded-full"
                  >
                      <X size={24} />
                  </button>
                  
                  <img 
                    src={showImg} 
                    alt="Preview bukti" 
                    onClick={(e) => e.stopPropagation()} 
                    className="w-auto h-auto max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain animate-zoomIn"
                  />
                </div>
              </div>

            )}

        </section>
    );
}