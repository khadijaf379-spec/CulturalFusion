"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

type ProductGalleryProps = {
  images: string[];
  productName: string;
};

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const handlePrev = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails (vertical on desktop, horizontal on mobile) */}
      {images.length > 1 && (
        <div className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 shrink-0">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedImageIndex(idx)}
              className={`relative w-16 h-22 sm:w-20 sm:h-28 shrink-0 overflow-hidden bg-[#E9E1D5] border transition-all ${
                selectedImageIndex === idx
                  ? "border-[#1D1D1B] ring-1 ring-[#1D1D1B]"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}

      {/* Main Image Display */}
      <div className="relative flex-1 aspect-[3/4] bg-[#E9E1D5] overflow-hidden group">
        <Image
          src={images[selectedImageIndex] || images[0]}
          alt={`${productName} view ${selectedImageIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center cursor-zoom-in transition-transform duration-500 ease-out group-hover:scale-105"
          onClick={() => setIsZoomOpen(true)}
        />

        {/* Zoom trigger button */}
        <button
          type="button"
          onClick={() => setIsZoomOpen(true)}
          className="absolute bottom-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-[#1D1D1B] hover:text-[#A88B5A] shadow-md transition-colors"
          aria-label="Zoom image"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        {/* Arrow navigators for multiple images */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full text-[#1D1D1B] hover:bg-white transition-opacity opacity-0 group-hover:opacity-100 shadow-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full text-[#1D1D1B] hover:bg-white transition-opacity opacity-0 group-hover:opacity-100 shadow-sm"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Fullscreen Zoom Lightbox Modal */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setIsZoomOpen(false)}
            className="absolute top-5 right-5 p-2 text-white/80 hover:text-white transition-colors z-50"
            aria-label="Close zoom modal"
          >
            <X className="w-7 h-7" />
          </button>

          <div className="relative w-full max-w-4xl h-[85vh]">
            <Image
              src={images[selectedImageIndex]}
              alt={`${productName} zoomed`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                aria-label="Previous zoomed image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                aria-label="Next zoomed image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
