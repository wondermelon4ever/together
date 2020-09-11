interface Message {
  messageCode: string,
  messageContent: {
    
  }
}

interface listenCallback {
  listenerId: string,
  (data: Message): any;
}

export {
  Message,
  listenCallback
}