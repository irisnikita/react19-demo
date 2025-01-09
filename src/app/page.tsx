"use client";

// Libraries
// import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

// Components
import { Button } from "antd";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <main className="flex flex-col items-center gap-4">
        <motion.img
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity,
            opacity: {
              duration: 2,
              repeat: 0,
            },
          }}
          src={"/images/react-icon.png"}
          width={100}
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold text-center"
        >
          Welcome to React 19
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
          }}
        >
          Explore the latest React features with this interactive demo.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
          }}
        >
          <Link href={"/react-19-demo/introduction"} className="mt-2">
            <Button>Go to explore</Button>
          </Link>
        </motion.div>
      </main>
      <footer className="absolute bottom-4 row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Created by Vinlt
      </footer>
    </div>
  );
}
