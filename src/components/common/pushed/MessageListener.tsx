import React from 'react';
import { Message, listenCallback } from './Message';

var MessageListenerClient = require('./MessageListenerClient');

export default class MessageListener extends React.Component {
  constructor(props: any) {
    super(props);
  }

  static url: string;
  static topics: [];
  static inited: boolean = false;
  static callbackMap: Map<string, listenCallback[]> = new Map();
  static client: typeof MessageListenerClient = undefined;

  static init () {
    if(this.inited === false) {
      // url, topics list 가져온 후에 setting 해야 함
    }

    this.client = new MessageListenerClient(this.onMessage, this.url, this.topics);
  }

  static addListener(messageCode: string, callback: listenCallback) {
    var callbackList = this.callbackMap.get(messageCode);
    if(callbackList === undefined || callbackList === null) {
      callbackList = [];
    }
    callbackList.push(callback);
    this.callbackMap.set(messageCode, callbackList);
  }

  static removeListener(messageCode: string, listenerId: string) {
    var callbackList = this.callbackMap.get(messageCode);
    if(callbackList !== undefined || callbackList === null) {
      var length = callbackList.length;
      for(var index = 0; index < length; index++) {
        var callback = callbackList[index];
        if(listenerId === callback.listenerId) {
          callbackList.splice(index);
          break;
        }
      }
      this.callbackMap.set(messageCode, callbackList);
    }
  }

  static sendMessage(message: Message) {
    this.client.sendMessage(message, this.topics);
  }

  static onMessage(message: Message) {
    var callbackList = this.callbackMap.get(message.messageCode);
    callbackList?.forEach(callback=>{
      console.log("###### Message arrived (" + message.messageCode + ")");
      callback(message);
      console.log("###### Message processed (" + message.messageCode + ")");
    })
  }

  // render() {
  //   return (
  //     <div>
  //       <MessageListenerClient 
  //         messageCallback={MessageListener.onMessage} 
  //         url={ MessageListener.url } 
  //         topics={ MessageListener.topics }/>
  //     </div>
  //   );
  // }
}

// var listener: MessageListener = new MessageListener("");
MessageListener.init();

export {
  Message,
  listenCallback
}