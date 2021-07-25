import React, { Component } from 'react';
import Dots from './Dots';

class Profs extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="Profs">
            <h3>Biegłości</h3>
              <div className="aSmallCol">
                <h6 className="profTitle">Postura</h6>
                <span className='dotted'>
                  <h5>Odporność</h5>
                  <div className="notation">
                    <Dots attr={'resistanceprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <span className='dotted'>
                  <h5>Zastraszanie</h5>
                  <div className="notation">
                    <Dots attr={'bullyingprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <span className='dotted'>
                  <h5>Kondycja</h5>
                  <div className="notation">
                    <Dots attr={'conditionprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <h6 className="profTitle">Siła</h6>
                <span className='dotted'>
                  <h5>Destrukcja</h5>
                  <div className="notation">
                    <Dots attr={'destructionprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <span className='dotted'>
                  <h5>Garda</h5>
                  <div className="notation">
                    <Dots attr={'guardprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <span className='dotted'>
                  <h5>Pięściarstwo</h5>
                  <div className="notation">
                    <Dots attr={'fistingprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <span className='dotted'>
                  <h5>Udźwig</h5>
                  <div className="notation">
                    <Dots attr={'capacityprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <span className='dotted'>
                  <h5>Walka wręcz <strong>(cięzkie)</strong></h5>
                  <div className="notation">
                    <Dots attr={'meleecombatheavyprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <h6 className="profTitle">Zręczność</h6>
                <span className='dotted'>
                  <h5>Akrobatyka</h5>
                  <div className="notation">
                    <Dots attr={'acrobaticsprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <span className='dotted'>
                  <h5>Pływanie</h5>
                  <div className="notation">
                    <Dots attr={'swimmingprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <span className='dotted'>
                  <h5>Skradanie</h5>
                  <div className="notation">
                    <Dots attr={'sneakprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <span className='dotted'>
                  <h5>Strzelectwo</h5>
                  <div className="notation">
                    <Dots attr={'shootingprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <span className='dotted'>
                  <h5>Sztuki Walki</h5>
                  <div className="notation">
                    <Dots attr={'martialartsprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <span className='dotted'>
                  <h5>Walka wręcz <strong>(lekkie)</strong></h5>
                  <div className="notation">
                    <Dots attr={'meleecombatlightprof'} playername={this.props.playername}/>
                  </div>
                </span>
              </div>
              <div className="aSmallCol">
                <h6 className="profTitle">Siła Woli</h6>
                <span className='dotted'>
                  <h5>Negacja</h5>
                  <div className="notation">
                    <Dots attr={'negationprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <span className='dotted'>
                  <h5>Psionika</h5>
                  <div className="notation">
                    <Dots attr={'psionicsprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <h6 className="profTitle">Inteligencja</h6>
                <span className='dotted'>
                  <h5>Hakowanie</h5>
                  <div className="notation">
                    <Dots attr={'hackingprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <span className='dotted'>
                  <h5>Informatyka</h5>
                  <div className="notation">
                    <Dots attr={'itprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <span className='dotted'>
                  <h5>Języki Obce</h5>
                  <div className="notation">
                    <Dots attr={'languagesprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <span className='dotted'>
                  <h5>Literatura</h5>
                  <div className="notation">
                    <Dots attr={'literatureprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <span className='dotted'>
                  <h5>Medycyna</h5>
                  <div className="notation">
                    <Dots attr={'medicineprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <span className='dotted'>
                  <h5>{'\u00A0'}<strong className="longH">Nauki Humanistyczne</strong></h5>
                  <div className="notation">
                    <Dots attr={'humanismprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <span className='dotted'>
                  <h5>Nauki ścisłe</h5>
                  <div className="notation">
                    <Dots attr={'scienceprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <span className='dotted'>
                  <h5>Technika</h5>
                  <div className="notation">
                    <Dots attr={'technologyprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <h6 className="profTitle">Spostrzegawczość</h6>
                <span className='dotted'>
                  <h5>Intuicja</h5>
                  <div className="notation">
                    <Dots attr={'intuitionprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <span className='dotted'>
                  <h5>Logika</h5>
                  <div className="notation">
                    <Dots attr={'logicprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <span className='dotted'>
                  <h5>Przeszukiwanie</h5>
                  <div className="notation">
                    <Dots attr={'searchprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <span className='dotted'>
                  <h5>Tropicielstwo</h5>
                  <div className="notation">
                    <Dots attr={'trackingprof'} playername={this.props.playername}/>
                  </div>
                </span>
              </div>
              <div className="aSmallCol">
                <h6 className="profTitle">Opanowanie</h6>
                <span className='dotted'>
                  <h5>Asertywność</h5>
                  <div className="notation">
                    <Dots attr={'assertivenessprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <span className='dotted'>
                  <h5>Odwaga</h5>
                  <div className="notation">
                    <Dots attr={'courageprof'} playername={this.props.playername}/>
                  </div>
                </span>
                <h6 className="profTitle">Perswazja</h6>
                  <span className='dotted'>
                    <h5>Groźba</h5>
                    <div className="notation">
                      <Dots attr={'treatprof'} playername={this.props.playername}/>
                    </div>
                  </span>
                  <span className='dotted'>
                    <h5>Kłamstwo</h5>
                    <div className="notation">
                        <Dots attr={'lieprof'} playername={this.props.playername}/>
                    </div>
                  </span>
                  <span className='dotted'>
                    <h5>Takt</h5>
                    <div className="notation">
                        <Dots attr={'tactprof'} playername={this.props.playername}/>
                    </div>
                  </span>
                  <span className='dotted'>
                    <h5>Przekonywanie</h5>
                    <div className="notation">
                        <Dots attr={'convincingprof'} playername={this.props.playername}/>
                    </div>
                  </span>
                  <span className='dotted'>
                    <h5>Sztuka</h5>
                    <div className="notation">
                        <Dots attr={'artprof'} playername={this.props.playername}/>
                    </div>
                  </span>
                  <span className='dotted'>
                    <h5>Uwodzenie</h5>
                    <div className="notation">
                        <Dots attr={'seductionprof'} playername={this.props.playername}/>
                    </div>
                  </span>
                  <span className='dotted'>
                    <h5>Wyśmiewanie</h5>
                    <div className="notation">
                        <Dots attr={'tauntprof'} playername={this.props.playername}/>
                    </div>
                  </span>
                  <h6 className="profTitle">Zaradność</h6>
                    <span className='dotted'>
                      <h5>Gotowanie</h5>
                      <div className="notation">
                        <Dots attr={'cookingprof'} playername={this.props.playername}/>
                      </div>
                    </span>
                    <span className='dotted'>
                      <h5>{'\u00A0'}<strong className="longH">Jazda Samochodem</strong></h5>
                      <div className="notation">
                        <Dots attr={'drivingprof'} playername={this.props.playername}/>
                      </div>
                    </span>
                    <span className='dotted'>
                      <h5>{'\u00A0'}<strong className="longH">Otwieranie Zamków</strong></h5>
                      <div className="notation">
                        <Dots attr={'lockpickingprof'} playername={this.props.playername}/>
                      </div>
                    </span>
                    <span className='dotted'>
                      <h5>Przetrwanie</h5>
                      <div className="notation">
                        <Dots attr={'survivalprof'} playername={this.props.playername}/>
                      </div>
                    </span>
                    <span className='dotted'>
                      <h5>Majsterkowanie</h5>
                      <div className="notation">
                        <Dots attr={'diyprof'} playername={this.props.playername}/>
                      </div>
                    </span>
              </div>
          </div>
        )
    }
}

export default Profs;