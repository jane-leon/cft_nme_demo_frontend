import Header from "./Header";
import Footer from "./Footer";
import Teams from "./Teams";
import Schedule from "./Schedule";
import Champion from "./Champion"

function App() {
  return(
    <>
      <Header/>
      <Teams/>
      <Schedule isFive = {true} team = "Clippers" games = {40}/>
      <Schedule isFive = {false} team = "Lakers" games = {20}/>
      <Schedule isFive = {false} team = "Bulls"/>
      <Champion champion = {true} name= "Knicks"/>
      <Footer/>
    
    
    </>
  );
}

export default App