import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs/index";


@Injectable()
export class StudentsService {

  url = "";

  product = new Subject<string>();

  constructor(private http:HttpClient) { }

  

}