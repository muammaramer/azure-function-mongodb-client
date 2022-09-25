# azure-function-mongodb-client
a sample mongodb client code with azure functions

# Usage
- Create a cosmos db with Mongo API and get the database url
- Create an azure function
- add the database url to the azure function configuration > application settings
- got to the kudu URL (or use vsCode) and create the package.json file in the root directory of the function (/site/wwwroot)
- create the shared folder and create the mongos.js file
- A sample function code is available in the listTasksFunction.js file
