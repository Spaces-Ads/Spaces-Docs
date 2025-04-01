# Testing

## Setting Spaces Environment
1. By default, post integration, a test campaign will be enabled, so that the gameplay and the integration can be tested thoroughly, before pushing the game live.

## Platform Handling
1. **```v1.6.1```** supports Unity **```WEBGL```**, **```ANDROID```**, **```EDITOR```** platforms. Based on the platform you had selected on Game Onboard Sheet, Spaces package will support that specific platform along with the **```EDITOR```** platform. 
2. If you game supports multiple platforms, You will be receiving separate **```Spaces.Unity.WebGl.Sdk.V2.dll```** file for each platform. You need to use the appropriate file when building the game for that specific platform. You need to replace the **```Spaces.Unity.WebGl.Sdk.V2.dll```** file. it is present in **```\Spaces\Resources\```** folder