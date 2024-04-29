import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imgSrc: 'https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/272117744_1081793039246179_133750186441236762_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=woqNJwYdx6UAb59d0ZB&_nc_ht=scontent.ftun1-2.fna&oh=00_AfBFg2RX5SkGB_cZLuMVUJvuZ634WoArC3BlsurF8piBEg&oe=6634C81E',
        profession: 'Software Engineer'
      },
      show: false,
      elapsedTime: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateElapsedTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateElapsedTime = () => {
    this.setState(prevState => ({
      elapsedTime: prevState.elapsedTime + 1
    }));
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, elapsedTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        <p>Time elapsed since mount: {elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;

