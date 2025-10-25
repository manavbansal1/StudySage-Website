import { 
  Lightbulb,  AlertCircle,  FileText,  BookOpen,  Frown,  BarChart3,  Users,  Sparkles,  Bot,  Gamepad2,  UsersRound,  TrendingUp, Upload, Zap, Trophy, Target, Brain,Handshake,Smartphone,ArrowRight
} from 'lucide-react';
import '../../styles/Idea.css';

export default function IdeaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-100 dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#652497]/5 via-[#7c3aed]/5 to-transparent dark:from-[#652497]/10 dark:via-[#7c3aed]/10" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
          <div className="text-center space-y-6">
            <div className="inline-block hero-badge-animate">
              <span className="px-4 py-2 rounded-full bg-[#652497]/10 dark:bg-[#652497]/20 text-[#652497] dark:text-purple-300 text-sm font-semibold border border-[#652497]/20 dark:border-[#652497]/30 flex items-center gap-2 badge-pulse">
                <Lightbulb className="w-4 h-4" />
                The Big Idea
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight hero-title-animate">
              <span className="bg-gradient-to-r from-[#652497] via-[#7c3aed] to-[#8b5cf6] bg-clip-text text-transparent gradient-text-smooth">
                StudySage
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium hero-description-animate">
              Transforming how students learn with AI-powered study tools and gamified social learning
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
              <span className="text-red-700 dark:text-red-300 font-semibold text-sm">The Problem</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Studying is <span className="text-red-600 dark:text-red-400">broken</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Students spend countless hours organizing notes, creating study materials, and finding study partners — 
              often feeling overwhelmed and unprepared for exams.
            </p>
          </div>

          <div className="space-y-4 stagger-list">
            {[
              { Icon: FileText, text: "Creating flashcards manually is tedious and time-consuming" },
              { Icon: BookOpen, text: "Hard to extract key concepts from lengthy lecture slides" },
              { Icon: Frown, text: "Studying alone is boring and unmotivating" },
              { Icon: BarChart3, text: "No easy way to test knowledge or track progress" },
              { Icon: Users, text: "Finding study partners with similar material is difficult" }
            ].map((problem, idx) => (
              <div 
                key={idx}
                className="problem-card group flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 hover:border-[#652497]/30 dark:hover:border-[#652497]/50 card-smooth-hover shadow-smooth border-smooth gpu-accelerated"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center icon-container">
                  <problem.Icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed pt-2">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="relative py-20 my-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#652497]/10 via-[#7c3aed]/5 to-transparent dark:from-[#652497]/20 dark:via-[#7c3aed]/10" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              <Sparkles className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-green-700 dark:text-green-300 font-semibold text-sm">The Solution</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Meet your AI study companion
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              <strong className="text-[#652497] dark:text-purple-400">StudySage</strong> transforms your lecture notes 
              and slides into an interactive learning experience powered by AI and gamification.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                Icon: Bot,
                title: "AI-Powered",
                description: "Automatic flashcard generation from your notes and PDFs",
                gradient: "from-[#652497] to-[#7c3aed]"
              },
              {
                Icon: Gamepad2,
                title: "Gamified Learning",
                description: "Make studying fun with quiz battles and leaderboards",
                gradient: "from-[#7c3aed] to-[#8b5cf6]"
              },
              {
                Icon: UsersRound,
                title: "Social & Collaborative",
                description: "Study with peers in real-time multiplayer sessions",
                gradient: "from-[#8b5cf6] to-[#a78bfa]"
              },
              {
                Icon: TrendingUp,
                title: "Track Progress",
                description: "Monitor your learning journey with detailed analytics",
                gradient: "from-[#a78bfa] to-[#c4b5fd]"
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="feature-card group relative p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 hover:border-[#652497]/40 dark:hover:border-[#652497]/60 card-smooth-hover shadow-smooth border-smooth gpu-accelerated"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative space-y-3">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#652497]/10 to-[#8b5cf6]/10 dark:from-[#652497]/20 dark:to-[#8b5cf6]/20 flex items-center justify-center icon-container">
                    <feature.Icon className="w-7 h-7 text-[#652497] dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            How it <span className="bg-gradient-to-r from-[#652497] to-[#8b5cf6] bg-clip-text text-transparent">works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From upload to mastery in three simple steps
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Upload Your Materials",
              description: "Upload lecture slides, PDFs, or typed notes. Our AI instantly analyzes the content.",
              Icon: Upload,
              color: "#652497"
            },
            {
              step: "02",
              title: "AI Generates Study Tools",
              description: "Get auto-generated flashcards, summaries, and practice quizzes tailored to your content.",
              Icon: Zap,
              color: "#7c3aed"
            },
            {
              step: "03",
              title: "Study & Compete",
              description: "Master concepts through interactive games and compete with classmates on leaderboards.",
              Icon: Trophy,
              color: "#8b5cf6"
            }
          ].map((step, idx) => (
            <div key={idx} className="relative step-card">
              {/* Connector Line */}
              {idx < 2 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-[#652497]/30 to-transparent" />
              )}
              
              <div className="relative p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 hover:border-[#652497]/40 dark:hover:border-[#652497]/60 card-smooth-hover shadow-smooth border-smooth gpu-accelerated group">
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="flex items-center justify-center w-16 h-16 rounded-full text-white shadow-lg smooth-transition"
                    style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)` }}
                  >
                    <step.Icon className="w-8 h-8" />
                  </div>
                  <span 
                    className="text-6xl font-black opacity-10 group-hover:opacity-20 smooth-transition"
                    style={{ color: step.color }}
                  >
                    {step.step}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Value Proposition */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#652497] via-[#7c3aed] to-[#8b5cf6] p-12 sm:p-16 text-white shadow-2xl">
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
          
          <div className="relative space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
              Why StudySage?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                {
                  title: "From Passive to Active",
                  description: "Turn static notes into interactive tools automatically",
                  Icon: Target
                },
                {
                  title: "AI-Powered",
                  description: "Smart content extraction and question generation",
                  Icon: Brain
                },
                {
                  title: "Social Learning",
                  description: "Study with peers and compete in quiz battles",
                  Icon: Handshake
                },
                {
                  title: "All-in-One",
                  description: "Everything students need, in one app",
                  Icon: Smartphone
                }
              ].map((value, idx) => (
                <div 
                  key={idx}
                  className="value-card p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 smooth-hover gpu-accelerated"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 icon-container">
                    <value.Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-white/80 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Ready to revolutionize your study routine?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of students who are already studying smarter, not harder
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="/progress"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#652497] to-[#7c3aed] text-white font-bold text-lg shadow-lg button-smooth shadow-smooth flex items-center gap-2 gpu-accelerated"
            >
              View Our Progress
              <ArrowRight className="w-5 h-5 smooth-transition group-hover:translate-x-1" />
            </a>
            
            <a
              href="/about"
              className="px-8 py-4 rounded-xl bg-white dark:bg-slate-800 text-[#652497] dark:text-purple-400 font-bold text-lg border-2 border-[#652497]/30 dark:border-[#652497]/50 hover:border-[#652497] dark:hover:border-[#652497] button-smooth border-smooth gpu-accelerated"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}