
document.getElementById("yesBtn").addEventListener("click", function() {
  document.getElementById("feedback").innerText = "Que ótimo! Guga tá aqui ansioso! hehe 🥰";
  document.getElementById("feedback").style.color = "#4CAF50";
});

document.getElementById("noBtn").addEventListener("click", function() {
  document.getElementById("feedback").innerText = "Aaa maldade com o Guh!🥹";
  document.getElementById("feedback").style.color = "#FF6347";
});

// Relógio e data
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const date = now.toLocaleDateString(); // Exibe a data no formato local

  document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds} - ${date}`;
}

setInterval(updateClock, 1000);  // Atualiza a cada segundo
updateClock();  // Chama a função logo de início
