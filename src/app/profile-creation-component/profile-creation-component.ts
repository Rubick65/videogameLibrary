import { Component, AfterViewInit, input } from '@angular/core';
import { AuthContainer } from "../components/auth-container/auth-container";

@Component({
  selector: 'app-profile-creation-component',
  imports: [AuthContainer],
  templateUrl: './profile-creation-component.html',
  styleUrls: ['./profile-creation-component.css'],
})
export class ProfileCreationComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const userProfileImage = document.getElementById('file_input');

    const img = document.getElementById("previsualization_image") as HTMLImageElement

    userProfileImage?.addEventListener('change', e => {
      const imageInput = e.target as HTMLInputElement
      const image = imageInput.files?.[0]

      if(!image){
        img.src = "assets/profile/profile_dark.png";
        return
      }

      const fileReader = new FileReader()
      fileReader.onload = function( e ){
        const file = e.target as FileReader

        img.src = file.result as string
      }
      fileReader.readAsDataURL(image)
    })

  }
}
