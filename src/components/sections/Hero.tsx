'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  const userTypes = [
    "EVERYONE!",
    "YouTubers",
    "Course Creators",
    "Business Professionals",
    "Content Creators",
    "Teachers",
    "Content Marketers",
    "Digital Marketers",
    "Education Professionals",
    "L & D Professionals",
    "Social Media Managers",
    "Enterprise Teams"
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#f4f2fb]">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
              The easiest way to create professional videos for
            </h1>

            <div className="relative h-14 overflow-hidden mb-4">
              {userTypes.map((type, index) => (
                <div
                  key={type}
                  className="absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center"
                  style={{
                    opacity: index === 0 ? 1 : 0,
                    animation: `fadeInOut 12s linear ${index}s infinite`
                  }}
                >
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
                    {type}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-lg mb-6 text-muted-foreground">
              Create engaging videos in minutes using the power of AI.
            </p>

            <div className="space-y-4">
              <Link href="https://app.pictory.ai/signup" passHref>
                <Button className="btn-primary text-base h-12 px-8">
                  Get started for FREE
                </Button>
              </Link>

              <p className="text-sm text-muted-foreground">
                No video editing experience required.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://pictory.ai/wp-content/uploads/2024/11/1080x620a-scaled-mobile.jpg"
              alt="Pictory AI Interface"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />

            {/* Floating rating badges */}
            <div className="grid grid-cols-4 gap-3 mt-6">
              <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                <div className="text-2xl font-bold text-gray-800">4.8</div>
                <div className="text-xs text-muted-foreground">G2</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                <div className="text-2xl font-bold text-gray-800">4.7</div>
                <div className="text-xs text-muted-foreground">Capterra</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                <div className="text-2xl font-bold text-gray-800">4.8</div>
                <div className="text-xs text-muted-foreground">Feefo</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                <div className="text-2xl font-bold text-gray-800">4.7</div>
                <div className="text-xs text-muted-foreground">Software Advice</div>
              </div>
            </div>
          </div>
        </div>

        {/* Client logos */}
        <div className="mt-16">
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-80">
            <Image
              src="https://ext.same-assets.com/4065652609/3334297056.png"
              alt="Pearson"
              width={120}
              height={40}
            />
            <Image
              src="https://ext.same-assets.com/4065652609/68373111.png"
              alt="Kajabi"
              width={120}
              height={40}
            />
            <Image
              src="https://ext.same-assets.com/4065652609/4149719955.png"
              alt="Royal Canin"
              width={120}
              height={40}
            />
            <Image
              src="https://ext.same-assets.com/4065652609/480200632.png"
              alt="Colibri Group"
              width={120}
              height={40}
            />
            <Image
              src="https://ext.same-assets.com/4065652609/1899525865.png"
              alt="Coursera"
              width={120}
              height={40}
            />
            <Image
              src="https://ext.same-assets.com/4065652609/2002441009.png"
              alt="D2L"
              width={120}
              height={40}
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInOut {
          0%, 8.33% { opacity: 1; }
          8.34%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
