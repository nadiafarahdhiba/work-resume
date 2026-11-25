/* Edit this object to change the page.
   Email, city, and phone: contact.email, contact.city, contact.phone.
   School: education.degree, education.school, education.years, education.notes.
   Tools: add a name to the matching items list under tools.
   A job's details are its bullets array. */
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
    kicker: "Software QA engineer",
    givenName: "Nadia",
    familyName: "Farah Dhiba",
    tagline: "I make sure software does what it promises.",
    roleLine: "Senior Software QA Engineer · Jakarta, Indonesia",
    viewExperience: "View experience",
    contact: "Contact me"
  },
  about: {
    kicker: "About",
    title: "What I do",
    paragraphs: [
      "I am a senior software QA engineer with 8+ years of testing across mobile apps, websites, and APIs, mostly in logistics and e-commerce.",
      "The work is manual and end to end: functional, regression, smoke, sanity, and user acceptance testing. I write test plans and cases, including Gherkin, and I look for edge cases with product managers, developers, and regional squads before a release.",
      "I also work with automation engineers on regression runs and failed builds, mentor other testers, and use AI-assisted tools for test-case design, log analysis, and QA notes."
    ]
  },
  skills: {
    kicker: "Skills",
    title: "How I take a release",
    lead: "This is the flow I follow as a QA. On a typical change I walk the same path, from the requirement to the sign-off.",
    groupsTitle: "What I practice",
    groups: [
      {
        name: "Manual testing",
        detail: "Mobile, web, and API. End-to-end, functional, regression, smoke, sanity, and user acceptance testing."
      },
      {
        name: "Test design",
        detail: "Test plans and cases, written by hand and in Gherkin. Positive and negative paths, plus exploratory UX testing."
      },
      {
        name: "Automation support",
        detail: "Regression runs and failed-build triage with automation engineers. I have some experience with Python, Playwright, and Maestro, using AI while I work in them."
      },
      {
        name: "Ways of working",
        detail: "Agile and Scrum, inside a normal software delivery cycle."
      },
      {
        name: "Domain",
        detail: "Logistics and supply chain, including first mile, last mile, PUDO, and hub or sort operations. E-commerce partnerships."
      }
    ],
    process: [
      { title: "Read the requirement", detail: "I start with what the change is supposed to do, and where it could break." },
      { title: "Design the tests", detail: "I turn that into a plan and cases, by hand or in Gherkin, for the path that should work and the ones that should fail." },
      { title: "Run them", detail: "I test by hand, then regression, smoke, and user acceptance, across mobile, web, and API." },
      { title: "Write the defects", detail: "What fails gets a clear report, and I follow it until it is fixed." },
      { title: "Sign off", detail: "I recheck the fix, look at the regression run, and then say whether the release is ready." }
    ]
  },
  toolsTitle: "Tools",
  /* Add a tool by putting its name in the matching items list. */
  tools: [
    {
      name: "Test management",
      items: ["Jira", "Cucumber Studio", "Testsaurus"],
      note: "Testsaurus is Ninja Van’s internal test management platform."
    },
    { name: "Documentation", items: ["Confluence"] },
    { name: "Devices", items: ["Smartphone Test Farm", "Vysor"] },
    { name: "API", items: ["Postman", "Apidog", "cURL", "Mockoon"] },
    { name: "Databases", items: ["MySQL", "TiDB", "DBeaver"] },
    { name: "Monitoring", items: ["Kibana", "Grafana", "Metabase"] },
    { name: "CI/CD and code", items: ["Bamboo", "GitHub", "Bitbucket", "IntelliJ"] },
    { name: "Used with AI", items: ["Python", "Playwright", "Maestro", "Maestro Studio"] }
  ],
  experience: {
    kicker: "Experience",
    title: "Where I have worked",
    earlier: "Earlier",
    jobs: [
      {
        when: "2023 — 2026",
        period: "February 2023 — December 2026",
        role: "Senior Software Tester",
        company: "Ninja Van",
        scope: "",
        bullets: [
          "Led end-to-end manual and regression testing across First Mile, Last Mile, PUDO, and Ninja Mart — mobile apps, web, and APIs, in QA and production. That work supported 100% automation test coverage, 96.3% tech delivery quality, and a 5.0/5.0 testing efficiency rating across First Mile (5.0), Last Mile (5.0), and PUDO (4.85).",
          "Contributed to QA on 5+ major regional initiatives: process flows, early corner cases, risk checks, and test strategy.",
          "QA person-in-charge for First Mile, and also tested Last Mile, PUDO, and Ninja Mart. Coordinated sprint tasks and onboarded new testers on the QA workflow and product architecture.",
          "Worked with developers and squads in Indonesia, Malaysia, the Philippines, Singapore, Thailand, and Vietnam. Triaged operations tech-support tickets, ran eligible in-sprint tickets through existing automation, and investigated failed regression runs with automation engineers. Execution runtime reduction scored 98.3%.",
          "Led test-scenario reduction and reprioritization for First Mile, Last Mile, and PUDO, tracked in Metabase. Used AI-assisted tools for task tracking, scenario queries, a Python migration, moving cases into Testsaurus, and daily QA notes."
        ]
      },
      {
        when: "2022 — 2023",
        period: "September 2022 — January 2023",
        role: "QA Engineer",
        company: "PT Astro Technologies Indonesia",
        scope: "",
        bullets: [
          "Read functional specifications with the product team, set the testing scope, and designed scenarios against the business requirements.",
          "Ran end-to-end testing on Astro's mobile apps, web, and APIs in staging and production.",
          "Ran regression and sanity checks before and after deployment.",
          "Logged, prioritized, and tracked defects to a fix in Jira."
        ]
      },
      {
        when: "2020 — 2022",
        period: "April 2020 — September 2022",
        role: "Software Tester",
        company: "Ninja Van",
        scope: "",
        bullets: [
          "QA person-in-charge for two squads, Partnership Integration and CoreV2, under the mile0 vertical. Distributed sprint work, supervised 5 QA engineers, and worked across verticals.",
          "Wrote test plans and cases with the product team, then ran manual, regression, smoke, and UAT across client and server products, APIs, and server infrastructure.",
          "Worked with engineering on defects, test reports, and the final QA sign-off for a release.",
          "Set QA practices and standard workflows, and looked for bottlenecks in how the team delivered.",
          "Worked with QA automation engineers on coverage, and wrote product notes that made onboarding faster."
        ]
      },
      {
        when: "2019 — 2020",
        period: "September 2019 — April 2020",
        role: "Software Quality Assurance",
        company: "Mapan — PT Ruma",
        scope: "Placed through PT Sistem Pengujian Pratama.",
        bullets: [
          "Tested the SAP project that supported the finance team, and checked that in-project deployments held up.",
          "Folded business and delivery requirements into the test schedule and the release-readiness check.",
          "Worked with developers on database, performance, and system issues before deployment."
        ]
      },
      {
        when: "2019",
        period: "July 2019 — September 2019",
        role: "Software Quality Analyst",
        company: "Bukalapak",
        scope: "",
        bullets: [
          "Ran manual, regression, and user acceptance testing on the Bukalapak app in Agile and Scrum, before production.",
          "Wrote positive and negative cases in a standard format and in Gherkin, and set a testing process for new and existing features.",
          "Worked with product managers, developers, and UI/UX designers through the delivery cycle.",
          "Tracked defects to a fix in Jira and gave the QA sign-off for a release."
        ]
      },
      {
        when: "2018 — 2019",
        period: "May 2018 — July 2019",
        role: "User Acceptance Tester",
        company: "Bukalapak",
        scope: "",
        bullets: [
          "Actor lead for user acceptance testing: supervised the full test pass, split user-journey scope across testers, interviewed UAT candidates, and sent testing reports to the squads.",
          "Designed and ran positive and negative cases against end-to-end user journeys, including exploratory UX and manual testing in beta and production.",
          "Found usability bottlenecks, wrote up defects, checked fixes through to closure, and gave developers an end-user view of open issues.",
          "Kept cross-functional teams current on progress, quality standards, and obstacles in the test pass."
        ]
      },
      {
        when: "2017 — 2018",
        period: "December 2017 — May 2018",
        role: "Customer Support — Email",
        company: "Bukalapak",
        scope: "",
        earlier: true,
        bullets: [
          "Handled a high volume of customer email, including complaints, and looked for the cause before answering.",
          "Wrote down issues that kept coming back, and escalated technical or operational tickets to engineering and operations."
        ]
      },
      {
        when: "2017",
        period: "August 2017 — October 2017",
        role: "Social Media Executive",
        company: "Activate Media Nusantara",
        scope: "",
        earlier: true,
        bullets: [
          "Watched brand social accounts, coordinated influencer work, and lined up daily creative briefs with the digital and creative teams.",
          "Took part in brand activation and digital campaign work."
        ]
      }
    ]
  },
  education: {
    kicker: "Education",
    title: "Study",
    degree: "Bachelor of Science in Biology",
    school: "Universitas Indonesia",
    years: "2012 — 2016"
  },
  /* Add a certification by putting a line in this list. An empty list stays hidden. */
  certifications: [],
  contact: {
    kicker: "Contact",
    title: "How to reach me",
    intro: "Email and LinkedIn are the direct ways to reach me.",
    email: "nadiafarahdhiba@gmail.com",
    phone: "",
    city: "Jakarta",
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
  const slot = document.querySelector("[data-skills]");
  const board = el("div", "card-grid");
  RESUME.skills.groups.forEach((group) => {
    const card = el("article", "info-card");
    card.append(el("h3", null, group.name));
    card.append(el("p", null, group.detail));
    board.append(card);
  });
  slot.replaceChildren(board);
}

function fillTools() {
  const slot = document.querySelector("[data-tools]");
  const board = el("div", "card-grid");
  RESUME.tools.forEach((group) => {
    const card = el("article", "info-card");
    card.append(el("h3", null, group.name));
    const chips = el("div", "chips");
    group.items.forEach((name) => chips.append(el("span", "chip", name)));
    card.append(chips);
    if (group.note) card.append(el("p", "tool-note", group.note));
    board.append(card);
  });
  slot.replaceChildren(board);
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
    if (job.scope) body.append(el("p", "scope", job.scope));
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
  const study = RESUME.education;
  slot.className = "degree";
  slot.append(el("h3", null, study.degree));
  if (study.detail) slot.append(el("p", null, study.detail));
  slot.append(el("p", "company", study.school));
  slot.append(el("p", null, study.years));
  (study.notes || []).forEach((note) => slot.append(el("p", null, note)));
}

function fillCerts() {
  const slot = document.querySelector("[data-certs]");
  if (!slot) return;
  if (RESUME.certifications.length === 0) {
    slot.remove();
    document.querySelector(".edu").classList.add("edu-single");
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
  if (phone) {
    addContactRow(list, labels.phone, contactValue(phone, `tel:${phone.replace(/[^\d+]/g, "")}`));
  }

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

function playFlow() {
  const items = [...document.querySelectorAll(".process li")];
  if (!items.length) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    items.forEach((item) => item.classList.add("is-on"));
    return;
  }
  let index = 0;
  const show = () => {
    items.forEach((item, step) => item.classList.toggle("is-on", step === index));
    index = (index + 1) % items.length;
  };
  show();
  window.setInterval(show, 2400);
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
fillProcess();
playFlow();
fillSkills();
fillTools();
fillJobs();
fillDegree();
fillCerts();
fillContact();
fillFooter();
reveal();
