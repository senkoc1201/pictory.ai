"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    title: "Features",
    items: [
      {
        icon: "/assets/images/ScriptToVideo@2x.png",
        title: "Text to Video",
        description: "Turn text into engaging videos instantly. Perfect for transforming blog posts, articles, and scripts into dynamic visual content for social media or presentation.",
        link: "/text-to-video"
      },
      {
        icon: "/assets/images/TextToVideo@2x.png",
        title: "AI Video Editor",
        description: "Edit videos with ease using AI-powered tools. Create professional-quality videos faster, with smart editing options that save you time and effort.",
        link: "/ai-video-editor"
      },
      {
        icon: "/assets/images/ArticleToVideo@2x.png",
        title: "URL to Video",
        description: "Convert any web page into a captivating video with one click. Quickly share online content in a video format that's engaging and easy to consume.",
        link: "/url-to-video"
      },
      {
        icon: "/assets/images/VisualToVideo@2x.png",
        title: "Image to Video",
        description: "Transform photos & videos into stunning video slideshows. Add transitions, music, and captions to bring your images to life in a seamless video format.",
        link: "/image-to-video"
      },
      {
        icon: "/assets/images/PPTToVideo@2x.png",
        title: "PPT to Video",
        description: "Convert PowerPoint slides into shareable videos. Add voiceovers, transitions, and music to make presentations more engaging and dynamic.",
        link: "/image-to-video"
      },
      {
        icon: "/assets/images/SmartRecord@2x.png",
        title: "Smart Record",
        description: "Capture screen activity effortlessly for tutorials, demos, or presentations. Ideal for recording on-screen actions in high quality, ready to share.",
        link: "/image-to-video"
      },
    ]
  },
  {
    title: "Tools",
    items: [
      {
        icon: "/assets/images/ai-voice-generator-icon.svg",
        title: "AI Voice Generator",
        description: "Instantly convert text into AI-powered voiceovers with realistic speech.",
        link: "/ai-voice-generator"
      },
      {
        icon: "/assets/images/text-to-video-generator-icon.svg",
        title: "Text to Video Generator",
        description: "Turn any text into a professional video with visuals, voiceovers, and captions.",
        link: "/text-to-video-generator"
      },
    ]
  },
  {
    title: "Use Cases",
    items: [
      {
        icon: "/assets/images/marketing-agencies-icon.svg",
        title: "Marketing Agencies",
        description: "Automate video content creation for ads, branding, and client campaigns.",
        link: "/marketing-agencies"
      },
      {
        icon: "/assets/images/learning-development-icon.svg",
        title: "Learning & Development",
        description: "Design training and instructional videos effortlessly.",
        link: "/learning-development-professionals"
      },
    ]
  },
  {
    title: "Learn",
    items: [
      {
        icon: "/assets/images/video-templates-icon.svg",
        title: "Video Templates",
        description: "Browse and customize professionally designed video templates.",
        link: "/video-templates-page"
      },
      {
        icon: "/assets/images/blog-icon.svg",
        title: "Blog",
        description: "Stay updated with AI video trends, content marketing insights, and best practices.",
        link: "/blog"
      },
    ]
  },
  {
    title: "Enterprise",
    items: [
      {
        icon: "/assets/images/pictory-api-icon.svg",
        title: "Pictory API",
        description: "Integrate AI video creation seamlessly into your platform or software.",
        link: "/pictory-api"
      },
      {
        icon: "/assets/images/team-plans-icon.svg",
        title: "Team Plans",
        description: "Enable team collaboration with shared assets and project management tools.",
        link: "/teams"
      },
    ]
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container-wide flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6">
            <Image
              src="/assets/images/logo.png"
              alt="Pictory AI"
              width={120}
              height={35}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((navItem) => (
              <DropdownMenu key={navItem.title}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                  {navItem.title}
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-[1400px] max-w-[95vw] bg-white rounded-2xl shadow-xl p-8 overflow-x-auto mt-8">
                  <div className="grid grid-cols-3 gap-6 mb-6">
                    {navItem.items.map((item) => (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="w-22 h-22">
                          <img src={item.icon} alt={item.title} className="w-22 h-22" />
                        </div>
                        <div className="text-gray-600">
                          <p className="font-bold mb-1">{item.title}</p>
                          <p className="font-[11px]">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* <div className="flex items-center bg-[#7c3aed] rounded-xl px-8 py-4 mt-4 w-full">
                      <button className="text-white font-semibold">Talk to Sales</button>
                      <button className="text-white font-semibold px-6">
                        Get Started Now →
                      </button>
                    </div> */}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-4">
            <Link href="/pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="https://app.pictory.ai/" className="text-sm font-medium hover:text-primary">
              Login
            </Link>
            <span className="text-border">|</span>
            <Link href="https://calendly.com/d/cq7g-7c7-ryz" className="text-sm font-medium hover:text-primary">
              Talk to Sales
            </Link>
          </div>

          <Link href="https://app.pictory.ai/signup" passHref>
            <Button className="hidden md:inline-flex rounded-full" style={{ background: '#a259e6', color: '#fff' }}>
              Get Started Now →
            </Button>
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm">
              <div className="flex flex-col gap-6 pt-6">
                <div className="flex items-center justify-between">
                  <Link href="/" onClick={() => setOpen(false)}>
                    <Image
                      src="/assets/images/logo.png"
                      alt="Pictory AI"
                      width={100}
                      height={28}
                    />
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex flex-col gap-4">
                  {navItems.map((navItem) => (
                    <div key={navItem.title} className="space-y-2">
                      <div className="font-medium">{navItem.title}</div>
                      <div className="grid gap-2">
                        {navItem.items.slice(0, 4).map((item) => (
                          <Link
                            key={item.title}
                            href={item.link}
                            className="text-sm text-muted-foreground hover:text-foreground"
                            onClick={() => setOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="border-t pt-4 mt-2">
                    <div className="grid gap-2">
                      <Link
                        href="/pricing"
                        className="text-sm font-medium hover:text-primary"
                        onClick={() => setOpen(false)}
                      >
                        Pricing
                      </Link>
                      <Link
                        href="https://app.pictory.ai/"
                        className="text-sm font-medium hover:text-primary"
                        onClick={() => setOpen(false)}
                      >
                        Login
                      </Link>
                      <Link
                        href="https://calendly.com/d/cq7g-7c7-ryz"
                        className="text-sm font-medium hover:text-primary"
                        onClick={() => setOpen(false)}
                      >
                        Talk to Sales
                      </Link>
                    </div>
                  </div>

                  <Link href="https://app.pictory.ai/signup" passHref>
                    <Button className="w-full rounded-full" style={{ background: '#a259e6', color: '#fff' }} onClick={() => setOpen(false)}>
                      Get Started Now →
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
