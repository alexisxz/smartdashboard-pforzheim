#!/bin/bash

# This script is used to download the ms open data from gitlab and move it to the assets/data folder

# Download thems open data from gitlab
curl -o ms-open-data-parser-main.zip "https://gitlab.opencode.de/smart-city-muenster/klimadashboard-muenster/ms-open-data-parser/-/archive/main/ms-open-data-parser-main.zip?path=data"

# Extract .zip and move the ms open data to the assets/data folder
unzip ms-open-data-parser-main.zip
mv ms-open-data-parser-main-data/data/* assets/data/

# Remove the .zip and extracted folder
rm -r ms-open-data-parser-main.zip ms-open-data-parser-main-data

# Exit the script
exit 0