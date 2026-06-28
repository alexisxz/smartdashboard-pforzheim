#!/bin/bash

# This script is used to download the traffic load data from gitlab and move it to the assets/data folder

# Download the traffic load data from the server
curl -o stadtradeln_data.csv "https://gitlab.opencode.de/smart-city-muenster/klimadashboard-muenster/stadtradeln-scraper/-/raw/main/data/stadtradeln_data.csv"

# Move the traffic load data to the assets/data folder (relative path from the root of the project)
mv stadtradeln_data.csv assets/data/stadtradeln_data.csv

# Keep local Pforzheim comparison rows that are not part of the remote source.
if ! grep -q '^heilbronn,' assets/data/stadtradeln_data.csv; then
  cat <<'EOF' >> assets/data/stadtradeln_data.csv
heilbronn,Heilbronn,2020,319907
heilbronn,Heilbronn,2021,306969
heilbronn,Heilbronn,2022,367192
heilbronn,Heilbronn,2023,437810
heilbronn,Heilbronn,2024,426026
EOF
fi

# Exit the script
exit 0
