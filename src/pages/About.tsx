import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Target, Compass, Users, Lightbulb, Heart } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCard } from "@/components/ui/animated-card";

const teamMembers = [
  {
    name: "Kaviya",
    role: "AI Strategy Lead",
    description: "Visionary founder driving AI innovation and strategic direction.",
  },
  {
    name: "Leela",
    role: "Head of Campus Innovation",
    description: "Education tech innovator transforming campus operations.",
  },
  {
    name: "Dinesh",
    role: "Product Engineering Lead",
    description: "Engineering architect building scalable solutions.",
  },
];

const values = [
  { icon: Lightbulb, title: "Innovation", description: "Challenging conventions with bold ideas" },
  { icon: Users, title: "Collaboration", description: "Growing together with our partners" },
  { icon: Heart, title: "Human-Centered", description: "Technology that empowers people" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Roots of Tomorrow's Innovation
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We uproot outdated methods to cultivate smarter, future-ready transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
                <Leaf className="w-4 h-4" />
                Our Origins
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Uproot Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our story is one of purposeful evolution, born from the vision of founders Kaviya, Leela, and Dinesh. 
                  We're challenging conventional approaches by developing AI-driven automation and campus innovations 
                  that scale with real-world needs.
                </p>
                <p>
                  From initial explorations in education technology to emerging platforms that streamline operations, 
                  we prioritize clarity and adaptability. We build not just solutions, but foundations for sustainable 
                  growth—empowering organizations to innovate confidently while staying rooted in human value.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/20 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 mx-auto mb-4 border-4 border-primary/30 rounded-full flex items-center justify-center"
                  >
                    <Leaf className="w-10 h-10 text-primary" />
                  </motion.div>
                  <p className="text-lg font-semibold text-foreground">Growing Since 2024</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedCard>
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Core Belief</h3>
              <p className="text-muted-foreground leading-relaxed">
                Technology must unlock human potential through practical AI and adaptive systems. 
                We transform challenges into scalable opportunities through intelligent, human-centered automation.
              </p>
            </AnimatedCard>
            <AnimatedCard delay={0.1}>
              <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                <Compass className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">The Road Ahead</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where automation empowers educators and innovators to scale without limits. 
                We envision leading AI integration for campuses and enterprises, unlocking limitless potential.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* The Uproot Method */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="How We Work"
            title="The Uproot Method"
            description="Our collaborative approach listens first, experiments boldly, and evolves continuously."
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {["Explore", "Prototype", "Scale"].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step}</h3>
                  <p className="text-muted-foreground text-sm">
                    {index === 0 && "Deep exploration of your needs and challenges"}
                    {index === 1 && "Iterative AI solution development with human insight"}
                    {index === 2 && "Seamless deployment and continuous growth"}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Leadership"
            title="Minds Behind the Movement"
            description="Our founders lead with diverse expertise in AI, automation, and education tech."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <AnimatedCard key={member.name} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{member.name[0]}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Our Culture of Growth
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-10">
                We foster curiosity, collaboration, and bold experimentation. Join us in building 
                tomorrow's innovation ecosystem.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6"
                  >
                    <value.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                    <h3 className="font-semibold text-primary-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-primary-foreground/70">{value.description}</p>
                  </motion.div>
                ))}
              </div>
              <Button variant="hero" size="lg" asChild>
                <Link to="/careers">
                  Join Our Culture
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
