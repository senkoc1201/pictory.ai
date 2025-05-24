import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-12 bg-[#f4f2fb]">
          <div className="container-wide text-center">
            <h1 className="text-4xl font-bold mb-4">What video will you create today?</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that's right for your video creation needs.
              All plans include our core AI video creation features.
            </p>
          </div>
        </section>

        <Pricing />

        <section className="py-16 bg-[#f4f2fb]">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Compare plans and choose the one that suits you
            </h2>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-5 border-b">
                <div className="p-4 text-sm font-medium">Features</div>
                <div className="p-4 text-sm font-medium text-center">Free Trial</div>
                <div className="p-4 text-sm font-medium text-center">Starter</div>
                <div className="p-4 text-sm font-medium text-center">Professional</div>
                <div className="p-4 text-sm font-medium text-center">Teams</div>
              </div>

              {/* Feature rows */}
              <div className="grid grid-cols-5 border-b">
                <div className="p-4 text-sm">Video Minutes</div>
                <div className="p-4 text-sm text-center">10</div>
                <div className="p-4 text-sm text-center">200</div>
                <div className="p-4 text-sm text-center">600</div>
                <div className="p-4 text-sm text-center">2,000</div>
              </div>

              <div className="grid grid-cols-5 border-b">
                <div className="p-4 text-sm">Stock Media</div>
                <div className="p-4 text-sm text-center">Limited</div>
                <div className="p-4 text-sm text-center">2M</div>
                <div className="p-4 text-sm text-center">18M</div>
                <div className="p-4 text-sm text-center">18M</div>
              </div>

              <div className="grid grid-cols-5 border-b">
                <div className="p-4 text-sm">AI Voices</div>
                <div className="p-4 text-sm text-center">Limited</div>
                <div className="p-4 text-sm text-center">7 languages</div>
                <div className="p-4 text-sm text-center">29 languages</div>
                <div className="p-4 text-sm text-center">29 languages</div>
              </div>

              <div className="grid grid-cols-5 border-b">
                <div className="p-4 text-sm">Brand Kits</div>
                <div className="p-4 text-sm text-center">0</div>
                <div className="p-4 text-sm text-center">1</div>
                <div className="p-4 text-sm text-center">5</div>
                <div className="p-4 text-sm text-center">10</div>
              </div>

              <div className="grid grid-cols-5 border-b">
                <div className="p-4 text-sm">Watermark</div>
                <div className="p-4 text-sm text-center">Yes</div>
                <div className="p-4 text-sm text-center">No</div>
                <div className="p-4 text-sm text-center">No</div>
                <div className="p-4 text-sm text-center">No</div>
              </div>

              <div className="grid grid-cols-5 border-b">
                <div className="p-4 text-sm">Advanced AI Tools</div>
                <div className="p-4 text-sm text-center">No</div>
                <div className="p-4 text-sm text-center">Basic</div>
                <div className="p-4 text-sm text-center">Yes</div>
                <div className="p-4 text-sm text-center">Yes</div>
              </div>

              <div className="grid grid-cols-5 border-b">
                <div className="p-4 text-sm">Team Collaboration</div>
                <div className="p-4 text-sm text-center">No</div>
                <div className="p-4 text-sm text-center">No</div>
                <div className="p-4 text-sm text-center">No</div>
                <div className="p-4 text-sm text-center">Yes</div>
              </div>
            </div>
          </div>
        </section>

        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
