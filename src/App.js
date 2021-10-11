import logo from './logo.svg';
import './App.css';
import { BackTop } from 'antd';
import Header from './components/Header';
import Intro from './components/Intro';
import Content from './components/Content';
import Footer from './components/Footer';


const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#f0161d',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};


function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Content />
      <BackTop>
        <div style={style}>UP</div>
      </BackTop>
    </div>
  );
}



export default App;
