"use client";

import emailjs from "@emailjs/browser";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { FaSpinner, FaWhatsapp } from "react-icons/fa";
import {
  HiCheckCircle,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2";

import Author from "../interfaces/Author";

import { getAuthor } from "../services/api";

const AuthorContact = function ({
  icon,
  title,
  url,
  description,
}: {
  icon: React.ReactElement;
  title: string;
  url: string;
  description: string;
}) {
  return (
    <div className="mb-4 flex items-center gap-4 rounded-lg border border-dashed border-gray-400 p-4">
      {icon}
      <div>
        <p className="font-headline font-semibold">{title}</p>
        <a
          href={url}
          target="_blank"
          className="text-gray-300 underline underline-offset-2"
        >
          {description}
        </a>
      </div>
    </div>
  );
};

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [author, setAuthor] = useState<Author>();

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs.sendForm("service_xxx", "template_xxx", form.current, "xxx").then(
      () => {
        setSuccess(true);
        setLoading(false);
      },
      (error) => {
        setError(true);
        setLoading(false);
        console.error(error);
      }
    );
  };

  useEffect(() => {
    (async () => {
      setAuthor(await getAuthor());
    })();
  }, []);

  return (
    <section id="contact" className="bg-blue-700 text-white">
      <div className="container mx-auto max-w-4xl p-4 py-8">
        <div className="mb-6">
          <h2 className="z-50 mb-2">
            <span className="mr-2 font-headline text-3xl font-semibold">
              Fale
            </span>
            <span className="font-handwriting text-4xl">Comigo</span>
          </h2>
          <p className="text-sm">
            Entre em contato por formulário ou WhatsApp, com certeza irei poder
            te ajudar.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="basis-2/3">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="mb-2 block ps-4 font-headline font-semibold"
                >
                  Mensagem:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="h-36 w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                  required
                />
              </div>
              <div className="mb-6 flex flex-col gap-4 md:flex-row">
                <div className="flex-grow">
                  <label
                    htmlFor="fullName"
                    className="mb-2 block ps-4 font-headline font-semibold"
                  >
                    Seu nome:
                  </label>
                  <input
                    className="w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                  />
                </div>
                <div className="flex-grow">
                  <label
                    htmlFor="email"
                    className="mb-2 block ps-4 font-headline font-semibold"
                  >
                    Seu email:
                  </label>
                  <input
                    className="w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="button flex items-center gap-2 text-blue-700"
                  disabled={loading}
                >
                  {loading && <FaSpinner className="h-4 w-4 animate-spin" />}
                  {success && <HiCheckCircle className="h-4 w-4" />}
                  Enviar mensagem
                </button>

                {error && (
                  <p className="mt-2">
                    Ocorreu um erro ao enviar a mensagem, tente novamente mais
                    tarde.
                  </p>
                )}
              </div>
            </form>
          </div>
          <div className="basis-1/3">
            {author && (
              <>
                <AuthorContact
                  key="contact-mobile"
                  icon={<FaWhatsapp className="h-10 w-10" />}
                  title="WhatsApp"
                  url={`https://wa.me/${author.mobile}?text=Olá...`}
                  description={author.mobile}
                />
                <AuthorContact
                  key="contact-email"
                  icon={<HiOutlineEnvelope className="h-10 w-10" />}
                  title="E-mail"
                  url={`mailto:${author.email}?subject=Olá...`}
                  description={author.email}
                />
                <AuthorContact
                  key="contact-address"
                  icon={<HiOutlineMapPin className="h-10 w-10" />}
                  title="Endereço"
                  url={`http://maps.google.com/maps?z=12&t=m&q=${encodeURI(
                    author.address
                  )}`}
                  description={author.address}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
