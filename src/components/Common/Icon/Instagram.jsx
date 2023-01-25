import React from "react";

export const Instagram = ({ props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-clock"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      stroke="#E4F3F3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-labelledby="Clock"
      aria-label="Clock"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx={12} cy={12} r={9} />
      <polyline points="12 7 12 12 15 15" />
    </svg>
  );
};
