import React from "react";

const ratings = [
  { value: "4.8", label: "G2" },
  { value: "4.7", label: "Capterra" },
  { value: "4.8", label: "feefo" },
  { value: "4.7", label: "Software Advice." },
];

function Star() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="#2d2d2d" xmlns="http://www.w3.org/2000/svg" className="inline-block mx-0.5">
      <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
    </svg>
  );
}

export default function RatingsBar() {
  return (
    <div style={{ background: '#f3ecfc' }} className="w-full py-8">
      <div className="flex justify-center gap-16">
        {ratings.map((r, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-4xl font-bold text-[#2d2d2d]">{r.value}</span>
            <div className="flex mt-1 mb-1">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} />
              ))}
            </div>
            <span className="text-sm text-[#2d2d2d] font-semibold mt-1">{r.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 