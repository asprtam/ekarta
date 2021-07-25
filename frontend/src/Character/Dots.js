import React, { Component } from 'react';

class Dots extends Component {
    constructor(props) {
        super(props);
        this.state = { attr: { data: 0 } };
        this.createDots = this.createDots.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.changeAttrOrProf = this.changeAttrOrProf.bind(this);
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
    fetchData(name, attr) {
        let sendData = {name: name, attr: attr }
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(sendData)
          };
        fetch('https://ekarta-postaci.herokuapp.com/requestdata', options).then(response => response.json()).then(response => {
            this.setState({attr:response});
        });
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
                    this.fetchData(this.props.playername, this.props.attr);
                }, 300); 
            }
        });
    }
    componentDidMount () {
        if(this.props.playername && this.props.attr) {
            this.fetchData(this.props.playername, this.props.attr);
        }
    }
    render () {
        return (
            <div className='Dots'>
                    {this.createDots(this.state.attr.data, this.props.attr)}
            </div>
        )
    }
}

export default Dots;