const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");
const screen5 = document.getElementById("screen5");

const enterBtn = document.getElementById("enterBtn");
const continueBtn = document.getElementById("continueBtn");

const warningModal = document.getElementById("warningModal");

const cancelBtn = document.getElementById("cancelBtn");
const confirmBtn = document.getElementById("confirmBtn");

const wishInput = document.getElementById("wishInput");

const statusText = document.getElementById("statusText");
const progressBar = document.getElementById("progressBar");
const progressPercent = document.getElementById("progressPercent");

const grantedContainer =
document.querySelector(".granted-container");

function showScreen(screen) {
  document
    .querySelectorAll(".screen")
    .forEach(item => {
      item.classList.remove("active");
    });

  screen.classList.add("active");
}

/* ENTER */

enterBtn.addEventListener("click", () => {
  showScreen(screen2);
});

/* CONTINUE */

continueBtn.addEventListener("click", () => {
  if (wishInput.value.trim() === "") {
    alert("Please enter your wish.");
    return;
  }

  warningModal.classList.add("show");
});

/* CANCEL */

cancelBtn.addEventListener("click", () => {
  warningModal.classList.remove("show");
});

/* CONFIRM */

confirmBtn.addEventListener("click", () => {
  warningModal.classList.remove("show");
  startProcessing();
});

/* PROCESSING */

function startProcessing() {
  showScreen(screen3);

  let progress = 0;

  const messages = [
    { value: 20, text: "Searching records..." },
    { value: 45, text: "Reviewing previous outcomes..." },
    { value: 70, text: "Analyzing consequences..." },
    { value: 90, text: "Preparing fulfillment..." },
    { value: 99, text: "One moment..." }
  ];

  let messageIndex = 0;

  const interval = setInterval(() => {
    progress++;

    progressBar.style.width = progress + "%";
    progressPercent.textContent = progress + "%";

    if (messageIndex < messages.length && progress >= messages[messageIndex].value) {
      statusText.textContent = messages[messageIndex].text;
      messageIndex++;
    }

    if (progress === 99) {
      clearInterval(interval);

      setTimeout(() => {
        statusText.textContent = "Finalizing...";

        setTimeout(() => {
          showScreen(screen4);

          setTimeout(() => {
            showScreen(screen5);
            grantedContainer.style.transition = "opacity 2s ease";
            grantedContainer.style.opacity = "1";
          }, 2500);
        }, 1800);
      }, 2500);
    }
  }, 70);
}
