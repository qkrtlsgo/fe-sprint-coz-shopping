import ShoppingItem from "./ShoppingItem";

function ShoppingList( {allData} ) {
    if(allData.length === 0){
        return null;
      }else {
        return(
            <div className="Shop__container">
                <div className="shopping_name">상품 리스트</div>
                {(allData.slice(0, 4)).map((item) => (
                <ShoppingItem item={item} />
                ))}
            </div>
  )
}
};
  
export default ShoppingList;