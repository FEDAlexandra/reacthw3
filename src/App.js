import logo from './logo.jpg';
import me from './Me.JPG';
import Component from './components/Component';
import Personal from './components/Personal';
import Time from './components/Time';
import Pet from './components/Pet';
function App() {
  return (
    <div className="App">
          <h1>1)</h1>
         <img src={logo} alt={"logo"}/> 
    <Component name='Infinity War' producer='Ентоні Руссо,Джо Руссо' year='2018' studio='Marvel'/>
    <h1>2)</h1>
    <Personal name='Федотова Олександра Павлівна' number='0933264929' email='oleksandrafedotova@gmail.com' city='Kiev' work='1 site' skills='Javascript, Html, Css, Json, Jquery'/>
    <img src={me} alt={"me"}/> 
    <h1>3)</h1>
    <Time />
    <Pet name='Бурманська кішка' from='Таїланд' id='BUR' weight='	5-6 кг' when='1930'/>
    </div>
  )
}

export default App;
