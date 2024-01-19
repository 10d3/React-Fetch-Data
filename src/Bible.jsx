import {useState, useEffect} from 'react';

export default function Bible(){

  const [bible, setBible] = useState([]);

  useEffect(() =>{
    fetch('http://quotes.rest/bible/verse.json')
    .then(res => res.json())
    .then(data => setBible(data))
    .catch(err => console.log(err))
    console.log(bible)
  }, []);
  return (
    <div>
      <h1></h1>
      <p>This is the Bible page.</p>
    </div>
  );
}