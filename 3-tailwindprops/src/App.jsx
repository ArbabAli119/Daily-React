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
        username="Code With Arbab"
        image={Day1}
        btnText="Click ME"
        aboutMe="hii, I'm Arbab Ali I Am a Software Developer And Currently I am Working With The Project Named As The Tasty Bowl"
      />
      <Card
        username="The Tasty Bowl"
         image={Day2}
        btnText="Visit ME"
        aboutMe=" The tasty Bowl is One Of the Best Food Ordering Website Develop By Mr Arbab Ali In This App We Deliverd All Categries of Food "
      />
       <Card
        username="The Tasty Bowl"
         image={Day3}
        btnText="Visit ME"
        aboutMe=" The tasty Bowl is One Of the Best Food Ordering Website Develop By Mr Arbab Ali In This App We Deliverd All Categries of Food "
      />
       <Card
        username="The Tasty Bowl"
         image={Day4}
        btnText="Visit ME"
        aboutMe=" The tasty Bowl is One Of the Best Food Ordering Website Develop By Mr Arbab Ali In This App We Deliverd All Categries of Food "
      />
    </div>
    </>
  );
}

export default App;
