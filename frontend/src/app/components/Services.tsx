import Image from "next/image";

import { getServices, getStrapiMediaUrl } from "../services/api";

export default async function Services() {
  const services = await getServices();

  return (
    <section className="container mx-auto my-12 max-w-4xl p-4">
      <div className="p-4 text-center">
        <p className="text-sm font-semibold uppercase text-blue-600">
          O que faço de melhor
        </p>
        <h2 className="mb-2 font-bold text-blue-900">
          <span className="mr-2 font-headline text-3xl">Meus</span>
          <span className="font-handwriting text-4xl">Serviços</span>
        </h2>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {services.map(async (service, index) => (
          <div
            className="rounded-lg bg-blue-700 p-4 text-white"
            key={`service-${index}`}
          >
            <div className="mb-2">
              {service?.icon?.data?.id && (
                <Image
                  priority
                  src={
                    (await getStrapiMediaUrl(
                      service?.icon?.data?.attributes?.url
                    )) || ""
                  }
                  width={32}
                  height={32}
                  alt={service.title}
                />
              )}
            </div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
