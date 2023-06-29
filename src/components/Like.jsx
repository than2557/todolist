import React,{useState} from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
function Like() {
    const [like,setLike] =  useState(false);
    const toggleLike = () => {
        setLike((check)=> !check);
    }
  return (
    <IconButton  onClick={toggleLike}>
    {like ? <FavoriteIcon style={{color:'red'}}/> : <FavoriteBorderIcon />}
   </IconButton>
  )
}

export default Like