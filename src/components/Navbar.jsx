import imgLogo from "./../assets/dress.png"
function navbar() {
  return (
    <div className="sticky top-0  bg-[rgb(255,164,164)] py-4 px-10 border-b-3 border-pink-500 shadow-md z-50" >

        <span className="text-5xl  font-extrabold text-pink-600 flex items-center">

            <img src={imgLogo} alt="logo" className="h-10 w-10  inline-block mr-2"
            />  DOR</span> <span className="text-center p-12"> Dress on  Rent </span> </div>
  );
}

export default navbar;
