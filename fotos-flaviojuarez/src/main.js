import "./style.css";

const WA_NUMBER = "5219515840582";
const WA_BASE = `https://wa.me/${WA_NUMBER}`;

// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
menuToggle?.addEventListener("click", () => {
  mobileMenu?.classList.toggle("active");
});
mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// LIGHTBOX
const galleryItems = document.querySelectorAll(".gallery-img-wrapper");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let currentIndex = 0;

const galleryData = [
  { src: "/_DSC02088.webp", alt: "Paisaje natural", label: "Paisaje" },
  { src: "/_DSC0528.webp", alt: "Fauna silvestre", label: "Vida Silvestre" },
  { src: "/_DSC0158.webp", alt: "Bosque místico", label: "Bosque" },
  { src: "/_DSC0602.webp", alt: "Cielo estrellado", label: "Astrofotografía" },
  { src: "/_DSC0256.webp", alt: "Montañas y aventura", label: "Aventura" },
  { src: "/_DSC0041.webp", alt: "Flora silvestre", label: "Flora" },
  { src: "/_DSC0020.webp", alt: "Atardecer dorado", label: "Atardecer" },
  { src: "/srgb.webp", alt: "Retrato en la naturaleza", label: "Retrato Natural" },
  { src: "/_DSC1609.webp", alt: "Conservación ambiental", label: "Conservación" },
];

function openLightbox(index) {
  currentIndex = index;
  const item = galleryData[currentIndex];
  lightboxImg.src = item.src;
  lightboxImg.alt = item.alt;
  lightboxCaption.textContent = item.label;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

function navigateLightbox(direction) {
  currentIndex = (currentIndex + direction + galleryData.length) % galleryData.length;
  const item = galleryData[currentIndex];
  lightboxImg.src = item.src;
  lightboxImg.alt = item.alt;
  lightboxCaption.textContent = item.label;
}

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const index = parseInt(item.dataset.index);
    openLightbox(index);
  });
});

lightboxClose?.addEventListener("click", closeLightbox);
lightboxPrev?.addEventListener("click", () => navigateLightbox(-1));
lightboxNext?.addEventListener("click", () => navigateLightbox(1));
lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox?.classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") navigateLightbox(-1);
  if (e.key === "ArrowRight") navigateLightbox(1);
});

// WHATSAPP FORM
const form = document.getElementById("whatsappForm");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const nombre = data.get("nombre")?.toString().trim();
  const telefono = data.get("telefono")?.toString().trim();
  const servicio = data.get("servicio")?.toString().trim();
  const mensaje = data.get("mensaje")?.toString().trim();

  if (!nombre || !telefono) {
    alert("Por favor completa tu nombre y teléfono.");
    return;
  }

  const text = [
    `Hola Flavio, soy ${nombre}.`,
    `Teléfono: ${telefono}`,
    servicio ? `Me interesa el servicio de ${servicio}.` : "",
    mensaje ? `${mensaje}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  const url = `${WA_BASE}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
});

// FADE-IN ON SCROLL
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

// KEYBOARD SHORTCUT BLOCK
document.addEventListener("keydown", (e) => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
    (e.ctrlKey && ["u", "s", "c"].includes(e.key.toLowerCase()))
  ) {
    e.preventDefault();
    return false;
  }
});
