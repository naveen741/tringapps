import './Content.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import {changeName} from '../app/changerSlice';
import { FormControl,FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material';
export default function Content(){
    const details=useSelector((state)=>state.changer.detail);
    var i=details.length;
    const [detail, setDetail]=useState({
        id: i,
        Name: "",
        Description:""
    });
    const dispatch=useDispatch();
    const onUserSubmit=(event)=>{
        event.preventDefault();
        dispatch(changeName({detail}));
    };
    return(
        <div className="content">
            <h2>Contents</h2>
                
            
            <form className='myform'  onSubmit={onUserSubmit} >
            <FormControl>
            <br/>
                <TextField
                    required
                    id="ProjectName"
                    label="Project Name"
                    placeholder='Enter the Project Name'
                    onChange={(e)=>{setDetail(previousState=>{return{...previousState,id: i+1 ,Name: e.target.value }});}}
                /><br/>
                
                <TextField
                    id="description"
                    label="Project Description"
                    multiline
                    rows={4}
                    onChange={(e)=>{ setDetail(previousState=>{return{...previousState,Description: e.target.value }});}}
                    required
                    placeholder='Enter the Project Description'
                /><br/>
                <FormLabel id="projectType">Project Type</FormLabel>
                <RadioGroup
                    aria-labelledby="projectType"
                    name="domain" >
                    <FormControlLabel  value="Android" control={<Radio required/>} label="Android" />
                    <FormControlLabel value="IOS" control={<Radio required/>} label="IOS" />
                </RadioGroup>
                <br/>
                <Button variant='contained' type='submit'>Submit</Button>
            </FormControl>
                
                
            </form>
        </div>
    );
}