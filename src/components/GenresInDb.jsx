import { Component, useEffect, useState } from "react";
import Genre from "./Genre";


// let genres = [
//   { genre: "Acción" },
//   { genre: "Animación" },
//   { genre: "Aventura" },
//   { genre: "Ciencia Ficción" },
//   { genre: "Comedia" },
//   { genre: "Documental" },
//   { genre: "Drama" },
//   { genre: "Fantasia" },
//   { genre: "Infantiles" },
//   { genre: "Musical" },
// ];


function Genres () {

  const [genresList, setGenresList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3009/api/products/count/types")
    .then(respuesta => respuesta.json())
    .then(genres => {
     // console.log('genre',genres)
      setGenresList(
        genres.categoria
    );
    //console.log('genrelist',genresList)
  })
    
      .catch((error) => console.log(error));
      
  },[]);
  
  //console.log('genrelist',genresList)
  
    return (
      <>
        {/*<!-- Categories in DB -->*/}
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h5 className="text-center m-0 font-weight-bold text-gray-800" id="genero">
                Tipos de vehiculos / Productos por tipo 
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                {genresList.map((genre, index) => {
                  return <Genre {...genre} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  
}
export default Genres;


// class GenresInDb extends Component{
//   constructor() {
//     super();
//     this.state = { genresList: [] };
//   }
  
//   componentDidMount() {
//     fetch("http://localhost:3009/api/products/categories1")
//       .then((respuesta) => {
//         return respuesta.json()
//       })
//       .then((genres) => {
//         console.log('generos', genres)
//         this.setState({ genresList: genres.data.categorias });
//       })
//       .catch((error) => console.log(error));
      
//   }
  
//   onMouseOver(){
//     let h6 = document.querySelector('#genero')
//     h6.classList.toggle('bg-secondary')
//   }
//   render() {
//     return (
//       <>
//         {/*<!-- Categories in DB -->*/}
//         <div className="col-lg-6 mb-4">
//           <div className="card shadow mb-4">
//             <div className="card-header py-3">
//               <h6 onMouseOver={this.onMouseOver} className="m-0 font-weight-bold text-gray-800" id="genero">
//                 Genres in Data Base
//               </h6>
//             </div>
//             <div className="card-body">
//               <div className="row">
//                 {this.state.genresList.map((genre, index) => {
//                   return <Genre {...genre} key={index} />;
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }
// export default GenresInDb;
