import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = [
  {
    title: "Features",
    links: [
      { name: "Text to Video", href: "/text-to-video" },
      { name: "URL to Video", href: "/url-to-video" },
      { name: "AI Video Editor", href: "/ai-video-editor" },
      { name: "Image to Video", href: "/image-to-video" },
      { name: "PPT to Video", href: "/ppt-to-video" },
      { name: "Smart Record", href: "/smart-screen-recorder" },
    ],
  },
  {
    title: "Tools",
    links: [
      { name: "AI Voice Generator", href: "/ai-voice-generator" },
      { name: "Text to Video Generator", href: "/text-to-video-generator" },
      { name: "Script to Video", href: "/script-to-video" },
      { name: "ChatGPT Video Generator", href: "/chatgpt-video-generator" },
      { name: "Video Clip Generator", href: "/video-clip-generator" },
      { name: "Presentation Video Maker", href: "/video-presentation-maker" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { name: "Marketing Agencies", href: "/marketing-agencies" },
      { name: "Learning & Development", href: "/learning-development-professionals" },
      { name: "Education Professionals", href: "/education-professionals" },
      { name: "Business Professionals", href: "/business-professionals-organizations" },
      { name: "Digital Marketers", href: "/digital-marketers" },
      { name: "Enterprise Content Teams", href: "/enterprise-content-teams" },
    ],
  },
  {
    title: "Learn",
    links: [
      { name: "Video Templates", href: "/video-templates-page" },
      { name: "Blog", href: "/blog" },
      { name: "Tutorials", href: "https://kb.pictory.ai/" },
      { name: "Case Studies", href: "/pictory-case-studies" },
      { name: "Creator Community", href: "https://www.facebook.com/groups/863439644603943" },
      { name: "Showcase", href: "/pictory-examples" },
    ],
  },
  {
    title: "Enterprise",
    links: [
      { name: "Pictory API", href: "/pictory-api" },
      { name: "Team Plans", href: "/teams" },
      { name: "Press and Partners", href: "/press-and-partners" },
      { name: "AI Video Agent", href: "/api-video-agent" },
      { name: "System Integrators", href: "/api-system-integrators" },
      { name: "Enterprise Ready", href: "/api-enterprise" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#232429] text-white py-12">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/assets/images/logo.png"
                alt="Pictory AI"
                width={120}
                height={35}
                className="mb-4"
              />
            </Link>

            <div className="text-sm text-muted-foreground mb-4">
              AI-powered video creation platform
            </div>

            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-white">
                <Facebook size={20} />
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-white">
                <Twitter size={20} />
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-white">
                <Instagram size={20} />
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-white">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-3">
              <h3 className="font-semibold text-sm uppercase tracking-wider">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Pictory. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <Link href="/terms" className="hover:text-white">Terms of Service</Link>
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
              <Link href="/gdpr" className="hover:text-white">GDPR</Link>
              <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
