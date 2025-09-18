"use client";

import Image from "next/image";
import data from "@/data/por.json"; // your JSON file

export default function LeadershipSection() {
  return (
    <main className="bg-[#f7f6f0] min-h-screen py-12 px-6">
      {data.positions.map((pos, idx) => (
        <article
          key={idx}
          className="max-w-5xl mx-auto mb-16 border-b border-black pb-12"
        >
          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-snug">
            {pos.title} — {pos.organization}
          </h1>

          {/* Subheader / Time */}
          <div className="flex justify-between items-center text-sm text-gray-600 font-serif italic mb-6">
            <span>{pos.duration}</span>
            <span>{pos.status}</span>
          </div>

          {/* Main Image */}
          <div className="mb-6">
            <Image
              src={pos.images.mainHeader}
              alt={pos.title}
              width={1000}
              height={600}
              className="w-full object-cover border border-black"
            />
            <p className="text-xs text-gray-600 font-serif mt-2">
              {pos.organization} — featured in role highlights
            </p>
          </div>

          {/* Body in 2 columns */}
          <div className="grid md:grid-cols-2 gap-8 text-sm font-serif leading-relaxed text-gray-800">
            {pos.sections.map((section, i) => (
              <div key={i} className="space-y-2">
                <h3 className="font-bold uppercase text-black text-base mb-1">
                  {section.heading}
                </h3>
                <p>{section.description}</p>
                {/* Optional supporting images */}
                {i === 0 && (
                  <Image
                    src={pos.images.image2}
                    alt={`${section.heading}`}
                    width={500}
                    height={300}
                    className="w-full border border-black mt-2"
                  />
                )}
                {i === 1 && (
                  <Image
                    src={pos.images.image3}
                    alt={`${section.heading}`}
                    width={500}
                    height={300}
                    className="w-full border border-black mt-2"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Extra impact stats (Owlett only) */}
          {pos.impact && (
            <div className="mt-6 text-xs text-gray-700 font-serif">
              <p>
                <span className="font-bold">Impact: </span>
                {pos.impact.content}
              </p>
              <p>
                <span className="font-bold">Recognition: </span>
                {pos.impact.recognition}
              </p>
            </div>
          )}
        </article>
      ))}
    </main>
  );
}
