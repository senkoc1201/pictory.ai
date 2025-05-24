import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function HowItWorks() {
  return (
    <section className="py-16 bg-[#f4f2fb]">
      <div className="container-wide">
        <h2 className="text-3xl font-bold text-center mb-2">
          Start making professional videos in minutes
        </h2>

        <div className="relative mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-80">
              <Image
                src="https://pictory.ai/wp-content/uploads/2024/11/how-it-works-video-thumbnail.jpg"
                alt="How Pictory works"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 p-6 rounded-lg max-w-md text-center">
                  <h3 className="text-xl font-semibold mb-2">How it works</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Transform text into engaging videos in minutes with Pictory's intuitive AI tools.
                  </p>
                  <Button variant="outline" className="rounded-full">
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Card className="bg-white shadow-sm border-0">
            <CardContent className="pt-6">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-semibold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Paste your text</h3>
              <p className="text-muted-foreground text-sm">
                Upload your script, blog post, or article. Pictory's AI identifies key points to highlight in your video.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm border-0">
            <CardContent className="pt-6">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-semibold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Customize visuals and audio</h3>
              <p className="text-muted-foreground text-sm">
                Choose from millions of stock media or upload your own. Add AI voiceovers, music, and dynamic text overlays.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm border-0">
            <CardContent className="pt-6">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-semibold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Export and share</h3>
              <p className="text-muted-foreground text-sm">
                Preview your video, make any final adjustments, and export in HD. Share directly to your favorite platforms.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Link href="https://app.pictory.ai/signup" passHref>
            <Button className="btn-primary text-base h-12 px-8">
              Start creating videos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
