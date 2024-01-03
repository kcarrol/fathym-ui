export default function Avatar() {
  
    return (
        <>
            <div className="flex flex-wrap items-end justify-center gap-3">
                <div className="relative h-14 w-14">
                    <img className="h-full w-full rounded-full object-cover object-center" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full bg-green-400 ring ring-white"></span>
                </div>
            </div>
        </>
    )
}