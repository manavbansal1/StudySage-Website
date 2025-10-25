'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

interface TeamMemberData {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  responsibilities: string[];
  skills?: string[];
  social?: {
    github?: string;
    linkedin?: string;
    email?: string;
    portfolio?: string;
  };
}

interface TeamMemberProps {
  member: TeamMemberData;
  index: number;
}

export default function TeamMember({ member, index }: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="team-member-card group relative bg-white dark:bg-slate-800/50 rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-[#652497]/40 dark:hover:border-[#652497]/60 overflow-hidden card-smooth-hover shadow-smooth border-smooth gpu-accelerated"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#652497] via-[#7c3aed] to-[#8b5cf6]" />

      <div className="p-6 sm:p-8">
        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
          {/* Profile Picture */}
          <div className="relative flex-shrink-0">
            <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-4 border-gray-100 dark:border-slate-700 group-hover:border-[#652497]/30 dark:group-hover:border-[#652497]/50 transition-all duration-500">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#652497]/20 to-[#8b5cf6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>

          {/* Name and Role */}
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {member.name}
            </h3>
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#652497]/10 dark:bg-[#652497]/20 border border-[#652497]/20 dark:border-[#652497]/30 mb-3">
              <span className="text-sm font-semibold text-[#652497] dark:text-purple-300">
                {member.role}
              </span>
            </div>
            
            {/* Social Links */}
            {member.social && (
              <div className="flex items-center justify-center sm:justify-start gap-3 mt-3">
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-[#652497] dark:hover:bg-[#652497] text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300 group/icon"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-[#652497] dark:hover:bg-[#652497] text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300 group/icon"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.social.portfolio && (
                  <a
                    href={member.social.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-[#652497] dark:hover:bg-[#652497] text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300 group/icon"
                    aria-label="Portfolio"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {member.social.email && (
                  <a
                    href={`mailto:${member.social.email}`}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-[#652497] dark:hover:bg-[#652497] text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300 group/icon"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          {member.description}
        </p>

        {/* Responsibilities */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
            Key Contributions
          </h4>
          <div className="space-y-2">
            {member.responsibilities.map((responsibility, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
              >
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#652497] dark:bg-purple-400 mt-1.5" />
                <span className="leading-relaxed">{responsibility}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        {member.skills && member.skills.length > 0 && (
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
              Skills & Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {member.skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-slate-700 text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-slate-600 hover:border-[#652497]/30 dark:hover:border-[#652497]/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Hover Effect Border */}
      <div className={`absolute inset-0 rounded-2xl border-2 border-[#652497]/0 group-hover:border-[#652497]/20 dark:group-hover:border-[#652497]/30 pointer-events-none transition-all duration-500`} />
    </div>
  );
}