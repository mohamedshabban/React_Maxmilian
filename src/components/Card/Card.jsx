import './Card.css'
export default function Card({ name, children }) {
  return (
    <article className="card">
      <h2>{name}</h2>
      {children}
    </article>
  );
}
/*
import Card from './components/Card/Card.jsx';
<Card name={CardArr[0].name}>
<p>
    {CardArr[0].description}
  </p>
  <p>
    <a href={CardArr[0].mail}>{CardArr[0].title}</a>
  </p>
</Card>
<Card name={CardArr[1].name}>
  <p>
    {CardArr[1].description}
  </p>
  <p>
    <a href={CardArr[1].mail}>{CardArr[1].title}</a>
  </p>
</Card> 
*/