// globals ItemsText
import React from 'react';
import Feed from './Feed.jsx';

class FeedContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      generating: false,
      items: [],
      nextID: 0
    };

    this.toggle = this.toggle.bind(this);
    this.onClickItem = this.onClickItem.bind(this);
  }
  onClickItem (e) {
    this.props.sendItem(e);
  }
  toggle (type) {
    let value;
    switch (type) {
      case 'pause':
        value = true;
        break;
      case 'pause':
        value = false;
        break;
      default:
        value = !this.state.generating;
    }

    this.setState({
      generating: value
    }, () => this.startGenerating());

  }
  generate () {
    const item = {
      text: ItemsText.more(),
      id: this.state.nextID };
    this.setState({
      items: [item, ...this.state.items ],
      nextID: item.id + 1
    });
  }
  startGenerating () {
    if (this.state.generating) {
      this.generate();
      setTimeout(() => {
        this.startGenerating();
      }, 1000);
    }
  }
  componentDidMount () {
    if (this.props.showToggle) {
      this.toggle();
    }

    this.startGenerating();
  }
  componentWillUnmount () {
    this.toggle('pause');
  }
  render () {
    const {showToggle, id, className} = this.props;
    const {items, generating} = this.state;
    return (
      <Feed showToggle={showToggle} id={id}
            toggleClick={this.toggle} toggleText={generating ? 'Pause' : 'Resume'}
            className={className} items={items} onClickItem={this.onClickItem}/>
    );  
  }
}

const {bool, string} = React.PropTypes;

FeedContainer.propTypes = {
  showToggle: bool,
  className: string,
  id: string
};

export default FeedContainer;