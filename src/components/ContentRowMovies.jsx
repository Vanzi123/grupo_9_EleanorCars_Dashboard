import SmallCard from './SmallCard';
import React, { useEffect, useState } from 'react';




function Component  ()  {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3009/api/users/count')
      .then(response1 => response1.json())
      .then(data1 => {
        setData1({
          color:   "primary",
          titulo: "Total usarios",
          valor: data1.objeto.users,
          icono: "fas fa-film",
      });
        //console.log('data1',data1)
       // return 
      })
      fetch('http://localhost:3009/api/products/count')
      .then(response2 => response2.json())
      .then(data2 => {
        setData2({
          color:   "success",
          titulo: "Total productos",
          valor: data2.products,
          icono: "fas fa-award",
      });

        // Realiza cualquier otro procesamiento necesario con los datos recibidos
       // console.log(data2)
      //  return 
    })
    fetch('http://localhost:3009/api/products/categories')
      .then(response3 => response3.json())
      .then(data3 => {
        setData3({
          color:   "warning",
          titulo: "Total categorias",
          valor: data3.categories,
          icono: "fas fa-user",
      });

        // Realiza cualquier otro procesamiento necesario con los datos recibidos
       // console.log( data3)
        // let data = [data1, data2, data3]
        // console.log(data)
      })

      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }, []);
    
    let data =[data1,data2,data3]
  

  return (
    <>
    
        {/*<!-- Content Row -->*/}
        <div className="row">
        
            {
                data.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
    </>)
};

export default Component;





// let productInDataBase = {
//     color:   "primary",
//     titulo: "Movies in Data Base",
//     valor: 20,
//     icono: "fas fa-film",
// }

// let amount ={
//     color:   "success",
//     titulo: "Total awards",
//     valor: 79,
//     icono: "fas fa-award",
// }

// let user = {
//     color:   "warning",
//     titulo: "Actors quantity",
//     valor: 49,
//     icono: "fas fa-user",
// }

// let cardProps = [productInDataBase,amount,user];

// function ContentRowTop(){
//     return (
//         <>
//             {/*<!-- Content Row -->*/}
//             <div className="row">
//                 {
//                     cardProps.map((producto,index)=>{
//                         return <SmallCard  {...producto}  key= {index}/>
//                     })
//                 }      
//             </div>
//         </>
//     )
// }
//export default ContentRowTop;

