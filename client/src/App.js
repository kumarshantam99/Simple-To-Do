
import AppNavbar from './components/AppNavbar'
import List from './components/List'
import ItemModal from './components/ItemModal'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux'
import store from './store'
import './App.css';

import {Container} from 'reactstrap'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <div className="Container">
          <Container >
            <ItemModal />
            <List />
          </Container>

        </div>
        
        

      </div>

    </Provider>
    
  );
}

export default App;
