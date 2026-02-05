import { ArrowRight, Sparkles, Code, Zap } from 'lucide-react';
import { PageType } from '../types';
import { useEffect, useState } from 'react';

interface HeroProps {
  onNavigate: (page: PageType) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Designing a Better",
      highlight: "World Today",
      subtitle: "Pioneering AI and web innovation where creativity knows no limits"
    },
    {
      title: "Building Intelligent",
      highlight: "Digital Solutions",
      subtitle: "Transform your vision into reality with cutting-edge technology"
    },
    {
      title: "Crafting Exceptional",
      highlight: "User Experiences",
      subtitle: "Where design meets functionality in perfect harmony"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Massive 3D floating elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-amber-600/5 rounded-full animate-blob-bounce blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-pink-600/5 rounded-full animate-blob-bounce blur-3xl" style={{ animationDelay: '3s' }}></div>
      
      {/* 3D Cubes */}
      <div className="absolute top-1/4 right-20 w-32 h-32 border-2 border-yellow-400/20 animate-rotate3d"></div>
      <div className="absolute bottom-1/3 left-20 w-24 h-24 border-2 border-purple-400/15 animate-rotate3d" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8 animate-scaleIn hover:scale-105 transition-transform cursor-pointer group">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              AI-Powered Innovation Studio
            </span>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>

          {/* Hero Carousel */}
          <div className="relative h-64 md:h-72 mb-8 overflow-hidden">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentSlide 
                    ? 'opacity-100 translate-y-0' 
                    : index < currentSlide 
                      ? 'opacity-0 -translate-y-full' 
                      : 'opacity-0 translate-y-full'
                }`}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-tight mb-4">
                  <span className="block text-white drop-shadow-2xl">
                    {slide.title}
                  </span>
                  <span className="block text-gradient-multi animate-gradient mt-2">
                    {slide.highlight}
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {slide.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mb-12 animate-slideUp" style={{ animationDelay: '0.3s' }}>
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide 
                    ? 'w-12 h-3 bg-gradient-to-r from-yellow-400 to-amber-500' 
                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                }`}
              ></button>
            ))}
          </div>

          {/* Epic CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => onNavigate('projects')}
              className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-900 font-bold rounded-2xl shadow-2xl shadow-yellow-400/30 hover:shadow-yellow-400/50 transition-all duration-300 flex items-center gap-3 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <Code className="w-6 h-6 relative z-10" />
              <span className="text-lg relative z-10">Explore Projects</span>
              <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center relative z-10">
                <ArrowRight className="w-5 h-5 text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="group px-10 py-5 glass hover:bg-white/10 text-white font-bold rounded-2xl border-2 border-white/20 hover:border-yellow-400/50 transition-all duration-300 flex items-center gap-3"
            >
              <Zap className="w-6 h-6 text-yellow-400 group-hover:rotate-12 transition-transform" />
              <span className="text-lg">Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-slideUp" style={{ animationDelay: '0.6s' }}>
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "30+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="glass p-6 rounded-2xl hover:scale-105 transition-transform cursor-pointer group">
                <div className="text-4xl font-black text-gradient-multi animate-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-yellow-400 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-gradient"></div>
    </div>
  );
}
