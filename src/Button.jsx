export default function Button({ color, size, type, action, children }) {
    const colorVariants = {
        primary: 'border-primary-500 bg-primary-500',
        secondary: 'border-secondary-500 bg-secondary-500',
        blue: 'border-blue-500 bg-blue-500',
        green: 'border-green-500 bg-green-500',
        yellow: 'border-yellow-500 bg-yellow-500',
        orange: 'border-orange-500 bg-orange-500',
        red: 'border-red-500 bg-red-500',
        violet: 'border-violet-500 bg-violet-500',
        gray: 'border-gray-500 bg-gray-500',
        transparent: 'border-transparent bg-transparent',
    }
    const colorModVariants = {
        primary: 'hover:border-primary-700 hover:bg-primary-700 focus:ring-primary-200',
        secondary: 'hover:border-secondary-700 hover:bg-secondary-700 focus:ring-secondary-200',
        blue: 'hover:border-blue-700 hover:bg-blue-700 focus:ring-blue-200',
        green: 'hover:border-green-700 hover:bg-green-700 focus:ring-green-200',
        yellow: 'hover:border-yellow-700 hover:bg-yellow-700 focus:ring-yellow-200',
        orange: 'hover:border-orange-700 hover:bg-orange-700 focus:ring-orange-200',
        red: 'hover:border-red-700 hover:bg-red-700 focus:ring-red-200',
        violet: 'hover:border-violet-700 hover:bg-violet-700 focus:ring-violet-200',
        gray: 'hover:border-gray-700 hover:bg-gray-700 focus:ring-gray-200',
        transparent: 'hover:border-transparent hover:bg-transparent focus:ring-transparent',
    }
    const colorDisabledVariants = {
        primary: 'disabled:border-primary-300 disabled:bg-primary-300',
        secondary: 'disabled:border-secondary-300 disabled:bg-secondary-300',
        blue: 'disabled:border-blue-300 disabled:bg-blue-300',
        green: 'disabled:border-green-300 disabled:bg-green-300',
        yellow: 'disabled:border-yellow-300 disabled:bg-yellow-300',
        orange: 'disabled:border-orange-300 disabled:bg-orange-300',
        red: 'disabled:border-red-300 disabled:bg-red-300',
        violet: 'disabled:border-violet-300 disabled:bg-violet-300',
        gray: 'disabled:border-gray-300 disabled:bg-gray-300',
        transparent: 'diabled:border-transparent disabled:bg-transparent',
    }
    const sizeVariants = {
        xs: 'rounded-sm border',
        sm: 'rounded-sm border',
        md: 'rounded-md border',
        lg: 'rounded-lg border',
      }
    const textSizeVariants = {
        xs: 'px-2 py-1 text-xs',
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-sm',
        lg: 'px-5 py-2.5 text-base',
    }
    return (
        <>
        <button type={type} formAction={action} className={`inline-flex items-center gap-1.5 ${sizeVariants[size]} ${colorVariants[color]} ${textSizeVariants[size]} text-center font-medium text-white shadow-sm transition-all ${colorModVariants[color]} focus:ring disabled:cursor-not-allowed ${colorDisabledVariants[color]}`}>
            {children}
        </button>
        </>
    )
}