export default function IssueFormSkeleton() {
  return (
    <div className="animate-pulse">
      <form>
        {/* Title field */}
        <div className="mb-4">
          <div className="h-4 w-16 bg-gray-300 dark:bg-gray-600 rounded mb-2" />
          <div className="h-10 w-full bg-gray-300 dark:bg-gray-600 rounded" />
        </div>

        {/* Description field */}
        <div className="mb-4">
          <div className="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded mb-2" />
          <div className="h-24 w-full bg-gray-300 dark:bg-gray-600 rounded" />
        </div>

        {/* Status + Priority */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <div className="h-4 w-20 bg-gray-300 dark:bg-gray-600 rounded mb-2" />
            <div className="h-10 w-full bg-gray-300 dark:bg-gray-600 rounded" />
          </div>

          <div className="mb-4">
            <div className="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded mb-2" />
            <div className="h-10 w-full bg-gray-300 dark:bg-gray-600 rounded" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2 mt-6">
          <div className="h-9 w-20 bg-gray-300 dark:bg-gray-600 rounded" />
          <div className="h-9 w-32 bg-gray-300 dark:bg-gray-600 rounded" />
        </div>
      </form>
    </div>
  )
}
