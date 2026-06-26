import { Component, AfterViewInit, input } from '@angular/core';
import { AuthContainer } from '../components/auth-container/auth-container';

@Component({
  selector: 'app-profile-creation-component',
  imports: [AuthContainer],
  templateUrl: './profile-creation-component.html',
  styleUrls: ['./profile-creation-component.css'],
})
export class ProfileCreationComponent implements AfterViewInit {
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
}
