
const Register = () => {
    const style = {
        background: ' linear-gradient(90deg, #46052D -1.59%, #46052D -1.58%, #500732 14.15%, #5E0933 31.58%, #610834 46.9%, #6A0B37 62.75%, #991747 76.48%, #B32346 93.91%)',
        height: '164px',
        color: 'white'
    }

    return (
        <div>
            <div className="flex justify-center">
                <div style={style} className=" flex items-center rounded w-11/12 pl-10">
                    <p className="text-2xl">Register As Donor</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-11/12 min-h-screen">
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 md:p-10">
                            <div>
                                <label>Full Name </label>
                                <input placeholder="Name" className="py-3 border px-3 rounded-lg w-full" type="text" name="name" id="" />
                            </div>
                            <div>
                                <label>Phone Number</label>
                                <input placeholder="Number" className="py-3 border px-3 rounded-lg w-full" type="text" name="name" id="" />
                            </div>
                            <div>
                                <label>E mail  </label>
                                <input placeholder="Mail Id " className="py-3 border px-3 rounded-lg w-full" type="text" name="name" id="" />
                            </div>
                            <div>
                                <label>Address</label>
                                <input placeholder="Address" className="py-3 border px-3 rounded-lg w-full" type="text" name="name" id="" />
                            </div>
                            <div>
                                <label>Age</label>
                                <input placeholder="Age" className="py-3 border px-3 rounded-lg w-full" type="text" name="name" id="" />
                            </div>
                            <div>
                                <label>Blood Group</label>
                                <select className="py-3 px-3 border rounded-lg w-full" type="text" name="name" id="" >
                                    <option selected disabled>Selected Blood Group 🩸</option>
                                    <option value="A+">A+ 🩸</option>
                                    <option value="A-">A- 🩸</option>
                                    <option value="B+">B+ 🩸</option>
                                    <option value="B-">B- 🩸</option>
                                    <option value="AB+">AB+ 🩸</option>
                                    <option value="AB-">AB- 🩸</option>
                                    <option value="O+">O+ 🩸</option>
                                    <option value="O-">O- 🩸</option>
                                </select>
                            </div>
                            <div>
                                <label>District</label>
                                <select className="py-3 px-3 border rounded-lg w-full" name="name" id="">
                                    <option disabled selected>Select Zila</option>
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
                                </select>
                            </div>
                            <div>
                                <label>State</label>
                                <select className="py-3 border px-3 rounded-lg w-full" type="text" name="name" id="" >
                                    <option selected disabled>select state</option>
                                    <option value="Barisal">Barisal Division</option>
                                    <option value="Chittagong">Chittagong Division</option>
                                    <option value="Dhaka">Dhaka Division</option>
                                    <option value="Khulna">Khulna Division</option>
                                    <option value="Rajshahi">Rajshahi Division</option>
                                    <option value="Rangpur">Rangpur Division</option>
                                    <option value="Sylhet">Sylhet Division	</option>
                                </select>
                            </div>
                            <div>
                                <label>PinCode</label>
                                <input placeholder="Pincode" className="py-3 border px-3 rounded-lg w-full" type="text" name="name" id="" />
                            </div>
                            <div>
                                <label>Last Donation</label>
                                <input  className="py-3 px-3 border rounded-lg w-full" type="date" name="name" id="" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;