import { Rocket, TrendingUp, Calendar } from 'lucide-react';
import Milestone from '@/components/Milestone';
import '../../styles/Progress.css';

const milestones = [
  {
    id: '1',
    title: 'Project Setup & Foundation',
    description: 'Created the StudySage project repository and set up the initial codebase structure.',
    date: 'October 17, 2025',
    status: 'completed' as const,
    progress: 100,
    tags: ['Setup'],
    team: ['Manav Bansal'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/manavbansal1/studysage' },
      { label: 'Firebase Console', url: 'https://console.firebase.google.com' }
    ],
    subMilestones: [
      { 
        id: '1-1', 
        title: 'This commit marks the start of the project setup.', 
        completed: true,
        notes: [
          'Initialized Git repository'      
        ]
      },
      { 
        id: '1-2', 
        title: 'Confirmed that the environment builds without dependency errors.', 
        completed: true, 
        assignee: 'John Doe',
        notes: [
          'Set up React Native environment',
        ]
      },
      { 
        id: '1-3', 
        title: 'Established naming conventions and directory structure for future development.', 
        completed: true, 
        assignee: 'Jane Smith',
        notes: [
          'Created folders for components, screens, services, and assets'
        ]
      },
      { 
        id: '1-4', 
        title: 'Build the basic home screen and navigation structure.', 
        completed: true,
        notes: [
          'Implemented React Navigation for screen transitions'
        ]
      }
    ],
    notes: 'Initial setup went smoothly.'
  },
  {
    id: '2',
    title: 'AI Flashcard Generator',
    description: 'Integrated AI-powered note parser that automatically converts uploaded PDFs and documents into intelligent flashcards with smart content extraction.',
    date: 'February 3, 2025',
    status: 'completed' as const,
    progress: 100,
    tags: ['AI', 'NLP', 'Core Feature'],
    team: ['John Doe', 'Alex Johnson'],
    images: [
      'https://placehold.co/800x450/652497/FFFFFF/png?text=Flashcard+UI',
      'https://placehold.co/800x450/7c3aed/FFFFFF/png?text=AI+Processing',
      'https://placehold.co/800x450/8b5cf6/FFFFFF/png?text=PDF+Upload'
    ],
    links: [
      { label: 'OpenAI API Documentation', url: 'https://platform.openai.com/docs' },
      { label: 'Feature Demo Video', url: 'https://youtube.com/demo' }
    ],
    subMilestones: [
      { 
        id: '2-1', 
        title: 'Research and select AI model (GPT-4)', 
        completed: true, 
        assignee: 'John Doe',
        notes: [
          'Evaluated GPT-4, Claude, and Gemini',
          'GPT-4 chosen for best flashcard quality',
          'Set up OpenAI API integration'
        ]
      },
      { 
        id: '2-2', 
        title: 'Build PDF text extraction pipeline', 
        completed: true, 
        assignee: 'Alex Johnson',
        images: [
          'https://placehold.co/600x400/652497/FFFFFF/png?text=PDF+Parser'
        ],
        notes: [
          'Implemented PDF.js for text extraction',
          'Added OCR support for scanned documents',
          'Handles multi-column layouts'
        ]
      },
      { 
        id: '2-3', 
        title: 'Implement prompt engineering for flashcard generation', 
        completed: true, 
        assignee: 'John Doe',
        notes: [
          'Optimized prompts for different subjects',
          'Added context-aware question generation',
          'Implemented difficulty level adjustment'
        ]
      },
      { 
        id: '2-4', 
        title: 'Create flashcard review UI', 
        completed: true,
        images: [
          'https://placehold.co/600x400/7c3aed/FFFFFF/png?text=Card+Front',
          'https://placehold.co/600x400/8b5cf6/FFFFFF/png?text=Card+Back'
        ],
        notes: [
          'Built swipe-based card interface',
          'Added smooth flip animations',
          'Implemented progress tracking'
        ]
      },
      { 
        id: '2-5', 
        title: 'Add support for images in flashcards', 
        completed: true 
      },
      { 
        id: '2-6', 
        title: 'Implement spaced repetition algorithm', 
        completed: true,
        notes: [
          'Integrated SM-2 algorithm',
          'Tracks review intervals and difficulty'
        ]
      }
    ],
    notes: 'The AI integration exceeded expectations. GPT-4 generates high-quality flashcards with minimal errors. Added support for multiple languages and subject-specific formatting.'
  },
  {
    id: '3',
    title: 'Gamification & Quiz System',
    description: 'Building interactive quiz battles, real-time multiplayer functionality, leaderboards, and achievement system to make studying engaging and competitive.',
    date: 'February 20, 2025',
    status: 'in-progress' as const,
    progress: 65,
    tags: ['Gamification', 'Real-time', 'Multiplayer'],
    team: ['Jane Smith', 'Alex Johnson', 'Sarah Lee'],
    images: [
      'https://placehold.co/800x450/7c3aed/FFFFFF/png?text=Quiz+Battle+UI',
      'https://placehold.co/800x450/8b5cf6/FFFFFF/png?text=Leaderboard'
    ],
    links: [
      { label: 'WebSocket Documentation', url: 'https://socket.io/docs' },
      { label: 'Game Design Doc', url: 'https://docs.google.com/document/d/example' }
    ],
    subMilestones: [
      { 
        id: '3-1', 
        title: 'Design quiz battle UI/UX', 
        completed: true, 
        assignee: 'Sarah Lee',
        images: [
          'https://placehold.co/600x400/652497/FFFFFF/png?text=Battle+Mockup'
        ],
        notes: [
          'Created Figma mockups for quiz interface',
          'Designed real-time scoring animations',
          'Added timer and progress indicators'
        ]
      },
      { 
        id: '3-2', 
        title: 'Implement real-time WebSocket connections', 
        completed: true, 
        assignee: 'Alex Johnson',
        notes: [
          'Set up Socket.io server',
          'Implemented reconnection logic',
          'Added latency compensation'
        ]
      },
      { 
        id: '3-3', 
        title: 'Build matchmaking system', 
        completed: true, 
        assignee: 'Jane Smith',
        notes: [
          'Implemented skill-based matchmaking',
          'Added queue system for waiting players',
          'Created room management logic'
        ]
      },
      { 
        id: '3-4', 
        title: 'Create leaderboard system', 
        completed: false, 
        assignee: 'Jane Smith',
        images: [
          'https://placehold.co/600x400/7c3aed/FFFFFF/png?text=Leaderboard+Design'
        ],
        notes: [
          'Currently implementing global rankings',
          'Adding friend leaderboards next'
        ]
      },
      { 
        id: '3-5', 
        title: 'Add achievement badges and rewards', 
        completed: false, 
        assignee: 'Sarah Lee',
        notes: [
          'Designing badge artwork',
          'Planning unlock conditions'
        ]
      },
      { 
        id: '3-6', 
        title: 'Implement power-ups and special abilities', 
        completed: false 
      }
    ],
    notes: 'Real-time gameplay is working well with minimal latency. Currently optimizing server performance for 50+ concurrent players. Achievement system design is in final review.'
  },
  {
    id: '4',
    title: 'Social Features & Study Groups',
    description: 'Developing collaborative study rooms, friend system, chat functionality, and study group management for social learning experiences.',
    date: 'March 10, 2025',
    status: 'in-progress' as const,
    progress: 30,
    tags: ['Social', 'Collaboration', 'Chat'],
    team: ['Sarah Lee', 'John Doe'],
    images: [
      'https://placehold.co/800x450/8b5cf6/FFFFFF/png?text=Study+Groups'
    ],
    subMilestones: [
      { 
        id: '4-1', 
        title: 'Design friend system and profiles', 
        completed: true, 
        assignee: 'Sarah Lee',
        images: [
          'https://placehold.co/600x400/a78bfa/FFFFFF/png?text=Profile+Design'
        ],
        notes: [
          'Created user profile pages',
          'Added friend request system',
          'Designed activity feed'
        ]
      },
      { 
        id: '4-2', 
        title: 'Implement in-app messaging', 
        completed: true, 
        assignee: 'John Doe',
        notes: [
          'Built real-time chat with Socket.io',
          'Added message read receipts',
          'Implemented notification system'
        ]
      },
      { 
        id: '4-3', 
        title: 'Create study group creation and management', 
        completed: false, 
        assignee: 'Sarah Lee',
        notes: [
          'Working on group creation flow',
          'Designing admin controls'
        ]
      },
      { 
        id: '4-4', 
        title: 'Build shared flashcard collections', 
        completed: false 
      },
      { 
        id: '4-5', 
        title: 'Add voice/video call integration', 
        completed: false,
        notes: [
          'Evaluating Agora vs WebRTC'
        ]
      }
    ],
    notes: 'Friend system is live and working well. Exploring integration with Agora SDK for voice/video calls. Considering adding screen sharing for remote study sessions.'
  },
  {
    id: '5',
    title: 'Advanced Analytics Dashboard',
    description: 'Creating comprehensive analytics and insights dashboard with learning patterns, progress tracking, and personalized study recommendations.',
    date: 'March 25, 2025',
    status: 'planned' as const,
    progress: 0,
    tags: ['Analytics', 'ML', 'Insights'],
    team: ['Alex Johnson'],
    subMilestones: [
      { id: '5-1', title: 'Design analytics data model', completed: false, assignee: 'Alex Johnson' },
      { id: '5-2', title: 'Implement data collection and tracking', completed: false },
      { id: '5-3', title: 'Build visualization components', completed: false },
      { id: '5-4', title: 'Create ML model for study recommendations', completed: false },
      { id: '5-5', title: 'Add export and sharing features', completed: false }
    ],
    notes: 'Planning to use TensorFlow Lite for on-device ML predictions. Will include insights like optimal study times, subject difficulty analysis, and retention rates.'
  },
  {
    id: '6',
    title: 'Mobile App Polish & Beta Launch',
    description: 'Final UI/UX refinements, performance optimization, bug fixes, user testing, and preparing for beta launch on Play Store.',
    date: 'April 15, 2025',
    status: 'planned' as const,
    progress: 0,
    tags: ['Polish', 'Testing', 'Launch'],
    team: ['John Doe', 'Jane Smith', 'Alex Johnson', 'Sarah Lee'],
    subMilestones: [
      { id: '6-1', title: 'Conduct user testing sessions', completed: false },
      { id: '6-2', title: 'Fix critical bugs and issues', completed: false },
      { id: '6-3', title: 'Optimize app performance and loading times', completed: false },
      { id: '6-4', title: 'Create app store assets and descriptions', completed: false },
      { id: '6-5', title: 'Submit to Play Store for review', completed: false },
      { id: '6-6', title: 'Launch beta program with 100 users', completed: false }
    ],
    notes: 'Target beta launch date is April 20th. Planning marketing campaign and social media presence. Will gather feedback through in-app surveys and analytics.'
  }
];

export default function ProgressPage() {
  const completedMilestones = milestones.filter(m => m.status === 'completed').length;
  const totalMilestones = milestones.length;
  const overallProgress = Math.round((completedMilestones / totalMilestones) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-100 dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#652497]/5 via-[#7c3aed]/5 to-transparent dark:from-[#652497]/10 dark:via-[#7c3aed]/10" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-center space-y-6">
            <div className="inline-block hero-badge-animate">
              <span className="px-4 py-2 rounded-full bg-[#652497]/10 dark:bg-[#652497]/20 text-[#652497] dark:text-purple-300 text-sm font-semibold border border-[#652497]/20 dark:border-[#652497]/30 flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                Development Journey
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight hero-title-animate">
              <span className="bg-gradient-to-r from-[#652497] via-[#7c3aed] to-[#8b5cf6] bg-clip-text text-transparent">
                Project Progress
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed hero-description-animate">
              Track our development milestones, feature implementations, and the journey to building StudySage
            </p>
          </div>

          {/* Progress Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="stat-card p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#652497] to-[#7c3aed] flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {overallProgress}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Overall Progress
              </div>
            </div>

            <div className="stat-card p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#8b5cf6] flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {completedMilestones}/{totalMilestones}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Milestones Completed
              </div>
            </div>

            <div className="stat-card p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#a78bfa] flex items-center justify-center mx-auto mb-3">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {milestones.filter(m => m.status === 'in-progress').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                In Progress
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <Milestone key={milestone.id} milestone={milestone} index={index} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-5 text-center ">
        <div className="p-12 rounded-3xl bg-gradient-to-br from-[#652497] via-[#7c3aed] to-[#8b5cf6] text-white shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Want to contribute or follow along?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Check out our GitHub repository to stay updated with the latest developments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/manavbansal1/studysage"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-white text-[#652497] font-bold text-lg hover:bg-gray-100 button-smooth"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}