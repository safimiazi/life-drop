import React from 'react';

const ButtonArrow = ({text}) => {
    return (
      <button
        className="hover:bg-black font-black  flex gap-6 items-center text-2xl stroke-black hover:stroke-white hover:text-white custom-shadow py-4 px-8 rounded-lg "
        type="submit"
      >
        {text}
        <svg
          className="hover:text-white"
          width="8"
          height="21"
          viewBox="0 0 8 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 19.75L7 10.5L1 1.25"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
};

export default ButtonArrow;