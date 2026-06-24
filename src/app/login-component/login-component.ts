import { Component, signal } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthContainer } from '../components/auth-container/auth-container';


@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule, AuthContainer],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  notValidEmail = false

  emailErrorMessage = signal("")
  passwordErrorMessage = signal("")



  loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });


   onSubmit() {
      /**
       * If all form components are valid submits information to server
       */
      
      // Values of all inputs en the form
      const email = this.emailFormControl!.value || '';
      const password = this.passwordFormControl!.value || '';
    }

    checkEmailErrors() {
      /**
       * If email is not valid, returns error text
       */

      // Email control
      const emailControl = this.emailFormControl;

      // If email name exists, if blur is triggered and if it dosen´t meets validations
      if(emailControl && emailControl.touched && emailControl.invalid) {
        if(emailControl!.hasError('required')) {
          this.emailErrorMessage.set('Email is required.');
          return;
        }
      }
      
      // If email is not valid 
      if(this.notValidEmail) {
        this.emailErrorMessage.set('Please enter a valid email address.')
        return
      }

      this.emailErrorMessage.set("")

    }

    changeNotValidEmail(){
      /**
       *  Checks if email is valis when input loses focus
       */

      // Email control
      const emailControl = this.emailFormControl;

      // If email exists and if if it dosen´t meets validations
      if(emailControl && emailControl.invalid) {
        this.notValidEmail = emailControl.hasError('email');
      }

      if(emailControl && emailControl.valid){
        this.notValidEmail = false
      }
      
    }

    checkAllEmailErrors(){
      this.changeNotValidEmail()
      this.checkEmailErrors()
    }

   checkPasswordError() {
    const control = this.passwordFormControl;

    if (control && control.touched && control.invalid) {
      if (control.hasError('required')) {
        this.passwordErrorMessage.set('Password is required.');
        return;
      }
      if (control.hasError('minlength')) {
        this.passwordErrorMessage.set('Password must be at least 8 characters long.');
        return;
      }
    }
    this.passwordErrorMessage.set("")
  }

    checkAllErrors(){
      this.loginForm.markAllAsTouched()
      this.checkEmailErrors()
      this.checkPasswordError()
      
    }

    get emailFormControl() {
      return this.loginForm.get('email');
    }

    get passwordFormControl() {
      return this.loginForm.get('password');
    }
  
}
