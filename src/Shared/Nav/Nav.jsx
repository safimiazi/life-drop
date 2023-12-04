import { NavLink } from "react-router-dom";
import "./nav.css";
const Nav = () => {
  return (
    <div className="flex gap-4 justify-between items-center max-w-[1440px] mx-auto text-2xl">
      <div>
        <h1 className="text-black">
          <svg
            width="125"
            height="121"
            viewBox="0 0 225 221"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_81_2)">
              <ellipse cx="92.5" cy="84" rx="30.5" ry="31" fill="white" />
            </g>
            <path
              d="M91.9906 63.3173L102.603 73.9523C104.702 76.0542 106.131 78.7325 106.711 81.6487C107.291 84.5649 106.994 87.5878 105.859 90.335C104.724 93.0823 102.802 95.4306 100.335 97.0827C97.8676 98.7349 94.9671 99.6167 92 99.6167C89.0329 99.6167 86.1324 98.7349 83.6654 97.0827C81.1985 95.4306 79.2759 93.0823 78.1409 90.335C77.0058 87.5878 76.7094 84.5649 77.2889 81.6487C77.8685 78.7325 79.2981 76.0542 81.3969 73.9523L91.9906 63.3173Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <filter
                id="filter0_d_81_2"
                x="-40"
                y="-45"
                width="265"
                height="266"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="2"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_dropShadow_81_2"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="50" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.05 0 0 0 0 0.05 0 0 0 0 0.05 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_81_2"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_81_2"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </h1>
      </div>
      <div className="space-x-20 hidden lg:block">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-[#4B4949]"
              : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-[#4B4949]"
              : ""
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/find-blood"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-[#4B4949]"
              : ""
          }
        >
          Find Blood
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-[#4B4949] hoverA"
              : "hoverA"
          }
        >
          Register Now <sup className="text-lg">⌄</sup>
          <div className={`menuA `}>
            <NavLink
              to="/find-blood"
              className={({ isActive, isPending }) =>
                isActive
                  ? "border-b-2 border-[#4B4949]"
                  : "flex items-center gap-2"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              As Donor
            </NavLink>
            <NavLink
              to="/find-blood"
              className={({ isActive, isPending }) =>
                isActive
                  ? "border-b-2 border-[#4B4949]"
                  : "flex gap-2 items-center"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
              As Organization
            </NavLink>
          </div>
        </NavLink>
        <button className="bg-transparent border-2 hover:bg-black hover:text-white border-black px-6 py-1 rounded-lg ">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Nav;
