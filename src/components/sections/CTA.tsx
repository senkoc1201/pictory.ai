import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-16 bg-[#232429] text-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold mb-4">
              Transform Your Business with Pictory's AI-Powered Video Solutions
            </h2>
            <p className="text-gray-300 mb-6">
              Join thousands of professionals who are creating engaging, high-converting videos in minutes.
              No technical skills required.
            </p>
            <div className="space-x-4">
              <Link href="https://app.pictory.ai/signup" passHref>
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full" style={{ background: '#a259e6', color: '#fff' }} >
                  Get Started for Free
                </Button>
              </Link>
              <Link href="https://calendly.com/d/cq7g-7c7-ryz" passHref>
                <Button className="text-white hover:bg-white/10 rounded-full" style={{ background: '#a259e6', color: '#fff' }} >
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="relative">
              <Image
                src="https://pictory.ai/wp-content/uploads/2024/11/1080x620a-scaled-mobile.jpg"
                alt="Pictory AI Dashboard"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
