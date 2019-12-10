import React from 'react'

const SongDetail = (props) => {
  if(!props.song) return null;
  return (
    <div>
    <h2>{props.song["im:name"].label}</h2>
    <img src={props.song["im:image"][2].label} alt="image" width="25%"/>
    <h3>Artist: {props.song["im:artist"].label}</h3>
    <h4>Genre: {props.song.category.attributes.label}</h4>
    <h5>Price: {props.song["im:price"].label}</h5>
    <audio controls>
    <source src={props.song.link[1].attributes.href} />
    </audio>
    </div>
  )
}

export default SongDetail;
