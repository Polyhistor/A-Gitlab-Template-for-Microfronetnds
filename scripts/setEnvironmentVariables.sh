# going to the root
cd ../

PACKAGE_VERSION=$(node -p "require('./package.json').version")
PACKAGE_NAME=$(node -p "require('./package.json').name")

# creating the env file
echo "VITE_OUT_DIR=dist/${BUILD_VERSION}" > .env
echo "VITE_PACKAGE_NAME=${PACKAGE_NAME}" >> .env