import React, {useState} from 'react';
import Item from "./Item";

function App() {
  const [text, setText] = useState("Discount not applied");

  function change(){
      setText("Discount applied")
  }

  return (
    <div className="App">
      <h1>Welcome to the Shoe shop!</h1>
      <form action="/server" method ="post">
        <div className="row">

          <div className="col-lg-4">
            <div className ="card">
              <h1>Heels ($40)</h1>
              <img alt ="" src="https://media.missguided.com/i/missguided/F1609479_01"/>
              <input id ="item1" type="text" name="item1" placeholder=" Enter # Items"></input>
            </div>
          </div>
          <Item
            itemNum = "item2"
            title = "Sneakers ($30)"
            url ="https://s.marketwatch.com/public/resources/images/MW-GV255_1c5f4b_ZH_20181030162943.jpg"
          />
          <Item
          itemNum = "item3"
          title = "Boots ($50)"
          url = "https://i1.adis.ws/i/drmartens/13512006.80.jpg?$iconmobile$"
          />
        </div>
      
        <br/>
        <h3>Use code 'yes' for 50% off!</h3>
        <input className ="promo" type="text" name="promo" placeholder=" Enter promocode"></input>
        <br/>
        <h1>Press submit to see your total on the next page! </h1>
        <div>

        {/* <h1>{text}</h1>
        <p onClick={change}>Apply discount</p> */}
        <h3>Would you like to apply tax?</h3>
        <input type ="checkbox" name ="tax"></input>
        </div>
        
        <button className="submit-btn btn btn-outline-dark btn-lg" type="submit">Submit</button>
      </form>

    </div>
  );
}

export default App;
