'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2, Circle, Calendar, Users, Tag, ExternalLink, Github, FileText, Image as ImageIcon, MessageSquare} from 'lucide-react';
import Image from 'next/image';

interface SubMilestone {
  id: string;
  title: string;
  completed: boolean;
  assignee?: string;
  notes?: string[];
  images?: string[];
}

interface MilestoneData {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'in-progress' | 'planned';
  progress: number;
  tags?: string[];
  team?: string[];
  links?: { label: string; url: string }[];
  images?: string[];
  subMilestones?: SubMilestone[];
  notes?: string;
}

interface MilestoneProps {
  milestone: MilestoneData;
  index: number;
}

interface SubMilestoneItemProps {
  subMilestone: SubMilestone;
  index: number;
}

// Sub-milestone component
function SubMilestoneItem({ subMilestone, index }: SubMilestoneItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasExpandableContent = (subMilestone.notes && subMilestone.notes.length > 0) || 
                                (subMilestone.images && subMilestone.images.length > 0);

  return (
    <div className="sub-milestone-wrapper">
      <div 
        className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-slate-700/50 hover:bg-gray-100 dark:hover:bg-slate-700 smooth-transition border border-transparent hover:border-[#652497]/20 dark:hover:border-[#652497]/30"
        style={{ animationDelay: `${index * 0.05}s` }}
      >
        <div className="flex-shrink-0 mt-0.5">
          {subMilestone.completed ? (
            <CheckCircle2 className="w-5 h-5 text-[#652497] dark:text-purple-400" />
          ) : (
            <Circle className="w-5 h-5 text-gray-400 dark:text-gray-500" />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <p className={`font-medium ${subMilestone.completed ? 'text-gray-500 dark:text-gray-400 line-through' : 'text-gray-700 dark:text-gray-300'}`}>
                {subMilestone.title}
              </p>
              {subMilestone.assignee && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1.5">
                  <Users className="w-3 h-3" />
                  {subMilestone.assignee}
                </p>
              )}
            </div>
            
            {hasExpandableContent && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="flex-shrink-0 p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-slate-600 smooth-transition cursor-pointer"
                aria-label={isExpanded ? 'Collapse' : 'Expand'}
                type="button"
              >
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                )}
              </button>
            )}
          </div>

          {/* Expanded Content */}
          {isExpanded && hasExpandableContent && (
            <div className="mt-4 space-y-4 animate-fade-in-up">
              {/* Sub-notes */}
              {subMilestone.notes && subMilestone.notes.length > 0 && (
                <div>
                  <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-[#652497] dark:text-purple-400" />
                    Comments
                  </h5>
                  <div className="space-y-2">
                    {subMilestone.notes.map((note, idx) => (
                      <div 
                        key={idx}
                        className="pl-3 py-2 border-l-2 border-[#652497]/30 dark:border-[#652497]/40 bg-white dark:bg-slate-800/50 rounded-r-lg pr-3"
                      >
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sub-images */}
              {subMilestone.images && subMilestone.images.length > 0 && (
                <div>
                  <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1.5">
                    <ImageIcon className="w-4 h-4 text-[#652497] dark:text-purple-400" />
                    Screenshots
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {subMilestone.images.map((image, idx) => (
                      <div 
                        key={idx}
                        className="relative aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-slate-600 hover:border-[#652497]/40 dark:hover:border-[#652497]/60 smooth-transition group"
                      >
                        <Image
                          src={image}
                          alt={`${subMilestone.title} - Screenshot ${idx + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 smooth-transition-slow"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Milestone({ milestone, index }: MilestoneProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'from-[#652497] to-[#7c3aed]';
      case 'in-progress':
        return 'from-[#7c3aed] to-[#8b5cf6]';
      case 'planned':
        return 'from-[#8b5cf6] to-[#a78bfa]';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-[#652497]/10 dark:bg-[#652497]/20 text-[#652497] dark:text-purple-300 border-[#652497]/20 dark:border-[#652497]/30';
      case 'in-progress':
        return 'bg-[#7c3aed]/10 dark:bg-[#7c3aed]/20 text-[#7c3aed] dark:text-purple-300 border-[#7c3aed]/20 dark:border-[#7c3aed]/30';
      case 'planned':
        return 'bg-[#a78bfa]/10 dark:bg-[#a78bfa]/20 text-[#8b5cf6] dark:text-purple-400 border-[#a78bfa]/20 dark:border-[#a78bfa]/30';
      default:
        return 'bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700';
    }
  };

  const completedSubMilestones = milestone.subMilestones?.filter(sub => sub.completed).length || 0;
  const totalSubMilestones = milestone.subMilestones?.length || 0;

  return (
    <div 
      className="milestone-card group relative bg-white dark:bg-slate-800/50 rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-[#652497]/40 dark:hover:border-[#652497]/60 card-smooth-hover shadow-smooth border-smooth gpu-accelerated overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-100 dark:bg-slate-700">
        <div 
          className={`h-full bg-gradient-to-r ${getStatusColor(milestone.status)} transition-all duration-500 ease-out`}
          style={{ width: `${milestone.progress}%` }}
        />
      </div>

      {/* Main Content */}
      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          {/* Status Icon */}
          <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${getStatusColor(milestone.status)} flex items-center justify-center shadow-lg icon-container`}>
            {milestone.status === 'completed' ? (
              <CheckCircle2 className="w-6 h-6 text-white" />
            ) : (
              <Circle className="w-6 h-6 text-white" />
            )}
          </div>

          {/* Title & Status */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {milestone.title}
              </h3>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusBadge(milestone.status)}`}>
                {milestone.status === 'in-progress' ? 'In Progress' : milestone.status.charAt(0).toUpperCase() + milestone.status.slice(1)}
              </span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>{milestone.date}</span>
              {milestone.progress > 0 && (
                <span className="ml-2 font-semibold text-[#652497] dark:text-purple-400">
                  {milestone.progress}% Complete
                </span>
              )}
            </div>
          </div>

          {/* Expand Button */}
          {(milestone.subMilestones || milestone.images || milestone.links || milestone.notes) && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="flex-shrink-0 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors smooth-transition cursor-pointer"
              aria-label={isExpanded ? 'Collapse' : 'Expand'}
              type="button"
            >
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          {milestone.description}
        </p>

        {/* Tags */}
        {milestone.tags && milestone.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {milestone.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#652497]/5 dark:bg-[#652497]/10 text-[#652497] dark:text-purple-400 text-sm font-medium border border-[#652497]/10 dark:border-[#652497]/20"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Team Members */}
        {milestone.team && milestone.team.length > 0 && (
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <div className="flex flex-wrap gap-2">
              {milestone.team.map((member, idx) => (
                <span 
                  key={idx}
                  className="px-2 py-1 rounded-md bg-gray-100 dark:bg-slate-700 text-sm text-gray-700 dark:text-gray-300"
                >
                  {member}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Sub-milestones Preview (when collapsed) */}
        {!isExpanded && milestone.subMilestones && milestone.subMilestones.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">
                {completedSubMilestones} of {totalSubMilestones} tasks completed
              </span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsExpanded(true);
                }}
                className="text-[#652497] dark:text-purple-400 font-medium flex items-center gap-1 hover:text-[#7c3aed] dark:hover:text-purple-300 hover:bg-[#ede9fe] dark:hover:bg-[#3b0764] transition-colors duration-200 ease-in-out rounded-md px-2 py-1 cursor-pointer"
                type="button"
                >
                Click to expand
              </button>
            </div>
          </div>
        )}

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-6 space-y-6 animate-fade-in-up">
            {/* Sub-milestones */}
            {milestone.subMilestones && milestone.subMilestones.length > 0 && (
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#652497] dark:text-purple-400" />
                  Tasks & Sub-milestones
                </h4>
                <div className="space-y-3">
                  {milestone.subMilestones.map((sub, idx) => (
                    <SubMilestoneItem key={sub.id} subMilestone={sub} index={idx} />
                  ))}
                </div>
              </div>
            )}

            {/* Images */}
            {milestone.images && milestone.images.length > 0 && (
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-[#652497] dark:text-purple-400" />
                  Screenshots & Images
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {milestone.images.map((image, idx) => (
                    <div 
                      key={idx}
                      className="relative aspect-video rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700 hover:border-[#652497]/40 dark:hover:border-[#652497]/60 transition-colors group"
                    >
                      <Image
                        src={image}
                        alt={`${milestone.title} - Image ${idx + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            {milestone.links && milestone.links.length > 0 && (
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-[#652497] dark:text-purple-400" />
                  Related Links
                </h4>
                <div className="space-y-2">
                  {milestone.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-[#652497]/40 dark:hover:border-[#652497]/60 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-all smooth-transition group"
                    >
                      {link.url.includes('github') ? (
                        <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      ) : (
                        <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      )}
                      <span className="flex-1 text-gray-700 dark:text-gray-300 font-medium">
                        {link.label}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#652497] dark:group-hover:text-purple-400 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Notes */}
            {milestone.notes && (
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#652497] dark:text-purple-400" />
                  Additional Notes
                </h4>
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-slate-700/50 border border-gray-200 dark:border-slate-700">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {milestone.notes}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}