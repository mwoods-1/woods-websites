export interface ProjectScreenshot {
  src: string;
  alt: string;
  /** "desktop" | "mobile" — used for layout sizing */
  type: "desktop" | "mobile";
}

export interface Project {
  slug: string;
  name: string;
  url: string;
  type: string;
  industry: string;
  description: string;
  cardImage: string;
  accent: string;
  tags: string[];
  content: {
    heroImage: string;
    challenge: string;
    approach: string;
    result: string;
    screenshots: ProjectScreenshot[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
  };
}

export const projects: Project[] = [
  {
    slug: "ovens-soccer",
    name: "Ovens Soccer",
    url: "https://ovenssoccer.com",
    type: "New Build",
    industry: "Sports Coaching",
    description:
      "Brand new website with integrated booking, payment processing, and a custom CMS for a professional football coaching business run by an NPL1 player.",
    cardImage: "/images/ovens-new.jpg",
    accent: "#fbbf24",
    tags: ["New Build", "Payment Integration", "CMS", "Mobile-First"],
    content: {
      heroImage: "/images/work/ovens-soccer/homepage-desktop.png",
      challenge:
        "Ovens Soccer is a professional football coaching business run by Brae Ovens, a current NPL1 player. He was relying entirely on social media and word-of-mouth to book clients for his private sessions, group training, and holiday clinics. He needed a proper website that would establish credibility, showcase his programs, and let parents book and pay online — plus a way to manage bookings, programs, and content himself without needing a developer for every update.",
      approach:
        "We built the site from scratch with a mobile-first approach, knowing that most parents would be browsing and booking from their phones. The design highlights Brae's NPL1 credentials and achievements to build trust, while clearly presenting each program — one-on-one sessions, small groups, team training, goalkeeper coaching, and holiday clinics. We integrated Stripe for seamless online payments and built a multi-step booking system that handles program selection, participant details, and payment in one flow. Behind the scenes, we built a custom admin dashboard and CMS so Brae can manage his programs, update pricing, add new holiday clinics, view bookings, and control site content — all without touching code.",
      result:
        "Brae now has a professional online presence that matches the quality of his coaching. Parents can browse programs, check availability, and book sessions directly through the site. The integrated booking and payment system has streamlined his operations, cutting out the manual back-and-forth and letting him focus on coaching. The custom CMS means he's fully self-sufficient — he can spin up a new holiday clinic, adjust pricing, or update his gallery in minutes.",
      screenshots: [
        { src: "/images/work/ovens-soccer/homepage-desktop.png", alt: "Ovens Soccer homepage — professional coaching brand", type: "desktop" },
        { src: "/images/work/ovens-soccer/programs-desktop.png", alt: "Training programs — all coaching options", type: "desktop" },
        { src: "/images/work/ovens-soccer/book-desktop.png", alt: "Booking system — integrated payment flow", type: "desktop" },
        { src: "/images/work/ovens-soccer/gallery-desktop.png", alt: "Training gallery — sessions and clinics in action", type: "desktop" },
        { src: "/images/work/ovens-soccer/admin-desktop.png", alt: "Admin dashboard — CMS for managing programs and bookings", type: "desktop" },
        { src: "/images/work/ovens-soccer/homepage-mobile.png", alt: "Mobile homepage", type: "mobile" },
        { src: "/images/work/ovens-soccer/programs-mobile.png", alt: "Mobile programs page", type: "mobile" },
        { src: "/images/work/ovens-soccer/book-mobile.png", alt: "Mobile booking flow", type: "mobile" },
      ],
    },
  },
  {
    slug: "aviation-expeditions",
    name: "Aviation Expeditions",
    url: "https://aviation-expeditions.com",
    type: "Redesign",
    industry: "Tourism · Alaska",
    description:
      "Complete website transformation for an Alaskan flightseeing tour company. Modernised the brand and optimised for conversions.",
    cardImage: "/images/aviation-after.jpg",
    accent: "#2ec4b6",
    tags: ["Redesign", "Performance", "SEO"],
    content: {
      heroImage: "/images/work/aviation-expeditions/homepage-desktop.png",
      challenge:
        "Aviation Expeditions had an outdated website that wasn't reflecting the calibre of their flightseeing tours across Alaska. The old site was slow, difficult to navigate on mobile, and wasn't converting the traffic they were getting from search. Potential customers were bouncing before they ever saw what was on offer.",
      approach:
        "We rebuilt the site from the ground up with a modern, performance-first approach. Large, immersive photography takes centre stage, letting the Alaskan landscape sell itself. The booking flow was simplified to reduce friction, and we implemented proper SEO structure to capture organic traffic for key flightseeing search terms. The entire site was built mobile-first, since most tourists research on their phones.",
      result:
        "The new site loads in under 2 seconds, ranks for targeted tour keywords, and has seen a significant increase in online enquiries. The client reported that customers frequently comment on how professional and easy-to-use the website is.",
      screenshots: [
        { src: "/images/work/aviation-expeditions/homepage-desktop.png", alt: "Aviation Expeditions homepage — immersive hero with Alaskan bush plane", type: "desktop" },
        { src: "/images/work/aviation-expeditions/tours-desktop.png", alt: "Tour experiences — showcasing flightseeing packages", type: "desktop" },
        { src: "/images/work/aviation-expeditions/about-desktop.png", alt: "Meet Your Pilot — building trust with credentials", type: "desktop" },
        { src: "/images/work/aviation-expeditions/faq-desktop.png", alt: "FAQ — answering common questions before enquiry", type: "desktop" },
        { src: "/images/work/aviation-expeditions/contact-desktop.png", alt: "Inquiry form — streamlined booking flow", type: "desktop" },
        { src: "/images/work/aviation-expeditions/homepage-mobile.png", alt: "Mobile homepage", type: "mobile" },
        { src: "/images/work/aviation-expeditions/tours-mobile.png", alt: "Mobile tours page", type: "mobile" },
        { src: "/images/work/aviation-expeditions/contact-mobile.png", alt: "Mobile contact page", type: "mobile" },
      ],
      testimonial: {
        quote:
          "Sean and Mark completely transformed our online presence. Our old site was outdated and losing us bookings. The new one is fast, modern, and our enquiries have gone through the roof. They genuinely cared about getting it right.",
        author: "Jake Thompson",
        role: "Owner, Aviation Expeditions",
      },
    },
  },
  {
    slug: "svens-basecamp",
    name: "Sven's Basecamp Hostel",
    url: "https://svensbasecamp.com",
    type: "Redesign + Integration",
    industry: "Hospitality · Alaska",
    description:
      "Modern redesign with seamless Cloudbeds booking integration. Transformed an outdated site into a vibrant, mobile-friendly experience.",
    cardImage: "/images/svens-after.jpg",
    accent: "#a78bfa",
    tags: ["Redesign", "Cloudbeds", "Integration"],
    content: {
      heroImage: "/images/svens-after.jpg",
      challenge:
        "Sven's Basecamp Hostel in Seward, Alaska had a dated website that didn't capture the energy and community spirit of the hostel. Their booking process was clunky, with guests having to leave the site entirely to make a reservation through Cloudbeds, creating a disjointed experience that was costing them direct bookings.",
      approach:
        "We redesigned the site with a vibrant, adventurous aesthetic that matches the hostel's personality. The key technical challenge was integrating the Cloudbeds booking engine seamlessly into the site, so guests can check availability and book without ever leaving the page. We built custom integration components that pull live availability data and present it in a clean, intuitive interface. The site is fully responsive with particular attention paid to the mobile booking experience.",
      result:
        "Direct bookings through the website increased significantly after launch. The seamless Cloudbeds integration means guests can go from browsing to booked in under a minute. The hostel's brand now matches the experience guests actually have when they visit.",
      screenshots: [
        { src: "/images/svens-after.jpg", alt: "Sven's Basecamp homepage — vibrant hostel design", type: "desktop" },
      ],
    },
  },
  {
    slug: "kingdom-property-care",
    name: "Kingdom Property Care",
    url: "https://kingdompropertycare.com",
    type: "New Build",
    industry: "Property Services",
    description:
      "Professional website for a property maintenance company. Clean design showcasing services, service areas, and easy contact options.",
    cardImage: "/images/work/kingdom-property-care/homepage-desktop.png",
    accent: "#34d399",
    tags: ["New Build", "Business", "Responsive"],
    content: {
      heroImage: "/images/work/kingdom-property-care/homepage-desktop.png",
      challenge:
        "Kingdom Property Care is a property maintenance company that was relying entirely on word-of-mouth and social media for new business. They needed a professional website that would establish credibility, clearly communicate their range of services, and make it easy for potential customers in their service areas to get in touch.",
      approach:
        "We designed a clean, professional site that puts trust signals and service information front and centre. The layout clearly presents each service offered, with a service area map so potential customers can immediately see if they're covered. Multiple contact options are accessible from every page: phone, email, and a simple enquiry form. The design is deliberately straightforward and professional, matching the no-nonsense reliability of the business.",
      result:
        "The website gives Kingdom Property Care a professional digital presence that backs up their word-of-mouth reputation. New customers can find them through search, see exactly what they offer, and get in touch within seconds. The client has reported a steady stream of enquiries coming through the website since launch.",
      screenshots: [
        { src: "/images/work/kingdom-property-care/homepage-desktop.png", alt: "Kingdom Property Care homepage — professional property services", type: "desktop" },
        { src: "/images/work/kingdom-property-care/services-desktop.png", alt: "Services — full range of property maintenance", type: "desktop" },
        { src: "/images/work/kingdom-property-care/gallery-desktop.png", alt: "Gallery — before and after project transformations", type: "desktop" },
        { src: "/images/work/kingdom-property-care/about-desktop.png", alt: "About — building trust with credentials", type: "desktop" },
        { src: "/images/work/kingdom-property-care/contact-desktop.png", alt: "Contact — easy enquiry form with phone CTA", type: "desktop" },
        { src: "/images/work/kingdom-property-care/homepage-mobile.png", alt: "Mobile homepage", type: "mobile" },
        { src: "/images/work/kingdom-property-care/services-mobile.png", alt: "Mobile services page", type: "mobile" },
        { src: "/images/work/kingdom-property-care/gallery-mobile.png", alt: "Mobile gallery page", type: "mobile" },
      ],
    },
  },
];
