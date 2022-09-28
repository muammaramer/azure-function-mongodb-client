# azure-function-mongodb-client
a sample mongodb client code with azure functions

# Usage
- Create a cosmos db with Mongo API and get the database url
- Create an azure function
- Add the database url as an application setting with the name DATABASE_URL to the azure function configuration > application settings
- Set the application settings for DATABASE_NAME and DATABASE_COLLECTION_NAME
- got to the kudu URL (or use vsCode) and create the package.json file in the root directory of the function (/site/wwwroot). NOTE: Kudu Access is not avaiable for the consumption linux plan.
- create the shared folder and create the mongo.js file
- Run npm install
- A sample function code is available in the listTasksFunction.js file
