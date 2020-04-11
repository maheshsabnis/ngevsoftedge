import { Injectable, EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CommunicationService {
  receiveData: EventEmitter<number>;
  constructor() {
    this.receiveData = new EventEmitter<number>();
  }
  // the method will be invoked by the
  // sender to send data
  // this method will emit the receive data
  // and the event subscriber will
  // receive the data
  publishData(id: number): void {
    this.receiveData.emit(id);
  }
}
