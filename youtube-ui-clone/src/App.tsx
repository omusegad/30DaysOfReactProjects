
import CategoryPillars from "./components/CategoryPillars";
import Header from "./layouts/Header";

function App() {
  return (
    <div className="flex flex-col h-full">
        <Header />  
        <div className="flex flex-row mx-auto w-full px-10 min-h-screen">
           <div className=" flex-grow w-inherent min-h-screen overflow-y-auto mr-8  bg-gray-100">
             <ul className="px-10">
              <li className="mt-6"> <a href="" className="hover:text-emerald-300">Home</a> </li>
              <li className="mt-6"> <a href="" className="hover:text-emerald-300">Getting started</a> </li>
              <li className="mt-6"> <a href="" className="hover:text-emerald-300">What is Algolia?</a> </li>
              <li className="mt-6"> <a href="" className="hover:text-emerald-300">What is Algolia?</a> </li>
              <li className="mt-6"> <a href="" className="hover:text-emerald-300">Sending and managing data</a> </li>
              <li className="mt-6"> <a href="" className="hover:text-emerald-300">Managing results</a> </li>
              <li className="mt-6"> <a href="" className="hover:text-emerald-300">Personalization</a> </li>
              <li className="mt-6"> <a href="" className="hover:text-emerald-300">Security</a> </li>
              <li className="mt-6"> <a href="" className="hover:text-emerald-300">Security</a> </li>
              <li className="mt-6"> <a href="" className="hover:text-emerald-300">Algolia Recommend</a> </li>
              <li className="mt-6"> <a href="" className="hover:text-emerald-300">Scaling</a> </li>
              <li className="mt-6"> <a href="" className="hover:text-emerald-300">Solutions</a> </li>
              <li className="mt-6"> <a href="" className="hover:text-emerald-300">Distributed Search Network (DSN)</a> </li>
              <li className="mt-6"> <a href="" className="hover:text-emerald-300">Managing results</a> </li>
              <li className="mt-6"> <a href="" className="hover:text-emerald-300">Personalization</a> </li>
              <li className="mt-6"> <a href="" className="hover:text-emerald-300">Security</a> </li>
              <li className="mt-6"> <a href="" className="hover:text-emerald-300">Security</a> </li>
              <li className="mt-6"> <a href="" className="hover:text-emerald-300">Algolia Recommend</a> </li>
              <li className="mt-6"> <a href="" className="hover:text-emerald-300">Scaling</a> </li>
              <li className="mt-6"> <a href="" className="hover:text-emerald-300">Solutions</a> </li>
              <li className="mt-6"> <a href="" className="hover:text-emerald-300">Distributed Search Network (DSN)</a> </li>
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
