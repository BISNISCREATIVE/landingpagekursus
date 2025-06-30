import { prices } from '../data/prices';
import Link from 'next/link';

const Price = () => (
  <section id="price" className="bg-white py-12">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-primary mb-8">Pilih Paket Belajarmu</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {prices.map((item) => (
          <div key={item.title} className="border border-primary rounded-lg p-6 shadow w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-2xl font-bold text-primary mb-4">Rp{item.price.toLocaleString('id-ID')}</p>
            <Link href="/daftar">
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition w-full">Daftar Sekarang</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Price; 