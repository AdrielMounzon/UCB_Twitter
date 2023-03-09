class ListaNotas{
    constructor(){
        this.lista=[];
    }
    GetLista(){
        return this.lista;
    }
    AgregarNota(nota){
        this.lista.unshift(nota);
    }
    
    MostrarLista(filtrarNotas=null){
        listaNotasHTML.innerText="";
        const ListaAMostrar=filtrarNotas || this.lista;
        ListaAMostrar.forEach((nota, index) => {
            const listItem = document.createElement("li");
            const title = document.createElement("h3");
            const content = document.createElement("p");

            title.innerText = nota.GetTitulo();
            content.innerText = nota.GetDescripcion();
            listItem.appendChild(title);
            listItem.appendChild(content);
            listaNotasHTML.appendChild(listItem);
        });
    }
}
export default ListaNotas;