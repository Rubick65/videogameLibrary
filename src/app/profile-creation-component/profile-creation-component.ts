import { Component, AfterViewInit, input, signal, inject } from '@angular/core';
import { AuthContainer } from '../components/auth-container/auth-container';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { GenericButtonComponent } from "../components/generic-button-component/generic-button-component";
import { ErrorMessgeComponent } from '../components/error-messge-component/error-messge-component';
import { Router } from '@angular/router';
import { ImageContainerComponent } from "../components/image-container-component/image-container-component";

@Component({
  selector: 'app-profile-creation-component',
  imports: [AuthContainer, ReactiveFormsModule, GenericButtonComponent, ErrorMessgeComponent, ImageContainerComponent],
  templateUrl: './profile-creation-component.html',
  styleUrls: ['./profile-creation-component.css'],
})
export class ProfileCreationComponent implements AfterViewInit {
  // Signals for input error messages
  userNameErrorSignal = signal<string>('');
  descriptionErrorSignal = signal<string>('');

  private router = inject(Router)

  // User profile configuration form inputs
  userConfigurationForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(12)]),
    description: new FormControl('', [
      Validators.minLength(20),
      Validators.maxLength(500),
    ]),
  });

  checkUserNameErrors() {
    /**
     * Checks for invalid user name
     */

    // User name input
    const userNameControl = this.userName;

    // If user name is null, is not touched or is valid
    if (userNameControl && userNameControl.invalid) {
      if (userNameControl.hasError('required')) {
        this.userNameErrorSignal.set('Username is required.');
        return;
      }

      if (userNameControl.hasError('maxlength')) {
        this.userNameErrorSignal.set('Username must be less than 12 characters.');
        return;
      }
    }

    this.userNameErrorSignal.set('');
  }

  checkDescriptionErrors() {
    const descriptionControl = this.description;

    // If description is null, is not touched or is valid

    if (descriptionControl && descriptionControl.touched && descriptionControl.invalid) {
      if (descriptionControl.hasError('minlength')) {
        this.descriptionErrorSignal.set('Description must be 20 characteres or more.');
        return;
      }

      if (descriptionControl.hasError('maxlength')) {
        this.descriptionErrorSignal.set('Description must be less than 500 characters.');
        return;
      }
    }

    this.descriptionErrorSignal.set('');
  }
  ngAfterViewInit(): void {
    /**
     *  Gets and shows preview of selected user profile image
     */

    // Input file for user to upload the image
    const userProfileImage = document.getElementById('file_input');

    // Image element for showing preview profile image
    const img = document.getElementById('previsualization_image') as HTMLImageElement;

    // Every time file input get's a new file
    userProfileImage?.addEventListener('change', (e) => {
      // Image input element
      const imageInput = e.target as HTMLInputElement;
      // Uploaded image
      const image = imageInput.files?.[0];

      // If image is null or empty
      if (!image) {
        // Default image is shown in previsualization
        img.src = 'assets/profile/profile_dark.png';
        return;
      }

      // Create file reader
      const fileReader = new FileReader();

      // When file reader is loaded
      fileReader.onload = function (e) {
        // Get's file reader
        const file = e.target as FileReader;

        // Update preview image to user uploaded image
        img.src = file.result as string;
      };

      fileReader.readAsDataURL(image);
    });
  }

  checkAllErrors() {
    this.userConfigurationForm.markAllAsTouched();
    this.checkUserNameErrors();
    this.checkDescriptionErrors();
  }

  onSubmit() {
    this.checkAllErrors();

    if (this.userConfigurationForm.invalid) {
      return;
    }

    this.router.navigate(['/platformsOfInterest'])
  }

  /**
   * Getters for form elements
   */
  get userName() {
    return this.userConfigurationForm.get('username');
  }

  get description() {
    return this.userConfigurationForm.get('description');
  }
}
