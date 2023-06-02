import React, {useState} from 'react';
import './App.css';
import Fruit from "./components/Fruit";

function App() {
    const [strawberries, setStrawberries] = useState(0);
    const [bananas, setBananas] = useState(0);
    const [apples, setApples] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    const resetCounter = () => {
        setStrawberries(0);
        setBananas(0);
        setApples(0);
        setKiwis(0);
    };

    const [firstNameValue, setFirstNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");
    const [ageValue, setAgeValue] = useState(0);
    const [postalCodeValue, setPostalCodeValue] = useState("");
    const [deliveryValue, setDeliveryValue] = useState("iedere week");
    const [periodValue, setPeriodValue] = useState('overdag');
    const [commentValue, setCommentValue] = useState('');
    const [agreementValue, setAgreementValue] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(strawberries, bananas, apples, kiwis, firstNameValue, lastNameValue, ageValue, postalCodeValue, deliveryValue, periodValue, commentValue, agreementValue);
    }


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
            <button
                type="button"
                className="reset-button"
                onClick={resetCounter}
            >Reset</button>
        </main>

        <section className="form-section">
            <h3>Laat je gegevens achter om te bestellen:</h3>

            <form onSubmit={handleSubmit}>
            <div className="firstNameField">
                <label htmlFor="form-first-name">Voornaam
                    <input
                        type="text"
                        id="form-first-name"
                        name="first-name-field"
                        value={firstNameValue}
                        onChange={(e) => setFirstNameValue(e.target.value)}
                    />
                </label>
            </div>
            <div className="lastNameField">
                <label htmlFor="form-last-name">Achternaam
                    <input
                        type="text"
                        id="form-last-name"
                        name="last-name-field"
                        value={lastNameValue}
                        onChange={(e) => setLastNameValue(e.target.value)}
                    />
                </label>
            </div>
            <div className="ageField">
                <label htmlFor="form-age">Leeftijd
                    <input
                        type="number"
                        id="form-age"
                        name="age-field"
                        value={ageValue}
                        onChange={(e) => setAgeValue(e.target.value)}
                    />
                </label>
            </div>
            <div className="postalCodeField">
                <label htmlFor="form-postal-code">Postcode
                    <input
                        type="text"
                        id="form-postal-code"
                        name="postal-code-field"
                        value={postalCodeValue}
                        onChange={(e) => setPostalCodeValue(e.target.value)}
                    />
                </label>
            </div>
            <div className="deliverFrequency">
                <label htmlFor="form-delivery">Bezorgfrequentie
                    <select
                        id="form-delivery"
                        name="delivery-field"
                        value={deliveryValue}
                        onChange={(e) => setDeliveryValue(e.target.value)}
                    >
                        <option value="every-week">Iedere week</option>
                        <option value="every-two-weeks">Om de week</option>
                        <option value="every-month">Iedere maand</option>
                    </select>
                </label>
            </div>
            <div className="period">
                <label htmlFor="form-period">Tijdvak:</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="overdag"
                                checked={periodValue === 'overdag'}
                                onChange={(e) => setPeriodValue(e.target.value)}
                            />Overdag
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="'s avonds"
                                checked={periodValue === "'s avonds"}
                                onChange={(e) => setPeriodValue(e.target.value)}
                            />'s Avonds
                        </label>
                    </div>
            </div>
            <div className="comment">
                <label>Opmerking:</label>
                <textarea
                    value={commentValue}
                    onChange={(e) => setCommentValue(e.target.value)}
                ></textarea>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={agreementValue}
                        onChange={(e) => setAgreementValue(e.target.checked)}
                        required
                    />
                    Akkoord met de voorwaarden
                </label>
            </div>

            <button className="submit-button" type="submit">Verzend</button>

            </form>
        </section>
    </>
  );
}

export default App;
