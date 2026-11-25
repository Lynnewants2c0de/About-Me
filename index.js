document.querySelectorAll("button[data-target]").forEach ((button) => {
  const targetId = button.dataset.target;
  const target = document.getElementById(targetId);

  if (!target) {
    console.error(`Navigation target "${targetId}" was not found.`);
    return;
  }

  button.addEventListener("click", () => {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});