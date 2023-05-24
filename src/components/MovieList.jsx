function MovieList(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.model.brand.name} - {props.model.name}</td>
      <td>{props.year}</td>
      <td>{props.color.name}</td>
      <td className="price">{(props.price).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</td>
    </tr>
  );
}

export default MovieList;
