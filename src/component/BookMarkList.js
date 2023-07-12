import ShoppingItem from "./ShoppingItem";

function BookMarkList( {allData} ) {
      if(allData.length === 0) {
        return null;
      } else {
        return (
          <div className="Shop__container">
          {(allData.slice(5, 9)).map((item) => (
          <ShoppingItem item={item} />
          ))}
          </div>
        )
      }
};
  
export default BookMarkList;