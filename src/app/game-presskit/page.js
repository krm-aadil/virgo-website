"use client";  // Add this line to mark the component as client-side

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function GamePressKit() {
  return (
    <div className="p-8">
      <header className="flex flex-col items-center gap-4 sm:items-start">
        {/* Logo Image */}
        <Image
          src="/VIRGO-LOGO.png"  // Path to your logo image
          alt="Virgo Interactive Logo"
          width={75}  // Adjust width as needed
          height={75}  // Adjust height as needed
          priority
        />
      </header>

      {/* Back Button to Home */}
      <Link
        href="/"
        className="text-blue-600 hover:text-blue-800 mb-6 inline-block"
      >
        &larr; Back to Home
      </Link>

      <h1 className="text-3xl font-semibold mb-4">Winnie the Pooh: Beyond the Hundred Acre - Press Kit</h1>
      
      <p className="text-lg mb-6">
        Welcome to the press kit for "Winnie the Pooh: Beyond the Hundred Acre"! This game is an immersive adventure that lets you explore the Hundred Acre Wood with Winnie and friends.
      </p>

      {/* Add other press kit content here (images, trailers, press releases, etc.) */}
      <h2 className="text-2xl font-semibold mb-4">Game Overview</h2>
      <p className="text-lg">
        "Winnie the Pooh: Beyond the Hundred Acre" is an exciting game that lets players dive deep into the magical world of the Hundred Acre Wood. Explore new areas, solve puzzles, and join Pooh on his adventures.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Press Assets</h2>
      {/* Add downloadable images, trailers, or other media here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <Image
            src="/3.png" // You can include a preview of the game image here
            alt="Winnie the Pooh: Beyond the Hundred Acre"
            className="w-full rounded-lg"
            width={600} // Set an appropriate width
            height={338} // Set an appropriate height
            priority
          />
        </div>
        <div>
          {/* Add another image or asset if necessary */}
          <Image
            src="/4.png" // Replace with actual screenshot or press material
            alt="Game Screenshot"
            className="w-full rounded-lg"
            width={600} // Set an appropriate width
            height={338} // Set an appropriate height
            priority
          />
        </div>
      </div>
      
      {/* Optionally add a download link or PDF */}
      <div className="mt-6">
  <a
    href="https://drive.google.com/drive/folders/1cXNelvNhq7R6aBDl0Y3PJjur-T-tdw2C?usp=sharing" // Your Google Drive folder link
    className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-700 transition"
    target="_blank"  // Ensures the link opens in a new tab
    rel="noopener noreferrer" // Security best practice for opening links in new tab
  >
    View on Gdrive
  </a>
</div>

    </div>
  );
}
