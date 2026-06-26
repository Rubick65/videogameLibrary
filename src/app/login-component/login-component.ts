import { Component, signal } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthContainer } from '../components/auth-container/auth-container';

@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule, AuthContainer],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  notValidEmail = false;

  // Signals for login form error messages
  emailErrorMessage = signal('');
  passwordErrorMessage = signal('');

  // Creates a group with all elements in login form
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  onSubmit() {
    /**
     * If all form components are valid submits information to server
     */

    // Values of all inputs in the form
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

    // Checks if  email control exists and if is valid
    if (emailControl && emailControl.valid) {
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
     * Checks if errors exist in password form password input
     */

    // Pasword form component
    const control = this.passwordFormControl;

    // If password control exist, if is touched and invalid
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

  checkAllErrors() {
    /**
     * Checks all error when submit button is pressed
     * and shows error messages if needed.
     */
    this.loginForm.markAllAsTouched();
    this.checkEmailErrors();
    this.checkPasswordError();
  }

  /**
   * Getters for form elements
   */
  get emailFormControl() {
    return this.loginForm.get('email');
  }

  get passwordFormControl() {
    return this.loginForm.get('password');
  }
}
