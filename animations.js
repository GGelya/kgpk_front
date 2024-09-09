const timeline = gsap.timeline();

// Index

if (
  document.querySelector(".main__title") &&
  document.querySelector(".main__subtitle")
) {
  timeline
    .from(".main__title", {
      x: -100,
      opacity: 0,
      duration: 0.7,
    })
    .from(".main__subtitle", {
      x: 100,
      opacity: 0,
      duration: 1.2,
    });
}

if (document.querySelector(".index_decoLine")) {
  gsap.from(".index_decoLine", {
    scrollTrigger: {
      trigger: "#sectionAbout",
      start: "top center",
    },
    scaleX: 0,
    transformOrigin: "left center",
    duration: 1,
  });
}

if (document.querySelector(".setcionStudentActivities_deco")) {
  gsap.from(".setcionStudentActivities_deco", {
    scrollTrigger: {
      trigger: "#setcionStudentActivities",
      start: "30% center",
    },
    rotation: -360,
    duration: 1,
  });
}

// Base info

if (document.querySelector(".baseInfo_title")) {
  timeline.from(".baseInfo_title", {
    x: -100,
    opacity: 0,
    duration: 1,
  });
}

// Sudents Activity

if (document.querySelector(".studAct_title")) {
  timeline.from(".studAct_title", {
    x: -100,
    opacity: 0,
    duration: 1,
  });
}

if (document.querySelector(".studActivityS1_decoLine")) {
  gsap.from(".studActivityS1_decoLine", {
    scrollTrigger: {
      trigger: "#studActivity__section1",
      start: "top center",
      scrub: true,
    },
    scaleY: 0,
    transformOrigin: "top center",
    duration: 1,
  });
}

if (document.querySelector(".studActS1_block1")) {
  gsap.from(".studActS1_block1", {
    scrollTrigger: {
      trigger: "#studActivity__section1",
      start: "top center",
    },
    transform: 'translateX(-100px)',
    autoAlpha: 0,
    duration: 1,
  });
}

if (document.querySelector(".studActS1_block2")) {
  gsap.from(".studActS1_block2", {
    scrollTrigger: {
      trigger: "#studActivity__section1",
      start: "30% center",
    },
    transform: 'translateX(100px)',
    autoAlpha: 0,
    duration: 1,
  });
}

if (document.querySelector(".studActS1_block3")) {
  gsap.from(".studActS1_block3", {
    scrollTrigger: {
      trigger: "#studActivity__section1",
      start: "50% center",
    },
    transform: 'translateX(-100px)',
    autoAlpha: 0,
    duration: 1,
  });
}
