import  { Component } from 'react';
import {
 
  Link,
} from "react-router-dom";

import { ImageListItem, Typography,Rating} from '@mui/material';
import './Details.css';
import '../../common/moviesData'
import moviesData from '../../common/moviesData';
import ReactPlayer from 'react-player';






class Details extends Component {
  
    render() { 
        return ( <div>
          
            <div className="backButton">
         
            <Link to="/" className="backButtonLink"> <Typography variant="button" >
                &lt; Back to Home
            </Typography></Link>
           
          </div>
            <div className="flexContainer">
            <div className="leftDiv">
            
            {moviesData.slice(2, 3).map((item) => (
     
    <ImageListItem key={item.id} className="rleasedMovieList">
     
     <Link to="/details"  >          <img style={{height:350}}
                 src={`${item.poster_url}?w=248&fit=crop&auto=format`}
                 srcSet={`${item.poster_url}?w=248&fit=crop&auto=format`}
                 alt={item.title}
                 
               /> </Link>  
            
              
             </ImageListItem> 
             ))} 
           
                </div>
            <div className="midDiv">
              
            {moviesData.slice(2, 3).map((item) => (
     
     <><Typography key={item.id} variant="h2">{item.title}</Typography>
     <Typography variant="p">Genre:{item.genres}</Typography><br></br>
     <Typography variant="p">Duration:{item.duration}</Typography><br></br>
     <Typography variant="p">Release Date:{item.release_date}</Typography><br></br>
     <Typography variant="p">Rating:{item.critics_rating}</Typography><br></br>
     <Typography variant="p">Plot:<a href={item.wiki_url}>(Wiki link)</a>{item.storyline}</Typography><br></br>
     <Typography variant="p">Trailer:</Typography>
     <ReactPlayer url={item.trailer_url} />
     </>
      
              
         
             ))} 
            </div>
            <div className="rightDiv">
                           
            <Typography variant="p"><strong>Rate this movie:</strong></Typography><br></br>
            <Rating name="no-value" id="starRating" value={null} /><br></br>
            <Typography variant="p"><strong>Artists:</strong></Typography><br></br>
          
             {
               moviesData.map((artist)=>{
               return (<p>{}</p>);
               })



             }
           
           
  
            </div>
            </div>
        </div> );
    }
}
 
export default Details;
