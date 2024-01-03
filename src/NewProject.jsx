

export default function NewProject({error}) {
  
    return (
        <>
            <div className="mx-auto max-w-xs">
                <label for="newproject" className="mb-1 block text-sm font-medium text-gray-700">New Project</label>
                <label className="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-gray-200 p-6 transition-all hover:border-primary-300">
                    <div className="space-y-1 text-center">
                    <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full text-blue-600 hover:text-blue-400 bg-gray-100 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M3.75 3A1.75 1.75 0 002 4.75v10.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0018 15.25v-8.5A1.75 1.75 0 0016.25 5h-4.836a.25.25 0 01-.177-.073L9.823 3.513A1.75 1.75 0 008.586 3H3.75zM10 8a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5A.75.75 0 0110 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="text-gray-600"><span className="font-medium text-primary-500 hover:text-primary-700">Github, NPM, Deno, Zip</span></div>
                    <p className="text-sm text-gray-500">Create a New Project</p>
                    </div>
                    <input id="newproject" type="submit" className="sr-only" />
                </label>
            </div>
        </>
    )
}