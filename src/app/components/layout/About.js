export default function About() {
  return (
    <section  id="About" className="relative overflow-hidden">
      <div className="absolute h-full left-0 right-0 w-full justify-start -z-1">
        <div className="absolute -right-10 -top-8 text-left -z-1 ">
          <img src={'/gambar6.png'} className="w-56 h-56  "></img>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 text-center mb-10 mb:md-20">
        <h2 className="text-primary font-bold text-4xl mt-4 pt-5 underline-offset-1">About Us</h2>
      </div>

      <div className="container space-y-10 xl:space-y-0">
        <div className="flex flex-col items-center lg:flex-row gap-5">
          <div className="w-full lg:w-1/2">
            <img
              className="rounded-full mr-8 h-72"
              src="/gambar7.jpeg"
              alt="About Imag "
            />
          </div>

          <div className="w-full-lg:w-1/2">
            <div className="space-y-5">
              <div className=" bg-yellow-200 rounded-lg max-w py-1 -z-15">
                <h3 className="text-xl md:text-2xl xl:text-3xl px-3 font-semibold">Our History</h3>
              </div>
              <p className="max-w-2xl font-serif text-justify">
                Toko Tahu Bulat kami berdiri sejak tahun 2015 dengan tujuan
                sederhana: menghadirkan camilan khas Indonesia yang lezat dan
                terjangkau untuk semua orang. Berawal dari resep keluarga yang
                diwariskan turun-temurun, kami mulai menjual Tahu Bulat di
                 gerobak kecil di pinggir jalan. Dengan semangat dan inovasi,
                kami terus mengembangkan rasa. Sejak saat itu, toko kami tumbuh
                menjadi tempat di mana cita rasa berkumpul, membawa kebahagiaan
                dalam setiap gigitannya.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container space-y-10 xl:space-y-0">
        <div className="flex flex-col items-center lg:flex-row-reverse gap-5">
          <div className="w-full lg:w-1/2">
            <img className="rounded-md"src="/gambar8.jpeg" alt="About Image " />
          </div>

          <div className="w-full-lg:w-1/2">
            <div className="space-y-5">
            <div className=" bg-yellow-200 rounded-lg max-w py-1 left-0">
              <h3 className="text-xl md:text-2xl xl:text-3xl px-3 font-semibold">Our Vision</h3>
            </div>
              <p className="max-w-2xl font-serif text-justify">
                Kami memiliki visi untuk membawa Tahu Bulat, snack khas
                Indonesia, dikenal di seluruh dunia. Dengan rasa yang sederhana
                namun menggugah selera, Tahu Bulat adalah salah satu makanan dari 
                budaya kuliner Indonesia. Melalui inovasi rasa, kualitas
                terbaik, dan semangat berbagi, kami ingin menjadikan Tahu Bulat
                tidak hanya sebagai camilan, tetapi juga sebagai cara untuk
                memperkenalkan kehangatan dan keragaman budaya Indonesia ke
                berbagai negara di dunia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
