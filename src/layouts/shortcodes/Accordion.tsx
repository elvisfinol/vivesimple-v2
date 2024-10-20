import React, { useState } from "react";

const Accordion = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className={`accordion ${show ? "active" : ""} ${className}`}>
      <button
        className="accordion-header flex items-center justify-between w-full bg-slate-100 px-4 py-3 text-left"
        onClick={() => setShow(!show)}
      >
        <span>{title}</span>
        <svg
          className={`accordion-icon transform transition-transform duration-300 ${
            show ? "rotate-180" : "rotate-0"
          }`}
          width="24"
          height="24"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z" />
        </svg>
      </button>
      <div
        className={`accordion-content overflow-hidden transition-all duration-300 ${
          show ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
