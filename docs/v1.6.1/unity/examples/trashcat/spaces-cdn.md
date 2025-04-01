---
sidebar_position: 5
---

# Spaces CDN

## CDN Setup

<video controls width="800">
  <source src="https://gamespaces.store/spaces-docs-videos/TrashCat-Doc-Demo-Video20-1.6.1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

Before moving forward, If your game already uses addressables, save the Catalog Load Path of Top-Level **Addressable Asset Settings**. You can access **Addressable Asset Settings** by clicking on a Addressable Group then on **Inspect Top Level Settings**.

1. Go to **Spaces** -> **Setup Spaces Addressables**
2. If you are using your own loading screen, choose **SpacesLoader** and if you are using SpacesSplashScene, choose **SpacesLoaderInSplashScene** 
3. Click **Apply Setup**
4. The above steps, creates a new **SpacesGroup**, add the respective Spaces Assets, renames them and sets the build & load paths for the group appropriately. Also the Load Path of Top-Level **Addressable Asset Settings** set as **Spaces Load Path**. If you are already using Addressables with a different value here, the next section covers handling this scenario.
5. Set your appropriate **Build Path** in **Addressable Asset Settings**. If everything is fine, you can leave it as it is. You can access **Addressable Asset Settings** by clicking on **SpacesGroup** then on **Inspect Top Level Settings**.


### If Your Game Already Uses Addressables

Call **```SpacesController.SetDefaultHostUrl(string loadPath);```** before where ever you are calling **```await SpacesController.Load();```** and pass the Load Path of your Catalog. If you are generating the Catalog Load Path in Runtime, make sure you fetch the path and pass it in **```SpacesController.SetDefaultHostUrl(string loadPath);```**

```csharp
    SpacesController.SetDefaultHostUrl("your-previous-default-addressables-group-load-path");
    await SpacesController.Load();
```
Cool, Integration is Done.

## Running Campaigns Workflow.
<video controls width="800">
  <source src="https://gamespaces.store/spaces-docs-videos/TrashCat-Doc-Demo-Video-21-1.6.1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

1. Import the **Asset File**, and import all. This will add an additional folder in **Assets/Spaces/Assets** Directory.
2. Click **Spaces** -> **Set Spaces Assets**.
3. Choose the Appropriate Folder from **Assets** folder from  **Spaces** Directory and then click **Use Assets**
4. After that in **Addressables Groups** click **Build** and click on **Update a previous Build**

**NOTE: NEVER click on update New Build after the first time integration, as it will need you to generate a new Game Build/APK and update the Game itself**

5. Now go to file explorer, to your build path. Send us all the files present in the Build folder

And That’s it.

