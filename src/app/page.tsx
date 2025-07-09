"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PREFFIX, SUFFIX, COMPANY_TAGLINE, COMPANY_DESCRIPTION, COMPANY_SUBTITLE, MAIN_PRODUCTS, AUSTRALIA_OPERATIONS } from "../../global-config";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-primary/10 dark:from-gray-900 dark:via-primary/10 dark:to-primary/5">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full border-b border-black/[0.1] bg-white/70 backdrop-blur-lg dark:bg-gray-900/70 dark:border-white/[0.1] z-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Logo />
            </motion.div>
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="ghost" className="rounded-lg">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center space-y-8"
          >
            <motion.div 
              variants={fadeIn}
              className="inline-block"
            >
              <span className="inline-flex items-center rounded-full px-6 py-2 text-sm font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground mb-8">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                Welcome to {PREFFIX} {SUFFIX}
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary leading-tight py-2"
              style={{
                background: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--primary) / 0.8), hsl(var(--primary)))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                paddingBottom: '0.25rem',
                lineHeight: '1.1'
              }}
            >
              {COMPANY_TAGLINE}
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              {COMPANY_SUBTITLE}
            </motion.p>

            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            >
              <Link href="/login">
                <Button size="lg" className="w-full sm:w-auto rounded-lg bg-primary hover:bg-primary/90 h-12 px-8">
                  Access Dashboard →
                </Button>
              </Link>
              <Link href="#operations">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-lg h-12 px-8">
                  View Operations
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mining Operations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {COMPANY_DESCRIPTION}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Operating in 35 countries with 60,000 employees, finding better ways™ to provide the materials the world needs.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Feature Cards */}
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all border border-black/[0.1] dark:border-white/[0.1]"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-500"></div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Australian Operations Section */}
      <section id="operations" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Australian Operations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From Perth to the Pilbara and beyond, we work with diverse communities and partners across Australia.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {AUSTRALIA_OPERATIONS.map((operation, index) => (
              <motion.div
                key={operation}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all border border-black/[0.1] dark:border-white/[0.1] group hover:border-primary/20"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">
                  {operation}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <Logo />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Finding better ways™ to provide the materials the world needs.
              </p>
            </motion.div>
            
            <FooterColumn title="Products" links={productLinks} />
            <FooterColumn title="Operations" links={operationLinks} />
            <FooterColumn title="Company" links={companyLinks} />
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} {PREFFIX} {SUFFIX}. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Feature data updated for Rio Tinto's mining focus
const features = [
  {
    title: "Global Mining Operations",
    description: "Operating in 35 countries with world-class mining operations for iron ore, copper, aluminium, and more.",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Sustainable Mining",
    description: "Committed to responsible mining practices with net zero emissions target by 2050 and environmental stewardship.",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Essential Materials",
    description: "Providing iron ore, copper, lithium, and other critical materials for global infrastructure and clean energy transition.",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

// Updated footer links for Rio Tinto
const productLinks = [
  { label: "Iron Ore", href: "#" },
  { label: "Copper", href: "#" },
  { label: "Aluminium", href: "#" },
  { label: "Lithium", href: "#" },
  { label: "Borates", href: "#" },
  { label: "Diamonds", href: "#" },
];

const operationLinks = [
  { label: "Australia", href: "#" },
  { label: "Canada", href: "#" },
  { label: "Mongolia", href: "#" },
  { label: "United States", href: "#" },
  { label: "Africa", href: "#" },
  { label: "Projects", href: "#" },
];

const companyLinks = [
  { label: "About Rio Tinto", href: "#" },
  { label: "Sustainability", href: "#" },
  { label: "Communities", href: "#" },
  { label: "Investors", href: "#" },
  { label: "Careers", href: "#" },
  { label: "News", href: "#" },
];

function FooterColumn({ title, links }: { title: string, links: { label: string, href: string }[] }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
