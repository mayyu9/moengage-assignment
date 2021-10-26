import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import HighLights from './HOC/Highlights';
import Buyers from './HOC/Buyers';
import Countries from './HOC/Countries';
import Income from './HOC/Income';

function App() {
  return (
    <div>
      <Layout />
      <div className="row col-12 mt-1">
        <div className="col-6" style={{height: '250px'}}>
          <HighLights />
        </div>
        <div className="col-6">
          <Buyers />
        </div>
      </div>
      <div className="row col-12 mt-1" style={{height: '250px'}}>
        <div className="col-6">
          <Countries />
        </div>
        <div className="col-6">
          <Income />
        </div>
      </div>
    </div>
  );
}

export default App;
