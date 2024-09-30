#!/bin/bash

# This script is used to download the ms climate data from gitlab and move it to the assets/data folder



# Download the ms climate data from gitlab
curl -o climate_indices.json "https://gitlab.opencode.de/smart-city-muenster/klimadashboard-muenster/climate-indices-parser/-/raw/main/data/climate_indices.json"
curl -o climate_history.json "https://gitlab.opencode.de/smart-city-muenster/klimadashboard-muenster/climate-history-parser/-/raw/main/data/climate_history.json"


# Move the ms climate data to the assets/data folder
mv climate_indices.json assets/data/climate_indices.json
mv climate_history.json assets/data/climate_history.json

# Exit the script
exit 0