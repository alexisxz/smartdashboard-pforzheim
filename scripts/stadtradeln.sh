#!/bin/bash

# This script is used to download the traffic load data from gitlab and move it to the assets/data folder

# Download the traffic load data from the server
curl -o stadtradeln_data.csv "https://gitlab.opencode.de/smart-city-muenster/klimadashboard-muenster/stadtradeln-scraper/-/raw/main/data/stadtradeln_data.csv"

# Move the traffic load data to the assets/data folder (relative path from the root of the project)
mv stadtradeln_data.csv assets/data/stadtradeln_data.csv

# Exit the script
exit 0