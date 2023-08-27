import Header from './components/Header'
import Banner from './components/Banner'
import Properties from './components/Properties'
import {MyProperties} from './Database/MyProperties'

function App() {
  let allProperties = [];

  return (
    <div className='w-10/12 mx-auto'>
      <Header />
      <Banner />
      <Properties MyProperties={MyProperties}/>

    </div>
  );
}

export default App;
