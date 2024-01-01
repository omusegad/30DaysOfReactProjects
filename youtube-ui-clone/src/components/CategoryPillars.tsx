import React from "react";

interface catType {
  id: number;
  title: String;
}

export default function CategoryPillars() {
  const cat: catType[] = [
    {
      id: 1,
      title: "All",
    },
    {
      id: 2,
      title: "Javascript",
    },
    {
      id: 3,
      title: "Computers",
    },
    { id: 4, title: "Live" },
    {
      id: 5,
      title: "Podcasts",
    },
    {
      id: 6,
      title: "Presentations",
    },
    {
      id: 7,
      title: "Recently uploaded",
    },
    {
      id: 7,
      title: "Music",
    },
    {
      id: 7,
      title: "Movies",
    },
    {
      id: 7,
      title: "Football",
    },
    {
      id: 7,
      title: "Cricket",
    },
    {
      id: 7,
      title: "Rugby",
    },
    {
      id: 7,
      title: "MMA",
    },
    {
      id: 7,
      title: "WWE",
    },
    {
      id: 7,
      title: "Cycling",
    },
    {
      id: 7,
      title: "INEOS",
    },
  ];
  
  return (
    <div className="relative overflow-x-hidden">
      <div className="flex flex-row transition-shadow gap-2 whitespace-nowrap, w-[max-content]">
        {cat.map((item) => {
          return (
            <a
              className="px-3 py-2 rounded-lg whitespace-nowrap bg-slate-200 hover:bg-slate-100"
              href=""
              key={item.id}
            >
              {item.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}
