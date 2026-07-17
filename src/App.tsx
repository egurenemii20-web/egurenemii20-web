import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  UserCheck, 
  Brain, 
  Sparkles, 
  Users, 
  Network,
  Activity, 
  Send, 
  X, 
  Menu, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  ExternalLink,
  ChevronRight,
  ClipboardCopy,
  Mail,
  Linkedin,
  Twitter,
  Briefcase
} from 'lucide-react';
import { PROJECTS_DATA, TESTIMONIALS_DATA } from './data';
import { Project } from './types';

export default function App() {
  // Navigation active state
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Filter state for portfolio projects
  const [projectFilter, setProjectFilter] = useState<'all' | 'inclusion' | 'innovacion' | 'emocional' | 'comunidad'>('all');

  // Detail Modal for selected project
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Contact / Collaboration slide-over panel
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    institution: '',
    projectType: 'colaboracion', // 'colaboracion' | 'asesoria' | 'conferencia' | 'otro'
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Clipboard copy feedback
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Monitor scroll position to update active navbar section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'expertise', 'portfolio', 'skills'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('egurenemii20@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  const filteredProjects = projectFilter === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === projectFilter);

  return (
    <div className="min-h-screen bg-surface selection:bg-emerald-accent/20 selection:text-primary relative overflow-x-hidden antialiased">
      {/* Scroll indicator bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-surface-container z-50">
        <motion.div 
          className="h-full bg-emerald-accent"
          initial={{ width: '0%' }}
          style={{
            width: '0%',
            scaleX: 0,
            transformOrigin: '0%',
          }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* --- 1. NAVBAR --- */}
      <nav className="fixed top-0 w-full z-40 bg-surface/80 nav-blur border-b border-surface-container-high shadow-xs">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-16 h-18">
          <div className="font-display text-lg font-bold text-primary tracking-tight">
            Mtra. Emili Montoya Eguren
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-10">
            <a 
              href="#home" 
              onClick={() => setActiveSection('home')}
              className={`font-sans text-[15px] font-semibold transition-all duration-200 relative py-1 ${
                activeSection === 'home' 
                  ? 'text-primary' 
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Home
              {activeSection === 'home' && (
                <motion.div 
                  layoutId="activeNavIndicator" 
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" 
                />
              )}
            </a>
            <a 
              href="#about" 
              onClick={() => setActiveSection('about')}
              className={`font-sans text-[15px] font-semibold transition-all duration-200 relative py-1 ${
                activeSection === 'about' 
                  ? 'text-primary' 
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              About
              {activeSection === 'about' && (
                <motion.div 
                  layoutId="activeNavIndicator" 
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" 
                />
              )}
            </a>
            <a 
              href="#expertise" 
              onClick={() => setActiveSection('expertise')}
              className={`font-sans text-[15px] font-semibold transition-all duration-200 relative py-1 ${
                activeSection === 'expertise' 
                  ? 'text-primary' 
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Expertise
              {activeSection === 'expertise' && (
                <motion.div 
                  layoutId="activeNavIndicator" 
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" 
                />
              )}
            </a>
            <a 
              href="#portfolio" 
              onClick={() => setActiveSection('portfolio')}
              className={`font-sans text-[15px] font-semibold transition-all duration-200 relative py-1 ${
                activeSection === 'portfolio' 
                  ? 'text-primary' 
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Portafolio
              {activeSection === 'portfolio' && (
                <motion.div 
                  layoutId="activeNavIndicator" 
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" 
                />
              )}
            </a>
            <a 
              href="#skills" 
              onClick={() => setActiveSection('skills')}
              className={`font-sans text-[15px] font-semibold transition-all duration-200 relative py-1 ${
                activeSection === 'skills' 
                  ? 'text-primary' 
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Skills
              {activeSection === 'skills' && (
                <motion.div 
                  layoutId="activeNavIndicator" 
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" 
                />
              )}
            </a>
            <button 
              onClick={() => setIsContactOpen(true)}
              className="bg-primary text-white px-6 py-2 rounded-full font-sans text-[14px] font-bold hover:bg-primary-container transition-all hover:scale-[1.03] active:scale-[0.97]"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden text-primary p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-18 left-0 right-0 z-30 bg-surface border-b border-surface-container-high shadow-lg px-6 py-6 flex flex-col space-y-4 md:hidden"
          >
            <a 
              href="#home" 
              onClick={() => { setIsMobileMenuOpen(false); setActiveSection('home'); }}
              className={`py-2 text-[16px] font-bold ${activeSection === 'home' ? 'text-emerald-accent' : 'text-primary'}`}
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => { setIsMobileMenuOpen(false); setActiveSection('about'); }}
              className={`py-2 text-[16px] font-bold ${activeSection === 'about' ? 'text-emerald-accent' : 'text-primary'}`}
            >
              About
            </a>
            <a 
              href="#expertise" 
              onClick={() => { setIsMobileMenuOpen(false); setActiveSection('expertise'); }}
              className={`py-2 text-[16px] font-bold ${activeSection === 'expertise' ? 'text-emerald-accent' : 'text-primary'}`}
            >
              Expertise
            </a>
            <a 
              href="#portfolio" 
              onClick={() => { setIsMobileMenuOpen(false); setActiveSection('portfolio'); }}
              className={`py-2 text-[16px] font-bold ${activeSection === 'portfolio' ? 'text-emerald-accent' : 'text-primary'}`}
            >
              Portafolio
            </a>
            <a 
              href="#skills" 
              onClick={() => { setIsMobileMenuOpen(false); setActiveSection('skills'); }}
              className={`py-2 text-[16px] font-bold ${activeSection === 'skills' ? 'text-emerald-accent' : 'text-primary'}`}
            >
              Skills
            </a>
            <button 
              onClick={() => { setIsMobileMenuOpen(false); setIsContactOpen(true); }}
              className="w-full bg-primary text-white py-3 rounded-xl font-bold font-sans text-center transition-all mt-2"
            >
              Contact Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- 2. HERO SECTION --- */}
      <header id="home" class="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-container rounded-l-full translate-x-1/4"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 border-[40px] border-emerald-accent rounded-full opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Hero Left Info */}
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 mb-6 text-[12px] font-bold text-emerald-accent bg-emerald-accent/10 rounded-full tracking-wider uppercase">
                Educación Básica & Liderazgo
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 leading-tight">
                Mtra. Emili <br className="hidden md:block" /> Montoya Eguren
              </h1>
              <p className="font-sans text-[17px] md:text-[18px] text-on-surface-variant mb-10 max-w-xl leading-relaxed">
                Liderazgo en Educación Básica: Transformando el futuro con inclusión e innovación. Una visión centrada en el potencial humano y la excelencia académica.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="bg-emerald-accent text-white px-10 py-4 rounded-xl font-display text-[15px] font-semibold shadow-lg shadow-emerald-accent/25 hover:bg-emerald-accent/90 hover:shadow-emerald-accent/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  Colaborar
                </button>
                <a 
                  href="#portfolio"
                  className="bg-transparent border-2 border-primary text-primary px-10 py-4 rounded-xl font-display text-[15px] font-semibold hover:bg-primary/5 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Ver Portafolio
                </a>
              </div>
            </div>

            {/* Hero Right Image Frame */}
            <div className="w-full lg:w-2/5 flex justify-center">
              <div className="relative group max-w-xs md:max-w-sm">
                {/* Rotated background green frame */}
                <div className="absolute inset-0 bg-emerald-accent rounded-2xl rotate-3 scale-105 group-hover:rotate-1 group-hover:scale-103 transition-transform duration-500"></div>
                {/* Image container */}
                <div className="relative w-64 h-80 md:w-80 md:h-[420px] overflow-hidden rounded-2xl bg-surface-container shadow-2xl">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyc4q96uNhxb7633Ic7VkQvCqmpw18o4DqbHo671-kne3FR29e-SzadKVswOFBtAnERJWaWGc9Ww_TyMu5ynSRwSQm9YDr7bLVEaYp2ntEZCFi4_90soVzkl8zvXAfwn6jbCteYXrXjQj9kzgFaQd29E780IgUoaezK-VYOCbjuKAXTelOxugNkoNUY4Kn2KyMXccbzYe7dLKA45oM6CoHOmD3Wq56vGgWRWlpPcRebErgeiykU14bQOHkuIpaWYR7S-2elbh7IJk" 
                    alt="Mtra. Emili Montoya Eguren"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* --- 3. NARRATIVA / VISIÓN EDUCATIVA --- */}
      <section id="about" className="py-20 md:py-28 bg-surface-container-lowest relative">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Narrative text side */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-12 bg-emerald-accent"></div>
                <span className="font-display text-[12px] font-bold text-primary tracking-widest uppercase">Narrativa</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-8 leading-tight">
                Visión Educativa
              </h2>
              <div className="space-y-6 text-on-surface-variant text-[16px] md:text-[17px] leading-relaxed font-sans">
                <p>
                  Mi trayectoria en la educación básica se fundamenta en la convicción de que el liderazgo no es solo una posición, sino un compromiso constante con la <span className="text-primary font-bold">excelencia y la inclusión</span>. Creo firmemente en la creación de puentes entre la pedagogía tradicional y las demandas del siglo XXI.
                </p>
                <p>
                  Entiendo cada aula como un ecosistema vivo donde la confianza y el profesionalismo son el abono necesario para que cada estudiante florezca. Mi enfoque integra la gestión institucional con una profunda sensibilidad hacia el desarrollo humano.
                </p>
                
                {/* Stats grid */}
                <div className="pt-6 grid grid-cols-2 gap-8">
                  <div className="flex flex-col border-l-4 border-emerald-accent pl-4">
                    <span className="font-display text-4xl font-extrabold text-emerald-accent mb-1">15+</span>
                    <span className="font-sans text-[13px] text-on-surface-variant font-medium uppercase tracking-wider">Años de Experiencia</span>
                  </div>
                  <div className="flex flex-col border-l-4 border-emerald-accent pl-4">
                    <span className="font-display text-4xl font-extrabold text-emerald-accent mb-1">40+</span>
                    <span className="font-sans text-[13px] text-on-surface-variant font-medium uppercase tracking-wider">Proyectos de Innovación</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative grid of 4 images */}
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              
              <div className="h-44 sm:h-60 rounded-2xl overflow-hidden shadow-md translate-y-6 relative group border border-surface-container-high">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWNrS8hX0cJtpjHslcmx4x8Ge3cy5wNAW71qPrNMLo9nJXkaEAgmag30lKaVTQBBYKO8_Yh5tU86zJu5APC8Gs2DoRe_1GzbL6El1UZe7u-XkryGGtIqis8-IxopFYfNuH1_F0lGpWqrvZse_vBQ8V0aeeivBao4ZbL1g3VZNpBP2nDFFNQRgCh3ATopTvasmI8CNP4jXT8v4UVsDNtQhLuVUFQVGPiNxIMCPKWf5xURQ1cQNo7nvn_DVNFRu_RH5kVXXJjGs2AoY" 
                  alt="Professional handshakes"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="h-44 sm:h-60 rounded-2xl overflow-hidden shadow-md relative group border border-surface-container-high">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCFBaD6yicqYxCd9OdreQs3tDipZN4T8DJh-xacuYCMvC8YDzq9DL1ko6rRzwe1UIyRQ054rS3C3ekKEWXaFK3PjChhagcOclxhTps1xcy_xKyjrRLOgMdOn6CkWKAYqc9L6anQHOj0cz7tCUY6bbPt3fkX0-aFs76ieuPkfccj2_VUQGcsgzkpD-w7Xru-MoCQV777HrK6hyu_2zCl3UcnxA617MjpskLw0D720qo4f9oos9xn3j4C4I3aYkzLnQ96-FB0W5bcb8" 
                  alt="Inclusive learning classroom"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="h-44 sm:h-60 rounded-2xl overflow-hidden shadow-md translate-y-6 relative group border border-surface-container-high">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC35y1qByYsxDxibip7ZrRNNHu2iyOflqX-DLHxzFBfvhQrbSgIfNRbwnOo7tKduO34RZSeGrMDLmrRndlPuBGPCoT6em7SaeBPWPnQeZog36zvfuq6ImN4V5Ktd92kKjYA74N5-Skzmx9GI-s42Xw8tW2vZqgKkmzXo9UDe53UXx_nJIjT6EIqcNhe7v9eOCMJqZnJt6HOFJHm4rKGuz8w1qG_SQ31pXolXTi8ODfWBO171OHVeMQuLG8ySr-snSnpCgiEj2tEtR0" 
                  alt="Community linkage network"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="h-44 sm:h-60 rounded-2xl overflow-hidden shadow-md relative group border border-surface-container-high">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNYijwYjggkU26kPnEWBYHm2GZog-ahTerGcoYccG8aLtux0JlOe4q43KrMCWomqWbigeY3sbaUNdvX4sOTbcTjWL1-dpdqTnbx7lguddhEZagEimyFQ1B0hvljraARmkwVRccTLImtm5ZkZNUjlxZWapbDRrzS0bM3HN6_R_ylxmnvX58ZWCPZlowY6-8j4OrjWhbIvi0zfqvLzjhlzSMG9DTAZ3je3C-v6G2su-F3P3pKsmKYg6eXcRp8MEfF3s8GbhFppEeUug" 
                  alt="Digital and tactile educational tools"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* --- 4. EJES DE ESPECIALIZACIÓN --- */}
      <section id="expertise" className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-4">
              Ejes de Especialización
            </h2>
            <p className="font-sans text-[16px] md:text-[17px] text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Pilares estratégicos que sustentan una gestión educativa de impacto, equilibrando lo técnico con lo humano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl flex flex-col h-full border border-surface-container-high hover:border-emerald-accent/40 shadow-xs hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-accent/10 flex items-center justify-center mb-6 text-emerald-accent group-hover:bg-emerald-accent group-hover:text-white transition-all duration-300">
                <UserCheck size={24} />
              </div>
              <h3 className="font-display text-[18px] font-bold text-primary mb-3">
                Inclusión y escucha activa
              </h3>
              <p className="font-sans text-[14px] text-on-surface-variant leading-relaxed">
                Creación de entornos donde cada voz es valorada y cada estudiante encuentra su lugar para crecer de manera integral.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl flex flex-col h-full border border-surface-container-high hover:border-primary/40 shadow-xs hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Brain size={24} />
              </div>
              <h3 className="font-display text-[18px] font-bold text-primary mb-3">
                Desarrollo emocional
              </h3>
              <p className="font-sans text-[14px] text-on-surface-variant leading-relaxed">
                Gestión inteligente de las emociones y resolución pacífica de conflictos en el aula y en la alta dirección de instituciones.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl flex flex-col h-full border border-surface-container-high hover:border-emerald-accent/40 shadow-xs hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-accent/10 flex items-center justify-center mb-6 text-emerald-accent group-hover:bg-emerald-accent group-hover:text-white transition-all duration-300">
                <Sparkles size={24} />
              </div>
              <h3 className="font-display text-[18px] font-bold text-primary mb-3">
                Innovación metodológica
              </h3>
              <p className="font-sans text-[14px] text-on-surface-variant leading-relaxed">
                Uso sistemático de herramientas dinámicas, juegos formativos y recursos pedagógicos visuales para garantizar un aprendizaje profundo.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl flex flex-col h-full border border-surface-container-high hover:border-primary/40 shadow-xs hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Users size={24} />
              </div>
              <h3 className="font-display text-[18px] font-bold text-primary mb-3">
                Vinculación comunitaria
              </h3>
              <p className="font-sans text-[14px] text-on-surface-variant leading-relaxed">
                Establecimiento de comunicación constructiva, transparente y empática con familias, tutores y actores clave del entorno local.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- 5. CONJUNTOS INTEGRADOS DE CONOCIMIENTO (DARK BANNER) --- */}
      <section className="py-20 md:py-24 bg-primary-container text-white relative overflow-hidden">
        {/* Subtle grid decoration in background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#38B000_1px,_transparent_1px)] bg-[length:32px_32px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              Conjuntos Integrados de Conocimiento
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] text-on-primary-container mb-12 leading-relaxed">
              Mi metodología trasciende la enseñanza aislada para abrazar la integración del saber. Buscamos que el alumno no solo acumule información, sino que desarrolle una red de competencias interconectadas y adaptables.
            </p>

            <div className="space-y-5">
              
              {/* Transdisciplinariedad card */}
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group">
                <div className="p-3 bg-emerald-accent/20 rounded-xl text-emerald-accent group-hover:bg-emerald-accent group-hover:text-white transition-all duration-300 mt-1">
                  <Network size={28} />
                </div>
                <div>
                  <h3 className="font-display text-[19px] font-semibold text-white mb-2">
                    Transdisciplinariedad
                  </h3>
                  <p className="font-sans text-[14px] text-on-primary-container leading-relaxed">
                    Rompiendo las barreras artificiales de las materias curriculares tradicionales para resolver problemas complejos y reales del mundo actual.
                  </p>
                </div>
              </div>

              {/* Pensamiento Crítico card */}
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group">
                <div className="p-3 bg-emerald-accent/20 rounded-xl text-emerald-accent group-hover:bg-emerald-accent group-hover:text-white transition-all duration-300 mt-1">
                  <Activity size={28} />
                </div>
                <div>
                  <h3 className="font-display text-[19px] font-semibold text-white mb-2">
                    Pensamiento Crítico
                  </h3>
                  <p className="font-sans text-[14px] text-on-primary-container leading-relaxed">
                    Análisis profundo, cuestionamiento constructivo y debate respetuoso como los cimientos insustituibles de todo proceso de aprendizaje continuo.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- 6. INTERACTIVE PORTFOLIO PROJECTS --- */}
      <section id="portfolio" className="py-20 md:py-28 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-12 bg-emerald-accent"></div>
                <span className="font-display text-[12px] font-bold text-primary tracking-widest uppercase">Evidencia</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary">
                Proyectos de Innovación
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
              {(['all', 'inclusion', 'innovacion', 'emocional', 'comunidad'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setProjectFilter(cat)}
                  className={`px-4 py-2 rounded-full font-sans text-[13px] font-bold tracking-tight transition-all uppercase ${
                    projectFilter === cat 
                      ? 'bg-emerald-accent text-white shadow-xs'
                      : 'bg-surface-container text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {cat === 'all' ? 'Todos' : cat === 'inclusion' ? 'Inclusión' : cat === 'innovacion' ? 'Innovación' : cat === 'emocional' ? 'Socioemocional' : 'Comunidad'}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                  className="bg-surface p-8 rounded-2xl border border-surface-container-high hover:border-emerald-accent/30 shadow-xs hover:shadow-md cursor-pointer transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[12px] font-bold text-emerald-accent tracking-widest uppercase bg-emerald-accent/5 px-3 py-1 rounded-md">
                        {project.categoryLabel}
                      </span>
                      <span className="text-on-surface-variant text-[13px] font-mono font-medium">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="font-display text-[20px] font-bold text-primary group-hover:text-emerald-accent transition-colors mb-3">
                      {project.title}
                    </h3>
                    <p className="font-sans text-[14px] text-on-surface-variant leading-relaxed line-clamp-3 mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-surface-container-high">
                    <div className="flex flex-col">
                      <span className="text-[11px] text-on-surface-variant uppercase font-bold tracking-wider mb-0.5">Impacto principal</span>
                      <span className="text-[13px] font-semibold text-primary font-sans leading-tight line-clamp-1">{project.impact}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-emerald-accent group-hover:text-white transition-all duration-300">
                      <ChevronRight size={18} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- 7. DESTREZAS Y ACTITUDES ESENCIALES --- */}
      <section id="skills" className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Skills Info Left */}
            <div className="lg:w-1/3">
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-6 leading-tight">
                Destrezas y Actitudes Esenciales
              </h2>
              <p className="font-sans text-[15px] text-on-surface-variant leading-relaxed mb-8">
                Un enfoque pedagógico integral diseñado para asegurar el desarrollo de habilidades blandas y cognitivas críticas que servirán para toda la vida escolar y social.
              </p>

              <div className="p-6 bg-surface-container rounded-2xl border border-surface-container-high relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-accent/5 rounded-bl-full pointer-events-none" />
                <span className="font-display text-[12px] font-bold text-emerald-accent block mb-3 uppercase tracking-wider">Meta fundamental</span>
                <p className="font-sans italic text-primary text-[15px] leading-relaxed">
                  "Formar ciudadanos íntegros, plenamente capaces de navegar la complejidad con empatía, resiliencia y determinación."
                </p>
              </div>
            </div>

            {/* Skills Bars Right with decorative dot grid */}
            <div className="lg:w-2/3 relative">
              {/* Subtle grid of dots layout style from screenshot */}
              <div className="absolute inset-0 bg-[radial-gradient(#c5c6cd_1px,transparent_1px)] [background-size:24px_24px] opacity-25 -z-10 rounded-2xl"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-6 md:p-8 bg-surface-container-lowest/80 rounded-2xl border border-surface-container-high backdrop-blur-xs">
                
                {/* Skill 1: Adaptabilidad */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-display text-[16px] font-bold text-primary">Adaptabilidad</span>
                    <span className="font-mono text-[14px] font-bold text-emerald-accent">85%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
                    <motion.div 
                      className="bg-emerald-accent h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                  <p className="font-sans text-[13px] text-on-surface-variant leading-relaxed">
                    Capacidad de respuesta ante cambios rápidos en el ecosistema escolar y social.
                  </p>
                </div>

                {/* Skill 2: Pensamiento Lógico */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-display text-[16px] font-bold text-primary">Pensamiento Lógico</span>
                    <span className="font-mono text-[14px] font-bold text-emerald-accent">90%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
                    <motion.div 
                      className="bg-emerald-accent h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '90%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                  <p className="font-sans text-[13px] text-on-surface-variant leading-relaxed">
                    Estructuración analítica y coherente para resolver problemas complejos del saber.
                  </p>
                </div>

                {/* Skill 3: Colaboración */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-display text-[16px] font-bold text-primary">Colaboración</span>
                    <span className="font-mono text-[14px] font-bold text-emerald-accent">95%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
                    <motion.div 
                      className="bg-emerald-accent h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '95%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                  <p className="font-sans text-[13px] text-on-surface-variant leading-relaxed">
                    Fomento de sinergias colectivas en proyectos comunitarios y académicos.
                  </p>
                </div>

                {/* Skill 4: Autonomía */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-display text-[16px] font-bold text-primary">Autonomía</span>
                    <span className="font-mono text-[14px] font-bold text-emerald-accent">80%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
                    <motion.div 
                      className="bg-emerald-accent h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '80%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                  <p className="font-sans text-[13px] text-on-surface-variant leading-relaxed">
                    Establecimiento firme de la responsabilidad y auto-dirección en el educando.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 8. TESTIMONIALS SLIDER SECTION --- */}
      <section className="py-20 md:py-24 bg-surface-container-low border-t border-surface-container">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 mb-3 text-[11px] font-bold text-primary bg-primary/5 rounded-full tracking-wider uppercase">
              Opiniones
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary">
              Comunidad y Colegas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <div 
                key={t.id} 
                className="bg-surface-container-lowest p-8 rounded-2xl border border-surface-container-high shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <p className="font-sans text-[15px] text-on-surface-variant leading-relaxed italic mb-8 relative z-10">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={t.avatar} 
                    alt={t.author} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-emerald-accent"
                  />
                  <div>
                    <h4 className="font-display text-[15px] font-bold text-primary">{t.author}</h4>
                    <p className="font-sans text-[12px] text-on-surface-variant">{t.role}</p>
                    <p className="font-sans text-[11px] text-emerald-accent font-semibold">{t.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 9. INTERACTIVE CONTACT MODAL (COLLABORATION DRAWER) --- */}
      <AnimatePresence>
        {isContactOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => { setIsContactOpen(false); setFormSubmitted(false); }}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
            />

            {/* Slide-over Sheet */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-lg bg-surface-container-lowest z-50 shadow-2xl p-8 overflow-y-auto flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-surface-container-high">
                  <div className="flex items-center gap-3">
                    <Briefcase className="text-emerald-accent" size={24} />
                    <h3 className="font-display text-xl font-bold text-primary">Proponer Colaboración</h3>
                  </div>
                  <button 
                    onClick={() => { setIsContactOpen(false); setFormSubmitted(false); }}
                    className="p-1 rounded-full hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-all"
                  >
                    <X size={20} />
                  </button>
                </div>

                {!formSubmitted ? (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div>
                      <label className="block text-[13px] font-bold text-primary uppercase tracking-wider mb-2">Nombre Completo</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Ej. Dra. María González"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-3 bg-surface rounded-xl border border-surface-container-high focus:border-emerald-accent focus:ring-1 focus:ring-emerald-accent outline-none text-[15px] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-primary uppercase tracking-wider mb-2">Correo Electrónico</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="ejemplo@institucion.edu"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4 py-3 bg-surface rounded-xl border border-surface-container-high focus:border-emerald-accent focus:ring-1 focus:ring-emerald-accent outline-none text-[15px] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-primary uppercase tracking-wider mb-2">Institución o Colegio</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Ej. Escuela Primaria Federal Patria"
                        value={contactForm.institution}
                        onChange={(e) => setContactForm({ ...contactForm, institution: e.target.value })}
                        className="w-full px-4 py-3 bg-surface rounded-xl border border-surface-container-high focus:border-emerald-accent focus:ring-1 focus:ring-emerald-accent outline-none text-[15px] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-primary uppercase tracking-wider mb-2">Tipo de Colaboración</label>
                      <select 
                        value={contactForm.projectType}
                        onChange={(e) => setContactForm({ ...contactForm, projectType: e.target.value })}
                        className="w-full px-4 py-3 bg-surface rounded-xl border border-surface-container-high focus:border-emerald-accent focus:ring-1 focus:ring-emerald-accent outline-none text-[15px] transition-all"
                      >
                        <option value="colaboracion">Asesoría Técnico-Pedagógica</option>
                        <option value="asesoria">Taller sobre Inclusión Educativa</option>
                        <option value="conferencia">Conferencia o Seminario de Liderazgo</option>
                        <option value="otro">Otro proyecto de innovación</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-primary uppercase tracking-wider mb-2">Propuesta o Mensaje</label>
                      <textarea 
                        required 
                        rows={4}
                        placeholder="Describe brevemente tus objetivos escolares o los requerimientos de tu institución."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full px-4 py-3 bg-surface rounded-xl border border-surface-container-high focus:border-emerald-accent focus:ring-1 focus:ring-emerald-accent outline-none text-[15px] transition-all resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-emerald-accent text-white py-4 rounded-xl font-display font-semibold hover:bg-emerald-accent/90 transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-accent/15"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Enviando propuesta...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Enviar Propuesta Formal</span>
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-emerald-accent/10 text-emerald-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={36} />
                    </div>
                    <h4 className="font-display text-xl font-bold text-primary mb-3">¡Propuesta Recibida!</h4>
                    <p className="font-sans text-on-surface-variant text-[15px] leading-relaxed mb-6 max-w-sm mx-auto">
                      Gracias, <strong className="text-primary">{contactForm.name}</strong>. Se ha generado la bitácora de colaboración correctamente. Recibirás un correo de seguimiento a la brevedad.
                    </p>

                    <div className="bg-surface p-5 rounded-2xl text-left border border-surface-container-high space-y-3 font-mono text-[13px] text-on-surface-variant mb-8 max-w-sm mx-auto">
                      <div className="flex justify-between border-b border-surface-container-high pb-2">
                        <span className="font-bold">ID Registro:</span>
                        <span>EM-{Math.floor(100000 + Math.random() * 900000)}</span>
                      </div>
                      <div className="flex justify-between border-b border-surface-container-high pb-2">
                        <span className="font-bold">Interés:</span>
                        <span className="capitalize">{contactForm.projectType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-bold">Canal:</span>
                        <span>{contactForm.email}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => { setIsContactOpen(false); setFormSubmitted(false); }}
                      className="px-8 py-3 bg-primary text-white rounded-xl font-display text-[14px] font-bold"
                    >
                      Cerrar Panel
                    </button>
                  </motion.div>
                )}
              </div>

              <div className="pt-6 border-t border-surface-container-high text-center">
                <span className="text-[12px] text-on-surface-variant">
                  Atención directa: <strong>egurenemii20@gmail.com</strong>
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- 10. INTERACTIVE DETAIL MODAL FOR PROJECTS --- */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-primary/20 backdrop-blur-xs z-50 cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-surface-container-lowest p-8 rounded-3xl z-50 shadow-2xl overflow-y-auto max-h-[90vh] border border-surface-container-high"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[12px] font-bold text-emerald-accent uppercase tracking-widest bg-emerald-accent/5 px-3 py-1 rounded-md">
                    {selectedProject.categoryLabel}
                  </span>
                  <h3 className="font-display text-2xl font-extrabold text-primary mt-3">
                    {selectedProject.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-full hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-[13px] font-bold text-primary uppercase tracking-wider mb-2 font-display">Resumen del Proyecto</h4>
                  <p className="font-sans text-[15px] text-on-surface-variant leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-[13px] font-bold text-primary uppercase tracking-wider mb-2 font-display">Hitos e Innovaciones Clave</h4>
                  <ul className="space-y-3 font-sans text-[14px] text-on-surface-variant">
                    {selectedProject.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-accent/10 text-emerald-accent flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 size={13} />
                        </div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 bg-surface rounded-2xl border border-surface-container-high flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-on-surface-variant uppercase font-bold tracking-wider">Impacto Obtenido</span>
                    <p className="text-[15px] font-bold text-primary font-sans mt-0.5">{selectedProject.impact}</p>
                  </div>
                  <div className="text-right sm:text-left shrink-0">
                    <span className="text-[11px] text-on-surface-variant uppercase font-bold tracking-wider block">Periodo Escolar</span>
                    <span className="text-[15px] font-mono font-bold text-primary">{selectedProject.year}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-surface-container-high flex justify-end gap-3">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 bg-surface-container hover:bg-surface-container-high rounded-xl font-sans text-[14px] font-bold text-primary transition-all"
                >
                  Regresar
                </button>
                <button 
                  onClick={() => { setSelectedProject(null); setIsContactOpen(true); }}
                  className="px-6 py-2.5 bg-emerald-accent text-white hover:bg-emerald-accent/90 rounded-xl font-sans text-[14px] font-bold transition-all flex items-center gap-2"
                >
                  Preguntar sobre este proyecto
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- 11. FOOTER --- */}
      <footer className="bg-surface-container-low border-t border-surface-container py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
            <div>
              <div className="font-display text-xl font-extrabold text-primary mb-3">
                Mtra. Emili Montoya Eguren
              </div>
              <p className="font-sans text-[14px] text-on-surface-variant max-w-sm leading-relaxed">
                Impulsando la transformación de la educación básica desde un liderazgo verdaderamente humano y la excelencia pedagógica continua.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-4 w-full md:w-auto">
              {/* Contact direct link copy trigger */}
              <div className="flex flex-wrap gap-6 items-center">
                <button 
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 text-on-surface-variant hover:text-primary text-[14px] font-bold transition-colors cursor-pointer relative"
                >
                  <Mail size={16} className="text-emerald-accent" />
                  <span>egurenemii20@gmail.com</span>
                  <AnimatePresence>
                    {copiedEmail && (
                      <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] py-1 px-2.5 rounded-md font-sans shrink-0 whitespace-nowrap shadow-md"
                      >
                        ¡Copiado!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-on-surface-variant hover:text-primary text-[14px] font-bold transition-colors"
                >
                  <Linkedin size={16} className="text-emerald-accent" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-on-surface-variant hover:text-primary text-[14px] font-bold transition-colors"
                >
                  <Twitter size={16} className="text-emerald-accent" />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-surface-container flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <span className="text-[12px] text-on-surface-variant">
              © 2026 Mtra. Emili Montoya Eguren. Todos los derechos reservados.
            </span>
            <div className="flex gap-4 text-[12px] text-on-surface-variant">
              <a href="#" className="hover:text-primary underline">Política de Privacidad</a>
              <span>•</span>
              <a href="#" className="hover:text-primary underline">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
