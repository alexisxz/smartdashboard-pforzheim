#!/bin/bash

# This script is used to download the traffic load data from the server and move it to the assets/data folder
# https://vzaweb_extern.stadt-muenster.de/geoserver/vza/ows?service=WFS&version=1.3.0&request=GetFeature&typeName=vza%3Amonatsmittelwerte&outputformat=application%2Fjson

# Download the traffic load data from the server
curl -o trafficload.json "https://vzaweb_extern.stadt-muenster.de/geoserver/vza/ows?service=WFS&version=1.3.0&request=GetFeature&typeName=vza%3Amonatsmittelwerte&outputformat=application%2Fjson"

# Move the traffic load data to the assets/data folder (relative path from the root of the project)
mv trafficload.json assets/data/trafficload.json

# Exit the script
exit 0