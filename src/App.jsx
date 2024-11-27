import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx'
import { CORE_CONCEPTS} from './data.js'
import TabButton from './components/TabButton.jsx';
function App() {
  function handleClick(){
    console.log("Hello World, executed!!")
}
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleClick} label='Components' />
            <TabButton onSelect={handleClick} label='JSX' />
            <TabButton onSelect={handleClick} label='Props' />
            <TabButton onSelect={handleClick} label='State' />
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
