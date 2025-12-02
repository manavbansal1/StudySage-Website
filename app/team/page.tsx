import { Users, Heart, Lightbulb, Zap, Target, Github } from 'lucide-react';
import Image from 'next/image';
import TeamMember from '@/components/TeamMember';
import '../../styles/Team.css';

const teamMembers = [
  {
    id: '1',
    name: 'Manav Bansal',
    role: 'Lead Backend Engineer & Game Developer',
    description: 'Architected the real-time multiplayer game backend using WebSockets and built the course website. Ensures system reliability with robust API design.',
    image: '/team/manav.JPG',
    responsibilities: [
      'Added multiplayer games functionality with WebSocket support',
      'Created the entire backend for the games feature',
      'Implemented Quiz Race game and Study-Tac-Toe game',
      'Created the course website',
      'Fixed the API endpoints and added fallback mechanism screens in frontend to ensure reliability'
    ],
    social: {
      github: 'https://github.com/manavbansal1',
      linkedin: 'https://linkedin.com/in/manavbansal39',
      email: 'mba208@sfu.ca',
      portfolio: 'https://manavbansal.vercel.app'
    }
  },
  {
    id: '2',
    name: 'Akaaljot Singh Mathoda',
    role: 'Backend Security Engineer & UI Developer',
    description: 'Focuses on secure backend infrastructure, API key management, and email service integration. Also contributes to maintaining a polished user interface.',
    image: '/team/akaal.jpeg',
    responsibilities: [
      'Integrated Resend email service with custom domain to send automated emails to users',
      'Connected daily tasks, study streak features, and recently opened PDFs to backend',
      'Developed a secure Google Cloud backend server that centralizes API key management and validates requests',
      'Fixed UI bugs across the app'
    ],
    social: {
      github: 'https://github.com/jassa47',
      linkedin: 'https://linkedin.com/in/akaaljot-singh-mathoda-703b04253',
      email: 'asm40@sfu.ca'
    }
  },
  {
    id: '3',
    name: 'Ansh Tiwari',
    role: 'Mobile UI/UX Lead & Social Features Engineer',
    description: 'Specializes in building interactive social features like real-time chat and NFC sharing. Dedicated to crafting intuitive user interfaces.',
    image: '/team/ansh.JPG',
    responsibilities: [
      'Implemented the basic UI for Groups tab and improved Group Chat UI',
      'Implemented end-to-end NFC functionality for peer-to-peer document sharing and collaboration',
      'Fully implemented real-time messages in Groups as well as Cloudinary file uploads',
      'Improved the overall UI of the app and fixed UI bugs across app screens'
    ],
    social: {
      github: 'https://github.com/candyragi',
      linkedin: 'https://linkedin.com/in/ansh-tiwari-a19986202/',
      email: 'ata185@sfu.ca',
      portfolio: 'https://www.candyragi.info/'
    }
  },
  {
    id: '4',
    name: 'Kabir Singh Sidhu',
    role: 'AI Integration Lead & Android Developer',
    description: 'Drives the AI capabilities of the app, focusing on intelligent quiz generation and document processing pipelines.',
    image: 'team/kabir.JPG',
    responsibilities: [
      'Implemented AI-powered quiz generation from PDFs',
      'Implemented PDF upload feature and processing pipeline',
      'Collaborated in game development',
      'Fixed bugs across app components',
      'Added PDF support for games and fixed bugs across games UI screens'
    ],
    social: {
      github: 'https://github.com/kab1rs1dhu',
      linkedin: '',
      email: 'kss31@sfu.ca',
      portfolio: 'https://kabirsidhu.dev/'
    }
  },
  {
    id: '5',
    name: 'Yadhu Choudhary',
    role: 'Full-Stack Developer & AI Content Specialist',
    description: 'Develops innovative AI content features like auto-generated flashcards and podcasts. Maintains the course website.',
    image: 'team/yadhu.jpeg',
    responsibilities: [
      'Completed the flashcards generation feature',
      'Worked on podcast feature development and implemented audio processing and transcript generation',
      'Maintains the course website'
    ],
    social: {
      github: 'https://github.com/yadhuuu1110',
      linkedin: 'https://linkedin.com/in/yadhu-choudhary-744b98380',
      email: 'yca478@sfu.ca'
    }
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-100 dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-900">
      {/* Hero Section with Group Photo */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#652497]/5 via-[#7c3aed]/5 to-transparent dark:from-[#652497]/10 dark:via-[#7c3aed]/10" />

        <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-center space-y-6 mb-12">
            <div className="inline-block hero-badge-animate">
              <span className="px-4 py-2 rounded-full bg-[#652497]/10 dark:bg-[#652497]/20 text-[#652497] dark:text-purple-300 text-sm font-semibold border border-[#652497]/20 dark:border-[#652497]/30 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Meet the Team
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight hero-title-animate">
              <span className="bg-gradient-to-r from-[#652497] via-[#7c3aed] to-[#8b5cf6] bg-clip-text text-transparent">
                The Minds Behind StudySage
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed hero-description-animate">
              A passionate team of five dedicated to revolutionizing how students learn and study
            </p>
          </div>

          {/* Group Photo */}
          <div className="group-photo-container max-w-4xl mx-auto mb-12">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
              <Image
                src="/team/group.jpg"
                alt="StudySage Team"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Drives Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our shared values and vision for transforming education through technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Heart,
              title: 'Student-Focused',
              description: 'Every decision we make starts with the question: How does this help students learn better?',
              gradient: 'from-[#652497] to-[#7c3aed]'
            },
            {
              icon: Lightbulb,
              title: 'Innovation First',
              description: 'We leverage cutting-edge AI and technology to create learning experiences that were impossible before.',
              gradient: 'from-[#7c3aed] to-[#8b5cf6]'
            },
            {
              icon: Zap,
              title: 'Fast & Efficient',
              description: 'We believe studying should be effective, not time-consuming. Our tools maximize learning in minimal time.',
              gradient: 'from-[#8b5cf6] to-[#a78bfa]'
            },
            {
              icon: Target,
              title: 'Results Driven',
              description: 'We measure success by real student outcomes: better grades, deeper understanding, and confidence.',
              gradient: 'from-[#a78bfa] to-[#c4b5fd]'
            }
          ].map((value, idx) => (
            <div
              key={idx}
              className="value-card p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 hover:border-[#652497]/40 dark:hover:border-[#652497]/60 card-smooth-hover shadow-smooth"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4`}>
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* About Team Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#652497] via-[#7c3aed] to-[#8b5cf6] text-white shadow-2xl overflow-hidden">
            {/* CSS Grid Pattern Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="relative space-y-4">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                We're a team of five university students who experienced firsthand the challenges of traditional studying.
                Frustrated by hours spent creating flashcards and feeling isolated while preparing for exams, we decided to build
                the study tool we wished we had.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                StudySage combines our diverse skills in software development, AI, design, and education to create an
                all-in-one platform that makes studying smarter, faster, and more social. We're not just building an app—we're
                building the future of learning.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                This project started as a university capstone but has evolved into our passion. We believe every student
                deserves access to powerful, AI-driven study tools that adapt to their needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="relative mb-16">
          {/* Decorative Elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <Users className="w-64 h-64 text-[#652497]" />
          </div>

          {/* Content */}
          <div className="relative text-center space-y-4 my-8">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-[#652497]/10 dark:bg-[#652497]/20 text-[#652497] dark:text-purple-300 text-sm font-semibold border border-[#652497]/20 dark:border-[#652497]/30">
                Our Team
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
              Meet the{' '}
              <span className="bg-gradient-to-r from-[#652497] via-[#7c3aed] to-[#8b5cf6] bg-clip-text text-transparent">
                Creators
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Five passionate individuals combining their unique skills to transform how students learn
            </p>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-3 pt-4">
              <div className="w-12 h-1 rounded-full bg-gradient-to-r from-transparent to-[#652497]" />
              <div className="w-2 h-2 rounded-full bg-[#652497]" />
              <div className="w-24 h-1 rounded-full bg-gradient-to-r from-[#652497] to-[#8b5cf6]" />
              <div className="w-2 h-2 rounded-full bg-[#8b5cf6]" />
              <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#8b5cf6] to-transparent" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={member.id} member={member} index={index} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="p-12 rounded-3xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Want to get in touch?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            We'd love to hear your feedback, suggestions, or just chat about education and technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:bansalmanav39@gmail.com"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#652497] to-[#7c3aed] text-white font-bold text-lg button-smooth shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="/progress"
              className="px-8 py-4 rounded-xl bg-white dark:bg-slate-700 text-[#652497] dark:text-purple-400 font-bold text-lg border-2 border-[#652497]/30 dark:border-[#652497]/50 hover:border-[#652497] dark:hover:border-[#652497] button-smooth"
            >
              View Our Progress
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}