import axios from 'axios';

var mapToObject = require('../../utils/MapConverter');

interface Handler {
  handle(data: any): void;
}

export default class RequestTemplate {
  constructor() {

  }

  makeHeader(headers?: Map<string, string>) {
    var headersMade = headers;
    if(headersMade === undefined || headersMade === null) {
      headersMade = new Map();
    }
    
    headersMade.set("Access-Control-Allow-Origin", "*");
    headersMade.set("Accept", "application/json");
        
    return mapToObject(headersMade);
  }

  sendGet(url: string, handler: Handler, headers?: Map<string, string>) {
    var headersMade = this.makeHeader(headers);
    axios.get(url, {
        headers: headersMade
    }).then(response => {
        if(handler != undefined) handler.handle(response.data);
    }); 
  }

  sendPost(url: string, data: any, handler: Handler, headers?: Map<string, string>) {
    var headersMade = this.makeHeader(headers);
    axios.post(url, {
      headers: headersMade,
      data
    }).then(response => {
      if(handler != undefined) handler.handle(response.data);
    }).catch(((error)=>{
      console.error(error);
    })) 
  }
}