export default function TextBoxInput({title, value, placeholder, error}) {
  
    return (
        <>
            <div>
                <label htmlFor={value} className="mb-1 block text-sm font-bold text-gray-700 dark:text-white after:ml-0.5 after:text-red-500 after:font-normal after:content-['*']">{title}</label>
                <textarea id={value} className="block w-full text-sm rounded-sm dark:bg-transparent border-white shadow-sm resize-none hover:resize-y focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" rows="3" placeholder={placeholder}></textarea>
                <p className="mt-1 text-sm text-red-500">{error}</p>
            </div>
        </>
    )
}