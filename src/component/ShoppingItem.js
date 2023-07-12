function ShoppingItem( {item} ) {
  console.log(item);
  return(
    <div className="image__box" style={{width: "300px", height: "300px"}}>
      <img className="shopping__img" src={item.image_url || item.brand_image_url} />
      <div>{item.title || item.brand_name}</div>
    </div>
  );
};
  
export default ShoppingItem;