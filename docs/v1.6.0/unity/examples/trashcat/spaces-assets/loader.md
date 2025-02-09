---
sidebar_position: 3
---

# Loader

## FishBone
<video controls width="800">
  <source src="https://gamespaces.store/spaces-docs-videos/TrashCat-Doc-Demo-Video11.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

## Sardines
<video controls width="800">
  <source src="https://gamespaces.store/spaces-docs-videos/TrashCat-Doc-Demo-Video12.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

## Magnet
<video controls width="800">
  <source src="https://gamespaces.store/spaces-docs-videos/TrashCat-Doc-Demo-Video13.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

## Obstacle Bin
<video controls width="800">
  <source src="https://gamespaces.store/spaces-docs-videos/TrashCat-Doc-Demo-Video14.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

## Obstacle Wheely Bin
<video controls width="800">
  <source src="https://gamespaces.store/spaces-docs-videos/TrashCat-Doc-Demo-Video15.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

## Character
<video controls width="800">
  <source src="https://gamespaces.store/spaces-docs-videos/TrashCat-Doc-Demo-Video16.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

### Standard Drag-Drop
Each asset may consist of multiple GameObjects, each responsible for rendering different components of the asset.
Typically, a GameObject will render a specific set of asset components, such as: like **```Meshes```**, **```Materials```**, **```Sprites```** etc.

1. **Locate the Loader Scripts:**
    - You can find it in the following directory:**```./Spaces/Scripts/Assets/Loaders```**.
2. **Attach the Loader Scripts:**
    - Simply drag and drop the relevant loader scripts onto their corresponding GameObjects.
    You will have to modify the script based on where you will be assigning the asset.
3. **Modify the Scripts as Needed:**
    - Depending on how you plan to assign the asset, you may need to modify the scripts to fit your specific requirements.

Your Loader script will look similar to this. You can access the asset by using the line ```(<AssetType>)asset;```
```csharp
public class SpacesBridgeLoader : MonoBehaviour
{
    SpacesEngine spacesEngine;
    void Awake(){
        spacesEngine = new SpacesEngine(SpacesController.GetAPIKey(),SpacesController.env);
        
        if(spacesEngine.IsCampaignActive()){
            var (asset, isValid) = spacesEngine.FetchAsset("SpacesBridgeMesh");
            //Fetch your appropriate component 
            // e.g. MeshFilter meshFilter = GetComponent<MeshFilter>();
            if (isValid1)
            {
                //(Mesh)asset; //Use this to assign the asset
                //e.g. meshFilter.mesh = (Mesh)asset
            }
            else
            {
                Debug.LogError("SpacesBridgeMesh: MeshFilter component not found or asset not loaded");
            }
        }
    }
}
```
**NOTE - In certain cases Sprites are grouped together as a Sprite Atlas and accessed from it, even though none of your assets would have Sprite Atlas as your components. This is done to achieve quick loading times in certain cases**

Let me explain what the Loader Script does for a better understanding

The most critical logic is the following:
```csharp        
if(spacesEngine.IsCampaignActive()){
    var (asset, isValid) = spacesEngine.FetchAsset("SpacesBridgeMesh");
    MeshFilter meshFilter = GetComponent<MeshFilter>();
    if(isValid) // && other additional custom conditions as per your requirement
    {
        meshFilter.mesh = (Mesh)asset;
    }
}
```

1. **```spacesEngine.FetchAsset("asset-component-name")```** retrieves the associated asset component and returns a boolean indicating whether the asset was successfully fetched. 

2. if **```isValid```** is true, you should assign the asset to the corresponding component in the GameObject.

3. We ensure that this logic is executed only when there is an active Spaces Campaign by wrapping it in **```if(spacesEngine.IsCampaignActive())```**.

4. This entire process runs only once, either in the **```Awake() or Start()```** before the first frame is rendered. 

5. Before assigning the asset to any of your asset components, you must cast it to the appropriate component type. For example:
**```meshFilter.mesh = (Mesh)asset;```**.


### Addition by Code & Modifications
In certain cases, you might programmatically assign/load the asset componets. In that case you will have to fetch the asset and then assign it wherever you want programmatically.

Make sure the following:
1. You typecast the component to its type and assign the asset based on the component.
2. Entire spaces asset loading logic, is enclosed within ```if(spacesEngine.IsCampaignActive())```

**NOTE - Ensure that Spaces asset is assigned before the asset Gameobject is set active**

**Template**
```csharp
using Spaces.Unity.WebGl.Sdk.V2; //use this library to get access to SpacesEngine class

//--- at the appropriate location in your code
SpacesEngine spacesEngine = new SpacesEngine(SpacesController.GetAPIKey(),SpacesController.env);
if(spacesEngine.IsCampaignActive()){
    var (asset, isValid) = spacesEngine.FetchAsset("asset-component-name");
    if(isValid){
        //asign it with (Mesh)asset or (Material)asset based on your Asset type
    }
    else{
        //your default assignment
    }
}
else{
    //your default assignment
}

```




