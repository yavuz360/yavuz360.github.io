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
  bottomText: {
    tr: "GitHub ve Icons8'e teşekkürler",
    en: "Thanks to GitHub and Icons8",
    de: "Danke an GitHub und Icons8",
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
  document.getElementById("bottom-text").textContent = translations.bottomText[currentLanguage];
  document.getElementById("email-btn").textContent = translations.emailText[currentLanguage];
}

document.addEventListener("DOMContentLoaded", () => {
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
});
