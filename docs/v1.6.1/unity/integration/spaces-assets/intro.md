---
sidebar_position: 1
---

# Intro

All the assets (except **REWARD_TRACKERS**) mentioned in the Game Onboard Sheet is equipped with two scripts, which can be found in the following directory: **```./Assets/Spaces/Scripts/Assets/```**

## Script Types

### 1. Tracker
The **Tracker** script must be attached to the asset's GameObject. Its primary functions include:

- **Tracking View Time**: Monitors how long the asset has been viewed.
- **Asset Clicks**: Records users click in the asset.
- **Visibility Count**: Keeps track of how many times the asset has been displayed to users.

### 2. Loader
The **Loader** scripts are a collection of scripts that should be attached to various GameObjects associated with the same asset. These scripts are responsible for:

- **Dynamic Loading**: Ensuring that the asset is loaded efficiently during active brand campaigns.

## Implementation Guidelines

In most scenarios, you simply attach the Tracker and Loader scripts to their respective GameObjects. However, in certain cases, manual code adjustments may be necessary to align with your specific game requirements.




