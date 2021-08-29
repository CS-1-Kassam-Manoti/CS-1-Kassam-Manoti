import  {useState, useEffect} from 'react';

function Search(props) {


const [value, setValue]= useState('');

const [result, setResult] = useState([]);

useEffect(() => {

if(value.length > 0) {

fetch('https://reactblog-d33f3-default-rtdb.firebaseio.com/blogs.json').then(

response => response.json()

).then(responseData => {

setResult([]);

let searchQuery=value.toLowerCase();

for(const key in responseData) {

let reactblog = responseData[key].heading.toLowerCase();

if(reactblog.slice(0, searchQuery.length).indexOf(searchQuery) != -1) {

setResult (prevResult => {

return [...prevResult, responseData[key].heading]

});
}

}

}).catch(error => {

console.log(error);

})

}else{

  setResult([]);

     }

}, [value])


return (

<div>

<p className="titleText">Fruit Search</p>

<input type="text"

className="searchBar"

onChange={(event) =>setValue(event.target.value)}

value={value}
/>

<div className="searchBack">

{result.map((result, index) =>
 ( <a href="#" key={index}>

<div className="searchEntry">

{result}

</div>

</a>
))}

</div>

</div>
);
}

export default Search;