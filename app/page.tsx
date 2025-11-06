import { 
  Sparkles, Bot, Gamepad2,  Users,  TrendingUp,Upload, Zap, Trophy, Github,Download, ArrowRight,ExternalLink} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-100 dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-900">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#652497]/10 via-[#7c3aed]/5 to-transparent dark:from-[#652497]/20 dark:via-[#7c3aed]/10" />
        
        {/* Animated Circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#652497]/10 dark:bg-[#652497]/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8b5cf6]/10 dark:bg-[#8b5cf6]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 hero-content">
              <div className="inline-block hero-badge-animate">
                <span className="px-4 py-2 rounded-full bg-[#652497]/10 dark:bg-[#652497]/20 text-[#652497] dark:text-purple-300 text-sm font-semibold border border-[#652497]/20 dark:border-[#652497]/30 flex items-center gap-2 w-fit">
                  <Sparkles className="w-4 h-4" />
                  AI-Powered Study Platform
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight hero-title-animate">
                Study <span className="bg-gradient-to-r from-[#652497] via-[#7c3aed] to-[#8b5cf6] bg-clip-text text-transparent">Smarter</span>,
                <br />
                Not Harder
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed hero-description-animate">
                Transform your notes into AI-generated flashcards, compete with friends in quiz battles, and make studying actually <span className="font-bold text-[#652497] dark:text-purple-400">fun</span>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 hero-cta-animate">
                <Link
                  href="/idea"
                  className="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#652497] to-[#7c3aed] text-white font-bold text-lg shadow-lg button-smooth shadow-smooth flex items-center justify-center gap-2"
                >
                  Discover Our Vision
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 smooth-transition" />
                </Link>
                
                <Link
                  href="/progress"
                  className="px-8 py-4 rounded-xl bg-white dark:bg-slate-800 text-[#652497] dark:text-purple-400 font-bold text-lg border-2 border-[#652497]/30 dark:border-[#652497]/50 hover:border-[#652497] dark:hover:border-[#652497] button-smooth flex items-center justify-center gap-2"
                >
                  View Progress
                </Link>
              </div>

              {/* Download Options */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4 hero-download-animate">
                <a
                  href="https://github.com/manavbansal1/studysage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3 rounded-lg bg-gray-900 dark:bg-slate-800 text-white font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 dark:hover:bg-slate-700 smooth-transition border border-gray-800 dark:border-slate-700"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                  <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 smooth-transition" />
                </a>
                
                <a
                  href="/assets/studysage.apk"
                  download="studysage.apk"
                  className="group px-6 py-3 rounded-lg bg-[#8b5cf6]/10 dark:bg-[#8b5cf6]/20 text-[#652497] dark:text-purple-300 font-semibold flex items-center justify-center gap-2 border border-[#8b5cf6]/30 dark:border-[#8b5cf6]/40 hover:bg-[#8b5cf6]/20 dark:hover:bg-[#8b5cf6]/30 smooth-transition"
                >
                  <Download className="w-5 h-5" />
                  Download APK
                  <span className="text-xs bg-[#652497] text-white px-2 py-0.5 rounded-full">Initial Version</span>
                </a>
              </div>
            </div>

            {/* Right Content - App Mockup */}
            <div className="relative hero-image-animate">
              <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                <Image
                  src='/assets/StudySage.png'
                  alt="StudySage App Interface"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#652497]/20 via-transparent to-[#8b5cf6]/20" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#652497] to-[#7c3aed] flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">AI Generated</div>
                    <div className="font-bold text-gray-900 dark:text-white">50+ Cards</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#8b5cf6] flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Quiz Score</div>
                    <div className="font-bold text-gray-900 dark:text-white">95%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-[#652497] to-[#8b5cf6] bg-clip-text text-transparent">
              Ace Your Exams
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Powerful features designed to supercharge your study sessions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Bot,
              title: 'AI Flashcards',
              description: 'Upload notes and get instant, intelligent flashcards generated by GPT-4',
              gradient: 'from-[#652497] to-[#7c3aed]'
            },
            {
              icon: Gamepad2,
              title: 'Quiz Battles',
              description: 'Challenge friends in real-time multiplayer quiz competitions',
              gradient: 'from-[#7c3aed] to-[#8b5cf6]'
            },
            {
              icon: Users,
              title: 'Study Groups',
              description: 'Collaborate with classmates in shared study rooms with live chat',
              gradient: 'from-[#8b5cf6] to-[#a78bfa]'
            },
            {
              icon: TrendingUp,
              title: 'Smart Analytics',
              description: 'Track your progress with detailed insights and personalized recommendations',
              gradient: 'from-[#a78bfa] to-[#c4b5fd]'
            }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="feature-card group p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 hover:border-[#652497]/40 dark:hover:border-[#652497]/60 card-smooth-hover shadow-smooth"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 icon-container`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            From Upload to{' '}
            <span className="bg-gradient-to-r from-[#652497] to-[#8b5cf6] bg-clip-text text-transparent">
              Mastery
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Three simple steps to transform your studying
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              icon: Upload,
              title: 'Upload Your Notes',
              description: 'Drop in lecture slides, PDFs, or typed notes. Our system handles the rest.',
              color: '#652497'
            },
            {
              step: '02',
              icon: Zap,
              title: 'AI Does the Magic',
              description: 'Advanced AI analyzes your content and generates smart flashcards instantly.',
              color: '#7c3aed'
            },
            {
              step: '03',
              icon: Trophy,
              title: 'Learn & Compete',
              description: 'Study with spaced repetition and challenge friends in quiz battles.',
              color: '#8b5cf6'
            }
          ].map((step, idx) => (
            <div key={idx} className="step-card relative">
              {/* Connector Line */}
              {idx < 2 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-[#652497]/30 to-transparent -z-10" />
              )}
              
              <div className="p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 hover:border-[#652497]/40 dark:hover:border-[#652497]/60 card-smooth-hover shadow-smooth">
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg icon-container"
                    style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)` }}
                  >
                    <step.icon className="w-8 h-8" />
                  </div>
                  <span 
                    className="text-6xl font-black opacity-10"
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

      {/* Team Preview */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#652497] via-[#7c3aed] to-[#8b5cf6] p-12 sm:p-16 text-white shadow-2xl">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Team Photo */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-white/20 shadow-xl">
              <Image
                src="/team/group.jpg"
                alt="StudySage Team"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                <span className="text-sm font-semibold">Built by Students, For Students</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold">
                Meet the Team Behind StudySage
              </h2>
              
              <p className="text-lg text-white/90 leading-relaxed">
                We're five passionate university students who turned our frustration with traditional studying into a revolutionary learning platform. Each bringing unique expertise in AI, design, and development.
              </p>

              <Link
                href="/team"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#652497] font-bold text-lg hover:bg-gray-100 button-smooth"
              >
                Meet the Team
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Ready to Transform Your{' '}
            <span className="bg-gradient-to-r from-[#652497] to-[#8b5cf6] bg-clip-text text-transparent">
              Study Game?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Follow our development journey and be the first to try StudySage when we launch
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/idea"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#652497] to-[#7c3aed] text-white font-bold text-lg shadow-lg button-smooth flex items-center gap-2"
            >
              Explore Our Vision
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}