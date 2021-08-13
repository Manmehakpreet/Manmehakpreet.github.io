/*
Name: Manmehakpreet Singh
StudentID: 139748206
email: manmehakpreet-singh@myseneca.ca
websiteLink: https://manmehakpreet.github.io/
reflectionLink: https://youtu.be/OqLivHjj7fE
*/
function updateCards(observations) {
    // Populate the table with all observation data we want to show
    observations.forEach((observation) => {
      // TODO: call the buildRowForObservation function with the current observation
      // and use that to add it to the table with the addRowToTable function.
      addCard(buildCardForObservation(observation));
    });
  }

function start(){ /*This function is called first and further call two functions */
    const observations = getAllObservations();
    updateCards(observations);
}

document.onload = start();
document.getElementById("rate").style.display = "none";