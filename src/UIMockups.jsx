import TextBoxInput from "./TextBoxInput";
import ButtonDynamic from "./ButtonDynamic";

export default function UIMockups() {

  return (
    <>
      <div className="mx-auto max-w-xl">
        <form action="" className="space-y-5">
          <div className="grid grid-cols-12 gap-4 justify-items-start rounded-md p-3 bg-blue-600 bg-opacity-10 border border-blue-500 border-opacity-40">
            <div className="col-span-8">
              <h2 className="text-lg font-bold inline-flex">Foo Bar Project</h2>
              <button type="button" className="inline-flex items-center gap-1.5 rounded-sm text-green-500 bg-transparent px-2.5 py-1 text-center text-xs font-medium transition-all hover:text-green-700  disabled:cursor-not-allowed disabled:text-green-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                  <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                </svg>
              </button>
              <p className="text-md font-light">foobar.lowcodeunit.com</p>
            </div>
            <div className="col-span-4 justify-self-end">
              <ButtonDynamic color="blue" textcolor="white" fontweight="medium" shadow="sm" size="xs">
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                </svg>
              </ButtonDynamic>
            </div>
            <div className="col-span-8">

            </div>
            <div className="col-span-4 justify-self-end">

            </div>
            <div className="col-span-12 w-full">
              <TextBoxInput title="Description:" value="description" placeholder="Enter a Description..." error="" />
            </div>
            <div className="col-span-6 w-full">
              <p className="text-sm font-bold">Route:</p>
              <input type="text" className="block w-full rounded-sm border-gray-300 text-xs dark:bg-slate-900 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="/ [root]" />
            </div>
            <div className="col-span-6 w-full">
              <p className="text-sm font-bold">Default File:</p>
              <input type="text" className="block w-full rounded-sm border-gray-300 text-xs dark:bg-slate-900 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="index.html" />
            </div>
            <div className="col-span-6">
              <label for="type" className="mb-1 block text-sm font-bold text-gray-700 dark:text-white after:text-red-500 after:font-normal after:content-['*']">Type:</label>
              <div className="relative">
                <div className="text-gray-500 pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.362 1.093a.75.75 0 00-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925zM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0018 14.25V6.443zm-8.75 12.25v-8.25l-7.25-4v7.807a.75.75 0 00.388.657l6.862 3.786z" clipRule="evenodd" />
                  </svg>
                </div>
                <select id="type" className="text-gray-500 dark:text-white dark:bg-slate-900 block w-full rounded-sm text-xs border-gray-300 pl-10 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50">
                  <option value="">View Package</option>
                  <option value="">API</option>
                  <option value="">Redirect</option>
                  <option value="">OAuth</option>
                </select>
              </div>
            </div>
            <div className="col-span-6 text-xs font-light justify-self-end">
              Accordion Help Section? CLI and AI links?
            </div>
            <div className="col-span-6 text-xs font-light justify-self-end">
              <p className="text-xs font-light">Note: Changing the Project Type will cause changes to the functionality of the project and cannot be undone.</p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 justify-items-start rounded-md p-3 mt-3 bg-blue-600 bg-opacity-10 border border-blue-500 border-opacity-40">
            <div className="col-span-8">
              <h2 className="text-md font-bold">Deployment</h2>
              <p className="text-sm font-light">Manage the deployed version of the project:</p>
            </div>
            <div className="col-span-4 justify-self-end">
              <button type="button" className="inline-flex items-center gap-1.5 rounded-sm border border-green-600 bg-green-600 px-3 py-1.5 text-center text-xs font-medium text-white shadow-sm transition-all hover:border-green-800 hover:bg-green-800 focus:ring focus:ring-green-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M10.75 6h-2v4.25a.75.75 0 01-1.5 0V6h1.5V3.704l.943 1.048a.75.75 0 001.114-1.004l-2.25-2.5a.75.75 0 00-1.114 0l-2.25 2.5a.75.75 0 001.114 1.004l.943-1.048V6h-2A2.25 2.25 0 003 8.25v4.5A2.25 2.25 0 005.25 15h5.5A2.25 2.25 0 0013 12.75v-4.5A2.25 2.25 0 0010.75 6zM7 16.75v-.25h3.75a3.75 3.75 0 003.75-3.75V10h.25A2.25 2.25 0 0117 12.25v4.5A2.25 2.25 0 0114.75 19h-5.5A2.25 2.25 0 017 16.75z" clipRule="evenodd" />
                </svg>
                Update: Latest
              </button>
              <div>
                <div className="relative z-0 flex mt-2">
                  <input type="text" id="version" className="block w-full rounded-sm rounded-r-none border-gray-300 text-sm shadow-sm focus:z-10 dark:bg-slate-950 focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="latest" />
                  <button for="version" className="flex items-center space-x-1 rounded-sm rounded-l-none border border-l-0 border-green-600 bg-green-600 px-3 py-1.5 text-center text-xs font-medium text-white shadow-sm transition-all hover:border-green-800 hover:bg-green-800 focus:ring focus:ring-green-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300">
                    Update
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-8">
              <p className="text-sm font-bold">Current Build:</p>
              <p className="text-sm font-light">24</p>
            </div>
            <div className="col-span-4 justify-self-end">
            </div>
            <div className="col-span-8">
              <p className="text-sm font-bold">Current Branch:</p>
              <p className="text-sm font-light">integration</p>
            </div>
            <div className="col-span-4 justify-self-end">
              <button type="button" className="inline-flex items-center gap-1.5 rounded-sm border border-green-500 bg-transparent px-2 py-1 text-center text-xs font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                  <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                </svg>
              </button>
            </div>
            <div className="col-span-8">
              <p className="text-sm font-bold">Source Control:</p>
              <p className="text-sm font-light">github://user/repo</p>
            </div>
            <div className="col-span-4 justify-self-end">
              <button type="button" className="inline-flex items-center gap-1.5 rounded-sm border border-green-500 bg-transparent px-2 py-1 text-center text-xs font-medium text-gray-700 dark:text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                  <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                </svg>
              </button>
            </div>
            <div className="col-span-8">
              <p className="text-sm font-bold">Build Path:</p>
              <p className="text-sm font-light">lcu-github-artifacts-release.yml</p>
            </div>
            <div className="col-span-4 justify-self-end">
              <button type="button" className="inline-flex items-center gap-1.5 rounded-sm text-green-500 bg-transparent px-2 py-1 text-center text-xs font-medium transition-all hover:text-green-700  disabled:cursor-not-allowed disabled:text-green-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                  <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 justify-items-start rounded-md p-3 mt-3 bg-blue-600 bg-opacity-10 border border-blue-500 border-opacity-40">
            <div className="col-span-8">
              <h2 className="text-md font-bold">Collaborate</h2>
              <p className="text-sm font-light">Add additional team members to this project:</p>
            </div>
            <div className="col-span-4 justify-self-end">
              <button type="button" className="inline-flex items-center gap-1.5 rounded-sm border border-green-600 bg-green-600 px-3 py-1.5 text-center text-xs font-medium text-white shadow-sm transition-all hover:border-green-800 hover:bg-green-800 focus:ring focus:ring-green-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M11 5a3 3 0 11-6 0 3 3 0 016 0zM2.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 018 18a9.953 9.953 0 01-5.385-1.572zM16.25 5.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z" />
                </svg>
                Invite
              </button>
            </div>
            <div className="col-span-8">
              <p className="text-sm font-bold">Team Members:</p>
            </div>
            <div className="col-span-4 justify-self-end">
            </div>
            <div className="col-span-8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
              </svg> Matthew Smith Editor
            </div>
            <div className="col-span-4 justify-self-end">
              <button type="button" className="inline-flex items-center gap-1.5 rounded-sm border border-red-500 bg-transparent px-2 py-1 text-center text-xs font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200 disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M11 5a3 3 0 11-6 0 3 3 0 016 0zM2.046 15.253c-.058.468.172.92.57 1.175A9.953 9.953 0 008 18c1.982 0 3.83-.578 5.384-1.573.398-.254.628-.707.57-1.175a6.001 6.001 0 00-11.908 0zM12.75 7.75a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5z" />
                </svg>
              </button>
            </div>
            <div className="col-span-8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
              </svg> Guerrilla Gorilla Observer
            </div>
            <div className="col-span-4 justify-self-end">
              <button type="button" className="inline-flex items-center gap-1.5 rounded-sm border border-red-500 bg-transparent px-2 py-1 text-center text-xs font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200 disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M11 5a3 3 0 11-6 0 3 3 0 016 0zM2.046 15.253c-.058.468.172.92.57 1.175A9.953 9.953 0 008 18c1.982 0 3.83-.578 5.384-1.573.398-.254.628-.707.57-1.175a6.001 6.001 0 00-11.908 0zM12.75 7.75a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 justify-items-start rounded-md p-3 mt-3 bg-blue-600 bg-opacity-10 border border-blue-500 border-opacity-40">
            <div className="col-span-8">
              <h2 className="text-md font-bold">State Config</h2>
              <p className="text-sm font-light">Manage the state config JSON:</p>
            </div>
            <div className="col-span-4 justify-self-end">
              <button type="button" className="inline-flex items-center gap-1.5 rounded-sm border border-green-600 bg-green-600 px-3 py-1.5 text-center text-xs font-medium text-white shadow-sm transition-all hover:border-green-800 hover:bg-green-800 focus:ring focus:ring-green-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M10 1c3.866 0 7 1.79 7 4s-3.134 4-7 4-7-1.79-7-4 3.134-4 7-4zm5.694 8.13c.464-.264.91-.583 1.306-.952V10c0 2.21-3.134 4-7 4s-7-1.79-7-4V8.178c.396.37.842.688 1.306.953C5.838 10.006 7.854 10.5 10 10.5s4.162-.494 5.694-1.37zM3 13.179V15c0 2.21 3.134 4 7 4s7-1.79 7-4v-1.822c-.396.37-.842.688-1.306.953-1.532.875-3.548 1.369-5.694 1.369s-4.162-.494-5.694-1.37A7.009 7.009 0 013 13.179z" clipRule="evenodd" />
                </svg>
                State Config
              </button>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 justify-items-start rounded-md p-3 mt-3 bg-blue-600 bg-opacity-10 border border-blue-500 border-opacity-40">
            <div className="col-span-8">
              <h2 className="text-md font-bold">Mods</h2>
              <p className="text-sm font-light">Manage the Modifiers for this Project:</p>
            </div>
            <div className="col-span-4 justify-self-end">
              <button type="button" className="inline-flex items-center gap-1.5 rounded-sm border border-green-600 bg-green-600 px-3 py-1.5 text-center text-xs font-medium text-white shadow-sm transition-all hover:border-green-800 hover:bg-green-800 focus:ring focus:ring-green-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
                Manage Mods
              </button>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 justify-items-start rounded-md p-3 mt-3 bg-blue-600 bg-opacity-10 border border-blue-500 border-opacity-40">
            <div className="col-span-8">
              <h2 className="text-md font-bold">Custom Domain</h2>
              <p className="text-sm font-light">Give your project a custom URL:</p>
              <p className="text-sm font-light">foobar.fathym.app</p>
            </div>
            <div className="col-span-4 justify-self-end">
              <button type="button" className="inline-flex items-center gap-1.5 rounded-sm border border-green-600 bg-green-600 px-3 py-1.5 text-center text-xs font-medium text-white shadow-sm transition-all hover:border-green-800 hover:bg-green-800 focus:ring focus:ring-green-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-11-4.69v.447a3.5 3.5 0 001.025 2.475L8.293 10 8 10.293a1 1 0 000 1.414l1.06 1.06a1.5 1.5 0 01.44 1.061v.363a1 1 0 00.553.894l.276.139a1 1 0 001.342-.448l1.454-2.908a1.5 1.5 0 00-.281-1.731l-.772-.772a1 1 0 00-1.023-.242l-.384.128a.5.5 0 01-.606-.25l-.296-.592a.481.481 0 01.646-.646l.262.131a1 1 0 00.447.106h.188a1 1 0 00.949-1.316l-.068-.204a.5.5 0 01.149-.538l1.44-1.234A6.492 6.492 0 0116.5 10z" clipRule="evenodd" />
                </svg>
                Custom Domain
              </button>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 justify-items-start rounded-md p-3 mt-3 bg-blue-600 bg-opacity-10 border border-blue-500 border-opacity-40">
            <div className="col-span-8">
              <h2 className="text-md font-bold">Authentications</h2>
              <p className="text-sm font-light">Manage the connections to Github & Azure:</p>
            </div>
            <div className="col-span-4 justify-self-end">
              <button type="button" className="inline-flex items-center gap-1.5 rounded-sm border border-green-600 bg-green-600 px-3 py-1.5 text-center text-xs font-medium text-white shadow-sm transition-all hover:border-green-800 hover:bg-green-800 focus:ring focus:ring-green-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M18 5.25a2.25 2.25 0 00-2.012-2.238A2.25 2.25 0 0013.75 1h-1.5a2.25 2.25 0 00-2.238 2.012c-.875.092-1.6.686-1.884 1.488H11A2.5 2.5 0 0113.5 7v7h2.25A2.25 2.25 0 0018 11.75v-6.5zM12.25 2.5a.75.75 0 00-.75.75v.25h3v-.25a.75.75 0 00-.75-.75h-1.5z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M3 6a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V7a1 1 0 00-1-1H3zm6.874 4.166a.75.75 0 10-1.248-.832l-2.493 3.739-.853-.853a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.154-.114l3-4.5z" clipRule="evenodd" />
                </svg>
                Manage Auths
              </button>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 justify-items-start rounded-md p-3 mt-3 bg-orange-600 bg-opacity-10 border border-orange-500 border-opacity-40">
            <div className="col-span-8">
              <h2 className="text-md font-bold">Security</h2>
              <p className="text-sm font-light">User Authentication Required for Application Access?</p>
            </div>
            <div className="col-span-4 justify-self-end">
              <button type="button" className="inline-flex items-center gap-1.5 rounded-sm border border-orange-600 bg-orange-600 px-3 py-1.5 text-center text-xs font-medium text-white shadow-sm transition-all hover:border-orange-800 hover:bg-orange-800 focus:ring focus:ring-orange-200 disabled:cursor-not-allowed disabled:border-orange-300 disabled:bg-orange-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M9.661 2.237a.531.531 0 01.678 0 11.947 11.947 0 007.078 2.749.5.5 0 01.479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 01-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 01.48-.425 11.947 11.947 0 007.077-2.75zm4.196 5.954a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                Security
              </button>
            </div>
            <div className="col-span-8">
              <p className="text-sm font-bold">Access Rights:</p>
            </div>
            <div className="col-span-4 justify-self-end">
            </div>
            <div className="col-span-8">
              <p className="text-sm font-bold">License Configs:</p>
            </div>
            <div className="col-span-4 justify-self-end">
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 justify-items-start rounded-md p-3 mt-3 bg-orange-600 bg-opacity-10 border border-orange-500 border-opacity-40">
            <div className="col-span-8">
              <h2 className="text-md font-bold">Transfer</h2>
              <p className="text-sm font-light">Transfer ownership of this project:</p>
            </div>
            <div className="col-span-4 justify-self-end">
              <button type="button" className="inline-flex items-center gap-1.5 rounded-sm border border-orange-600 bg-orange-600 px-3 py-1.5 text-center text-xs font-medium text-white shadow-sm transition-all hover:border-orange-800 hover:bg-orange-800 focus:ring focus:ring-orange-200 disabled:cursor-not-allowed disabled:border-orange-300 disabled:bg-orange-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                </svg>
                Transfer
              </button>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 justify-items-start rounded-md p-3 mt-3 bg-red-600 bg-opacity-10 border border-red-500 border-opacity-40">
            <div className="col-span-8">
              <h2 className="text-md font-bold">Delete Project</h2>
              <p className="text-sm font-light">All children applications and routes will be deleted!</p>
              <p className="text-sm font-light">Once you delete a project, there is no going back. Please be certain.</p>
            </div>
            <div className="col-span-4 justify-self-end">
              <button type="button" className="inline-flex items-center gap-1.5 rounded-sm border border-red-500 bg-red-500 px-3 py-1.5 text-center text-xs font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200 disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                </svg>
                Delete Project
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}