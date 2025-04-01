---
sidebar_position: 2
---

# Spaces Life Cycle

The Spaces Ad-Engine lifecycle states that must align with your game's lifecycle, Spaces takes care of all the states by itself, we will just need to take care of the **Game Load**, **Game Update/Game Over** state.

## LOAD

Let's start with the very first scene of your game, the Loading Scene or Splash Screen. Trash Cat game does not a default Splash or Loading Screen, therefore we will follow **```If Your Game Does Not Have a Loading Scene```**

<video controls width="800">
  <source src="https://gamespaces.store/spaces-docs-videos/TrashCat-Doc-Demo-Video3.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

### If Your Game Does Not Have a Loading Scene
A basic loading scene is provided. Add it to your build settings hierarchy above your game scene. You can find it at **`./Assets/Spaces/UI/SpacesSplashScene.Unity`**.

Feel free to modify the loading screen UI as needed. By default, the scene includes a background image with a loading icon.

1. Trigger the scene you want to load at the end of the `Initialize()` function in `SpacesLoaderInSplashScene.cs`. You can find this script in `./Assets/Spaces/Scripts/`.

    ```csharp
    private async Task Initialize(double lat, double lon, string deviceId, string defaultDeviceId)
    {
        // ---Rest of the code---
        await spacesEngine.Load(); 
        await SpacesController.StartGameSession();  
        SceneManager.LoadScene("Main"); // Trigger your game scene here 
    }
    ```



## UPDATE
<video controls width="800">
  <source src="https://gamespaces.store/spaces-docs-videos/TrashCat-Doc-Demo-Video4.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

Typically, your game will show a "Game Over" screen at some point in the game cycle. Just before this screen appears, you must trigger **`SpacesController.UpdateGameSession();`** This will display the Spaces UI if there is an active campaign.

1. Call the **`SpacesController.UpdateGameSession();`** function in the appropriate location, just before the "Game Over" screen is displayed.
2. Convert the parent function where you include **`SpacesController.UpdateGameSession();`** into an **`async Task`** function. Converting parent into async is suggested as a best practise but is not mandatory here.

    ```csharp
    using System.Threading.Tasks; // Add this library to support async functions

    public async Task YourFunction() //Typically your Game Over or Show Game Popup Function
    {
        // ---Rest of your code--- 
        await SpacesController.UpdateGameSession();
        // ---Rest of your code--- 
    }
    ```

During an active campaign, the Spaces UI will be displayed once **```await SpacesController.UpdateGameSession();```** is triggered. This UI allows brands to distribute rewards for in-game task completion, showcase call-to-action buttons, display a brand banner or video, and more. This UI is customized to align with your game's UI/UX. 

### Next...
We will link the Spaces Engine with your Game Assets.
