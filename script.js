// Attendre que le document soit chargé
document.addEventListener("DOMContentLoaded", function() {
  
  // Sélectionner les éléments
  const totalDisplay = document.querySelector(".total");
  const plusButtons = document.querySelectorAll(".fa-plus-circle");
  const minusButtons = document.querySelectorAll(".fa-minus-circle");
  const trashButtons = document.querySelectorAll(".fa-trash-alt");
  const heartButtons = document.querySelectorAll(".fa-heart");

  // Fonction pour mettre à jour le total
  function updateTotal() {
    let total = 0;
    document.querySelectorAll(".card").forEach(function(card) {
      const price = parseFloat(card.querySelector(".unit-price").textContent);
      const quantity = parseInt(card.querySelector(".quantity").textContent);
      total += price * quantity;
    });
    totalDisplay.textContent = total + " $";
  }

  // Gestion des boutons +
  plusButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      const quantitySpan = this.parentElement.querySelector(".quantity");
      quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
      updateTotal();
    });
  });

  // Gestion des boutons -
  minusButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      const quantitySpan = this.parentElement.querySelector(".quantity");
      const current = parseInt(quantitySpan.textContent);
      if (current > 0) {
        quantitySpan.textContent = current - 1;
        updateTotal();
      }
    });
  });

  // Gestion des boutons poubelle
  trashButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      const card = this.closest(".card");
      card.querySelector(".quantity").textContent = "0";
      updateTotal();
    });
  });

  // Gestion des boutons cœur
  heartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      if (this.style.color === "red") {
        this.style.color = "black";
      } else {
        this.style.color = "red";
      }
    });
  });

  // Calcul initial
  updateTotal();
});