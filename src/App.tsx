import { useState } from "react";


export default function App(){
const [nama,setNama] = useState('');
const [output,setOutput] = useState<Record<string, number>>({});

  const hasils = [
      <div className="p-4 place-items-center text-center shadow-lg bg-neutral-950 md:w-140 w-110 rounded-3xl mt-5 mb-5 mx-auto ">
        <h1 className="text-yellow-300 md:text-3xl text-2xl font-bold">Kamu {nama} terdeteksi 80% Karbit</h1>
      <p className="text-yellow-300 md:text-xl text-lg mb-3 font-semibold">Pergi sana bit karbit </p>
           <img src="./src/assets/gif1.gif" className="mx-auto size-55" alt="" />
      </div>,

      <div className="p-4 place-items-center text-center shadow-lg bg-neutral-950 w-140 rounded-3xl mt-5 mb-5 mx-auto ">
      <h1 className="text-yellow-300 text-3xl font-bold">Kamu {nama} terdeteksi 100% Karbit</h1>
      <p className="text-yellow-300 text-xl mb-3 font-semibold">Karbit bet jir </p>
           <img src="./src/assets/gambar2.png" className="mx-auto size-55" alt="" />
      </div>,
      <div className="p-4 place-items-center text-center shadow-lg bg-neutral-950 w-140 rounded-3xl mt-5 mb-5 mx-auto ">
      <h1 className="text-yellow-300 text-3xl font-bold">Kamu {nama} terdeteksi 25% Karbit</h1>
      <p className="text-yellow-300 text-xl mb-3 font-semibold">Aman lah ya </p>
           <img src="./src/assets/Hai Karbit GIF.gif" className="mx-auto size-55" alt="" />

      </div>,
       <div className="p-4 place-items-center text-center shadow-lg bg-neutral-950 w-140 rounded-3xl mt-5 mb-5 mx-auto ">
      <h1 className="text-yellow-300 text-3xl font-bold">Kamu {nama} terdeteksi 60% Karbit</h1>
      <p className="text-yellow-300 text-xl mb-3 font-semibold">Mulai dah karbitnya </p>
           <img src="./src/assets/Andreasruzuu GIF.gif" className="mx-auto size-55" alt="" />

      </div>,
       <div className="p-4 place-items-center text-center shadow-lg bg-neutral-950 w-140 rounded-3xl mt-5 mb-5 mx-auto ">
      <h1 className="text-yellow-300 text-3xl font-bold">Kamu {nama} terdeteksi 73% Karbit</h1>
      <p className="text-yellow-300 text-xl mb-3 font-semibold">Duh kebangetan ini mah </p>
           <img src="./src/assets/gambar3.png" className="mx-auto size-55" alt="" />

      </div>,
       <div className="p-4 place-items-center text-center shadow-lg bg-neutral-950 w-140 rounded-3xl mt-5 mb-5 mx-auto ">
      <h1 className="text-yellow-300 text-3xl font-bold">Kamu {nama} terdeteksi 0% Karbit</h1>
      <p className="text-yellow-300 text-xl mb-3 font-semibold"> Selamat anda bukan seorang karbit </p>
           <img src="./src/assets/Happy Cheer GIF.gif" className="mx-auto size-55" alt="" />

      </div>,


  ];

  const handleSubmit = () => {
     if(nama.length < 3 ) {
  alert("nama terlalu pendek oi");
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
      <video autoPlay loop muted playsInline className="fixed inset-0 w-full h-full object-cover ">
        <source  src="{`${import.meta.env.BASE_URL} Gamings Background.mp4`}"/>
      </video>
      <div className="relative z-10 text-center place-content-center justify-center items-center min-h-screen">
        <div className="">


          <h1 className="text-yellow-300 font-extrabold md:text-6xl text-4xl">Seberapa Karbit Kamu?</h1>
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
