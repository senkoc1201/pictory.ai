import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function HowItWorks() {
  return (
    <section className="w-full py-20" style={{ background: '#ede4f6' }}>
      <div className="mx-auto rounded-3xl px-8 py-20" style={{ background: 'rgba(200,180,230,0.3)' }}>
        <div className="text-center mb-12">
          <div className="uppercase text-xs font-semibold mb-2 text-[#6b7280] tracking-wider">GET STARTED</div>
          <h2 className="text-5xl font-bold mb-4" style={{ color: '#2d3a3a', fontFamily: 'Inter, sans-serif' }}>
            Start making professional videos in minutes
          </h2>
        </div>
        <div className="flex justify-center">
          <Image
            src="https://pictory.ai/wp-content/uploads/2024/11/how-it-works-video-thumbnail.jpg"
            alt="How Pictory works"
            width={1100}
            height={500}
            className="rounded-2xl shadow-xl max-w-4xl w-full"
            />
        </div>
      </div>
    </section>
  );
}
