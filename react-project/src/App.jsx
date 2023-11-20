import Card from "./Card.jsx";

import "./App.css";
import CardDynamic from "./Components/CardDynamic.jsx";

function App() {
  return (
    <>
      <Card />
      <CardDynamic
        title="Card vol.2"
        desc="This is in fact also a card"
        link="panska.cz"
      />
      <CardDynamic
        title="Card vol.3"
        desc="A card"
        link="spsejecna.cz"
      />
      <CardDynamic
        title="Card vol.4"
        desc="Is this a card?"
        link="gymp-kladno.cz"
      />
      <CardDynamic
        title="Card vol.5"
        desc="This might be a card"
        link="I dont know any other noteworthy schools"
      />
    </>
  );
}

export default App;
