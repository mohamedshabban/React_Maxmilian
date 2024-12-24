import "./CoreConcepts.css";
export default function CoreConcepts({ title, description, image }) {
  console.log("CoreConcepts rendered executed");
  return (
    <li>
      <img src={image} alt=""></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
