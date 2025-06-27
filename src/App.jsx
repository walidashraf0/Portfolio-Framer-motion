import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import "swiper/css/bundle"

function App() {

  return (
    <>
      <div className="overflow-hidden w-full container mx-auto max-w-7xl">
        <Header />
        <Body />
      </div>
    </>
  );
}

export default App;
