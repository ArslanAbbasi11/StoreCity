import React , { useState,useEffect } from 'react';
import './Login.css';
import { useDispatch ,useSelector} from 'react-redux';
import allActions from '../../Redux/Actions';
import dataFile from '../Login/data.txt';
import { useHistory } from 'react-router';

const Login=()=>{
   
   
    var [isMatched,setMatch]=useState(false);
    var loginCheck=useSelector(state => state.Login.login);
    const [input,setInput]=useState({
        email:"",
        pass:""
    });
    const dispatch=useDispatch();
    var history=useHistory();
   useEffect(()=>{
       data();
   },[input])
    const data=async ()=>{
        
        var url="../Login/data.txt)";
    const res=await fetch(dataFile);
  
    const user=await res.json();

        for(let i=0;i<user.length;i++){
                if(user[i].password==input.pass && user[i].username==input.email){
                    console.log("login pass :"+user[i].password);
                setMatch(isMatched=true);}
                else  setMatch(isMatched=false);
          }
          
   

    }
    const login=()=>{
        console.log(isMatched +" login");
        if(isMatched)
            dispatch(allActions.Login(isMatched))
        else dispatch(allActions.Login(isMatched))
    }

    
    const checkLogin=()=>{
      
        if(loginCheck==true){
   history.push('/home')
        }
}
useEffect(()=>(
 checkLogin()
))

    return (
        <div className="form-wrapper">
      
            <h2>Login</h2>
           <form onSubmit={(e)=>(e.preventDefault())}>

                    <input type="email" placeholder="Email..." value={input.email}
                    onChange={(e)=>setInput({...input,email:e.target.value})}
                    />
                     <input type="password" placeholder="Password..." value={input.pass}
                    onChange={(e)=>setInput({...input,pass:e.target.value})}
                    />
                    <input type="submit" value="Login" onClick={()=>login()}/>
        </form>
        </div>
    )
}

export default Login
