import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import './ImgMediaCard.css'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {deleteName} from '../app/changerSlice';
import Cards from './Cards';
const options = [
  'edit',
  'delete'
];

const ITEM_HEIGHT = 20;
export default function ImgMediaCard() {
  const details=useSelector((state)=>state.changer.detail);
  let i=0;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [idval,setidval]=React.useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const dispatch=useDispatch();
  const handleClose = (detail, option) => {
    if(option==options[1]){
      // const prodetails= document.querySelector('.Cards');
      // prodetails.removeChild(document.getElementById(id));
      console.log(details.indexOf(detail))
      dispatch(deleteName(details.indexOf(detail)))
    }
    
    setAnchorEl(null);
  };
  return (
    <div className='Cards'>
      {
      details.map((detail)=>(
          <Cards details={detail}/>
      ))}
    
    </div>
  );
}