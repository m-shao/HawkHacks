"use client";

import BackButton from "@/components/BackButton";
import JsonViewer from "@/app/json";
import Image from "next/image";

import titleImage from "@/assets/dataset-text.png";

const Information = ({ setPage, schema }) => {
  const eventHandler = (e) => {
    e.stopPropagation();
    if (e.target.id === "json-viewer") {
      return;
    }
  };

  try {
    schema = JSON.parse(schema);
  } catch (e) {}
  return (
    <div
      onClick={(e) =>
        e.currentTarget === e.target && setPage((prev) => prev + 1)
      }
      className="w-screen h-screen bg-explain-bg flex flex-col gap-6 items-center overflow-y-scroll"
    >
      <BackButton setPage={setPage} />
      <div className="flex flex-col items-center gap-8 justify-center">
        <Image alt="title text" src={titleImage} />
        <div
          id="json-viewer"
          className="w-full max-w-[55rem] text- p-6 text-2xl text-black bg-white rounded-2xl shadow-2xl leading-10"
        >
          <h1>Generated Schema:</h1>

          <JsonViewer schema={schema} onClick={eventHandler} />
        </div>
      </div>
    </div>
  );
};

export default Information;
