import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 border-t border-white/5 overflow-hidden">
      {/* Epic background */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-400/5 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-400/30">
                <span className="text-slate-900 font-black text-2xl">D</span>
              </div>
              <div className="text-3xl font-black">
                <span className="text-white">DevUnite</span>
                <span className="text-gradient ml-2">Studio</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Building intelligent full stack solutions with AI & ML integrations to power modern businesses. Let's create something amazing together.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Github, label: 'GitHub', color: 'hover:bg-gray-400' },
                { icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-blue-500' },
                { icon: Twitter, label: 'Twitter', color: 'hover:bg-sky-400' },
                { icon: Mail, label: 'Email', color: 'hover:bg-yellow-400' }
              ].map(({ icon: Icon, label, color }) => (
                <a
                  key={label}
                  href="#"
                  className={`group w-12 h-12 glass rounded-xl flex items-center justify-center ${color} hover:text-slate-900 transition-all duration-300 border border-white/5 hover:border-transparent hover:scale-110 hover:shadow-lg`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              Quick Links
              <div className="h-px flex-1 bg-gradient-to-r from-yellow-400/50 to-transparent"></div>
            </h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Projects', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-yellow-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-yellow-400 group-hover:w-4 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              Get in Touch
              <div className="h-px flex-1 bg-gradient-to-r from-yellow-400/50 to-transparent"></div>
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@devunite.com" className="hover:text-yellow-400 transition-colors">
                  contact@devunite.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Pune, Maharashtra, IN</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              &copy; {currentYear} DevUnite Studio. Crafted with
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              and code
            </p>
            
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50"></div>
    </footer>
  );
}
