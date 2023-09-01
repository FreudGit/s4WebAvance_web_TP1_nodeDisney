import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params); 
    this.setTitle("Film Disney");
  }

  async getHtml() {
    const nu = Number(this.params.id);

    async function getDatas(url) {
      const response = await fetch(url);
      const datas = await response.json();
      return datas["data"];
    }
    const data = await getDatas("/static/js/views/DisneyCaracter.json");

    const article = data.find((post) => post._id === nu);
    return (
        `
        <div class="container mt-5">
            <div class="text-center">
                <h2>${article["name"]}</h2>
                 <img src="${article["imageUrl"]}" alt="Description de l'image" class="img-thumbnail">
                 <h3 class="mt-4">Liste de films</h3>
        ` 
            +this.getElementsAsHTML(article["films"], article["sourceUrl"]) +
        `
            <h3 class="mt-4">Liste d'animation d'animation</h3>
        ` 
            +this.getElementsAsHTML(article["shortFilms"], article["sourceUrl"]) +
        `
            <h3  class="mt-4">Animation télévisions</h3>
        `   
            +this.getElementsAsHTML(article["tvShows"], article["sourceUrl"]) +
        `
             <h3  class="mt-4">Jeux Vidéo</h3>
        ` 
            +this.getElementsAsHTML(article["videoGames"], article["sourceUrl"]) +
        `
            </div>
        </div>
        `
    );
  }

  /**
   * Convertir les données en HTML
   * @param {*} data array de données
   * @param {*} elseText texte a afficher si pas de données
   * @param {*} sourceURL lien source
   * @returns string HTML
   */
  getElementsAsHTML(data, sourceURL = "#", elseText = "Aucun") {
    if (data === undefined || data.length === 0) {
      data = [elseText];
    }
    let listPosts = '<ul class="list-group">';
    for (let i in data) {
      listPosts += `
            <li class="list-group-item">
            <a href="${sourceURL}" target="_blank" class="post-link">${data[i]}</a>
            </li>
          `;
    }
    listPosts += "</ul>";
    return listPosts;
  }
}
