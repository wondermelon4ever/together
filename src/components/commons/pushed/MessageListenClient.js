import React, { Component } from 'react';
import SockJsClient from 'react-stomp';

class MessageListenerClient extends Component {

    constructor(props) {
        super(props);

        this.state = {
            messageCallback : props.messageCallback
        }
    }

    sendMessage(message, topics) {
        this.clientRef.sendMessage(topics, message);
    }

    render() {
        return (
          <div>
            {/* <SockJsClient url='http://localhost:9000/websocket' topics={['/topic/event']} */}
            <SockJsClient url={ this.props.url } topics={ this.props.topics }
                onMessage={(message) => { 
                  this.state.messageCallback(message); 
                }}
                ref={ (client) => { 
                  this.clientRef = client;
                }}
                onConnect={ () => { this.setState({ clientConnected: true }) } }
                onDisconnect={ () => { this.setState({ clientConnected: false }) } }
                debug={ false } style={[{ width:'100%', height:'100%' }]} 
              />
          </div>
        );
    }
}

export default MessageListenerClient;