import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'
import { useTheme } from '../../contexts/ThemeContext'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { isSignedIn } = useUser()

  return (
    <nav className="bg-[#0f0035]/50 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            AUDIOMAX
          </Link>
          
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
            {isSignedIn && <UserButton afterSignOutUrl="/" />}
          </div>
        </div>
      </div>
    </nav>
  )
}