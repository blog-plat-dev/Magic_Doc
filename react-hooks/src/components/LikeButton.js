import React ,{useState} from 'react'
const LikeButton = ()=>{
  //  const [like,setLike] = useState(0)
    const [like,setLike] = useState(0)
    const [obj,setObj] = useState({like:0,on:true})
    const [on,setOn] = useState(true)
    return (
    <>
    <button onClick={()=>{setObj({like:obj.like+1,on:obj.on})}}>{obj.like}👍</button>
    <button onClick={()=>{setObj({on:!obj.on,like:obj.like})}}>{obj.on?'On':'Off'}</button>
    </>
    )
}
export  default LikeButton
