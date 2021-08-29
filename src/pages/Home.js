import React , {useState} from 'react';
import MainPageLayout from '../components/MainPageLayout';
import {apiGet} from "../misc/config";

const Home = () => {
 const [input, setInput] = useState('');
const [results , setResults] = useState(null);
const [searchOption , setSearchOption] = useState('shows');


const isShowsSearch = searchOption === 'shows' ;

 const onSearch = () => {
  apiGet(`search/${searchOption}?q=${input}`).then(result => {
    setResults(result);
  });
 };


 const onInputChange = ev => {
    setInput(ev.target.value);
 }


 const onKeyDown = ev => {
   if(ev.keyCode === 13){
    onSearch();
   }
 }

 const onRadioChange = ev => {
   setSearchOption(ev.target.value);
 }
 const renderResults = () => {
   if(results && results.length === 0){
    return <div>No results</div>
   }
   if(results && results.length > 0){
      return results[0].show ? 
      results.map(item=> (
        <div key={item.show.id}>{item.show.name}</div>
      ))
      :
      results.map(item=> (
        <div key={item.person.id}>{item.person.name}</div>
      ))
   }

   return null;
 }

  return (
    <MainPageLayout>
      <input 
      type='text'
      placeholder = "Search for something"
      onChange={onInputChange} onKeyDown={onKeyDown} value={input}
       />

     <div>
       <label htmlFor="shows-search">
         Shows
       <input type="radio" id="shows-search" 
       onChange={onRadioChange}
       checked={isShowsSearch}
       value="shows" 
       />
       </label>
     
       <label htmlFor="actors-search">
         Actors
       <input type="radio" id="actors-search" 
       onChange={onRadioChange}
       checked={!isShowsSearch}
       value="people" 
       />
       </label>
     </div>
     
      <button type="button" onClick={onSearch}>Search</button>
      {renderResults()}
    </MainPageLayout>
  )
}

export default Home;