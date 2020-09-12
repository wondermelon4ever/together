import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { BrowserRouter, Link, Redirect, Route, Router, Switch } from 'react-router-dom';
import BodyTemplate1Pane from './BodyTemplate1Pane';
import BodyTemplate2Pane from './BodyTemplate2Pane';
import BodyTemplate3Pane from './BodyTemplate3Pane';

var leftMenuKey = "";
var fromTemplate = true;
var viewId = "";
var selectedName = "";

class BodyRouter extends React.Component<RouteComponentProps<{}, any>, any> {
    constructor(props: RouteComponentProps) {
        super(props);
    }

    componentWillReceiveProps(nextProps: any) {
        if(nextProps.location.state !== null && nextProps.location.state != undefined) {
            leftMenuKey = nextProps.location.state.leftMenuKey;
            fromTemplate = nextProps.location.state.fromTemplate;
            viewId = nextProps.location.state.viewId;
            selectedName = nextProps.location.state.selectedName;
        }
    }

    render() {
        return(
            <div style={{height: '100%' }}>
                <Switch>
                    <Route exact path="/tp1">
                        <Redirect path="*" to={{pathname: "/biz1", state: { viewId: viewId }}} />
                    </Route> 
                    <Route exact path="/tp2">
                        <Redirect 
                            path="*" 
                            to={{
                                pathname: "/biz2", 
                                state: { leftMenuKey: leftMenuKey, fromTemplate: fromTemplate, selectedName: selectedName 
                            }}} 
                        />
                    </Route>
                    {/* <Route exact path="/biz3" component={BodyTemplate3Pane}/> */}
                    <Route exact path="/tp3">
                        <Redirect path="*" to={{pathname: "/biz3", state: { leftMenuKey: leftMenuKey, fromTemplate: fromTemplate }}} />
                    </Route>
                    <Route exact path="/biz1" component={BodyTemplate1Pane}/>
                    <Route exact path="/biz2" component={BodyTemplate2Pane}/>
                    <Route exact path="/biz3" component={BodyTemplate3Pane}/>
                    // 로그인 안되어 있으면 로그인 페이지로, 로그인 되어 있으면 Main Page로 이동 (현재는 그냥 Main View로 이동하도록)
                    <Redirect 
                        path="*" 
                        to={{ 
                            pathname: "/biz1",
                            state: { viewId: "bodyMainView" }
                        }}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(BodyRouter);