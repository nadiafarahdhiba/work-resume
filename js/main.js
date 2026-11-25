/* Edit this object to change the page.
   Leave email, phone, and city empty until the real values are known.
   Add achievements to a job's bullets array.
   Add tool names to tools, and certifications to certifications. */
const RESUME = {
  name: "Nadia Farah Dhiba",
  nav: {
    contact: "Contact",
    links: [
      { href: "#about", label: "About" },
      { href: "#experience", label: "Experience" },
      { href: "#skills", label: "Skills" },
      { href: "#education", label: "Education" }
    ]
  },
  hero: {
    kicker: "Quality assurance",
    givenName: "Nadia",
    familyName: "Farah Dhiba",
    tagline: "I make sure software does what it promises.",
    roleLine: "Senior Software Tester, Ninja Van · Indonesia",
    viewExperience: "View experience",
    contact: "Contact me"
  },
  stats: [
    { value: "~9", label: "years working, from 2017" },
    { value: "~8", label: "years in testing, from 2018" },
    { value: "2023", label: "senior tester at Ninja Van" }
  ],
  statsNote: "Approximate, counted from public dates.",
  about: {
    kicker: "About",
    title: "What I do",
    paragraphs: [
      "I test software. I read what a product is supposed to do, turn that into test cases, run them, and write down what fails so it can be fixed.",
      "I have worked this way for about eight years, on agile teams. The longest run is at Ninja Van: software tester from 2020, senior software tester since February 2023. I have also tested at ASTRO, at Mapan through SQUADAP, and at Bukalapak, where the testing work began with user acceptance.",
      "Alongside the testing itself I keep test cases in order, record defects, and follow the debugging that comes after a bug is found."
    ]
  },
  skills: {
    kicker: "Skills",
    title: "A release, from start to finish",
    groupsTitle: "What I practice",
    groups: [
      {
        name: "Software testing",
        detail: "Checking that a product behaves the way it was specified."
      },
      {
        name: "Agile delivery",
        detail: "Testing as part of an agile software team."
      },
      {
        name: "Test-case management",
        detail: "Turning requirements into cases that can be run again."
      },
      {
        name: "Defect reporting",
        detail: "Writing down what failed, clearly enough that it gets fixed."
      }
    ],
    process: [
      { title: "Requirements", detail: "Read what the change is supposed to do." },
      { title: "Test design", detail: "Write the cases that will prove it." },
      { title: "Execution", detail: "Run those cases against the build." },
      { title: "Defects", detail: "Record what failed, clearly enough to fix." },
      { title: "Release", detail: "Follow the debugging and check the fix." }
    ]
  },
  /* Tool names stay empty until Nadia supplies the ones she uses. */
  tools: [],
  toolsEmpty: "Add the tools you use.",
  experience: {
    kicker: "Experience",
    title: "Where I have worked",
    earlier: "Earlier",
    jobs: [
      {
        when: "2023 — Now",
        period: "February 2023 — Present",
        role: "Senior Software Tester",
        company: "Ninja Van",
        scope: "Senior software testing for Ninja Van.",
        bullets: [
          /* Add real achievements here. */
        ]
      },
      {
        when: "2022 — 2023",
        period: "September 2022 — January 2023",
        role: "QA Engineer",
        company: "ASTRO",
        scope: "Quality assurance engineering at ASTRO.",
        bullets: [
          /* Add real achievements here. */
        ]
      },
      {
        when: "2020 — 2022",
        period: "April 2020 — September 2022",
        role: "Software Tester",
        company: "Ninja Van",
        scope: "Software testing for Ninja Van.",
        bullets: [
          /* Add real achievements here. */
        ]
      },
      {
        when: "2019 — 2020",
        period: "September 2019 — April 2020",
        role: "Software Quality Assurance",
        company: "Mapan",
        scope: "Quality assurance for Mapan, through SQUADAP (PT Sistem Pengujian Pratama).",
        bullets: [
          /* Add real achievements here. */
        ]
      },
      {
        when: "2019",
        period: "July 2019 — September 2019",
        role: "Software Quality Analyst",
        company: "Bukalapak",
        scope: "Software quality analysis at Bukalapak.",
        bullets: [
          /* Add real achievements here. */
        ]
      },
      {
        when: "2018 — 2019",
        period: "May 2018 — July 2019",
        role: "User Acceptance Tester",
        company: "Bukalapak",
        scope: "User acceptance testing at Bukalapak.",
        bullets: [
          /* Add real achievements here. */
        ]
      },
      {
        when: "2017 — 2018",
        period: "December 2017 — May 2018",
        role: "Customer Support — Email",
        company: "Bukalapak",
        scope: "Email customer support at Bukalapak.",
        earlier: true,
        bullets: [
          /* Add real achievements here. */
        ]
      },
      {
        when: "2017",
        period: "August 2017 — October 2017",
        role: "Social Media Executive",
        company: "Activate Media Nusantara",
        scope: "Social media work at Activate Media Nusantara.",
        earlier: true,
        bullets: [
          /* Add real achievements here. */
        ]
      }
    ]
  },
  education: {
    kicker: "Education",
    title: "Study",
    degree: "Bachelor of Science",
    school: "University of Indonesia",
    years: "2012 — 2016"
  },
  /* Certifications stay empty until Nadia supplies them. The major is omitted on purpose. */
  certifications: [],
  certificationsEmpty: "Add certifications here.",
  contact: {
    kicker: "Contact",
    title: "How to reach me",
    intro: "LinkedIn is the public contact. Email, phone, and city are waiting on the real details.",
    email: "",
    phone: "",
    city: "",
    country: "Indonesia",
    linkedin: {
      label: "nadiafarahdhiba",
      href: "https://www.linkedin.com/in/nadiafarahdhiba"
    },
    labels: {
      linkedin: "LinkedIn",
      email: "Email",
      phone: "Phone",
      location: "Location"
    },
    placeholders: {
      email: "Add your email",
      phone: "Add your phone",
      city: "Add your city"
    },
    copy: "Copy",
    copied: "Copied",
    copyFail: "Select and copy"
  },
  backToTop: "Back to top"
};

function read(path) {
  return path.split(".").reduce((node, key) => (node == null ? node : node[key]), RESUME);
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function fillFields() {
  document.querySelectorAll("[data-field]").forEach((node) => {
    const value = read(node.dataset.field);
    node.textContent = value == null ? "" : String(value);
  });
}

function fillParagraphs() {
  document.querySelectorAll("[data-paragraphs]").forEach((node) => {
    const paragraphs = read(node.dataset.paragraphs) || [];
    paragraphs.forEach((text) => node.append(el("p", null, text)));
  });
}

function fillNav() {
  const nav = document.querySelector("[data-nav]");
  RESUME.nav.links.forEach((link) => {
    const anchor = el("a", null, link.label);
    anchor.href = link.href;
    nav.append(anchor);
  });
}

function fillStats() {
  const row = document.querySelector("[data-stats]");
  RESUME.stats.forEach((stat) => {
    const item = el("div", "stat");
    item.append(el("b", null, stat.value));
    item.append(el("span", null, stat.label));
    row.append(item);
  });
}

function fillProcess() {
  const list = document.querySelector("[data-process]");
  RESUME.skills.process.forEach((step, index) => {
    const item = el("li");
    item.append(el("span", "step-no", String(index + 1).padStart(2, "0")));
    const copy = el("div");
    copy.append(el("h3", null, step.title));
    copy.append(el("p", null, step.detail));
    item.append(copy);
    list.append(item);
  });
}

function fillSkills() {
  const list = document.querySelector("[data-skills]");
  RESUME.skills.groups.forEach((group) => {
    const item = el("li");
    item.append(el("h3", null, group.name));
    item.append(el("p", null, group.detail));
    list.append(item);
  });
}

function fillTools() {
  const slot = document.querySelector("[data-tools]");
  if (RESUME.tools.length === 0) {
    slot.append(el("p", "unfilled", RESUME.toolsEmpty));
    return;
  }
  const list = el("ul", "tool-list");
  RESUME.tools.forEach((tool) => list.append(el("li", null, tool)));
  slot.append(list);
}

function fillJobs() {
  const slot = document.querySelector("[data-jobs]");
  let earlierShown = false;
  RESUME.experience.jobs.forEach((job) => {
    if (job.earlier && !earlierShown) {
      slot.append(el("p", "kicker earlier-label", RESUME.experience.earlier));
      earlierShown = true;
    }
    const article = el("article", job.earlier ? "job earlier" : "job");
    article.append(el("p", "when", job.when));
    const body = el("div");
    body.append(el("h3", null, job.role));
    body.append(el("p", "company", job.company));
    body.append(el("p", "period", job.period));
    body.append(el("p", "scope", job.scope));
    const written = job.bullets.filter((bullet) => String(bullet).trim());
    if (written.length) {
      const list = el("ul");
      written.forEach((bullet) => list.append(el("li", null, bullet)));
      body.append(list);
    }
    article.append(body);
    slot.append(article);
  });
}

function fillDegree() {
  const slot = document.querySelector("[data-degree]");
  slot.className = "degree";
  slot.append(el("h3", null, RESUME.education.degree));
  slot.append(el("p", "company", RESUME.education.school));
  slot.append(el("p", null, RESUME.education.years));
}

function fillCerts() {
  const slot = document.querySelector("[data-certs]");
  if (RESUME.certifications.length === 0) {
    slot.append(el("p", "unfilled", RESUME.certificationsEmpty));
    return;
  }
  const list = el("ul", "tool-list");
  RESUME.certifications.forEach((item) => list.append(el("li", null, item)));
  slot.append(list);
}

function placeholder(text) {
  return el("span", "is-placeholder", text);
}

function contactValue(text, href) {
  if (!text) return null;
  if (!href) return el("span", null, text);
  const link = el("a", null, text);
  link.href = href;
  if (href.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
  return link;
}

function bindCopy(button, email) {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
      button.textContent = RESUME.contact.copied;
    } catch {
      button.textContent = RESUME.contact.copyFail;
    }
  });
}

function addContactRow(list, label, node) {
  const row = el("div", "contact-row");
  row.append(el("dt", null, label));
  const value = el("dd");
  value.append(node);
  row.append(value);
  list.append(row);
}

function fillContact() {
  const list = document.querySelector("[data-contact]");
  const labels = RESUME.contact.labels;
  const missing = RESUME.contact.placeholders;
  const linkedin = contactValue(RESUME.contact.linkedin.label, RESUME.contact.linkedin.href);
  addContactRow(list, labels.linkedin, linkedin);

  const emailLine = el("div", "value-line");
  const email = RESUME.contact.email.trim();
  if (email.includes("@")) {
    emailLine.append(contactValue(email, `mailto:${email}`));
    const button = el("button", "copy", RESUME.contact.copy);
    button.type = "button";
    bindCopy(button, email);
    emailLine.append(button);
  } else {
    emailLine.append(placeholder(missing.email));
  }
  addContactRow(list, labels.email, emailLine);

  const phone = RESUME.contact.phone.trim();
  const phoneNode = phone
    ? contactValue(phone, `tel:${phone.replace(/[^\d+]/g, "")}`)
    : placeholder(missing.phone);
  addContactRow(list, labels.phone, phoneNode);

  const location = el("div", "value-line");
  const city = RESUME.contact.city.trim();
  location.append(city ? el("span", null, `${city}, ${RESUME.contact.country}`) : placeholder(missing.city));
  if (!city) location.append(el("span", null, RESUME.contact.country));
  addContactRow(list, labels.location, location);
}

function fillFooter() {
  const year = new Date().getFullYear();
  document.querySelector("[data-footer]").textContent =
    `© ${year} ${RESUME.name} · ${RESUME.contact.country}`;
}

function reveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("in"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  nodes.forEach((node) => observer.observe(node));
}

fillFields();
fillParagraphs();
fillNav();
fillStats();
fillProcess();
fillSkills();
fillTools();
fillJobs();
fillDegree();
fillCerts();
fillContact();
fillFooter();
reveal();
