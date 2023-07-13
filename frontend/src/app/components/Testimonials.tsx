import { FaQuoteLeft } from "react-icons/fa";

import { getTestimonials } from "../services/api";

export default async function Testimonials() {
  const testimonials = await getTestimonials();

  return (
    <section className="container mx-auto max-w-4xl p-4 py-8">
      <div className="relative mb-4 p-4 text-center">
        <h2 className="relative z-50 mb-2 font-bold">
          <span className="mr-2 font-headline text-3xl text-gray-800">
            Depoimentos de
          </span>
          <span className="font-handwriting text-4xl text-blue-800">
            Clientes
          </span>
        </h2>
        <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
      </div>
      {testimonials.map((testimonial, index) => (
        <figure key={`testimonial-${index}`} className="my-12">
          <FaQuoteLeft className="h-6 w-6 text-gray-300" />
          <blockquote className="mb-6">
            <p className="text-2xl text-gray-900">{testimonial.body}</p>
          </blockquote>
          <figcaption className="flex items-center justify-center gap-2">
            <div className="flex items-center divide-x-2 divide-gray-200">
              <div className="pr-3 font-medium text-gray-900">
                {testimonial.customer}
              </div>
              <div className="pl-3 text-sm font-light text-gray-500">
                {testimonial.website}
              </div>
            </div>
          </figcaption>
        </figure>
      ))}
    </section>
  );
}
