import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new BehaviorSubject(null);
  public as_user = this.user.asObservable();

  public change_user(param){
    this.user.next(param);
  }
  
  constructor() { }
}
