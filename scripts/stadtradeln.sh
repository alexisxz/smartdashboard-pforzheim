#!/bin/bash

# This script is used to download the traffic load data from gitlab and move it to the assets/data folder

# Download the traffic load data from the server
curl -o stadtradeln_data.csv "https://gitlab.opencode.de/smart-city-muenster/klimadashboard-muenster/stadtradeln-scraper/-/raw/main/data/stadtradeln_data.csv"

# Move the traffic load data to the assets/data folder (relative path from the root of the project)
mv stadtradeln_data.csv assets/data/stadtradeln_data.csv

# Keep only Pforzheim from the remote source, then append local BW comparison
# cities with values close to Pforzheim.
awk -F, 'NR == 1 || $1 == "pforzheim"' assets/data/stadtradeln_data.csv > assets/data/stadtradeln_data.tmp
mv assets/data/stadtradeln_data.tmp assets/data/stadtradeln_data.csv

if ! grep -q '^baden-baden,' assets/data/stadtradeln_data.csv; then
  cat <<'EOF' >> assets/data/stadtradeln_data.csv
baden-baden,Baden-Baden,2020,172961
baden-baden,Baden-Baden,2021,198557
baden-baden,Baden-Baden,2022,209900
baden-baden,Baden-Baden,2023,207605
baden-baden,Baden-Baden,2024,183434
schwaebisch-hall,Schwäbisch Hall,2020,46042
schwaebisch-hall,Schwäbisch Hall,2021,62859
schwaebisch-hall,Schwäbisch Hall,2022,134783
schwaebisch-hall,Schwäbisch Hall,2023,144881
schwaebisch-hall,Schwäbisch Hall,2024,127812
bad-saeckingen,Bad Säckingen,2020,63696
bad-saeckingen,Bad Säckingen,2021,83827
bad-saeckingen,Bad Säckingen,2022,126812
bad-saeckingen,Bad Säckingen,2023,131963
bad-saeckingen,Bad Säckingen,2024,102255
mosbach,Mosbach,2021,55570
mosbach,Mosbach,2022,72650
mosbach,Mosbach,2023,92140
mosbach,Mosbach,2024,95485
EOF
fi

# Exit the script
exit 0
