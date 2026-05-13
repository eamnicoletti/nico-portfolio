import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Em\u00EDlio Nicoletti - Mobile & Web Developer",
  author: "Em\u00EDlio Nicoletti",
  description:
    "Flutter/Dart software engineer from Brazil with 7+ years of experience building mobile, web, and backend products for startups, SaaS, and government-backed systems.",
  lang: "en",
  siteLogo: "/profile-pic-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "X", href: "https://x.com/ENicoletti4453" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/eamnicoletti" },
    { text: "Github", href: "https://github.com/eamnicoletti" },
    { text: "Youtube", href: "https://www.youtube.com/@nicoletti05" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://eamnicoletti.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Em\u00EDlio Nicoletti",
    specialty: "Mobile & Web Developer",
    summary:
      "Software engineer based in Brazil with experience building mobile, web, and backend products. I focus on creating polished digital experiences, with strong hands-on work in Flutter, scalable application architecture, integrations, and production-ready delivery.",
    email: "eamnicoletti@gmail.com",
  },
  experience: [
    {
      company: "Independent SaaS & Mobile Products",
      position: "Founder / Software Engineer",
      startDate: "2024",
      endDate: "Present",
      summary: [
        "Built and launched Simule Agro, a production Flutter app for rural management with AI workflows, Firebase, Supabase, RevenueCat, Google Maps, FastAPI backend, localization, and GitHub Actions CI/CD.",
        "Owned architecture, UI/UX decisions, backend integrations, subscriptions, authentication, release strategy, debugging, and production maintenance across multiple products.",
        "Built adjacent SaaS products including Baanzai and Vokos AI, bringing the same product engineering mindset across mobile and full-stack work.",
      ],
    },
    {
      company: "Wavv Dating",
      position: "Flutter Frontend Engineer / UX/UI Lead",
      startDate: "Sep 2024",
      endDate: "Present",
      summary: [
        "Contribute to a Flutter-based AI dating app for a US remote team, implementing frontend features and improving product flows.",
        "Led UX/UI redesign efforts while keeping the codebase maintainable through reusable patterns and collaboration with product stakeholders.",
      ],
    },
    {
      company: "Fiscaliza / IDAF Government Project",
      position: "Full-Stack Flutter Engineer",
      startDate: "2022",
      endDate: "2024",
      summary: [
        "Built an offline-first Flutter mobile app and web platform used by field agents during government inspections in real field conditions.",
        "Implemented synchronization, local persistence, forms, geospatial routines, and backend communication using Dart and Serverpod.",
        "Worked with GitHub Actions CI/CD, GCP, and published the coordinate_converter Dart package for geospatial workflows.",
      ],
    },
    {
      company: "NerdES",
      position: "Full-Stack Software Engineer",
      startDate: "2017",
      endDate: "2020",
      summary: [
        "Delivered custom software for startups and businesses across web, mobile, backend, planning, and project execution.",
        "Helped build InfraA\u00E7\u00F5es, a React Native app for traffic enforcement that surpassed 100,000 Play Store downloads and generated recurring revenue.",
        "Contributed to education and operations products using Laravel, React, React Native, MySQL, Firebase, Docker, and GCP.",
      ],
    },
    {
      company: "Freelance Design & Product Work",
      position: "Graphic & Motion Designer / UX-Oriented Product Builder",
      startDate: "2021",
      endDate: "Present",
      summary: [
        "Delivered branding, visual identity, motion design, and advertising materials for 20+ clients across 40+ approved projects.",
        "Strengthened product design, visual communication, and UX thinking through hands-on creative work for digital products and campaigns.",
      ],
    },
  ],
  projects: [
    {
      name: "Simule Agro",
      summary:
        "Production Flutter app for rural management with AI-assisted and agentic workflows, built with Flutter, Firebase (Anlytics & Crashlytics), Supabase, RevenueCat, Google Maps, FastAPI (Python) and REST API's.",
      logo: "/logos/simule-agro.png",
      linkPreview: "https://apps.apple.com/app/simule-agro/id6758867671/",
      image: "/demos/simule-agro-demo.webp",
    },
    {
      name: "Wavv Dating",
      summary:
        "AI dating product built for a US remote team, with Flutter frontend work focused on user flows, content-based matching experiences, and UX/UI refinement.",
      logo: "/logos/wavv.png",
      linkPreview: "https://apps.apple.com/us/app/wavv-dating/id6478108179",
      image: "/demos/wavv-demo.webp",
    },
    {
      name: "Baanzai",
      summary:
        "AI-powered study platform built with Next.js, Supabase, Stripe, and adaptive learning workflows for personalized student progress.",
      logo: "/logos/baanzai.webp",
      linkPreview: "https://baanzai.com/",
      image: "/demos/baanzai-demo.webp",
    },
    {
      name: "Vokos AI",
      summary:
        "Full-stack legal task management platform for law firms with Kanban workflows, automated email-to-task pipelines, delegation features, and AI-assisted operations, built with Next.js, FastAPI, Python, Supabase, Stripe, and Gemini.",
      logo: "/logos/vokos.png",
      linkPreview: "https://vokosai.com.br/",
      image: "/demos/vokosai-demo.webp",
    },
    {
      name: "Fiscaliza",
      summary:
        "Offline-first inspection system built with Flutter, local persistence, synchronization, geospatial workflows, and Dart backend architecture with Serverpod.",
      logo: "/logos/fiscaliza.png",
      image: "/demos/fiscaliza-demo.webp",
    },
    {
      name: "Coordinate Converter",
      summary:
        "Open-source Dart package for converting UTM, DMS, and Decimal Degrees using the WGS84 ellipsoid model, published on pub.dev. Hundreds of downloads.",
      logo: "/logos/coordinater-converter.png",
      linkPreview: "https://pub.dev/packages/coordinate_converter",
      linkSource: "https://github.com/eamnicoletti/coordinate_converter",
      image: "/demos/coordinate-converter-demo.webp",
    },
    {
      name: "Forme Seguro",
      summary:
        "Graduation fund management platform with web system, mobile apps, website, and payment API built to support administration, financial control, and operational workflows. Stack: Laravel, PHP, MySQL and Bootstrap.",
      logo: "/logos/forme-seguro.png",
      linkPreview: "https://formeseguro.com.br",
      image: "/demos/forme-seguro-demo.webp",
    },
    {
      name: "Exatamente Qu\u00EDmica",
      summary:
        "Education platform for students and teachers with exercises, video lessons, performance tracking, admin tools, REST API, website, and companion mobile apps, built with React & React Native.",
      logo: "/logos/exatamente.png",
      linkPreview: "https://www.instagram.com/exatamentequimica",
      image: "/demos/exatamente-demo.webp",
    },
    {
      name: "Infra\u00E7\u00F5es",
      summary:
        "Mobile app for traffic enforcement agents that reached more than 100,000 Play Store downloads and generated recurring revenue in a real operational environment. Stack: Java, Firebase and In-App Purchases.",
      logo: "/logos/infracoes.png",
      image: "/demos/infracoes-demo.webp",
    },
    {
      name: "Resuma\u00ED",summary:
      "AI case study built to explore Next.js and LLM integrations in a real deployed app, using OpenAI and Gemini in a fallback architecture alongside LangChain, Clerk, Stripe, NeonDB, and UploadThing.",
      logo: "/logos/resumai.png",
      linkSource: "https://github.com/eamnicoletti/resumai",
      linkPreview: "https://resumai-three.vercel.app/",
      image: "/demos/resumai-demo.webp",
    },
  ],
  about: {
    description: `
      Hi, I’m Emílio Nicoletti, a Flutter / Dart software engineer from Brazil with 7+ years of experience building mobile, web, and backend products. My strongest work is in mobile product development, especially Flutter apps that need clean architecture, polished UX, reliable integrations, and production-ready delivery.

      Over the years, I’ve worked across startups, independent SaaS, software consulting, and government-backed systems. That mix made me comfortable reading unfamiliar repositories, debugging complex issues, shipping features fast, and balancing product quality with execution speed for real users.
    `,
    image: "/profile-pic-big.jpg",
  },
};
