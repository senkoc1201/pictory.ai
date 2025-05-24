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
    <section className="py-12 md:py-16 lg:py-20" style={{ background: '#f5edfa' }}>
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight" style={{ color: '#2d3a3a' }}>
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

            <p className="text-lg mb-6" style={{ color: '#4b5563' }}>
              Create engaging videos in minutes using the power of AI.
            </p>

            <div className="space-y-4">
              <Link href="https://app.pictory.ai/signup" passHref>
                <Button style={{ background: '#a259e6', color: '#fff', boxShadow: '0 2px 8px #a259e633' }} className="text-base h-12 px-8 rounded-full">
                  Get started for FREE
                </Button>
              </Link>

              <p className="text-sm" style={{ color: '#4b5563' }}>
                No video editing experience required.
              </p>
            </div>
          </div>

          <div className="relative">
            <iframe
              src="https://customer-wtn437ryaa2ata4r.cloudflarestream.com/f1708e856a1eb058bb6f2d03dbe96f9b/iframe?preload=true&loop=true&autoplay=true&muted=true&poster=https%3A%2F%2Fcustomer-wtn437ryaa2ata4r.cloudflarestream.com%2Fc3314d7e93bade10c263219d5eb6c3dd%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
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
        .gradient-text {
          color: #a259e6;
        }
      `}</style>
    </section>
  );
}
