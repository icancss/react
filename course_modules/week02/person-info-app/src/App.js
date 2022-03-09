/**ANALYSIS
 * 1. create-react-app person-info-app
 * 2. create components: PersonList, Person, Children, Friends 
 * 3. import them into App.js.
 * 4. import data/foreigners.json into App.js 
 * 5. use map to get each person's info
 * 6. send the data as props to PersonList.js
 * 7. send the manipulated data as props to Person.js, Children.js and Friends.js
 * 8. get array items by using map method at Children.js and Friends.js
 * 9. give class names to JSX elements and use them at App.css to design UI 
 * 10. npm start
 */

import './App.css';
import PersonList from './components/PersonList/PersonList';
import foreigners from './data/foreigners.json'

function App() {
  
  return (
    <div className="App">
    {/* use map to get each person's info */}
    {
      foreigners.map((person) => (

        <PersonList key={person.id} personInfoList = {person}/>
      
      ))}
      
    </div>
  );
}

export default App;
