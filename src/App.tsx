import { motion } from 'framer-motion';
import heroBg from './assets/hero-bg.jpg';
import capabilitiesBg from './assets/capabilities-bg.jpg';
import BlurText from './components/BlurText';
import { ArrowUpRight, PlayIcon, ClockIcon, GlobeIcon, ImageIcon, MovieIcon, LightbulbIcon } from './components/Icons';

const motionProps = {
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  whileInView: { filter: 'blur(0px)', opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: 'easeOut' }
};

export default function App() {
  return (
    <div className="w-full">
      {/* SECTION 1: HERO */}
      <section id="home" className="relative h-screen overflow-hidden bg-black flex flex-col">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/85" />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Navbar (Home, Projects, About, Contact) */}
          <nav className="fixed top-4 left-0 right-0 z-50 flex justify-between items-center px-8 lg:px-16">
            <a href="#home" className="liquid-glass h-12 w-12 rounded-full flex items-center justify-center text-white font-bold tracking-tight">
              Zall
            </a>
            
            <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1.5 items-center gap-1">
              {[
                { name: "Home", href: "#home" },
                { name: "Projects", href: "#projects" },
                { name: "About", href: "#about" },
                { name: "Contact", href: "#contact" }
              ].map(link => (
                <a key={link.name} href={link.href} className="px-4 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors">
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="bg-white text-black text-sm font-medium font-body rounded-full px-4 py-2 flex items-center gap-1 ml-2">
                Let's Talk <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="h-12 w-12" />
          </nav>

          {/* Main Content */}
          <main className="flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center">
            <motion.div 
              {...motionProps} transition={{ ...motionProps.transition, delay: 0.4 }}
              className="liquid-glass rounded-full flex items-center gap-2 px-4 py-1.5"
            >
              <span className="bg-white text-black text-[10px] font-bold uppercase px-2 py-0.5 rounded-full">Welcome</span>
              <span className="text-xs md:text-sm text-white/90 font-body">Mahasiswa Sistem & Teknologi Informasi</span>
            </motion.div>

            <BlurText 
              text="Hi, I'm Marchelius Amsal, Welcome to my portofolio website." 
              className="mt-6 text-5xl md:text-6xl lg:text-[5rem] font-heading italic text-white leading-[0.85] tracking-[-3px] max-w-4xl" 
            />

            <motion.p 
              {...motionProps} transition={{ ...motionProps.transition, delay: 0.8 }}
              className="mt-6 text-sm md:text-base text-white/80 max-w-2xl font-body font-light leading-tight"
            >
              Saya senang membangun aplikasi web yang bersih, basis data yang cepat, serta antarmuka yang nyaman dipakai.
            </motion.p>

            <motion.div 
              {...motionProps} transition={{ ...motionProps.transition, delay: 1.1 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-6"
            >
              <a href="#projects" className="liquid-glass-strong rounded-full px-6 py-2.5 text-sm font-body font-medium text-white flex items-center gap-2 hover:bg-white/10 transition-colors">
                View Projects <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="#about" className="text-sm font-body font-medium text-white flex items-center gap-2 group hover:text-white/80 transition-colors">
                <PlayIcon className="w-4 h-4 group-hover:scale-110 transition-transform" /> About Me
              </a>
            </motion.div>

            <motion.div 
              {...motionProps} transition={{ ...motionProps.transition, delay: 1.3 }}
              className="mt-12 flex flex-col sm:flex-row gap-4"
            >
              <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
                <ClockIcon className="w-5 h-5 text-white/80" />
                <p className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4">1M+</p>
                <p className="text-xs text-white/80 font-body mt-2">Baris Data Diuji & Dioptimasi</p>
              </div>
              <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
                <GlobeIcon className="w-5 h-5 text-white/80" />
                <p className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4">5+</p>
                <p className="text-xs text-white/80 font-body mt-2">Tech Stack Pemrograman</p>
              </div>
            </motion.div>
          </main>

          {/* Bottom Trust Bar */}
          <motion.div 
            {...motionProps} transition={{ ...motionProps.transition, delay: 1.4 }}
            className="flex flex-col items-center gap-6 pb-8"
          >
            <div className="liquid-glass rounded-full px-5 py-1.5">
              <span className="text-xs text-white/80 font-body">Eksplorasi Teknologi & Pengembangan Perangkat Lunak</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
              {["HTML/CSS", "JavaScript", "React", "MySQL", "Python"].map(tech => (
                <span key={tech} className="font-heading italic text-2xl md:text-3xl tracking-tight text-white">{tech}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CAPABILITIES */}
      <section id="projects" className="relative min-h-screen overflow-hidden bg-black flex flex-col">
        <div className="absolute inset-0 z-0">
          <img
            src={capabilitiesBg}
            alt="Capabilities Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/95" />
        </div>

        <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
          <div className="mb-auto">
            <p id="about" className="text-sm font-body text-white/80 mb-6 uppercase tracking-wider">// Capabilities & About</p>
            <h2 className="font-heading italic text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px] text-white whitespace-pre-line">
              {"Studio craft,\nend to end"}
            </h2>
          </div>

          <div id="contact" className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
              <div className="flex justify-between items-start">
                <div className="liquid-glass h-11 w-11 rounded-[0.75rem] flex items-center justify-center">
                  <ImageIcon className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-wrap gap-1.5 justify-end max-w-[60%]">
                  {["UI/UX", "Tailwind", "Bootstrap", "Design"].map(tag => (
                    <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex-1" />
              <div>
                <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none text-white mb-4">Frontend Development</h3>
                <p className="text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  Membangun antarmuka web yang responsif, rapi, dan nyaman digunakan menggunakan HTML, CSS, JavaScript, serta Tailwind CSS.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
              <div className="flex justify-between items-start">
                <div className="liquid-glass h-11 w-11 rounded-[0.75rem] flex items-center justify-center">
                  <MovieIcon className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-wrap gap-1.5 justify-end max-w-[60%]">
                  {["MySQL", "Indexing", "Query Tuning", "Database"].map(tag => (
                    <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex-1" />
              <div>
                <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none text-white mb-4">Database Systems</h3>
                <p className="text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  Perancangan skema relasional, optimasi query, dan manajemen basis data skala besar untuk memastikan performa aplikasi yang cepat.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
              <div className="flex justify-between items-start">
                <div className="liquid-glass h-11 w-11 rounded-[0.75rem] flex items-center justify-center">
                  <LightbulbIcon className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-wrap gap-1.5 justify-end max-w-[60%]">
                  {["Python", "OOP", "System Analysis", "IT"].map(tag => (
                    <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex-1" />
              <div>
                <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none text-white mb-4">Analysis & Programming</h3>
                <p className="text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  Menerapkan logika pemrograman berorientasi objek (OOP) dalam Python serta analisis sistem dan rekayasa kebutuhan perangkat lunak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}