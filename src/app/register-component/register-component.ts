import { Component, input, signal } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthContainer } from '../components/auth-container/auth-container';
import { GenericButtonComponent } from "../components/generic-button-component/generic-button-component";
import { ErrorMessgeComponent } from "../components/error-messge-component/error-messge-component";

@Component({
  selector: 'app-register-component',
  imports: [ReactiveFormsModule, AuthContainer, GenericButtonComponent, ErrorMessgeComponent],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css',
})
export class RegisterComponent {
  // Indicates if the email is valid
  notValidEmail = false;

  // Signals for register form error messages
  userErrorMessage = signal('');
  emailErrorMessage = signal('');
  passwordErrorMessage = signal('');
  confirmPaswordErrorMessage = signal('');

  // All components of register form
  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  onSubmit() {
    /**
     * If all form components are valid submits information to server
     */

    this.checkAllErrors()

    if(this.registerForm.invalid){
      return
    }

    this.registerForm.reset();
  }

  checkUserNameError() {
    /**
     * If user name is not valid, returns error text
     * return: String with error message
     */

    // User name control
    const userNameControl = this.usernameFormControl;

    // If user name exists, if blur is triggered and if it dosen´t meets validations
    if (userNameControl && userNameControl.touched && userNameControl.invalid) {
      if (userNameControl!.hasError('required')) {
        this.userErrorMessage.set('Username is required.');
        return;
      }
    }
    this.userErrorMessage.set('');
  }

  checkEmailErrors() {
    /**
     * If email is not valid, returns error text
     */

    // Email control
    const emailControl = this.emailFormControl;

    // If email name exists, if blur is triggered and if it dosen´t meets validations
    if (emailControl && emailControl.touched && emailControl.invalid) {
      if (emailControl!.hasError('required')) {
        this.emailErrorMessage.set('Email is required.');
        return;
      }
    }

    // If email is not valid
    if (this.notValidEmail) {
      this.emailErrorMessage.set('Please enter a valid email address.');
      return;
    }

    this.emailErrorMessage.set('');
  }

  changeNotValidEmail() {
    /**
     *  Checks if email is valis when input loses focus
     */

    // Email control
    const emailControl = this.emailFormControl;

    // If email exists and if if it dosen´t meets validations
    if (emailControl && emailControl.invalid) {
      this.notValidEmail = emailControl.hasError('email');
    }

    // If email control is valis
    if (emailControl?.valid) {
      this.notValidEmail = false;
    }
  }
  checkAllEmailErrors() {
    /**
     * Checks for all possible email errors
     */
    this.changeNotValidEmail();
    this.checkEmailErrors();
  }

  checkPasswordError() {
    /**
     * Checks for password errors
     */

    // Error input
    const control = this.passwordFormControl;

    // If exist, is touched and is invalid
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
    this.passwordErrorMessage.set('');
  }

  checkPasswordMatch() {
    /**
     * Checks if password and confirm password match
     */

    // Password inputs
    const passwordControl = this.passwordFormControl;
    const confirmPasswordControl = this.confirmPasswordFormControl;

    // If password and confirm password exists
    if (confirmPasswordControl && passwordControl)  {

      // Checks if password are
      if (confirmPasswordControl.value != passwordControl.value) {
        this.confirmPaswordErrorMessage.set('Passwords do not match.');
      } else {
        this.confirmPaswordErrorMessage.set('');
      }
    }
  }

  checkAllPasswordErrors() {
    /**
     * Checks every possible password errors
     */
    this.checkPasswordError();
    this.checkPasswordMatch();
  }

  checkAllErrors() {
    /**
     * Checks if there is any form element is invalid
     */

    this.registerForm.markAllAsTouched();
    this.checkUserNameError();
    this.checkEmailErrors();
    this.checkPasswordError();
    this.checkPasswordMatch();
  }

  // Getters for all form elements
  get usernameFormControl() {
    return this.registerForm.get('username');
  }

  get emailFormControl() {
    return this.registerForm.get('email');
  }

  get passwordFormControl() {
    return this.registerForm.get('password');
  }

  get confirmPasswordFormControl() {
    return this.registerForm.get('confirmPassword');
  }
}
