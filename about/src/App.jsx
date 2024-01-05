import "./App.css";
import image from "./my-Image2/image.jpg";

function App() {
  const sami = "5TH YEAR GDSC AASTU MEMBER";

  return (
    <>
      <div className="container">
        <img src={image} alt="" />
        <h1>{sami}</h1>
      </div>
    </>
  );
}

export default App;
