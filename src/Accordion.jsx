import { useState } from "react";

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const toggleAccordion = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? index : null));
    };

    const accordionItems = [
        {
          title: "Accordion item 01",
          body: "This is the first item's accordion body.",
        },
        {
          title: "Accordion item 02",
          body: "This is the second item's accordion body.",
        },
        {
          title: "Accordion item 03",
          body: "This is the third item's accordion body.",
        },
      ];

  return (
    <div className="mx-auto max-w-lg">
      <div className="divide-y divide-gray-100 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        {accordionItems.map((item, index) => (
          <details className={activeIndex === index ? "group" : "group group-open"} open={activeIndex === index}>
            <summary
              className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:bg-gray-50"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              {/* 
                <Icon
                  src="./sprite.svg"
                  icon="x-circle"
                  className="text-red-500 w-[24px] h-[24px]"
                />
                */}
              <div className="text-secondary-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="block h-5 w-5 transition-all duration-300 group-open:rotate-180"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </summary>
            <div className="border-t border-t-gray-100 p-4 text-secondary-500">{item.body}</div>
          </details>
        ))}
      </div>
    </div>
  );
}
