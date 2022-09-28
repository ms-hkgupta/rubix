import { IAppService, IStateConfig, IFxpAppContext, IServiceEndPoints, IRouteInfo, IPartnerBundle, IAuthExceptionServiceEndPoints } from '@fxp/fxpservices';
import { HelloWorldComponent } from './app/components/hello-world.component/hello-world.component';
import { HelloWorldModule } from './app/modules/hello-world.module';
import { RubixViewModel } from './app/view-models/rubix.viewmodel';
import { appSettings } from './environments/common/appsettingsGenerator';

// Root application class. Please rename this class as per the name of your application. 
export class SampleApplication implements IAppService {
    getAuthExceptionEndpoints(): IAuthExceptionServiceEndPoints[] {
      return []
    }

    getRoutes(fxpContext: IFxpAppContext): IRouteInfo {
        const helloWorldRoute: IStateConfig = {
        name: 'helloworld',
        url: '/helloworld',
        component: HelloWorldComponent,
        ngModule: HelloWorldModule,
        data: {
                headerName: 'Hello World',
                breadcrumbText: 'Hello World Component',
                pageTitle: 'Hello World Page'
             },
        };

        const rubixRoute: IStateConfig = {
          name: 'rubix',
          url: '/rubix',
          componentFramework: "Rubix",
          layoutJson: {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.0",
            "body": [
              {
                "type": "Container",
                "items": [
                  {
                    "type": "TextBlock",
                    "text": "Publish Adaptive Card schema",
                    "weight": "bolder",
                    "size": "medium"
                  },
                  {
                    "type": "ColumnSet",
                    "columns": [
                      {
                        "type": "Column",
                        "width": "auto",
                        "items": [
                          {
                            "type": "Image",
                            "url": "https://pbs.twimg.com/profile_images/3647943215/d7f12830b3c17a5a9e4afcc370e3a37e_400x400.jpeg",
                            "altText": "Matt Hidinger",
                            "size": "small",
                            "style": "person"
                          }
                        ]
                      },
                      {
                        "type": "Column",
                        "width": "stretch",
                        "items": [
                          {
                            "type": "TextBlock",
                            "text": "Matt Hidinger",
                            "weight": "bolder",
                            "wrap": true
                          },
                          {
                            "type": "TextBlock",
                            "spacing": "none",
                            "text": "Created {{DATE(2017-02-14T06:08:39Z, SHORT)}}",
                            "isSubtle": true,
                            "wrap": true
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Container",
                "items": [
                  {
                    "type": "TextBlock",
                    "text": "Now that we have defined the main rules and features of the format, we need to produce a schema and publish it to GitHub. The schema will be the starting point of our reference documentation.",
                    "wrap": true
                  },
                  {
                    "type": "FactSet",
                    "facts": [
                      {
                        "title": "Board:",
                        "value": "Adaptive Card"
                      },
                      {
                        "title": "List:",
                        "value": "Backlog"
                      },
                      {
                        "title": "Assigned to:",
                        "value": "Matt Hidinger"
                      },
                      {
                        "title": "Due date:",
                        "value": "Not set"
                      }
                    ]
                  }
                ]
              }
            ],
            "actions": [
              {
                "type": "Action.ShowCard",
                "title": "Comment",
                "card": {
                  "type": "AdaptiveCard",
                  "body": [
                    {
                      "type": "Input.Text",
                      "id": "comment",
                      "isMultiline": true,
                      "placeholder": "Enter your comment"
                    }
                  ],
                  "actions": [
                    {
                      "type": "Action.Submit",
                      "title": "OK"
                    }
                  ]
                }
              },
              {
                "type": "Action.OpenUrl",
                "title": "View",
                "url": "https://adaptivecards.io"
              }
            ]
          },
          viewModel: RubixViewModel,
          data: {
            headerName: 'Rubix World',
            breadcrumbText: 'Rubix Page',
            pageTitle: 'Rubix World'
          },

        }; 
        const routeInfo: IRouteInfo = {
            sharedBundles: [],
            routes: [helloWorldRoute, rubixRoute]
        }
    
        return routeInfo;
    }

    getServiceEndPoints(): Array<IServiceEndPoints> {

        return appSettings().serviceEndPoints;
    }

    getBundles(): IPartnerBundle[] {
        const baseUrl = appSettings().cdnBaseUrl;
        const bundle: IPartnerBundle = {
          name: 'SampleApp-Bundle', //TODO: Please use the format {appname}-{bundleName} to ensure the name of the bundle is always unique. 
          files: [
            `${baseUrl}/vendor.bundle.js`,
            `${baseUrl}/styles.bundle.js`,
            `${baseUrl}/main.bundle.js`,
          ],
          sequentialLoading: true,
        };

        return [bundle];
      }
}
