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
    screenshots: string[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
  };
}

export const projects: Project[] = [
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
      heroImage: "/images/aviation-after.jpg",
      challenge:
        "Aviation Expeditions had an outdated website that wasn't reflecting the calibre of their flightseeing tours across Alaska. The old site was slow, difficult to navigate on mobile, and wasn't converting the traffic they were getting from search. Potential customers were bouncing before they ever saw what was on offer.",
      approach:
        "We rebuilt the site from the ground up with a modern, performance-first approach. Large, immersive photography takes centre stage — letting the Alaskan landscape sell itself. The booking flow was simplified to reduce friction, and we implemented proper SEO structure to capture organic traffic for key flightseeing search terms. The entire site was built mobile-first, since most tourists research on their phones.",
      result:
        "The new site loads in under 2 seconds, ranks for targeted tour keywords, and has seen a significant increase in online enquiries. The client reported that customers frequently comment on how professional and easy-to-use the website is.",
      screenshots: ["/images/aviation-after.jpg"],
      testimonial: {
        quote:
          "Sean and Mark completely transformed our online presence. Our old site was outdated and losing us bookings — the new one is fast, modern, and our enquiries have gone through the roof. They genuinely cared about getting it right.",
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
        "Sven's Basecamp Hostel in Seward, Alaska had a dated website that didn't capture the energy and community spirit of the hostel. Their booking process was clunky — guests had to leave the site entirely to make a reservation through Cloudbeds, creating a disjointed experience that was costing them direct bookings.",
      approach:
        "We redesigned the site with a vibrant, adventurous aesthetic that matches the hostel's personality. The key technical challenge was integrating the Cloudbeds booking engine seamlessly into the site, so guests can check availability and book without ever leaving the page. We built custom integration components that pull live availability data and present it in a clean, intuitive interface. The site is fully responsive with particular attention paid to the mobile booking experience.",
      result:
        "Direct bookings through the website increased significantly after launch. The seamless Cloudbeds integration means guests can go from browsing to booked in under a minute. The hostel's brand now matches the experience guests actually have when they visit.",
      screenshots: ["/images/svens-after.jpg"],
    },
  },
  {
    slug: "ovens-soccer",
    name: "Ovens Soccer",
    url: "https://ovenssoccer.com",
    type: "New Build",
    industry: "Sports Organisation",
    description:
      "Brand new website built from scratch for a sports organisation. Clean, modern design with a mobile-first approach.",
    cardImage: "/images/ovens-new.jpg",
    accent: "#fbbf24",
    tags: ["New Build", "Mobile-First"],
    content: {
      heroImage: "/images/ovens-new.jpg",
      challenge:
        "Ovens Soccer needed their first proper website. As a growing sports organisation, they had no online presence beyond social media. They needed a central hub for match schedules, registration information, news updates, and club contacts — something professional that parents and players could rely on.",
      approach:
        "We built a clean, modern site from scratch with a mobile-first approach — knowing that most parents would be checking schedules and updates from their phones on the sideline. The design uses bold colours from the club's existing branding, with clear navigation that puts the most important information (fixtures, registration, contacts) front and centre. We structured the content so it's easy for the club to update without technical knowledge.",
      result:
        "The club now has a professional online presence that serves as the single source of truth for all club information. Parents can quickly find match schedules and registration details, and the club committee can easily keep content up to date. It's become a genuine hub for the organisation.",
      screenshots: ["/images/ovens-new.jpg"],
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
    cardImage: "/images/kingdom-before.png",
    accent: "#34d399",
    tags: ["New Build", "Business", "Responsive"],
    content: {
      heroImage: "/images/kingdom-before.png",
      challenge:
        "Kingdom Property Care is a property maintenance company that was relying entirely on word-of-mouth and social media for new business. They needed a professional website that would establish credibility, clearly communicate their range of services, and make it easy for potential customers in their service areas to get in touch.",
      approach:
        "We designed a clean, professional site that puts trust signals and service information front and centre. The layout clearly presents each service offered, with a service area map so potential customers can immediately see if they're covered. Multiple contact options are accessible from every page — phone, email, and a simple enquiry form. The design is deliberately straightforward and professional, matching the no-nonsense reliability of the business.",
      result:
        "The website gives Kingdom Property Care a professional digital presence that backs up their word-of-mouth reputation. New customers can find them through search, see exactly what they offer, and get in touch within seconds. The client has reported a steady stream of enquiries coming through the website since launch.",
      screenshots: ["/images/kingdom-before.png"],
    },
  },
];
