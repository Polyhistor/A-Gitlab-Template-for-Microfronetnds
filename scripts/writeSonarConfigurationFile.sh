#!/bin/bash

# Fetch the GitLab group name and repository name.
REPO_INFO=$(git config --get remote.origin.url)

# Determine if the remote URL is using HTTPS or SSH.
if [[ $REPO_INFO == http* ]]; then
  # HTTPS
  GROUP_NAME=$(echo $REPO_INFO | awk -F'[/:]' '{print $4}')
  REPO_NAME=$(echo $REPO_INFO | awk -F'/' '{sub(/\.git$/, "", $NF); print $NF}')
else
  # SSH
  GROUP_NAME=$(echo $REPO_INFO | awk -F'[:/]' '{print $2}')
  REPO_NAME=$(echo $REPO_INFO | awk -F'/' '{sub(/\.git$/, "", $NF); print $NF}')
fi

# Use the fetched group and repo names to create sonar-project.properties.

# going to the root folder first
cd ../

# writing the configurations
echo "sonar.projectKey=${GROUP_NAME}_${REPO_NAME}" > sonar-project.properties
echo "sonar.organization=${GROUP_NAME}-sonarcloud-gitlab" >> sonar-project.properties
echo "" >> sonar-project.properties
echo "# This is the name and version displayed in the SonarCloud UI." >> sonar-project.properties
echo "#sonar.projectName=${REPO_NAME}" >> sonar-project.properties
echo "#sonar.projectVersion=1.0" >> sonar-project.properties
echo "" >> sonar-project.properties
echo "# Path is relative to the sonar-project.properties file. Replace \"\\\" by \"/\" on Windows." >> sonar-project.properties
echo "#sonar.sources=." >> sonar-project.properties
echo "" >> sonar-project.properties
echo "# Encoding of the source code. Default is default system encoding" >> sonar-project.properties
echo "#sonar.sourceEncoding=UTF-8" >> sonar-project.properties
