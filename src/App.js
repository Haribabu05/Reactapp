//importing component from a js file
import Content from './contents.js';
import Header from './header.js'
import logo from './logo.svg';
import Subheader from './footer.js';
import './App.css'
import './index.css'
function App() {
 try{ 
  return (
    <div className='App'>
    <Header />
    <Subheader />
   <Content />
  </div>
  );
}
catch(err)
{
  console.error(err)
}
}

export default App;
