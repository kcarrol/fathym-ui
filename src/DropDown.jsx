import { useState } from "react";

export default function DropDown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  }

  const onClickOutsideListener = () => {
    isDropdownOpen ? 
    toggleDropdown() : null
    document.removeEventListener("click", onClickOutsideListener)
  }

  const menuItems = [
    {
      title: "View Profile",
      link: "#",
    },
    {
      title: "Settings",
      link: "#",
    },
    {
      title: "Logout",
      link: "#",
    },
  ];

  return (
    <div className="flex h-12 justify-center">
      <div className="relative inline-block" onMouseLeave={() => {
            document.addEventListener("click", onClickOutsideListener)
          }}>
        <button 
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
          aria-controls="dropdown-panel"
          type="button"
          className="inline-flex gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            Settings
        <div className={isDropdownOpen ? "group group-open" : "group"} open={isDropdownOpen}>
          <div className="h-5 w-5 text-gray-400 group-open:text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        </button>

        {isDropdownOpen && (
          <div
            id="dropdown-panel"
            className="absolute left-0 z-10 mt-2 w-60 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white text-left text-sm shadow-lg"
          >
            <div className="py-3 px-4">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center ring ring-white"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">Steven Jobs</div>
                  <div className="text-gray-400">jobs@sailboatui.com</div>
                </div>
              </div>
            </div>
            
            <div className="p-1">
            {menuItems.map((item, index) => (
              <a href={item.link} className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                {item.title}
              </a>
              ))}
            </div>

          </div>
        )}
      </div>
    </div>
  );
} 
