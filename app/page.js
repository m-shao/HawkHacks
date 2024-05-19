"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Home from "@/components/pages/Home.jsx";
import RoadMap from "@/components/pages/RoadMap.jsx";
import Learning from "@/components/pages/Learning.jsx";

import { sections } from "@/config/pages/sections";

const Page = () => {
  const [page, setPage] = useState(0);
  const pages = [
    <Home key="0" setPage={setPage} />,
    <Learning
      key="1"
      setPage={setPage}
      paragraph={sections[0].text}
      titleImage={sections[0].image}
    />,
  ];

  return (
    <div>
      {page % 2 === 0 ? (
        pages[page / 2]
      ) : (
        <RoadMap key="1" setPage={setPage} index={Math.floor(page / 2)} />
      )}
    </div>
  );
};

export default Page;
