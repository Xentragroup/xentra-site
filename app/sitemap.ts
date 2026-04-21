import type { MetadataRoute } from "next";

const BASE_URL = "https://xentragroup.co.uk";

const SEO_PAGES = [
  // Agency core
  "best-onlyfans-agency",
  "onlyfans-management-agency",
  "onlyfans-agency-uk",
  "onlyfans-agency-london",
  "onlyfans-agency-manchester",
  "onlyfans-agency-birmingham",
  "onlyfans-agency-leeds",
  "onlyfans-agency-glasgow",
  "onlyfans-agency-near-me",
  "onlyfans-agency-for-beginners",
  "onlyfans-agency-for-small-creators",
  "onlyfans-agency-review",
  "onlyfans-agency-vs-doing-it-yourself",
  "onlyfans-management-uk",
  "onlyfans-growth-agency",
  "onlyfans-marketing-agency",
  "top-onlyfans-agencies",
  "best-onlyfans-agency-uk",
  "fanvue-agency",
  "fanvue-management-agency",
  "best-fanvue-agency",
  // Agency decision
  "is-an-onlyfans-agency-worth-it",
  "should-i-join-an-onlyfans-agency",
  "pros-and-cons-of-onlyfans-agency",
  "do-onlyfans-agencies-actually-help",
  "how-do-onlyfans-agencies-work",
  "what-does-an-onlyfans-agency-do",
  // Getting started
  "how-to-start-onlyfans",
  "how-to-start-onlyfans-with-no-experience",
  "starting-onlyfans-as-a-beginner",
  "what-do-i-need-to-start-onlyfans",
  "onlyfans-beginner-guide",
  "is-onlyfans-worth-starting",
  // Earnings
  "how-much-can-you-make-on-onlyfans",
  "how-much-do-beginners-make-on-onlyfans",
  "how-to-make-money-on-onlyfans",
  "how-to-make-1k-a-month-on-onlyfans",
  "how-to-scale-onlyfans-income",
  "onlyfans-income-realistic",
  "onlyfans-earnings-beginner",
  // Growth
  "how-to-grow-onlyfans",
  "how-to-grow-onlyfans-fast",
  "how-to-grow-onlyfans-on-tiktok",
  "how-to-grow-onlyfans-on-instagram",
  "how-to-grow-onlyfans-without-explicit-content",
  "how-to-get-subscribers-on-onlyfans",
  "how-to-promote-onlyfans",
  "onlyfans-growth-strategy",
  "onlyfans-marketing-strategy",
  // Problems / troubleshooting
  "why-am-i-not-making-money-on-onlyfans",
  "why-am-i-not-getting-subscribers-on-onlyfans",
  "why-is-my-onlyfans-dead",
  "why-onlyfans-creators-fail",
  "onlyfans-not-making-money",
  "onlyfans-stuck-at-low-income",
  "onlyfans-account-not-growing",
  "how-to-fix-onlyfans-not-growing",
  // Personal brand
  "how-to-stand-out-on-onlyfans",
  "why-personal-branding-matters-on-onlyfans",
  "onlyfans-personal-brand-strategy",
  "how-to-build-a-personal-brand-as-a-creator",
  "how-to-build-a-personal-brand-for-onlyfans",
  "personal-branding-for-onlyfans",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const seoEntries: MetadataRoute.Sitemap = SEO_PAGES.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/apply`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...seoEntries,
  ];
}
