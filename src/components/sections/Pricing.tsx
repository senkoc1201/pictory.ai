import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    description: "For creators starting their video journey",
    monthlyPrice: 25,
    annualPrice: 19,
    features: [
      "200 video minutes",
      "2 million royalty-free videos from Storyblocks",
      "1 brand kit",
      "Unlimited standard voices in 7 languages",
      "No watermark",
      "Basic AI Tools"
    ],
    cta: "Get Started",
    highlight: false
  },
  {
    name: "Professional",
    description: "For video creators who need professional-quality results",
    monthlyPrice: 49,
    annualPrice: 39,
    features: [
      "600 video minutes",
      "18 million videos from Getty Images and Storyblocks",
      "5 brand kits",
      "Unlimited standard voices in 7 languages",
      "120 minutes of ElevenLab's AI voices in 29 languages",
      "Advanced AI Tools",
      "Video summarizations of long videos"
    ],
    cta: "Get Started",
    highlight: true
  },
  {
    name: "Teams",
    description: "For teams collaborating on video projects",
    monthlyPrice: 99,
    annualPrice: 89,
    features: [
      "2,000 video minutes",
      "18 million videos from Getty Images and Storyblocks",
      "10 brand kits",
      "Unlimited standard voices in 7 languages",
      "240 minutes of ElevenLab's AI voices in 29 languages",
      "Advanced AI Tools",
      "Video summarizations of long videos",
      "Team collaboration features",
      "Shared assets and templates"
    ],
    cta: "Get Started",
    highlight: false
  },
  {
    name: "Custom",
    description: "For enterprises with specific needs",
    monthlyPrice: null,
    annualPrice: null,
    features: [
      "Custom video minutes",
      "18 million videos from Getty Images and Storyblocks",
      "Unlimited brand kits",
      "Unlimited standard voices in 7 languages",
      "Custom minutes of ElevenLab's AI voices in 29 languages",
      "Advanced AI Tools",
      "Video summarizations of long videos",
      "Team collaboration features",
      "Shared assets and templates",
      "API access",
      "Dedicated account manager"
    ],
    cta: "Contact Sales",
    highlight: false
  }
];

export function Pricing() {
  return (
    <section className="py-16 bg-[#ede4f6]">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for your video creation needs. All plans include our core features.
          </p>

          <div className="inline-flex items-center mt-6 p-1 bg-muted rounded-full">
            <Button variant="ghost" className="rounded-full">Monthly</Button>
            <Button className="rounded-full">Annual (Save 24%)</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className={`border ${plan.highlight ? 'border-primary shadow-md' : 'shadow-sm'}`}>
              <CardHeader className="pb-0">
                {plan.highlight && (
                  <div className="text-sm font-medium text-primary bg-primary/10 rounded-full py-1 px-3 w-fit mb-2">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent>
                <div className="mt-4 mb-6">
                  {plan.monthlyPrice ? (
                    <>
                      <span className="text-3xl font-bold">${plan.annualPrice}</span>
                      <span className="text-muted-foreground line-through ml-2">${plan.monthlyPrice}</span>
                      <span className="text-sm text-muted-foreground block mt-1">per month, billed annually</span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold">Custom</span>
                  )}
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold uppercase tracking-wider">Includes</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check size={18} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-3">
                {plan.name === "Custom" ? (
                  <Link href="https://calendly.com/d/cq7g-7c7-ryz" passHref>
                    <Button className="w-full rounded-full">{plan.cta}</Button>
                  </Link>
                ) : (
                  <>
                    <Link href="https://app.pictory.ai/signup" passHref>
                      <Button variant={plan.highlight ? "default" : "outline"} className="w-full rounded-full">
                        {plan.cta}
                      </Button>
                    </Link>
                    <Link href="https://app.pictory.ai/signup" className="text-sm text-center text-muted-foreground hover:text-primary">
                      Free trial available
                    </Link>
                  </>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-2">Need a custom solution?</p>
          <Link href="https://calendly.com/d/cq7g-7c7-ryz" passHref>
            <Button variant="outline" className="rounded-full">
              Talk to our sales team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
