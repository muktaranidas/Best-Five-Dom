const playerArray = [];
function display(player) {
  const tableBody = document.getElementById("player-name");
  tableBody.innerHTML = "";
  for (let i = 0; i < player.length; i++) {
    const name = player[i];
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <th>${i + 1}</th>
    <td>${name}</td>`;
    tableBody.appendChild(tr);
  }
}
function addToCart(element) {
  const PlayerName = element.parentNode.parentNode.children[0].innerText;
  const playerNameValue = PlayerName;

  const playerButton = element.parentNode.parentNode.children[1].children[0];

  if (playerArray.length < 5) {
    playerArray.push(playerNameValue);

    playerButton.disabled = true;
  } else {
    alert("Cannot add more than 5 players");
  }
  // document.getElementById("total-added-prodect").innerText = playerArray.length;
  display(playerArray);
}
document.getElementById("btn-calculate").addEventListener("click", function () {
  const perPlayerField = document.getElementById("per-player-field");
  const perPlayerFieldString = perPlayerField.value;
  const perPlayerFieldValue = parseInt(perPlayerFieldString);

  const playerExpensesText = document.getElementById("player-expenses-text");
  const playerExpensesTextString = playerExpensesText.innerText;
  const playerExpensesTextValue = parseInt(playerExpensesTextString);
  const playerExpenses = perPlayerFieldValue * playerArray.length;

  playerExpensesText.innerText = playerExpenses;
});

document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const managerField = document.getElementById("manager-field");
    const managerFieldString = managerField.value;
    const managerFieldValue = parseFloat(managerFieldString);

    const coachField = document.getElementById("coach-field");
    const coachFieldString = coachField.value;
    const coachFieldValue = parseFloat(coachFieldString);

    const totalText = document.getElementById("total-text");
    const totalTextString = totalText.innerText;
    const totalTextValue = parseFloat(totalTextString);

    const playerExpensesText = document.getElementById("player-expenses-text");
    const playerExpensesTextString = playerExpensesText.innerText;
    const playerExpensesTextValue = parseInt(playerExpensesTextString);

    const perPlayerField = document.getElementById("per-player-field");
    const perPlayerFieldString = perPlayerField.value;
    const perPlayerFieldValue = parseInt(perPlayerFieldString);

    const playerExpenses = perPlayerFieldValue * playerArray.length;
    playerExpensesText.innerText = playerExpenses;

    const total = playerExpenses + coachFieldValue + managerFieldValue;
    totalText.innerText = total;
  });
