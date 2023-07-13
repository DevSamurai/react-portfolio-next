import classNames from "classnames";
import { differenceInYears } from "date-fns";

import { getAuthor, getStrapiMediaUrl } from "../services/api";

export default async function About() {
  const { bio, name, birthdate, mobile, email, address, available, photo } =
    await getAuthor();

  return (
    <section className="container mx-auto my-4 max-w-5xl p-4">
      <div className="relative p-4 text-center">
        <h2 className="relative z-50 mb-2 font-bold text-blue-900">
          <span className="mr-2 font-headline text-3xl">Sobre</span>
          <span className="font-handwriting text-4xl">Mim</span>
        </h2>
        {bio && <p className="relative text-sm text-gray-600">{bio}</p>}
        <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-100/40" />
      </div>

      <div className="mx-auto mt-20 max-w-lg">
        <div className="relative w-full rounded-lg bg-blue-100 p-4 ps-20 md:h-64 md:ps-48">
          <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
            <p className="font-handwriting text-lg font-bold">Olá,</p>
            <p>
              <span className="mr-1">Meu nome é</span>
              <span className="font-headline font-bold uppercase text-blue-900">
                {name}
              </span>
            </p>

            <table className="mt-4 w-full text-sm">
              <tbody>
                {birthdate && (
                  <tr>
                    <td className="font-headline font-bold uppercase text-blue-900">
                      Idade:
                    </td>
                    <td>
                      {differenceInYears(new Date(), new Date(birthdate))}
                    </td>
                  </tr>
                )}

                {mobile && (
                  <tr>
                    <td className="font-headline font-bold uppercase text-blue-900">
                      Celular:
                    </td>
                    <td>
                      <a
                        href={`tel:${mobile}`}
                        className="underline hover:text-blue-800"
                      >
                        {mobile}
                      </a>
                    </td>
                  </tr>
                )}

                {email && (
                  <tr>
                    <td className="font-headline font-bold uppercase text-blue-900">
                      Email:
                    </td>
                    <td>
                      <a
                        href={`mailto:${email}`}
                        className="underline hover:text-blue-800"
                      >
                        {email}
                      </a>
                    </td>
                  </tr>
                )}

                {address && (
                  <tr>
                    <td className="font-headline font-bold uppercase text-blue-900">
                      Endereço:
                    </td>
                    <td>
                      <a
                        href={`http://maps.google.com/maps?z=12&t=m&q=${encodeURI(
                          address
                        )}`}
                        target="_blank"
                        className="underline hover:text-blue-800"
                      >
                        {address}
                      </a>
                    </td>
                  </tr>
                )}

                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Disponível:
                  </td>
                  <td>
                    <span className="relative flex h-3 w-3">
                      <span
                        className={classNames(
                          "absolute inline-flex h-full w-full animate-ping rounded-full  opacity-75",
                          {
                            "bg-green-400": available,
                            "bg-red-400": !available,
                          }
                        )}
                      ></span>
                      <span
                        className={classNames(
                          "relative inline-flex h-3 w-3 rounded-full bg-green-500",
                          {
                            "bg-green-400": available,
                            "bg-red-400": !available,
                          }
                        )}
                      ></span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {photo && (
            <div
              className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-cover bg-center bg-no-repeat md:-left-12 md:-top-12 md:h-72 md:w-56"
              style={{
                backgroundImage: `url(${
                  (await getStrapiMediaUrl(
                    photo?.data?.attributes?.formats?.medium?.url
                  )) || ""
                })`,
              }}
            ></div>
          )}
        </div>
      </div>
    </section>
  );
}
