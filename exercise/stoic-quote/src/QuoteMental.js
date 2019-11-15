import React, {Component} from 'react';
import {withProvider} from './QuoteProvider'

class QuoteMental extends Component {
    constructor(){
        super();

        this.state = {

        }
    }

    render (){
        return(
            <div></div>
        )
    }
}

export default withProvider(QuoteMental)