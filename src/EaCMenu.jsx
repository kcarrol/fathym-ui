import { useState } from "react";

export default function EaCMenu() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  }

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? index : null));
  };

  const projectOptions = [
    {
      name: "Routes & Apps",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd" d="M2 4.75A2.75 2.75 0 0 1 4.75 2h3a2.75 2.75 0 0 1 2.75 2.75v.5a.75.75 0 0 1-1.5 0v-.5c0-.69-.56-1.25-1.25-1.25h-3c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h3c.69 0 1.25-.56 1.25-1.25v-.5a.75.75 0 0 1 1.5 0v.5A2.75 2.75 0 0 1 7.75 14h-3A2.75 2.75 0 0 1 2 11.25v-6.5Zm9.47.47a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97H5.25a.75.75 0 0 1 0-1.5h7.19l-.97-.97a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>
    },
    {
      name: "Services",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
              <path d="M5.354 2a2 2 0 0 0-1.857 1.257l-.338.845C3.43 4.035 3.71 4 4 4h8c.29 0 .571.035.84.102l-.337-.845A2 2 0 0 0 10.646 2H5.354Z" />
              <path fill-rule="evenodd" d="M2 13a2 2 0 0 1 2-2h8a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Zm10.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9 13.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4 5.5a2 2 0 1 0 0 4h8a2 2 0 1 0 0-4H4Zm8 2.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9.75 7.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" clip-rule="evenodd" />
            </svg>
    },
    {
      name: "Devices",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
              <path d="M6 6v4h4V6H6Z" />
              <path fill-rule="evenodd" d="M5.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2H1.75a.75.75 0 0 0 0 1.5H3v.75H1.75a.75.75 0 0 0 0 1.5H3v.75H1.75a.75.75 0 0 0 0 1.5H3a2 2 0 0 0 2 2v1.25a.75.75 0 0 0 1.5 0V13h.75v1.25a.75.75 0 0 0 1.5 0V13h.75v1.25a.75.75 0 0 0 1.5 0V13a2 2 0 0 0 2-2h1.25a.75.75 0 0 0 0-1.5H13v-.75h1.25a.75.75 0 0 0 0-1.5H13V6.5h1.25a.75.75 0 0 0 0-1.5H13a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-.75V1.75a.75.75 0 0 0-1.5 0V3H6.5V1.75A.75.75 0 0 0 5.75 1ZM11 4.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h6Z" clip-rule="evenodd" />
            </svg>
    },
    {
      name: "Sources & Pipeline",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd" d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2.22 1.97a.75.75 0 0 0 0 1.06l.97.97-.97.97a.75.75 0 1 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06l-1.5-1.5a.75.75 0 0 0-1.06 0ZM8.75 8.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z" clip-rule="evenodd" />
            </svg>
    },
    {
      name: "Project Config",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd" d="M15 4.5A3.5 3.5 0 0 1 11.435 8c-.99-.019-2.093.132-2.7.913l-4.13 5.31a2.015 2.015 0 1 1-2.827-2.828l5.309-4.13c.78-.607.932-1.71.914-2.7L8 4.5a3.5 3.5 0 0 1 4.477-3.362c.325.094.39.497.15.736L10.6 3.902a.48.48 0 0 0-.033.653c.271.314.565.608.879.879a.48.48 0 0 0 .653-.033l2.027-2.027c.239-.24.642-.175.736.15.09.31.138.637.138.976ZM3.75 13a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" clip-rule="evenodd" />
              <path d="M11.5 9.5c.313 0 .62-.029.917-.084l1.962 1.962a2.121 2.121 0 0 1-3 3l-2.81-2.81 1.35-1.734c.05-.064.158-.158.426-.233.278-.078.639-.11 1.062-.102l.093.001ZM5 4l1.446 1.445a2.256 2.256 0 0 1-.047.21c-.075.268-.169.377-.233.427l-.61.474L4 5H2.655a.25.25 0 0 1-.224-.139l-1.35-2.7a.25.25 0 0 1 .047-.289l.745-.745a.25.25 0 0 1 .289-.047l2.7 1.35A.25.25 0 0 1 5 2.654V4Z" />
            </svg>
    },
    {
      name: "Access Config",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
              <path d="M8.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10.9 12.006c.11.542-.348.994-.9.994H2c-.553 0-1.01-.452-.902-.994a5.002 5.002 0 0 1 9.803 0ZM14.002 12h-1.59a2.556 2.556 0 0 0-.04-.29 6.476 6.476 0 0 0-1.167-2.603 3.002 3.002 0 0 1 3.633 1.911c.18.522-.283.982-.836.982ZM12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
            </svg>
    }
  ]

  const eac = [
    {
      name: "Matt's Personal",
      id: "GUID",
      projects: [
        {
          name: "Biotech Demo"
        },
        {
          name: "Charleston Home"
        },
        {
          name: "Industrial Demo"
        },
        {
          name: "Baserow CMS"
        },
      ],
    },
    {
      name: "Open Biotech",
      id: "GUID",
      projects: [
        {
          name: "Biotech Landing"
        },
        {
          name: "Biotech Dashboard"
        },
        {
          name: "Biotech Freeboard"
        }
      ]
    },
    {
    name: "Open Industrial",
    id: "GUID",
    projects: [
      {
        name: "Industrial Landing"
      },
      {
        name: "Industrial Dashboard"
      },
      {
        name: "Industrial Freeboard"
      }
    ]
    },
    {
      name: "Fathym, Inc.",
      id: "GUID",
      projects: [
        {
          name: "Homepage"
        },
        {
          name: "Forecast"
        },
        {
          name: "IoT"
        },
        {
          name: "Biotech"
        },
        {
          name: "Industrial"
        }
      ]
    }
  ]

  return (
    <div className="mx-auto">
      <div className="overflow-hidden">

      <div className="mt-4"></div>

      {eac.map((item, index) => (
      <div class="flex flex-wrap items-center">
        <input type="checkbox" id={item.name} class="peer sr-only" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="h-4 w-4 transition-all duration-200 peer-checked:rotate-90">
            <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>
        <label for={item.name} class="peer-checked:font-bold cursor-pointer flex grow">
          {eac[index].name}
        </label>
          <div class="hidden peer-checked:block bg-transparent w-full my-1">

        <div class="flex flex-wrap items-center">
          <input type="checkbox" id={item.name + "projects"} class="peer sr-only" />
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="h-4 w-4 ml-5 transition-all duration-200 peer-checked:rotate-90">
              <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>
          <label for={item.name + "projects"} class="peer-checked:font-bold cursor-pointer flex grow hover:bg-slate-300 dark:hover:bg-slate-700">
            Projects
          </label>

          <div class="hidden peer-checked:block bg-transparent w-full">
            
            {eac[index].projects.map((item, index) => (
            <div className="bg-transparent mt-1 pt-1 border-t-[1px] border-dotted border-slate-400 dark:border-slate-700"
            onClick={() => toggleOpen()}>
              <div class="flex flex-wrap items-center">
              <input type="checkbox" id={item.name} class="peer sr-only" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="h-4 w-4 transition-all duration-200 peer-checked:rotate-90">
                  <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 mr-1">
                  <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM4.5 3.757a5.5 5.5 0 1 0 6.857-.114l-.65.65a.707.707 0 0 0-.207.5c0 .39-.317.707-.707.707H8.427a.496.496 0 0 0-.413.771l.25.376a.481.481 0 0 0 .616.163.962.962 0 0 1 1.11.18l.573.573a1 1 0 0 1 .242 1.023l-1.012 3.035a1 1 0 0 1-1.191.654l-.345-.086a1 1 0 0 1-.757-.97v-.305a1 1 0 0 0-.293-.707L6.1 9.1a.849.849 0 0 1 0-1.2c.22-.22.22-.58 0-.8l-.721-.721A3 3 0 0 1 4.5 4.257v-.5Z" clip-rule="evenodd" />
                </svg>
              <label for={item.name} class="peer-checked:font-bold cursor-pointer flex grow">
                {item.name}
              </label>
              <div class="hidden peer-checked:block bg-transparent w-full">

              {projectOptions.map((item,index) => (
                <div className="h-7 w-full px-2 flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 rounded-sm font-light cursor-pointer">
                <div className="flex items-center ml-9">
                  {item.icon}
                  <span className="ml-1">{item.name}</span>
                </div>
              </div>
              ))}
              
              </div>
            </div>
          </div>
        ))}
            </div>
            <div className="border-b-[1px] border-dotted border-slate-400 dark:border-slate-700"></div>
          </div>
          </div>
        </div>
      ))}
      <div className="mt-4"></div>

      </div>
    </div>
  );
}
