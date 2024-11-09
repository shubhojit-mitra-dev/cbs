import Link from "next/link";
import { Button } from "~/components/ui/button";
import { HydrateClient } from "~/trpc/server";

import { Card } from "~/components/homepage/card";
import { Badge } from "~/components/homepage/badge";
import { Brain, Youtube, Twitter, Linkedin, Facebook, BarChart3, Lock, Zap } from "lucide-react";
import Image from "next/image";
import laptopImage from "~/assets/laptop-with-some-data.avif"

export default async function Home() {
  return (
    <HydrateClient>
     <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <Badge className="mb-4" variant="secondary">
              Revolutionize Your Social Media Presence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Content Builder for Social Media
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Transform your long-form content into engaging social media posts automatically using AI-powered technology
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                Get Started
              </Button>
              {/* <Button size="lg" variant="outline">
                Watch Demo
              </Button> */}
            </div>
            
            {/* Platform Icons */}
            <div className="flex gap-6 mt-12 text-muted-foreground">
              <Youtube size={32} />
              <Twitter size={32} />
              <Linkedin size={32} />
              <Facebook size={32} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful Features for Content Creators
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Brain className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Summaries</h3>
              <p className="text-muted-foreground">
                Automatically generate engaging social media posts from your long-form content
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Zap className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Automated Posting</h3>
              <p className="text-muted-foreground">
                Schedule and post content across multiple platforms automatically
              </p>
            </Card>
            {/* <Card className="p-6 hover:shadow-lg transition-shadow">
              <BarChart3 className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
              <p className="text-muted-foreground">
                Track engagement and optimize your content strategy with detailed insights
              </p>
            </Card> */}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How CBS Works
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Connect Your Platforms</h3>
                  <p className="text-muted-foreground">Link your blog, YouTube channel, or other content sources</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Processing</h3>
                  <p className="text-muted-foreground">Our AI analyzes and generates platform-specific content</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Automatic Distribution</h3>
                  <p className="text-muted-foreground">Content is automatically posted across your social platforms</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-video">
              <Image
                src={laptopImage}
                alt="Dashboard Preview"
                fill
                className="rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Starter</h3>
              <div className="text-3xl font-bold mb-4">$0<span className="text-lg text-muted-foreground">/mo</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span>1 social platform</span>
                </li>
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span>5 posts per month</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">Get Started</Button>
            </Card>
            <Card className="p-6 border-primary">
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <div className="text-3xl font-bold mb-4">$29<span className="text-lg text-muted-foreground">/mo</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span>3 social platforms</span>
                </li>
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span>Unlimited posts</span>
                </li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <div className="text-3xl font-bold mb-4">$99<span className="text-lg text-muted-foreground">/mo</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span>Unlimited platforms</span>
                </li>
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span>Custom analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span>Priority support</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">Contact Sales</Button>
            </Card>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Social Media Strategy?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of content creators who are already using CBS to amplify their social media presence
          </p>
          <Button size="lg" variant="secondary">
            Get Started Now
          </Button>
        </div>
      </section>
    </main>
    </HydrateClient>
  );
}
