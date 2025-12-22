export default function IssueSkeleton() {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 animate-pulse">
      {/* Header */}
      <div className="mb-8">
        {/* Back link */}
        <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded mb-4" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Title */}
          <div className="h-9 w-2/3 bg-gray-300 dark:bg-gray-600 rounded" />

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <div className="h-9 w-20 bg-gray-300 dark:bg-gray-600 rounded" />
            <div className="h-9 w-24 bg-gray-300 dark:bg-gray-600 rounded" />
          </div>
        </div>
      </div>

      {/* Main issue card */}
      <div className="bg-white dark:bg-dark-elevated border border-gray-200 dark:border-dark-border-default rounded-lg shadow-sm p-6 mb-8">
        {/* Badges + timestamps */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="h-6 w-20 bg-gray-300 dark:bg-gray-600 rounded-full" />
          <div className="h-6 w-20 bg-gray-300 dark:bg-gray-600 rounded-full" />
          <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded" />
          <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded" />
        </div>

        {/* Description */}
        <div className="space-y-3">
          <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded" />
          <div className="h-4 w-11/12 bg-gray-300 dark:bg-gray-600 rounded" />
          <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-600 rounded" />
        </div>
      </div>

      {/* Details card */}
      <div className="bg-white dark:bg-dark-elevated border border-gray-200 dark:border-dark-border-default rounded-lg shadow-sm p-6">
        {/* Section title */}
        <div className="h-5 w-24 bg-gray-300 dark:bg-gray-600 rounded mb-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index}>
              <div className="h-3 w-24 bg-gray-300 dark:bg-gray-600 rounded mb-2" />
              <div className="h-4 w-40 bg-gray-300 dark:bg-gray-600 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
