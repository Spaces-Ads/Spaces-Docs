---
sidebar_position: 5
---

# Spaces CDN

## CDN Setup

<video controls width="800">
  <source src="https://gamespaces.store/spaces-docs-videos/TrashCat-Doc-Demo-Video20.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

### If Your Games Already Uses Addressables

1. Open **Addressables Groups**
2. Right Click and **Create New Group** and then Select **Packed Assets** 
3. Rename it to **SpacesGroup**
4. Click on **Inspect Top Level Settings** and Click on **Manage Profiles**
5. Click on **Create** at the TopLeft Corner
6. Create **Variable (All Profiles)**
7. Set the **Prefix Name** as **Spaces Load Path**
8. If you are using **```SpacesSplashScreen```**, Set **Remote.LoadPath** as ```{SpacesLoaderInSplashScene.HostURL}```, if not Set **Remote.LoadPath** as ```{SpacesLoader.HostURL}``` and close the window



9. Now Double Click on **SpacesGroup** in Addressables Group Window, In **Content Packing & Loading** set **Build Path** to the Path of your primary Catalog Build Path that you are using & **Load Path** to **Spaces Load Path** which you currently set from variables
10. Turn on **Use Asset Bundle Cache**
11. Set Cache Behaviour into **Clear When When New Version Loaded**


12. Click on **Inspect Top Level Settings** and turn on **Build Remote Catlog**
13. Set Catalog **Build & LoadPaths** to **custom**. Save your current Load Path elsewhere, you will need it in the next step.
Do not alter the Build Path, set the Load Path to **Spaces Load Path**.

14. Now Call **```SpacesController.SetDefaultHostUrl(string loadPath);```** before where ever you are calling **```await SpacesController.Load();```** and pass the Load Path of your Catalog that you had saved in the previous step. If you are generating the Catalog Load Path in Runtime, make sure you fetch the path and pass it in **```SpacesController.SetDefaultHostUrl(string loadPath);```**

```csharp
    SpacesController.SetDefaultHostUrl("your-previous-default-addressables-group-load-path");
    await SpacesController.Load();
```


## CDN Asset-Linking

<video controls width="800">
  <source src="https://gamespaces.store/spaces-docs-videos/TrashCat-Doc-Demo-Video21.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

1. In **Assets** Folder under **Spaces** Directory, Select all the files Drag and Drop all the files into SpacesGroup Tab
2. Now we have to rename all the in **SpacesGroup** to their respective file names. 
For example **```Assets/Spaces/Assets/Coin/SpacesCoinMesh.mesh```** into `**``SpacesCoinMesh``** etc.
3. Rename all the Assets 
4. Select all the **Sprites**, **Sprite Atlas** & **Textures** in **SpacesGroup** and Turn on **Use Crunch Compress** and Click **Apply**
5. Select all the assets in **SpacesGroup** and in the **Labels** tab, click on it and type **spacesGroup** and hit enter.
6. Finally the **SpacesGroup** will look something similar like this
7. Now go to **Build** under **Addressables Groups** and click on **New Build** -> **Default Build** Scripts.
8. Now go to file explorer, to your build path. Send us all the files present in the Build folder



Cool, Integration is Done. 

## Running Campaigns Workflow.
<video controls width="800">
  <source src="https://gamespaces.store/spaces-docs-videos/TrashCat-Doc-Demo-Video22.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

1. Open the Unity Project.
2. We will send you a list of files that you need to **Copy and replace** at the **Assets** folder under **Spaces** Directory 
3. After that in **Addressables Groups** click **Build** and click on **Update a previous Build**

**NOTE: NEVER click on update New Build after the first time integration, as it will need you to generate a new Game Build/APK and update the Game itself**


4. Now go to file explorer, to your build path. Send us all the files present in the Build folder

And That’s it.

