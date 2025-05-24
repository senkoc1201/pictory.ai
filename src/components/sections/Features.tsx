import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Text to Video in Minutes",
    description: "Transform your blog posts, articles, and scripts into engaging videos with AI-powered automation.",
    image: "https://pictory.ai/wp-content/uploads/2024/02/AI-Video-Maker-1024x576.png",
    link: "/text-to-video"
  },
  {
    title: "Turn any URL into Video",
    description: "Convert any web page into a captivating video with just one click. Perfect for sharing online content in a more engaging format.",
    image: "https://pictory.ai/wp-content/uploads/2024/02/AI-Video-Maker-1024x576.png",
    link: "/url-to-video"
  },
  {
    title: "Transform Long-Form Content into Engaging Short Videos",
    description: "Break down lengthy content into digestible, shareable short-form videos ideal for social media platforms.",
    image: "https://pictory.ai/wp-content/uploads/2024/02/AI-Video-Maker-1024x576.png",
    link: "/long-form-to-short-videos"
  },
  {
    title: "Add Captions for Increased Reach and Engagement",
    description: "Auto-generate accurate captions and subtitles in multiple languages to make your videos accessible to wider audiences.",
    image: "https://pictory.ai/wp-content/uploads/2024/02/AI-Video-Maker-1024x576.png",
    link: "/add-captions-to-video"
  },
  {
    title: "Turn Slides into Videos with AI",
    description: "Convert PowerPoint presentations into professional videos complete with voiceovers, transitions, and visual elements.",
    image: "https://pictory.ai/wp-content/uploads/2024/02/AI-Video-Maker-1024x576.png",
    link: "/ppt-to-video"
  },
  {
    title: "Where Creativity Meets Collaboration",
    description: "Collaborate with team members on video projects with shared assets, templates, and feedback tools all in one platform.",
    image: "https://pictory.ai/wp-content/uploads/2024/02/AI-Video-Maker-1024x576.png",
    link: "/teams"
  }
];

export function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <h2 className="text-3xl font-bold text-center mb-4">
          What Video Will You Create Today?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <Link href={feature.link} passHref>
                    <Button variant="outline" className="rounded-full text-primary border-primary hover:bg-primary/5">
                      Learn more
                    </Button>
                  </Link>
                </div>

                <div className="relative h-48 mt-4 bg-gray-100">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
