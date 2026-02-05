import { ArrowLeft, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { PageType } from '../types';

interface TeamMemberProfileProps {
  memberId?: string;
  onNavigate: (page: PageType) => void;
}

export default function TeamMemberProfile({ memberId, onNavigate }: TeamMemberProfileProps) {
  const teamData: { [key: string]: any } = {
    jatin: {
      name: 'Jatin Dada',
      role: 'Team Lead & Strategy Head',
      college: 'Indian Institute of Technology, Delhi',
      phone: '+91 98765 43210',
      email: 'jatin@devunite.com',
      linkedin: 'https://linkedin.com/in/jatin-dada',
      avatar: 'J',
      photo: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      bio: 'Strategic visionary with 6+ years of experience driving technical direction and fostering collaborative excellence across all projects. Specialized in system architecture and team management.',
      expertise: ['System Design', 'Team Leadership', 'Full Stack Architecture', 'Cloud Infrastructure'],
    },
    chaitanya: {
      name: 'Chaitanya',
      role: 'Full Stack Developer',
      college: 'Delhi Technological University',
      phone: '+91 97654 32109',
      email: 'chaitanya@devunite.com',
      linkedin: 'https://linkedin.com/in/chaitanya-dev',
      avatar: 'C',
      photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      bio: 'Expert developer with 5+ years in crafting seamless end-to-end solutions. Passionate about modern frameworks, scalable architectures, and clean code practices.',
      expertise: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'],
    },
    samarth: {
      name: 'Samarth',
      role: 'Backend & System Developer',
      college: 'National Institute of Technology, Rourkela',
      phone: '+91 96543 21098',
      email: 'samarth@devunite.com',
      linkedin: 'https://linkedin.com/in/samarth-backend',
      avatar: 'S',
      photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      bio: 'Backend specialist with 5+ years building robust systems, scalable APIs, and high-performance infrastructure. Expert in microservices and database optimization.',
      expertise: ['Python', 'Express.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    },
    richa: {
      name: 'Richa',
      role: 'Frontend & UI Developer',
      college: 'Bits Pilani, Hyderabad',
      phone: '+91 95432 10987',
      email: 'richa@devunite.com',
      linkedin: 'https://linkedin.com/in/richa-ui-designer',
      avatar: 'R',
      photo: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      bio: 'Creative frontend developer with 4+ years creating beautiful, intuitive interfaces. Passionate about user experience, responsive design, and modern UI frameworks.',
      expertise: ['React', 'Vue.js', 'Tailwind CSS', 'UI/UX Design', 'Figma'],
    },
  };

  const member = memberId && teamData[memberId];

  if (!member) {
    return (
      <div className="pt-16 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-slate-900">Profile Not Found</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Team
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-blue-600 to-cyan-600"></div>

          <div className="px-6 sm:px-12 py-8">
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white -mt-16">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-grow">
                <h1 className="text-4xl font-bold text-slate-900 mb-2">
                  {member.name}
                </h1>

                <p className="text-xl font-semibold text-blue-600 mb-4">
                  {member.role}
                </p>

                <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-semibold"
                  >
                    <Mail className="w-5 h-5" />
                    Email
                  </a>

                  <a
                    href={`tel:${member.phone}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors font-semibold"
                  >
                    <Phone className="w-5 h-5" />
                    Call
                  </a>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-semibold"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Education</h3>
                    <p className="text-gray-600">{member.college}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Key Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill: string, index: number) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-gray-200">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
                <p className="text-sm text-gray-600 mb-1">Email Address</p>
                <p className="text-lg font-semibold text-blue-600 break-all">{member.email}</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg p-6 text-center">
                <p className="text-sm text-gray-600 mb-1">Phone Number</p>
                <p className="text-lg font-semibold text-cyan-600">{member.phone}</p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 text-center">
                <p className="text-sm text-gray-600 mb-1">LinkedIn</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-teal-600 hover:text-teal-700 transition-colors break-all"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start a Project with {member.name.split(' ')[0]}
          </button>
        </div>
      </div>
    </div>
  );
}
