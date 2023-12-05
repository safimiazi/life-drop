import React from 'react';

const Login = () => {
    return (
      <div className="max-w-[1440px] mx-auto ">
        <div className="h-[160px]  bg-gradient-to-r from-[#48062E] via-[#650D38] to-red-600 text-white flex items-center px-9 text-3xl font-bold">
            Login Here
        </div>
        <div className='shadow-md p-14'>
            <div>
                <label htmlFor="">Username</label>
                <input placeholder='username' className=' px-7  py-3 border border-[#DBD1D1]' type="text" />
            </div>
            <div>
                <label htmlFor="">Username</label>
                <input className=' border border-[#DBD1D1]' type="text" />
            </div>
            <div>
                <label htmlFor="">Username</label>
                <input className=' border border-[#DBD1D1]' type="text" />
            </div>
        </div>
      </div>
    );
};

export default Login;