import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {


  state = {
    tag: <Profile />
  }

  setTag = (tag) => {

    switch(tag) {
      
      case "profile":
        this.setState({
          tag: <Profile/>
        })
        break;

      case "photo":
        this.setState({
          tag: <Photos/>
        })
        break;
      case "cocktail":
        this.setState({
          tag: <Cocktails/>
        })
        break;
      case "pokemon":
        this.setState({
          tag: <Pokemon/>
        })
        break;

      default:
        break;
    }

  }

 

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    
    return (
      <div>
        <MenuBar setTag={this.setTag} />
        {this.state.tag}
      </div>
    )
  }

}

export default MainBox
