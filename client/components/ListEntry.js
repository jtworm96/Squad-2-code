import React from "react";
import axios from "axios";

class ListEntry extends React.Component {
  constructor (props) {
    super (props);
    this.state={}
  }

  render () {
    return (
      <>
        <div id='ListEntry'>List Entry # 1</div>
      </>
    )
  }
}

export default ListEntry;