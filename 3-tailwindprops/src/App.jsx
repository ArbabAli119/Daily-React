import "./App.css";
import Card from "./Components/Card";
import Day1 from "./assets/Day1.png";
import Day2 from "./assets/Day2.png";
import Day3 from "./assets/Day3.png";
import Day4 from "./assets/Day4.png";

function App() {
  return (
    <div className="min-h-screen bg-black-100 px-4 py-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10">
        Arbab Glimps
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <Card
          username="Hogwart Letter"
          image={Day1}
          btnText="Click ME"
          aboutMe="Hii, I'm Arbab Ali. I am a Software Developer."
        />

        <Card
          username="Me & Hermoine"
          image={Day2}
          btnText="Visit ME"
          aboutMe="The Tasty Bowl is one of the best food ordering websites."
        />

        <Card
          username="Its Flying Time"
          image={Day3}
          btnText="Visit ME"
          aboutMe="Developed by Mr. Arbab Ali. We deliver all categories of food."
        />

        <Card
          username="First Fight"
          image={Day4}
          btnText="Visit ME"
          aboutMe="The Tasty Bowl, Food Lover."
        />

        <Card
          username="Hogwart Letter"
          image={Day1}
          btnText="Click ME"
          aboutMe="Offer Letter Mil Gya."
        />

        <Card
          username="Me & Hermoine"
          image={Day2}
          btnText="Visit ME"
          aboutMe="First Meet."
        />

        <Card
          username="Its Flying Time"
          image={Day3}
          btnText="Visit ME"
          aboutMe="When At The Time Of Flying."
        />

        <Card
          username="First Fight"
          image={Day4}
          btnText="Visit ME"
          aboutMe="First Fight in Hogwarts."
        />
      </div>
    </div>
  );
}

export default App;