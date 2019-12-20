import React from 'react';
import {Media} from 'reactstrap';

const Projects = () => {
    return (
        <div>
            <Media>
                <Media left top href="#">
                    <Media object data-src="holder.js/64x64" alt="Generic placeholder image"/>
                </Media>
                <Media body>
                    <Media heading>
                        Web Arcade
                    </Media>
                    Full-stack web application that allows the user to play from three different arcade games and record their score on their profile. 
                    Front End built using React, Back End built using Node, Express, MongoDB & Mongoose.
                </Media>
            </Media>
            <Media className="mt-1">
                <Media left middle href="#">
                    <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                </Media>
                <Media body>
                    <Media heading>
                        Forum-Land
                    </Media>
                    Full-stack Reddit clone web application. Series of forum posts on multiple topics with comments and the ability to create new posts and topics included.
                    Front End built using React, Back End built using Node, Express, MongoDB & Mongoose.
                </Media>
                <Media className="mt-1">
                    <Media left bottom href="#">
                        <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                    </Media>
                    <Media body>
                        <Media heading>
                            Stoic Quote Generator
                        </Media>
                        React app which randomly generates quotes from Stoic philosophers and various pop-culture characters.
                        Front End built using React, Back End built using Node, REST APIs and JSON.
                    </Media>
                </Media>
            </Media>
        </div>
    )
};

export default Projects
