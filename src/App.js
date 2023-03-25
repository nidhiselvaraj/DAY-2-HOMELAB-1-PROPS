import './App.css';
import Separate from './Book/Separate';
function App() {
  return (
    <div className="App">
      <Separate bookname="Wings of fire" authorname="AbdulKalam"/>
      <Separate bookname="The chirstmas Pig" authorname="JK Rowling"/>
      <Separate bookname="Sherlock Holmes" authorname="Arthur Canon"/>
      <Separate bookname="Julius Caesar" authorname="William Shakespeare "/>
      <Separate bookname="Wherabouts" authorname="Jumpha Lahiri"/>
    </div>
  );
}

export default App;
