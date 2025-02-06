import React from "react";
import { Bell, Moon, Search } from "lucide-react";

const BlogHeader = () => {
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
        <button className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700">
          <Moon className="text-gray-700 dark:text-white" size={20} />
        </button>

        {/* Profile */}
        <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
