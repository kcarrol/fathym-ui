import Button from "./Button";
import ButtonDiv from "./ButtonDiv";
import ButtonDynamic from "./ButtonDynamic";

export default function ButtonShowcase() {
  
    return (
        <>
            <div className="grid grid-cols-12 gap-4 justify-items-start rounded-md p-3 bg-blue-600 bg-opacity-10 border border-blue-500 border-opacity-40">
                <div className="col-span-2">
                    <Button color="red" size="xs">
                        Hello, World
                    </Button>
                </div>
                <div className="col-span-2">
                    <Button color="red" size="sm">
                        Bye, World
                    </Button>
                </div>
                <div className="col-span-2">
                    <Button color="red" size="md">
                        Hello World
                    </Button>
                </div>
                <div className="col-span-2">
                    <Button color="red" size="lg">
                        Hello World
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 justify-items-start rounded-md p-3 bg-blue-600 bg-opacity-10 border border-blue-500 border-opacity-40">
                <div className="col-span-2">
                    <form>
                        <Button color="blue" size="xs" type="submit" action="www.fathym.com">
                            Link Form Action
                        </Button>
                    </form>
                </div>
                <div className="col-span-2">
                    <Button color="orange" size="sm">
                        <a href="https://www.fathym.com/">Link Inside</a>
                    </Button>
                </div>
                <div className="col-span-2">
                    <a href="https://www.fathym.com/">
                        <Button color="blue" size="md">
                            Link Outside
                        </Button>
                    </a>
                </div>
                <div className="col-span-2">
                    <Button color="transparent" size="lg">
                        Hello World
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 justify-items-start rounded-md p-3 bg-blue-600 bg-opacity-10 border border-blue-500 border-opacity-40">
                <div className="col-span-2">
                    <form>
                        <ButtonDiv color="blue" size="xs">
                            No Link
                        </ButtonDiv>
                    </form>
                </div>
                <div className="col-span-2">
                    <ButtonDiv color="orange" size="sm">
                        <a href="https://www.fathym.com/">Link Inside</a>
                    </ButtonDiv>
                </div>
                <div className="col-span-2">
                    <a href="https://www.fathym.com/">
                        <ButtonDiv color="green" fontweight="medium" size="xs">
                            Link Outside
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                            </svg>
                        </ButtonDiv>
                    </a>
                </div>
                <div className="col-span-2">
                    <a href="https://www.fathym.com/">
                        <ButtonDiv color="white" textcolor="gray" fontweight="light" size="xs">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                            </svg>
                        </ButtonDiv>
                    </a>
                    <a href="https://www.fathym.com/">
                        <ButtonDiv color="gray" textcolor="white" fontweight="light" size="xs">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                            </svg>
                        </ButtonDiv>
                    </a>
                </div>
                <div className="col-span-2">
                    <ButtonDiv color="transparent" textcolor="blue" shadow="sm" size="lg">
                        Hello World
                    </ButtonDiv>
                </div>
                <div className="col-span-2">
                    <ButtonDynamic color="blue" textcolor="white" fontweight="bold" shadow="sm" size="sm">
                        Dyamite!
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M3.25 3A2.25 2.25 0 001 5.25v9.5A2.25 2.25 0 003.25 17h13.5A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H3.25zm.943 8.752a.75.75 0 01.055-1.06L6.128 9l-1.88-1.693a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 01-1.06-.055zM9.75 10.25a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z" clipRule="evenodd" />
                        </svg>
                    </ButtonDynamic>
                    <ButtonDynamic color="slate" textcolor="orange" fontweight="bold" shadow="sm" size="sm">
                        Dyamite!
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M3.25 3A2.25 2.25 0 001 5.25v9.5A2.25 2.25 0 003.25 17h13.5A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H3.25zm.943 8.752a.75.75 0 01.055-1.06L6.128 9l-1.88-1.693a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 01-1.06-.055zM9.75 10.25a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z" clipRule="evenodd" />
                        </svg>
                    </ButtonDynamic>
                    <ButtonDynamic color="green" textcolor="yellow" fontweight="bold" shadow="md" size="sm">
                        Dyamite!
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M3.25 3A2.25 2.25 0 001 5.25v9.5A2.25 2.25 0 003.25 17h13.5A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H3.25zm.943 8.752a.75.75 0 01.055-1.06L6.128 9l-1.88-1.693a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 01-1.06-.055zM9.75 10.25a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z" clipRule="evenodd" />
                        </svg>
                    </ButtonDynamic>
                </div>
            </div>
        </>
    )
}