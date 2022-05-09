import './Content.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {changeName, changeAddress} from '../app/changerSlice';
export default function Content(){
    const [userName,setuserName]=useState("");
    const [Address, setAddress]=useState();
    const dispatch=useDispatch();
    const onUserSubmit=(event)=>{
        event.preventDefault();
        dispatch(changeName({userName}));
        dispatch(changeAddress({Address}));
    };
    return(
        <div className="content">
            <h2>Contents</h2>
            <form className='myform' onSubmit={onUserSubmit}>
                <label htmlFor='name'>UserName : </label>
                <input id="name" type="text"  onKeyUp={(e)=>{ setuserName(e.target.value);}} placeholder='Enter UserName' required/>
                <label htmlFor="address">Address : </label>
                <textarea id="address" onKeyUp={(e)=>{setAddress(e.target.value);}} placeholder="your address" required></textarea>
                <input type="submit"/>
            </form>
        </div>
    );
}