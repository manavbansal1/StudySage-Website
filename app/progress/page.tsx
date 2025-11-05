import { Rocket, TrendingUp, Calendar } from 'lucide-react';
import Milestone from '@/components/Milestone';
import '../../styles/Progress.css';

const milestones = [
  {
    id: '1',
    title: 'Project Setup & Foundation',
    description: 'Created the StudySage project repository and set up the initial codebase structure.',
    date: 'October 17, 2025',
    status: 'completed' as 'completed' | 'in-progress',
    progress: 100,
    tags: ['Setup', 'Kotlin', 'Android'],
    team: ['Manav Bansal'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/manavbansal1/studysage' }
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
        assignee: 'Ansh Tiwari',
        notes: [
          'Set up Kotlin environment',
        ]
      },
      { 
        id: '1-3', 
        title: 'Established naming conventions and directory structure for future development.', 
        completed: true, 
        assignee: 'Kabir Singh Sidhu',
        notes: [
          'Created folders for components, screens, services, and assets'
        ]
      },
      { 
        id: '1-4', 
        title: 'Build the basic home screen and navigation structure.', 
        completed: true,
        notes: [
          'Implemented Navigation for screen transitions'
        ]
      }
    ],
    notes: 'Initial setup went smoothly.'
  },
  {
    id: '2',
    title: 'Built the official StudySage website to showcase the app\'s concept, progress, and team contributions.',
    description: 'The site was built using Next.js and Tailwind CSS, featuring sections for the Home Page, Idea Overview, Progress Timeline, and Team Profiles.',
    date: 'Oct 17, 2025',
    status: 'in-progress' as const,
    progress: 80,
    tags: ['Next.js', 'Tailwind CSS', 'React', 'Vercel'],
    team: ['Manav Bansal', 'Yadhu Choudhary'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/manavbansal1/studysage-website' }
    ],
    subMilestones: [
      { 
        id: '2-1', 
        title: 'Initialized web repository', 
        completed: true,
        assignee: 'Manav Bansal',
        date: 'Oct 22, 2025'
      },
      { 
        id: '2-2', 
        title: 'Developed main pages: Home, Idea, Progress, and Team and Deployed the website on Vercel for public access', 
        completed: true, 
        assignee: 'Manav Bansal',
        date: 'Oct 24, 2025'
      },
      { 
        id: '2-3', 
        title: 'Removed the placeholders and added real content, images, and team member profiles', 
        completed: true, 
        assignee: 'Yadhu Choudhary',
        date: 'Oct 25, 2025'
      },
      { 
        id: '2-4', 
        title: 'Fixed some errors, improved responsiveness, and polished the UI/UX design', 
        completed: true, 
        assignee: 'Yadhu Choudhary',
        date: 'Nov 1, 2025'
      },
    ],
    notes: 'Designed feature-rich pages with animations and gradient styling. Integrated icons using Lucide React for visual enhancement.'
  },
  {
    id: '3',
    title: 'Implemented Home Screen, Navigation Structure & Sign-in Sign-out functionality using Firebase',
    description: 'Developed the home screen UI, set up navigation between screens, and integrated user authentication with sign-in and sign-out features.',
    date: 'Oct 18, 2025',
    status: 'completed' as const,
    progress: 100,
    tags: ['Core Features', 'Firebase', 'Authentication', 'UI/UX'],
    team: ['Akaaljot Singh Mathoda', 'Yadhu Choudhary'],
    images: [
      '/screenshots/C2_1.png',
      '/screenshots/C2.png'
    ],
    subMilestones: [
      { 
        id: '3-1', 
        title: 'Initialized Android project with Jetpack Compose', 
        completed: true, 
        assignee: 'TBD',
        notes: [
          'This commit established the UI skeleton and ensured Compose and navigation were correctly integrated.'
        ]
      },
      { 
        id: '3-2', 
        title: 'Designed a composable HomeScreen() showing key options: Upload Notes, Quiz, and Games.', 
        completed: true, 
        assignee: 'TBD',
        notes: [
          'Created buttons for Upload Notes, Quiz, and Games',
        ]
      },
      { 
        id: '3-3', 
        title: 'Integrate user authentication with sign-in and sign-out functionality', 
        completed: true, 
        assignee: 'TBD',
        notes: [
          'Set up Firebase Auth for user management',
          'Implemented sign-in and sign-out flows'
        ]
      },
    ],
    notes: 'Home screen UI is functional with navigation working smoothly. Authentication flows are integrated using Firebase Auth.'
  },
  {
    id: '4',
    title: 'Added App Icon & Began AI Notes Summary Integration',
    description: 'Added a custom launcher icon, and began initial development of the AI-powered Notes Summary feature using the Gemini API.',
    date: 'October 20, 2025',
    status: 'completed' as const,
    progress: 100,
    tags: ['Gemini API (planned)'],
    team: ['Manav Bansal', 'Akaaljot Singh Mathoda', 'Yadhu Choudhary', 'Kabir Singh Sidhu', 'Ansh Tiwari'],
    subMilestones: [
      { 
        id: '4-1', 
        title: 'Designed app icon', 
        completed: true, 
        assignee: 'Manav Bansal',
        notes: [
          'Replaced default launcher icon with the new StudySage app icon.'
        ]
      },
      { 
        id: '4-2', 
        title: 'Created base structure & placeholder functions for the AI notes summarization module.', 
        completed: true, 
        assignee: 'Ansh Tiwari',
        notes: [
          'AI summarization logic not fully implemented yet',
          'Set up API call structure for future integration with Gemini API'
        ]
      }
    ],
    notes: 'App icon added successfully. Initial groundwork for AI Notes Summary feature laid out, but full integration with Gemini API is pending.'
  },
  {
    id: '5',
    title: 'Implemented Profile Page & Integrated Cloudinary',
    description: 'Developed a fully functional Profile Page displaying user information, levels, XP, and streak data.',
    date: 'October 21, 2025',
    status: 'completed' as const,
    progress: 100,
    tags: ['Cloudinary API'],
    team: ['Manav Bansal', 'Akaaljot Singh Mathoda', 'Yadhu Choudhary', 'Kabir Singh Sidhu', 'Ansh Tiwari'],
    images: [
      '/screenshots/C4.png'
    ],
    subMilestones: [
      { 
        id: '5-1', 
        title: 'Created a visually rich and responsive Profile Screen using Jetpack Compose.', 
        completed: true, 
        assignee: 'Kabir Singh Sidhu',
        notes: [
          'Profile data successfully fetched and rendered dynamically.'
        ]
      },
      { 
        id: '5-2', 
        title: 'Displayed user data such as Name, Email, About Section, Level, XP, and Streak.', 
        completed: true, 
        assignee: 'Akaaljot Singh Mathoda',
        notes: [
          'Designed consistent purple gradient theme matching overall StudySage UI.'
        ]
      },
      { 
        id: '5-3', 
        title: 'Integrated Cloudinary API to support image uploads for user avatars.', 
        completed: true, 
        assignee: 'Ansh Tiwari',
        notes: [
          'Cloudinary integration enables real-time profile image updates.'
        ]
      }
    ],
    notes: 'Added edit option placeholder and tested Cloudinary uploads successfully; ensured consistent gradient theme and responsive design across devices.'
  },
  {
    id: '6',
    title: 'Added Notes Screen & Summarization Feature using Gemini API',
    description: 'Implemented new Notes Screen to fetch and display AI-generated summaries from the database. Currently supports only .txt files, PDF parsing still in progress.',
    date: 'October 22, 2025',
    status: 'completed' as const,
    progress: 100,
    tags: ['Gemini API (completed)', 'PDF Parsing (in progress)'],
    team: ['Manav Bansal', 'Akaaljot Singh Mathoda', 'Yadhu Choudhary', 'Kabir Singh Sidhu', 'Ansh Tiwari'],
    images: [
      '/screenshots/C5.png'
    ],
    subMilestones: [
      { id: '6-1', title: 'Built Notes Screen UI with data binding to NotesViewModel.', completed: true, assignee: 'Manav Bansal' },
      { id: '6-2', title: 'Integrated summarization logic for text files using Gemini API setup.', completed: true, assignee: 'Yadhu Choudhary' },
      { id: '6-3', title: 'Connected database to fetch stored notes and summaries.', completed: true, assignee: 'Kabir Singh Sidhu' },
      { id: '6-4', title: 'Identified and started debugging PDF parsing issue.', completed: true, assignee: 'Akaaljot Singh Mathoda' }
    ],
    notes: 'Currently functional for .txt uploads; PDF extraction under development to support wider note formats.'
  },
  {
    id: '7',
    title: 'Fixed PDF Parsing & Expanded File Support',
    description: 'Resolved the PDF parsing error, ensuring accurate extraction of text, tags, and summaries. Enhanced the Notes Screen to display note format indicators (PDF, TXT, DOC, DOCX).',
    date: 'October 23, 2025',
    status: 'in-progress' as const,
    progress: 75,
    tags: ['PDF Parsing (completed)', 'File I/O'],
    team: ['Manav Bansal', 'Akaaljot Singh Mathoda', 'Yadhu Choudhary', 'Kabir Singh Sidhu', 'Ansh Tiwari'],
    images: [
      '/screenshots/C6.png',
      '/screenshots/C6_1.png'
    ],
    subMilestones: [
      { id: '7-1', title: 'Fixed parsing logic for PDFs using improved text extraction pipeline.', completed: true, assignee: 'Manav Bansal' },
      { id: '7-2', title: 'Added compatibility for DOC, DOCX file uploads and summaries.', completed: true, assignee: 'Akaaljot Singh Mathoda' },
      { id: '7-3', title: 'Updated Notes UI to visually show file type labels for each entry.', completed: true,assignee: 'Ansh Tiwari' }
    ],
    notes: 'PDF, TXT and DOC summarization now fully functional; validated with diverse document samples for reliability and tag accuracy.'
  },
  {
    id: '8',
    title: 'Implemented Basic Group Chat Functionality',
    description: 'Introduced a Group Chat feature allowing users to create and manage study groups, view members, add new participants, and delete groups.',
    date: 'October 24, 2025',
    status: 'completed' as const,
    progress: 100,
    team: ['Manav Bansal', 'Akaaljot Singh Mathoda', 'Yadhu Choudhary', 'Kabir Singh Sidhu', 'Ansh Tiwari'],
    images: [
      '/screenshots/C8.png',
      '/screenshots/C8_1.png',
      '/screenshots/C8_2.png'
    ],
    subMilestones: [
      { id: '8-1', title: 'Implemented menu options: View Members, Add Member, and Delete Group.', completed: true, assignee: 'Manav Bansal' },
      { id: '8-2', title: 'Created dynamic group info header showing group name and member count.', completed: true, assignee: 'Akaaljot Singh Mathoda' },
      { id: '8-3', title: 'Prepared structure for future real-time chat updates and Firebase integration.', completed: true,assignee: 'Ansh Tiwari' }
    ],
    notes: 'Chat interface and group management options are functional; next step is enabling real-time message exchange using Firebase Realtime Database.'
  },
  {
    id: '9',
    title: 'Implemented Courses Page with Add & Filter Features',
    description: 'Developed the Courses Page that allows users to view, add, and filter their enrolled courses.',
    date: 'October 25, 2025',
    status: 'completed' as const,
    progress: 100,
    team: ['Manav Bansal', 'Akaaljot Singh Mathoda', 'Yadhu Choudhary', 'Kabir Singh Sidhu', 'Ansh Tiwari'],
    images: [
      '/screenshots/C9.png'
    ],
    subMilestones: [
      { id: '9-1', title: 'Built Courses Screen UI with course cards showing course code, instructor, and credits.', completed: true, assignee: 'Manav Bansal' },
      { id: '9-2', title: 'Implemented Add Course Dialog to input course name, code, instructor, and credit hours.', completed: true, assignee: 'Akaaljot Singh Mathoda' },
      { id: '9-3', title: 'Added Semester and Year dropdown filters for easy course organization.', completed: true,assignee: 'Ansh Tiwari' }
    ],
    notes: 'Course filtering works seamlessly across multiple semesters and years.'
  },
  {
    id: '10',
    title: 'Revamped Theme & Enhanced Home, Groups, and Profile Screens',
    description: 'Introduced a new dark purple theme across the app for a modern, cohesive look. Enhanced the Home, Groups, and Profile pages with improved layouts and new functionality, focusing on user engagement and navigation flow.',
    date: 'October 25, 2025',
    status: 'completed' as const,
    progress: 100,
    team: ['Manav Bansal', 'Akaaljot Singh Mathoda', 'Yadhu Choudhary', 'Kabir Singh Sidhu', 'Ansh Tiwari'],
    images: [
      '/screenshots/C10.png',
      '/screenshots/C10_1.png',
      '/screenshots/C10_2.png'
    ],
    subMilestones: [
      { id: '10-1', title: 'Applied a unified dark gradient theme throughout the app for consistency.', completed: true, assignee: 'Manav Bansal' },
      { id: '10-2', title: 'Added Quick Actions on the Home Page: Flashcards, Take Quiz, Study Groups, and Games.', completed: true, assignee: 'Akaaljot Singh Mathoda' },
      { id: '10-3', title: 'Updated Profile Page with editable sections, profile customization options, and improved stats display.', completed: true,assignee: 'Ansh Tiwari' },
      { id: '10-4', title: 'Enhanced Groups Page UI with real-time status indicators and streamlined navigation for creating and managing groups.', completed: true,assignee: 'Ansh Tiwari' },
      { id: '10-5', title: 'Optimized component spacing, iconography, and color contrast for better readability.', completed: true,assignee: 'Ansh Tiwari' }
    ],
    notes: 'New theme improves overall UI harmony and accessibility. Quick Actions increase usability by giving instant access to core app features.'
  },
  {
    id: '11',
    title: 'Enhanced Home UI with Theme Support & Navbar Redesign',
    description: 'Updated the Home Page UI for improved light and dark mode compatibility and refined layout consistency.',
    date: 'October 26, 2025',
    status: 'completed' as const,
    progress: 100,
    team: ['Manav Bansal', 'Akaaljot Singh Mathoda', 'Yadhu Choudhary', 'Kabir Singh Sidhu', 'Ansh Tiwari'],
    images: [
      '/screenshots/C11.png',
      '/screenshots/C11_1.png'
    ],
    subMilestones: [
      { id: '11-1', title: 'Added full light and dark mode support for the Home screen and its components', completed: true, assignee: 'Manav Bansal',},
      { id: '11-2', title: 'Implemented glass-like navbar for smoother transitions.', completed: true, assignee: 'Akaaljot Singh Mathoda' },
      { id: '11-3', title: 'Added success overlay for course addition confirmation.', completed: true,assignee: 'Ansh Tiwari' }
    ],
    notes: 'UI is now fully adaptive across themes and orientations. The glass-effect navbar provides a premium look, improving overall user interaction fluidity.'
  },
  {
    id: '12',
    title: 'Added Games Page & Password Management Option',
    description: 'Introduced a new Games Page placeholder for future interactive learning modules. Updated the Profile Page with layout refinements and added a Change Password option to improve account management and security.',
    date: 'October 28, 2025',
    status: 'completed' as const,
    progress: 100,
    team: ['Manav Bansal', 'Akaaljot Singh Mathoda', 'Yadhu Choudhary', 'Kabir Singh Sidhu', 'Ansh Tiwari'],
    images: [
      '/screenshots/C12.png',
      '/screenshots/C12_1.png'
    ],
    subMilestones: [
      { 
        id: '12-1', 
        title: 'Added an empty Games Screen linked to the bottom navigation bar.', 
        completed: true, 
        assignee: 'Manav Bansal',
        notes: [
          'Implemented bottom navigation with Home, Courses, Groups, and Games tabs',
          'Purple gradient theme applied consistently across navigation elements'
        ]
      },
      { 
        id: '12-2', 
        title: 'Implemented Change Password option under the Settings section.', 
        completed: true, 
        assignee: 'Akaaljot Singh Mathoda',
        notes: [
          'Added profile customization with avatar display',
          'Integrated Settings section with Change Password and Privacy options'
        ]
      },
      { 
        id: '12-3', 
        title: 'Minor UI polishing and alignment fixes for consistency across pages.', 
        completed: true,
        assignee: 'Ansh Tiwari',
        notes: [
          'Enhanced Stats section showing XP, Day Streak, and Groups metrics',
          'Improved icon consistency and spacing throughout the profile page'
        ]
      }
    ],
    notes: 'Game screen structure prepared for future mini-games. Password update flow integrated with Firebase Auth to allow secure account modifications. The new navigation bar provides seamless access to all major app sections with a polished purple theme that matches our brand identity.'
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