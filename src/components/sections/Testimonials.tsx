import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Pictory has revolutionized my content strategy. I can now turn my blog posts into engaging videos in minutes instead of hours.",
    name: "Sarah Johnson",
    title: "Content Marketing Manager",
    avatar: "https://ext.same-assets.com/602870343/797755628.jpeg"
  },
  {
    quote: "As someone with no video editing experience, Pictory has been a game-changer. The AI-powered tools make creating professional videos so simple.",
    name: "Michael Chen",
    title: "Course Creator",
    avatar: "https://ext.same-assets.com/602870343/571941268.jpeg"
  },
  {
    quote: "Our marketing team has tripled video output since using Pictory. The ROI has been incredible, and our engagement metrics have never been better.",
    name: "Emma Rodriguez",
    title: "Digital Marketing Director",
    avatar: "https://ext.same-assets.com/602870343/2032628862.jpeg"
  },
  {
    quote: "The ability to quickly convert our educational materials into videos has transformed how we deliver content to our students.",
    name: "David Williams",
    title: "Education Technology Specialist",
    avatar: "https://ext.same-assets.com/602870343/1655491239.jpeg"
  },
  {
    quote: "We've saved thousands on video production costs while increasing our output tenfold. Pictory is now an essential part of our content workflow.",
    name: "Jennifer Lee",
    title: "Social Media Manager",
    avatar: "https://ext.same-assets.com/602870343/2578560509.jpeg"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 bg-[#f4f2fb]">
      <div className="container-wide">
        <h2 className="text-3xl font-bold text-center mb-4">
          Trusted by Content Creators Worldwide
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          See why thousands of professionals choose Pictory to power their video content strategy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg
                      className="h-8 w-8 text-primary/30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <p className="text-foreground mb-6 flex-grow">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center mt-auto">
                    <div className="mr-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
            <span className="h-2 w-2 rounded-full bg-gray-300"></span>
            <span className="h-2 w-2 rounded-full bg-gray-300"></span>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <div>
            <div className="text-4xl font-bold text-primary">23.4k</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">5-Star Reviews</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary">1.2M+</div>
            <div className="text-sm text-muted-foreground">Videos Created</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
