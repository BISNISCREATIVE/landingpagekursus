import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { prices } from '../data/prices';

const LYNK_ID_URL = 'https://lynk.id/privatorid'; // Ganti dengan link pembayaran lynk.id yang benar

const Daftar = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [hp, setHp] = useState('');
  const [paket, setPaket] = useState(prices[0].title);
  const [step, setStep] = useState<'form' | 'invoice'>('form');
  const [nominal, setNominal] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selected = prices.find(p => p.title === paket);
    setNominal(selected ? selected.price : 0);
    // 1. Kirim ke WhatsApp
    const pesan = `Halo, saya ingin mendaftar training.\nNama: ${nama}\nEmail: ${email}\nNo HP: ${hp}\nPaket: ${paket}`;
    const waUrl = `https://wa.me/6282229884100?text=${encodeURIComponent(pesan)}`;
    window.open(waUrl, '_blank');
    // 2. Buka email default user
    const subject = encodeURIComponent('Pendaftaran Training privator.id');
    const body = encodeURIComponent(`Halo Admin privator.id,%0D%0A%0D%0ASaya ingin mendaftar training.%0D%0ANama: ${nama}%0D%0AEmail: ${email}%0D%0ANo HP: ${hp}%0D%0APaket: ${paket}`);
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank');
    // 3. Redirect ke lynk.id
    setTimeout(() => {
      window.open(LYNK_ID_URL, '_blank');
      setStep('invoice');
    }, 1000);
  };

  if (step === 'invoice') {
    return (
      <>
        <Header />
        <div className="max-w-md mx-auto bg-white p-8 rounded shadow mt-8 border border-primary text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Invoice Pembayaran</h2>
          <div className="mb-2">Terima kasih, <b>{nama}</b>!</div>
          <div className="mb-2">Silakan lakukan pembayaran sejumlah:</div>
          <div className="text-3xl font-bold text-primary mb-4">Rp{nominal.toLocaleString('id-ID')}</div>
          <div className="mb-4">Setelah pembayaran, konfirmasi ke WhatsApp admin untuk aktivasi kelas.</div>
          <div className="text-green-600 font-semibold">Terima kasih telah mendaftar di privator.id!</div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow mt-8 border border-primary">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">Form Pendaftaran</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            value={nama}
            onChange={e => setNama(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="No HP"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            value={hp}
            onChange={e => setHp(e.target.value)}
            required
          />
          <select
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            value={paket}
            onChange={e => setPaket(e.target.value)}
            required
          >
            {prices.map((p) => (
              <option key={p.title} value={p.title}>{p.title} (Rp{p.price.toLocaleString('id-ID')})</option>
            ))}
          </select>
          <button type="submit" className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-primary-dark transition">Kirim ke WhatsApp & Email</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Daftar;
export {}; 