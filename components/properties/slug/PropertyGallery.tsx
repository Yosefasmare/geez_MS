"use client";

import { useState } from "react";
import Image from "next/image";
import { Images, X, ChevronLeft, ChevronRight } from "lucide-react";

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const mainImage = images[0] || "/prop-villa.png";
  const image2 = images[1] || "/hero-property.png";
  const image3 = images[2] || "/about-realestate.png";

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-4 bg-[#FAFAF8]">
      <div className="site-container">
        {/* Gallery Container */}
        <div className="relative">
          {/* Desktop Grid / Mobile Stack */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 lg:gap-4 rounded-lg overflow-hidden border border-stone-200/80 shadow-xs">
            {/* Main Image (Left 2 cols on desktop) */}
            <div
              onClick={() => openLightbox(0)}
              className="relative aspect-[16/10] md:aspect-auto md:col-span-2 md:h-[480px] lg:h-[540px] cursor-pointer group bg-stone-100 overflow-hidden"
            >
              <Image
                src={mainImage}
                alt={`${title} Main Exterior`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition-transform duration-500 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </div>

            {/* Right Stacked 2 Images (1 col on desktop) */}
            <div className="hidden md:flex flex-col gap-3.5 lg:gap-4 md:h-[480px] lg:h-[540px]">
              {/* Image 2 */}
              <div
                onClick={() => openLightbox(1)}
                className="relative flex-1 cursor-pointer group bg-stone-100 overflow-hidden"
              >
                <Image
                  src={image2}
                  alt={`${title} View 2`}
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </div>

              {/* Image 3 */}
              <div
                onClick={() => openLightbox(2)}
                className="relative flex-1 cursor-pointer group bg-stone-100 overflow-hidden"
              >
                <Image
                  src={image3}
                  alt={`${title} View 3`}
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </div>
            </div>
          </div>

          {/* Mobile Thumbnail Row (Visible only on mobile) */}
          <div className="grid grid-cols-3 gap-2 mt-2 md:hidden">
            {images.slice(1, 4).map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx + 1)}
                className="relative aspect-video rounded overflow-hidden cursor-pointer border border-stone-200"
              >
                <Image src={img} alt={`Thumbnail ${idx + 2}`} fill className="object-cover" />
              </div>
            ))}
          </div>

          {/* Floating 'View All Photos' Button */}
          <button
            type="button"
            onClick={() => openLightbox(0)}
            className="absolute bottom-4 right-4 bg-[#1C1815]/90 hover:bg-[#C5A059] text-white text-xs font-semibold px-4 py-2.5 rounded-md shadow-md backdrop-blur-sm transition-all duration-200 flex items-center gap-2 border border-white/20"
          >
            <Images className="w-4 h-4 text-[#C5A059]" />
            <span>View all {images.length} photos</span>
          </button>
        </div>
      </div>

      {/* LIGHTBOX UI MODAL */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#14110F]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Escape") setLightboxOpen(false);
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "ArrowRight") nextImage();
          }}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white border-b border-stone-800 pb-4">
            <div className="flex items-center gap-3">
              <span className="font-bold text-sm tracking-wide text-white">{title}</span>
              <span className="text-xs text-stone-400 font-mono">
                ({currentIndex + 1} / {images.length})
              </span>
            </div>

            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="p-2 text-stone-400 hover:text-white hover:bg-stone-800 rounded-full transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Image View Container */}
          <div className="relative flex-1 my-4 flex items-center justify-center">
            {/* Previous Button */}
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-2 sm:left-4 z-10 p-3 text-white bg-black/40 hover:bg-[#C5A059] rounded-full backdrop-blur-xs transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Current Large Photo */}
            <div className="relative w-full max-w-5xl h-[65vh] sm:h-[75vh]">
              <Image
                src={images[currentIndex]}
                alt={`${title} Photo ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-2 sm:right-4 z-10 p-3 text-white bg-black/40 hover:bg-[#C5A059] rounded-full backdrop-blur-xs transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Thumbnails Strip */}
          <div className="pt-2 border-t border-stone-800 flex items-center justify-center gap-2 overflow-x-auto max-w-4xl mx-auto py-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-16 h-12 rounded overflow-hidden shrink-0 border-2 transition-all ${
                  idx === currentIndex
                    ? "border-[#C5A059] opacity-100 scale-105"
                    : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <Image src={img} alt={`Thumb ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
