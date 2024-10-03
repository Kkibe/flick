import BusinessPost from "./components/business/BusinessPost";
import Loader from "./components/loader/Loader";
import Nav from "./components/Nav/Nav";
import Business from "./pages/business/Business";
import Tech from "./pages/tech/Tech";

//import Blogs from './blogs/blogs';
//import Business from './blogs/co/business/Business';
//import Tech from './blogs/pages/tech/Tech';

function App() {
  return (
    <div className="App">
       <Nav />
       <Business />
    </div>
  );
}

export default App;
