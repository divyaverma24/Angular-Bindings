import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',xsx
  templateUrl :'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus ="No Server was created!";
  serverName = "ServerName";

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreationStatus = 'server created! and  name is : ' + this.serverName;
  }

  onUpdateServerName( event : Event){
    this.serverName =(<HTMLInputElement> event.target).value;

  }

}
