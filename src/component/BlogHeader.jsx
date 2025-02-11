import React , {useState , useEffect} from "react";
import { Bell, Moon, Search } from "lucide-react";
import { MdWbSunny, MdNightlight } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const BlogHeader = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check the user's system preference or saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDarkMode)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md py-3 px-6 flex items-center justify-between">
      {/* Logo Section */}
      <div className="text-2xl font-bold text-gray-800 dark:text-white">
        MyBlog
      </div>

      {/* Search Box */}
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search posts..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none dark:bg-gray-800 dark:text-white"
        />
        <Search
          className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-400"
          size={20}
        />
      </div>

      {/* Icons & Profile */}
      <div className="flex items-center gap-4">
        {/* Notification Button */}
        <button className="relative p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700">
          <Bell className="text-gray-700 dark:text-white" size={20} />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Dark Mode Toggle */}
        <button
      onClick={toggleDarkMode}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full transition-colors duration-200"
    >
      {isDarkMode ? (
        <MdWbSunny className="text-yellow-500" size={20} />
      ) : (
        <MdNightlight className="text-blue-500/50 " size={20} />
      )}
    </button>

        {/* Profile */}
        <div className="w-10 h-10 rounded-full flex justify-center items-center bg-gray-300 dark:bg-gray-700 overflow-hidden">
         <FaUser size={24}  className="text-gray-500"/>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
