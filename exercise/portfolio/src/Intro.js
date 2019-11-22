import React, {useState} from 'react';
import {Jumbotron, Collapse, Button, Card, CardBody} from 'reactstrap';

const intro = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>
            <Jumbotron>
                <h1 className="display-3">Hello, I'm Zach!</h1>
                <p className="lead">I am a full-stack Web Developer</p>
                <hr className="my-2"/>
                <p>Welcome to my portfolio!</p>
                <p className="lead">
                    <Button color="secondary" onClick={toggle}>Learn More</Button>
                    <Collapse isOpen={isOpen}>
                        <Card>
                            <CardBody>                                
                                Anim pariatur cliche reprehenderit,
                                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident.
                            </CardBody>
                        </Card>
                    </Collapse>
                </p>
            </Jumbotron>

            <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Intro
