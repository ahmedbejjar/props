import logo from './logo.svg';
import './App.css';
import Productlist from './Components/Productlist';

function App() {
  const data = [
    {
      id: Math.random(),
      name: "cristiano",
      team:"real madrid",
      pic: "https://i.pinimg.com/1200x/18/3d/61/183d61846a7dca471b7a79ba2c02db78.jpg",
      nationality :"Portugaise",
      age:"38",
    },
    {
      id: Math.random(),
      name: "messi",
      team:"Barça",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA55hZLyj7KpoqyosmOtEKD1ZH5XcFplmJkA&usqp=CAU",
      nationality :"Argentine",
      age:"30",
    },
    {
      id: Math.random(),
      name: "benzema ",
      team:"real madrid",
      pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karim_Benzema_wearing_Real_Madrid_home_kit_2021-2022.jpg/800px-Karim_Benzema_wearing_Real_Madrid_home_kit_2021-2022.jpg",
      nationality :"French",
      age:"35",
    },
   
  ];
  return (
    <div className="App">
       <Productlist  list={data}   />
     
    </div>
  );
}

export default App;
