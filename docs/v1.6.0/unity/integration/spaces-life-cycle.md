---
sidebar_position: 2
---

# Spaces Life Cycle

The Spaces Ad-Engine lifecycle states that must align with your game's lifecycle, Spaces takes care of all the states by itself, we will just need to take care of the **Game Load**, **Game Update/Game Over** state.

## LOAD

Let's start with the very first scene of your game, the Loading Scene or Splash Screen. 

### If Your Game Already Has a Loading Scene
1. Drag and Drop **```SpacesSplashScreen```** prefab at the bottom of the hierarchy in your Loading Scene. You can find it at **```\Spaces\UI```**
2. Drag and Drop **```SpacesLoader```** prefab at the bottom of the hierarchy in your Loading Scene. You can find it at **```\Spaces\UI```**

    ![alt-textx](@site/static/lifeCycle-Load1.png)
    ![alt-textx](@site/static/lifeCycle-Load2.png)

3. Drag and Drop  **```SpacesPersistent```** prefab at the bottom of the hierarchy in your Loading Scene. You can find it at **```\Spaces\UI```**
    ![alt-textx](@site/static/lifeCycle-Load5.png)
    ![alt-textx](@site/static/lifeCycle-Load6.png)

4. Call the **`SpacesController.Load()`** function in your game-loading logic. You need to place it at the very beginning of your game, before your game loading logic starts. 

    **Note that this should specifically be before any addressables Loading you do by default if any**

5. Ensure that the game starts only after the execution of the **`SpacesController.Load()`** function. Convert the parent function where you include **`SpacesController.Load()`** into an `async Task` function.

    **Example**
    ```csharp
    using System.Threading.Tasks; // Add this library to support async functions

    public async Task YourLoadingFunction(){
        // ---Place this code before at the beginnig before any game logic--- 
        await SpacesController.Load();
        // --- Rest of you code-------------------
    }
    ```

6. If in case, you cannot convert the parent function into ```async Task``` (eg: your parent is a Coroutine). In that case just place the above code into a separate ```async``` function and call the new function in the place where you trigger or load the next game scene.

    **Example**
    ```csharp
    using System.Threading.Tasks; // Add this library to support async functions

    //Create a function like below
    public async Task TriggerSpacesLoad(){
        await SpacesController.Load();
        // --- Rest of your game essential game loading code-------------------
    }

    public void YourLoadingFunction(){
        //Instead of Triggering the next Scene here, call the function that you created. 
        TriggerSpacesLoad();
    }
    ```

7. **```await SpacesController.Load();```** will also trigger a Loading Screen from **```SpacesSplashScreen```**. If you want to disable it, You can just make **```SpacesController.SpacesSplashLoadingScreenOn();```** and **```SpacesController.SpacesSplashLoadingScreenOff();```** as empty functions by commenting its function logic in **```SpacesController.cs```** located in **```\Spaces\Scripts```**

    ![alt-textx](@site/static/lifeCycle-Load7.png)


    **In SpacesController.cs**

    ```csharp
    public class SpacesController
    {
    
        // --- Rest of code-------------------

        public static void SpacesSplashLoadingScreenOn(){
            // Debug.Log("In SpacesLoadingScreenOn");
            // GameObject.Find("SpacesSplashScreen").transform.Find("LoadingScreen").gameObject.SetActive(true);
            // Debug.Log("After SpacesLoadingScreenOn");
        }

        public static void SpacesSplashLoadingScreenOff(){
            // Debug.Log("In SpacesLoadingScreenOff");
            // GameObject.Find("SpacesSplashScreen").transform.Find("LoadingScreen").gameObject.SetActive(false);
            // Debug.Log("After SpacesLoadingScreenOff");
        }

        // --- Rest of code-------------------
    }
    ```

    **Trivia: Throughout the integration you will be interacting with ```SpacesController.cs``` in ```\Spaces\Scripts```**


### If Your Game Does Not Have a Loading Scene
A basic loading scene is provided. Add it to your build settings hierarchy above your game scene. You can find it at **`./Assets/Spaces/UI/SpacesSplashScene.Unity`**.

![alt-textx](@site/static/lifeCycle-Load3.png)
![alt-textx](@site/static/lifeCycle-Load4.png)

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
