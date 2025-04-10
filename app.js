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
    "TUTORIAL": "Cum mă cheamă?",
	"CUM TE CHEAMA?": "Tudor Buzunarescu",
	"CUM TE CHEAMA": "Tudor Buzunarescu",
	"TUDOR": "Nu mă cheamă așa.",
	"TUDOR DE BUZUNAR": "Nu mă cheamă așa. De ce nu mă întrebi cum mă cheamă?",
	"TUDOR BUZUNARESCU": "Felicitări! Ai terminat tutorialul. Spor!",
	
	"SARA": "Salut Sara, dar pe mine cum mă cheamă?",
	"ALEX": "Salut Alex, dar pe mine cum mă cheamă?",
	"ALEXANDRU": "Salut Alexandru, dar pe mine cum mă cheamă?",
	"ERICA": "Salut Erica, dar pe mine cum mă cheamă?",
	"OVIDIU": "Salut Ovidiu, dar pe mine cum mă cheamă?",
	"EMI": "Salut Emi, dar pe mine cum mă cheamă?",
	"EMERIC": "Salut Emeric, dar pe mine cum mă cheamă?",
	"ADI": "Salut Adi, dar pe mine cum mă cheamă?",
	"ADRIAN": "Salut Adrian, dar pe mine cum mă cheamă?",
	"LAURA": "Salut Laura, dar pe mine cum mă cheamă?",
	"STEFAN": "Salut Stefan, dar pe mine cum mă cheamă?",
	"BIANCA": "Salut Bianca, dar pe mine cum mă cheamă?",
	"MIHNEA": "Salut Mihnea, dar pe mine cum mă cheamă?",
	"PAUL": "Salut Paul, dar pe mine cum mă cheamă?",
	"CATALINA": "Salut Catalina, dar pe mine cum mă cheamă?",
	"ANCA": "Salut Anca, dar pe mine cum mă cheamă?",
	"ANDREEA": "Salut Andreea, dar pe mine cum mă cheamă?",
	"CRISTINA": "Salut Cristina, dar pe mine cum mă cheamă?",
	"CIOACLA": "Salut Cioacla, dar pe mine cum mă cheamă?",
	"LEO": "Salut Leo, dar pe mine cum mă cheamă?",
	"LEONARD": "Salut Leonard, dar pe mine cum mă cheamă?",
	"RAZVAN": "Salut Razvan, dar pe mine cum mă cheamă?",
	"MIRUNA": "Salut Miruna, dar pe mine cum mă cheamă?",
	"ERIKA": "Salut Erika, dar pe mine cum mă cheamă?",
	"FLORENTINA": "Salut Florentina, dar pe mine cum mă cheamă?",
	"NICOLA": "Salut Nicola, dar pe mine cum mă cheamă?",
	"IONCI": "Salut Ionci, dar pe mine cum mă cheamă?",
	"ION": "Salut Ion, dar pe mine cum mă cheamă?",
	
	"MANCARE": "Mi-e foame. Hai la masă! Care produs din meniu apare primul la secțiunea burgeri?",
	"BIG TASTY": "VE",
	"BIG TASTY BURGER": "VE",
	"BIG TASTY BURGER VITA": "VE",
	"BIG TASTY BURGER VITA, BRANZA": "VE",
	"BIG TASTY BURGER VITA BRANZA": "VE",
	"BIG MAC": "RA",
	"CHEESEBURGER": "LP",
	"HAMBURGER": "OV",
	"MC CHICKEN": "DR",
	
	"TRASEU": "Plecăm pe hike. Care este traseul 28?",
	"DUNGA GALBENA": "EV",
	"DUNGA": "Răspuns incomplet.",
	"GALBEN": "Răspuns incomplet.",
	"GALBENA": "Răspuns incomplet.",
	
	"CREDINTA": "Facem rugăciunea de început. Ce scrie deasupra intrării în biserică?",
	"GLORIA TIBI DOMINE": "BY",
	"GLORIA TIBI, DOMINE": "BY",
	
	"CORTURI": "Hai la panou să învățăm despre istoria taberei. Când pui Argeșul la capitală și Sibiul la periferie, ce se situează în buclă?",
	"SITUATE": "BF",
	"SITUATE LA": "BF",
	"CUVANTUL SITUATE": "BF",
	"CUVINTELE SITUATE LA": "BF",
	
	"CONSTRUCTII": "Ajutăm la construcția stației de metrou. Ce nod am făcut pentru aceasta?",
	"PRIETENIEI": "ZW",
	"NODUL PRIETENIEI": "ZW",
	"PATRAT": "ZW",
	"NODUL PATRAT": "ZW",
	"CABESTAN": "MO",
	"FLUTURE": "HJ",
	"BULIN": "PC",
	"NODUL DE LA ESARFA": "Da, dar cum se numește?",
	"NODUL DE LA CRAVATA": "Da, dar cum se numește?",
	"DE ESARFA": "Da, dar cum se numește?",
	"DE CRAVATA": "Da, dar cum se numește?",
	"DE LA ESARFA": "Da, dar cum se numește?",
	"DE LA CRAVATA": "Da, dar cum se numește?",
	
	"ORIENTARE": "Este timpul să ne scoatem busolele. Ce se ivește la 245 Vest?",
	"BISERICA NASTEREA MAICII DOMNULUI": "QE",
	"NASTEREA MAICII DOMNULUI": "Răspuns incomplet.",
	"BISERICA": "Răspuns incomplet.",
	"FANTANA": "CH",
	"BISERICA SFANTA VINERI": "BD",
	"AUCHAN": "JO",
	
	"BYZWVEBFQEEV": "Felicitări! Acum este timpul să-mi găsești adăpostul. Am combinat corturile cu orientarea și construcțiile cu traseul și m-am așezat la răscruce. Vino repede!",
	
	"HINT 0": "Pe ușă.",
	"HINT 1": "Pe poarta din față.",
	"HINT 2": "Pe indicatorul de autobuz.",
	"HINT 3": "În fața intrării, pe stâlpul din copac.",
	"HINT 4": "Pe suportul de biciclete de la intrare.",
	"HINT 5": "În vârful podului, pe cutie.",
	"HINT 6": "În fața intrării, pe bățul de lemn care ține copacul.",
	"HINT 7": "Nu mai sunt indicii.",
	"HINT 8": "Chiar nu mai sunt indicii.",
	"HINT 9": "Stop!",
	"HINT 10": ":(",
	
	"SALUT": "Bună!",
	"BUNA": "Salut!",
	"SHALUT": "Bună, Miruna!",
	"SHALUT PRIETENII MEI": "Bună, Miruna!",
	"SHALUT, PRIETENII MEI": "Bună, Miruna!",
	"CE FACI?": "Mă ascund. Tu ce faci?",
	"CE FACI": "Mă ascund. Tu ce faci?",
	"BINE": "Wow. Nu ai făcut workshop-ul de cnv, nu?",
	"MUIE": "Rapid!",
	"NICUSOR DAN": "Președinte!",
	"NICUSOR": "Președinte!",
	"AMD": "Cel mai tare centru local!",
	"SUNT AICI": "Suflet de Ciomag",
	"SUFLET DE CIOMAG": "Sunt aici!",
	"SKIBIDI": "Bagă un leu la tubul Skibidi!",
	"CE CAUTI?": "Nu stiu ce caut.",
	"CE CAUTI": "Nu stiu ce caut.",
	"OAIA ROZ": "NU.",
	"NU STIU": "Nici eu.",
	
	"NDU": "CREDINTA",
	"RTH": "CONSTRUCTII",
	"TNM": "MANCARE",
	"WBX": "CORTURI",
	"VYU": "ORIENTARE",
	"KOP": "TRASEU",
  };

  // Return the corresponding answer based on the key, or the default if not found
  return answers[key] || "Nu știu să răspund.";
}

// Add an event listener to the button
document.getElementById('submitButton').addEventListener('click', handleButtonClick);
