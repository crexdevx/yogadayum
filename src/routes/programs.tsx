import { useEffect, useRef, useState, type TouchEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Camera,
  ChevronDown,
  CircleCheck,
  Clock3,
  IndianRupee,
  Sparkles,
  Users,
  X,
} from "lucide-react";

import courseYogaPranayama from "@/assets/course-yoga-pranayama.webp";
import courseYogaEducation from "@/assets/course-yoga-education.webp";
import courseDiplomaYoga from "@/assets/course-diploma-yoga.webp";
import courseDiplomaFoundations from "@/assets/course-diploma-foundations.webp";
import courseMeditation from "@/assets/course-meditation.webp";
import courseYogaKids from "@/assets/course-yoga-kids.webp";
import logoImg from "@/assets/north-east-yoga-logo.webp";
import meditationGalleryOne from "@/assets/gallery-meditation-1.webp";
import meditationGalleryTwo from "@/assets/gallery-meditation-2.webp";
import yogaThreeMonthsOne from "@/assets/gallery-yoga-3-months-1.webp";
import yogaThreeMonthsTwo from "@/assets/gallery-yoga-3-months-2.webp";
import yogaThreeMonthsThree from "@/assets/gallery-yoga-3-months-3.webp";
import yogaSixMonthsOne from "@/assets/gallery-yoga-6-months-1.webp";
import yogaSixMonthsTwo from "@/assets/gallery-yoga-6-months-2.webp";
import diplomaYogaGalleryOne from "@/assets/gallery-diploma-yoga-1.webp";
import yogaKidsGalleryOne from "@/assets/gallery-yoga-kids-1.webp";
import yogaKidsGalleryTwo from "@/assets/gallery-yoga-kids-2.webp";
import { Button } from "@/components/ui/button";
import { FloatingHeader } from "@/components/floating-header";

type Course = {
  title: string;
  description: string;
  image?: string;
  alt: string;
  duration: string;
  fee: string;
  category: string;
  accent: "teal" | "sage" | "sun";
  gallery: string[];
};

const courses: Course[] = [
  {
    title: "Certification in Yoga & Pranayama",
    description: "Build a steady practice through mindful movement and conscious breathwork.",
    image: courseYogaPranayama,
    alt: "Yoga and pranayama certification course artwork",
    duration: "3 Months",
    fee: "To be added",
    category: "Certification",
    accent: "teal",
    gallery: [yogaThreeMonthsOne, yogaThreeMonthsTwo, yogaThreeMonthsThree],
  },
  {
    title: "Certification in Yoga Education",
    description: "A 6-month advance level certificate course in Yoga Education under the authorization of the World Yoga Development Society.",
    image: courseYogaEducation,
    alt: "Yoga education certification course artwork",
    duration: "6 Months",
    fee: "To be added",
    category: "Certification",
    accent: "sun",
    gallery: [yogaSixMonthsOne, yogaSixMonthsTwo],
  },
  {
    title: "Diploma in Yoga Education",
    description: "A one-year diploma course in Yoga Education under the authorization of the World Yoga Development Society.",
    image: courseDiplomaYoga,
    alt: "Diploma in yoga education course artwork",
    duration: "1 Year",
    fee: "To be added",
    category: "Diploma",
    accent: "sage",
    gallery: [diplomaYogaGalleryOne],
  },
  {
    title: "Diploma Foundations",
    description: "A practical path into professional yoga education and confident instruction.",
    image: courseDiplomaFoundations,
    alt: "Diploma in yoga foundations certification course artwork",
    duration: "120 Hours",
    fee: "To be added",
    category: "Diploma",
    accent: "teal",
    gallery: [],
  },
  {
    title: "Meditation Classes",
    description: "Learn simple, lasting practices for a calmer mind and a balanced life.",
    image: courseMeditation,
    alt: "Meditation classes course artwork",
    duration: "Details Soon",
    fee: "₹1,000.00",
    category: "Meditation",
    accent: "sage",
    gallery: [meditationGalleryOne, meditationGalleryTwo],
  },
  {
    title: "Yoga for Kids",
    description: "A separate special batch for kids aimed at their physical, mental, and personality development. It includes special classes on performing Artistic Yoga and Rhythmic Yoga synchronized with music for various Yoga Competition stages.",
    image: courseYogaKids,
    alt: "Yoga for kids course artwork",
    duration: "Details Soon",
    fee: "₹1,000.00",
    category: "Kids Yoga",
    accent: "sun",
    gallery: [yogaKidsGalleryOne, yogaKidsGalleryTwo],
  },
  {
    title: "Yoga Retreat Program",
    description: "A dedicated retreat experience for rest, practice, and mindful renewal.",
    alt: "Yoga retreat course image placeholder",
    duration: "Details Soon",
    fee: "To be added",
    category: "Retreat",
    accent: "teal",
    gallery: [],
  },
  {
    title: "Professional Yoga Teacher Training",
    description: "A 9-month Yoga Teacher Training Course under the authorization of the World Yoga Development Society.",
    alt: "Professional yoga teacher training course image placeholder",
    duration: "9 Months",
    fee: "To be added",
    category: "Teacher Training",
    accent: "sage",
    gallery: [],
  },
  {
    title: "Complete Health, Fitness & Wellness",
    description: "A complete health and fitness programme through yoga — full details will be added when confirmed.",
    alt: "Complete health, fitness and wellness course image placeholder",
    duration: "Details Soon",
    fee: "₹1,500.00",
    category: "Health & Fitness",
    accent: "teal",
    gallery: [],
  },
  {
    title: "Yoga with Props",
    description: "Yoga practice by using various props for support, alignment, and a deeper practice.",
    alt: "Yoga with props course image placeholder",
    duration: "Details Soon",
    fee: "₹1,500.00",
    category: "Yoga",
    accent: "sun",
    gallery: [],
  },
];

const accordionItems = [
  { title: "About the Course", icon: BookOpen },
  { title: "What You’ll Learn", icon: CircleCheck },
  { title: "Course Details", icon: CalendarDays },
  { title: "Fee & Payment", icon: IndianRupee },
  { title: "Who Can Join", icon: Users },
];

export const Route = createFileRoute("/programs")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Yoga Courses in Guwahati | North East Yoga" },
      {
        name: "description",
        content: "Explore seven yoga, pranayama, meditation, diploma, kids, and retreat programs at North East Yoga in Guwahati.",
      },
      { property: "og:title", content: "Yoga Courses in Guwahati | North East Yoga" },
      {
        property: "og:description",
        content: "Explore seven thoughtfully guided yoga and meditation programs for practice, wellbeing, and professional learning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  const [galleryCourse, setGalleryCourse] = useState<Course | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const closeGallery = () => {
    setGalleryCourse(null);
    setGalleryIndex(0);
  };

  const showPrevious = () => setGalleryIndex((current) => {
    const count = galleryCourse?.gallery.length || 3;
    return (current + count - 1) % count;
  });
  const showNext = () => setGalleryIndex((current) => {
    const count = galleryCourse?.gallery.length || 3;
    return (current + 1) % count;
  });

  useEffect(() => {
    if (!galleryCourse) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [galleryCourse]);

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX;
    touchStartX.current = null;
    if (startX === null || endX === undefined || Math.abs(startX - endX) < 45) return;
    if (startX > endX) showNext();
    else showPrevious();
  };

  const galleryItems = galleryCourse?.gallery.length ? galleryCourse.gallery : [null, null, null];

  return (
    <main className="min-h-screen bg-course-canvas text-course-ink">
      <section className="course-hero relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-24">
        <FloatingHeader />
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-course-hero-muted">North East Yoga & Meditation Centre</p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-course-hero-foreground sm:text-6xl lg:text-7xl">
            Our Courses
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-course-hero-muted sm:text-lg sm:leading-8">
            Transform your mind, body, and life through the power of yoga.
          </p>
          <nav aria-label="Course categories" className="courses-scroll mt-8 flex gap-2 overflow-x-auto pb-2">
            {["All", "Certification", "Diploma", "Teacher Training", "Meditation", "Kids", "Health & Fitness", "Retreat"].map((category, index) => (
              <span
                key={category}
                className={index === 0
                  ? "shrink-0 rounded-full bg-course-hero-foreground px-4 py-2 text-xs font-semibold text-course-hero"
                  : "shrink-0 rounded-full border border-course-hero-line px-4 py-2 text-xs font-semibold text-course-hero-foreground"
                }
              >
                {category}
              </span>
            ))}
          </nav>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-6 px-3 py-8 sm:px-6 sm:py-12 lg:space-y-10 lg:px-8 lg:py-16">
        {courses.map((course, courseIndex) => (
          <CourseSection
            key={course.title}
            course={course}
            index={courseIndex}
            onOpenGallery={() => {
              setGalleryCourse(course);
              setGalleryIndex(0);
            }}
          />
        ))}
      </div>

      {galleryCourse ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${galleryCourse.title} photo gallery`}
          className="fixed inset-0 z-50 flex flex-col bg-course-gallery text-course-gallery-foreground"
          onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-course-gallery-line px-4 py-4 sm:px-8">
            <div className="min-w-0">
              <p className="text-xs text-course-gallery-muted">{galleryIndex + 1} / {galleryItems.length}</p>
              <h2 className="truncate font-serif text-xl sm:text-2xl">{galleryCourse.title}</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={closeGallery} aria-label="Close photo gallery" className="shrink-0 text-course-gallery-foreground hover:bg-course-gallery-hover hover:text-course-gallery-foreground">
              <X className="size-5" />
            </Button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center p-4 sm:p-8">
            <div className="flex aspect-[4/5] max-h-full w-full max-w-3xl items-center justify-center overflow-hidden rounded-lg border border-course-gallery-line bg-course-gallery-panel sm:aspect-[4/3]">
              {galleryItems[galleryIndex] ? (
                <img
                  src={galleryItems[galleryIndex]}
                  alt={`${galleryCourse.title} gallery photo ${galleryIndex + 1}`}
                  className="size-full object-contain"
                />
              ) : (
                <div className="flex flex-col items-center justify-center px-8 text-center">
                  <Camera aria-hidden="true" className="size-12 text-course-gallery-muted" />
                  <p className="mt-5 font-serif text-2xl">Course photo {galleryIndex + 1}</p>
                  <p className="mt-2 text-sm text-course-gallery-muted">Gallery image will be added here.</p>
                </div>
              )}
            </div>
            <Button variant="ghost" size="icon" onClick={showPrevious} aria-label="Previous photo" className="absolute left-3 rounded-full border border-course-gallery-line bg-course-gallery-panel text-course-gallery-foreground hover:bg-course-gallery-hover sm:left-8">
              <ArrowLeft className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={showNext} aria-label="Next photo" className="absolute right-3 rounded-full border border-course-gallery-line bg-course-gallery-panel text-course-gallery-foreground hover:bg-course-gallery-hover sm:right-8">
              <ArrowRight className="size-5" />
            </Button>
          </div>

          <div className="flex justify-center gap-3 px-4 pb-6">
            {galleryItems.map((photo, photoIndex) => (
              <Button
                key={photoIndex}
                variant="ghost"
                onClick={() => setGalleryIndex(photoIndex)}
                aria-label={`Show photo ${photoIndex + 1}`}
                aria-current={galleryIndex === photoIndex ? "true" : undefined}
                className={galleryIndex === photoIndex
                  ? "h-16 w-14 border-2 border-course-gallery-active bg-course-gallery-hover p-0"
                  : "h-16 w-14 border border-course-gallery-line bg-course-gallery-panel p-0 opacity-70"
                }
              >
                  {photo ? (
                    <img
                      src={photo}
                      alt={`${galleryCourse.title} thumbnail ${photoIndex + 1}`}
                      className="size-full object-cover"
                    />
                  ) : <Camera className="size-4" />}
              </Button>
            ))}
          </div>
        </div>
      ) : null}
    </main>
  );
}

function CourseSection({ course, index, onOpenGallery }: { course: Course; index: number; onOpenGallery: () => void }) {
  const reverse = index % 2 === 1;
  const accentClass = course.accent === "sun"
    ? "bg-course-sun"
    : course.accent === "sage"
      ? "bg-course-sage"
      : "bg-course-mist";

  return (
    <article className={`course-panel overflow-hidden rounded-lg border border-course-border ${accentClass}`}>
      <div className="grid lg:grid-cols-[minmax(18rem,0.82fr)_minmax(0,1.18fr)]">
        <div className={reverse ? "lg:order-2" : undefined}>
          {course.image ? (
            <img
              src={course.image}
              alt={course.alt}
              className="aspect-square w-full object-cover"
              width={1200}
              height={1200}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
            />
          ) : (
            <div className="flex aspect-square h-full min-h-72 w-full flex-col items-center justify-center bg-course-placeholder px-8 text-center text-course-muted">
              <Sparkles aria-hidden="true" className="size-12" />
              <p className="mt-5 font-serif text-2xl text-course-ink">Course image coming soon</p>
              <p className="mt-2 text-sm">Course artwork will appear here.</p>
            </div>
          )}
        </div>

        <div className="flex flex-col p-5 sm:p-8 lg:p-10">
          <div className="flex min-w-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-course-accent">
            <Sparkles aria-hidden="true" className="size-4 shrink-0" />
            <span className="truncate">{course.category}</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-course-ink sm:text-4xl">{course.title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-course-body sm:text-base sm:leading-7">{course.description}</p>

          <dl className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-course-border bg-course-surface/80 p-4">
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase text-course-muted"><Clock3 aria-hidden="true" className="size-4" /> Duration</dt>
              <dd className="mt-2 font-serif text-lg text-course-ink">{course.duration}</dd>
            </div>
            <div className="rounded-lg border border-course-border bg-course-surface/80 p-4">
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase text-course-muted"><IndianRupee aria-hidden="true" className="size-4" /> Course Fee</dt>
              <dd className="mt-2 font-serif text-lg text-course-ink">{course.fee}</dd>
            </div>
          </dl>

          <div className="mt-6 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
            <Button asChild size="lg" className="h-12 rounded-full bg-course-cta text-course-cta-foreground hover:bg-course-cta-hover">
              <Link to="/enroll" search={{ course: course.title }}>
                Enquire / Join Now <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={onOpenGallery} className="h-12 rounded-full border-course-accent text-course-accent hover:bg-course-surface hover:text-course-accent">
              <Camera aria-hidden="true" className="size-4" /> View Photos
            </Button>
          </div>

          <section aria-label={`${course.title} gallery preview`} className="mt-7">
            <div className="grid grid-cols-3 gap-2">
              {(course.gallery.length ? course.gallery : [null, null, null]).map((photo, photoIndex) => (
                <Button
                  key={photoIndex}
                  type="button"
                  variant="ghost"
                  onClick={onOpenGallery}
                  aria-label={`Open ${course.title} gallery at photo ${photoIndex + 1}`}
                  className="group h-auto aspect-[4/3] rounded-lg border border-course-border bg-course-placeholder p-0 text-course-muted transition-colors hover:border-course-accent hover:bg-course-placeholder hover:text-course-accent"
                >
                  {photo ? (
                    <img src={photo} alt={`${course.title} gallery preview ${photoIndex + 1}`} className="size-full rounded-[inherit] object-cover" />
                  ) : <Camera aria-hidden="true" className="size-5 transition-transform group-hover:scale-110" />}
                </Button>
              ))}
            </div>
            <p className="mt-2 text-xs text-course-muted">
              {course.gallery.length ? `${course.gallery.length} gallery photo${course.gallery.length === 1 ? "" : "s"}` : "Gallery photos will be added here."}
            </p>
          </section>

          <div className="mt-7 divide-y divide-course-border border-y border-course-border">
            {accordionItems.map(({ title, icon: Icon }, itemIndex) => (
              <details key={title} className="group py-1" open={itemIndex === 0 && index === 0}>
                <summary className="flex cursor-pointer list-none items-center gap-3 py-4 text-sm font-semibold text-course-ink marker:content-none">
                  <Icon aria-hidden="true" className="size-4 shrink-0 text-course-accent" />
                  <span className="min-w-0 flex-1">{title}</span>
                  <ChevronDown aria-hidden="true" className="size-4 shrink-0 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="pb-4 pl-7 text-sm leading-6 text-course-body">
                  {title === "Fee & Payment"
                    ? course.fee === "To be added"
                      ? "The exact fee and payment structure will be added when confirmed."
                      : `The course fee is ${course.fee}. Payment details will be shared when you enquire.`
                    : "Full information will be added when the course details are provided."}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}