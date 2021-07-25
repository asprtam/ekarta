import React, { Component } from 'react';
import Dots from './Dots';

class Attributes extends Component {
    constructor(props) {
        super(props);
        this.state = { characterData: {} };
        this.fetchData = this.fetchData.bind(this);
        this.sendInput = this.sendInput.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }
    fetchData(name) {
      let sendData = { name: name }
      const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }, 
          body: JSON.stringify(sendData)
        };
      fetch('https://ekarta-postaci.herokuapp.com/exp', options).then(response => response.json()).then(response => {
          this.setState({characterData:response.data});
      });
    }
    componentDidMount () {
      this.fetchData(this.props.playername)
    }
    inputChange(value, name) {
      const stateObj = this.state;
      stateObj.characterData[name] = value;
      this.setState(stateObj);
    }
    sendInput(value, name){
      let sendData = {name: name, value: value, playername: this.state.characterData.playername };
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(sendData)
          };
          fetch('https://ekarta-postaci.herokuapp.com/api', options).then(response => response.json()).then(response => {
              if(response.success) {
                  setTimeout(() => {
                      this.fetchData(this.props.playername)
                  }, 300); 
              }
        });
    }
    render () {
        return (
            <div className="Attributes">
            <h3>Atrybuty</h3>
            <div className="aSmallCol">
              <span className="pd">
                <h6>Fizyczne</h6>
                <div className="pdattr">
                  <span className='capt'>PD.</span>
                  <input type="number" value={this.state.characterData.physicalexp} onChange={e => this.inputChange(e.target.value, 'physicalexp')} onBlur={e => this.sendInput(e.target.value, 'physicalexp')} onClick={e => this.sendInput(e.target.value, 'physicalexp')}></input>
                </div>
              </span>
              <span className='dotted'>
                <h5>Postura</h5>
                <div className="notation">
                    <Dots attr={'postureattr'} playername={this.props.playername}/>
                </div>
              </span>
              <span className='dotted'>
                <h5>Siła</h5>
                <div className="notation">
                  <div className='Dots'>
                    <Dots attr={'strengthattr'} playername={this.props.playername}/>
                  </div>
                </div>
              </span>
              <span className='dotted'>
                <h5>Zręczność</h5>
                <div className="notation">
                  <div className='Dots'>
                    <Dots attr={'dexterityattr'} playername={this.props.playername}/>
                  </div>
                </div>
              </span>
            </div>
            <div className="aSmallCol">
              <span className="pd">
                <h6>Umysłowe</h6>
                <div className="pdattr">
                  <span className='capt'>PD.</span>
                  <input type="number" value={this.state.characterData.mentalexp} onChange={e => this.inputChange(e.target.value, 'mentalexp')} onBlur={e => this.sendInput(e.target.value, 'mentalexp')} onClick={e => this.sendInput(e.target.value, 'mentalexp')}></input>
                </div>
              </span>
              <span className='dotted'>
                <h5>Siła Woli</h5>
                <div className="notation">
                  <div className='Dots'>
                    <Dots attr={'willpowerattr'} playername={this.props.playername}/>
                  </div>
                </div>
              </span>
              <span className='dotted'>
                <h5>Inteligencja</h5>
                <div className="notation">
                  <div className='Dots'>
                    <Dots attr={'intelligenceattr'} playername={this.props.playername}/>
                  </div>
                </div>
              </span>
              <span className='dotted'>
                <h5>Spostrzegawczość</h5>
                <div className="notation">
                  <div className='Dots'>
                    <Dots attr={'observationattr'} playername={this.props.playername}/>
                  </div>
                </div>
              </span>
            </div>
            <div className="aSmallCol">
              <span className="pd">
                <h6>Miękkie</h6>
                <div className="pdattr">
                  <span className='capt'>PD.</span>
                  <input type="number" value={this.state.characterData.softskillsexp} onChange={e => this.inputChange(e.target.value, 'softskillsexp')} onBlur={e => this.sendInput(e.target.value, 'softskillsexp')} onClick={e => this.sendInput(e.target.value, 'softskillsexp')}></input>
                </div>
              </span>
              <span className='dotted'>
                <h5>Opanowanie</h5>
                <div className="notation">
                  <div className='Dots'>
                    <Dots attr={'composureattr'} playername={this.props.playername}/>
                  </div>
                </div>
              </span>
              <span className='dotted'>
                <h5>Perswazja</h5>
                <div className="notation">
                  <div className='Dots'>
                    <Dots attr={'persuasionattr'} playername={this.props.playername}/>
                  </div>
                </div>
              </span>
              <span className='dotted'>
                <h5>Zaradność</h5>
                <div className="notation">
                  <div className='Dots'>
                  <Dots attr={'resourcefulnessattr'} playername={this.props.playername}/>
                  </div>
                </div>
              </span>
            </div>
          </div>
        )
    }
}

export default Attributes;