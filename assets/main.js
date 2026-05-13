// ===== TERMINAL TYPING =====
(function initTerminal() {
  const lines = [
    { text: "$ whoami", cls: "term-cmd" },
    { text: "George Lukaanya", cls: "term-output" },
    { text: "$ cat role.txt", cls: "term-cmd" },
    { text: "Software Engineer & ML Researcher", cls: "term-output" },
    { text: "$ cat location.txt", cls: "term-cmd" },
    { text: "Kampala, Uganda", cls: "term-output" },
  ];

  const body = document.getElementById("terminalBody");
  let lineIdx = 0, charIdx = 0;

  function type() {
    if (lineIdx >= lines.length) return;
    const line = lines[lineIdx];

    // Remove any existing cursor
    const existingCursor = body.querySelector(".active-line");
    if (!existingCursor) {
      const el = document.createElement("div");
      el.className = line.cls + " active-line";
      body.appendChild(el);
    }

    const activeLine = body.querySelector(".active-line");
    activeLine.innerHTML = line.text.substring(0, charIdx) + '<span class="cursor">▋</span>';

    if (charIdx < line.text.length) {
      charIdx++;
      setTimeout(type, line.cls === "term-cmd" ? 60 : 30);
    } else {
      // Finish this line
      activeLine.textContent = line.text;
      activeLine.classList.remove("active-line");
      lineIdx++;
      charIdx = 0;
      setTimeout(type, 400);
    }
  }

  setTimeout(type, 600);
})();

// ===== NAV DOTS =====
(function initNav() {
  const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
  const rail = document.getElementById("navRail");

  sections.forEach(id => {
    const btn = document.createElement("button");
    btn.className = "nav-dot";
    btn.dataset.section = id;
    btn.title = id.charAt(0).toUpperCase() + id.slice(1);
    btn.innerHTML = '<span class="nav-dot-inner"></span>';
    btn.addEventListener("click", () => {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    });
    rail.appendChild(btn);
  });

  function updateActive() {
    let current = "hero";
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.getBoundingClientRect().top < window.innerHeight / 2) {
        current = sections[i];
        break;
      }
    }
    rail.querySelectorAll(".nav-dot").forEach(dot => {
      dot.classList.toggle("active", dot.dataset.section === current);
    });
  }

  window.addEventListener("scroll", updateActive, { passive: true });
  updateActive();
})();

// ===== FADE-IN ON SCROLL =====
(function initFadeIn() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
    { threshold: 0.1 }
  );
  document.querySelectorAll(".fade-in").forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 0.08 + "s";
    observer.observe(el);
  });
})();

// ===== COUNTER ANIMATION =====
(function initCounters() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || entry.target.dataset.done) return;
      entry.target.dataset.done = "1";

      const target = parseInt(entry.target.dataset.target);
      const suffix = entry.target.dataset.suffix;
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 40));

      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        entry.target.textContent = current + suffix;
      }, 30);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll(".stat-number").forEach(el => observer.observe(el));
})();

// ===== RENDER SKILLS =====
(function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  SKILLS_DATA.forEach(group => {
    const div = document.createElement("div");
    div.className = "fade-in";
    div.innerHTML = `
      <div class="skill-group">
        <div class="skill-category">${group.category}</div>
        <div class="skill-tags">
          ${group.items.map(item => `<span class="skill-tag">${item}</span>`).join("")}
        </div>
      </div>
    `;
    grid.appendChild(div);
  });

  // Re-observe new fade-in elements
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
    { threshold: 0.1 }
  );
  grid.querySelectorAll(".fade-in").forEach((el, i) => {
    el.style.transitionDelay = i * 0.08 + "s";
    observer.observe(el);
  });
})();

// ===== RENDER PROJECTS =====
(function renderProjects() {
  const list = document.getElementById("projectsList");
  PROJECTS_DATA.forEach((p, idx) => {
    const wrapper = document.createElement("div");
    wrapper.className = "fade-in";
    wrapper.style.transitionDelay = idx * 0.12 + "s";

    const linksHTML = [
      p.github ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link">GitHub ↗</a>` : "",
      p.link ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer" class="project-link-accent">Live Demo ↗</a>` : "",
    ].join("");

    wrapper.innerHTML = `
      <div class="project-card">
        <div class="project-header">
          <div>
            <div class="project-period">${p.period}${p.status ? ` <span class="project-status-badge">${p.status}</span>` : ""}</div>
            <h3 class="project-title">${p.title}</h3>
            <div class="project-subtitle">${p.subtitle}</div>
          </div>
          <div class="project-links">${linksHTML}</div>
        </div>
        <p class="project-desc">${p.description}</p>
        <div class="project-highlights">
          ${p.highlights.map(h => `<div class="highlight"><span class="highlight-dot">▸</span> ${h}</div>`).join("")}
        </div>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
        </div>
      </div>
    `;
    list.appendChild(wrapper);
  });

  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
    { threshold: 0.1 }
  );
  list.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
})();

// ===== RENDER TIMELINE =====
(function renderTimeline() {
  const tl = document.getElementById("timeline");
  EXPERIENCE_DATA.forEach((exp, i) => {
    const wrapper = document.createElement("div");
    wrapper.className = "fade-in";
    wrapper.style.transitionDelay = i * 0.15 + "s";
    wrapper.innerHTML = `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div>
          <div class="timeline-period">${exp.period}</div>
          <h3 class="timeline-role">${exp.role}</h3>
          <div class="timeline-org">${exp.org}</div>
          <div class="timeline-location">${exp.location}</div>
        </div>
      </div>
    `;
    tl.appendChild(wrapper);
  });

  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
    { threshold: 0.1 }
  );
  tl.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
})();
