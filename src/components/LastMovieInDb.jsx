import imagenFondo from '../assets/images/mandalorian.jpg';
import { Component, useEffect, useState } from "react";

function LastMovieInDb() {

    const [lastMovie, setLastMovie] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3009/api/products/last")
      .then(respuesta => respuesta.json())
      .then(lastMovie => {
        console.log('lastMovie:',lastMovie)
       setLastMovie(
        {
            valor: lastMovie.last.equipment,
            valor2: lastMovie.last.img
        }
      );
     // console.log('lastMovieEND:',lastMovie)
    })
    
    .catch((error) => console.log(error));
    
},[]);

//let descripcion = lastMovie.valor
console.log('lastMovie:',lastMovie)
    return(
        <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="text-center m-0 font-weight-bold text-gray-800">Ultimo vehiculo creado</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={lastMovie.valor2} />
                        </div>
                        <p>{lastMovie.valor}</p>
                        {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a> */}
                    </div>
                </div>
        </div>
    )
}

export default LastMovieInDb