import { Footer, Header } from "./components/molecules";
import { ResultView } from "./views";

function App() {
  return (
    <div className="container mx-auto lg:px-20">
      <Header />
      <ResultView />
      <Footer />
    </div>
  );
}

export default App;
