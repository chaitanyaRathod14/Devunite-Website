import { Users, Linkedin, Mail, Phone } from 'lucide-react';
import { TeamMember, PageType } from '../types';

interface TeamProps {
  onNavigate: (page: PageType, memberId?: string) => void;
}

export default function Team({ onNavigate }: TeamProps) {
  const teamMembers: TeamMember[] = [
    {
      id: 'jatin',
      name: 'Jatin Dada',
      role: 'Team Lead & Strategy Head',
      description: 'Strategic visionary driving DevUnite\'s technical direction and fostering collaborative excellence across all projects.',
      college: 'Indian Institute of Technology, Delhi',
      phone: '+91 98765 43210',
      email: 'jatin@devunite.com',
      linkedin: 'https://linkedin.com/in/jatin-dada',
      avatar: 'J',
      photo: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      id: 'chaitanya',
      name: 'Chaitanya',
      role: 'Full Stack Developer',
      description: 'Expert in crafting seamless end-to-end solutions with modern frameworks and scalable architectures.',
      college: 'Delhi Technological University',
      phone: '+91 97654 32109',
      email: 'chaitanya@devunite.com',
      linkedin: 'https://linkedin.com/in/chaitanya-dev',
      avatar: 'C',
      photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      id: 'samarth',
      name: 'Samarth',
      role: 'Backend & System Developer',
      description: 'Specializes in building robust backend systems, APIs, and scalable infrastructure for high-performance applications.',
      college: 'National Institute of Technology, Rourkela',
      phone: '+91 96543 21098',
      email: 'samarth@devunite.com',
      linkedin: 'https://linkedin.com/in/samarth-backend',
      avatar: 'S',
      photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      id: 'richa',
      name: 'Richa',
      role: 'Frontend & UI Developer',
      description: 'Creates beautiful, intuitive user interfaces with a keen eye for design and exceptional user experience.',
      college: 'Bits Pilani, Hyderabad',
      phone: '+91 95432 10987',
      email: 'richa@devunite.com',
      linkedin: 'https://linkedin.com/in/richa-ui-designer',
      avatar: 'R',
      photo: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A passionate group of developers united by expertise, innovation, and a commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2"
            >
              <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>

              <div className="p-6 flex flex-col h-full">
                <div className="flex-grow">
                  <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto shadow-lg ring-2 ring-blue-500">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 text-center mb-2">
                    {member.name}
                  </h3>

                  <p className="text-sm font-semibold text-blue-600 text-center mb-4">
                    {member.role}
                  </p>

                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {member.description}
                  </p>
                </div>

                <button
                  onClick={() => onNavigate('profile', member.id)}
                  className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Connect with Me
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
