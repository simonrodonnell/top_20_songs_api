import React from 'react'
import SongSelector from '../components/SongSelector'
import SongDetail from '../components/SongDetail'

class MusicContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      songs: [],
      currentSong: null
    }
    this.handleSongSelected = this.handleSongSelected.bind(this)
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"

    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({songs: songs.feed.entry}))
    .catch(err => console.error);
  }

  handleSongSelected(index){
    const selectedSong = this.state.songs[index];
    this.setState({currentSong: selectedSong})
  }

  render(){
    return(
      <div>
      <h3>Top 20 Songs</h3>
      <SongSelector songs={this.state.songs} onSongSelected={this.handleSongSelected}/>
      <SongDetail song={this.state.currentSong}/>
      </div>
    )
  }

}

export default MusicContainer
