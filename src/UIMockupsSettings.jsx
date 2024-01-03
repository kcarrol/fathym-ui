import TextBoxInput from "./TextBoxInput";
import ButtonDynamic from "./ButtonDynamic";

export default function UIMockupsSettings() {

  return (
    <>
      <div className="mx-auto max-w-xl">
        <form action="" className="space-y-5">
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