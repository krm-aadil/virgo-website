// src/app/page.js

"use client";  // Add this line at the top to mark the component as a client-side component

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  // Ensure that any client-side specific logic is run only after the component mounts
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This will run after the first render on the client side
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-col items-center gap-4 sm:items-start">
        {/* Logo Image */}
        <Image
          src="/VIRGO-LOGO.png"  // Path to your logo image
          alt="Virgo Interactive Logo"
          width={75}  // Adjust width as needed
          height={75}  // Adjust height as needed
          priority
        />
        <h1 className="text-4xl font-bold text-center sm:text-left">Virgo Interactive</h1>
        <p className="text-lg text-center sm:text-left max-w-2xl">
          We create immersive experiences through games, websites, and apps. Stay tuned for our upcoming projects!
        </p>
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Game Section */}
        <section className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
          <Image
            className="rounded-lg shadow-lg"
            src="/Main-Capsule.png" // Update this path to match your actual image location
            alt="Winnie the Pooh: Beyond the Hundred Acre"
            width={400}
            height={225}
            priority
          />
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-semibold mb-4">Winnie the Pooh: Beyond the Hundred Acre</h2>
            <p className="text-lg mb-4">
              Dive into the Hundred Acre Wood with Winnie and friends in this exciting new adventure. Discover the magic and explore the world beyond.
            </p>
            {isClient && (
              <Link
                href="/game-presskit" // Link to the press kit page
                className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-700 transition"
              >
                View Press Kit
              </Link>
            )}
          </div>
        </section>

        {/* About Section */}
        <section className="text-center sm:text-left max-w-2xl">
          <h3 className="text-2xl font-semibold mb-4">About Us</h3>
          <p className="text-lg">
            Virgo Interactive specializes in crafting engaging games, websites, and apps. We blend creativity and technology to create innovative products that connect with users and provide lasting impact. Our team is passionate about pushing the boundaries of interactive experiences.
          </p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://www.instagram.com/virgointeractive" // Example social link
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/instagram-logo-instagram-social-media-icon-free-png.webp"
            alt="Instagram icon"
            width={20}
            height={20}
          />
          Instagram
        </a>
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://www.twitter.com/virgointeractive" // Example social link
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/Logo_of_Twitter.svg.png" // Replace with actual path for Twitter icon
            alt="Twitter icon"
            width={20}
            height={20}
          />
          Twitter
        </a>
      </footer>
    </div>
  );
}
