
  gsap.from(".telecom-header", { duration: 1.2, opacity: 0, y: -50, ease: "power3.out" });
  gsap.from(".telecom-description p", { duration: 1.5, opacity: 0, y: 30, stagger: 0.2, ease: "power2.out" });
  gsap.from(".telecom-image img", { duration: 1.5, scale: 0.9, opacity: 0, ease: "power2.out" });
  gsap.from(".info-card", { duration: 1, x: 100, opacity: 0, stagger: 0.2, ease: "power2.out" });