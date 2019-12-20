import React from 'react';
import About from './about';
import Examples from './examples';
import Participation from './participation';
import Sidebar from './sidebar';
import Requirements from './requirements';
import SidebarRequirements from './siderequirements';

const Body = () => {
    return (
        <div className="body">
            <About/>
            <Examples/>
            <Participation/>
            <Sidebar/>
            <Requirements/>
            <SidebarRequirements/>
        </div>
    )
}

export default Body