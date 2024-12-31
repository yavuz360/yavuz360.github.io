document.addEventListener("DOMContentLoaded", () => {
  const digits = [
    document.getElementById("digit-1"),
    document.getElementById("digit-2"),
    document.getElementById("digit-3"),
    document.getElementById("digit-4"),
  ];

  function setDigits(value) {
    const strValue = value.toString().padStart(4, "0");
    for (let i = 0; i < 4; i++) {
      digits[i].textContent = strValue[i];
    }
  }

  function startCountdown() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);
    const secondsToNewYear = Math.floor((newYear - now) / 1000);

    if (secondsToNewYear > 2025) {
      setDigits(2025);
    } else if (secondsToNewYear > 0) {
      setDigits(secondsToNewYear);
    } else {
      setDigits(0);
      clearInterval(timer);
    }
  }

  const timer = setInterval(startCountdown, 1000);
  startCountdown();
});
