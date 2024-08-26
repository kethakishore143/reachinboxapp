import React from 'react'
import { LuSunMoon } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";

import ".//Onebox.css"
import Sidebar from '../Sidebar/Sidebar';
import Failureview from '../Failureview/Failureview';

const Onebox = () => {

    return (

        <div className='maincards-container'>
            <Sidebar />
            <div className='inbox-container'>
                <nav className='oneboxnav-container'>
                    <div>
                        <h1 className='onebox-headinhg'>Onebox</h1>
                    </div>
                    <div className='options-container'>
                        <GoDotFill className='Eclips' />
                        <LuSunMoon className='sun-icon' />
                        <select name="work" id="work">
                            <option value="Tim's Workspace">Tim's Workspace</option>
                        </select>
                    </div>
                </nav>
                <div className='content-view-container'>
                    <Failureview />
                </div>

            </div>

        </div>
    )
}

export default Onebox