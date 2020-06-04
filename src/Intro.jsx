import React from 'react';
import Header from './components/Header';
import avatar from './assests/avt.png';
import Intro from './components/Intro';
export default ()=>{
    return(
	<div align="center">

        <div className="root">
            <div>
                <div className="Header">
                    <Header avatar={avatar} name="Dương Quốc Bảo" />
                </div>
            </div>
            <div align="center" className="Intro">
                <Intro />
            </div>
        </div>
        </div>
    )
}