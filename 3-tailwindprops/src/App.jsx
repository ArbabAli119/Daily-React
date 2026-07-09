import "./App.css";
import Card from "./Components/Card";
import Day1 from "./assets/Day1.png";
import Day2 from "./assets/Day2.png";
import Day3 from "./assets/Day3.png";
import Day4 from "./assets/Day4.png";



function App() {
  
  return (
    <>
   <h1 className="text-5xl font-bold text-center text-black mt-8 mb-10">
  Arbab Glimps
</h1>
    <div className="grid grid-cols-4 gap-5">
      <Card
        username="Hogwart Letter"
        image={Day1}
        btnText="Click ME"
        aboutMe="hii, I'm Arbab Ali I Am a Software Developer And Currently I am Working With The Project Named As The Tasty Bowl"
      />
      <Card
        username="Me & Hermoine"
         image={Day2}
        btnText="Visit ME"
        aboutMe=" The tasty Bowl is One Of the Best Food Ordering Website Develop By Mr Arbab Ali In This App We Deliverd All Categries of Food "
      />
       <Card
        username="Its Flying Time"
         image={Day3}
        btnText="Visit ME"
        aboutMe=" The tasty Bowl is One Of the Best Food Ordering Website Develop By Mr Arbab Ali In This App We Deliverd All Categries of Food "
      />
       <Card
        username="First Fight"
         image={Day4}
        btnText="Visit ME"
        aboutMe=" The tasty Bowl is One Of the Best Food Ordering Website Develop By Mr Arbab Ali In This App We Deliverd All Categries of Food "
      />
      <Card
        username="Hogwart Letter"
        image={Day1}
        btnText="Click ME"
        aboutMe="offer letter mil gya"
      />
      <Card
        username="Me & Hermoine"
         image={Day2}
        btnText="Visit ME"
        aboutMe="First Meet"
      />
       <Card
        username="Its Flying Time"
         image={Day3}
        btnText="Visit ME"
        aboutMe=" When At the Time Of Flying "
      />
       <Card
        username="First Fight"
         image={Day4}
        btnText="Visit ME"
        aboutMe="First Fight in Hogwarts, "
      />
    </div>
    </>
  );
}

export default App;
