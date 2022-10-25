import Profile from '../Profile/Profile.js';
import lImg from '../Images/lion.jpg';
import zImg from '../Images/zebra.jpg'
import cImg from '../Images/cat.jpg';
import eImg from '../Images/elephant.jpg'
import "./app.css";

export default function App() {
  function alertName(nickName,sound) {
    alert(`Hello I'm ${nickName} \n and I ${sound}`);
  }
  return (
    <div className="App">
      <Profile
        fullName="Lion"
        bio="The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India."
        nickName="The king of the jungle"
        sound="Roar"
        image={lImg}
        variant="warning"
        alertName={alertName}
      />
      <Profile
        fullName="Zebra"
        bio="Zebras are African equines with distinctive black-and-white striped coats."
        nickName="ZigZaggy barcoded Mr. Zed"
        sound="Bray"
        image={zImg}
        variant="danger"
        alertName={alertName}
      />
      <Profile
        fullName="Cat"
        bio="The cat (Felis catus) is a domestic species of small carnivorous mammal. And also i'm cute"
        nickName="The king of your house"
        sound="Meow"
        image={cImg}
        variant="primary"
        alertName={alertName}
      />
      <Profile
        fullName="Elephant"
        bio="Elephants are the largest existing land animals."
        nickName="Goliath"
        sound="Trumpet"
        image={eImg}
        variant="success"
        alertName={alertName}
      />
    </div>
    );
}
