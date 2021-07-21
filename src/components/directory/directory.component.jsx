import { Component } from 'react';
import MenuItem from '../../components/menu-item/menu-item.component';

import sectionsCollection from './sections.data';
import './directory.styles.scss';

class Directory extends Component {

    constructor(){
        super();

        this.state = {
            sections: sectionsCollection
        };
    }

    render(){
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id, ...otherProps}) => (
                    <MenuItem key={id} {...otherProps} />
                ))}
            </div>
        );
    }
}

export default Directory;