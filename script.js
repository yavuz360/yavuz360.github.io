let currentLanguage = "tr";

const translations = {
  subtitleTop: {
    tr: "Bu web sitesi şu sürede ölecek:",
    en: "This website will die in:",
    de: "Diese Webseite stirbt in:",
  },
  subtitleBottom: {
    tr: "Çünkü bu domaini sadece bir yıl için aldım (şimdilik)",
    en: "Because I paid only for one year (for now)",
    de: "Weil ich nur für ein Jahr bezahlt habe (vorerst)",
  },
  cryptoLabel: {
    tr: "Kripto Para Adresi:",
    en: "Cryptocurrency Address:",
    de: "Kryptowährungsadresse:",
  },
  copyButton: {
    tr: "Kopyala",
    en: "Copy",
    de: "Kopieren",
  },
  copiedAlert: {
    tr: "Kopyalandı!",
    en: "Copied!",
    de: "Kopiert!",
  },
  bottomText: {
    tr: "Bu web sitesi 1 Aralık 2024'te doğdu.",
    en: "This website was born on Dec 1, 2024.",
    de: "Diese Webseite wurde am 1. Dez. 2024 geboren.",
  },
  emailText: {
    tr: "Bana bir e-posta gönder",
    en: "Send me an email",
    de: "Schick mir eine E-Mail",
  },
};

function updateCountdown(language) {
  const endDate = new Date("December 1, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const timeLeft = endDate - now;

  const shortings = {
    tr: { day: "g", hour: "s", minute: "d", second: "sn" },
    en: { day: "d", hour: "h", minute: "m", second: "s" },
    de: { day: "t", hour: "s", minute: "m", second: "sek" },
  };

  const currentShortings = shortings[language];

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").textContent =
      `${days}${currentShortings.day} ${hours}${currentShortings.hour} ${minutes}${currentShortings.minute} ${seconds}${currentShortings.second}`;
  } else {
    document.getElementById("countdown").textContent =
      language === "tr" ? "Süre doldu" : language === "de" ? "Abgelaufen" : "Expired";
  }
}

function updateTranslations() {
  document.getElementById("subtitle-top").textContent = translations.subtitleTop[currentLanguage];
  document.getElementById("subtitle-bottom").textContent = translations.subtitleBottom[currentLanguage];
  document.getElementById("crypto-label").textContent = translations.cryptoLabel[currentLanguage];
  document.getElementById("copy-btn").textContent = translations.copyButton[currentLanguage];
  document.getElementById("bottom-text").textContent = translations.bottomText[currentLanguage];
  document.getElementById("email-btn").textContent = translations.emailText[currentLanguage];
}

document.getElementById("copy-btn").addEventListener("click", () => {
  const cryptoAddress = document.getElementById("crypto-address").textContent;
  navigator.clipboard.writeText(cryptoAddress).then(() => {
    alert(translations.copiedAlert[currentLanguage]);
  });
});

document.getElementById("btn-turkish").addEventListener("click", () => {
  currentLanguage = "tr";
  updateTranslations();
});

document.getElementById("btn-english").addEventListener("click", () => {
  currentLanguage = "en";
  updateTranslations();
});

document.getElementById("btn-german").addEventListener("click", () => {
  currentLanguage = "de";
  updateTranslations();
});

setInterval(() => updateCountdown(currentLanguage), 1000);
updateCountdown(currentLanguage);
updateTranslations();

const minecraftItems = [
  "https://static.wikia.nocookie.net/minecraft/images/3/30/LapisLazuliBlockNew.png/revision/latest?cb=20190907233252",
  "https://static.wikia.nocookie.net/minecraft/images/0/01/RedstoneBlockNew.png/revision/latest?cb=20190902230147",
  "https://static.wikia.nocookie.net/minecraft/images/6/6c/BlockOfEmeraldNew.png/revision/latest?cb=20191021231731",
  "https://static.wikia.nocookie.net/minecraft/images/d/df/BlockOfNetherite.png/revision/latest?cb=20200212222333",
  "https://static.wikia.nocookie.net/minecraft/images/9/9d/BlockOfGoldNew.png/revision/latest?cb=20191012230400",
  "https://static.wikia.nocookie.net/minecraft/images/8/89/BlockOfDiamondNew.png/revision/latest?cb=20190908155806",
];

function createFallingItem() {
  const container = document.getElementById("falling-items-container");
  const item = document.createElement("img");
  item.src = minecraftItems[Math.floor(Math.random() * minecraftItems.length)];
  item.className = "falling-item";

  item.style.left = Math.random() * 100 + "vw";

  const duration = Math.random() * 5 + 3;
  item.style.animationDuration = `${duration}s`;

  container.appendChild(item);

  setTimeout(() => {
    container.removeChild(item);
  }, duration * 1000);
}

setInterval(() => {
  createFallingItem();
}, Math.random() * 2000 + 1000);
