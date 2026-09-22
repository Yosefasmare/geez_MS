"use client";

import { useState } from "react";
import Image from "next/image";
import { Images, X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

interface PropertyGalleryProps {
  images?: {
    secureUrl: string;
    isCover?: boolean;
  }[];
  title: string;
}

export default function PropertyGallery({ images = [], title }: PropertyGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayImages = images || [];

  if (displayImages.length === 0) {
    return (
      <section className="py-4 bg-[#FAFAF8]">
        <div className="site-container">
          <div className="h-64 sm:h-80 w-full rounded-lg bg-stone-100 border border-stone-200/80 flex flex-col items-center justify-center text-stone-400 gap-2">
            <ImageIcon className="w-10 h-10 text-stone-300" />
            <span className="text-sm font-medium">No images available for this property</span>
          </div>
        </div>
      </section>
    );
  }

  const mainImage = displayImages?.[0]?.secureUrl;
  const image2 = displayImages?.[1]?.secureUrl;
  const image3 = displayImages?.[2]?.secureUrl;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % displayImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  return (
    <section className="py-4 bg-[#FAFAF8]">
      <div className="site-container">
        {/* Gallery Container */}
        <div className="relative">
          {/* Desktop Grid / Mobile Stack */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 lg:gap-4 rounded-lg overflow-hidden border border-stone-200/80 shadow-xs">
            {/* Main Image */}
            <div
              onClick={() => openLightbox(0)}
              className={`relative aspect-[16/10] md:aspect-auto ${
                displayImages.length > 1 ? "md:col-span-2" : "md:col-span-3"
              } md:h-[480px] lg:h-[540px] cursor-pointer group bg-stone-100 overflow-hidden`}
            >
              <Image
                src={mainImage}
                alt={`${title} Main Photo`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition-transform duration-500 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </div>

            {/* Side Images (if 2 or more images) */}
            {displayImages.length > 1 && (
              <div className="hidden md:flex flex-col gap-3.5 lg:gap-4 md:h-[480px] lg:h-[540px]">
                {/* Image 2 */}
                {image2 ? (
                  <div
                    onClick={() => openLightbox(1)}
                    className="relative flex-1 cursor-pointer group bg-stone-100 overflow-hidden"
                  >
                    <Image
                      src={image2}
                      alt={`${title} Photo 2`}
                      fill
                      sizes="33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  </div>
                ) : null}

                {/* Image 3 */}
                {image3 ? (
                  <div
                    onClick={() => openLightbox(2)}
                    className="relative flex-1 cursor-pointer group bg-stone-100 overflow-hidden"
                  >
                    <Image
                      src={image3}
                      alt={`${title} Photo 3`}
                      fill
                      sizes="33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  </div>
                ) : null}
              </div>
            )}
          </div>

          {/* Mobile Thumbnail Row */}
          {displayImages.length > 1 && (
            <div className="grid grid-cols-3 gap-2 mt-2 md:hidden">
              {displayImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className="relative aspect-video rounded overflow-hidden cursor-pointer border border-stone-200"
                >
                  <Image src={img.secureUrl} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          )}

          {/* Floating 'View All Photos' Button */}
          <button
            type="button"
            onClick={() => openLightbox(0)}
            className="absolute bottom-4 right-4 bg-[#1C1815]/90 hover:bg-[#C5A059] text-white text-xs font-semibold px-4 py-2.5 rounded-md shadow-md backdrop-blur-sm transition-all duration-200 flex items-center gap-2 border border-white/20"
          >
            <Images className="w-4 h-4 text-[#C5A059]" />
            <span>View all {displayImages.length} photos</span>
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
                ({currentIndex + 1} / {displayImages.length})
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
            {displayImages.length > 1 && (
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-2 sm:left-4 z-10 p-3 text-white bg-black/40 hover:bg-[#C5A059] rounded-full backdrop-blur-xs transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Current Large Photo */}
            <div className="relative w-full max-w-5xl h-[65vh] sm:h-[75vh]">
              <Image
                src={displayImages[currentIndex]?.secureUrl}
                alt={`${title} Photo ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Next Button */}
            {displayImages.length > 1 && (
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-2 sm:right-4 z-10 p-3 text-white bg-black/40 hover:bg-[#C5A059] rounded-full backdrop-blur-xs transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Bottom Thumbnails Strip */}
          {displayImages.length > 1 && (
            <div className="pt-2 border-t border-stone-800 flex items-center justify-center gap-2 overflow-x-auto max-w-4xl mx-auto py-2">
              {displayImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-16 h-12 rounded overflow-hidden shrink-0 border-2 transition-all ${
                    idx === currentIndex
                      ? "border-[#C5A059] opacity-100 scale-105"
                      : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image src={img.secureUrl} alt={`Thumb ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
