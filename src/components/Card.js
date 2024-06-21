import React from "react";

const Card = ({ ele, index }) => {
  return (
    <div className="w-[80%] h-auto bg-white bottom-1 rounded-md p-5 mt-5 text-justify break-words shadow-xl shadow-gray-700 hover:scale-x-105 hover:scale-y- transition-all">
      <h2 className="text-xl mb-3 font-bold">Title : {ele.data.title}</h2>
      <h2 className="text-xl font-bold">SelfText_HTML : </h2>
      <div
        className="mb-1 break-words"
        dangerouslySetInnerHTML={{ __html: ele.data.selftext_html }}
      ></div>
      <a
        href={ele.data.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 cursor-pointer text-lg"
      >
        Read more...
      </a>
      <p className="text-xl font-bold mt-5">
        Score: <span className="text-lg font-medium">{ele.data.score}</span>
      </p>
    </div>
  );
};

export default Card;
