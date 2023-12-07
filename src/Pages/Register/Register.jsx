
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
                <div className="md:w-11/12 min-h-screen bg-zinc-300">
                    <form>
                        <div>
                            <div>
                                <label>User Name:</label><br></br>
                                <input className="md:w-96 h-" type="text" name="name" id="" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;