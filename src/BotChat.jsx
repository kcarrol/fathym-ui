import ButtonDynamic from "./ButtonDynamic"

const botData = [
	{
		"role": "system",
		"content": "You are an AI assistant that helps people find information.",
        "time": "null",
        "usericon": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                    </svg>
	},
	{
		"role": "currentUser",
		"content": "Hello Thinky",
        "time": "1 min ago",
        "usericon": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                    </svg>
	},
	{
		"role": "assistant",
		"content": "Hello! How can I assist you today?",
        "time": "2 min ago",
        "usericon": <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>      
	},
    {
		"role": "currentUser",
		"content": "Can you make me a React Component that display's markdown formatted properly including highlighting any code blocks using either highlight js or prism js?",
        "time": "2 min ago",
        "usericon": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                    </svg>
	},
    {
		"role": "user2",
		"content": "Please also make a preact version that would work in Deno Fresh.",
        "time": "3 min ago",
        "usericon": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                    </svg>
	},
    {
		"role": "assistant",
		"content": `Sure, here's an example of a React component that uses 'react-markdown' and 'react-syntax-highlighter' to display markdown with highlighted code blocks:

        \`\`\`jsx
        import React from 'react';
        import ReactMarkdown from 'react-markdown';
        import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
        import { twilight } from 'react-syntax-highlighter/dist/esm/styles/prism';
        
        const CodeBlock = ({ language, value }) => {
          return (
            <SyntaxHighlighter style={twilight} language={language}>
              {value}
            </SyntaxHighlighter>
          );
        };
        
        const Markdown = ({ content }) => {
          return (
            <ReactMarkdown
              source={content}
              renderers={{ code: CodeBlock }}
            />
          );
        };
        \`\`\`
        
        To use this component, pass in your markdown content as a string to the 'content' prop. The component will display the markdown with syntax highlighting applied to any code blocks within the content.
        
        Note that we're using the 'twilight' theme from 'react-syntax-highlighter', but you can replace this with any of the other themes available if you prefer a different look.`,
        "time": "3 min ago",
        "usericon": <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>      
	},
]

export default function BotChat() {
    return (
        <>
            {botData.map((item, index) => (
                (item.role == 'currentUser') ? (
                <div key={index} className="">
                    <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto mr-2 justify-end">
                        <div>
                            <div class="bg-blue-600 bg-opacity-10 border border-blue-500 border-opacity-40 p-3 rounded-l-lg rounded-br-lg">
                                <p class="text-sm">{item.content}</p>
                            </div>
                            <span class="text-xs text-gray-500 leading-none">{item.time}</span>
                        </div>
                        <div class="flex flex-shrink-0 h-6 w-6 md:h-10 md:w-10 justify-center rounded-full bg-blue-600 bg-opacity-10 border border-blue-500 border-opacity-40 text-blue-600 overflow-clip">
                            <div class="flex self-center">{item.usericon}</div>
                        </div>
                    </div>
                </div>
                ) :
                (item.role == 'assistant') ? (
                <div key={index} className="">
                    <div class="flex w-full mt-2 space-x-3 max-w-xs">
                        <div class="flex flex-shrink-0 h-10 w-10 justify-center rounded-full bg-red-600 bg-opacity-10 border border-red-500 border-opacity-40 text-red-600">
                            <div class="flex self-center">{item.usericon}</div>
                        </div>
                        <div>
                            <div class="bg-red-600 bg-opacity-10 border border-red-500 border-opacity-40 p-3 rounded-r-lg rounded-bl-lg">
                                <p class="text-sm">{item.content}</p>
                            </div>
                            <span class="text-xs text-gray-500 leading-none">{item.time}</span>
                        </div>
                    </div>
                </div>
                ) :
                (item.role == 'user2') ? (
                    <div key={index} className="">
                    <div class="flex w-full mt-2 space-x-3 max-w-xs">
                        <div class="flex-shrink-0 h-10 w-10 rounded-full bg-green-600 bg-opacity-10 border border-green-500 border-opacity-40 text-green-600">
                            <div class="py-1.5 px-1.5">{item.usericon}</div>
                        </div>
                        <div>
                            <div class="bg-green-600 bg-opacity-10 border border-green-500 border-opacity-40 p-3 rounded-r-lg rounded-bl-lg">
                                <p class="text-sm">{item.content}</p>
                            </div>
                            <span class="text-xs text-gray-500 leading-none">{item.time}</span>
                        </div>
                    </div>
                </div>
                ) : ( null )
            ))}
            <div class="my-3 rounded-md p-3 bg-blue-600 bg-opacity-10 border border-blue-500 border-opacity-40">
                <form>
                    <div className="relative z-0 flex">
                        <input type="text" id="version" className="block w-full rounded-sm rounded-r-none border-gray-300 text-sm shadow-sm focus:z-10 dark:bg-slate-950 focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="Ask Thinky..." />
                        <button for="version" className="flex items-center space-x-1 rounded-sm rounded-l-none border border-l-0 border-blue-600 bg-blue-600 px-3 py-1.5 text-center text-xs font-medium text-white shadow-sm transition-all hover:border-blue-800 hover:bg-blue-800 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}