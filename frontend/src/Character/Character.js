import React, { Component } from 'react';
import Attributes from './Attributes';
import Profs from './ProfBranch';
import './Character.css';

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = { characterData: {} }
    this.createDots = this.createDots.bind(this);
    this.createSquares = this.createSquares.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.sendInput = this.sendInput.bind(this);
    this.changeAttrOrProf = this.changeAttrOrProf.bind(this);
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
    fetch('https://ekarta-postaci.herokuapp.com/nonattrib', options).then(response => response.json()).then(response => {
        this.setState({characterData:response.data});
    });
  }
  componentDidMount () {
    this.fetchData(this.props.playername)
  }
  createSquares(current, name) {
    const squareArr = [];
    let k = 0;
    for (let i = 0; i<current; i++) {
      squareArr.push(<button key={k} onClick={()=>{this.changeAttrOrProf(name, true, i, this.props.playername)}} className="filled">{'\u00A0'}</button>)
      k++;
    }
    for (let i = 0; i<=5; i++) {
      if(i>current) {
        squareArr.push(<button key={k} onClick={()=>{this.changeAttrOrProf(name, false, i, this.props.playername)}}>{'\u00A0'}</button>)
        k++;
      }
    }
    return (squareArr);
  }
  createDots(current, name) {
    const dotArr = [];
    let k = 0;
    for (let i = 0; i<current; i++) {
      dotArr.push(<button key={k} onClick={()=>{this.changeAttrOrProf(name, true, i, this.props.playername)}} className="filled">{'\u00A0'}</button>)
      k++;
    }
    for (let i = 0; i<=5; i++) {
      if(i>current) {
        dotArr.push(<button key={k} onClick={()=>{this.changeAttrOrProf(name, false, i, this.props.playername)}}>{'\u00A0'}</button>)
        k++;
      }
    }
    return (dotArr);
  }
  changeAttrOrProf (name, active, value, player) {
    let sendData = {name: name, value: value, playername: player };
    if(active && value!=0) {
      sendData.value++;
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(sendData)
    };
    console.log(sendData);
    fetch('https://ekarta-postaci.herokuapp.com/api', options).then(response => response.json()).then(response => {
        console.log(response);
        if(response.success) {
            setTimeout(() => {
                this.fetchData(this.props.playername);
            }, 300); 
        }
    });
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
  render() {
    return(
      <div className="Character">
        <div className="posDiv">
          <div className="Head">
            <div className="hBigCol">
              <span className="short">
                <input type="number" value={this.state.characterData.characterage} onChange={e => this.inputChange(e.target.value, 'characterage')} onBlur={e => this.sendInput(e.target.value, 'characterage')} onClick={e => this.sendInput(e.target.value, 'characterage')}></input>
                <p>Wiek</p>
              </span>
              <span className="short">
                <input type="text" value={this.state.characterData.charactername} onChange={e => this.inputChange(e.target.value, 'charactername')} onBlur={e => this.sendInput(e.target.value, 'charactername')}></input>
                <p>Imię i Nazwisko</p>
              </span>
              <span className="short">
                <textarea type="text" value={this.state.characterData.advantages} onChange={e => this.inputChange(e.target.value, 'advantages')} onBlur={e => this.sendInput(e.target.value, 'advantages')} rows="2"></textarea>
                <p>Zalety</p>
              </span>
              <span className="short">
                <textarea value={this.state.characterData.disadvantages} onChange={e => this.inputChange(e.target.value, 'disadvantages')} onBlur={e => this.sendInput(e.target.value, 'disadvantages')} rows="2"></textarea>
                <p>Wady</p>
              </span>
              <span className="long">
                <textarea value={this.state.characterData.description} onChange={e => this.inputChange(e.target.value, 'description')} onBlur={e => this.sendInput(e.target.value, 'description')} rows="2"></textarea>
                <p>Opis</p>
              </span>
            </div>
            <div className="hSmallCol">
              <span className="smallColSpan">
                <input type="text" value={this.state.characterData.characternationality} onChange={e => this.inputChange(e.target.value, 'characternationality')} onBlur={e => this.sendInput(e.target.value, 'characternationality')}></input>
                <p>Narodowość</p>
              </span>
              <span className="smallColSpan">
                <div className="wdiv">
                  <input type="number" value={this.state.characterData.lightwounds} onChange={e => this.inputChange(e.target.value, 'lightwounds')} onBlur={e => this.sendInput(e.target.value, 'lightwounds')} onClick={e => this.sendInput(e.target.value, 'lightwounds')}></input>
                  <p>Lekkie Rany</p>
                </div>
                <div className="wdiv">
                  <input type="number" value={this.state.characterData.heavywounds} onChange={e => this.inputChange(e.target.value, 'heavywounds')} onBlur={e => this.sendInput(e.target.value, 'heavywounds')} onClick={e => this.sendInput(e.target.value, 'heavywounds')}></input>
                  <p>Ciężkie Rany</p>
                </div>
                <div className="wdiv">
                  <input type="number" value={this.state.characterData.woundlimit} onChange={e => this.inputChange(e.target.value, 'woundlimit')} onBlur={e => this.sendInput(e.target.value, 'woundlimit')} onClick={e => this.sendInput(e.target.value, 'woundlimit')}></input>
                  <p>Punkty Życia</p>
                </div>
              </span>
              <span className="dotted">
                <h5 className="hMarker">Siła Woli:</h5>
                <div className="notation">
                  <div className='Squares'>
                    {this.createSquares(this.props.character.willpowerpoints, 'willpowerpoints')}
                  </div>
                  <div className='Dots' style={{textAlign: 'right'}}>
                    {this.createDots(this.props.character.willpowerpointslimit, 'willpowerpointslimit')}
                  </div>
                </div>
              </span>
              <span className="oneShort">
                <div className="shortMarker"><h5>Inicjatywa: </h5></div>
                <input type="number" value={this.state.characterData.initiative} onChange={e => this.inputChange(e.target.value, 'initiative')} onBlur={e => this.sendInput(e.target.value, 'initiative')} onClick={e => this.sendInput(e.target.value, 'initiative')}></input>
              </span>
              <span className="oneShort">
                <div className="shortMarker"><h5>Obrona: </h5></div>
                <input type="number" value={this.state.characterData.defense} onChange={e => this.inputChange(e.target.value, 'defense')} onBlur={e => this.sendInput(e.target.value, 'defense')} onClick={e => this.sendInput(e.target.value, 'defense')}></input>
              </span>
            </div>
          </div>
          <Attributes playername={this.props.playername}/>
          <Profs playername={this.props.playername}/>
          <div className="Head">
            <div className="hBigCol" style={{verticalAlign: 'bottom'}}>
              <span className="long" style={{marginBottom: '2vw'}}>
                <textarea style={{textAlign: 'left !important'}} value={this.state.characterData.weapons} onChange={e => this.inputChange(e.target.value, 'weapons')} onBlur={e => this.sendInput(e.target.value, 'weapons')} rows="2"></textarea>
                <p>Broń i Amunicja</p>
              </span>
              <span className="long" style={{marginBottom: '2vw'}}>
                <textarea style={{textAlign: 'left !important'}} value={this.state.characterData.equipment} onChange={e => this.inputChange(e.target.value, 'equipment')} onBlur={e => this.sendInput(e.target.value, 'equipment')} rows="2"></textarea>
                <p>Ekwipunek</p>
              </span>
              <span className="long">
                <textarea style={{textAlign: 'left !important'}} value={this.state.characterData.property} onChange={e => this.inputChange(e.target.value, 'property')} onBlur={e => this.sendInput(e.target.value, 'property')} rows="2"></textarea>
                <p>Majątek</p>
              </span>
            </div>
            <div className="hSmallCol" style={{verticalAlign: 'bottom'}}>
              <span className="smallColSpanAcc" style={{marginBottom: '2vw', transform: 'translateY(-25%)'}}>
                <input type="number" value={this.state.characterData.income} onChange={e => this.inputChange(e.target.value, 'income')} onBlur={e => this.sendInput(e.target.value, 'income')} onClick={e => this.sendInput(e.target.value, 'income')}></input><h4 className="credits">¢</h4>
                <p>Stan Konta</p>
              </span>
              <span className="eqLimit" style={{transform: 'translateY(25%)'}}>
                <input className="smallInput" type="number" value={this.state.characterData.equipmentcurrent} onChange={e => this.inputChange(e.target.value, 'equipmentcurrent')} onBlur={e => this.sendInput(e.target.value, 'equipmentcurrent')} onClick={e => this.sendInput(e.target.value, 'equipmentcurrent')}></input>
                <h4 className="slash">{'/'}</h4>
                <input className="smallInput" type="number" value={this.state.characterData.equipmentmax} onChange={e => this.inputChange(e.target.value, 'equipmentmax')} onBlur={e => this.sendInput(e.target.value, 'equipmentmax')} onClick={e => this.sendInput(e.target.value, 'equipmentmax')}></input>
                <p style={{transform: 'translateY(60%)'}}>Udźwig</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Character;
