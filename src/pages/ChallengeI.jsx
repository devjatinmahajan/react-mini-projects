import { useState } from "react";
import { directoryStructure as data } from "../data/directoryStructure";

export default function ChallengeI() {
  return (
    <>
      {data.children.map((item, index) => (
        <RenderDirectory item={item} key={index} />
      ))}
    </>
  );
}

function RenderDirectory({ item: { name, children } }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="dir-container">
      <div className="tracker"></div>
      <div className="dir-item" onClick={() => setToggle((prev) => !prev)}>
        {children ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="dir-svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
        )}

        <h4>{name}</h4>
      </div>
      {children &&
        toggle &&
        children.map((item, index) => (
          <RenderDirectory item={item} key={index} />
        ))}
    </div>
  );
}
