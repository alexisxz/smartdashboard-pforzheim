#!/bin/bash

# This script is used to download the ms buildings data from gitlab and move it to the assets/data folder

# Download the traffic load data from the server
curl -o strom.json "https://gitlab.opencode.de/smart-city-muenster/klimadashboard-muenster/ms-buildings-parser/-/raw/main/data/strom.json"
curl -o waerme.json "https://gitlab.opencode.de/smart-city-muenster/klimadashboard-muenster/ms-buildings-parser/-/raw/main/data/waerme.json"

# Move the ms buildings data to the assets/data folder (relative path from the root of the project)
mv strom.json assets/data/strom.json
mv waerme.json assets/data/waerme.json

# Exit the script
exit 0