import React from 'react'


const MenuBar = (props) => {

  sendDetailsToDisplay = (e) => {
    e.stopPropagation()
    this.props.setDetailsToDisplay(e.target.id)
    e.target.parentNode.querySelector('.active').className = 'item'
    e.target.className = 'item active'
  }

  render() {
    return (
      < div className="ui four item menu" >
        <a onClick={this.sendDetailsToDisplay} className="item active" id="profile">
          <i className="user large icon" id="profile" />
        </a>

        <a onClick={this.sendDetailsToDisplay} className="item" id="photo">
          <i className="photo large icon" id="photo" />
        </a>

        <a onClick={this.sendDetailsToDisplay} className="item" id="cocktail">
          <i className="cocktail large icon" id="cocktail" />
        </a>

        <a onClick={this.sendDetailsToDisplay} className="item" id="pokemon">
          <i className=" themeisle large icon" id="pokemon" />
        </a>
      </div >)
  }
}


export default MenuBar
