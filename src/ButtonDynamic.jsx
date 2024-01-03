export default function ButtonDynamic({ color, size, textcolor, fontweight, shadow, highlight, selected, disabled, children, ...props }) {

    textcolor = textcolor ?? 'white'
    fontweight = fontweight ?? 'bold'
    shadow = shadow ?? 'sm'
    disabled = disabled ?? 'false'

    let colorVary = (color == 'transparent' ? 'border-transparent bg-transparent' : color == 'white' ? 'border-white bg-white' : `border-${color}-500 bg-${color}-500` )
    let colorDarkenModVary = (color == 'transparent' ? 'hover:border-black hover:border-opacity-0 hover:bg-black hover:bg-opacity-20 focus:bg-black focus:bg-opacity-25' : `hover:border-${color}-700 hover:bg-${color}-700 focus:ring-${color}-200` )
    let colorHighlightModVary = (color == 'transparent' ? 'hover:border-white hover:border-opacity-0 hover:bg-white hover:bg-opacity-20 focus:bg-white focus:bg-opacity-25' : `hover:border-${color}-400 hover:bg-${color}-400 focus:ring-${color}-200` )
    let colorDisabledVary = `disabled:border-${color}-300 disabled:bg-${color}-300`
    let textColorVary = (textcolor == 'white' ? 'text-white' : `text-${textcolor}-500` )
    let fontWeightVary = (fontweight ? `font-${fontweight}` : 'font-medium' )
    let shadowVary = (shadow ? `shadow-${shadow}` : '')

    const sizeVariants = {
        xs: 'rounded-sm border',
        sm: 'rounded-sm border',
        md: 'rounded-md border',
        lg: 'rounded-lg border',
    }
    const padTextVariants = {
        xs: 'px-2 py-1 text-xs',
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-sm',
        lg: 'px-5 py-2.5 text-base',
    }

    return (
        <>
            <button props className={`inline-flex items-center gap-1.5
                                        ${sizeVariants[size]}
                                        ${colorVary}
                                        ${padTextVariants[size]}
                                        text-center
                                        ${fontWeightVary}
                                        ${textColorVary}
                                        ${shadowVary}
                                        transition-all
                                        ${highlight ? colorHighlightModVary : colorDarkenModVary}
                                        ${selected ? "!bg-black !bg-opacity-40" : null}
                                        focus:ring cursor-pointer disabled:cursor-not-allowed
                                        ${colorDisabledVary}`
                                    }>
                {children}
            </button>
        </>
    )
}