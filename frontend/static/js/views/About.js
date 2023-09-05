import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super(); // Permet d'accéder a cette classe enfant
    this.setTitle("À propos");
  }

  async getHtml() {
    return `
        <h1>À propos de nous</h1>
        <p>Bienvenue sur Disney Personnages Info, votre destination de référence pour découvrir l'univers enchanteur des personnages Disney. Notre site est dédié à vous fournir :</p>
        <ul>
            <li>Des profils détaillés et des informations sur différents personnages Disney.</li>
            <li>Des faits fascinants, des anecdotes et des récits sur vos créations Disney préférées.</li>
            <li>Des informations sur l'histoire riche et la mythologie des personnages Disney.</li>
        </ul>
        <p>Explorez notre site et embarquez pour une aventure remplie de nostalgie, d'émerveillement et de la magie intemporelle de Disney !</p>
        <p>
            <a href="/posts">Découvrez nos personnages favoris!</a>
        </p>
        `;
  }
}
