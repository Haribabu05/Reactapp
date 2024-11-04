//importing component from a js file
import Content from './contents.js';
import Header from './header.js'
import logo from './logo.svg';
import Footer from './footer.js';
import './App.css'
import './index.css'
function App() {
 try{ 
  return (
    <div className='App'>
    <Header title="Haribabu" />
   <Content />
   <Footer />
  </div>
  );
}
catch(err)
{
  console.error(err)
}
}

export default App;
