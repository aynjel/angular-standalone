import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UIService {
  private _loading: boolean = false;
  private _loadingSubject: Subject<boolean> = new Subject<boolean>();
  public loading$: Observable<boolean> = this._loadingSubject.asObservable();

  constructor() { }

  public get loading(): boolean {
    return this._loading;
  }

  public set loading(value: boolean) {
    this._loading = value;
    this._loadingSubject.next(value);
  }
}
