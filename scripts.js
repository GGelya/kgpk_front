document.addEventListener("DOMContentLoaded", function () {
  const hyperNavMobile = document.getElementById("hyperNavMobile");
  const sections = document.querySelectorAll(".section_mobile");
  const sectionsContent = document.querySelectorAll(".section__content_mobile");

  // Mobile

  document.querySelectorAll(".navMenuMobile__btn a").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = item
        .getAttribute("id")
        .replace("hyperMenuMobileBtn_", "");
      toggleHyperMenuMobile(targetId);
    });
  });

  function resetMobileContent() {
    const mobileSections = document.querySelectorAll(".mobileContent");
    mobileSections.forEach((section) => {
      section.classList.remove("active");
      section.classList.add("hidden");
    });
  }

  function resetSections() {
    sections.forEach((section) => {
      section.classList.remove("opacity-25");
      const decoArrow = section.querySelector(".decoArrow");
      if (decoArrow) {
        decoArrow.classList.remove("rotate-90");
      }
    });
    sectionsContent.forEach((content) => {
      content.classList.add("hidden");
    });
  }

  function setInactiveSectionsOpacity(exceptId) {
    sections.forEach((section) => {
      if (section.id !== exceptId) {
        section.classList.add("opacity-25");
      }
    });
  }

  sections.forEach((section) => {
    section.addEventListener("click", function () {
      const contentId = section.id;
      const content = document.querySelector(
        `.section__content_mobile-${contentId}`,
      );

      if (!content) {
        console.error(`Content not found for section ID: ${contentId}`);
        return;
      }

      const decoArrow = section.querySelector(".decoArrow");

      if (!content.classList.contains("hidden")) {
        content.classList.add("hidden");
        resetSections();
        decoArrow.classList.remove("rotate-90");
      } else {
        resetSections();
        content.classList.remove("hidden");
        setInactiveSectionsOpacity(contentId);
        decoArrow.classList.add("rotate-90");
      }
    });
  });

  document
    .getElementById("hyperMenuBtn__close")
    .addEventListener("click", function () {
      resetMobileContent();
      hyperNavMobile.classList.remove("translate-y-0");
      hyperNavMobile.classList.add("translate-y-[-100%]");
      document.body.classList.remove("overflow-hidden");
      document.getElementById("navMobile").classList.remove("hidden");
      document.getElementById("bgMobile-navMobile").classList.remove("hidden");
    });

  document
    .getElementById("hyperMenuBtn")
    .addEventListener("click", function () {
      hyperNavMobile.classList.add("translate-y-0");
      hyperNavMobile.classList.remove("translate-y-[-100%]");
      document.body.classList.add("overflow-hidden");
    });

  function toggleHyperMenuMobile(targetId) {
    resetSections();

    const navMobile = document.getElementById("navMobile");
    const bgMobileNavMobile = document.getElementById("bgMobile-navMobile");
    const btnToBackId = `btnToBack_${targetId}`;

    navMobile.classList.add("hidden");
    const targetContent = document.getElementById(`mobileContent_${targetId}`);
    targetContent.classList.remove("hidden");
    targetContent.classList.add("active");

    bgMobileNavMobile.classList.add("hidden");
    const bgMobileContent = document.getElementById(`bgMobile-${targetId}`);
    bgMobileContent.classList.remove("hidden");

    const btnToBack = document.getElementById(btnToBackId);
    if (!btnToBack.getAttribute("listener")) {
      btnToBack.addEventListener("click", function () {
        targetContent.classList.add("hidden");
        navMobile.classList.remove("hidden");

        bgMobileContent.classList.add("hidden");
        bgMobileNavMobile.classList.remove("hidden");

        targetContent.classList.remove("active");
      });
    }
  }

  // Version for the visually impaired

  let styleMode = localStorage.getItem("styleMode");
  let colorTheme = localStorage.getItem("colorTheme") || "ver1";
  let trakingMode = localStorage.getItem("trakingMode") || "tracking-[0px]";
  let fontSizeMode = localStorage.getItem("fontSizeMode") || "lv1";

  const visionImpairedBtn = document.getElementById("visionImpairedBtn");
  const deco = document.querySelectorAll(".deco");
  const bgPageImage = document.querySelector(".bgPageImage");
  const visionImpairedPanel = document.getElementById("visionImpairedPanel");
  const logo = document.querySelectorAll(".logoKGPK");

  const logoFileNames = {
    ver1: "kg-logo(black).png",
    ver2: "kg-logo.png",
  };

  function updateBreakAllClass() {
    const fontSizeMode = localStorage.getItem("fontSizeMode") || "lv1";
    const trackingMode =
      localStorage.getItem("trakingMode") || "tracking-[0px]";

    const shouldBreakAll =
      (fontSizeMode === "lv1" ||
        fontSizeMode === "lv2" ||
        fontSizeMode === "lv3") &&
      (trackingMode === "tracking-[2px]" || trackingMode === "tracking-[4px]");

    if (shouldBreakAll) {
      if (!document.body.classList.contains("break-all")) {
        document.body.classList.add("break-all");
      }
    } else {
      if (document.body.classList.contains("break-all")) {
        document.body.classList.remove("break-all");
      }
    }
  }

  const changeColorThemeVer1 = document.getElementById(
    "visImp_changeColorTheme_ver1",
  );
  const changeColorThemeVer2 = document.getElementById(
    "visImp_changeColorTheme_ver2",
  );
  const changeColorThemeVer3 = document.getElementById(
    "visImp_changeColorTheme_ver3",
  );

  function checkColorTheme(theme) {
    const color = theme === "ver1"? "black" : "white";
  const logoSrc = `/src/img/${logoFileNames[theme]}`;


    document.querySelectorAll("svg").forEach((icons) => {
      icons.setAttribute("stroke", color);
    });

    document
      .querySelectorAll(".iconLink path, .decoArrow path")
      .forEach((path) => {
        path.setAttribute("fill", color);
      });

    logo.forEach((logos) => {
      logos.setAttribute("src", logoSrc);
    });
  }

  function updateButtonColorThemeStyles(activeTheme) {
    document
      .querySelectorAll(".visImp_changeColorTheme button")
      .forEach((button) => {
        button.classList.add("outline-1");
      });

    switch (activeTheme) {
      case "ver1":
        changeColorThemeVer1.classList.remove("outline-1");
        break;
      case "ver2":
        changeColorThemeVer2.classList.remove("outline-1");
        break;
      case "ver3":
        changeColorThemeVer3.classList.remove("outline-1");
        break;
    }
  }

  function applyColorTheme(theme) {
    document.body.classList.remove("ver1", "ver2", "ver3");
    document.body.classList.add(theme);
    localStorage.setItem("colorTheme", theme);
    checkColorTheme(theme);
    updateButtonColorThemeStyles(theme);
  }

  changeColorThemeVer1.addEventListener("click", () => {
    applyColorTheme("ver1");
  });

  changeColorThemeVer2.addEventListener("click", () => {
    applyColorTheme("ver2");
  });

  changeColorThemeVer3.addEventListener("click", () => {
    applyColorTheme("ver3");
  });

  const changeTrackingTrak1 = document.getElementById(
    "visImp_changeTraking_trak1",
  );
  const changeTrackingTrak2 = document.getElementById(
    "visImp_changeTraking_trak2",
  );
  const changeTrackingTrak3 = document.getElementById(
    "visImp_changeTraking_trak3",
  );

  function updateTrackingButtonStyles(activeTracking) {
    document
      .querySelectorAll(".visImp_changeTraking button")
      .forEach((button) => {
        button.classList.add("outline-1");
      });

    switch (activeTracking) {
      case "tracking-[0px]":
        changeTrackingTrak1.classList.remove("outline-1");
        break;
      case "tracking-[2px]":
        changeTrackingTrak2.classList.remove("outline-1");
        break;
      case "tracking-[4px]":
        changeTrackingTrak3.classList.remove("outline-1");
        break;
    }
  }

  function applyTracking(tracking) {
    document.body.classList.remove(
      "tracking-[0px]",
      "tracking-[2px]",
      "tracking-[4px]",
    );
    document.body.classList.add(tracking);
    localStorage.setItem("trakingMode", tracking);
    updateTrackingButtonStyles(tracking);
    updateBreakAllClass();
  }

  changeTrackingTrak1.addEventListener("click", () => {
    applyTracking("tracking-[0px]");
  });

  changeTrackingTrak2.addEventListener("click", () => {
    applyTracking("tracking-[2px]");
  });

  changeTrackingTrak3.addEventListener("click", () => {
    applyTracking("tracking-[4px]");
  });

  // fontsize

  const changeFontSize1 = document.getElementById("visImp_changeFontsize_lv1");
  const changeFontSize2 = document.getElementById("visImp_changeFontsize_lv2");
  const changeFontSize3 = document.getElementById("visImp_changeFontsize_lv3");

  function updateFontSizeButtonStyles(activeFontSize) {
    document
      .querySelectorAll(".visImp_changeFontsize button")
      .forEach((button) => {
        button.classList.add("outline-1");
      });

    switch (activeFontSize) {
      case "lv1":
        changeFontSize1.classList.remove("outline-1");
        break;
      case "lv2":
        changeFontSize2.classList.remove("outline-1");
        break;
      case "lv3":
        changeFontSize3.classList.remove("outline-1");
        break;
    }
  }

  function applyFontSize(fontSize) {
    document.body.classList.remove("lv1", "lv2", "lv3");
    document.body.classList.add(fontSize);
    localStorage.setItem("fontSizeMode", fontSize);
    updateFontSizeButtonStyles(fontSize);
    updateBreakAllClass();
  }

  changeFontSize1.addEventListener("click", () => {
    applyFontSize("lv1");
  });

  changeFontSize2.addEventListener("click", () => {
    applyFontSize("lv2");
  });

  changeFontSize3.addEventListener("click", () => {
    applyFontSize("lv3");
  });

  // enable

  function enableVisionImpairedTheme() {
    document.body.classList.add("visionImpairedTheme");

    visionImpairedPanel.classList.remove("hidden");

    applyColorTheme(colorTheme);
    applyTracking(trakingMode);
    applyFontSize(fontSizeMode);
    updateBreakAllClass();

    if (deco.length > 0) {
      deco.forEach((decoItem) => {
        decoItem.classList.add("hidden");
      });
    }

    if (bgPageImage) {
      bgPageImage.classList.add("hidden");
    }

    document.querySelectorAll(".visionImpairedEnable").forEach((element) => {
      element.classList.add("hidden");
    });

    document.querySelectorAll(".visionImpairedDisable").forEach((element) => {
      element.classList.remove("hidden");
    });

    document.querySelectorAll(".outlineElement").forEach((element) => {
      element.classList.add("outline", "outline-element_color");
    });

    localStorage.setItem("styleMode", "visionImpaired");
  }

  // disable

  const originalIconColors = new Map();
  document.querySelectorAll("svg").forEach((icon) => {
    originalIconColors.set(icon, icon.getAttribute("stroke") || "white");
  });
  document
    .querySelectorAll(".iconLink path, .decoArrow path")
    .forEach((path) => {
      originalIconColors.set(path, path.getAttribute("fill") || "white");
    });

  function disableVisionImpairedTheme() {
    document.body.classList.remove(
      "visionImpairedTheme",
      "ver1",
      "ver2",
      "ver3",
      "lv1",
      "lv2",
      "lv3",
      "tracking-[0px]",
      "tracking-[2px]",
      "tracking-[4px]",
      "break-all",
    );

    visionImpairedPanel.classList.add("hidden");

    if (deco.length > 0) {
      deco.forEach((decoItem) => {
        decoItem.classList.remove("hidden");
      });
    }

    if (bgPageImage) {
      bgPageImage.classList.remove("hidden");
    }

    document.querySelectorAll(".visionImpairedEnable").forEach((element) => {
      element.classList.remove("hidden");
    });

    document.querySelectorAll(".visionImpairedDisable").forEach((element) => {
      element.classList.add("hidden");
    });

    document.querySelectorAll(".outlineElement").forEach((element) => {
      element.classList.remove("outline", "outline-element_color");
    });

    logo.forEach((logos) => {
      logos.setAttribute("src", `/src/img/${logoFileNames["ver2"]}`);
    });

    document.querySelectorAll("svg").forEach((icon) => {
      icon.setAttribute("stroke", originalIconColors.get(icon) || "black");
    });

    document
      .querySelectorAll(".iconLink path, .decoArrow path")
      .forEach((path) => {
        path.setAttribute("fill", originalIconColors.get(path) || "black");
      });

    document
      .querySelectorAll(".visImp_changeColorTheme button")
      .forEach((button) => {
        button.classList.add("outline-1");
      });

    localStorage.setItem("styleMode", null);
  }

  visionImpairedBtn.addEventListener("click", () => {
    styleMode = localStorage.getItem("styleMode");
    if (styleMode !== "visionImpaired") {
      enableVisionImpairedTheme();
    } else {
      disableVisionImpairedTheme();
    }
  });

  if (styleMode === "visionImpaired") {
    enableVisionImpairedTheme();
  }

  // Search panel

  const searchBarBtn = document.getElementById("searchBarBtn");
  const searchBarPanel = document.getElementById("searchBarPanel");
  const searchBarPanelClose = document.getElementById("searchBarPanelClose");

  searchBarBtn.addEventListener("click", () => {
    searchBarPanel.classList.remove("translate-y-[-100%]");
    searchBarPanel.classList.add("translate-y-0");
  });

  searchBarPanelClose.addEventListener("click", () => {
    searchBarPanel.classList.remove("translate-y-0");
    searchBarPanel.classList.add("translate-y-[-100%]");
  });

  document.addEventListener("click", (e) => {
    if (
      !searchBarPanel.contains(e.target) &&
      !e.target.closest("#searchBarBtn")
    ) {
      searchBarPanel.classList.remove("translate-y-0");
      searchBarPanel.classList.add("translate-y-[-100%]");
    }
  });

  // Button active

  const moreInfo_btn = document.getElementById("moreInfo_btn");
  const moreInfo_dropdown = document.getElementById("moreInfo_dropdown");

  if (moreInfo_btn && moreInfo_dropdown) {
    moreInfo_btn.addEventListener("click", () => {
      moreInfo_dropdown.classList.toggle("hidden");
    });
  }

  // infoAboutEduOrg navigation 

  const infoAboutEduOrgBtn = document.getElementById("infoAboutEduOrgBtn");
  const infoAboutEduOrgMenu = document.getElementById("infoAboutEduOrgMenu");

  if (infoAboutEduOrgBtn){
    infoAboutEduOrgBtn.addEventListener("click", () => {
      infoAboutEduOrgMenu.classList.toggle("sm:hidden");
      infoAboutEduOrgMenu.classList.toggle("bg-basic_color_table_body");
      infoAboutEduOrgMenu.classList.toggle("p-4");
      infoAboutEduOrgBtn.classList.toggle("drop-shadow-md");
      infoAboutEduOrgBtn.querySelector(".decoArrow").classList.toggle("rotate-90");
    });
  }

  // swipers 

  function initSwiper(selector, options) {
    if (document.querySelector(selector)) {
      return new Swiper(selector, options);
    }
    return null;
  }

  var swiperInfoAboutEduOrg = initSwiper(".swiper_infoAboutEduOrg", {
    slidesPerView: "auto",
    spaceBetween: 40,
    centeredSlides: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    keyboard: {
      enabled: true,
    },
    on: {
      init: function () {
        this.slides.forEach((slide, index) => {
          if (index !== this.activeIndex) {
            slide.classList.add("opacity-25", "pointer-events-none");
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide, index) => {
          if (index === this.activeIndex) {
            slide.classList.remove("opacity-25", "pointer-events-none");
          } else {
            slide.classList.add("opacity-25", "pointer-events-none");
          }
        });
      },
    },
  });

  var swiper = initSwiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
});
