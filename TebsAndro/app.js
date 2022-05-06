/* Manala doublons anaty tableau ana nombre
    > in [23, 0, -23, 1, 5, 0]  
    > out [23, 0, -23, 1, 5]   */

let tab1 = [23, 0, -23, 1, 5, 0];
let tabResult1 = [];

for (let i = 0; i < tab1.length; i++) {
	let isExists = false;
	for (let j = 0; j < tabResult1.length; j++) {
		if (tab1[i] === tabResult1[j]) {
			isExists = true;
			break;
		}
	}
	if (!isExists) {
		tabResult1.push(tab1[i]);
	}
}
console.log(tabResult1);

/* Mandahatra element anaty tableau ana nombre par ordre croissant (raha misy doublons dia igniorena) avy eo decroissant */

let tab2 = [23, 0, -23, 1, 5];
console.log(tab2);

function triCroissant(tab) {
	for (let i = 0; i < tab.length; i++) {
		for (let j = 0; j < tab.length; j++) {
			if (tab[j] > tab[j + 1]) {
				let tmp = tab[j];
				tab[j] = tab[j + 1];
				tab[j + 1] = tmp;
			}
		}
	}
	return tab;
}

console.log("Tri croissant : " + triCroissant(tab2));

let tab3 = [23, 0, -23, 1, 5];
console.log(tab3);

function triDecroissant(tab) {
	for (let i = 0; i < tab.length; i++) {
		for (let j = 0; j < tab.length; j++) {
			if (tab[j] < tab[j + 1]) {
				let tmp = tab[j];
				tab[j] = tab[j + 1];
				tab[j + 1] = tmp;
			}
		}
	}
	return tab;
}

/* */

console.log("Tri decroissant : " + triDecroissant(tab3));

/* Total ny nombre negative sy positive anaty tableau ana nombre */
let tab4 = [12, -3, -4, 0, 1];
console.log(tab4);

let sumPos = 0;
let sumNeg = 0;

function sumPosNeg(tab) {
	for (let i = 0; i < tab.length; i++) {
		if (tab3[i] < 0) {
			sumNeg += tab[i];
		} else {
			sumPos += tab[i];
		}
	}
	return console.log(
		"Somme nombres positifs:",
		sumPos,
		" et Somme nombres négatifs:",
		sumNeg
	);
}

sumPosNeg(tab4);

/* Combinaison ana nombre lehibe indrindra anaty tableau (positive daholo ny nombre anaty tableau) */

let tab5 = [2, 2, 0, 5];
let result = "";
console.log(tab5);

function comb(tab) {
	let tab6 = triDecroissant(tab);
	for (let i = 0; i < tab6.length; i++) {
		result += tab6[i];
	}
	return console.log(result);
}

comb(tab5);

/* Exo 4, ialana tsiny fa tena mbola tsy tafavoaka mihitsy */
