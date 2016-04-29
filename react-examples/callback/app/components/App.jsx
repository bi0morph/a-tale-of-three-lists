import React from 'react';
import FeedContainer from './FeedContainer.jsx'
import Feed from './Feed'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.sendItem = this.sendItem.bind(this);
    this.state = {
      myItems: []
    }
  }
  sendItem (e) {
    console.log('sendItem');
    const item = {
      text: e.target.innerText,
      id: this.state.myItems.length
    };
    this.setState({
      myItems: [item, ...this.state.myItems]
    });
  }
  render () {
    return (
      <div>
        <h1>A Tale Of Three Lists (Callbacks)</h1>
        
        <FeedContainer id='feed-1' showToggle={true} className='first-list' sendItem={this.sendItem}/>

        <Feed id='my-feed' items={this.state.myItems}/>

        <FeedContainer id='feed-2' showToggle={true} className='second-list' />

      </div>
    );
  }
}

export default App;