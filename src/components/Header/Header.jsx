import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDesription = ["Fundamental", "Core", "Cruical"];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
  const desc = reactDesription[getRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>-
      <p>
        {desc} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
