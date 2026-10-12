import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useLocation, Link, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, data } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState, useEffect } from "react";
import { Phone, CalendarDays, ArrowUpRight, X, Menu, Mail, ShieldCheck, HeartPulse, Cloud, Stethoscope, Network, Check, Building2, FileCheck2, Clock, MonitorCheck, Award, Ambulance, Monitor, Users, CalendarClock, Activity, FlaskConical, BadgePercent, Truck, CheckCircle2, MapPin, Search } from "lucide-react";
import PocketBase from "pocketbase";
import ipaddr from "ipaddr.js";
import { RateLimiterMemory, RateLimiterRes } from "rate-limiter-flexible";
const streamTimeout = 5e3;
function handleRequest(request2, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request2.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request2.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request2.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const stylesheet = "/assets/index-DM-DuVkP.css";
const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/clinic", label: "Clinic & Day Care" },
  { to: "/compliance", label: "Turnkey OHC & Factory Compliance" },
  { to: "/health-packages", label: "Health Packages" },
  { to: "/branches", label: "Branches" },
  { to: "/contact", label: "Contact Us" }
];
function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isItemActive = (to) => {
    if (to === "/") {
      return location.pathname === "/" || location.pathname === "";
    }
    if (to === "/health-packages") {
      return location.pathname.startsWith("/health-packages") || location.pathname.startsWith("/product");
    }
    if (to === "/contact") {
      return location.pathname.startsWith("/contact") || location.pathname === "/enquiry";
    }
    return location.pathname === to || location.pathname.startsWith(to + "/");
  };
  return /* @__PURE__ */ jsxs("header", { className: "site-header", children: [
    /* @__PURE__ */ jsx("div", { className: "utility", children: /* @__PURE__ */ jsxs("div", { className: "wide", children: [
      /* @__PURE__ */ jsx("span", { children: "Occupational health. Clinical excellence. One trusted partner." }),
      /* @__PURE__ */ jsxs("a", { href: "tel:+919099941978", children: [
        /* @__PURE__ */ jsx("span", { className: "live-dot" }),
        "24x7 Emergency: +91 9099941978 ",
        /* @__PURE__ */ jsx(Phone, { size: 13 })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "brand-row wide", children: [
      /* @__PURE__ */ jsxs(Link, { className: "brand", to: "/", "aria-label": "Akshar Healthcare and OHC Private Limited", children: [
        /* @__PURE__ */ jsx("span", { className: "logo-frame", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "logo-mark",
            src: "https://horizons-cdn.hostinger.com/1a2b91ff-0a2d-48f1-b923-004e2adf1475/50c625dbe46142bb9b6db4f7154b2919.jpg",
            alt: ""
          }
        ) }),
        /* @__PURE__ */ jsxs("span", { className: "brand-name", children: [
          /* @__PURE__ */ jsx("strong", { children: "AKSHAR HEALTHCARE" }),
          /* @__PURE__ */ jsx("b", { children: "AND OHC PRIVATE LIMITED" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "header-note", children: [
        "Healthcare for your people.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("strong", { children: "Confidence for your enterprise." })
      ] }),
      /* @__PURE__ */ jsxs(Link, { to: "/health-packages", className: "button small", children: [
        /* @__PURE__ */ jsx(CalendarDays, { size: 17 }),
        " Book Appointment ",
        /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "mobile-toggle",
          "aria-label": open ? "Close navigation" : "Open navigation",
          "aria-expanded": open,
          onClick: () => setOpen(!open),
          children: open ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {})
        }
      )
    ] }),
    /* @__PURE__ */ jsx("nav", { className: `navigation ${open ? "is-open" : ""}`, "aria-label": "Main navigation", children: /* @__PURE__ */ jsx("div", { className: "wide", children: NAV_ITEMS.map((item) => /* @__PURE__ */ jsx(
      Link,
      {
        to: item.to,
        className: isItemActive(item.to) ? "active" : "",
        onClick: () => setOpen(false),
        children: item.label
      },
      item.to
    )) }) })
  ] });
}
const heroImage = "https://images.hostinger.com/6925b23e-a962-4a5a-8f18-307461e87151.png";
const clinicImage = "https://images.hostinger.com/70fdce18-78ad-4567-87d1-491b9890d876.png";
const address = "Shop No. 38/39, New Shakti Arcade, Vitthalapur - 382130, Mandal, Ahmedabad, Gujarat.";
const catalogueImages = {
  "Specialized Biomarker Diagnostic Screening": "https://images.hostinger.com/77de814c-a9be-4907-98d0-32b2f69b974b.png",
  "Urgent Care Illness Consultation": "https://images.hostinger.com/cf23b10e-8539-4e73-a938-7e6a49ad5e22.png",
  "DOT Physical Examination": "https://images.hostinger.com/4530c688-f8bd-4ca1-a4cf-1445cacf2392.png",
  "Workplace Drug & Alcohol Screening": "https://images.hostinger.com/43917376-1ab0-40e4-9638-085278b17528.png",
  "Annual Executive Health Assessment": "https://images.hostinger.com/4904ccff-6ac7-43e5-8916-5466ae4c1d3f.png",
  "Pre-Employment Health Screening": "https://images.hostinger.com/6212228d-6878-49a1-a1a8-d56706d46d7d.png",
  "Routine Urine Analysis": "https://images.hostinger.com/15ecc8da-8c4c-4195-8dd1-466f64c41fd2.png",
  "Comprehensive Blood Panel": "https://images.hostinger.com/9a4b6de5-d25e-4e23-a7a4-1b763262f77f.png",
  "Primary Care Consultation": "https://images.hostinger.com/98c5d15d-3620-4156-9bf6-8d789f2c8ec4.png"
};
const packageGroups = [
  { title: "Routine & comprehensive full body panels", items: [
    { name: "Basic Wellness Checkup", parameters: "34 parameters", price: "899", corporate: "854", image: "https://images.hostinger.com/3f5dc107-ae1c-4e2b-bfcf-1db0b6f0ba8b.png", tests: "Complete Blood Count (CBC), Urine Routine, Fasting Blood Glucose, Serum Creatinine, SGPT and Lipid Profile." },
    { name: "Gold Full Body Health Checkup", parameters: "87 parameters", price: "1,979", corporate: "1,880", image: "https://images.hostinger.com/26309be3-151c-46cf-9507-7caa0e1b2521.png", tests: "CBC, ESR, Fasting Blood Sugar, HbA1c, Liver Function (12 tests), Renal Function (5 tests), Lipid Profile (7 tests), Thyroid (TFT), Uric Acid, Calcium and Urine Routine." },
    { name: "Platinum Full Body Health Checkup", parameters: "90 parameters", price: "2,339", corporate: "2,222", image: "https://images.hostinger.com/eead4f3e-563a-48f4-86a7-bcc6a0c53fbd.png", tests: "Complete Hemogram, LFT, KFT, Lipid Profile, Thyroid Panel, HbA1c, Vitamin D (25-OH), Vitamin B12, Calcium, Phosphorus, Uric Acid and Urine Routine." }
  ] },
  { title: "Gender & age-specific packages", items: [
    { name: "Full Body Checkup for Men / Platinum Plus", parameters: "91 parameters", price: "2,699", corporate: "2,564", image: "https://images.hostinger.com/655ac33e-6000-465b-baa5-967ea2496b72.png", tests: "Comprehensive vitals, CBC, LFT, KFT, Lipid, HbA1c, Thyroid, Vitamin B12 & D, Microalbumin and Total PSA." },
    { name: "Queen / Champion Full Body Package for Women", parameters: "94 parameters", price: "2,969", corporate: "2,820", image: "https://images.hostinger.com/7523689a-579e-494d-95c5-a2d4e16f8f51.png", tests: "Complete metabolic panel, CBC, Thyroid, HbA1c, Lipid, Vitamin B12 & D, Iron Studies, Homocysteine and CA 125." },
    { name: "Senior Citizen Care", parameters: "Male & female • 93+ parameters", price: "1,979", corporate: "1,880", image: "https://images.hostinger.com/60832f8c-0935-4b97-81db-84d27f6707aa.png", tests: "Complete organ profiles, Calcium/Phosphorus, HbA1c, cardiac markers, Vitamin D & B12 and age-specific tumor/prostate markers." },
    { name: "Kids Special Health Checkup", parameters: "83 parameters", price: "1,889", corporate: "1,795", image: "https://images.hostinger.com/14a65403-a72a-4aaf-adbb-752e3951236c.png", tests: "Pediatric growth & immunity panel: CBC, Iron Studies, Folic Acid, Vitamin D, Vitamin B12, Calcium, TSH and Hemoglobin Electrophoresis (Thalassemia screening)." }
  ] },
  { title: "Specialized & NRI packages", items: [
    { name: "NRI Executive Comprehensive Full Body Panel", parameters: "116 parameters", price: "4,589", corporate: "4,359", image: "https://images.hostinger.com/f1271fbd-119d-401a-b96f-49a550ff7b75.png", tests: "Complete Hemogram, Blood Grouping, Liver & Kidney Profiles, HbA1c, Full Lipid, TFT, Electrolytes, HBsAg, Homocysteine, Vitamin D & B12, PSA / CA 125, IgE Allergy Total and Hemoglobin Electrophoresis." },
    { name: "Healthy Heart & Cardiac Risk Profile", parameters: "17 parameters", price: "1,979", corporate: "1,880", image: "https://images.hostinger.com/696e9441-c16d-401f-a35c-57c459ede719.png", tests: "Fasting Glucose, hs-CRP, Homocysteine, Serum Creatinine, Apolipoprotein A1 & B, Lipoprotein (a) and Lipid Profile." },
    { name: "Complete Diabetes Management Profile", parameters: "68 parameters", price: "1,439", corporate: "1,367", image: "https://images.hostinger.com/ab5c882e-53c6-420f-83b1-beebca2416b6.png", tests: "Fasting & Postprandial Blood Sugar, HbA1c, Microalbumin Urine, BUN, Creatinine and Lipid Profile." },
    { name: "Vitamin Vitality Duo", parameters: "Vitamin D + Vitamin B12", price: "1,529", corporate: "1,452", image: "https://images.hostinger.com/ce0b4b3b-aceb-4dbb-bd1f-251b9d7fa183.png", tests: "Vitamin D and Vitamin B12 assessment." }
  ] },
  { title: "Industrial occupational packages • on-site / clinic", items: [
    { name: "Industrial PEME", parameters: "Pre-employment examination • per employee", price: "799", corporate: "759", image: "https://images.hostinger.com/7251353d-ead6-40c8-be42-8662399f659d.png", tests: "Physical fitness, CBC, Blood Grouping, Urine Routine, Snellen Vision & Ishihara Color, Spirometry (PFT) and Chest X-Ray." },
    { name: "Annual Factory Surveillance", parameters: "Custom workforce quotation", price: "", corporate: "", image: "https://images.hostinger.com/e723bc64-3242-457e-9c05-da350fef00b5.png", tests: "Audiometry, Pulmonary Function Test (PFT), Vision Screening and Form 32/33 medical certification. Custom corporate quotes based on workforce size." }
  ] }
];
const statutoryForms = [
  ["Form No. 15", "Young persons & fitness register", "Pre-work physical evaluation and record-keeping for young workers and apprentices before machinery operation. Sections 68, 69 & 73."],
  ["Form No. 16", "Accidents & dangerous occurrences", "Rapid clinical incident logging, trauma records and statutory intimation documentation for the Factory Inspectorate."],
  ["Form No. 32", "Health register", "Continuous health surveillance, exposure logs, toxicological findings and ongoing fitness for hazardous processes. Sections 41-C & 41-F."],
  ["Form No. 33", "Fitness for hazardous processes", "Medical fitness certification by authorized Factory Medical Officers / Certifying Surgeons for chemical, noise or dust operations."],
  ["Form No. 31 & 31-A", "Cumulative health records", "Long-term medical archives for cumulative exposure to dust, silica, asbestos, noise and solvents."],
  ["Form O", "Periodic medical examination", "Standardized comprehensive health surveillance profiles for industrial and mining operations."],
  ["Form No. 11 & 12", "Adult workers & overtime logs", "Alignment of employee duty shifts, overtime and exemption logs with physical medical clearances."]
];
function SiteFooter() {
  return /* @__PURE__ */ jsxs("footer", { className: "site-footer", children: [
    /* @__PURE__ */ jsxs("div", { className: "wide footer-grid", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "logo-frame footer-logo", children: /* @__PURE__ */ jsx("img", { className: "logo-mark", src: "https://horizons-cdn.hostinger.com/1a2b91ff-0a2d-48f1-b923-004e2adf1475/50c625dbe46142bb9b6db4f7154b2919.jpg", alt: "" }) }),
        /* @__PURE__ */ jsxs("h3", { children: [
          "AKSHAR HEALTHCARE",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { children: "AND OHC PRIVATE LIMITED" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: address })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { children: "Explore" }),
        /* @__PURE__ */ jsx(Link, { to: "/clinic", children: "Clinic Services" }),
        /* @__PURE__ */ jsx(Link, { to: "/compliance", children: "Turnkey OHC Operations" }),
        /* @__PURE__ */ jsx(Link, { to: "/compliance", children: "Statutory Compliance Guide" }),
        /* @__PURE__ */ jsx(Link, { to: "/health-packages", children: "Diagnostic Packages" }),
        /* @__PURE__ */ jsxs(Link, { to: "/contact", children: [
          "Contact ",
          /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { children: "Let’s connect" }),
        /* @__PURE__ */ jsxs("a", { href: "tel:+919099941978", children: [
          /* @__PURE__ */ jsx(Phone, { size: 16 }),
          " +91 9099941978"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "mailto:info@aksharhealthcare.in", children: [
          /* @__PURE__ */ jsx(Mail, { size: 16 }),
          " info@aksharhealthcare.in"
        ] }),
        /* @__PURE__ */ jsx("a", { href: "https://www.aksharhealthcare.in", children: "www.aksharhealthcare.in" }),
        /* @__PURE__ */ jsx("p", { className: "footer-compliance", children: "Operations compliant with the Factories Act, 1948, Gujarat Factory Rules, 1963, and National OSH Guidelines." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "wide footer-bottom", children: [
      /* @__PURE__ */ jsx("span", { children: "© 2026 Akshar Healthcare and OHC Private Limited. All rights reserved." }),
      /* @__PURE__ */ jsx("span", { children: "Clinical care with industrial expertise." })
    ] })
  ] });
}
const LOCAL_HOSTNAMES = /* @__PURE__ */ new Set(["localhost", "127.0.0.1", "0.0.0.0", "[::1]"]);
const siteOrigin = (request2) => {
  const { host, hostname } = new URL(request2.url);
  return `${LOCAL_HOSTNAMES.has(hostname) ? "http" : "https"}://${host}`;
};
function HorizonsPreviewScripts() {
  useEffect(() => {
    window.__horizonsHydrated = true;
    window.dispatchEvent(new Event("horizons:hydrated"));
    {
      void import("./assets/_virtual_horizons-runtime-B5-KaiEE.js");
    }
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    null,
    null
  ] });
}
const links = () => [{
  rel: "stylesheet",
  href: stylesheet
}, {
  rel: "icon",
  href: "https://horizons-cdn.hostinger.com/1a2b91ff-0a2d-48f1-b923-004e2adf1475/50c625dbe46142bb9b6db4f7154b2919.jpg"
}, {
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap"
}];
function loader$8({
  request: request2
}) {
  const origin = siteOrigin(request2);
  return data({
    origin
  }, {
    headers: {
      Link: `<${origin}/sitemap.xml>; rel="sitemap"; type="application/xml"`
    }
  });
}
function headers({
  loaderHeaders
}) {
  return loaderHeaders;
}
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {}), /* @__PURE__ */ jsx(HorizonsPreviewScripts, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [/* @__PURE__ */ jsx("div", {
        id: "root",
        children
      }), /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(SiteHeader, {}), /* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(SiteFooter, {})]
  });
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), null]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  headers,
  links,
  loader: loader$8
}, Symbol.toStringTag, { value: "Module" }));
const ROOT_ROUTE_ID = "root";
const siteOriginFrom = (matches) => {
  const root2 = matches.find((match) => match?.id === ROOT_ROUTE_ID);
  return root2?.loaderData?.origin ?? "";
};
const absoluteUrl = (origin, target) => {
  if (/^https?:\/\//.test(target)) {
    return target;
  }
  return `${origin}${target.startsWith("/") ? target : `/${target}`}`;
};
function seo({ matches, location }, input) {
  const origin = siteOriginFrom(matches);
  const canonical = absoluteUrl(origin, input.path ?? location.pathname);
  const imageUrl = input.image ? absoluteUrl(origin, input.image) : "";
  const tags = [
    { title: input.title },
    { name: "description", content: input.description },
    { property: "og:title", content: input.title },
    { property: "og:description", content: input.description },
    { property: "og:type", content: input.type ?? "website" },
    { name: "twitter:card", content: imageUrl ? "summary_large_image" : "summary" },
    { name: "twitter:title", content: input.title },
    { name: "twitter:description", content: input.description }
  ];
  if (origin) {
    tags.push({ tagName: "link", rel: "canonical", href: canonical }, { property: "og:url", content: canonical });
  }
  if (imageUrl) {
    tags.push({ property: "og:image", content: imageUrl }, { name: "twitter:image", content: imageUrl });
  }
  if (input.noindex) {
    tags.push({ name: "robots", content: "noindex" });
  }
  for (const block of [input.jsonLd ?? []].flat()) {
    tags.push({ "script:ld+json": block });
  }
  return tags;
}
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "hero", children: [
    /* @__PURE__ */ jsx("img", { className: "hero-photo", src: heroImage, alt: "Indian doctor examining a factory worker at an occupational health clinic", fetchPriority: "high" }),
    /* @__PURE__ */ jsx("div", { className: "hero-shade" }),
    /* @__PURE__ */ jsx("div", { className: "wide hero-content", children: /* @__PURE__ */ jsxs("div", { className: "hero-copy", children: [
      /* @__PURE__ */ jsxs("span", { className: "hero-label", children: [
        /* @__PURE__ */ jsx("span", {}),
        " YOUR WORKFORCE. OUR RESPONSIBILITY."
      ] }),
      /* @__PURE__ */ jsxs("h1", { children: [
        "Secure Your Plant’s",
        /* @__PURE__ */ jsx("br", {}),
        "Health, Compliance",
        /* @__PURE__ */ jsx("br", {}),
        "& ",
        /* @__PURE__ */ jsx("em", { children: "Workforce Vitality." })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Turnkey Occupational Health Centers (OHC), Statutory Factory Compliance & Comprehensive Clinical Diagnostics." }),
      /* @__PURE__ */ jsx("p", { className: "hero-secondary", children: "Certified medical staff and automated OHC software for audit-ready operations, every day." }),
      /* @__PURE__ */ jsxs("div", { className: "hero-actions", children: [
        /* @__PURE__ */ jsxs(Link, { className: "button", to: "/contact", children: [
          "Request OHC Compliance Audit ",
          /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })
        ] }),
        /* @__PURE__ */ jsxs(Link, { className: "button ghost", to: "/health-packages", children: [
          "View Diagnostic Packages ",
          /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hero-foot", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { size: 18 }),
        " Built for DISH & Factory Inspectorate audit readiness"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "care-float", children: [
      /* @__PURE__ */ jsx("span", { className: "care-icon", children: /* @__PURE__ */ jsx(HeartPulse, { size: 26 }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Care that never clocks out." }),
        /* @__PURE__ */ jsx("span", { children: "24x7 emergency arrangements" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "live-dot" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hero-index", children: "01 / WORKFORCE WELLBEING" })
  ] });
}
function TrustPillars() {
  const pillars2 = [{ icon: ShieldCheck, title: "Statutory compliance", text: "Factories Act, 1948 & State Rules" }, { icon: Cloud, title: "Cloud-powered OHC", text: "1-click audit record retrieval" }, { icon: HeartPulse, title: "24x7 emergency response", text: "3-bed observation & day care" }, { icon: Stethoscope, title: "Certified medical teams", text: "AFIH / MBBS doctors & industrial nurses" }];
  return /* @__PURE__ */ jsx("section", { className: "trust-band", children: /* @__PURE__ */ jsx("div", { className: "wide trust-grid", children: pillars2.map(({ icon: Icon, title, text }) => /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Icon, { size: 27 }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { children: title }),
      /* @__PURE__ */ jsx("p", { children: text })
    ] })
  ] }, title)) }) });
}
const pillars$1 = [
  {
    icon: Network,
    title: "Established Regional Network",
    text: "A network of over 15 partner diagnostic and Occupational Health Centre (OHC) facilities across Gujarat’s manufacturing belts, conducting regular statutory health examinations.",
    image: "https://images.hostinger.com/08e29aa1-a539-4de9-a733-8f00ce069182.png",
    alt: "Network of diagnostic laboratories and occupational health centres across Gujarat industrial belts"
  },
  {
    icon: Stethoscope,
    title: "Clinical Setup & Emergency Readiness",
    text: "Central clinic equipped with a 3-bed observation unit, round-the-clock emergency handling, qualified doctors holding MBBS and Associate Fellow of Industrial Health (AFIH), and industrial nursing staff.",
    image: "https://images.hostinger.com/4468a35e-4cd0-4e99-9e8b-f40af02bf828.png",
    alt: "Indian occupational health clinic with three-bed observation unit and emergency equipment"
  },
  {
    icon: Cloud,
    title: "Digital Healthcare Infrastructure",
    text: "Connecting industrial medical care with automated software architecture to provide real-time documentation and audit readiness.",
    image: "https://images.hostinger.com/d5f5351d-24ff-423a-8f04-d5ac531c6707.png",
    alt: "Factory medical officer using cloud-based OHC compliance software workstation"
  }
];
function About() {
  return /* @__PURE__ */ jsxs("section", { className: "section wide", id: "about", children: [
    /* @__PURE__ */ jsxs("div", { className: "about-intro", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "ABOUT AKSHAR HEALTHCARE" }),
        /* @__PURE__ */ jsxs("h2", { children: [
          "Practical Industrial Health & Occupational",
          /* @__PURE__ */ jsx("br", {}),
          "Healthcare Solutions Across ",
          /* @__PURE__ */ jsx("em", { children: "Gujarat" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "about-lead", children: [
        /* @__PURE__ */ jsx("p", { children: "Akshar Healthcare and Occupational Health Centre (OHC) Private Limited is founded by healthcare and industrial infrastructure professionals with extensive ground experience in Gujarat’s industrial belts. Supported by an established partner network running over 15 diagnostic laboratories and Occupational Health Centres (OHCs) in and around Bharuch, Ankleshwar, and surrounding industrial hubs, we deliver dependable workforce healthcare and statutory compliance management." }),
        /* @__PURE__ */ jsx("p", { className: "about-narrative", children: "From our flagship branch in Vitthalapur (Ahmedabad) across our broader network, we connect industrial plant management with compliant medical operations. We operate as an organized, technology-enabled partner dedicated to eliminating regulatory liabilities and protecting workforce health." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "about-grid", children: pillars$1.map(({ icon: Icon, title, text, image, alt }) => /* @__PURE__ */ jsxs("article", { className: "about-card", children: [
      /* @__PURE__ */ jsx("div", { className: "about-card-media", children: /* @__PURE__ */ jsx("img", { src: image, loading: "lazy", alt }) }),
      /* @__PURE__ */ jsxs("div", { className: "about-card-body", children: [
        /* @__PURE__ */ jsx(Icon, { size: 26 }),
        /* @__PURE__ */ jsx("h3", { children: title }),
        /* @__PURE__ */ jsx("p", { children: text })
      ] })
    ] }, title)) })
  ] });
}
function Departments() {
  return /* @__PURE__ */ jsxs("section", { className: "section wide", id: "departments", children: [
    /* @__PURE__ */ jsxs("div", { className: "section-heading", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "ONE PARTNER. TWO SPECIALIZED DEPARTMENTS." }),
        /* @__PURE__ */ jsxs("h2", { children: [
          "From the clinic floor",
          /* @__PURE__ */ jsx("br", {}),
          "to your factory floor."
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Akshar Healthcare and OHC Private Limited brings comprehensive care for individuals and purpose-built healthcare for industry together under one trusted name." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "department-grid", children: [
      /* @__PURE__ */ jsxs("article", { className: "department clinical", children: [
        /* @__PURE__ */ jsx("span", { className: "department-number", children: "01 / CLINICAL CARE" }),
        /* @__PURE__ */ jsx(Stethoscope, { size: 35 }),
        /* @__PURE__ */ jsxs("h3", { children: [
          "Outpatient Clinic",
          /* @__PURE__ */ jsx("br", {}),
          "and 24x7 Emergency Care"
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Your first point of care — from routine consultations to immediate stabilization, with a fully equipped central clinic." }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx(Check, {}),
            "3-bed observation & day-care unit"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx(Check, {}),
            "Digital pathology, ECG & X-Ray services"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx(Check, {}),
            "Minor trauma dressing & emergency arrangements"
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/clinic", className: "bluetext", children: [
          "Explore our clinic ",
          /* @__PURE__ */ jsx(ArrowUpRight, { size: 19 })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("article", { className: "department industrial", children: [
        /* @__PURE__ */ jsx("span", { className: "department-number", children: "02 / INDUSTRIAL HEALTH" }),
        /* @__PURE__ */ jsx(Building2, { size: 35 }),
        /* @__PURE__ */ jsxs("h3", { children: [
          "Turnkey Occupational",
          /* @__PURE__ */ jsx("br", {}),
          "Health Centers"
        ] }),
        /* @__PURE__ */ jsx("p", { children: "A complete on-site healthcare ecosystem that protects your workforce and keeps your factory audit-ready." }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx(Check, {}),
            "Dispensary setup & certified medical staffing"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx(Check, {}),
            "PME, pre-employment screening & mobile health camps"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx(Check, {}),
            "Digital statutory registers & health surveillance"
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/compliance", children: [
          "Explore industrial solutions ",
          /* @__PURE__ */ jsx(ArrowUpRight, { size: 19 })
        ] })
      ] })
    ] })
  ] });
}
function Compliance() {
  return /* @__PURE__ */ jsx("section", { className: "compliance-section", id: "compliance", children: /* @__PURE__ */ jsxs("div", { className: "wide", children: [
    /* @__PURE__ */ jsxs("div", { className: "compliance-intro", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "FACTORY ADVANTAGE & STATUTORY COMPLIANCE" }),
        /* @__PURE__ */ jsxs("h2", { children: [
          "Less paperwork risk.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { children: "More audit confidence with Digitised Records." })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Why leading industries partner with Akshar Healthcare: a systematic approach to regulatory risk, workforce health and accountable documentation." }),
        /* @__PURE__ */ jsxs(Link, { className: "button", to: "/contact", children: [
          "Request OHC Partnership & Software Demo ",
          /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "software-panel", children: [
        /* @__PURE__ */ jsxs("span", { className: "software-top", children: [
          /* @__PURE__ */ jsx(Cloud, { size: 21 }),
          " AKSHAR DIGITAL OHC ",
          /* @__PURE__ */ jsx("span", { className: "live-dot" })
        ] }),
        /* @__PURE__ */ jsxs("h3", { children: [
          "Your audit trail.",
          /* @__PURE__ */ jsx("br", {}),
          "Always within reach."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "record-row", children: [
          /* @__PURE__ */ jsx(FileCheck2, { size: 20 }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Employee medical records",
            /* @__PURE__ */ jsx("small", { children: "Exposure logs • Fit-for-work certificates" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "status-tag", children: "DIGITAL" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "record-row", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { size: 20 }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Statutory health registers",
            /* @__PURE__ */ jsx("small", { children: "Organized • Traceable • Retrievable" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "status-tag", children: "READY" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Cloud-based records replace damaged, misplaced paperwork. Retrieve records instantly during unannounced DISH or Factory Inspector visits." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "compliance-body", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { children: "A framework built for industry." }),
        /* @__PURE__ */ jsx("p", { children: "The Factories Act, 1948 and Gujarat Factory Rules, 1963 set obligations for occupational healthcare, medical examinations and health surveillance, particularly in hazardous-process industries. We support on-site OHC operations, periodic medical examinations and organized statutory records." }),
        /* @__PURE__ */ jsxs("div", { className: "risk-note", children: [
          /* @__PURE__ */ jsx("strong", { children: "Protect your workforce. Reduce legal exposure." }),
          /* @__PURE__ */ jsx("p", { children: "Failures under Chapter IV-A (Sections 41-B, 41-C) and Section 92 can attract fines, continuing penalties, prosecution and work-stoppage action. Requirements and penalties depend on the applicable law and circumstances." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "fine-print", children: "Compliance scope, form numbers and authorized signatories must be confirmed for your process and jurisdiction. Digital records support audit readiness; they do not guarantee regulatory approval or replace legal advice." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-list", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "STATUTORY RECORDS & FITNESS CERTIFICATION" }),
        statutoryForms.map(([form, title, text]) => /* @__PURE__ */ jsxs("details", { children: [
          /* @__PURE__ */ jsxs("summary", { children: [
            /* @__PURE__ */ jsx("span", { children: form }),
            /* @__PURE__ */ jsx("strong", { children: title }),
            /* @__PURE__ */ jsx("b", { children: "+" })
          ] }),
          /* @__PURE__ */ jsx("p", { children: text })
        ] }, form))
      ] })
    ] })
  ] }) });
}
const pillars = [
  {
    icon: Clock,
    title: "One Integrated Report in 24 Hours",
    focus: "Speed & Zero Coordination Hassle",
    text: "No running after multiple vendors for pathology, ECG, audiometry, or lung function tests. We deliver a single consolidated medical dossier per worker—covering Audiometry, Spirometry (PFT), 12-Lead ECG, Vision Testing, and Lab Blood Work—within 24 hours of health camp completion."
  },
  {
    icon: MonitorCheck,
    title: "Live Live-Access Compliance Software",
    focus: "Instant Ground Transparency",
    text: "We grant your HR and EHS teams direct login access to our OHC software. View active workforce fitness status, upcoming re-testing dates, and complete health records anytime without waiting for paper reports."
  },
  {
    icon: FileCheck2,
    title: "Audit-Ready Without Backlog",
    focus: "Real Compliance Peace of Mind",
    text: "When DISH (Factory Inspectorate) arrives for surprise checks, pull up statutory Forms 15, 16, 31/31-A, 32, 33, and Form O immediately. No scrambled paperwork, missing files, or last-minute panic."
  },
  {
    icon: Award,
    title: "Grounded Local Network of 15+ Labs",
    focus: "Reliability & Stability",
    text: "Unlike fly-by-night contractors, our partner network runs over 15 established diagnostic and OHC setups across Bharuch, Ankleshwar, and surrounding industrial belts. We bring tested operating procedures, calibrated equipment, and certified staff directly to your site."
  }
];
function WhyPartner() {
  return /* @__PURE__ */ jsx("section", { className: "advantage-section", id: "advantage", children: /* @__PURE__ */ jsxs("div", { className: "wide", children: [
    /* @__PURE__ */ jsxs("div", { className: "advantage-intro", children: [
      /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "THE AKSHAR ADVANTAGE" }),
      /* @__PURE__ */ jsxs("h2", { children: [
        "Practical Industrial Health & Statutory Compliance.",
        /* @__PURE__ */ jsx("br", {}),
        "Built for the ",
        /* @__PURE__ */ jsx("em", { children: "Ground Realities of Gujarat’s Factories" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "advantage-sub", children: "Built by teams with on-ground experience running 15+ diagnostic and OHC centers in the Bharuch industrial belt. We solve the everyday headaches of plant managers, HR teams, and EHS heads." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "advantage-grid", children: pillars.map(({ icon: Icon, title, focus, text }) => /* @__PURE__ */ jsxs("article", { className: "advantage-card", children: [
      /* @__PURE__ */ jsxs("div", { className: "advantage-card-top", children: [
        /* @__PURE__ */ jsx(Icon, { size: 26 }),
        /* @__PURE__ */ jsx("span", { children: focus })
      ] }),
      /* @__PURE__ */ jsx("h3", { children: title }),
      /* @__PURE__ */ jsx("p", { children: text })
    ] }, title)) })
  ] }) });
}
const models = [
  {
    tag: "MODEL 01",
    title: "Full Turnkey OHC Setup (Mandatory Ambulance Rooms)",
    target: "Factories employing 500+ workers or notified hazardous units under the Factories Act, 1948.",
    deliverables: [
      { icon: Building2, label: "Infrastructure", text: "Complete setup of beds, examination tables, dressing units, statutory medicines, and oxygen cylinders." },
      { icon: Ambulance, label: "Dedicated Ambulance", text: "24x7 on-site BLS/ALS industrial ambulance equipped with emergency stabilization kits and hospital transfer tie-ups." },
      { icon: Stethoscope, label: "Medical Team", text: "Qualified Factory Medical Officers (MBBS / AFIH certified), registered industrial nurses, and dressers." },
      { icon: Monitor, label: "Software Station", text: "Digital check-in and government compliance dashboard installed on-site." }
    ]
  },
  {
    tag: "MODEL 02",
    title: "Staff & Equipment Deputation (For Existing Dispensaries)",
    target: "Operational plants that already have an OHC room but struggle with doctor absenteeism, nurse attrition, or outdated testing machines.",
    deliverables: [
      { icon: Users, label: "Deputed Personnel", text: "Regular or visiting Factory Medical Officers, trained industrial nurses, and lab technicians." },
      { icon: CalendarClock, label: "Replacement Guarantee", text: "Zero operational disruption—we handle roster management, relief staff during leaves, and legal documentation." },
      { icon: Activity, label: "Calibrated Testing Equipment", text: "Audiometers, Spirometers, and ECG units placed at your plant for periodic or scheduled screening camps." }
    ]
  }
];
function Deployment() {
  return /* @__PURE__ */ jsxs("section", { className: "section wide", id: "deployment", children: [
    /* @__PURE__ */ jsxs("div", { className: "section-heading", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "ON-SITE HEALTHCARE ARRANGEMENTS" }),
        /* @__PURE__ */ jsxs("h2", { children: [
          "Flexible Healthcare Setup Aligned",
          /* @__PURE__ */ jsx("br", {}),
          "With ",
          /* @__PURE__ */ jsx("em", { children: "Your Plant’s Requirements" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "From setting up a full statutory dispensary with ambulance coverage to providing qualified doctors on deputation, we provide what your factory genuinely needs." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "deployment-grid", children: models.map((model) => /* @__PURE__ */ jsxs("article", { className: "deployment-card", children: [
      /* @__PURE__ */ jsxs("header", { className: "deployment-head", children: [
        /* @__PURE__ */ jsx("span", { className: "deployment-tag", children: model.tag }),
        /* @__PURE__ */ jsx("h3", { children: model.title }),
        /* @__PURE__ */ jsxs("p", { className: "deployment-target", children: [
          /* @__PURE__ */ jsx("strong", { children: "Best for:" }),
          " ",
          model.target
        ] })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "deployment-list", children: model.deliverables.map(({ icon: Icon, label, text }) => /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx(Icon, { size: 20 }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("strong", { children: label }),
          /* @__PURE__ */ jsx("span", { children: text })
        ] })
      ] }, label)) })
    ] }, model.tag)) }),
    /* @__PURE__ */ jsxs("div", { className: "regulatory-note", children: [
      /* @__PURE__ */ jsx(ShieldCheck, { size: 22 }),
      /* @__PURE__ */ jsx("p", { children: "Every deployment strictly adheres to the staffing norms, first-aid equipment schedules, and record-keeping mandates laid down under the Gujarat Factory Rules and the Factories Act, 1948." })
    ] })
  ] });
}
function PackagesPreview() {
  return /* @__PURE__ */ jsxs("section", { className: "section wide package-preview", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "PREVENTIVE CARE, WITH PURPOSE" }),
      /* @__PURE__ */ jsxs("h2", { children: [
        "A healthier tomorrow",
        /* @__PURE__ */ jsx("br", {}),
        "starts with knowing today."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Curated preventive & occupational health packages, precision diagnostics and rapid digital reporting." }),
      /* @__PURE__ */ jsxs(Link, { to: "/health-packages", className: "button", children: [
        "Explore Health Packages ",
        /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "preview-board", children: [
      /* @__PURE__ */ jsx(FlaskConical, { size: 36 }),
      /* @__PURE__ */ jsxs("h3", { children: [
        "For every stage of life.",
        /* @__PURE__ */ jsx("br", {}),
        "For every kind of workforce."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "preview-tags", children: [
        /* @__PURE__ */ jsx("span", { children: "Full body wellness" }),
        /* @__PURE__ */ jsx("span", { children: "Heart & diabetes care" }),
        /* @__PURE__ */ jsx("span", { children: "Women, men & children" }),
        /* @__PURE__ */ jsx("span", { children: "Industrial screenings" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "corporate-mini", children: [
        /* @__PURE__ */ jsx(BadgePercent, { size: 25 }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Corporate privilege: 5% additional discount" }),
          /* @__PURE__ */ jsx("br", {}),
          "For partner-company staff and immediate families. Eligibility confirmed by our team."
        ] })
      ] })
    ] })
  ] });
}
function Clinic() {
  return /* @__PURE__ */ jsx("section", { className: "clinic-section", id: "clinic", children: /* @__PURE__ */ jsxs("div", { className: "wide clinic-grid", children: [
    /* @__PURE__ */ jsxs("div", { className: "clinic-media", children: [
      /* @__PURE__ */ jsx("img", { src: clinicImage, loading: "lazy", alt: "Indian nurse in the modern three-bed observation clinic" }),
      /* @__PURE__ */ jsxs("div", { className: "media-caption", children: [
        /* @__PURE__ */ jsx("span", { children: "VITTHALAPUR, GUJARAT" }),
        /* @__PURE__ */ jsx("strong", { children: "Equipped for care. Ready to respond." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "CLINIC & DAY-CARE INFRASTRUCTURE" }),
      /* @__PURE__ */ jsxs("h2", { children: [
        "Expert care.",
        /* @__PURE__ */ jsx("br", {}),
        "Close when it counts."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Our central clinic connects daily healthcare with a coordinated industrial emergency response." }),
      /* @__PURE__ */ jsxs("div", { className: "capability", children: [
        /* @__PURE__ */ jsx(HeartPulse, {}),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { children: "3-bed day-care & observation" }),
          /* @__PURE__ */ jsx("p", { children: "Immediate stabilization, IV infusion and minor trauma care in a supervised clinical environment." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "capability", children: [
        /* @__PURE__ */ jsx(Ambulance, {}),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { children: "24x7 emergency arrangements" }),
          /* @__PURE__ */ jsx("p", { children: "On-call medical officers, round-the-clock nursing response and ambulance-transfer tie-ups." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "capability", children: [
        /* @__PURE__ */ jsx(Truck, {}),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { children: "Mobile diagnostic fleet" }),
          /* @__PURE__ */ jsx("p", { children: "On-site factory health camps and screenings, with mobile diagnostic vans that bring care to your people." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("a", { className: "text-link", href: "tel:+919099941978", children: [
        "Talk to our care team ",
        /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })
      ] })
    ] })
  ] }) });
}
const POCKETBASE_API_URL = "/hcgi/platform";
const pocketbaseClient = new PocketBase(POCKETBASE_API_URL);
function EnquiryForm({ initialType = "OHC partnership", packageName = "" }) {
  const [type, setType] = useState(initialType);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  async function submit(event) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const fields = new FormData(event.currentTarget);
    try {
      await pocketbaseClient.collection("healthcare_enquiries").create({ name: fields.get("name"), phone: fields.get("phone"), email: fields.get("email") || "", company: fields.get("company") || "", enquiry_type: type, package_name: fields.get("package_name") || "", collection_mode: fields.get("collection_mode") || "", message: fields.get("message") || "", consent: true });
      setDone(true);
    } catch {
      setError("We could not send your enquiry. Please try again or call +91 9099941978.");
    } finally {
      setBusy(false);
    }
  }
  if (done) return /* @__PURE__ */ jsxs("div", { className: "form-success", role: "status", children: [
    /* @__PURE__ */ jsx(CheckCircle2, { size: 40 }),
    /* @__PURE__ */ jsx("h3", { children: "Your enquiry has been received." }),
    /* @__PURE__ */ jsx("p", { children: "Our team will contact you to discuss your requirements. This is an enquiry, not a confirmed appointment." }),
    /* @__PURE__ */ jsx("button", { className: "button", onClick: () => setDone(false), children: "Send another enquiry" })
  ] });
  return /* @__PURE__ */ jsxs("div", { className: "enquiry-form", children: [
    /* @__PURE__ */ jsxs("div", { className: "form-tabs", children: [
      /* @__PURE__ */ jsx("button", { "aria-pressed": type === "OHC partnership", onClick: () => setType("OHC partnership"), children: "Factory OHC partnership" }),
      /* @__PURE__ */ jsx("button", { "aria-pressed": type === "Diagnostic enquiry", onClick: () => setType("Diagnostic enquiry"), children: "Diagnostics & home collection" })
    ] }),
    /* @__PURE__ */ jsx("h3", { children: type === "OHC partnership" ? "Request Factory OHC Partnership & Audit Software Demo" : "Book Diagnostic Package / Home Blood Sample Collection" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ jsxs("label", { children: [
          "Full name *",
          /* @__PURE__ */ jsx("input", { name: "name", required: true, maxLength: 120, placeholder: "Your full name", autoComplete: "name" })
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          "Mobile number *",
          /* @__PURE__ */ jsx("input", { name: "phone", type: "tel", required: true, minLength: 10, maxLength: 25, pattern: "[+0-9 ()-]{10,25}", placeholder: "+91", autoComplete: "tel" })
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          "Email address",
          /* @__PURE__ */ jsx("input", { name: "email", type: "email", placeholder: "you@company.com", autoComplete: "email" })
        ] }),
        type === "OHC partnership" ? /* @__PURE__ */ jsxs("label", { children: [
          "Company name *",
          /* @__PURE__ */ jsx("input", { name: "company", required: true, placeholder: "Company / factory name", maxLength: 200 })
        ] }) : /* @__PURE__ */ jsxs("label", { children: [
          "Sample collection preference",
          /* @__PURE__ */ jsxs("select", { name: "collection_mode", children: [
            /* @__PURE__ */ jsx("option", { children: "Clinic visit" }),
            /* @__PURE__ */ jsx("option", { children: "Home sample collection" }),
            /* @__PURE__ */ jsx("option", { children: "Factory health camp" })
          ] })
        ] })
      ] }),
      type === "Diagnostic enquiry" && /* @__PURE__ */ jsxs("label", { children: [
        "Package of interest",
        /* @__PURE__ */ jsx("input", { name: "package_name", defaultValue: packageName, placeholder: "Package name", maxLength: 200 })
      ] }),
      /* @__PURE__ */ jsxs("label", { children: [
        type === "OHC partnership" ? "Workforce size & requirements" : "How can we help?",
        /* @__PURE__ */ jsx("textarea", { name: "message", maxLength: 2500, rows: 3, placeholder: type === "OHC partnership" ? "Tell us about your factory, location and workforce…" : "Preferred package, area and collection requirements…" })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "consent", children: [
        /* @__PURE__ */ jsx("input", { type: "checkbox", required: true }),
        "I consent to Akshar Healthcare contacting me about this enquiry. My details will be kept private."
      ] }),
      error && /* @__PURE__ */ jsx("p", { className: "form-error", role: "alert", children: error }),
      /* @__PURE__ */ jsxs("button", { className: "button", disabled: busy, children: [
        busy ? "Sending enquiry…" : "Submit Enquiry",
        " ",
        /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "fine-print", children: "For emergencies, call our 24x7 helpline. Do not use this form for urgent medical care." })
    ] })
  ] });
}
function Contact() {
  return /* @__PURE__ */ jsxs("section", { className: "section wide contact-grid", id: "contact", children: [
    /* @__PURE__ */ jsxs("div", { id: "branches", children: [
      /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "OUR CENTRAL CLINIC & OHC HUB" }),
      /* @__PURE__ */ jsxs("h2", { children: [
        "Let’s build a",
        /* @__PURE__ */ jsx("br", {}),
        "healthier partnership."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "For your people, your plant and your peace of mind. Connect with our clinical and occupational healthcare team." }),
      /* @__PURE__ */ jsxs("div", { className: "contact-item", children: [
        /* @__PURE__ */ jsx(MapPin, {}),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { children: "Vitthalapur, Ahmedabad" }),
          /* @__PURE__ */ jsx("p", { children: address }),
          /* @__PURE__ */ jsxs("a", { className: "text-link", href: "https://www.google.com/maps/search/?api=1&query=New+Shakti+Arcade+Vitthalapur+Gujarat", target: "_blank", rel: "noreferrer", children: [
            "Get directions ",
            /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "contact-item", children: [
        /* @__PURE__ */ jsx(Phone, {}),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow emergency-text", children: "24x7 HELPLINE / EMERGENCY" }),
          /* @__PURE__ */ jsx("a", { className: "contact-phone", href: "tel:+919099941978", children: "+91 9099941978" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "contact-item", children: [
        /* @__PURE__ */ jsx(Mail, {}),
        /* @__PURE__ */ jsx("a", { className: "email", href: "mailto:info@aksharhealthcare.in", children: "info@aksharhealthcare.in" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "fine-print", children: "Home blood sample collection and factory health camps are subject to location and team availability." })
    ] }),
    /* @__PURE__ */ jsx(EnquiryForm, {})
  ] });
}
function meta$a({
  matches,
  location
}) {
  return seo({
    matches,
    location
  }, {
    title: "Akshar Healthcare | Clinical Care & Turnkey OHC",
    description: "Clinical care, turnkey occupational health centers, industrial medical screenings and digital audit readiness in Vitthalapur, Gujarat.",
    image: heroImage,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      name: "Akshar Healthcare and OHC Private Limited",
      telephone: "+91 9099941978",
      email: "info@aksharhealthcare.in",
      address: {
        "@type": "PostalAddress",
        streetAddress: address,
        addressLocality: "Vitthalapur",
        addressRegion: "Gujarat",
        postalCode: "382130",
        addressCountry: "IN"
      }
    }
  });
}
const home = UNSAFE_withComponentProps(function HomePage() {
  return /* @__PURE__ */ jsxs("main", {
    children: [/* @__PURE__ */ jsx(Hero, {}), /* @__PURE__ */ jsx(TrustPillars, {}), /* @__PURE__ */ jsx(About, {}), /* @__PURE__ */ jsx(Departments, {}), /* @__PURE__ */ jsx(Compliance, {}), /* @__PURE__ */ jsx(WhyPartner, {}), /* @__PURE__ */ jsx(Deployment, {}), /* @__PURE__ */ jsx(PackagesPreview, {}), /* @__PURE__ */ jsx(Clinic, {}), /* @__PURE__ */ jsx(Contact, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$a
}, Symbol.toStringTag, { value: "Module" }));
function meta$9({
  matches,
  location
}) {
  return seo({
    matches,
    location
  }, {
    title: "About Us | Akshar Healthcare and OHC Private Limited",
    description: "Learn about Akshar Healthcare, our medical leadership, clinical heritage, and commitment to industrial workforce health in Gujarat."
  });
}
const about = UNSAFE_withComponentProps(function AboutPage() {
  return /* @__PURE__ */ jsxs("main", {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "page-intro wide",
      children: [/* @__PURE__ */ jsx("span", {
        className: "eyebrow",
        children: "OUR CLINICAL HERITAGE & MISSION"
      }), /* @__PURE__ */ jsx("h1", {
        children: "About Akshar Healthcare."
      }), /* @__PURE__ */ jsx("p", {
        children: "Dedicated to workforce vitality, occupational health excellence, and community clinical care."
      })]
    }), /* @__PURE__ */ jsx(About, {}), /* @__PURE__ */ jsx(WhyPartner, {})]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about,
  meta: meta$9
}, Symbol.toStringTag, { value: "Module" }));
function meta$8({
  matches,
  location
}) {
  return seo({
    matches,
    location
  }, {
    title: "Clinic & Day Care Infrastructure | Akshar Healthcare",
    description: "Explore our 3-bed observation day-care clinic, 24x7 emergency arrangements, and mobile diagnostic fleet in Vitthalapur, Gujarat."
  });
}
const clinic = UNSAFE_withComponentProps(function ClinicPage() {
  return /* @__PURE__ */ jsxs("main", {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "page-intro wide",
      children: [/* @__PURE__ */ jsx("span", {
        className: "eyebrow",
        children: "CLINICAL EXCELLENCE & EMERGENCY READINESS"
      }), /* @__PURE__ */ jsx("h1", {
        children: "Clinic & Day Care Infrastructure."
      }), /* @__PURE__ */ jsx("p", {
        children: "Immediate medical stabilization, certified nursing care, and coordinated emergency transfer response."
      })]
    }), /* @__PURE__ */ jsx(Clinic, {}), /* @__PURE__ */ jsx(Departments, {})]
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: clinic,
  meta: meta$8
}, Symbol.toStringTag, { value: "Module" }));
function meta$7({
  matches,
  location
}) {
  return seo({
    matches,
    location
  }, {
    title: "Turnkey OHC & Factory Compliance | Akshar Healthcare",
    description: "Turnkey occupational health center setup, automated digital health records, and statutory compliance under the Factories Act and Gujarat Factory Rules."
  });
}
const compliance = UNSAFE_withComponentProps(function CompliancePage() {
  return /* @__PURE__ */ jsxs("main", {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "page-intro wide",
      children: [/* @__PURE__ */ jsx("span", {
        className: "eyebrow",
        children: "STATUTORY AUDIT READINESS & INDUSTRIAL HEALTH"
      }), /* @__PURE__ */ jsx("h1", {
        children: "Turnkey OHC & Factory Compliance."
      }), /* @__PURE__ */ jsx("p", {
        children: "Seamless regulatory risk management, on-site medical staff, and digital statutory record keeping."
      })]
    }), /* @__PURE__ */ jsx(Compliance, {}), /* @__PURE__ */ jsx(Deployment, {})]
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: compliance,
  meta: meta$7
}, Symbol.toStringTag, { value: "Module" }));
const ECOMMERCE_API_URL = "https://api-ecommerce.hostinger.com";
const ECOMMERCE_STORE_ID = "scha_01M4MRT8EJ2WVDSTAQHV13DPHG";
const PRODUCT_ID_PREFIX = "prod_";
const META_DESCRIPTION_MAX_LENGTH = 160;
const DOMAIN_CHECKOUT_PATH = "/checkout/";
const DOMAIN_CHECKOUT_MARKER = "data-hostinger-checkout-shell";
const DOMAIN_CHECKOUT_PROBE_TIMEOUT_MS = 1500;
const formatCurrency = (priceInCents, currencyInfo) => {
  if (!currencyInfo || priceInCents === null || priceInCents === void 0) {
    return "";
  }
  const { code, symbol, template, decimal_digits } = currencyInfo;
  const currencyDisplay = symbol || code || "€";
  const digits = Number.isInteger(decimal_digits) ? decimal_digits : 2;
  const amount = (priceInCents / Math.pow(10, digits)).toFixed(digits);
  if (template) {
    return template.replace("$1", amount);
  }
  return `${currencyDisplay}${amount}`;
};
const toPriceUnits = (priceInCents, currencyInfo) => {
  const digits = Number.isInteger(currencyInfo?.decimal_digits) ? currencyInfo?.decimal_digits : 2;
  return (priceInCents / Math.pow(10, digits)).toFixed(digits);
};
const extractVariantOptions = (options) => {
  return (options || []).map((opt) => ({
    id: opt?.id || "",
    option_id: opt?.option_id || "",
    variant_id: opt?.variant_id || "",
    value: opt?.value || ""
  }));
};
const extractProductOptions = (options) => {
  return (options || []).map((opt) => ({
    id: opt?.id || "",
    title: opt?.title || "",
    values: (opt?.values || []).map((val) => ({
      id: val?.id || "",
      option_id: val?.option_id || "",
      variant_id: val?.variant_id || "",
      value: val?.value || ""
    }))
  }));
};
const extractVariants = (variants) => {
  return (variants || []).map((v) => {
    const price_in_cents = v?.prices?.[0]?.amount || 0;
    const sale_price_in_cents = v?.prices?.[0]?.sale_amount || null;
    const currency = v?.prices?.[0]?.currency_code || "eur";
    return {
      id: v?.id || "",
      title: v?.title || "",
      image_url: v?.image_url || null,
      sku: v?.sku || null,
      price_in_cents,
      sale_price_in_cents,
      currency,
      currency_info: v?.prices?.[0]?.currency || null,
      price_formatted: formatCurrency(price_in_cents, v?.prices?.[0]?.currency),
      sale_price_formatted: formatCurrency(sale_price_in_cents, v?.prices?.[0]?.currency),
      manage_inventory: v?.manage_inventory || false,
      weight: v?.weight || null,
      options: extractVariantOptions(v?.options),
      inventory_quantity: v?.inventory_quantity ?? null,
      // Only an event with an id is usable — that id is what the availability
      // calls take — so anything short of one is no booking at all.
      booking_event: v?.booking_event?.id ? v.booking_event : null,
      // Surface donation only for the customer-priced variant; a preset amount
      // arrives without `allow_custom_amount` and is bought at its own price.
      donation: v?.donation?.allow_custom_amount ? {
        allow_custom_amount: true,
        min_amount: v.donation.min_amount ?? 0,
        max_amount: v.donation.max_amount ?? null
      } : null
    };
  });
};
const extractImages = (images) => {
  return (images || []).map((img) => ({
    url: img?.url || "",
    order: img?.order || 0,
    type: img?.type || ""
  }));
};
const extractCollections = (collections) => {
  return (collections || []).map((col) => ({
    product_id: col?.product_id || "",
    collection_id: col?.collection_id || "",
    order: col?.order || 0
  }));
};
const extractAdditionalInfo = (additionalInfo) => {
  return (additionalInfo || []).map((info) => ({
    id: info?.id || "",
    order: info?.order || 0,
    title: info?.title || "",
    description: info?.description || ""
  }));
};
const extractCustomFields = (customFields) => {
  return (customFields || []).map((field) => ({
    id: field?.id || "",
    title: field?.title || "",
    is_required: field?.is_required || false
  }));
};
const extractRelatedProducts = (relatedProducts) => {
  return (relatedProducts || []).map((rel) => ({
    id: rel?.id || "",
    section_title: rel?.section_title || "",
    related_type: rel?.related_type || "",
    related_id: rel?.related_id || "",
    position: rel?.position || 0
  }));
};
const extractReviewsAnalytics = (reviewsAnalytics) => {
  if (!reviewsAnalytics) {
    return null;
  }
  return {
    product_id: reviewsAnalytics.product_id || "",
    total_reviews: reviewsAnalytics.total_reviews || 0,
    average_rating: reviewsAnalytics.average_rating || 0,
    rating_1_count: reviewsAnalytics.rating_1_count || 0,
    rating_2_count: reviewsAnalytics.rating_2_count || 0,
    rating_3_count: reviewsAnalytics.rating_3_count || 0,
    rating_4_count: reviewsAnalytics.rating_4_count || 0,
    rating_5_count: reviewsAnalytics.rating_5_count || 0
  };
};
const toPlainText = (html) => html.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#0?39;|&apos;/g, "'").replace(/\s+/g, " ").trim();
const truncate = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  const clipped = text.slice(0, maxLength);
  const lastSpace = clipped.lastIndexOf(" ");
  return `${(lastSpace > 0 ? clipped.slice(0, lastSpace) : clipped).replace(/[\s,;:.]+$/, "")}…`;
};
const resolveSeo = (product) => {
  const seoSettings = product.seo_settings;
  const title = product.title || "";
  return {
    title: seoSettings?.title || title,
    description: seoSettings?.description || truncate(toPlainText(product.description || ""), META_DESCRIPTION_MAX_LENGTH),
    image: seoSettings?.ogImagePath || product.thumbnail || "",
    image_alt: seoSettings?.ogImageAlt || title,
    noindex: seoSettings?.noindex ?? false,
    keywords: seoSettings?.keywords ?? []
  };
};
const getLowestPriceVariant = (variants) => variants.reduce((acc, curr) => {
  const accPrice = acc.prices?.[0]?.sale_amount || acc.prices?.[0]?.amount || 0;
  const currPrice = curr.prices?.[0]?.sale_amount || curr.prices?.[0]?.amount || 0;
  return accPrice < currPrice ? acc : curr;
});
const getProductPrice = (product) => {
  const allVariants = product.variants || [];
  if (!allVariants.length) {
    return { price_in_cents: 0, list_price_in_cents: 0, currency: "eur", currency_info: null };
  }
  const pricedVariants = allVariants.filter((v) => !v.donation?.allow_custom_amount);
  const variants = pricedVariants.length ? pricedVariants : allVariants;
  const selectedVariant = product.site_product_selection === "lowest_price_first" || product.site_product_selection === null ? getLowestPriceVariant(variants) : variants[0];
  const price_in_cents = selectedVariant?.prices?.[0]?.sale_amount || selectedVariant?.prices?.[0]?.amount || 0;
  const list_price_in_cents = selectedVariant?.prices?.[0]?.amount || 0;
  const currency = selectedVariant?.prices?.[0]?.currency_code || "eur";
  const currency_info = selectedVariant?.prices?.[0]?.currency || null;
  return { price_in_cents, list_price_in_cents, currency, currency_info };
};
class EcommerceApiError extends Error {
  status;
  body;
  constructor(status, statusText, body) {
    super(`HTTP ${status}: ${statusText}`);
    this.name = "EcommerceApiError";
    this.status = status;
    this.body = body;
  }
}
const BOOKING_SLOT_TAKEN_MESSAGE = "Booking time slot not available";
const isBookingSlotTakenError = (error) => error instanceof EcommerceApiError && error.body?.message === BOOKING_SLOT_TAKEN_MESSAGE;
const getBrowserTimeZone = () => Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
const request = async (url, init) => {
  const response = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers
    }
  });
  if (!response.ok) {
    throw new EcommerceApiError(
      response.status,
      response.statusText,
      await response.json().catch(() => null)
    );
  }
  return await response.json();
};
const normalizeProduct = (product, images) => {
  const { price_in_cents, currency, currency_info } = getProductPrice(product);
  return {
    id: product.id || "",
    url_handle: product.url_handle || product.slug || product.page_settings?.seoSlug || product.seo_settings?.slug || product.id || "",
    seo: resolveSeo(product),
    title: product.title || "",
    subtitle: product.subtitle ?? null,
    ribbon_text: product.ribbon_text ?? null,
    description: product.description || "",
    image: product.thumbnail || "",
    price_in_cents,
    currency,
    currency_info,
    price_formatted: formatCurrency(price_in_cents, currency_info),
    purchasable: product.purchasable ?? false,
    order: product.order || 0,
    site_product_selection: product.site_product_selection ?? null,
    images: extractImages(images),
    options: extractProductOptions(product.options),
    variants: extractVariants(product.variants),
    collections: extractCollections(product.product_collections),
    additional_info: extractAdditionalInfo(product.additional_info),
    seo_settings: product.seo_settings ?? null,
    type: { value: product.type?.value || "" },
    custom_fields: extractCustomFields(product.custom_fields),
    related_products: extractRelatedProducts(product.related_products),
    reviews_analytics: extractReviewsAnalytics(product.reviewsAnalytics),
    updated_at: product.updated_at || ""
  };
};
async function getProducts({
  ids,
  offset,
  limit,
  order,
  sort_by,
  is_hidden,
  to_date,
  type,
  exclude_types,
  type_ids,
  collection_ids,
  sort
} = {}) {
  const queryParams = new URLSearchParams(sort || "");
  if (ids) {
    ids.forEach((id) => {
      queryParams.append("ids[]", id);
    });
  }
  if (offset) {
    queryParams.append("offset", String(offset));
  }
  if (limit) {
    queryParams.append("limit", String(limit));
  }
  if (order) {
    queryParams.append("order", String(order).toUpperCase());
  }
  if (sort_by) {
    queryParams.append("sort_by", String(sort_by));
  }
  if (is_hidden) {
    queryParams.append("is_hidden", String(is_hidden));
  }
  if (to_date) {
    queryParams.append("to_date", String(to_date));
  }
  if (type) {
    queryParams.append("type", String(type));
  }
  if (exclude_types) {
    queryParams.append("exclude_types", String(exclude_types));
  }
  if (type_ids) {
    const typeIdList = Array.isArray(type_ids) ? type_ids : [type_ids];
    typeIdList.forEach((id) => {
      queryParams.append("type_ids", String(id));
    });
  }
  if (collection_ids) {
    const collectionIdList = Array.isArray(collection_ids) ? collection_ids : [collection_ids];
    collectionIdList.forEach((id) => {
      queryParams.append("collection_ids[]", String(id));
    });
  }
  const queryString = queryParams.toString();
  const data2 = await request(
    `${ECOMMERCE_API_URL}/store/${ECOMMERCE_STORE_ID}/products${queryString ? `?${queryString}` : ""}`
  );
  return {
    count: data2.count,
    offset: data2.offset,
    limit: data2.limit,
    products: (data2.products || []).map((product) => normalizeProduct(product, product.images))
  };
}
async function getProduct(id, { field } = {}) {
  const queryParams = new URLSearchParams();
  if (field) {
    queryParams.append("field", String(field));
  }
  const queryString = queryParams.toString();
  const data2 = await request(
    `${ECOMMERCE_API_URL}/store/${ECOMMERCE_STORE_ID}/products/${id}${queryString ? `?${queryString}` : ""}`
  );
  const product = data2.product;
  return {
    ...normalizeProduct(product, product.media),
    status: product.status || "",
    created_at: product.created_at || "",
    deleted_at: product.deleted_at ?? null,
    metadata: product.metadata ?? null
  };
}
async function getProductBySlug(slug) {
  return await getProduct(slug, { field: "slug" });
}
async function getProductByHandle(handle) {
  return handle.startsWith(PRODUCT_ID_PREFIX) ? await getProduct(handle) : await getProductBySlug(handle);
}
async function getAvailability({
  bookingEventId,
  fromDate,
  toDate,
  timeZone,
  excludeBookingId
}) {
  const data2 = await request(`${ECOMMERCE_API_URL}/store/availability`, {
    method: "POST",
    body: JSON.stringify({
      booking_event_id: bookingEventId,
      from_date: fromDate,
      to_date: toDate,
      time_zone: timeZone || getBrowserTimeZone(),
      ...excludeBookingId ? { exclude_booking_id: excludeBookingId } : {}
    })
  });
  return {
    available_dates: data2.available_dates || [],
    disabled_dates: data2.disabled_dates || [],
    time_zone: data2.time_zone
  };
}
async function getTimeSlots({
  bookingEventId,
  date,
  timeZone,
  excludeBookingId
}) {
  const data2 = await request(`${ECOMMERCE_API_URL}/store/time-slots`, {
    method: "POST",
    body: JSON.stringify({
      booking_event_id: bookingEventId,
      date,
      time_zone: timeZone || getBrowserTimeZone(),
      ...excludeBookingId ? { exclude_booking_id: excludeBookingId } : {}
    })
  });
  return {
    slots: data2.slots || [],
    time_zone: data2.time_zone
  };
}
const getCheckoutLanguage = async () => {
  const data2 = await request(`${ECOMMERCE_API_URL}/store/${ECOMMERCE_STORE_ID}/settings`);
  return data2.store_owner?.language;
};
const getDomainCheckoutUrl = async () => {
  if (typeof window === "undefined") {
    return void 0;
  }
  const { protocol, origin } = window.location;
  if (protocol !== "https:") {
    return void 0;
  }
  try {
    const response = await fetch(`${DOMAIN_CHECKOUT_PATH}?probe=${Date.now()}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(DOMAIN_CHECKOUT_PROBE_TIMEOUT_MS)
    });
    return response.ok && (await response.text()).includes(DOMAIN_CHECKOUT_MARKER) ? `${origin}${DOMAIN_CHECKOUT_PATH}` : void 0;
  } catch {
    return void 0;
  }
};
async function initializeCheckout({
  items,
  successUrl,
  cancelUrl,
  locale,
  customer
}) {
  const languagePromise = getCheckoutLanguage().catch(() => "en");
  const checkoutUrl = await getDomainCheckoutUrl();
  const data2 = await request(`${ECOMMERCE_API_URL}/store/${ECOMMERCE_STORE_ID}/checkout`, {
    method: "POST",
    body: JSON.stringify({
      items,
      successUrl,
      cancelUrl,
      checkoutUrl,
      locale,
      timeZone: getBrowserTimeZone(),
      customer
    })
  });
  const language = await languagePromise;
  return { url: `${data2.url}&lang=${language?.toLowerCase() || "en"}` };
}
function Catalogue({ products, error }) {
  const [query, setQuery] = useState("");
  const filtered = products.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));
  return /* @__PURE__ */ jsxs("section", { className: "section wide", id: "online-booking", children: [
    /* @__PURE__ */ jsxs("div", { className: "section-heading", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "AKSHAR HEALTHCARE ONLINE APPOINTMENTS" }),
        /* @__PURE__ */ jsxs("h2", { children: [
          "Choose your care.",
          /* @__PURE__ */ jsx("br", {}),
          "Book your time."
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Select a service, choose an available appointment and pay securely online. Prices below are the live prices from our connected store." })
    ] }),
    /* @__PURE__ */ jsxs("label", { className: "catalogue-search", children: [
      /* @__PURE__ */ jsx(Search, { size: 19 }),
      /* @__PURE__ */ jsx("input", { "aria-label": "Search online appointments", placeholder: "Search services and screenings…", value: query, onChange: (e) => setQuery(e.target.value) })
    ] }),
    error ? /* @__PURE__ */ jsxs("div", { className: "empty-state", children: [
      /* @__PURE__ */ jsx("h3", { children: "Online appointments are temporarily unavailable." }),
      /* @__PURE__ */ jsx("p", { children: error }),
      /* @__PURE__ */ jsx("a", { className: "button", href: "tel:+919099941978", children: "Call our care team" })
    ] }) : filtered.length ? /* @__PURE__ */ jsx("div", { className: "catalogue-grid", children: filtered.map((p) => /* @__PURE__ */ jsxs("article", { className: "service-card", children: [
      /* @__PURE__ */ jsxs("div", { className: "service-card-media", children: [
        catalogueImages[p.title] && /* @__PURE__ */ jsx("img", { src: catalogueImages[p.title], alt: "", loading: "lazy" }),
        /* @__PURE__ */ jsxs("span", { className: "service-card-badge", children: [
          /* @__PURE__ */ jsx(CalendarDays, { size: 14 }),
          " ONLINE APPOINTMENT"
        ] })
      ] }),
      /* @__PURE__ */ jsx("h3", { children: p.title }),
      /* @__PURE__ */ jsxs("div", { className: "card-bottom", children: [
        /* @__PURE__ */ jsx("strong", { children: p.price_formatted }),
        p.purchasable ? /* @__PURE__ */ jsxs(Link, { className: "text-link", to: `/product/${p.url_handle}`, children: [
          "Book now ",
          /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })
        ] }) : /* @__PURE__ */ jsx("span", { children: "Currently unavailable" })
      ] })
    ] }, p.id)) }) : /* @__PURE__ */ jsx("p", { className: "empty-state", children: "No services match your search. Try another term or contact our team." }),
    /* @__PURE__ */ jsxs("div", { className: "booking-assurance", children: [
      /* @__PURE__ */ jsx(ShieldCheck, { size: 18 }),
      " Secure hosted checkout · Live appointment availability · One appointment per booking"
    ] })
  ] });
}
function ClinicPanels() {
  return /* @__PURE__ */ jsx("section", { className: "panels-section", id: "clinic-packages", children: /* @__PURE__ */ jsxs("div", { className: "wide", children: [
    /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "CURATED PREVENTIVE & OCCUPATIONAL HEALTH PACKAGES" }),
    /* @__PURE__ */ jsxs("h2", { children: [
      "Know your health.",
      /* @__PURE__ */ jsx("br", {}),
      "Plan your prevention."
    ] }),
    /* @__PURE__ */ jsx("p", { className: "panels-intro", children: "Precision diagnostics at transparent clinic pricing. Tests are processed in certified laboratories with rapid digital reporting." }),
    /* @__PURE__ */ jsxs("div", { className: "privilege-banner", children: [
      /* @__PURE__ */ jsx(BadgePercent, { size: 30 }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Corporate Privilege" }),
        /* @__PURE__ */ jsx("p", { children: "An additional 5% discount is extended to all staff members and immediate families of Akshar Healthcare partner companies." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "panel-notice", children: [
      /* @__PURE__ */ jsx("strong", { children: "Clinic enquiry packages — separate from our online appointment catalogue." }),
      " The listed panels below are not currently products in the connected store. Enquire for availability, preparation instructions and confirmation of corporate eligibility; payment is not collected through these enquiry links."
    ] }),
    packageGroups.map((group) => /* @__PURE__ */ jsxs("div", { className: "panel-group", children: [
      /* @__PURE__ */ jsx("h3", { children: group.title }),
      group.items.map((item) => /* @__PURE__ */ jsxs("details", { className: "panel-row", children: [
        /* @__PURE__ */ jsxs("summary", { children: [
          /* @__PURE__ */ jsx("img", { className: "panel-thumb", src: item.image, alt: "", loading: "lazy" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { children: item.name }),
            /* @__PURE__ */ jsx("span", { children: item.parameters })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "panel-price", children: item.price ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("strong", { children: [
              "₹",
              item.price
            ] }),
            /* @__PURE__ */ jsxs("small", { children: [
              "Corporate: ₹",
              item.corporate
            ] })
          ] }) : /* @__PURE__ */ jsx("strong", { children: "Custom quote" }) }),
          /* @__PURE__ */ jsx("span", { className: "expand-plus", children: "+" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "panel-details", children: [
          /* @__PURE__ */ jsx("p", { children: item.tests }),
          /* @__PURE__ */ jsxs(Link, { className: "text-link", to: `/enquiry?package=${encodeURIComponent(item.name)}`, children: [
            "Enquire about this package ",
            /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })
          ] })
        ] })
      ] }, item.name))
    ] }, group.title)),
    /* @__PURE__ */ jsx("p", { className: "fine-print", children: "Preventive testing must be individualized by a qualified clinician. Tumor markers such as PSA and CA 125 are not stand-alone diagnostic tests or universal cancer screening. Package suitability and any fasting requirements will be explained before collection." })
  ] }) });
}
function meta$6({
  matches,
  location
}) {
  return seo({
    matches,
    location
  }, {
    title: "Health Packages & Online Appointments | Akshar",
    description: "Explore preventive health panels and occupational screenings. Book available Akshar Healthcare appointment services and pay securely online."
  });
}
async function loader$7() {
  try {
    const {
      products
    } = await getProducts({
      exclude_types: "subscription",
      limit: 100,
      sort_by: "order",
      order: "ASC"
    });
    return {
      products: products.filter((p) => p.url_handle),
      error: ""
    };
  } catch {
    return {
      products: [],
      error: "Please call +91 9099941978 for availability and assistance."
    };
  }
}
const healthPackages = UNSAFE_withComponentProps(function HealthPackages({
  loaderData
}) {
  return /* @__PURE__ */ jsxs("main", {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "page-intro wide",
      children: [/* @__PURE__ */ jsx("span", {
        className: "eyebrow",
        children: "PREVENTION IS A POWERFUL FIRST STEP"
      }), /* @__PURE__ */ jsx("h1", {
        children: "Health packages & appointments."
      }), /* @__PURE__ */ jsx("p", {
        children: "Personal wellness. Occupational fitness. Care that fits your needs."
      }), /* @__PURE__ */ jsxs("div", {
        className: "intro-links",
        children: [/* @__PURE__ */ jsx("a", {
          href: "#online-booking",
          children: "Book & pay online ↓"
        }), /* @__PURE__ */ jsx("a", {
          href: "#clinic-packages",
          children: "Explore clinic panels ↓"
        })]
      })]
    }), /* @__PURE__ */ jsx(Catalogue, {
      products: loaderData.products,
      error: loaderData.error
    }), /* @__PURE__ */ jsx(ClinicPanels, {})]
  });
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: healthPackages,
  loader: loader$7,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
function meta$5({
  matches,
  location
}) {
  return seo({
    matches,
    location
  }, {
    title: "Our Branches & Locations | Akshar Healthcare",
    description: "Visit our central clinic and OHC hub in Vitthalapur, Ahmedabad, or learn about our on-site factory health center deployments across Gujarat."
  });
}
const branches = UNSAFE_withComponentProps(function BranchesPage() {
  return /* @__PURE__ */ jsxs("main", {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "page-intro wide",
      children: [/* @__PURE__ */ jsx("span", {
        className: "eyebrow",
        children: "OUR MEDICAL NETWORK & HUBS"
      }), /* @__PURE__ */ jsx("h1", {
        children: "Branches & Facilities."
      }), /* @__PURE__ */ jsx("p", {
        children: "Centrally located healthcare infrastructure serving industrial corridors and local communities across Gujarat."
      })]
    }), /* @__PURE__ */ jsx("section", {
      className: "section wide",
      children: /* @__PURE__ */ jsxs("div", {
        className: "deployment-grid",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "deployment-card",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "deployment-head",
            children: [/* @__PURE__ */ jsx("span", {
              className: "deployment-tag",
              children: "CENTRAL HUB & CLINIC"
            }), /* @__PURE__ */ jsx("h3", {
              children: "Vitthalapur Central Clinic & OHC Hub"
            }), /* @__PURE__ */ jsx("p", {
              className: "deployment-target",
              children: /* @__PURE__ */ jsx("strong", {
                children: "Primary Day-Care & Diagnostic Center"
              })
            })]
          }), /* @__PURE__ */ jsxs("ul", {
            className: "deployment-list",
            children: [/* @__PURE__ */ jsxs("li", {
              children: [/* @__PURE__ */ jsx(MapPin, {
                size: 20
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("strong", {
                  children: "Address"
                }), /* @__PURE__ */ jsx("span", {
                  children: address
                })]
              })]
            }), /* @__PURE__ */ jsxs("li", {
              children: [/* @__PURE__ */ jsx(Phone, {
                size: 20
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("strong", {
                  children: "24x7 Helpline / Emergency"
                }), /* @__PURE__ */ jsx("span", {
                  children: "+91 9099941978"
                })]
              })]
            }), /* @__PURE__ */ jsxs("li", {
              children: [/* @__PURE__ */ jsx(Mail, {
                size: 20
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("strong", {
                  children: "Email Enquiries"
                }), /* @__PURE__ */ jsx("span", {
                  children: "info@aksharhealthcare.in"
                })]
              })]
            }), /* @__PURE__ */ jsxs("li", {
              children: [/* @__PURE__ */ jsx(Clock, {
                size: 20
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("strong", {
                  children: "Operating Hours"
                }), /* @__PURE__ */ jsx("span", {
                  children: "Clinic: 8:00 AM – 9:00 PM | Emergency & Trauma: 24 Hours"
                })]
              })]
            })]
          }), /* @__PURE__ */ jsx("div", {
            style: {
              marginTop: "24px"
            },
            children: /* @__PURE__ */ jsxs("a", {
              className: "button small",
              href: "https://www.google.com/maps/search/?api=1&query=New+Shakti+Arcade+Vitthalapur+Gujarat",
              target: "_blank",
              rel: "noreferrer",
              children: ["Get Directions ", /* @__PURE__ */ jsx(ArrowUpRight, {
                size: 16
              })]
            })
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "deployment-card",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "deployment-head",
            children: [/* @__PURE__ */ jsx("span", {
              className: "deployment-tag",
              children: "INDUSTRIAL COVERAGE"
            }), /* @__PURE__ */ jsx("h3", {
              children: "On-Site Plant OHCs & Mobile Fleet"
            }), /* @__PURE__ */ jsx("p", {
              className: "deployment-target",
              children: /* @__PURE__ */ jsx("strong", {
                children: "Turnkey Deployments Across Industrial Corridors"
              })
            })]
          }), /* @__PURE__ */ jsxs("ul", {
            className: "deployment-list",
            children: [/* @__PURE__ */ jsxs("li", {
              children: [/* @__PURE__ */ jsx(Ambulance, {
                size: 20
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("strong", {
                  children: "Mobile Diagnostic Fleet"
                }), /* @__PURE__ */ jsx("span", {
                  children: "On-site health camps and annual medical screenings deployed directly to factory premises in Vitthalapur, Sanand, Mandal, and Becharaji."
                })]
              })]
            }), /* @__PURE__ */ jsxs("li", {
              children: [/* @__PURE__ */ jsx(HeartPulse, {
                size: 20
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("strong", {
                  children: "Dedicated Factory OHCs"
                }), /* @__PURE__ */ jsx("span", {
                  children: "We staff, equip, and manage customized on-site Occupational Health Centers directly inside manufacturing units."
                })]
              })]
            }), /* @__PURE__ */ jsxs("li", {
              children: [/* @__PURE__ */ jsx(ShieldCheck, {
                size: 20
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("strong", {
                  children: "Regional Audit Support"
                }), /* @__PURE__ */ jsx("span", {
                  children: "Liaison and digital record support for DISH and Factory Inspectorate compliance across Gujarat."
                })]
              })]
            })]
          }), /* @__PURE__ */ jsx("div", {
            style: {
              marginTop: "24px"
            },
            children: /* @__PURE__ */ jsxs(Link, {
              className: "button small ghost",
              style: {
                color: "var(--navy)",
                borderColor: "var(--silver)"
              },
              to: "/contact",
              children: ["Request Plant Branch Setup ", /* @__PURE__ */ jsx(ArrowUpRight, {
                size: 16
              })]
            })
          })]
        })]
      })
    })]
  });
});
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: branches,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
function meta$4({
  matches,
  location
}) {
  return seo({
    matches,
    location
  }, {
    title: "Contact Us | Akshar Healthcare and OHC Private Limited",
    description: "Get in touch with Akshar Healthcare for clinical appointments, health package enquiries, or turnkey industrial OHC consultation in Vitthalapur, Gujarat."
  });
}
const contact = UNSAFE_withComponentProps(function ContactPage() {
  return /* @__PURE__ */ jsxs("main", {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "page-intro wide",
      children: [/* @__PURE__ */ jsx("span", {
        className: "eyebrow",
        children: "CONNECT WITH OUR TEAM"
      }), /* @__PURE__ */ jsx("h1", {
        children: "Contact Us."
      }), /* @__PURE__ */ jsx("p", {
        children: "Reach out for patient care, emergency medical support, or enterprise occupational health partnerships."
      })]
    }), /* @__PURE__ */ jsx(Contact, {})]
  });
});
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: contact,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
const isNoPaymentProvidersError = (error) => error instanceof EcommerceApiError && (error.body?.message?.toLowerCase().includes("no payment providers") ?? false);
const dateKey = (date) => date.toLocaleDateString("en-CA", { year: "numeric", month: "2-digit", day: "2-digit" });
function BookingSlotPicker({ product, variant }) {
  const event = variant.booking_event;
  const eventId = event?.id;
  const [days, setDays] = useState([]);
  const [day, setDay] = useState("");
  const [slots, setSlots] = useState([]);
  const [slot, setSlot] = useState("");
  const [zone, setZone] = useState("");
  const [loadingDays, setLoadingDays] = useState(true);
  const [loadingTimes, setLoadingTimes] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);
  const [values, setValues] = useState({});
  useEffect(() => {
    if (!eventId) {
      setLoadingDays(false);
      return;
    }
    let active = true;
    setLoadingDays(true);
    setError("");
    setDays([]);
    setDay("");
    const today = /* @__PURE__ */ new Date();
    const end = new Date(today.getTime() + 60 * 24 * 60 * 60 * 1e3);
    getAvailability({ bookingEventId: eventId, fromDate: dateKey(today), toDate: dateKey(end) }).then((result) => {
      if (active) {
        const sorted = [...result.available_dates].sort();
        setDays(sorted);
        setDay(sorted[0] || "");
        setZone(result.time_zone);
      }
    }).catch(() => {
      if (active) setError("Could not load available dates. Please retry or contact our care team.");
    }).finally(() => {
      if (active) setLoadingDays(false);
    });
    return () => {
      active = false;
    };
  }, [eventId, retry]);
  useEffect(() => {
    if (!eventId || !day) return;
    let active = true;
    setLoadingTimes(true);
    setSlot("");
    setSlots([]);
    getTimeSlots({ bookingEventId: eventId, date: day }).then((result) => {
      if (active) {
        setSlots(result.slots);
        setZone(result.time_zone);
      }
    }).catch(() => {
      if (active) setError("Could not load appointment times. Please retry.");
    }).finally(() => {
      if (active) setLoadingTimes(false);
    });
    return () => {
      active = false;
    };
  }, [day, eventId, retry]);
  async function checkout() {
    if (!slot) return;
    setBusy(true);
    setError("");
    try {
      const { url } = await initializeCheckout({ items: [{ variant_id: variant.id, quantity: 1, time_slot: slot, time_zone: zone, custom_field_values: product.custom_fields.map((field) => ({ custom_field_id: field.id, value: values[field.id] || "" })) }], successUrl: `${window.location.origin}/checkout/success`, cancelUrl: `${window.location.origin}/product/${product.url_handle}`, locale: "en" });
      window.location.href = url;
    } catch (err) {
      if (isBookingSlotTakenError(err)) {
        setSlot("");
        if (eventId) {
          try {
            const fresh = await getTimeSlots({ bookingEventId: eventId, date: day });
            setSlots(fresh.slots);
            setZone(fresh.time_zone);
          } catch {
            setSlots([]);
          }
        }
        setError("That time was just booked. Please choose another available time.");
      } else if (isNoPaymentProvidersError(err)) {
        setError("Online payment is not available yet. Please call +91 9099941978 to confirm this appointment and pay at the clinic.");
      } else setError("Could not start secure checkout. Please try again or call +91 9099941978.");
    } finally {
      setBusy(false);
    }
  }
  const missing = product.custom_fields.some((field) => field.is_required && !values[field.id]?.trim());
  if (!event) return /* @__PURE__ */ jsxs("div", { className: "empty-state", children: [
    "Online scheduling is not configured for this service. Please call ",
    /* @__PURE__ */ jsx("a", { href: "tel:+919099941978", children: "+91 9099941978" }),
    "."
  ] });
  return /* @__PURE__ */ jsxs("div", { className: "booking-panel", children: [
    /* @__PURE__ */ jsxs("span", { className: "eyebrow", children: [
      /* @__PURE__ */ jsx(CalendarDays, { size: 17 }),
      " SELECT YOUR APPOINTMENT"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "booking-price", children: variant.sale_price_formatted || variant.price_formatted }),
    /* @__PURE__ */ jsxs("p", { className: "appointment-meta", children: [
      Math.round(event.length / 6e4),
      " minutes · ",
      event.location_type === "physical" ? event.location : event.location_type === "phone" ? event.phone_number : event.online_location || "Online consultation"
    ] }),
    !product.purchasable && /* @__PURE__ */ jsx("p", { className: "form-error", children: "This appointment is currently unavailable for booking. Please contact our care team." }),
    loadingDays ? /* @__PURE__ */ jsx("p", { role: "status", children: "Loading available dates…" }) : !days.length ? /* @__PURE__ */ jsx("p", { children: "No appointments are currently available. Please call our team." }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("label", { children: [
        "Available date",
        /* @__PURE__ */ jsx("select", { value: day, onChange: (e) => {
          setDay(e.target.value);
          setError("");
        }, children: days.map((d) => /* @__PURE__ */ jsx("option", { value: d, children: d }, d)) })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "field-label", children: "Available time" }),
      loadingTimes ? /* @__PURE__ */ jsx("p", { role: "status", children: "Loading available times…" }) : slots.length ? /* @__PURE__ */ jsx("div", { className: "slot-grid", children: slots.map((s) => /* @__PURE__ */ jsx("button", { type: "button", "aria-pressed": slot === s, onClick: () => setSlot(s), children: s.split("T")[1]?.slice(0, 5) || s }, s)) }) : /* @__PURE__ */ jsx("p", { children: "No times left on this day. Please choose another date." }),
      /* @__PURE__ */ jsxs("p", { className: "fine-print", children: [
        "Times shown in ",
        zone,
        ". A slot is reserved only after booking is completed."
      ] })
    ] }),
    product.custom_fields.map((field) => /* @__PURE__ */ jsxs("label", { children: [
      field.title,
      field.is_required ? " *" : "",
      /* @__PURE__ */ jsx("input", { required: field.is_required, value: values[field.id] || "", onChange: (e) => setValues({ ...values, [field.id]: e.target.value }) })
    ] }, field.id)),
    error && /* @__PURE__ */ jsxs("div", { className: "form-error", role: "alert", children: [
      error,
      /* @__PURE__ */ jsx("button", { className: "text-link", onClick: () => setRetry((r) => r + 1), children: "Retry availability" })
    ] }),
    /* @__PURE__ */ jsxs("button", { className: "button full", disabled: !product.purchasable || !slot || busy || missing || loadingTimes || loadingDays, onClick: checkout, children: [
      busy ? "Starting secure checkout…" : "Book & Pay Online",
      /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })
    ] }),
    /* @__PURE__ */ jsxs("span", { className: "secure-note", children: [
      /* @__PURE__ */ jsx(ShieldCheck, { size: 16 }),
      " Secure payment through our online store"
    ] })
  ] });
}
function ProductDetail({ product }) {
  const [variantId, setVariantId] = useState(product.variants[0]?.id || "");
  const variant = product.variants.find((v) => v.id === variantId);
  return /* @__PURE__ */ jsxs("main", { className: "section wide", children: [
    /* @__PURE__ */ jsxs("div", { className: "breadcrumbs", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", children: "Home" }),
      " / ",
      /* @__PURE__ */ jsx(Link, { to: "/health-packages", children: "Appointments" }),
      " / ",
      product.title
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "product-grid", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "AKSHAR HEALTHCARE • ONLINE APPOINTMENT" }),
        /* @__PURE__ */ jsx("h1", { className: "product-title", children: product.title }),
        /* @__PURE__ */ jsx("img", { className: "product-photo", src: catalogueImages[product.title] || clinicImage, alt: "" }),
        /* @__PURE__ */ jsx("div", { className: "rich-copy", dangerouslySetInnerHTML: { __html: product.description } }),
        product.additional_info.map((info) => /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h3", { children: info.title }),
          /* @__PURE__ */ jsx("div", { className: "rich-copy", dangerouslySetInnerHTML: { __html: info.description } })
        ] }, info.id)),
        /* @__PURE__ */ jsx("p", { className: "fine-print", children: "Discuss test suitability and preparation with our team before your visit. For urgent medical needs, call our 24x7 helpline rather than booking online." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        product.variants.length > 1 && /* @__PURE__ */ jsxs("label", { children: [
          "Service option",
          /* @__PURE__ */ jsx("select", { value: variantId, onChange: (e) => setVariantId(e.target.value), children: product.variants.map((v) => /* @__PURE__ */ jsxs("option", { value: v.id, children: [
            v.title,
            " — ",
            v.sale_price_formatted || v.price_formatted
          ] }, v.id)) })
        ] }),
        variant ? /* @__PURE__ */ jsx(BookingSlotPicker, { product, variant }, variant.id) : /* @__PURE__ */ jsx("p", { children: "Currently unavailable. Please contact our care team." })
      ] })
    ] })
  ] });
}
async function loader$6({
  params
}) {
  try {
    return {
      product: await getProductByHandle(params.handle)
    };
  } catch (error) {
    if (error instanceof EcommerceApiError && error.status === 404) throw new Response("Service not found", {
      status: 404
    });
    throw error;
  }
}
function meta$3({
  matches,
  location,
  loaderData
}) {
  if (!loaderData) return seo({
    matches,
    location
  }, {
    title: "Appointment not found | Akshar Healthcare",
    description: "This appointment service is no longer available. Contact Akshar Healthcare for assistance.",
    noindex: true
  });
  const {
    product
  } = loaderData;
  return seo({
    matches,
    location
  }, {
    title: product.seo.title,
    description: product.seo.description,
    image: product.seo.image,
    noindex: product.seo.noindex,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.title,
      description: product.seo.description,
      ...product.seo.image ? {
        image: product.seo.image
      } : {},
      offers: {
        "@type": "Offer",
        url: absoluteUrl(siteOriginFrom(matches), location.pathname),
        price: toPriceUnits(product.price_in_cents, product.currency_info),
        priceCurrency: product.currency.toUpperCase(),
        availability: product.purchasable ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
      }
    }
  });
}
const product_$handle = UNSAFE_withComponentProps(function ProductPage({
  loaderData
}) {
  return /* @__PURE__ */ jsx(ProductDetail, {
    product: loaderData.product
  });
});
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: product_$handle,
  loader: loader$6,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
function meta$2({
  matches,
  location
}) {
  return seo({
    matches,
    location
  }, {
    title: "Diagnostic Package Enquiry | Akshar Healthcare",
    description: "Request a preventive diagnostic panel or home blood sample collection with Akshar Healthcare in Vitthalapur, Gujarat.",
    noindex: true
  });
}
function loader$5({
  url
}) {
  return {
    packageName: url.searchParams.get("package") || ""
  };
}
const enquiry = UNSAFE_withComponentProps(function Enquiry({
  loaderData
}) {
  return /* @__PURE__ */ jsxs("main", {
    className: "section narrow",
    children: [/* @__PURE__ */ jsx("span", {
      className: "eyebrow",
      children: "PERSONALIZED PREVENTIVE CARE"
    }), /* @__PURE__ */ jsx("h1", {
      children: "Let’s plan your health check."
    }), /* @__PURE__ */ jsx("p", {
      children: "Send an enquiry for your selected clinic panel. Our team will confirm availability, preparation and collection arrangements."
    }), /* @__PURE__ */ jsx(EnquiryForm, {
      initialType: "Diagnostic enquiry",
      packageName: loaderData.packageName
    })]
  });
});
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: enquiry,
  loader: loader$5,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
function CheckoutResult({ success }) {
  useEffect(() => {
    if (success) {
      localStorage.removeItem("e-commerce-cart");
    }
  }, [success]);
  return /* @__PURE__ */ jsxs("main", { className: "section narrow result-page", children: [
    success ? /* @__PURE__ */ jsx(CheckCircle2, { size: 58 }) : /* @__PURE__ */ jsx(CalendarDays, { size: 58 }),
    /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "AKSHAR HEALTHCARE" }),
    /* @__PURE__ */ jsx("h1", { children: success ? "Thank you for your booking." : "Checkout was not completed." }),
    /* @__PURE__ */ jsx("p", { children: success ? "Your booking has been confirmed through our online store. Your receipt and appointment details will be sent using the contact information you provided at checkout." : "No payment was taken for this cancelled checkout. You can return to our appointment catalogue and choose another time." }),
    /* @__PURE__ */ jsx(Link, { className: "button", to: "/health-packages", children: "Back to Health Packages" }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Questions? Call ",
      /* @__PURE__ */ jsx("a", { href: "tel:+919099941978", children: "+91 9099941978" }),
      "."
    ] })
  ] });
}
function meta$1({
  matches,
  location
}) {
  return seo({
    matches,
    location
  }, {
    title: "Booking Confirmation | Akshar Healthcare",
    description: "Thank you for booking your healthcare appointment with Akshar Healthcare.",
    noindex: true
  });
}
const checkout_success = UNSAFE_withComponentProps(function Success() {
  return /* @__PURE__ */ jsx(CheckoutResult, {
    success: true
  });
});
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: checkout_success,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
function meta({
  matches,
  location
}) {
  return seo({
    matches,
    location
  }, {
    title: "Checkout Cancelled | Akshar Healthcare",
    description: "Your checkout was cancelled and no payment was taken. Return to the appointment catalogue.",
    noindex: true
  });
}
const checkout_cancelled = UNSAFE_withComponentProps(function Cancelled() {
  return /* @__PURE__ */ jsx(CheckoutResult, {
    success: false
  });
});
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: checkout_cancelled,
  meta
}, Symbol.toStringTag, { value: "Module" }));
function loader$4({
  request: request2
}) {
  const origin = siteOrigin(request2);
  return new Response(`# Akshar Healthcare and OHC Private Limited

Clinical care and occupational healthcare in Vitthalapur, Gujarat, India.

- [Overview](${origin}/): Clinical care, turnkey OHC, statutory documentation, emergency arrangements and contact.
- [Health packages](${origin}/health-packages): Live online appointments and separate clinic enquiry panels.
- [Sitemap](${origin}/sitemap.xml): Public appointment service pages.

Contact: info@aksharhealthcare.in | +91 9099941978
Clinic: Shop No. 38/39, New Shakti Arcade, Vitthalapur - 382130, Mandal, Ahmedabad, Gujarat.
`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
const route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$4
}, Symbol.toStringTag, { value: "Module" }));
const STATIC_PATHS = ["/", "/health-packages"];
function escapeXml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}
function toLoc(origin, path) {
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}
function serializeSitemap(origin, entries) {
  const urls = entries.map((entry2) => {
    const loc = escapeXml(toLoc(origin, entry2.path));
    const lastmod = entry2.lastmod ? `
		<lastmod>${escapeXml(entry2.lastmod)}</lastmod>` : "";
    return `	<url>
		<loc>${loc}</loc>${lastmod}
	</url>`;
  }).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
async function getDynamicEntries() {
  const {
    products
  } = await getProducts({
    exclude_types: "subscription",
    limit: 200
  });
  return products.filter((product) => product.url_handle && !product.seo.noindex).map((product) => ({
    path: `/product/${product.url_handle}`,
    ...product.updated_at ? {
      lastmod: product.updated_at
    } : {}
  }));
}
async function loader$3({
  request: request2
}) {
  const origin = siteOrigin(request2);
  const entries = [...STATIC_PATHS.map((path) => ({
    path
  })), ...await getDynamicEntries()];
  return new Response(serializeSitemap(origin, entries), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
const route13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$3
}, Symbol.toStringTag, { value: "Module" }));
const UNPUBLISHED_HOST_SUFFIXES = [".app-preview.com", ".app-preview.io", ".hostingersite.com", ".hostingersite.dev"];
const AI_ANSWER_AGENTS = ["OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User", "DuckAssistBot", "MistralAI-User", "meta-webindexer", "meta-externalfetcher", "Amzn-SearchBot", "Amzn-User"];
const AI_TRAINING_AGENTS = ["GPTBot", "ClaudeBot", "Google-Extended", "Applebot-Extended", "meta-externalagent", "Amazonbot", "Bytespider"];
const CONTENT_SIGNAL = "Content-Signal: search=yes, ai-input=yes, ai-train=no";
function publishedRules(origin) {
  return ["User-agent: *", CONTENT_SIGNAL, "Allow: /", "", ...AI_ANSWER_AGENTS.flatMap((agent) => [`User-agent: ${agent}`, CONTENT_SIGNAL, "Allow: /", ""]), ...AI_TRAINING_AGENTS.flatMap((agent) => [`User-agent: ${agent}`, "Disallow: /", ""]), `Sitemap: ${origin}/sitemap.xml`];
}
function loader$2({
  request: request2
}) {
  const origin = siteOrigin(request2);
  const {
    hostname
  } = new URL(origin);
  const isUnpublished = UNPUBLISHED_HOST_SUFFIXES.some((suffix) => hostname.endsWith(suffix));
  const lines = isUnpublished ? ["User-agent: *", "Disallow: /"] : publishedRules(origin);
  return new Response(`${lines.join("\n")}
`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
const route14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$2
}, Symbol.toStringTag, { value: "Module" }));
const logger = {
  // Application errors - goes to stdout
  error: (...args) => {
    console.log("[ERROR]", ...args);
  },
  // Critical system errors - goes to stderr
  fatal: (...args) => {
    console.error("[FATAL]", ...args);
  },
  info: (...args) => {
    console.log("[INFO]", ...args);
  },
  debug: (...args) => {
    console.log("[DEBUG]", ...args);
  },
  warn: (...args) => {
    console.log("[WARN]", ...args);
  }
};
const MS_PER_SECOND = 1e3;
const WINDOW_SECONDS = 5 * 60;
const MAX_REQUESTS_PER_WINDOW = 100;
const IPV6_PREFIX_BYTES = 7;
const clientIdentifier = (request2) => {
  const [forwarded] = request2.headers.get("x-forwarded-for")?.split(",") ?? [];
  const address2 = forwarded?.trim() || request2.headers.get("x-real-ip")?.trim();
  if (!address2) {
    return "unknown";
  }
  try {
    const parsed = ipaddr.parse(address2);
    if (!(parsed instanceof ipaddr.IPv6)) {
      return address2;
    }
    if (parsed.isIPv4MappedAddress()) {
      return parsed.toIPv4Address().toString();
    }
    return parsed.toByteArray().slice(0, IPV6_PREFIX_BYTES).join(".");
  } catch {
    return address2;
  }
};
const sharedLimiter = new RateLimiterMemory({
  points: MAX_REQUESTS_PER_WINDOW,
  duration: WINDOW_SECONDS
});
const consume = async (limiter, identifier) => {
  try {
    return { result: await limiter.consume(identifier), isLimited: false };
  } catch (error) {
    if (error instanceof RateLimiterRes) {
      return { result: error, isLimited: true };
    }
    throw error;
  }
};
const consumeRateLimit = async (identifier) => {
  const { result, isLimited } = await consume(sharedLimiter, identifier);
  return {
    isLimited,
    limit: MAX_REQUESTS_PER_WINDOW,
    remaining: result.remainingPoints,
    resetSeconds: Math.max(0, Math.ceil(result.msBeforeNext / MS_PER_SECOND))
  };
};
const rateLimitHeaders = (verdict) => {
  const headers2 = {
    "RateLimit-Policy": `${verdict.limit};w=${WINDOW_SECONDS}`,
    "RateLimit-Limit": String(verdict.limit),
    "RateLimit-Remaining": String(verdict.remaining),
    "RateLimit-Reset": String(verdict.resetSeconds)
  };
  if (verdict.isLimited) {
    headers2["Retry-After"] = String(verdict.resetSeconds);
  }
  return headers2;
};
const SECURITY_HEADERS = {
  "Cache-Control": "no-store",
  "Content-Security-Policy": "default-src 'none'; frame-ancestors 'none'",
  "Cross-Origin-Resource-Policy": "same-origin",
  "Referrer-Policy": "no-referrer",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-Permitted-Cross-Domain-Policies": "none"
};
const withExtraHeaders = (response, extra) => {
  const headers2 = new Headers(response.headers);
  for (const [name, value] of Object.entries(extra)) {
    if (!headers2.has(name)) {
      headers2.set(name, value);
    }
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: headers2
  });
};
const json = (value, init = {}) => withExtraHeaders(Response.json(value, init), SECURITY_HEADERS);
const apiError = (status, message) => json({ error: message }, { status });
const serverError = (error) => {
  const isProduction = process.env.NODE_ENV === "production";
  const cause = error instanceof Error ? error : new Error(String(error));
  return json(
    {
      message: "Something went wrong!",
      ...!isProduction && {
        error: {
          name: cause.name,
          message: cause.message,
          stack: cause.stack
        }
      }
    },
    { status: 500 }
  );
};
const runHandler = async (handler, args) => {
  const verdict = await consumeRateLimit(clientIdentifier(args.request));
  if (verdict.isLimited) {
    return withExtraHeaders(apiError(429, "Too many requests, please try again later"), rateLimitHeaders(verdict));
  }
  const extraHeaders = rateLimitHeaders(verdict);
  try {
    const result = await handler(args);
    const response = result instanceof Response ? withExtraHeaders(result, SECURITY_HEADERS) : json(result ?? null);
    return withExtraHeaders(response, extraHeaders);
  } catch (error) {
    if (error instanceof Response) {
      return withExtraHeaders(error, extraHeaders);
    }
    logger.error(error instanceof Error ? error.message : error, error instanceof Error ? error.stack : void 0);
    return withExtraHeaders(serverError(error), extraHeaders);
  }
};
const withApi = (handler) => {
  return async (args) => {
    const startedAt = Date.now();
    const response = await runHandler(handler, args);
    const { pathname } = new URL(args.request.url);
    logger.info(`${args.request.method} ${pathname} ${response.status} ${Date.now() - startedAt}ms`);
    return response;
  };
};
const loader$1 = withApi(async () => json({
  ok: true
}));
const route15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$1
}, Symbol.toStringTag, { value: "Module" }));
const notFound = withApi(async () => apiError(404, "Route not found"));
const loader = notFound;
const action = notFound;
const route16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-os80SyKz.js", "imports": ["/assets/jsx-runtime-C7teAzIl.js", "/assets/errorBoundaries-CwIUZDOa.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": true, "module": "/assets/root-DYPZFUsH.js", "imports": ["/assets/jsx-runtime-C7teAzIl.js", "/assets/errorBoundaries-CwIUZDOa.js", "/assets/lib-DLj4CSji.js", "/assets/phone-Ce6g5eex.js", "/assets/calendar-days-BYzaI8GI.js", "/assets/arrow-up-right-BVyzbE9O.js", "/assets/createLucideIcon-CQ4wVyBl.js", "/assets/healthcare-BF3vRARM.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/home-CSy8oupL.js", "imports": ["/assets/jsx-runtime-C7teAzIl.js", "/assets/seo-C2MAn8yW.js", "/assets/lib-DLj4CSji.js", "/assets/healthcare-BF3vRARM.js", "/assets/arrow-up-right-BVyzbE9O.js", "/assets/shield-check-CHznVF8_.js", "/assets/heart-pulse-DoDrErEi.js", "/assets/file-check-2-CJ6Pfr0u.js", "/assets/stethoscope-WS7AJxl5.js", "/assets/why-partner-CloAPo1d.js", "/assets/departments-Z1jkdPj_.js", "/assets/deployment-CBfF5kZ2.js", "/assets/createLucideIcon-CQ4wVyBl.js", "/assets/badge-percent-hPukN8GW.js", "/assets/contact-DDlqy0Rd.js", "/assets/errorBoundaries-CwIUZDOa.js", "/assets/clock-BFt8ltL3.js", "/assets/ambulance-pCTzhK_M.js", "/assets/building-2-Bf86i9z0.js", "/assets/enquiry-form-rtJnqfFK.js", "/assets/circle-check-B3HWz1HG.js", "/assets/map-pin-rOjvYxhv.js", "/assets/phone-Ce6g5eex.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/about-BKPCUXeq.js", "imports": ["/assets/jsx-runtime-C7teAzIl.js", "/assets/seo-C2MAn8yW.js", "/assets/why-partner-CloAPo1d.js", "/assets/createLucideIcon-CQ4wVyBl.js", "/assets/stethoscope-WS7AJxl5.js", "/assets/file-check-2-CJ6Pfr0u.js", "/assets/clock-BFt8ltL3.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/clinic": { "id": "routes/clinic", "parentId": "root", "path": "clinic", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/clinic-uuVFwygR.js", "imports": ["/assets/jsx-runtime-C7teAzIl.js", "/assets/seo-C2MAn8yW.js", "/assets/departments-Z1jkdPj_.js", "/assets/healthcare-BF3vRARM.js", "/assets/heart-pulse-DoDrErEi.js", "/assets/createLucideIcon-CQ4wVyBl.js", "/assets/ambulance-pCTzhK_M.js", "/assets/arrow-up-right-BVyzbE9O.js", "/assets/lib-DLj4CSji.js", "/assets/errorBoundaries-CwIUZDOa.js", "/assets/stethoscope-WS7AJxl5.js", "/assets/building-2-Bf86i9z0.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/compliance": { "id": "routes/compliance", "parentId": "root", "path": "compliance", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/compliance-QaNF7ldt.js", "imports": ["/assets/jsx-runtime-C7teAzIl.js", "/assets/seo-C2MAn8yW.js", "/assets/deployment-CBfF5kZ2.js", "/assets/lib-DLj4CSji.js", "/assets/errorBoundaries-CwIUZDOa.js", "/assets/healthcare-BF3vRARM.js", "/assets/arrow-up-right-BVyzbE9O.js", "/assets/createLucideIcon-CQ4wVyBl.js", "/assets/file-check-2-CJ6Pfr0u.js", "/assets/shield-check-CHznVF8_.js", "/assets/building-2-Bf86i9z0.js", "/assets/ambulance-pCTzhK_M.js", "/assets/stethoscope-WS7AJxl5.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/health-packages": { "id": "routes/health-packages", "parentId": "root", "path": "health-packages", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/health-packages-NIYjF-lw.js", "imports": ["/assets/jsx-runtime-C7teAzIl.js", "/assets/seo-C2MAn8yW.js", "/assets/lib-DLj4CSji.js", "/assets/healthcare-BF3vRARM.js", "/assets/createLucideIcon-CQ4wVyBl.js", "/assets/calendar-days-BYzaI8GI.js", "/assets/arrow-up-right-BVyzbE9O.js", "/assets/shield-check-CHznVF8_.js", "/assets/badge-percent-hPukN8GW.js", "/assets/errorBoundaries-CwIUZDOa.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/branches": { "id": "routes/branches", "parentId": "root", "path": "branches", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/branches-f2j5EfEz.js", "imports": ["/assets/jsx-runtime-C7teAzIl.js", "/assets/lib-DLj4CSji.js", "/assets/seo-C2MAn8yW.js", "/assets/healthcare-BF3vRARM.js", "/assets/map-pin-rOjvYxhv.js", "/assets/phone-Ce6g5eex.js", "/assets/clock-BFt8ltL3.js", "/assets/arrow-up-right-BVyzbE9O.js", "/assets/ambulance-pCTzhK_M.js", "/assets/heart-pulse-DoDrErEi.js", "/assets/shield-check-CHznVF8_.js", "/assets/errorBoundaries-CwIUZDOa.js", "/assets/createLucideIcon-CQ4wVyBl.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/contact-helQFq7q.js", "imports": ["/assets/jsx-runtime-C7teAzIl.js", "/assets/seo-C2MAn8yW.js", "/assets/contact-DDlqy0Rd.js", "/assets/enquiry-form-rtJnqfFK.js", "/assets/circle-check-B3HWz1HG.js", "/assets/createLucideIcon-CQ4wVyBl.js", "/assets/arrow-up-right-BVyzbE9O.js", "/assets/healthcare-BF3vRARM.js", "/assets/map-pin-rOjvYxhv.js", "/assets/phone-Ce6g5eex.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/product.$handle": { "id": "routes/product.$handle", "parentId": "root", "path": "product/:handle", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/product._handle-Kp53RI7s.js", "imports": ["/assets/jsx-runtime-C7teAzIl.js", "/assets/seo-C2MAn8yW.js", "/assets/lib-DLj4CSji.js", "/assets/calendar-days-BYzaI8GI.js", "/assets/arrow-up-right-BVyzbE9O.js", "/assets/shield-check-CHznVF8_.js", "/assets/healthcare-BF3vRARM.js", "/assets/errorBoundaries-CwIUZDOa.js", "/assets/createLucideIcon-CQ4wVyBl.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/enquiry": { "id": "routes/enquiry", "parentId": "root", "path": "enquiry", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/enquiry-GRrsjYQS.js", "imports": ["/assets/jsx-runtime-C7teAzIl.js", "/assets/seo-C2MAn8yW.js", "/assets/enquiry-form-rtJnqfFK.js", "/assets/circle-check-B3HWz1HG.js", "/assets/createLucideIcon-CQ4wVyBl.js", "/assets/arrow-up-right-BVyzbE9O.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/checkout.success": { "id": "routes/checkout.success", "parentId": "root", "path": "checkout/success", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/checkout.success-BxKCbjWI.js", "imports": ["/assets/jsx-runtime-C7teAzIl.js", "/assets/seo-C2MAn8yW.js", "/assets/checkout-result-BiqJ6v0b.js", "/assets/lib-DLj4CSji.js", "/assets/errorBoundaries-CwIUZDOa.js", "/assets/circle-check-B3HWz1HG.js", "/assets/createLucideIcon-CQ4wVyBl.js", "/assets/calendar-days-BYzaI8GI.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/checkout.cancelled": { "id": "routes/checkout.cancelled", "parentId": "root", "path": "checkout/cancelled", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/checkout.cancelled-D2l0iS8O.js", "imports": ["/assets/jsx-runtime-C7teAzIl.js", "/assets/seo-C2MAn8yW.js", "/assets/checkout-result-BiqJ6v0b.js", "/assets/lib-DLj4CSji.js", "/assets/errorBoundaries-CwIUZDOa.js", "/assets/circle-check-B3HWz1HG.js", "/assets/createLucideIcon-CQ4wVyBl.js", "/assets/calendar-days-BYzaI8GI.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/llms.txt": { "id": "routes/llms.txt", "parentId": "root", "path": "llms.txt", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": false, "hasErrorBoundary": false, "module": "/assets/llms.txt-l0sNRNKZ.js", "imports": [], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/sitemap.xml": { "id": "routes/sitemap.xml", "parentId": "root", "path": "sitemap.xml", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": false, "hasErrorBoundary": false, "module": "/assets/sitemap.xml-l0sNRNKZ.js", "imports": [], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/robots.txt": { "id": "routes/robots.txt", "parentId": "root", "path": "robots.txt", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": false, "hasErrorBoundary": false, "module": "/assets/robots.txt-l0sNRNKZ.js", "imports": [], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/api.health": { "id": "routes/api.health", "parentId": "root", "path": "api/health", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": false, "hasErrorBoundary": false, "module": "/assets/api.health-l0sNRNKZ.js", "imports": [], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/api.$": { "id": "routes/api.$", "parentId": "root", "path": "api/*", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": false, "hasErrorBoundary": false, "module": "/assets/api._-l0sNRNKZ.js", "imports": [], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-a818fd09.js", "version": "a818fd09", "sri": void 0 };
const assetsBuildDirectory = "..\\..\\dist\\apps\\web\\client";
const basename = "/";
const future = { "unstable_enableNodeReadableStream": false, "unstable_optimizeDeps": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/clinic": {
    id: "routes/clinic",
    parentId: "root",
    path: "clinic",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/compliance": {
    id: "routes/compliance",
    parentId: "root",
    path: "compliance",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/health-packages": {
    id: "routes/health-packages",
    parentId: "root",
    path: "health-packages",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/branches": {
    id: "routes/branches",
    parentId: "root",
    path: "branches",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/product.$handle": {
    id: "routes/product.$handle",
    parentId: "root",
    path: "product/:handle",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/enquiry": {
    id: "routes/enquiry",
    parentId: "root",
    path: "enquiry",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/checkout.success": {
    id: "routes/checkout.success",
    parentId: "root",
    path: "checkout/success",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "routes/checkout.cancelled": {
    id: "routes/checkout.cancelled",
    parentId: "root",
    path: "checkout/cancelled",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  },
  "routes/llms.txt": {
    id: "routes/llms.txt",
    parentId: "root",
    path: "llms.txt",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  },
  "routes/sitemap.xml": {
    id: "routes/sitemap.xml",
    parentId: "root",
    path: "sitemap.xml",
    index: void 0,
    caseSensitive: void 0,
    module: route13
  },
  "routes/robots.txt": {
    id: "routes/robots.txt",
    parentId: "root",
    path: "robots.txt",
    index: void 0,
    caseSensitive: void 0,
    module: route14
  },
  "routes/api.health": {
    id: "routes/api.health",
    parentId: "root",
    path: "api/health",
    index: void 0,
    caseSensitive: void 0,
    module: route15
  },
  "routes/api.$": {
    id: "routes/api.$",
    parentId: "root",
    path: "api/*",
    index: void 0,
    caseSensitive: void 0,
    module: route16
  }
};
const allowedActionOrigins = false;
export {
  allowedActionOrigins,
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
