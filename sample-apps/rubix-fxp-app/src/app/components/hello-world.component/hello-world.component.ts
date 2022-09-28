import { Component, Inject, forwardRef, OnInit } from '@angular/core';
// All the Fxp services are available in npm package @fxp/fxpservices. This is how you import a FXP Service.
import { UserProfileService } from '@fxp/fxpservices';

@Component({
  selector: 'app-myapp-helloworld',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

     UserName: string;
     ProfileImage: string;

    // This is how you inject Fxp Service in a compoennt or Service.
    // Please note for Fxp Services @Inject() and forwardRef() is mandatory.
    constructor(@Inject(forwardRef(() => UserProfileService)) private profileService: UserProfileService) {

    }

    ngOnInit(): void {
        const self = this;
        // Method call to promised based method in FXP Service.
        this.profileService.getBasicUserProfile(null).then(function(data: any) {
            self.UserName = data.firstName + ' ' + data.lastName;
        });
    }
}
