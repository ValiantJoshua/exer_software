import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero font-roboto" >
      <div className="py-8">
        <h1 className="text-6xl font-bold ">Not<br/>
        just an Ordinary&nbsp;<br/>
          <span className="text-primary font-bold" >Tahu Bulat</span></h1>
        <p className="mt-4 text-gray-600 font-roboto font-medium">Enjoy the best street food experience in your home  </p>
      </div>

      <div className="relative ">
        <Image
          src={"/gambar5.png"}
          layout={"fill"}
          objectFit={"contain"}
          
          alt={"gambar "}
        />
      </div>
    </section>
  );
}
