import logo from './logo.svg';
import './App.css';
import WelcometoRedux from './WelcometoRedux';

function App() {
  return (
    <div className="container">
      <h1>Welcone to Redux</h1>
      <div className="row">
        <div className="col-12">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Username:
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
              CourseName:
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="CourseName"
              aria-label="CourseName"
              aria-describedby="basic-addon2"
            />
          </div>
        </div>
        <div>
          <WelcometoRedux></WelcometoRedux>
        </div>
      </div>
      </div>
  );
}
 
export default App;
