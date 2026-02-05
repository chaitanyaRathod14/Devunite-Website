import { ExternalLink, Code2 } from 'lucide-react';
import { Project } from '../types';

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'AI-Powered Customer Analytics Platform',
      description:
        'A sophisticated web application that leverages machine learning to analyze customer behavior patterns and provide actionable business insights in real-time.',
      technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'PostgreSQL', 'AWS'],
      category: 'AI & ML',
    },
    {
      title: 'Enterprise Resource Management System',
      description:
        'Comprehensive business management solution with modules for inventory, HR, finance, and operations.',
      technologies: ['Next.js', 'Express', 'MongoDB', 'Redis', 'Docker'],
      category: 'Business Solutions',
    },
    {
      title: 'Intelligent Document Processing Tool',
      description:
        'Automated document classification and data extraction system using NLP and computer vision.',
      technologies: ['Python', 'FastAPI', 'OpenCV', 'NLP', 'React', 'MySQL'],
      category: 'Automation',
    },
    {
      title: 'Real-Time Data Analytics Dashboard',
      description:
        'Interactive dashboard for visualizing complex datasets with real-time updates.',
      technologies: ['Vue.js', 'D3.js', 'Node.js', 'InfluxDB', 'WebSocket'],
      category: 'Data Visualization',
    },
    {
      title: 'Smart Inventory Management System',
      description:
        'IoT-integrated inventory tracking platform with predictive analytics.',
      technologies: ['React Native', 'Express', 'IoT', 'Machine Learning', 'PostgreSQL'],
      category: 'Custom Software',
    },
    {
      title: 'Healthcare Appointment & Telemedicine Platform',
      description:
        'Secure platform for appointments, patient records, and video consultations.',
      technologies: ['React', 'Node.js', 'WebRTC', 'MongoDB', 'Stripe API'],
      category: 'Healthcare',
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'AI & ML': 'from-blue-500 to-cyan-500',
      'Business Solutions': 'from-blue-600 to-blue-800',
      Automation: 'from-cyan-500 to-teal-500',
      'Data Visualization': 'from-blue-500 to-teal-600',
      'Custom Software': 'from-slate-600 to-blue-600',
      Healthcare: 'from-blue-600 to-cyan-700',
    };
    return colors[category] || 'from-blue-500 to-cyan-500';
  };

  return (
    <div className="pt-16">
      {/* HERO */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing intelligent solutions that drive growth & innovation
          </p>
        </div>
      </div>

      {/* PROJECTS GRID */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${getCategoryColor(project.category)}`} />

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(
                      project.category
                    )} text-white`}
                  >
                    {project.category}
                  </span>
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                    <Code2 size={18} />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg flex items-center justify-center gap-2">
                  View Details <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
        <p className="text-gray-600 mb-8">
          Let’s build something impactful together.
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg">
          Start Your Project
        </button>
      </section>
    </div>
  );
}
