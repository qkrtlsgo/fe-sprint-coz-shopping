import Header from "../components/Header";
import ShoppingList from '../components/ShoppingList';
import BookMarkList from '../components/BookMarkList';
import Footer from "../components/Footer";

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