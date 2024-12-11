import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HOMEComponent implements OnInit {

  users: any
  url = 'https://api.github.com/users';
 
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    
    this.http.get(this.url).subscribe(res => {
      console.log('success');
      console.log(res);
      
        
        this.users = res;
      
    }, error => {
      console.log('error');
      console.log(error);
      
    }, () => {
      console.log('completed');
    }
    )
  }

  goTogithub(url: any) {
    window.open(url, '_blank')
  }
}



