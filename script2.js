document.addEventListener("DOMContentLoaded", () => {
  const yearCounter = document.getElementById("year-counter");
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const messageElement = document.getElementById("newyear-message");
  const bottomText = document.getElementById("bottom-text");
  const emailBtn = document.getElementById("email-btn");

  const translations = {
    tr: {
      message: "2026'ya <span id='year-counter'>365 Gün</span> kaldı!",
      bottomText: "Mutlu seneler",
      email: "Bana e-posta gönder",
      labels: ["Gün", "Saat", "Dakika"]
    },
    en: {
      message: "2026 is in <span id='year-counter'>365 Days</span>!",
      bottomText: "Happy New Year",
      email: "Send me an email",
      labels: ["Days", "Hours", "Minutes"]
    },
    de: {
      message: "2026 in <span id='year-counter'>365 Tage</span>!",
      bottomText: "Frohes neues Jahr",
      email: "Schick mir eine E-Mail",
      labels: ["Tage", "Stunden", "Minuten"]
    }
  };

  function updateLanguage(lang) {
    const t = translations[lang];
    messageElement.innerHTML = t.message;
    bottomText.textContent = t.bottomText;
    emailBtn.textContent = t.email;
    document.querySelectorAll(".countdown-box label").forEach((label, index) => {
      label.textContent = t.labels[index];
    });
  }

  function updateCountdown() {
    const now = new Date();
    const nextYear = new Date(now.getFullYear() + 1, 0, 1);
    const timeLeft = nextYear - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    yearCounter.textContent = `${days} Gün`;
    daysElement.textContent = String(days).padStart(3, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
  }

  document.getElementById("btn-turkish").addEventListener("click", () => updateLanguage("tr"));
  document.getElementById("btn-english").addEventListener("click", () => updateLanguage("en"));
  document.getElementById("btn-german").addEventListener("click", () => updateLanguage("de"));

  setInterval(updateCountdown, 60000);
  updateCountdown();
  updateLanguage("tr");
});
