import ShoppingItem from "./ShoppingItem";

function BookMarkList( {allData} ) {
  if(allData.length === 0){
    return null;
} else {
    return (
    <div className="shop__container">
        <div className="shopping_name">북마크 리스트</div>
        {(allData.slice(5, 9)).map((item) => (
        <ShoppingItem item={item} />
        ))}
    </div>
    )
}
};
  
export default BookMarkList;