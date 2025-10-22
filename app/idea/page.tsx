export default function IdeaPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6 gradient-text">The Idea: StudySage</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Students spend hours organizing notes, creating study materials, and finding study partners,
        often feeling overwhelmed and unprepared for exams. Traditional studying is isolated,
        passive, and time-consuming — we aim to change that.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">The Problem</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
        <li>Creating flashcards manually is tedious and time-consuming</li>
        <li>Hard to extract key concepts from lengthy lecture slides</li>
        <li>Studying alone is boring and unmotivating</li>
        <li>No easy way to test knowledge or track progress</li>
        <li>Finding study partners with similar material is difficult</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-3">The Solution</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        <strong>StudySage</strong> transforms your lecture notes and slides into an interactive learning experience.
        Upload your materials, and our AI automatically generates flashcards, summaries, and quizzes.
        Then compete with classmates in real-time multiplayer study games to make learning engaging and social.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Core Value Proposition</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
        <li><strong>From Passive to Active:</strong> Turn static notes into interactive tools automatically.</li>
        <li><strong>AI-Powered:</strong> Smart content extraction and question generation.</li>
        <li><strong>Social Learning:</strong> Study with peers and compete in quiz battles.</li>
        <li><strong>All-in-One:</strong> Everything students need, in one app.</li>
      </ul>
    </div>
  );
}
