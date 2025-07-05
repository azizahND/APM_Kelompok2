import CardProfile from "../components/CardProfile";
import Navs from "../components/Navs";
import Empon from "..//assets/empon.png";
import Rempah from "..//assets/rempah.png";
import Dela from "..//assets/dela.jpg";
import Nisa from "..//assets/nisa.jpg";
import Diva from "..//assets/divaa.jpg";
import Jijah from "..//assets/jijah.jpg";
import DaunBawah from '../assets/Group43.png';
import DaunAtas from '../assets/Group44.png';
import Faiz from '../assets/faiz.jpg';
import Thaya from '../assets/thaya.jpg';



function About() {
  return (
    <>
     <div className="max-w-[95rem] mx-auto">
        <Navs />
      </div>

      <div className="bg-gradient-to-t from-greenDark to-whitemilk max-w-[100rem] h-screen pb-20 mx-auto relative overflow-hidden">
        <img
          src={DaunAtas}
          alt="Daun Atas"
          className="absolute top-0 right-0 w-[400px] z-0 animate-leaf"
        />
        <img
          src={DaunBawah}
          alt="Daun Bawah"
          className="absolute bottom-0 left-0 w-[400px] z-0 animate-leaf"
        />

        <div className="mt-20 text-center relative z-10">
          <h1 className="text-greenDark text-5xl font-bold">About Us</h1>
        </div>

        <div className=" mt-10 grid  lg:grid-cols-3 gap-5 px-2 relative z-10 justify-items-center">
          <CardProfile judul={"Najla Nadiva"} src={Diva} deskripsi={"2211521006"}  />
          <CardProfile judul={"Annisa Nurul Hakim"} src={Nisa} deskripsi={"2211521007"} />
          <CardProfile judul={"Frizqya Dela Pratiwi"} src={Dela} deskripsi={"2211522003"} />
          <CardProfile judul={"Azizah Novi Delfianti"} src={Jijah} deskripsi={"2211522022"} />
          <CardProfile judul={"Athaya Clara Diva"} src={Thaya} deskripsi={"2211523009"} />
          <CardProfile judul={"Faiz Hadyan"} src={Faiz} deskripsi={"2211523023"} />
        </div>
      </div>
    </>
  );
}

export default About;
