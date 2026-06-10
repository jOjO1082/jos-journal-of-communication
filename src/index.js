// Get current page filename
function getCurrentPage() {
  const path = window.location.pathname;
  const filename = path.split("/").pop() || "index.html";
  return filename;
}

// Set active navigation link
function setActiveNavLink() {
  const currentPage = getCurrentPage();
  const navLinks = document.querySelectorAll(".nav-links > ul > a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const linkPage = href.split("/").pop();

    // Remove active styling from all links
    link.classList.remove("bg-unijos-gold", "text-unijos-blue");
    link.classList.add("hover:text-slate-100", "text-slate-100");

    // Add active styling to current page link
    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html")
    ) {
      link.classList.add("bg-unijos-gold", "text-unijos-blue");
      link.classList.remove("hover:text-slate-100", "text-slate-100");
    }
  });
}

// Show/hide dropdown on hover
document.addEventListener("DOMContentLoaded", function () {
  // Set active link
  setActiveNavLink();

  document.querySelectorAll(".nav-links ul > div").forEach((menu) => {
    const dropdown = menu.querySelector("ul");

    if (dropdown) {
      menu.addEventListener("mouseenter", () => {
        dropdown.classList.remove("hidden");
        dropdown.classList.add("flex");
      });

      menu.addEventListener("mouseleave", () => {
        dropdown.classList.add("hidden");
        dropdown.classList.remove("flex");
      });
    }
  });

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const firstName = document.getElementById("first-name").value.trim();
      const lastName = document.getElementById("last-name").value.trim();
      const emailAddress = document
        .getElementById("email-address")
        .value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();
      const consent = document.getElementById("consent").checked;

      if (
        !firstName ||
        !lastName ||
        !emailAddress ||
        !subject ||
        !message ||
        !consent
      ) {
        alert(
          "Please complete all required fields and agree to the privacy policy.",
        );
        return;
      }

      const mailtoEmail = "jjmcs@unijos.edu.ng";
      const mailtoSubject = encodeURIComponent(subject);
      const mailtoBody = encodeURIComponent(
        `Name: ${firstName} ${lastName}\nEmail: ${emailAddress}\n\nMessage:\n${message}`,
      );

      window.location.href = `mailto:${mailtoEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
    });
  }

  const archiveSearch = document.getElementById("archive-search");
  const archiveYearButtonsContainer = document.getElementById(
    "archive-year-buttons",
  );
  const archiveCardsContainer = document.getElementById("archive-cards");
  const archiveResults = document.getElementById("archive-results");
  const archiveEmpty = document.getElementById("archive-empty");

  const archiveData = [
    {
      title:
        "Algorithmic News Curation and Filter Bubbles: A Longitudinal Study of Social Media Platforms",
      authors: "Dr. Emily Watson, Prof. Michael Chang, Dr. Lisa Anderson",
      category: "Research Article",
      tags: ["Research", "Digital Media"],
      year: "2026",
      publishedDate: "April 12, 2026",
      pdfUrl: "#",
    },
    {
      title: "Ethics in Nigerian Mass Media",
      authors: "Chinwe Okafor",
      category: "Journal Article",
      tags: ["Ethics", "Publishing", "Journalism"],
      year: "2025",
      publishedDate: "June 14, 2025",
      pdfUrl: "#",
    },
    {
      title: "Media Literacy and Information Access",
      authors: "Fatima Yusuf, Emeka Nwosu",
      category: "Research Article",
      tags: ["Literacy", "Information", "Education", "Media"],
      year: "2024",
      publishedDate: "March 21, 2024",
      pdfUrl: "#",
    },
    {
      title: "Public Health Messaging During Election Campaigns",
      authors: "Dr. Aminu Bello, Prof. Grace Nwosu",
      category: "Research Article",
      tags: ["Health", "Politics", "Communication"],
      year: "2023",
      publishedDate: "November 9, 2023",
      pdfUrl: "#",
    },
    {
      title: "Visual Storytelling and Digital Journalism",
      authors: "Ebere Okeke, Zara Ahmed",
      category: "Feature Article",
      tags: ["Visual Media", "Journalism"],
      year: "2022",
      publishedDate: "August 5, 2022",
      pdfUrl: "#",
    },
    {
      title: "Investigating Youth Engagement with Social Media News",
      authors: "Samuel Adeyemi",
      category: "Research Article",
      tags: ["Youth", "Social Media", "Engagement"],
      year: "2021",
      publishedDate: "May 18, 2021",
      pdfUrl: "#",
    },
    {
      title: "The Role of Media in Crisis Communication",
      authors: "Dr. Aisha Suleiman, Joseph Madu",
      category: "Journal Article",
      tags: ["Crisis", "Communication"],
      year: "2020",
      publishedDate: "January 29, 2020",
      pdfUrl: "#",
    },
    {
      title: "Gender Representation in Nigerian Broadcast News",
      authors: "Rita Chukwu",
      category: "Research Article",
      tags: ["Gender", "Broadcast", "Media"],
      year: "2019",
      publishedDate: "September 2, 2019",
      pdfUrl: "#",
    },
    {
      title: "Digital Activism and Online Mobilisation",
      authors: "Dr. Olufemi Adebayo",
      category: "Research Article",
      tags: ["Activism", "Digital", "Social Change"],
      year: "2018",
      publishedDate: "November 21, 2018",
      pdfUrl: "#",
    },
    {
      title: "Rural Communication Strategies for Agricultural Extension",
      authors: "Hajara Usman, Prof. Ahmed Sule",
      category: "Feature Article",
      tags: ["Agriculture", "Rural", "Communication"],
      year: "2026",
      publishedDate: "February 4, 2026",
      pdfUrl: "#",
    },
    {
      title: "Evaluating Press Freedom in West African Democracies",
      authors: "Ola Johnson",
      category: "Research Article",
      tags: ["Press Freedom", "Politics"],
      year: "2025",
      publishedDate: "October 12, 2025",
      pdfUrl: "#",
    },
    {
      title: "Audience Trust and News Credibility in the Digital Age",
      authors: "Ngozi Eze, Musa Kareem",
      category: "Journal Article",
      tags: ["Trust", "Credibility", "News"],
      year: "2024",
      publishedDate: "July 7, 2024",
      pdfUrl: "#",
    },
    {
      title: "Sustainable Media Practices and Environmental Reporting",
      authors: "Dr. Tunde Alimi",
      category: "Research Article",
      tags: ["Sustainability", "Environment", "Media"],
      year: "2023",
      publishedDate: "April 25, 2023",
      pdfUrl: "#",
    },
    {
      title: "Podcasting Trends in Academic Communication",
      authors: "Amina Bello",
      category: "Feature Article",
      tags: ["Podcast", "Media", "Education"],
      year: "2022",
      publishedDate: "December 9, 2022",
      pdfUrl: "#",
    },
    {
      title: "Comparing Traditional and Digital News Consumption",
      authors: "Dr. Kehinde Ojo, Laila Mohammed",
      category: "Research Article",
      tags: ["News", "Digital", "Consumer Behaviour"],
      year: "2021",
      publishedDate: "March 13, 2021",
      pdfUrl: "#",
    },
    {
      title: "Editorial Standards for Open Access Journals",
      authors: "Prof. Chima Nwafor",
      category: "Journal Article",
      tags: ["Editorial", "Open Access", "Publishing"],
      year: "2020",
      publishedDate: "June 30, 2020",
      pdfUrl: "#",
    },
    {
      title: "Mobile News Apps and Breaking Story Delivery",
      authors: "Olawale Taiwo",
      category: "Feature Article",
      tags: ["Mobile", "News", "Apps"],
      year: "2019",
      publishedDate: "February 10, 2019",
      pdfUrl: "#",
    },
    {
      title: "The Impact of Media Policy on Press Practices",
      authors: "Dr. Amina Yusuf",
      category: "Research Article",
      tags: ["Policy", "Press", "Media"],
      year: "2018",
      publishedDate: "May 19, 2018",
      pdfUrl: "#",
    },
    {
      title: "Women and Media Representation in West African Newsrooms",
      authors: "Saida Bello, Oluwaseun Adeoye",
      category: "Feature Article",
      tags: ["Gender", "Representation", "Newsrooms"],
      year: "2024",
      publishedDate: "May 22, 2024",
      pdfUrl: "#",
    },
    {
      title: "Information Disorder and Fact-Checking Methods",
      authors: "Jide Adetunji",
      category: "Research Article",
      tags: ["Misinformation", "Fact-checking", "Media"],
      year: "2024",
      publishedDate: "September 30, 2024",
      pdfUrl: "#",
    },
  ];

  const renderArchiveCards = () => {
    archiveCardsContainer.innerHTML = archiveData
      .map((item) => {
        const tagsHtml = item.tags
          .slice(0, 4)
          .map(
            (tag) =>
              `<span class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] text-slate-700">${tag}</span>`,
          )
          .join("");

        return `
          <article
            class=" w-full h-auto archive-card rounded border border-slate-200 bg-white p-6"
            data-title="${item.title}"
            data-authors="${item.authors}"
            data-tags="${item.tags.join(",")}"
            data-year="${item.year}"
          >
            <div class="flex items-start gap-4">
              <div class="rounded bg-slate-100 p-3 text-unijos-blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-text"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" /><path d="M9 12h6" /><path d="M9 16h6" /></svg>
              </div>
              <div class="min-w-0">
                <p class="text-xs uppercase tracking-[0.2em] font-semibold text-unijos-green">
                  ${item.category}
                </p>
                <h3 class="mt-1 text-lg font-serif font-semibold text-slate-900">
                  ${item.title}
                </h3>
              </div>
            </div>
            <p class="mt-4 text-sm text-slate-600">${item.authors}</p>
            <div class="mt-4 flex flex-wrap gap-2">${tagsHtml}</div>
            <div class="mt-6 flex items-center justify-between gap-4 text-sm text-slate-500">
              <span>${item.publishedDate}</span>
              <a
                href="${item.pdfUrl}"
                class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-unijos-blue transition hover:bg-slate-50"
              >
                <span>PDF</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-download"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 16a1 1 0 0 1 1 1v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2a1 1 0 0 1 2 0v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-2a1 1 0 0 1 1 -1m-8 -13a1 1 0 0 1 1 1v9.585l3.293 -3.292a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1 -.09 .08l.09 -.08a1 1 0 0 1 -.674 .292l-.033 .001h-.032l-.054 -.004l.086 .004a1 1 0 0 1 -.617 -.213a1 1 0 0 1 -.09 -.08l-5 -5a1 1 0 0 1 1.414 -1.414l3.293 3.292v-9.585a1 1 0 0 1 1 -1" /></svg>
              </a>
            </div>
          </article>
        `;
      })
      .join("");
  };

  if (
    archiveSearch &&
    archiveYearButtonsContainer &&
    archiveCardsContainer &&
    archiveData.length > 0
  ) {
    renderArchiveCards();
    const getArchiveCards = () =>
      archiveCardsContainer.querySelectorAll(".archive-card");

    const yearOptions = [
      "all",
      "2026",
      "2025",
      "2024",
      "2023",
      "2022",
      "2021",
      "2020",
      "2019",
      "2018",
    ];

    const renderYearButtons = () => {
      yearOptions.forEach((year) => {
        const button = document.createElement("button");
        button.type = "button";
        button.dataset.year = year;
        button.textContent = year === "all" ? "All Years" : year;
        const activeClasses = [
          "bg-unijos-blue",
          "text-white",
          "border-transparent",
        ];
        const inactiveClasses = [
          "bg-white",
          "text-slate-700",
          "border-slate-300",
        ];

        button.className =
          "archive-year-button rounded-full border px-4 py-2 text-sm font-semibold transition duration-200 hover:border-unijos-green hover:text-unijos-blue ";
        button.classList.add(
          ...(year === "all" ? activeClasses : inactiveClasses),
        );

        button.addEventListener("click", () => {
          archiveYearButtonsContainer
            .querySelectorAll("button")
            .forEach((btn) => {
              btn.classList.remove(
                "bg-unijos-blue",
                "text-white",
                "border-transparent",
              );
              btn.classList.add(
                "bg-white",
                "text-slate-700",
                "border-slate-300",
              );
            });
          button.classList.remove(
            "bg-white",
            "text-slate-700",
            "border-slate-300",
          );
          button.classList.add(
            "bg-unijos-blue",
            "text-white",
            "border-transparent",
          );
          applyArchiveFilter();
        });

        archiveYearButtonsContainer.appendChild(button);
      });
    };

    const updateArchiveResults = () => {
      const archiveCards = getArchiveCards();
      const visibleCount = Array.from(archiveCards).filter(
        (card) => !card.classList.contains("hidden"),
      ).length;
      archiveResults.textContent =
        visibleCount === archiveCards.length
          ? "Showing all documents"
          : `${visibleCount} document${visibleCount === 1 ? "" : "s"} found`;
      archiveEmpty.classList.toggle("hidden", visibleCount > 0);
    };

    const getSelectedYear = () => {
      const selectedButton = archiveYearButtonsContainer.querySelector(
        "button.bg-unijos-blue",
      );
      return selectedButton ? selectedButton.dataset.year : "all";
    };

    const applyArchiveFilter = () => {
      const searchValue = archiveSearch.value.trim().toLowerCase();
      const selectedYear = getSelectedYear();
      const archiveCards = getArchiveCards();

      archiveCards.forEach((card) => {
        const title = card.dataset.title.toLowerCase();
        const authors = card.dataset.authors.toLowerCase();
        const tags = card.dataset.tags.toLowerCase();
        const year = card.dataset.year;

        const matchesSearch =
          !searchValue ||
          title.includes(searchValue) ||
          authors.includes(searchValue) ||
          tags.includes(searchValue);

        const matchesYear = selectedYear === "all" || year === selectedYear;

        card.classList.toggle("hidden", !(matchesSearch && matchesYear));
      });

      updateArchiveResults();
    };

    renderYearButtons();
    archiveSearch.addEventListener("input", applyArchiveFilter);
    applyArchiveFilter();
  }
});
