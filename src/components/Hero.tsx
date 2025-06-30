import Image from 'next/image';

const Hero = () => (
  <section className="bg-primary text-white py-12">
    <div className="container mx-auto flex flex-col md:flex-row items-center px-4 gap-8">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Belajar Bahasa Inggris & Jerman dengan Mudah</h1>
        <p className="mb-6 text-lg">Gabung bersama privator.id dan tingkatkan kemampuan bahasa asingmu dengan trainer profesional dan harga terjangkau!</p>
        <a href="#price" className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition">Lihat Harga</a>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-[80vw] max-w-xs md:max-w-sm aspect-[4/5] relative group">
          <Image 
            src="/images/privator.jpeg" 
            alt="Hero" 
            fill 
            className="rounded-xl shadow-lg object-cover transition-transform duration-500 group-hover:skew-y-3" 
            priority 
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero; 