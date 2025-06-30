import { testimonials } from '../data/testimonials';

const Testimonial = () => (
  <section className="bg-blue-50 py-12">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-primary mb-8">Apa Kata Peserta?</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {testimonials.map((item, idx) => (
          <div key={idx} className="bg-white border border-primary rounded-lg p-6 shadow w-full md:w-1/3">
            <div className="mb-2 font-semibold text-primary">{item.name}</div>
            <div className="mb-2 text-gray-700">"{item.comment}"</div>
            <div className="text-yellow-400">
              {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonial; 