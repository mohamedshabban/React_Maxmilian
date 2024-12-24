import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
function App() {
  const [selectedTopic,setSelectedTopicFn]=useState('Please click here!!');
  function handleClick(selectedButton) {
    //selectedButton-> components, jsx, props, state
    setSelectedTopicFn(selectedButton);
    console.log(selectedButton);
  }
  console.log('App renedred executed!!');
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>handleClick('component')} label="Components" />
            <TabButton onSelect={()=>handleClick('jsx')} label="JSX" />
            <TabButton onSelect={()=>handleClick('props')} label="Props" />
            <TabButton onSelect={()=>handleClick('state')} label="State" />
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
