"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const projectsData = [
  {
    id: "01",
    title: "Vekr",
    coverImage: "/projects/Vekr-1.png",
    category: "Sustainability Consulting & EHS Solutions",
    shortDesc: "A bespoke corporate platform for Saudi market sustainability consulting, featuring custom-integrated EHS auditing workflows.",
    longDesc: "Engineered a high-performance corporate platform designed for the Saudi market. Developed using a combination of WordPress and Elementor, enhanced with custom HTML, CSS, and JavaScript for a unique, responsive user experience. Focused on creating a professional digital ecosystem that highlights sustainability consulting and government-approved EHS auditing services while ensuring fast load times and clean content management.",
    tags: ["WordPress", "Elementor", "Custom Frontend"],
    demoUrl: "https://vekr.uk/",
    githubUrl: "#",
    images: ["/projects/Vekr-1.png", "/projects/Vekr-2.png", "/projects/Vekr-3.png"]
  },
  {
    id: "02",
    title: "3rdEye",
    coverImage: "/projects/3rdeye-1.png",
    category: "Security & Surveillance Solutions",
    shortDesc: "A professional corporate platform for a USA-based security firm, blending advanced surveillance technology with strategic risk management services.",
    longDesc: "Developed a comprehensive digital presence for a USA-based security company. Architected the platform using WordPress, Elementor, and custom-coded components to effectively showcase their full range of residential, commercial, and industrial security solutions. The focus was on building a reliable, professional-grade interface that reflects their commitment to technology-driven protection, intelligent monitoring, and 24/7 operational readiness.",
    tags: ["WordPress", "Elementor", "Custom Frontend"],
    demoUrl: "https://3rdeyehq.us/",
    githubUrl: "#",
    images: ["/projects/3rdeye-1.png", "/projects/3rdeye-2.png", "/projects/3rdeye-3.png", "/projects/3rdeye-4.png", "/projects/3rdeye-5.png", "/projects/3rdeye-6.png"]
  },
  {
    id: "03",
    title: "Raakco",
    coverImage: "/projects/Raakco-1.png",
    category: "Construction & Infrastructure Development",
    shortDesc: "A premier construction and contracting portal for the Saudi market, showcasing large-scale infrastructure capabilities.",
    longDesc: "Developed a high-impact corporate website for a leading construction powerhouse in Saudi Arabia. Built using WordPress and Elementor with custom development, the platform serves as a digital showcase for large-scale commercial, industrial, and infrastructure projects. The focus was on creating a modern, reliable interface that emphasizes precision, safety, and innovation while effectively presenting their world-class engineering portfolio.",
    tags: ["WordPress", "Elementor", "Custom Frontend"],
    demoUrl: "https://raakco.com/",
    githubUrl: "#",
    images: ["/projects/Raakco-1.png", "/projects/Raakco-2.png", "/projects/Raakco-3.png"]
  },
  {
    id: "04",
    title: "Second Chapter",
    coverImage: "/projects/SC-1.png",
    category: "Custom Web Engineering & Digital Growth",
    shortDesc: "A high-end, custom-coded digital platform for a Pakistan-based technology agency serving a global client base.",
    longDesc: "Engineered a bespoke, custom-coded website for a technology firm specializing in web applications, AI-driven tools, and marketing strategies. The project focused on building a clean, performant, and scalable digital experience that reflects their core philosophy of making business growth smart and sustainable for clients worldwide. Developed with a focus on custom architecture to ensure a unique, fast, and highly responsive interface.",
    tags: ["Custom Development", "JavaScript", "Performance"],
    demoUrl: "https://www.secondchapter.solutions/",
    githubUrl: "#",
    images: ["/projects/SC-1.png", "/projects/SC-2.png", "/projects/SC-3.png", "/projects/SC-4.png"]
  },
  {
    id: "05",
    title: "kross Kulture",
    coverImage: "/projects/Ecommerce-1.png",
    category: "E-Commerce & Fashion Retail",
    shortDesc: "A high-end fashion e-commerce platform built on WordPress and WooCommerce, featuring a luxury shopping experience.",
    longDesc: "Engineered a sophisticated fashion retail platform using WordPress and WooCommerce to handle luxury pret, ready-to-wear, and accessories collections. The build focuses on seamless product management, intuitive navigation, and a high-performance checkout process tailored to deliver a premium retail experience for a modern fashion brand.",
    tags: ["WordPress", "WooCommerce", "E-commerce"],
    demoUrl: "https://krosskulture.com/",
    githubUrl: "#",
    images: ["/projects/Ecommerce-1.png", "/projects/Ecommerce-2.png", "/projects/Ecommerce-3.png"]
  },
  {
    id: "06",
    title: "Steps Pakistan",
    coverImage: "/projects/Steps-1.png",
    category: "Environmental & Social Consulting",
    shortDesc: "A professional consultancy platform built with WordPress and ACF to showcase international-standard environmental solutions.",
    longDesc: "Developed a robust digital platform for a premier consultancy firm trusted by major global organizations like the World Bank and UNDP. The build utilizes WordPress, Elementor, and Advanced Custom Fields (ACF) to provide a flexible and content-rich experience that highlights their multidisciplinary environmental and social expertise on an international scale.",
    tags: ["WordPress", "ACF", "Elementor"],
    demoUrl: "https://stepspakistan.com/",
    githubUrl: "#",
    images: ["/projects/Steps-1.png", "/projects/Steps-2.png", "/projects/Steps-3.png", "/projects/Steps-4.png"]
  },
  {
    id: "07",
    title: "Getty",
    coverImage: "/projects/Getty-1.png",
    category: "Arts & Cultural Foundation",
    shortDesc: "A clean, impactful WordPress platform designed to showcase art preservation and cultural impact.",
    longDesc: "Developed a refined and accessible WordPress website for a major cultural institution. The project focused on a clean, intuitive layout that effectively conveys the organization's mission to preserve art, inspire the public, and shape future cultural discourse through a seamless digital presence.",
    tags: ["WordPress", "CMS", "Web Development"],
    demoUrl: "https://www.getty.edu/",
    githubUrl: "#",
    images: ["/projects/Getty-1.png", "/projects/Getty-2.png"]
  },
  {
    id: "08",
    title: "Savvy Technology",
    coverImage: "/projects/Savvy-1.png",
    category: "Technology Solutions & Consulting",
    shortDesc: "A sleek, professional web presence for a technology-driven company, featuring custom-coded components and optimized architecture.",
    longDesc: "Built a high-performance corporate platform for a tech-focused company using a blend of WordPress, Elementor, and custom-coded elements. The site is engineered for speed and professional impact, effectively showcasing the company’s technical expertise through a clean, modern, and highly responsive user interface designed for scalability.",
    tags: ["WordPress", "Elementor", "Custom Code"],
    demoUrl: "https://savvytechnologies.com/",
    githubUrl: "#",
    images: ["/projects/Savvy-1.png", "/projects/Savvy-2.png"]
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [activeProject]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <h2 className="text-7xl font-black tracking-tighter text-black uppercase">Selected<br />Works</h2>
        <p className="text-neutral-500 text-lg max-w-sm">
          Architecting robust digital ecosystems. Combining WordPress versatility with high-performance frontend engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projectsData.map((project, idx) => {
          // Logic for grid sizing (Big Left -> Small Right -> Small Left -> Big Right)
          const isBig = idx % 4 === 0 || idx % 4 === 3;
          return (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveProject(project)}
              className={`group relative overflow-hidden rounded-3xl border border-black ${isBig ? "lg:col-span-2 h-[500px]" : "lg:col-span-1 h-[500px]"} p-8 flex flex-col justify-end cursor-pointer`}
            >
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                // Changed object-cover to conditional based on isBig
                className={`${isBig ? "object-cover" : "object-contain"} transition-transform duration-700 group-hover:scale-105`}
              />

              {/* Dense-to-Light White Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent transition-opacity duration-500" />

              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/70 mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold text-black mb-4">{project.title}</h3>

                <div className="flex gap-2 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase bg-black/80 text-white px-3 py-1 rounded-full font-semibold transition-colors duration-300 hover:bg-purple-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {activeProject && (
          <ModalWindow activeProject={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ModalWindow({ activeProject, onClose }) {
  const modalRef = useRef(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[500] flex items-center justify-center">
      <div onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.98 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[100dvh] md:w-[90vw] md:h-[90vh] md:max-w-7xl bg-neutral-900 overflow-y-auto md:rounded-2xl shadow-2xl text-white scrollbar-none"
      >
        <button onClick={onClose} className="fixed top-4 right-4 md:top-8 md:right-[7vw] z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-all duration-300 flex items-center justify-center text-lg shadow-xl">
          ✕
        </button>

        <div className="max-w-5xl mx-auto px-6 sm:px-16 pt-16 md:pt-20 pb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold">{activeProject.category}</span>
          <h3 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight mt-2 mb-8 uppercase">{activeProject.title}</h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-black">Overview</h4>
              <p className="text-neutral-300 font-light leading-relaxed text-base sm:text-xl">{activeProject.longDesc}</p>
            </div>
            <div className="lg:col-span-4 space-y-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-black mb-3">Core Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-neutral-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pb-20 bg-black rounded-b-none md:rounded-b-2xl">
          {activeProject.images.map((imgSrc, index) => (
            <ExpandingImageCard key={index} src={imgSrc} index={index} rootScrollRef={modalRef} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ExpandingImageCard({ src, index, rootScrollRef }) {
  const elementRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: elementRef, container: rootScrollRef, offset: ["start end", "start start"] });

  const cardWidth = useTransform(scrollYProgress, [0.1, 0.95], ["90%", "95%"]);
  const cardHeight = useTransform(scrollYProgress, [0.1, 0.95], ["40vh", "75vh"]);
  const innerGraphicScale = useTransform(scrollYProgress, [0.1, 0.95], [1.1, 1]);
  const containerRadius = useTransform(scrollYProgress, [0.6, 0.95], ["16px", "8px"]);

  return (
    <div ref={elementRef} className="w-full h-[80vh] flex items-center justify-center relative sticky top-0 overflow-hidden">
      <motion.div style={{ width: cardWidth, height: cardHeight, borderRadius: containerRadius, maxWidth: "1200px" }} className="relative overflow-hidden bg-neutral-800 shadow-2xl border border-white/5">
        <motion.div style={{ scale: innerGraphicScale }} className="absolute inset-0 w-full h-full">
          <Image src={src} alt="Project" fill className="object-cover" sizes="(max-width: 768px) 90vw, 1200px" priority={index === 0} />
        </motion.div>
      </motion.div>
    </div>
  );
}