import Link from "next/link";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1NuXA4r8Iec
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Navbar() {
    return (
        <div>
          <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="./" className="flex items-center justify-center text-bold" prefetch={false}>
          <img className="w-10 h-10" src="https://t3.ftcdn.net/jpg/05/34/43/36/360_F_534433681_UDyJj5LvvGJMs0zCTaJCFnI1KOXf4HW9.jpg" alt="" />
          DombyraAI
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="upload" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Upload
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Songs
          </Link>
          <Link href="#" className="  text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Sign in
          </Link>
        </nav>
      </header>
      <hr />
        </div>
    )
  }
  