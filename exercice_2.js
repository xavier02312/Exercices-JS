/**
 * Utiliser le tableau suivant
 */
const visiteurs = [
  ['Gérard', 'Freschi', 'gfreschi0@discuz.net'],
  ['Bendicty', 'Foster-Smith', 'bfostersmith1@mysql.com'],
  ['Michelle', 'Draude', 'mdraude2@csmonitor.com'],
  ['Cathee', 'Meineck', 'cmeineck3@t-online.de'],
  ['Marianna', 'Coal', 'mcoal4@creativecommons.org'],
];

/**
 * 1. Vérifier si le nom de famille "Meineck" existe dans le tableau. Afficher un message en conséquence.
 */
//solution #1
for (let i = 0; i < visiteurs.length; i++) {
//console.log(visiteurs [i]);                         vérifie ce qui à dans le tableau

for (let j = 0; j < visiteurs[i].length; j++) {
//console.log(visiteurs[i][j]);                       vérifie ce qui à dans le tableau
  if (visiteurs[i][j] === 'Meineck') {
      console.log('Hey ho ! Salut toi !');
      break;                                            /**permet de stopper la boucle */
  }                                                     /**Ne fonctionne pas avec un .forEach() */
    else {
      console.log('Je ne te connais pas ');
    }
 }
}
//solution #2
visiteurs.forEach(visiteur => {
  if (visiteur.includes("Meineck")) {                         //.includes() permet de vérifier si une valeur est présente
    console.log('Hey ho ! Salut toi ! #2');                   // dans le tableau
  }
})

/**
 * 2. Trier le tableau par ordre alphabétique selon les prénoms.
 */
visiteurs.sort();                         //.sort() sera utile pour trier par orde alphabetique
console.log(visiteurs);


/**
 * 3. Créer un tableau contenant que les adresses e-mails en utilisant l'instruction map().
 */
 const emails = visiteurs.map(visiteur => {
  return visiteur[2];   
  });

  console.log(emails);