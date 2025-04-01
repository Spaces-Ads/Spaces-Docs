---
sidebar_position: 4
---

# Interactions
This endpoint is used by the Spaces Ad Engine to track game task completion, allowing players to unlock brand rewards during campaigns.

Interactions can vary from game to game. Here are some examples:

1. Collecting gold coins or power-ups in Subway Surfers
2. Eliminating enemies in Call of Duty
3. Winning or losing matches
4. Bursting candies in Candy Crush
etc..

Essentially, interactions can include any form of in-game action or achievement. By default, all your assets can be used to update interactions. For certain interactions that cannot be linked to any asset, **```REWARD_TRACKER```** assets are created solely for tracking purposes.

To update interactions and unlock brand rewards during a campaign, you need to call the method 
**```spacesEngine.AssetUpdateInteraction()```** appropriately in your game code.

The method is defined as follows:
**```spacesEngine.AssetUpdateInteraction(assetId,interactionCount=1)```** 
- **assetId:** You can obtain this by using **```SpacesAssets.GetAssetId("your-asset-name")```**.
- **interactionCount:** This argument defaults to 1 and represents the number of interactions. You can only pass an integer value here.

```csharp
//Examples
spacesEngine.AssetUpdateInteraction(SpacesAssets.GetAssetId("Coin"),20); //can be used to trigger 20 coins where collected
spacesEngine.AssetUpdateInteraction(SpacesAssets.GetAssetId("SurvivalTimeTracker"),200); //can be used to trigger, that the player survived for 200 seconds
spacesEngine.AssetUpdateInteraction(SpacesAssets.GetAssetId("MatchWonTracker")); //can be used to trigger that a match has been won
spacesEngine.AssetUpdateInteraction(SpacesAssets.GetAssetId("Candy")); //can be used to that a candy has been collected or bursted.
```

You will find all your game related Interaction endpoints at the end of ***```SpacesController```***. You can access it universally across your game and scenes. You can find **```SpacesController.cs```** in **```\Spaces\Scripts```**

**Example**
```csharp
public static void MatchWon(){
    spacesEngine.AssetUpdateInteraction(SpacesAssets.GetAssetId("MatchWonTracker"));
}

public static void CoinCollected(int count){
    spacesEngine.AssetUpdateInteraction(SpacesAssets.GetAssetId("Coin"),count);
}

public static void PlayerSurvived(int time){
    spacesEngine.AssetUpdateInteraction(SpacesAssets.GetAssetId("SurvivalTimeTracker"),time);
}
```

You can now call these functions directly using.
```csharp
SpacesController.MatchWon();
SpacesController.CoinCollected(count);
SpacesController.PlayerSurvived(time);
```

### NOTE: 
Make sure you call any Interactions endpoint before you call **```SpacesController.UpdateGameSession();```** function

### Next...
Let's move to Adding the Spaces UI to your game.

