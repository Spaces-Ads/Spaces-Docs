---
sidebar_position: 4
---

# Spaces UI

## ADDING TO GAME SCENE
Adding Spaces UI to your game scene is straightforward. You need to attach two Spaces UI prefabs to your Scene Hierarchy. 

**```SpacesAnnouncement```**
**```SpacesCheckoutUITrigger```**

You will find these UI prefabs under **```.\Spaces\UI\```**

1. **```SpacesAnnouncement```** - shows a popup announcement (once) that a new branded experience is running in the game. It is appropriate to place it in your Main Menu Scene or the First Scene post Loading Scene.

    Drag and Attach **```SpacesAnnouncement.prefab```** in the appropriate game scene hierarchy.

![alt-textx](@site/static/announcement-1.png)
![alt-textx](@site/static/announcement-2.png)

2. **```SpacesCheckoutUITrigger```** -  Is a UI Button which will be active, when there is an active brand campaign. Users on clicking will see the **```SpacesCheckout```** UI.

- Drag and Attach **```SpacesCheckoutUITrigger.prefab```** in the appropriate location in your UI and game. This is most likely somewhere in your game home or menu page.

- Resize, **```SpacesCheckoutUITrigger.prefab```**  components according the size that fits your UI. 
    
- You will need to resize Rect Transforms in **```SpacesCheckoutUITrigger```**, **```SpacesCheckoutUITrigger\SpacesCheckoutUITriggerButton```**, **```SpacesCheckoutUITrigger\SpacesCheckoutUITriggerButton\BackgroundIcon```** and **```SpacesCheckoutUITrigger\SpacesCheckoutUITriggerButton\PopIcon```**

![alt-textx](@site/static/checkoutUITrigger-1.png)
![alt-textx](@site/static/checkoutUITrigger-2.png)

**NOTE - While Integration or working on other aspects of the game you can disable the ```SpacesAnnouncement``` object in the Hierarchy. But You will have to make sure it is turned on again, before you generate the game build**

## PASS INPUTS BASED ON YOUR GAME
Head over to **```SpacesPostCampaignPanel```** under **```SpacesPersistent\SpacesCheckout.prefab```**. 

In **```SpacesPostCampaignPanelUI.cs```**, after **```spacesBackgroundPanel```** argument,  you would need pass two arguments one after the other.
    1. A function that will be triggered after a user responses to a Brand Question for rewarding them with in-game rewards like extras lives, free coins or gems etc in your game. 
    
**NOTE: Brands surveys are triggered for one day pre or post the campaign based on brand requirements, it is completely optional for the user, they can just press next to skip and not answer it. The UI/UX will also strongly adhere to your Game**

    ```csharp
    spacesEngine.EnablePostCampaignUI(...,spacesBackgroundPanel,()=>GemReward(10),...);
    ``` 
    2. (Optional) Pass a short text describing the in-game reward
    ```csharp
    spacesEngine.EnablePostCampaignUI(...,()=>GemReward(10),"EARN 10 GEMS",...);
    ```
In case you don't want to offer any such functions, just pass an empty function and an empty string "" respectively.

![alt-textx](@site/static/ui-postcampaignpanel-1.png)




Similarly do the same in **```SpacesPreCampaignPanel```** under **```SpacesPersistent\SpacesCheckout.prefab```**