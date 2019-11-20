import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    display: <Profile />
  }

  changeState = thingToDisplay => {
    if(thingToDisplay === "profile"){
      this.setState({
        display: <Profile />
      })
    }else if(thingToDisplay === "photo"){
      this.setState({
        display: <Photos />
      })
    }else if(thingToDisplay === "cocktail"){
      this.setState({
        display: <Cocktails />
      })
    }else if(thingToDisplay === "pokemon"){
      this.setState({
        display: <Pokemon />
      })
    }
  }

  render() {
    return (
      <div>
        <MenuBar changeState={this.changeState}/>
        {this.state.display}
      </div>
    )
  }

}

export default MainBox
