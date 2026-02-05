import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import TeamMemberProfile from './pages/TeamMemberProfile';
import { PageType } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedMemberId, setSelectedMemberId] = useState<string>();
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Hide loading screen after 3.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Track mouse for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNavigate = (page: PageType, memberId?: string) => {
    setCurrentPage(page);
    if (memberId) {
      setSelectedMemberId(memberId);
    } else {
      setSelectedMemberId(undefined);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'profile':
        return <TeamMemberProfile memberId={selectedMemberId} onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      {/* Epic Loading Screen */}
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-mesh animate-fadeOut" style={{ animationDelay: '3s' }}>
          <div className="relative">
            {/* 3D Rotating Cubes */}
            <div className="absolute -top-32 -left-32 w-64 h-64">
              <div className="w-full h-full border-4 border-yellow-400/30 animate-rotate3d"></div>
            </div>
            <div className="absolute -bottom-32 -right-32 w-48 h-48">
              <div className="w-full h-full border-4 border-purple-400/20 animate-rotate3d" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Morphing Blobs */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-yellow-400/20 to-amber-600/20 rounded-full animate-morph blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full animate-morph blur-2xl" style={{ animationDelay: '2s' }}></div>
            
            {/* Main text with epic entrance */}
            <div className="text-center px-8 relative z-10">
              <h1 className="text-6xl md:text-8xl font-black mb-6 animate-scaleIn">
                <span className="text-gradient-multi animate-gradient">DevUnite</span>
              </h1>
              <p className="text-3xl md:text-4xl text-yellow-400 font-bold tracking-wider animate-slideUp" style={{ animationDelay: '0.3s' }}>
                Studio
              </p>
              
              {/* Animated particles */}
              <div className="mt-12 flex justify-center gap-3 animate-slideUp" style={{ animationDelay: '0.6s' }}>
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-pulse-glow"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  ></div>
                ))}
              </div>

              {/* Loading bar */}
              <div className="mt-8 w-64 h-1 mx-auto bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 animate-gradient"></div>
              </div>
            </div>

            {/* Orbiting elements */}
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-yellow-400 rounded-full animate-orbit"></div>
            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-purple-400 rounded-full animate-orbit" style={{ animationDelay: '5s' }}></div>
          </div>
        </div>
      )}

      {/* Main Website with Epic Background */}
      <div className="min-h-screen relative overflow-hidden bg-gradient-mesh">
        {/* Animated Gradient Mesh Background */}
        <div className="fixed inset-0 z-0 opacity-100">
          {/* Large gradient blobs */}
          <div 
            className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-yellow-400/20 via-amber-500/10 to-transparent rounded-full blur-3xl animate-blob-bounce"
            style={{ 
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` 
            }}
          ></div>
          <div 
            className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-purple-500/20 via-pink-500/10 to-transparent rounded-full blur-3xl animate-blob-bounce"
            style={{ 
              animationDelay: '3s',
              transform: `translate(-${mousePosition.x * 0.3}px, ${mousePosition.y * 0.4}px)` 
            }}
          ></div>
          <div 
            className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/20 via-cyan-500/10 to-transparent rounded-full blur-3xl animate-blob-bounce"
            style={{ 
              animationDelay: '6s',
              transform: `translate(${mousePosition.x * 0.2}px, -${mousePosition.y * 0.3}px)` 
            }}
          ></div>

          {/* 3D Geometric shapes floating */}
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-yellow-400/20 rotate-45 animate-float-slow backdrop-blur-sm bg-white/5"></div>
          <div className="absolute top-1/3 right-20 w-24 h-24 border-2 border-purple-400/15 rotate-12 animate-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-40 h-40 border border-pink-400/10 rotate-45 animate-float-slower backdrop-blur-sm bg-white/5"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 border border-blue-400/15 rotate-30 animate-float-slow"></div>
          
          {/* Morphing shapes */}
          <div className="absolute top-1/2 left-10 w-48 h-48 bg-gradient-to-br from-yellow-400/10 to-amber-600/5 animate-morph blur-xl"></div>
          <div className="absolute top-1/4 right-10 w-56 h-56 bg-gradient-to-bl from-purple-400/10 to-pink-600/5 animate-morph blur-xl" style={{ animationDelay: '4s' }}></div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>

          {/* Hexagonal pattern */}
          <div className="absolute inset-0 opacity-[0.08] animate-float-slower" style={{
            backgroundImage: `
              linear-gradient(30deg, transparent 45%, rgba(251, 191, 36, 0.05) 45%, rgba(251, 191, 36, 0.05) 55%, transparent 55%),
              linear-gradient(150deg, transparent 45%, rgba(251, 191, 36, 0.05) 45%, rgba(251, 191, 36, 0.05) 55%, transparent 55%)
            `,
            backgroundSize: '100px 170px'
          }}></div>

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `particle-float ${10 + Math.random() * 20}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>

        {/* Noise texture overlay */}
        <div className="fixed inset-0 z-0 noise-bg pointer-events-none"></div>

        {/* Main content */}
        <div className="relative z-10">
          <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
          <main>
            {renderPage()}
          </main>
          {currentPage !== 'profile' && <Footer />}
        </div>
      </div>
    </>
  );
}

export default App;
