import { useState } from "react";
import Gamings from "./assets/gamings.mp4";
import Gambar2 from "./assets/gambar2.png";
import Andre from "./assets/andre.gif";
import Happy from "./assets/Happy.gif";
import hai from "./assets/hai.gif";
import gif1 from "./assets/gif1.gif";


export default function App(){
const [nama,setNama] = useState('');
const [output,setOutput] = useState<Record<string, number>>({});

  const hasils = [
      <div className="p-4 place-items-center text-center shadow-lg bg-neutral-950 md:w-140 w-110 rounded-3xl mt-5 mb-5 mx-auto ">
        <h1 className="text-yellow-300 md:text-3xl text-2xl font-bold">Kamu {nama} terdeteksi 80% Karbit</h1>
      <p className="text-yellow-300 md:text-xl text-lg mb-3 font-semibold">Pergi sana bit karbit </p>
           <img src={gif1} className="mx-auto size-55" alt="" />
      </div>,

      <div className="p-4 place-items-center text-center shadow-lg bg-neutral-950 md:w-140 w-100 rounded-3xl mt-5 mb-5 mx-auto ">
      <h1 className="text-yellow-300 text-3xl font-bold">Kamu {nama} terdeteksi 100% Karbit</h1>
      <p className="text-yellow-300 text-xl mb-3 font-semibold">Karbit bet jir </p>
           <img src={Gambar2} className="mx-auto size-55" alt="" />
      </div>,
      <div className="p-4 place-items-center text-center shadow-lg bg-neutral-950 md:w-140 w-100 rounded-3xl mt-5 mb-5 mx-auto ">
      <h1 className="text-yellow-300 text-3xl font-bold">Kamu {nama} terdeteksi 25% Karbit</h1>
      <p className="text-yellow-300 text-xl mb-3 font-semibold">Aman lah ya </p>
           <img src={hai} className="mx-auto size-55" alt="" />

      </div>,
      <div className="p-4 place-items-center text-center shadow-lg bg-neutral-950 md:w-140 w-100 rounded-3xl mt-5 mb-5 mx-auto ">
      <h1 className="text-yellow-300 text-3xl font-bold">Kamu {nama} terdeteksi 60% Karbit</h1>
      <p className="text-yellow-300 text-xl mb-3 font-semibold">Mulai dah karbitnya </p>
           <img src={Andre} className="mx-auto size-55" alt="" />

      </div>,
      <div className="p-4 place-items-center text-center shadow-lg bg-neutral-950 md:w-140 w-100 rounded-3xl mt-5 mb-5 mx-auto ">
      <h1 className="text-yellow-300 text-3xl font-bold">Kamu {nama} terdeteksi 73% Karbit</h1>
      <p className="text-yellow-300 text-xl mb-3 font-semibold">Duh kebangetan ini mah </p>
           <img src={hai} className="mx-auto size-55" alt="" />

      </div>,
      <div className="p-4 place-items-center text-center shadow-lg bg-neutral-950 md:w-140 w-100 rounded-3xl mt-5 mb-5 mx-auto ">
      <h1 className="text-yellow-300 text-3xl font-bold">Kamu {nama} terdeteksi 0% Karbit</h1>
      <p className="text-yellow-300 text-xl mb-3 font-semibold"> Selamat anda bukan seorang karbit </p>
           <img src={Happy} className="mx-auto size-55" alt="" />

      </div>,


  ];

  const handleSubmit = () => {
     if(nama.length < 3 ) {
  alert("Nama terlalu pendek");
} else if(nama.length > 10) {
  alert("Nama terlalu panjang");
}
 else if(!output[nama]) {
 const randomIndex = Math.floor(Math.random() * hasils.length);
    setOutput((prev) => ({
      ...prev, 
      [nama] : randomIndex
    }));
    
  }
    }
  
  
  return (
    <>
    <div className="relative min-h-screen overflow-hidden">
      <video autoPlay loop muted className="fixed inset-0 w-full h-full object-cover ">
        <source  src={Gamings}/>
      </video>
      <div className="relative z-10 text-center place-content-center justify-center items-center min-h-screen">
        <div className="">


          <h1 className="text-yellow-300 font-extrabold md:text-6xl text-4xl mb-3">Seberapa Karbit Kamu?</h1>
          <p className="text-yellow-300 font-bold text-2xl">Tulis Namamu disini</p>
          <div className="pt-5 pb-5">
      <input type="text" className= "border border-yellow-300 w-100 p-3 rounded-2xl" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Masukkan namamu"/>

          </div>
      <button onClick={handleSubmit} className="bg-yellow-300 font-bold rounded-2xl border w-100 border-black text-black p-3">Cek</button>
         {output[nama] !== undefined && hasils[output[nama]]}

        
        </div>
        
        
        

      </div>
      


      </div>
      </>
  )
}
