import { AuthService } from 'src/service/auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl(""); // we will use this to prevent spam
  responseMessage: string = ""; // the response message to show to the user

  constructor(private formBuilder: FormBuilder, private http: HttpClient, public authService: AuthService) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
  }

  ngOnInit() { }
  public data: any = []
  onSubmit(): void {
    this.data['name'] = this.form.get("name")?.value;
    this.data['email'] = this.form.get("email")?.value;
    //this.data['message'] = this.form.get("message")?.value;



    if (this.data['name'] == '' || this.data['email'] == '' || this.data['message'] == '') 
    {
      this.responseMessage = 'Veillez remplir tous les champs';
    } else 
    if (!this.data['email'].match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/))
     {
      this.responseMessage = 'Veillez saisir une adresse valide';
    } 
    else 
    {
      this.http.put<any>("YOUR GOOGLE WEB APP URL HERE", this.data).subscribe(
        res => {
          console.log(res);
          console.log(this.data);
          this.responseMessage = "Thanks for the message! I'll get back to you soon!";
        },
        (err: HttpErrorResponse) => {
        /*if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occurred.");
        }*/ console.log(this.data);
          this.responseMessage = "Thanks for the message! I'll get back to you soon!";

        });
    }
  }
}
