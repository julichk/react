import Header from "./containers/Header";
import Banner from "./containers/elements/Banner";
import Section from "./containers/Section";
import Counter from "./containers/Counter";

function App() {
  return (
    <main className="my-main">
      <Header />
      <Banner />
      <Section />
      <Counter/>
    </main>
  );
}

export default App;
