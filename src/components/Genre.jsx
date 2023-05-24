function Genre(props) {
  return (
    <>
   
     
    <div className="col-lg-6 mb-4">
      <div className="card text-white bg-dark shadow">
        <div className="d-flex justify-content-between text-lg">
          <div className="card-body mr-3">{props.tipo}:</div>
          <div className="card-body text-right">{props.productCount}</div>
        </div>
      </div>
    </div>
  



    </>
  );
}

export default Genre;
