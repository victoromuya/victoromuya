
import Header from './components/Header.js'
import Card from './components/Card.js'
import Footer from './components/Footer.js'
import data from './data.js'


function App() {
  const items = data.map(function(item){
    return (
      <Card
        key = {item.id}
        item={item}
        />
    )
  })

  return ( 
    <div className="App">
      <Header />
      <div className="app-card">
          {items}
      </div>
      <Footer/>
     </div> 
  );
}

export default App;
