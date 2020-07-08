import React, { useMemo } from "react";
import { Link } from "react-router-dom";

export default function Pagination({ current }) {
  const pages = useMemo(() => new Array(3).fill(""), []);
  const buttonClassName =
    "rounded border border-primary w-6 h-6 text-xs ml-3 focus:outline-none transition duration-500 text-center";

  return (
    <div className="w-full flex justify-end">
      {Object.keys(pages).map((x) => {
        let index = Number(x) + 1;
        return (
          <Link
            to={`/home?page=${index}`}
            className={`${buttonClassName} ${
              current === index
                ? "bg-primary text-white"
                : "bg-white text-primary"
            }`}
            key={x}
          >
            {index}
          </Link>
        );
      })}
    </div>
  );
}
