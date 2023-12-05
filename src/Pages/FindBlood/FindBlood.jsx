import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { MdBloodtype, MdPlace } from "react-icons/md";

const FindBlood = () => {
const [filter,getFIlter] = useState(false)
  return (
<div className="max-w-[1440px] mx-auto">
  <div className="relative">
    <img className="w-full h-full rounded-lg" src="/find-bloor-bg.jpg" alt="" />
    <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
  </div>

  <div className="lg:flex hidden flex-col  md:flex-row justify-center w-fit border border-[#213842] mx-auto mt-4 mb-10 text-xl rounded-lg overflow-hidden shadow-lg">
  <select  className="pl-2 py-3 pr-7 border-[#213842] border-r focus:outline-none bg-white text-[#213842]">
  <option disabled selected>Select Blood Group 🩸</option>
  {/* Add options for blood groups */}
  <option value="A+">A+ 🩸</option>
  <option value="A-">A- 🩸</option>
  <option value="B+">B+ 🩸</option>
  <option value="B-">B- 🩸</option>
  <option value="AB+">AB+ 🩸</option>
  <option value="AB-">AB- 🩸</option>
  <option value="O+">O+ 🩸</option>
  <option value="O-">O- 🩸</option>
  {/* Add more options as needed */}
</select>

    <select className="pl-2 py-3 pr-7 border-[#213842] border-r focus:outline-none bg-white text-[#213842]">
  <option disabled selected> Select Zila</option>
  {/* Add options for Zila */}
  <option value="Bagerhat">Bagerhat</option>
<option value="Bandarban">Bandarban</option>
<option value="Barguna">Barguna</option>
<option value="Barishal">Barishal</option>
<option value="Bhola">Bhola</option>
<option value="Bogura">Bogura</option>
<option value="Brahmanbaria">Brahmanbaria</option>
<option value="Chandpur">Chandpur</option>
<option value="Chattogram">Chattogram (Chittagong)</option>
<option value="Chuadanga">Chuadanga</option>
<option value="Cumilla">Cumilla</option>
<option value="CoxsBazar">Cox's Bazar</option>
<option value="Dhaka">Dhaka</option>
<option value="Dinajpur">Dinajpur</option>
<option value="Faridpur">Faridpur</option>
<option value="Feni">Feni</option>
<option value="Gaibandha">Gaibandha</option>
<option value="Gazipur">Gazipur</option>
<option value="Gopalganj">Gopalganj</option>
<option value="Habiganj">Habiganj</option>
<option value="Jamalpur">Jamalpur</option>
<option value="Jessore">Jessore (Jashore)</option>
<option value="Jhalokati">Jhalokati</option>
<option value="Jhenaidah">Jhenaidah</option>
<option value="Joypurhat">Joypurhat</option>
<option value="Khagrachhari">Khagrachari</option>
<option value="Khulna">Khulna</option>
<option value="Kishoreganj">Kishoreganj</option>
<option value="Kurigram">Kurigram</option>
<option value="Kushtia">Kushtia</option>
<option value="Lakshmipur">Lakshmipur</option>
<option value="Lalmonirhat">Lalmonirhat</option>
<option value="Madaripur">Madaripur</option>
<option value="Magura">Magura</option>
<option value="Manikganj">Manikganj</option>
<option value="Meherpur">Meherpur</option>
<option value="Moulvibazar">Moulvibazar</option>
<option value="Munshiganj">Munshiganj</option>
<option value="Mymensingh">Mymensingh</option>
<option value="Naogaon">Naogaon</option>
<option value="Narail">Narail</option>
<option value="Narayanganj">Narayanganj</option>
<option value="Narsingdi">Narsingdi</option>
<option value="Natore">Natore</option>
<option value="Netrokona">Netrokona</option>
<option value="Nilphamari">Nilphamari</option>
<option value="Noakhali">Noakhali</option>
<option value="Pabna">Pabna</option>
<option value="Panchagarh">Panchagarh</option>
<option value="Patuakhali">Patuakhali</option>
<option value="Pirojpur">Pirojpur</option>
<option value="Rajbari">Rajbari</option>
<option value="Rajshahi">Rajshahi</option>
<option value="Rangamati">Rangamati</option>
<option value="Rangpur">Rangpur</option>
<option value="Satkhira">Satkhira</option>
<option value="Shariatpur">Shariatpur</option>
<option value="Sherpur">Sherpur</option>
<option value="Sirajganj">Sirajganj</option>
<option value="Sunamganj">Sunamganj</option>
<option value="Sylhet">Sylhet</option>
<option value="Tangail">Tangail</option>
<option value="Thakurgaon">Thakurgaon</option>

  {/* Add more options as needed */}
</select>

    <select className="pl-2 py-3 pr-7 border-[#213842] border-r focus:outline-none bg-white text-[#213842]">
      <option disabled selected>Select Age 📆</option>
      {/* Add options for age */}
      <option value="0-10">0-10</option>
      <option value="11-20">11-20</option>
      <option value="21-30">21-30</option>
      {/* Add more options as needed */}
    </select>
    <select className="pl-2 py-3 pr-7 rounded-r-lg focus:outline-none bg-white text-[#213842]">
      <option disabled selected>Select Gender 🚻</option>
      {/* Add options for gender */}
      <option value="Male">Male 🚹</option>
      <option value="Female">Female 🚺</option>
      <option value="Other">Other 🌈</option>
      {/* Add more options as needed */}
    </select>

    <button className="px-2 py-3 text-lg text-white bg-[#b32346] flex items-center gap-2 pl-3 pr-6 hover:bg-[#6A0B37]">Filter <FaFilter className="text-base" /></button>
  </div>

  <div className="mt-4 ml-3 lg:hidden">
    <button onClick={() => {getFIlter(!filter)}} className="px-2 py-3 text-lg rounded-lg text-white bg-[#b32346] flex items-center gap-2 pl-3 pr-4 hover:bg-[#6A0B37]">
      Filter <FaFilter className="text-base" />
    </button>
  </div>

  <div className={`w-full ${filter ? '' : 'hidden'} p-4 `}>
    <div className="border lg:hidden border-[#213842] mt-3 ">
    <div className="flex flex-col lg:flex-row items-center justify-center">
  <select  className="w-full lg:w-auto pl-2 py-3 pr-7 text-lg border-[#213842] border-b focus:outline-none bg-white text-[#213842] mb-3 md:mb-0">
  <option disabled selected>Select Blood Group 🩸</option>
  {/* Add options for blood groups */}
  <option value="A+">A+ 🩸</option>
<option value="A-">A- 🩸</option>
<option value="B+">B+ 🩸</option>
<option value="B-">B- 🩸</option>
<option value="AB+">AB+ 🩸</option>
<option value="AB-">AB- 🩸</option>
<option value="O+">O+ 🩸</option>
<option value="O-">O- 🩸</option>

  {/* Add more options as needed */}
</select>

    <select className="w-full lg:w-auto pl-2 py-2 pr-7 text-lg border-[#213842] border-b focus:outline-none bg-white text-[#213842] mb-3 md:mb-0">
      <option disabled selected>Select Zila</option>
      {/* Add options for Zila */}
      <option value="Bagerhat">Bagerhat</option>
<option value="Bandarban">Bandarban</option>
<option value="Barguna">Barguna</option>
<option value="Barishal">Barishal</option>
<option value="Bhola">Bhola</option>
<option value="Bogura">Bogura</option>
<option value="Brahmanbaria">Brahmanbaria</option>
<option value="Chandpur">Chandpur</option>
<option value="Chattogram">Chattogram (Chittagong)</option>
<option value="Chuadanga">Chuadanga</option>
<option value="Cumilla">Cumilla</option>
<option value="CoxsBazar">Cox's Bazar</option>
<option value="Dhaka">Dhaka</option>
<option value="Dinajpur">Dinajpur</option>
<option value="Faridpur">Faridpur</option>
<option value="Feni">Feni</option>
<option value="Gaibandha">Gaibandha</option>
<option value="Gazipur">Gazipur</option>
<option value="Gopalganj">Gopalganj</option>
<option value="Habiganj">Habiganj</option>
<option value="Jamalpur">Jamalpur</option>
<option value="Jessore">Jessore (Jashore)</option>
<option value="Jhalokati">Jhalokati</option>
<option value="Jhenaidah">Jhenaidah</option>
<option value="Joypurhat">Joypurhat</option>
<option value="Khagrachhari">Khagrachari</option>
<option value="Khulna">Khulna</option>
<option value="Kishoreganj">Kishoreganj</option>
<option value="Kurigram">Kurigram</option>
<option value="Kushtia">Kushtia</option>
<option value="Lakshmipur">Lakshmipur</option>
<option value="Lalmonirhat">Lalmonirhat</option>
<option value="Madaripur">Madaripur</option>
<option value="Magura">Magura</option>
<option value="Manikganj">Manikganj</option>
<option value="Meherpur">Meherpur</option>
<option value="Moulvibazar">Moulvibazar</option>
<option value="Munshiganj">Munshiganj</option>
<option value="Mymensingh">Mymensingh</option>
<option value="Naogaon">Naogaon</option>
<option value="Narail">Narail</option>
<option value="Narayanganj">Narayanganj</option>
<option value="Narsingdi">Narsingdi</option>
<option value="Natore">Natore</option>
<option value="Netrokona">Netrokona</option>
<option value="Nilphamari">Nilphamari</option>
<option value="Noakhali">Noakhali</option>
<option value="Pabna">Pabna</option>
<option value="Panchagarh">Panchagarh</option>
<option value="Patuakhali">Patuakhali</option>
<option value="Pirojpur">Pirojpur</option>
<option value="Rajbari">Rajbari</option>
<option value="Rajshahi">Rajshahi</option>
<option value="Rangamati">Rangamati</option>
<option value="Rangpur">Rangpur</option>
<option value="Satkhira">Satkhira</option>
<option value="Shariatpur">Shariatpur</option>
<option value="Sherpur">Sherpur</option>
<option value="Sirajganj">Sirajganj</option>
<option value="Sunamganj">Sunamganj</option>
<option value="Sylhet">Sylhet</option>
<option value="Tangail">Tangail</option>
<option value="Thakurgaon">Thakurgaon</option>

      {/* Add more options as needed */}
    </select>
  </div>
  <div className="flex flex-col lg:flex-row items-center justify-center">
    <select className="w-full lg:w-auto pl-2 py-2 pr-7 text-lg border-[#213842] border-b focus:outline-none bg-white text-[#213842] mb-3 md:mb-0">
    <option disabled selected>Select Age 📆</option>
      {/* Add options for age */}
      <option value="0-10">0-10</option>
      <option value="11-20">11-20</option>
      <option value="21-30">21-30</option>
      {/* Add more options as needed */}
    </select>
    <select className="w-full lg:w-auto pl-2 py-2 rounded-r-lg text-lg focus:outline-none bg-white text-[#213842]">
    <option disabled selected>Select Gender 🚻</option>
      {/* Add options for gender */}
      <option value="Male">Male 🚹</option>
      <option value="Female">Female 🚺</option>
      <option value="Other">Other 🌈</option>
      {/* Add more options as needed */}
    </select>
  </div>
    </div>

</div>

</div>


  );
};

export default FindBlood;
