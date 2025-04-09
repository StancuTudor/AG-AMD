// app.js

// Function to handle the button click
function handleButtonClick() {
  const inputText = document.getElementById('inputText').value; // Get the value from the input
  const resultDiv = document.getElementById('result'); // Get the result div
  
  var result = getResult(inputText);
  
  resultDiv.textContent = result; // Display the result
}

function getResult(key) {
	key = key.toUpperCase();
	
	const answers = {
	// 0 Tutorial : TUTORIAL -> TUDOR -> AA
    "TUTORIAL": "Cum ma cheama?",
	"TUDOR": "Felicitari! Ai terminat tutorialul. Spor!",
	"HINT 0": "Pe usa.",
	
	"SARA": "Salut Sara, dar pe mine cum ma cheama?",
	"ALEX": "Salut Alex, dar pe mine cum ma cheama?",
	"ALEXANDRU": "Salut Alexandru, dar pe mine cum ma cheama?",
	"ERICA": "Salut Erica, dar pe mine cum ma cheama?",
	"OVIDIU": "Salut Ovidiu, dar pe mine cum ma cheama?",
	"EMI": "Salut Emi, dar pe mine cum ma cheama?",
	"EMERIC": "Salut Emeric, dar pe mine cum ma cheama?",
	"ADI": "Salut Adi, dar pe mine cum ma cheama?",
	"ADRIAN": "Salut Adrian, dar pe mine cum ma cheama?",
	"LAURA": "Salut Laura, dar pe mine cum ma cheama?",
	"STEFAN": "Salut Stefan, dar pe mine cum ma cheama?",
	"BIANCA": "Salut Bianca, dar pe mine cum ma cheama?",
	"MIHNEA": "Salut Mihnea, dar pe mine cum ma cheama?",
	"PAUL": "Salut Paul, dar pe mine cum ma cheama?",
	"CATALINA": "Salut Catalina, dar pe mine cum ma cheama?",
	"ANCA": "Salut Anca, dar pe mine cum ma cheama?",
	"ANDREEA": "Salut Andreea, dar pe mine cum ma cheama?",
	"CRISTINA": "Salut Cristina, dar pe mine cum ma cheama?",
	"CIOACLA": "Salut Cioacla, dar pe mine cum ma cheama?",
	"LEO": "Salut Leo, dar pe mine cum ma cheama?",
	"LEONARD": "Salut Leonard, dar pe mine cum ma cheama?",
	"RAZVAN": "Salut Razvan, dar pe mine cum ma cheama?",
	"MIRUNA": "Salut Miruna, dar pe mine cum ma cheama?",
	"ERIKA": "Salut Erika, dar pe mine cum ma cheama?",
	"FLORENTINA": "Salut Florentina, dar pe mine cum ma cheama?",
	"NICOLA": "Salut Nicola, dar pe mine cum ma cheama?",
	"IONCI": "Salut Ionci, dar pe mine cum ma cheama?",
	"ION": "Salut Ion, dar pe mine cum ma cheama?",
	
	// 1 AMD : AVENTURA -> GLORIA TIBI DOMINE -> BY
	"AVENTURA": "Ce scrie deasupra intrarii in biserica?",
	"GLORIA TIBI DOMINE": "BY",
	"GLORIA TIBI, DOMINE": "BY",
	"HINT 1": "Pe poarat din fata.",
	
	// 2 Stele : CONSTRUCTII -> PRIETENIEI -> ZW
	"CONSTRUCTII": "Ce nod am facut pe steaua cea mica?",
	"PRIETENIEI": "ZW",
	"NODUL PRIETENIEI": "ZW",
	"PATRAT": "ZW",
	"NODUL PATRAT": "ZW",
	"CABESTAN": "MO",
	"FLUTURE": "HJ",
	"BULIN": "PC",
	"HINT 2": "Pe banca din statie.",
	
	// 3 Mc : MANCARE -> ANSWER3 -> VE
	"MANCARE": "Care produs apare primul la sectiunea meniuri?",
	"ANSWER3": "VE",
	"MENIU ANSWER3": "VE",
	"HINT 3": "Pe planta.",
	
	// 4 Auchan : HINT4 -> ANSWER4 -> BF
	"HINT4": "Care este raspunsul 4?",
	"ANSWER4": "BF",
	"HINT 4": "Pe stalp.",
	
	// 5 Pod : ORIENTARE -> FANTANA -> QE
	"ORIENTARE": "Ce se af",
	"FANTANA": "QE",
	"HINT 5": "",
	
	// 6 Dream : FOC -> ANSWER6 -> EV
	"FOC": "Care este raspunsul 6?",
	"ANSWER6": "EV",
	"HINT 6": "Pe stalp.",
	
	// Final: BYZWVEBFQEEV
	"BYZWVEBFQEEV": "Bravo!",
	
	// Easter eggs
	"SALUT": "Buna!",
	"SHALUT": "Buna, Miruna!",
	
	
  };

  // Return the corresponding answer based on the key, or the default if not found
  return answers[key] || "Cod incorect.";
}

// Add an event listener to the button
document.getElementById('submitButton').addEventListener('click', handleButtonClick);
