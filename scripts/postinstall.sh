#!/bin/bash

# This script is used to run other scripts in this folder

# Run the traffic load script
echo "Running traffic load script..."
sh scripts/trafficload.sh

# Run the stadtradeln script
echo "Running stadtradeln script..."
sh scripts/stadtradeln.sh

# Run the ms open data script
echo "Running ms open data script..."
sh scripts/ms-open-data.sh

# Exit the script
exit 0