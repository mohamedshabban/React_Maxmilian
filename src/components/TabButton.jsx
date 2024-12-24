export default function TabButton({ onSelect, label }) {
  console.log("TabButton rendered executed");
  return (
    <li>
      <button onClick={onSelect}>{label}</button>
    </li>
  );
}
