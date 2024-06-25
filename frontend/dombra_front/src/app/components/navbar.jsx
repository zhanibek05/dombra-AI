import Link from "next/link";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1NuXA4r8Iec
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Navbar() {
    return (
        <header className="flex items-center justify-between w-full p-4 border-b">
          <div className="text-orange-500 font-bold">DombraAI</div>
          <nav className="flex items-center space-x-4">
            <Link href="upload" className="text-green-600">
              Upload music
            </Link>
            <a href="#" className="text-green-600">
              My songs
            </a>
            <a href="#" className="flex items-center space-x-2">
              <span className="text-green-600">User</span>
              <div className="w-6 h-6 bg-gray-300 rounded-full" />
            </a>
          </nav>
        </header>
    )
  }
  