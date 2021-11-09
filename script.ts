// // EXERCICE 1 CREER DES VARIABLES AVEC TYPES STRICTS && PUSH DES VALEURS DANS [];
// let names: string;
// let speed: number = 25;
// let isLoading: boolean;
// let age: number|string;

// let colors: string[] = [];
// colors.push('red');
// console.log(colors);

// let infos: (string|number|boolean)[] = [];
// infos.push('dupond');
// infos.push(40);
// infos.push(false);
// console.log(infos);

// // EXERCICE 2 CREER VARIABLES ETANT QUE DES OBJETS
// let member = {
//     firstName: "Ali",
//     age:20,
//     isLoggedIn: true
// }

// console.log(member.age);
//                                                  // ^
// // EX TUPPLE DONC RESPECTER LA POSITION ET LE TYPE /!\ la methode push derogue a cette regle la
// let infoos:[string, number]


                                                        /* EXO DE MOUAD LE BOSS */

// INTERFACE AVEC SIGNATURE DE METHODE A IMPLEMENTER
interface IBatiment {
    AfficherAttribut(): string;
}

// CLASSE PARENTE BATIMENT
class Batiment implements IBatiment {

    constructor(protected adresse: string){}

    AfficherAttribut(): string{
        return `Attributs Classe Batiment: ${this.adresse}`;
    }

    getAdress(){
        return this.adresse;
    }
    setAdress(){
        return this.adresse;
    }
}

// CLASSE ENFANT MAISON
class Maison extends Batiment {
    constructor(private nbPiece: number){
        super("25 rue des chomeurs");
    }

    getPieces(){
        return this.nbPiece;
    }

    setPieces(){
        return this.nbPiece;
    }

    AfficherAttribut(){
        return `Attributs Maison:  ${this.nbPiece} pièces. adresse:  ${super.getAdress()}`;
    }
}

//INSTANCE DES OBJETS DES DEUX CLASSES
let myAdress = new Batiment("80 rue des mouad");
console.log(myAdress.AfficherAttribut());

let myHouse = new Maison(12);
console.log(myHouse.AfficherAttribut());