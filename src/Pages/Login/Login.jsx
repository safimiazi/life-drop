import "./Login.css";
import ButtonCheck from "../../Shared/Button/ButtonCheck";

const Login = () => {
  // Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This is alert ");
  };
  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className="h-[160px]  bg-gradient-to-r from-[#48062E] via-[#650D38] to-red-600 text-white flex items-center px-9 text-3xl font-bold">
        Login Here
      </div>
      <div className="shadow-lg rounded-bl-lg rounded-br-lg  p-14 ">
        <form onSubmit={handleSubmit} action="">
          <div className="flex flex-col text-2xl  md:w-1/2 mx-auto justify-center   ">
            <div className="  pb-8  flex flex-col md:flex-row md:items-center gap-4  md:gap-14 ">
              <label htmlFor="" className="md:text-right flex-1">
                Username
              </label>
              <input
                placeholder="Username"
                className=" px-7  py-3 border border-[#DBD1D1] rounded-lg  lg:w-2/3"
                type="text"
              />
            </div>
            <div className=" pb-8 flex flex-col md:flex-row md:items-center gap-4  md:gap-14 ">
              <label htmlFor="email" className="md:text-right md:flex-1">
                Email
              </label>
              <input
                placeholder="Email"
                className=" px-7  py-3 border border-[#DBD1D1] rounded-lg  lg:w-2/3"
                type="text"
              />
            </div>
            <div className="  pb-14 flex flex-col md:flex-row md:items-center gap-4  md:gap-14 ">
              <label htmlFor="password" className="md:text-right flex-1 ">
                Password
              </label>
              <input
                placeholder="Password"
                className=" px-7  py-3 border border-[#DBD1D1] rounded-lg  lg:w-2/3"
                type="text"
              />
            </div>
          </div>
          <div className="flex justify-center  md:justify-end">
            <ButtonCheck text="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
