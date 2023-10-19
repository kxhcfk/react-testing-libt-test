import './App.css';
import {useState} from "react";

function App() {
    const [clicked, setClicked] = useState(false);
    const [value, setValue] = useState('');

    const toggle = () => setClicked(!clicked);

    const change = (e) => setValue(e.target.value);

    return (
        <div className="App">
            <div style={{color: 'red'}}>data</div>
            <h1>test</h1>
            <button>click</button>
            <input placeholder="value" value={value} onChange={change} type="text"/>
            <div data-testid="value-elem">{value}</div>
            <button data-testid="toggle-btn" onClick={toggle}>toggle</button>
            {clicked ? <div data-testid="toggle-elem">toggle-elem</div> : null}
        </div>
    );
}

export default App;
