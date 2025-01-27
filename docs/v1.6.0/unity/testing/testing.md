# Testing

## Setting Spaces Environment
1. When testing your Spaces Integration, make sure **```env```** is set to **```DEV```** in **```SpacesController.cs```** in **```\Spaces\Scripts```**
    ```csharp
    public class SpacesController
    {
        // Rest-of-the-code
        public static string spacesStatus = "NOT_INITIALIZED";
        public static string prodAPIKey = "<YOUR-PROD-API-KEY-IS-PRESENT-HERE>";
        public static string devAPIKey = "<YOUR-DEV-API-KEY-IS-PRESENT-HERE>";
        public static string env = "DEV"; //SET IT TO PROD OR DEV Appropriately
        // Rest-of-the-code
    }
    ```
2. The **```PROD```** environment will not be set default. When you are ready to push your game live, kindly inform us, we will enable the ```PROD``` environment. After that you must set **```env```** is to **```PROD```** and then only generate the game build to push it live in production.

## Platform Handling
1. **```v1.6.0```** supports Unity **```WEBGL```**, **```ANDROID```**, **```EDITOR```** platforms. Based on the platform you had selected on Game Onboard Sheet, Spaces package will support that specific platform along with the **```EDITOR```** platform. 
2. If you game supports multiple platforms, You will be receiving separate **```Spaces.Unity.WebGl.Sdk.V2.dll```** file for each platform. You need to use the appropriate file when building the game for that specific platform. You need to replace the **```Spaces.Unity.WebGl.Sdk.V2.dll```** file. it is present in **```\Spaces\Resources\```** folder