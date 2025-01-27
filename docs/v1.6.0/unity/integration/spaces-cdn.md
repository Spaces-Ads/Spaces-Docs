---
sidebar_position: 5
---

# Spaces CDN

## CDN Setup

### If Your Games Does Not Use Addressables by Default

1. Go to **Windows** -> **Asset Management** -> **Addressables Groups** -> **Click on Create Addressables Settings**

![alt-textx](@site/static/cdn-1.png)

2. Ignore the Legacy Asset Bundles, to keep it as a separate module from addressables
3. Create Addressable Settings. Right Click on the **Default Local Group** and Rename it to **SpacesGroup**.

![alt-textx](@site/static/cdn-2.png)
![alt-textx](@site/static/cdn-3.png)

4. Click on **SpacesGroup**, on the right side you will see an inspector window pop-up
    1. Turn on **Use Asset Bundle Cache**
    2. Set Cache Behaviour into **Clear When When New Version Loaded**
    3. Click on **Inspect Top Level Settings**
    4. Turn on **Build Remote Catalog**
    5. Click on **Manage Profiles**

![alt-textx](@site/static/cdn-4.png)
![alt-textx](@site/static/cdn-5.png)
![alt-textx](@site/static/cdn-6.png)

5. Set Remote into **Custom**
    1. Set **Remote.BuildPath** as ```ServerData/[BuildTarget]```
    2. if you are using **```SpacesSplashScreen```**, Set **Remote.LoadPath** as ```{SpacesLoaderInSplashScene.HostURL}```, if not Set **Remote.LoadPath** as ```{SpacesLoader.HostURL}```
    3. Close the **Profile Window**

![alt-textx](@site/static/cdn-7.png)

6. Go back to **Inspect Top Level Settings** and Under Catalog set **Build and Load Paths** as **Remote** 

![alt-textx](@site/static/cdn-8.png)

7. Now in Double Click on **SpacesGroup** in Addressables Group Window, In **Content Packing & Loading** set **Build & Load Paths** to **Remote**

![alt-textx](@site/static/cdn-9.png)

### If Your Games Already Uses Addressables

1. Open **Addressables Groups**
2. Right Click and **Create New Group** and then Select **Packed Assets** 

![alt-textx](@site/static/cdn-10.png)

3. Rename it to **SpacesGroup**
4. Click on **Inspect Top Level Settings** and Click on **Manage Profiles**

![alt-textx](@site/static/cdn-11.png)
![alt-textx](@site/static/cdn-12.png)

5. Click on **Create** at the TopLeft Corner
6. Create **Variable (All Profiles)**

![alt-textx](@site/static/cdn-13.png)

7. Set the **Prefix Name** as **Spaces Load Path**
8. If you are using **```SpacesSplashScreen```**, Set **Remote.LoadPath** as ```{SpacesLoaderInSplashScene.HostURL}```, if not Set **Remote.LoadPath** as ```{SpacesLoader.HostURL}``` and close the window

![alt-textx](@site/static/cdn-14.png)

9. Now Double Click on **SpacesGroup** in Addressables Group Window, In **Content Packing & Loading** set **Build Path** to the Path of your primary Catalog Build Path that you are using & **Load Path** to **Spaces Load Path** which you currently set from variables

![alt-textx](@site/static/cdn-15.png)

10. Turn on **Use Asset Bundle Cache**
11. Set Cache Behaviour into **Clear When When New Version Loaded**

![alt-textx](@site/static/cdn-16.png)

12. Click on **Inspect Top Level Settings** and turn on **Build Remote Catlog**
13. Set Catalog **Build & LoadPaths** to **custom**. Save your current Load Path elsewhere, you will need it in the next step.
Do not alter the Build Path, set the Load Path to **Spaces Load Path**.

![alt-textx](@site/static/cdn-24.png)

14. Now Call **```SpacesController.SetDefaultHostUrl(string loadPath);```** before where ever you are calling **```await SpacesController.Load();```** and pass the Load Path of your Catalog that you had saved in the previous step. If you are generating the Catalog Load Path in Runtime, make sure you fetch the path and pass it in **```SpacesController.SetDefaultHostUrl(string loadPath);```**

```csharp
    SpacesController.SetDefaultHostUrl("your-previous-default-addressables-group-load-path");
    await SpacesController.Load();
```


## CDN Asset-Linking
1. In **Assets** Folder under **Spaces** Directory, Select all the files Drag and Drop all the files into SpacesGroup Tab

    ![alt-textx](@site/static/cdn-17.png)

2. Now we have to rename all the in **SpacesGroup** to their respective file names. 
For example **```Assets/Spaces/Assets/Coin/SpacesCoinMesh.mesh```** into `**``SpacesCoinMesh``** etc.
3. Rename all the Assets 

    ![alt-textx](@site/static/cdn-18.png)
    ![alt-textx](@site/static/cdn-19.png)

4. Select all the **Sprites**, **Sprite Atlas** & **Textures** in **SpacesGroup** and Turn on **Use Crunch Compress** and Click **Apply**
5. Select all the assets in **SpacesGroup** and in the **Labels** tab, click on it and type **spacesGroup** and hit enter.
6. Finally the **SpacesGroup** will look something similar like this

![alt-textx](@site/static/cdn-20.png)
![alt-textx](@site/static/cdn-21.png)

7. Now go to **Build** under **Addressables Groups** and click on **New Build** -> **Default Build** Scripts.

![alt-textx](@site/static/cdn-22.png)

8. Now go to file explorer, to your build path. Send us all the files present in the Build folder

Cool, Integration is Done. 

## Running Campaigns Workflow.
1. Open the Unity Project.
2. We will send you a list of files that you need to **Copy and replace** at the **Assets** folder under **Spaces** Directory 
3. After that in **Addressables Groups** click **Build** and click on **Update a previous Build**

**NOTE: NEVER click on update New Build after the first time integration, as it will need you to generate a new Game Build/APK and update the Game itself**

![alt-textx](@site/static/cdn-23.png)

4. Now go to file explorer, to your build path. Send us all the files present in the Build folder

And That’s it.

