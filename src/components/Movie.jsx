import { Component, useEffect, useState } from "react";
import MovieList from "./MovieList";

function products () {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3009/api/products/")
    .then(respuesta => respuesta.json())
    .then(product => {
   //   console.log('productos',product.products)
      setProduct(
        product.products
        );
        //console.log('genrelist',genresList)
      })
      .catch((error) => console.log(error));
      
    },[]);
      

    //console.log('datos',product)
 
    return (
      <>
        {/*<!-- PRODUCTS LIST -->*/}
        <h1 className="text-center h3 mb-2 text-gray-800">
          Listado de productos
        </h1>

        {/*<!-- DataTales Example -->*/}
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Marca y Modelo</th>
                    <th>Año</th>
                    <th>Color</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Id</th>
                    <th>Marca y Modelo</th>
                    <th>Año</th>
                    <th>Color</th>
                    <th>Precio</th>
                  </tr>
                </tfoot>
                <tbody>
				{product.map((product, index) => {
                  return <MovieList {...product} key={index} />;
                })}
                  {/* <tr>
                    <td>01</td>
                    <td>ford - mustang</td>
                    <td>20</td>
                    <td>15</td>
                    <td>120</td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td>La caida del halcon negro</td>
                    <td>10</td>
                    <td>18</td>
                    <td>240</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  
}
export default products;
