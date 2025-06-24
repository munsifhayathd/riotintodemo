"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Bell, Search } from "lucide-react";

export function Navbar() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 right-0 left-64 z-40 h-16 border-b border-gray-200 bg-white/80 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-900/80"
    >
      <div className="flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-3 w-96">
          <Search className="h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search..."
            className="border-none bg-transparent focus-visible:ring-0"
          />
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
} 