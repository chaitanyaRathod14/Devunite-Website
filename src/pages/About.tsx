import { Target, Heart, Lightbulb, Shield } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion-Driven',
      description:
        'We are a team of passionate developers who love what we do and are committed to excellence.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality & Transparency',
      description:
        'We maintain the highest standards of quality and believe in transparent communication.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation First',
      description:
        'We embrace cutting-edge technologies to build intelligent, future-ready solutions.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Long-Term Partnerships',
      description:
        'We focus on building lasting relationships and growing together with our clients.',
    },
  ];

  return (
    <div className="pt-16">
      {/* HERO */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              DevUnite
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            United by technology, driven by innovation
          </p>
        </div>
      </div>

      {/* ABOUT CONTENT */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-gray-700 space-y-6 text-lg leading-relaxed">
          <p>
            DevUnite is a passionate team of developers united to build
            intelligent digital products that make a difference. We are your
            technology partners committed to transforming ideas into reality.
          </p>

          <p>
            Our expertise spans full-stack development with a strong focus on AI
            and Machine Learning integrations. We build solutions that are
            scalable, intelligent, and future-ready.
          </p>

          <p>
            From startups to enterprises, we provide end-to-end development
            services tailored to your needs, combining frontend, backend,
            architecture, and AI expertise.
          </p>

          <p>
            At DevUnite, we don’t just write code — we craft experiences, solve
            complex problems, and build products users love.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-gray-600">
              Principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let’s turn your ideas into intelligent, scalable solutions.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
