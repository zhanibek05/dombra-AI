/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1NuXA4r8Iec
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Main() {
    return (
      <div className="flex flex-col items-center justify-between min-h-screen p-4">
        <main className="flex flex-col items-center justify-center flex-grow">
          <h1 className="mb-8 text-2xl font-bold text-center">Any songs to easy dombra taps</h1>
          <button className="relative flex items-center justify-center w-64 h-64 border-4 border-gray-400 rounded-full hover:scale-110 transition-transform duration-300">
            <div className="absolute flex items-center justify-center w-48 h-48 border-4 border-gray-400 rounded-full animate-pulse">
              <PlayIcon className="w-16 h-16 text-red-500" />
            </div>
          </button>
          <p className="mt-4 text-red-500 animate-bounce">Record</p>
          <div className="mt-8 flex items-center space-x-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
              <PlayIcon className="w-6 h-6" />
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
              <PauseIcon className="w-6 h-6" />
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
              <CircleStopIcon className="w-6 h-6" />
            </button>
          </div>
        </main>
      </div>
    )
  }
  
  function CircleStopIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <rect width="6" height="6" x="9" y="9" />
      </svg>
    )
  }
  
  
  function PauseIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="14" y="4" width="4" height="16" rx="1" />
        <rect x="6" y="4" width="4" height="16" rx="1" />
      </svg>
    )
  }
  
  
  function PlayIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="6 3 20 12 6 21 6 3" />
      </svg>
    )
  }