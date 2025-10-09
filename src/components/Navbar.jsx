import imgLogo from "./../assets/dress.png"
function navbar() {
  return (
    <div className="static top-0  bg-[rgb(255,164,164)] py-4 px-10 border-b-3 border-pink-500 shadow-md" >

        <span className="text-2xl font-semibold text-gray-800 flex items-center">

            <img src={imgLogo} alt="logo" className="h-10 w-10 inline-block mr-2"
            />Rent A Dress</span></div>
  );
}

export default navbar;
