import './App.css';
import Header from './Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Body from './components/Body';
import Footer from './Footer';

function App() {
  return (
    <>

      <div className="jumbotron jumbotron-fluid bg-info text-white text-center">
        <Header />
        
      </div>
      <Body />
      <Footer />
    </>
  );
}

export default App;
