import { useState, useEffect } from "react";

const SLIDES = [
  {
    id: 1,
    tag: "⚡ Early Access Exclusive",
    title: "Summer Collection Drop",
    description: "Unlock free standard shipping, custom reward points, and up to 40% off our seasonal lineup.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
    link: "#"
  },
  {
    id: 2,
    tag: "🔒 Premium Quality",
    title: "Built For Travel",
    description: "Explore lightweight packs, durable fabrics, and weatherproof everyday carry essentials.",
    image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1400&q=80",
    link: "#"
  },
  {
    id: 3,
    tag: "✨ Velo Essentials",
    title: "The Minimalist Touch",
    description: "Clean silhouettes and premium material design options intended to be worn year-round.",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1400&q=80",
    link: "#"
  }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(slideTimer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? SLIDES.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === SLIDES.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-112.5 md:h-137.5 bg-stone-900 overflow-hidden group">
      <div className="absolute inset-0 w-full h-full">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover opacity-55 scale-102"
            />

            <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-900/40 to-transparent"></div>

            <div className="absolute inset-0 flex items-center px-6 md:px-16 lg:px-24">
              <div className="max-w-xl text-white space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {slide.tag}
                </span>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                  {slide.title}
                </h1>
                <p className="text-stone-200 text-sm md:text-base leading-relaxed max-w-md">
                  {slide.description}
                </p>
                <div className="pt-3">
                  <a
                    href={slide.link}
                    className="inline-flex justify-center items-center rounded-md bg-stone-900 border border-stone-800 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-stone-800 active:scale-[0.98] transition-all no-underline"
                  >
                    Shop Collection
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={handlePrev}
        className="hidden group-hover:flex absolute left-5 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white backdrop-blur-xs hover:bg-white/20 transition-all border border-white/10 cursor-pointer"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="hidden group-hover:flex absolute right-5 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white backdrop-blur-xs hover:bg-white/20 transition-all border border-white/10 cursor-pointer"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentIndex ? "w-6 bg-amber-500" : "w-2 bg-white/40"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}