import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";

export default function TextToVideoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-[#f4f2fb]">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-4">Text to Video</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Transform your text into engaging videos effortlessly with Pictory's AI-powered tools.
                  No video editing skills required.
                </p>
                <Link href="https://app.pictory.ai/signup" passHref>
                  <Button className="btn-primary text-base h-12 px-8">
                    Get Started For Free!
                  </Button>
                </Link>
                <p className="mt-4 text-sm text-muted-foreground">
                  No technical skills or software download required.
                </p>
              </div>
              <div>
                <Image
                  src="https://pictory.ai/wp-content/uploads/2024/02/AI-Video-Maker.png"
                  alt="AI Video Maker"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
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
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-4">Text to Video in Minutes</h2>
                <p className="text-muted-foreground mb-6">
                  Simply paste your text, and Pictory's AI will transform it into a compelling video with matching visuals,
                  synchronized pacing, and engaging transitions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L10 17L20 7" stroke="#835bd2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Automatic scene creation based on your text</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L10 17L20 7" stroke="#835bd2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Access to millions of royalty-free stock media</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L10 17L20 7" stroke="#835bd2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>AI-generated voiceovers in multiple languages</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="https://app.pictory.ai/signup" passHref>
                    <Button className="rounded-full">Try it now</Button>
                  </Link>
                </div>
              </div>
              <div>
                <Image
                  src="https://pictory.ai/wp-content/uploads/2024/02/AI-Video-Maker-1024x576.png"
                  alt="Text to Video Feature"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="https://pictory.ai/wp-content/uploads/2024/02/AI-Video-Maker-1024x576.png"
                  alt="URL to Video Feature"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-4">Turn any URL into Video</h2>
                <p className="text-muted-foreground mb-6">
                  Simply enter a URL, and Pictory will extract the content and transform it into an engaging video
                  complete with visuals, captions, and voiceover.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L10 17L20 7" stroke="#835bd2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Convert web pages to videos in one click</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L10 17L20 7" stroke="#835bd2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Intelligent content extraction and summarization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L10 17L20 7" stroke="#835bd2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Customizable branding and styling options</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="https://app.pictory.ai/signup" passHref>
                    <Button className="rounded-full">Try it now</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-[#f4f2fb]">
          <div className="container-wide max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Text to Video Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V16M8 12H16" stroke="#835bd2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Automated Media Selection</h3>
                <p className="text-sm text-muted-foreground">
                  AI intelligently selects relevant visuals from a library of millions of stock media assets.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 5H5V19H19V5Z" stroke="#835bd2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 10H19" stroke="#835bd2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Smart Text Splitting</h3>
                <p className="text-sm text-muted-foreground">
                  Automatically divides your content into perfectly timed video segments for optimal viewing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#835bd2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.2 5.2L15.7 7.7" stroke="#835bd2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.8 18.2L8.3 15.7" stroke="#835bd2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Customizable Styles</h3>
                <p className="text-sm text-muted-foreground">
                  Choose from a variety of visual themes, transitions, and text animations to match your brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
