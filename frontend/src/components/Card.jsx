import Button from "./Button";

const Card = ({ deskripsi, gambar, label }) => {
  return (
    <div className="flex flex-col bg-white border outline-6 outline-sky-500 shadow-2xs rounded-xl w-[300px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 border border-4 border-green-200 text-center">
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 ">
          <img src={gambar} alt="Gambar" className="w-full rounded-xl" /> 
        </h3>
        <div className="mt-4 flex justify-center text-center">
          <Button label={label} /> 
        </div>
        <p className="mt-3 text-gray-500 text-center">
          {deskripsi} 
        </p>
      </div>
    </div>
  );
};

export default Card;
