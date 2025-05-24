import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    label: "TEXT TO VIDEO",
    title: "Text to Video in Minutes",
    description: "Transform your blog posts, articles, and scripts into engaging videos with AI-powered automation.",
    video: "https://customer-wtn437ryaa2ata4r.cloudflarestream.com/d2857a59afd6542b7880e05b60e38d8a/iframe?preload=true&autoplay=true&poster=https%3A%2F%2Fcustomer-wtn437ryaa2ata4r.cloudflarestream.com%2Fd2857a59afd6542b7880e05b60e38d8a%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&muted=true", // Example video URL
    link: "/text-to-video"
  },
  {
    label: "URL TO VIDEO",
    title: "Turn any URL into Video",
    description: "Convert any web page into a captivating video with just one click. Perfect for sharing online content in a more engaging format.",
    video: "https://customer-wtn437ryaa2ata4r.cloudflarestream.com/b36da4b332e40fe8e1d4ea1966d8bb18/iframe?preload=true&autoplay=true&poster=https%3A%2F%2Fcustomer-wtn437ryaa2ata4r.cloudflarestream.com%2Fb36da4b332e40fe8e1d4ea1966d8bb18%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&muted=true", // Example video URL
    link: "/url-to-video"
  },
  {
    label: "LONG-FORM TO SHORT",
    title: "Transform Long-Form Content into Engaging Short Videos",
    description: "Break down lengthy content into digestible, shareable short-form videos ideal for social media platforms.",
    video: "https://customer-wtn437ryaa2ata4r.cloudflarestream.com/4c65c26714297d57a22d1ee8a25595f7/iframe?preload=true&autoplay=true&poster=https%3A%2F%2Fcustomer-wtn437ryaa2ata4r.cloudflarestream.com%2F4c65c26714297d57a22d1ee8a25595f7%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&muted=true", // Example video URL
    link: "/long-form-to-short-videos"
  },
  {
    label: "ADD CAPTIONS",
    title: "Add Captions for Increased Reach and Engagement",
    description: "Auto-generate accurate captions and subtitles in multiple languages to make your videos accessible to wider audiences.",
    video: "https://customer-wtn437ryaa2ata4r.cloudflarestream.com/a742db09983a5dffd8fae47e6bd80e44/iframe?preload=true&autoplay=true&poster=https%3A%2F%2Fcustomer-wtn437ryaa2ata4r.cloudflarestream.com%2Fa742db09983a5dffd8fae47e6bd80e44%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&muted=true", // Example video URL
    link: "/add-captions-to-video"
  },
  {
    label: "SLIDES TO VIDEO",
    title: "Turn Slides into Videos with AI",
    description: "Convert PowerPoint presentations into professional videos complete with voiceovers, transitions, and visual elements.",
    video: "https://customer-wtn437ryaa2ata4r.cloudflarestream.com/95f09e151eb1f5a839db14faa5e6ce25/iframe?preload=true&autoplay=true&poster=https%3A%2F%2Fcustomer-wtn437ryaa2ata4r.cloudflarestream.com%2F95f09e151eb1f5a839db14faa5e6ce25%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&muted=true", // Example video URL
    link: "/ppt-to-video"
  },
  {
    label: "COLLABORATION",
    title: "Where Creativity Meets Collaboration",
    description: "Collaborate with team members on video projects with shared assets, templates, and feedback tools all in one platform.",
    video: "https://customer-wtn437ryaa2ata4r.cloudflarestream.com/42b264a0c7076b91a0d4abb1b7e4ade0/iframe?preload=true&autoplay=true&poster=https%3A%2F%2Fcustomer-wtn437ryaa2ata4r.cloudflarestream.com%2F42b264a0c7076b91a0d4abb1b7e4ade0%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&muted=true", // Example video URL
    link: "/teams"
  }
];

export function Features() {
  return (
    <section className="py-16" style={{ background: '#ede4f6' }}>
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-center" style={{ color: '#2d3a3a' }}>
          What Video Will You Create Today?
        </h2>
      </div>
      <div className="flex flex-col space-y-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-lg overflow-hidden flex ${index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'} items-center mx-auto`}
            style={{ width: '1080px', height: '570.875px' }}
          >
            <div className="flex-1 flex flex-col justify-center px-12 h-full">
              <div>
                <div className="uppercase text-xs font-semibold mb-2 text-[#6b7280] tracking-wider">{feature.label}</div>
                <h3 className="text-4xl font-bold mb-6" style={{ color: '#2d3a3a' }}>{feature.title}</h3>
                <p className="mb-8 text-lg" style={{ color: '#4b5563' }}>{feature.description}</p>
              </div>
              <Link href={feature.link} passHref>
                <Button style={{ background: '#a259e6', color: '#fff' }} className="rounded-full w-fit mt-2 flex items-center gap-2 text-lg px-8 py-4">
                  Find out more
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M13 5l7 7-7 7M5 12h14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center h-full border-none" style={{ width: '450.875px', height: '450.875px' }}>
              <iframe
                src={feature.video}
                className="rounded-2xl w-full h-full object-cover bg-black border-none"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
