// // EXERCICE 1 CREER DES VARIABLES AVEC TYPES STRICTS && PUSH DES VALEURS DANS [];
// let names: string;
// let speed: number = 25;
// let isLoading: boolean;
// let age: number|string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// CLASSE PARENTE BATIMENT
var Batiment = /** @class */ (function () {
    function Batiment(adresse) {
        this.adresse = adresse;
    }
    Batiment.prototype.AfficherAttribut = function () {
        return "Attributs Classe Batiment: " + this.adresse;
    };
    Batiment.prototype.getAdress = function () {
        return this.adresse;
    };
    Batiment.prototype.setAdress = function () {
        return this.adresse;
    };
    return Batiment;
}());
// CLASSE ENFANT MAISON
var Maison = /** @class */ (function (_super) {
    __extends(Maison, _super);
    function Maison(nbPiece) {
        var _this = _super.call(this, "25 rue des chomeurs") || this;
        _this.nbPiece = nbPiece;
        return _this;
    }
    Maison.prototype.getPieces = function () {
        return this.nbPiece;
    };
    Maison.prototype.setPieces = function () {
        return this.nbPiece;
    };
    Maison.prototype.AfficherAttribut = function () {
        return "Attributs Maison:  " + this.nbPiece + " pi\u00E8ces. adresse:  " + _super.prototype.getAdress.call(this);
    };
    return Maison;
}(Batiment));
//INSTANCE DES OBJETS DES DEUX CLASSES
var myAdress = new Batiment("80 rue des mouad");
console.log(myAdress.AfficherAttribut());
var myHouse = new Maison(12);
console.log(myHouse.AfficherAttribut());
