---
sidebar_position: 1
---

# Adding New Asset

Provide the following asset details.
1. Update & Add new assets in your **```Game Assets```** and **```Game Asset Components```** Sheet.
2. Download Sheet as .csv files upload it [here](https://forms.gle/JFr45Np13aYzwJwz6), also similarly upload the reference asset prefabs for the new asset [here](https://forms.gle/JFr45Np13aYzwJwz6)
3. You will receive an updated **```\SpacesAssets.cs```** file that you need to copy & replace at **```\Spaces\Scripts\```**. You will also receive additional Tracker and Loader Scripts for the new assets and its components, kindly add those scripts to **```\Spaces\Scripts\Assets\Trackers```** and **```\Spaces\Scripts\Assets\Loaders```**
4. Follow the same steps mentioned for the [Asset](/docs/v1.6.0/unity/integration/spaces-assets/intro) & [CDN](/docs/v1.6.0/unity/integration/spaces-cdn) integration.
5. You can add asset Interactions by using the code snippet provided and following the Asset Integration steps [here](/docs/v1.6.0/unity/integration/spaces-assets/interactions). The code snippet will be similar to the one below
```csharp
spacesEngine.AssetUpdateInteraction(SpacesAssets.GetAssetId("your-asset-name"),interactionValue); //pass your interactionValue
```