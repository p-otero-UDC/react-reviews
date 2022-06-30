import "./styles.css";
import Review from "./Review";

export default function App() {
  return (
    <main>
      <section>
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <div className="container">
          <Review />
        </div>
      </section>
    </main>
  );
}
