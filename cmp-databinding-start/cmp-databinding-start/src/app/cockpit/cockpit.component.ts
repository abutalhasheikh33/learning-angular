import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
@Output()  serverAdded = new EventEmitter<{serverName:string,serverContent:string}>();  
@Output()  bluePrintAdded = new EventEmitter<{serverName:string,serverContent:string}>();  
  // newServerName = '';  
  newServerContent = '';
  @ViewChild('serverContentInput',{static:true}) serverContentInput: ElementRef
  onAddServer(serverNameInput:HTMLInputElement) {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    // this.serverAdded.emit({serverName:this.newServerName,serverContent:this.newServerContent});
     this.serverAdded.emit({serverName:serverNameInput.value,serverContent:this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverNameInput:HTMLInputElement) {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  //  this.bluePrintAdded.emit({serverName:this.newServerName,serverContent:this.newServerContent});
    this.bluePrintAdded.emit({serverName:serverNameInput.value,serverContent:this.serverContentInput.nativeElement.value});
  }
}
