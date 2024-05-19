"use client";

import { useState } from "react";
import BackButton from "@/components/BackButton";

import Image from "next/image";

import titleImage from "@/assets/query-text.png";

const Learning = ({ setPage, schema }) => {
  const [topic, setTopic] = useState("");

	const generateDataset = (e) => {
		e.preventDefault();

		let prompt = `Please check if this query: "${topic} for mongoDB is valid and will work as expected. Please export your answer as either "yes" or "no". Do not include anything else and use any other values.`;
		fetch("/api/gemma?prompt=" + prompt).then((res) => {
			res.text().then((data) => {
				if (data.response !== undefined) {
					data = data.response;
				}

				if (!/\b(true|yes)\b/i.test(data.toLowerCase())) {
					setPage((prev) => prev - 10);
				} else {
					setPage((prev) => prev + 1);
				}
			});
		});
	};

  const handleChange = (e) => {
    setTopic(e.target.value);
  };

  return (
    <div className="w-screen h-screen bg-explain-bg flex flex-col gap-6 items-center">
      <BackButton setPage={setPage} />
      <div className="w-full flex flex-col items-center gap-8 justify-center h-full">
        <Image alt="title text" src={titleImage} />
        <div className="w-full max-w-[55rem] text- p-6 text-2xl text-black bg-white rounded-2xl shadow-2xl leading-10">
          {
            "Attempt to write a mongodb query that you'd like to learn about dogs. We'll check if it's valid and will work as expected."
          }
        </div>
        <form
          onSubmit={generateDataset}
          className="w-full max-w-[60rem] p-6 text-2xl flex flex-col gap-2 text-white font-semibold bg-white rounded-2xl shadow-2xl bg-gradient-to-b from-green-800 border-[3px] border-green-600 to-green-700"
        >
          <label htmlFor="topic">
            don&apos;t forget the previous slide! (hint: db.x...)
          </label>
          <input
            name="topic"
            className="bg-gradient-to-b from-green-950 to-green-900 p-2 rounded-lg shadow-lg text-white text-3xl "
            value={topic}
            onChange={handleChange}
            type="text"
          />
        </form>
      </div>
    </div>
  );
};

export default Learning;
