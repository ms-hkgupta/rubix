 // Import the component or service you want to test.
 import { HelloWorldComponent } from './hello-world.component';

describe('When myprofilecomponent is invoked', () => {
    let helloWorldComponent: HelloWorldComponent;
    let userProfileService: any;

    beforeEach(() => {
        // Create mock UserProfileService object with 1 method called getBasicUserProfile
        userProfileService = jasmine.createSpyObj('UserProfileService', ['getBasicUserProfile']);
        const returnValue = new Promise(function(resolve, reject) {
            resolve({'FirstName': 'Himanshu', 'LastName': 'Gupta'});
        });
        // Configure what will happen when this method is invoked.
        userProfileService.getBasicUserProfile.and.returnValue(returnValue);
        // Instantiate the component and fire the method you want to test
        helloWorldComponent = new HelloWorldComponent(userProfileService);
        helloWorldComponent.ngOnInit();
    });
    describe('When ngOnInit is invoked', () => {
        it('It should call getBasicUserProfile method of UserProfileService', () => {
            // This is validating that getBasicUserProfile method is getting invoked when ngOnInit method is invoked.
            expect(userProfileService.getBasicUserProfile).toHaveBeenCalled();
        });
        it('It should populate the UserName property', () => {
            // This is checking the Property UserName of Helloworldcomponent is getting set with the given value.
            // Settimeout method is used to delay the assertion as the method is going to return a promise.
            setTimeout(() => {
                expect(helloWorldComponent.UserName).toEqual('Himanshu Gupta');
            }, 0);

        });
    });
});
