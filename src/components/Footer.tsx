import React from 'react';
import { Link } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import Copyright from './views/common/Copyright';

const footerStyle = {
  root: {
    width: '100%',
    backgroundColor: '#E6E6E6',
    align: 'center',
    valign: 'center',
    padding: 12
  },
}

class Footer extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(){
        return(
            <div style={ footerStyle.root }>
              <SplitPane split="vertical">
                <div style={{ verticalAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>Footer Area-1</div>
                {/* <div> <Link to="/tp3">GO TO BODY NO 3</Link></div> */}
                <Copyright />
                <div>Footer Area-3</div>
              </SplitPane>;
            </div>        
        );
    }
}

export default Footer;