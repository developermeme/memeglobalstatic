
import './App.css';
import Header from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './component/Body';
import Footer from './component/Footer';
import { OurCoperations } from './component/OurCoperations';
import { OurBrands } from './component/OurBrands';
import { OurPlatForms } from './component/OurPlatForms';
import { Investor } from './component/Investros';
import { Content } from './component/Content';


function App() {
  return (
    <>
    <Header/>
    <Content/>
    <OurPlatForms/>
    <OurBrands/>
    <OurCoperations/>
    <Investor/>
    <Footer/>
    </>
  );
}

export default App;
