'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Brand Films",
      description: "Cinematic storytelling that captures your brand's essence and resonates with your audience.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Commercial Production",
      description: "High-impact commercials designed to convert viewers into customers.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Social Content",
      description: "Scroll-stopping content optimized for every platform and algorithm.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Motion Graphics",
      description: "Dynamic animations that bring your ideas to life with style and precision.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Documentary",
      description: "Authentic stories told with depth, emotion, and journalistic integrity.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const portfolio = [
    { title: "Tech Startup Launch", category: "Brand Film", color: "bg-purple-600" },
    { title: "Luxury Auto Campaign", category: "Commercial", color: "bg-blue-600" },
    { title: "Fashion Week Recap", category: "Social", color: "bg-pink-600" },
    { title: "Product Explainer", category: "Motion Graphics", color: "bg-cyan-600" },
    { title: "Founder's Journey", category: "Documentary", color: "bg-orange-600" },
    { title: "App Demo Video", category: "Commercial", color: "bg-green-600" },
  ];

  return (
    <main className="relative overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src="/logo.webp"
              alt="Lake FX"
              className="h-9 w-auto"
            />
          </a>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#work" className="hover:text-purple-400 transition-colors">Work</a>
            <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
          <a
            href="/get-started"
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            background: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.3), transparent 50%)'
          }}
        />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 
            className="text-6xl md:text-8xl font-bold mb-6 font-space-grotesk"
            style={{
              opacity: 1 - scrollY / 500,
              transform: `translateY(${scrollY * 0.2}px)`
            }}
          >
            <span className="gradient-text glow">Stories That</span>
            <br />
            <span className="text-white">Move the World</span>
          </h1>
          <p 
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
            style={{
              opacity: 1 - scrollY / 400,
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          >
            We're a video creative agency that transforms visions into visual masterpieces
          </p>
          <div 
            className="flex gap-4 justify-center"
            style={{
              opacity: 1 - scrollY / 300,
            }}
          >
            <button className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all">
              View Our Work
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-all">
              Let's Talk
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "50+", label: "Global Brands" },
              { number: "12", label: "Years Experience" },
              { number: "100M+", label: "Views Generated" }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="opacity-0 animate-fade-in"
                style={{ 
                  animationDelay: `${i * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Portfolio Section */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-5xl md:text-7xl font-bold font-space-grotesk">
              <span className="gradient-text">Recent</span>
              <br />
              <span className="text-white">Work</span>
            </h2>
            <p className="hidden md:block text-sm text-gray-400">Scroll horizontally to explore.</p>
          </div>
          <div
            className="flex gap-8 overflow-x-auto pb-6 horizontal-scroll-container snap-x snap-mandatory"
            aria-label="Recent work carousel"
          >
            {portfolio.map((project, i) => (
              <div
                key={i}
                className="snap-start flex-shrink-0 w-[600px] h-[400px] rounded-3xl overflow-hidden relative group cursor-pointer"
              >
                <div className={`absolute inset-0 ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-sm text-gray-300 mb-2">{project.category}</div>
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center font-space-grotesk">
            <span className="gradient-text">What We Do</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform`} />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-space-grotesk">
            Ready to Create Something
            <br />
            <span className="gradient-text">Extraordinary?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Let's bring your vision to life with the power of video
          </p>
          <button className="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-medium hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105">
            Start Your Project
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold gradient-text font-space-grotesk">Lake FX Media</div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Vimeo</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
          <div className="text-sm text-gray-400">
            © 2026 Lake FX Media. All rights reserved.
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </main>
  );
}