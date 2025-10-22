export default function ProgressPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6 gradient-text">Project Progress</h1>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Follow our development journey — updated regularly with milestones and progress reports.
      </p>

      <div className="space-y-6">
        <article className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Milestone 1: App Structure Setup</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Created Android project, initialized Firebase backend, and set up authentication.
          </p>
        </article>

        <article className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Milestone 2: Flashcard Generator</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Integrated AI note parser — automatically converts uploaded PDFs into flashcards.
          </p>
        </article>
      </div>
    </div>
  );
}
