const tl = gsap.timeline({
    scrollTrigger: {
      // markers: true,
      trigger: "#page1 .section_1 h1",
      scroller: "body",
      start: "top 15%",
      end: "top 0%",
      scrub: 3
    }
  });
  
  tl.to("#page1 .section_1 h1:nth-child(1)", { x: -100 }, "anim");
  tl.to("#page1 .section_1 h1:nth-child(2)", { x: 100 }, "anim");
  // Assuming there is a video element within the section, adjust the selector accordingly
  // tl.to("#page1 .section_1 video", { width: "100%" }, "anim");
  tl.to("body", {
    backgroundColor: "#fdfaff",
    scrollTrigger: {
      // markers: true,
      trigger: "#page2",
      scroller: "body",
      start: "top 550px",
      end: "top 650px"
    }
  });
  tl.to("#page2 h1, #page2 h3", { color: "#0e0c0c" });
  