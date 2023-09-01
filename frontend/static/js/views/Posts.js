import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params); // Permet d'accéder a cette classe enfant
    this.setTitle("Personnages");
  }

  async getHtml() {
    async function getDatas(url) {
      const response = await fetch(url);
      const datas = await response.json();
      return datas;
    }
    const data = await getDatas("/static/js/views/DisneyCaracter.json");
    const listPosts = this.getInfosAsHTML(data["data"]);

    return (
        `
            <h1 class="text-center pb-5">Liste de personnages</h1>
        ` + listPosts
    );
  }

  /**
   * Convertir les données en HTML
   * @param {*} data array de données de personnages
   * @returns string HTML
   */
  getInfosAsHTML(data) {
    let listPosts = '<ul class="list-group">';
    for (let i in data) {
      listPosts += `
        <li class="list-group-item">
            <div class="post-content">
                <a href="/posts/${data[i]._id}" data-link class="post-link">${data[i]["name"]}</a>
                <img src="${data[i]["imageUrl"]}" alt="${data[i]["name"]}" class="post-image">
            </div>
        </li>
      `;
    }
    listPosts += "</ul>";
    return listPosts;
  }
}
