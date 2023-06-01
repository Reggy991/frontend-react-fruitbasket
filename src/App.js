import React, {useState} from 'react';
import './App.css';
import Fruit from "./components/Fruit";

function App() {
    const [strawberries, setStrawberries] = useState(0);
    const [bananas, setBananas] = useState(0);
    const [apples, setApples] = useState(0);
    const [kiwis, setKiwis] = useState(0);

  return (
    <>
        <main>
          <h1>Fruitmand bezorgservice</h1>
            <Fruit
                name="🍓 Aardbeien"
                counter={strawberries}
                setCounter={setStrawberries}
            />
            <Fruit
                name="🍌 Bananen"
                counter={bananas}
                setCounter={setBananas}
            />
            <Fruit
                name="🍏 Appels"
                counter={apples}
                setCounter={setApples}
            />
            <Fruit
                name="🥝 Kiwi's"
                counter={kiwis}
                setCounter={setKiwis}
            />
        </main>
    </>
  );
}

export default App;
