"use client";

import { useState } from "react";
import BackButton from "@/components/BackButton";

import Image from "next/image";

const Learning = ({ paragraph, titleImage, setPage, setPrompt, setSchema }) => {
  const [topic, setTopic] = useState("");

  const generateDataset = (e) => {
    e.preventDefault();
    let prompt = `Please generate a mongoDB compatible db schema for an app about "${topic}. So to be clear, I want you to output a raw JSON schema that can be used for a database for "${topic}".`;
    fetch("/api/gemma?prompt=" + prompt).then((res) => {
      res.json().then((data) => {
        setSchema(data.response);
      });
    });
    setPage((prev) => prev + 1);
  };

  return (
    <div className="w-screen h-screen bg-explain-bg flex flex-col gap-6 items-center">
      <BackButton setPage={setPage} />
      <div className="w-full flex flex-col items-center gap-8 justify-center h-full">
        <Image alt="title text" src={titleImage} />
        <div className="w-full max-w-[55rem] text- p-6 text-2xl text-black bg-white rounded-2xl shadow-2xl leading-10">
          {paragraph}
        </div>
        <form
          onSubmit={generateDataset}
          className="w-full max-w-[60rem] p-6 text-2xl flex flex-col gap-2 text-white font-semibold bg-white rounded-2xl shadow-2xl bg-gradient-to-b from-green-800 border-[3px] border-green-600 to-green-700"
        >
          <label htmlFor="topic">
            Data set would you like to learn with: (e.g. Application that stores
            info about dogs)
          </label>
          <input
            name="topic"
            className="bg-gradient-to-b from-green-950 to-green-900 p-2 rounded-lg shadow-lg text-white text-3xl "
            value={topic}
            onChange={(e) => {
              setTopic(e.target.value);
              setPrompt(e.target.value);
            }}
            type="text"
          />
        </form>
      </div>
    </div>
  );
};

export default Learning;
