document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  const modals = document.querySelectorAll("[data-modal]");

  modals.forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
      event.preventDefault();
      const modal = document.getElementById(trigger.dataset.modal);
      modal.classList.add("open");
      const exits = modal.querySelectorAll(".modal-exit");
      exits.forEach(function (exit) {
        exit.addEventListener("click", function (event) {
          event.preventDefault();
          modal.classList.remove("open");
        });
      });
    });
  });
});
function cF(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function contact(e) {
  e.preventDefault();
  const formCnt = document.querySelector(".formCnt");
  const rep = document.querySelector(".rep");

  let nom = document.getElementById("nom").value;
  let mail = document.getElementById("mail").value;
  let num = document.getElementById("num").value;
  let sujet = document.getElementById("sujet").value;

  let txt = `Bonjour ${cF(nom)}, votre sujet "${cF(
    sujet
  )}" est bien traité. Vous avez bien comme numero de telephone ${cF(
    num
  )}, et email ${mail.toLowerCase()}.Je vous renvoie une réponse très vite.`;

  formCnt.style.display = "none";
  rep.style.display = "block";
  document.getElementById("response").textContent = txt;
}
