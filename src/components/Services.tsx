import { Code, Brain, Wrench, Zap, Briefcase, Rocket } from 'lucide-react';
import { Service } from '../types';
import { useState, useEffect } from 'react';

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const services: Service[] = [
    {
      title: 'Full Stack Web & App Development',
      description: 'End-to-end development of modern web and mobile applications using cutting-edge technologies and best practices.',
      icon: 'code',
    },
    {
      title: 'AI & Machine Learning Integration',
      description: 'Integrate intelligent AI and ML models into your applications for smarter, data-driven decision-making.',
      icon: 'brain',
    },
    {
      title: 'Custom Software Solutions',
      description: 'Tailored software solutions meticulously designed to meet your unique business requirements and goals.',
      icon: 'wrench',
    },
    {
      title: 'API Development & Automation',
      description: 'Build robust, scalable APIs and automate complex workflows to streamline your business operations.',
      icon: 'zap',
    },
    {
      title: 'Business & Startup Solutions',
      description: 'Comprehensive digital solutions to help startups and enterprises scale efficiently in the modern market.',
      icon: 'briefcase',
    },
    {
      title: 'Cloud & DevOps Services',
      description: 'Modern cloud infrastructure setup, deployment pipelines, and DevOps practices for optimal performance.',
      icon: 'rocket',
    },
  ];

  const getIcon = (iconName: string) => {
    const iconProps = { className: 'w-10 h-10', strokeWidth: 1.5 };
    switch (iconName) {
      case 'code':
        return <Code {...iconProps} />;
      case 'brain':
        return <Brain {...iconProps} />;
      case 'wrench':
        return <Wrench {...iconProps} />;
      case 'zap':
        return <Zap {...iconProps} />;
      case 'briefcase':
        return <Briefcase {...iconProps} />;
      case 'rocket':
        return <Rocket {...iconProps} />;
      default:
        return <Code {...iconProps} />;
    }
  };

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(services.length / 3));
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlay, services.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(services.length / 3));
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(services.length / 3)) % Math.ceil(services.length / 3));
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Epic background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl animate-blob-bounce"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-500/10 to-transparent rounded-full blur-3xl animate-blob-bounce" style={{ animationDelay: '2s' }}></div>
      
      {/* 3D rotating cubes */}
      <div className="absolute top-40 left-10 w-24 h-24 border border-yellow-400/10 animate-rotate3d"></div>
      <div className="absolute bottom-40 right-10 w-32 h-32 border border-purple-400/10 animate-rotate3d" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 glass rounded-full text-sm font-semibold text-yellow-400 border border-yellow-400/20">
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Our <span className="text-gradient-multi animate-gradient">Services</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Comprehensive technology solutions to transform your business ideas into reality with cutting-edge innovation
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(services.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {services.slice(slideIndex * 3, slideIndex * 3 + 3).map((service, index) => (
                      <div
                        key={index}
                        className="group relative card-3d"
                      >
                        {/* Card glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Main card */}
                        <div className="relative glass-dark p-8 rounded-3xl border border-white/5 group-hover:border-yellow-400/30 transition-all duration-500 h-full backdrop-blur-xl overflow-hidden">
                          {/* Animated background gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Shine effect */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                          </div>

                          {/* Content */}
                          <div className="relative z-10">
                            {/* Icon */}
                            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-yellow-400/30">
                              {getIcon(service.icon)}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                              {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                              {service.description}
                            </p>

                            {/* Decorative element */}
                            <div className="mt-6 w-full h-1 bg-gradient-to-r from-yellow-400/50 via-purple-500/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          </div>

                          {/* Corner decoration */}
                          <div className="absolute top-4 right-4 w-12 h-12 border-2 border-yellow-400/10 rounded-lg rotate-45 group-hover:rotate-90 group-hover:border-yellow-400/30 transition-all duration-500"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 glass w-14 h-14 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 group border border-white/10 hover:border-yellow-400"
          >
            <svg className="w-6 h-6 group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 glass w-14 h-14 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 group border border-white/10 hover:border-yellow-400"
          >
            <svg className="w-6 h-6 group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-12">
            {Array.from({ length: Math.ceil(services.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'w-12 h-3 bg-gradient-to-r from-yellow-400 to-amber-500 shadow-lg shadow-yellow-400/30' 
                    : 'w-3 h-3 bg-gray-600 hover:bg-yellow-400/50'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
