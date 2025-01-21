import logo from './logo.svg';
import './App.css';
import Alert from "./components/Alert";
import Student from "./components/Student";
import {Component} from "react";

// function App() {
//   return (
//     // <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại."/>
//       <Student/>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    }
  }

  closeContent = () => {
    this.setState({
      isExpanded: false,
    })
  }

  openContent = () => {
      this.setState({
          isExpanded: true,
      })
  }

  render() {
    if (this.state.isExpanded) {
      return (
          <div>
            <div className="title">
              <h1>Conditional Rendering</h1>
            </div>
            <button onClick={this.closeContent}>Dong gioi thieu</button>
            <h2>Gioi thieu</h2>
            <p>
              Trong ReactJS, đôi khi bạn có một số component và tùy thuộc vào từng điều kiện ví dụ như trạng thái của state, props,... mà bạn muốn hiển thị một hoặc một số component nào đó. Khi đó bạn có thể sử dụng Conditional rendering để render ra component mà bạn mong muốn.
            </p>
          </div>
      );
    }
    return (
        <div>
            <div className="title">
                <h1>Conditional Rendering</h1>
            </div>
            <button onClick={this.openContent}>Xem gioi thieu</button>
        </div>
    );
  }
}

export default App;
