const CardProfile = ({ judul, deskripsi, buttons = [], src }) => {
  return (
    <div className="flex flex-col bg-white border-2 border-greenDark shadow-2xs rounded-xl w-[15rem] h-[20rem] overflow-hidden">
      <img
        src={src}
        alt="Card Image"
        className="w-full h-3/4 object-cover rounded-t-xl"
      />
      <div className="p-4 md:p-5 text-center pb-5">
        <h3 className="text-lg font-bold text-gray-800 text-3xl">{judul}</h3>
        <p className="mt-1 text-gray-500 text-xl pb-1 mb-10">{deskripsi}</p>
      </div>
    </div>
  );
};

export default CardProfile;
