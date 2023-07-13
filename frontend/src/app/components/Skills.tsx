import { format } from "date-fns";
import Image from "next/image";
import { HiAcademicCap, HiCodeBracketSquare } from "react-icons/hi2";

import { getEducations, getSkills, getStrapiMediaUrl } from "../services/api";

export default async function Skills() {
  const educations = await getEducations();
  const skills = await getSkills();

  return (
    <section className="rounded-br-[80px] bg-gray-300 md:rounded-br-[180px]">
      <div className="container mx-auto max-w-4xl p-4 py-12">
        <div className="relative mb-4 p-4 text-center">
          <h2 className="relative z-50 mb-2 font-bold">
            <span className="mr-2 font-headline text-3xl text-gray-800">
              Educação &
            </span>
            <span className="font-handwriting text-4xl text-blue-800">
              Skills
            </span>
          </h2>
          <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
              <HiAcademicCap className="h-8 w-8 text-blue-600" />
              Educação
            </h3>

            {educations.map((education, index) => (
              <div
                key={`education-${index}`}
                className="mb-2 rounded-lg bg-white p-4 text-sm text-gray-900"
              >
                <p>
                  <span className="font-bold">{education.course}</span>,{" "}
                  {education.school}
                </p>
                <p className="text-xs">
                  {format(
                    new Date(`${education.startAt} 00:00:00`),
                    "d 'de' MMM 'de' yyyy"
                  )}
                  {" - "}
                  {education.inProgress ? (
                    <span className="text-gray-400">Atualmente</span>
                  ) : (
                    format(
                      new Date(`${education.endAt} 00:00:00`),
                      "d 'de' MMM 'de' yyyy"
                    )
                  )}
                </p>
              </div>
            ))}
          </div>
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
              <HiCodeBracketSquare className="h-8 w-8 text-blue-600" />
              Skills
            </h3>

            <div className="grid grid-cols-1 gap-4 font-semibold md:grid-cols-2">
              {skills.map(async (skill, index) => (
                <div
                  key={`skill-${index}`}
                  className="flex flex-row items-center gap-2 md:flex-col md:items-start"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2">
                    {skill?.logo?.data?.id && (
                      <Image
                        priority
                        src={
                          (await getStrapiMediaUrl(
                            skill?.logo?.data?.attributes?.url
                          )) || ""
                        }
                        width={32}
                        height={32}
                        alt={skill.title}
                      />
                    )}
                  </div>
                  <div className="w-full flex-grow">
                    <h4 className="font-headline text-gray-900 mb-1">
                      {skill.title}
                    </h4>
                    <div className="h-2.5 w-full rounded-full bg-white">
                      <div
                        className="h-2.5 rounded-full bg-blue-600"
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
