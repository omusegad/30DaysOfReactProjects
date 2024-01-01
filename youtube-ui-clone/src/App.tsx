
import CategoryPillars from "./components/CategoryPillars";
import Header from "./layouts/Header";

function App() {
  return (
    <div className="flex flex-col h-full">
        <Header />  
        <div className="flex flex-row mx-auto w-full px-10 min-h-screen">
           <div className=" flex-grow w-inherent min-h-screen overflow-y-auto mr-8  bg-gray-100">
             <ul className="px-10">
              <li className="mt-6"> <a href="">Home</a> </li>
              <li className="mt-6"> <a href="">Getting started</a> </li>
              <li className="mt-6"> <a href="">What is Algolia?</a> </li>
              <li className="mt-6"> <a href="">What is Algolia?</a> </li>
              <li className="mt-6"> <a href="">Sending and managing data</a> </li>
              <li className="mt-6"> <a href="">Managing results</a> </li>
              <li className="mt-6"> <a href="">Personalization</a> </li>
              <li className="mt-6"> <a href="">Security</a> </li>
              <li className="mt-6"> <a href="">Security</a> </li>
              <li className="mt-6"> <a href="">Algolia Recommend</a> </li>
              <li className="mt-6"> <a href="">Scaling</a> </li>
              <li className="mt-6"> <a href="">Solutions</a> </li>
              <li className="mt-6"> <a href="">Distributed Search Network (DSN)</a> </li>
              <li className="mt-6"> <a href="">Managing results</a> </li>
              <li className="mt-6"> <a href="">Personalization</a> </li>
              <li className="mt-6"> <a href="">Security</a> </li>
              <li className="mt-6"> <a href="">Security</a> </li>
              <li className="mt-6"> <a href="">Algolia Recommend</a> </li>
              <li className="mt-6"> <a href="">Scaling</a> </li>
              <li className="mt-6"> <a href="">Solutions</a> </li>
              <li className="mt-6"> <a href="">Distributed Search Network (DSN)</a> </li>
              </ul>
           </div>
            <div className="top-0 z-10 bg-white stick">
              <CategoryPillars/>
            </div>
        </div>
    </div>
  );
}

export default App;
