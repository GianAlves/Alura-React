export default class Categoria {
    constructor() {
        this.categorias = [];
    }

    adicionarCategoria(novaCategoria){
        console.log(this.categorias);
        this.categorias.push(novaCategoria);
    }

};
