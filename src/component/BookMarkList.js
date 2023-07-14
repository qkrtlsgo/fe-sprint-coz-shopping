import ShoppingItem from "./ShoppingItem";

function BookMarkList( {allData} ) {
  if(allData.length === 0){
    return null;
} else {
    return (
    <div className="shopping__container">
        <div className="shopping__name">북마크 리스트</div>
        {(allData.slice(5, 9)).map((item) => (
        <ShoppingItem item={item} />
        ))}
    </div>
    )
}
};

export default BookMarkList;