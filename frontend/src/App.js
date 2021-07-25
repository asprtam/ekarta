import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Character from './Character/Character';
import CharactersMenu from './CharactersMenu/CharactersMenu';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { fullData: [], basicData: [], dummyData: require('./Character/Blank') };
    this.fetchFullData = this.fetchFullData.bind(this);
    this.fetchBasicData = this.fetchBasicData.bind(this);
    this.drawRoutes = this.drawRoutes.bind(this);
  }
  fetchFullData() {
    fetch(`https://ekarta-postaci.herokuapp.com/characters`)
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({fullData:responseJSON});
      })
      .catch(err => {
        console.log(err);
      })
  }
  fetchBasicData() {
    fetch(`https://ekarta-postaci.herokuapp.com/basic`)
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({basicData:responseJSON});
      })
      .catch(err => {
        console.log(err);
      })
  }
  componentDidMount() {
    this.fetchBasicData();
    this.fetchFullData();
    setInterval(() => {
      this.fetchBasicData();
      this.fetchFullData();
    }, 500);
  }
  render() {
    return (
      <div className='content'>
        <BrowserRouter>
          <Route path='/' exact render={(props) => <CharactersMenu {...props} characters={this.state.basicData.data} />}/>
          {this.drawRoutes()}
        </BrowserRouter>
      </div>
    );
  }
  drawRoutes () {
    if (this.state.fullData.data && this.state.fullData.data[0]) {
      const CharactersArray = [];
      for (let i in this.state.basicData.data) {
        CharactersArray.push(<Route key={i} path={`/${this.state.basicData.data[i].playername}`} exact render={(props) => <Character{...props} character={this.state.fullData.data[i]} playername={this.state.basicData.data[i].playername}/>}/>);
      }
      return (CharactersArray)
    } else {
      return(<Character character={this.state.dummyData}/>)
    }
  }
}

export default App;
