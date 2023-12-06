const ButtonFill = ({ text, size }) => {
  return (
    <button
      className={`lg:text-${size} bg-black font-black text-white  px-6 py-3 rounded-lg`}
    >
      {text}
    </button>
  );
};

export default ButtonFill;
