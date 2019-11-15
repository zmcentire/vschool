import React, {Component} from 'react';
import BadgeContainer from './badgeContainer';

class NameBadge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            faveFood: "",
            summary: "",
            badges: []
        }
    }
}