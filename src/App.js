
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './Utils/Routing';
import Store from './Utils/Store';


function App() {
    return (
        <Store>
            <Routing />
        </Store>
    );
}

export default App;
