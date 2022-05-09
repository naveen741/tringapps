import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {deleteName} from '../app/changerSlice';
const options = [
    'edit',
    'delete'
  ];
  const ITEM_HEIGHT = 20;
 export default function Cards(props){
    const details=useSelector((state)=>state.changer.detail);
    let i=0;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [idval,setidval]=React.useState();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const dispatch=useDispatch();
    const handleClose = ( option) => {
      if(option==options[1]){
        // const prodetails= document.querySelector('.Cards');
        // prodetails.removeChild(document.getElementById(id));
        console.log(details.indexOf(props.detail))
        dispatch(deleteName(details.indexOf(props.detail)))
      }
      
      setAnchorEl(null);
    };
     return(
         <div>
            <Card  key={props.detail.id} id={props.detail.id} className='card' sx={{ maxWidth: 345 }}>
            <div className='icon'>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                },
                }}
            >
                {options.map((option) => (
                <MenuItem key={option} id={option} onClick={()=>handleClose(option)}>
                    {option}
                </MenuItem>
                ))}
            </Menu>
            </div>
            <CardMedia
            component="img"
            alt="project_detail"
            height="140"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_e_KPuJQf1eWoZxtpqNttx3H5Fxuvi1wMmg&usqp=CAU"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.detail.Name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.detail.Description}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
      </div>
     );
 }