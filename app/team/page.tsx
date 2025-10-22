export default function TeamPage() {
  const team = [
    { name: "Manav Bansal", role: "Frontend + Firebase Integration", work: "Next.js website, progress tracking, app demo setup" },
    { name: "Member 2", role: "Android Development", work: "Main app UI & user authentication" },
    { name: "Member 3", role: "AI & Flashcard Generator", work: "Note parsing, quiz creation, backend logic" },
    { name: "Member 4", role: "Game Module", work: "Real-time multiplayer study games" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6 gradient-text">Meet the Team</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {team.map((member) => (
          <div key={member.name} className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow">
            <h2 className="text-2xl font-semibold">{member.name}</h2>
            <p className="text-blue-500 dark:text-blue-400">{member.role}</p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{member.work}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
