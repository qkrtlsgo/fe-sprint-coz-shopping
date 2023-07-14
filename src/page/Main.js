import Header from "../component/Header";
import ShoppingList from '../component/ShoppingList';
import BookMarkList from '../component/BookMarkList';
import Footer from "../component/Footer";

function Main( {allData} ) {
    return (
      <>
      <Header />
      <ShoppingList allData={allData} />
      <BookMarkList allData={allData} />
      <Footer />
      </>
    );
  }
  
export default Main;