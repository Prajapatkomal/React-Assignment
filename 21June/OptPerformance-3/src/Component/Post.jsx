import React from 'react';
import { useState } from 'react';

const Post = ({ data }) => {
const [verify,setverify] = useState(false)

const verifyToggle = (ind) => {
  setverify(prev => ({ ...prev, [ind]: !prev[ind] }));
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

  return (<>
    <h1> Posts</h1>
      {data.map((el,ind)=>{
        return <ul key={ind} style={{border:'1px solid' ,backgroundColor: getRandomColor()}}>
       <h3> Title {el.title}</h3>
        <h3>Body: {el.body}</h3>
         <button onClick={()=>verifyToggle(ind)}> {verify[ind] ? 'Verified' : 'Verify'}</button>
         
        </ul>
      })}
      </>
  )
}

export default Post;
