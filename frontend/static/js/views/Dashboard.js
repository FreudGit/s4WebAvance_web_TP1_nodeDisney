import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super()  // Permet d'accéder a cette classe enfant
        this.setTitle('Bienvenue !')
    }

    async getHtml() {
        return `
            <h1>Bienvenue sur le site Personnages disney</h1>
            <p>Se site vous fournira beaucoup d'infiormation sur chacun des personnages de l'univer Disney.  Bonne découverte !!!!</p>
            <p>
                <a href="/posts" data-link>Voir la liste de personnages...</a>
            </p>
        `
    }
}