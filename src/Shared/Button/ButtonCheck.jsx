const ButtonCheck = ({ text }) => {
  return (
    <button
      className="hover:bg-black font-black  flex gap-6 items-center text-2xl stroke-black hover:stroke-white hover:text-white custom-shadow py-4 px-8 rounded-lg "
      type="submit"
    >
      {text}
      <svg
        width="37"
        height="38"
        viewBox="0 0 37 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="check-circle">
          <path
            id="Vector"
            d="M33.9167 17.5433V19C33.9148 22.4143 32.8383 25.7366 30.8478 28.4712C28.8572 31.2059 26.0593 33.2064 22.8712 34.1745C19.6832 35.1426 16.2758 35.0263 13.1573 33.8431C10.0389 32.6598 7.37638 30.473 5.56694 27.6087C3.75749 24.7444 2.89805 21.3561 3.11679 17.9492C3.33553 14.5422 4.62073 11.2992 6.78072 8.70369C8.94071 6.1082 11.8598 4.29934 15.1025 3.54689C18.3452 2.79443 21.738 3.13869 24.7746 4.52832"
            strokeWidth="3.08333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M33.9167 6.33337L18.5 22.1825L13.875 17.4325"
            strokeWidth="3.08333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </button>
  );
};

export default ButtonCheck;
