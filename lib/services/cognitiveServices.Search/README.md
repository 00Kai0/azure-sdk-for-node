# Microsoft Azure SDK for Node.js - Cognitive Services Entity Search API

This project provides a Node.js package that makes it easy to work with Microsoft Azure Cognitive Services Entity Search API. Right now it supports:
- **Node.js version: 7.10.0 or higher**


## How to Install

```bash
npm install azure-cognitiveservices-search
```

## How to use

### Create credentials

 ```javascript
 var msRestAzure = require('ms-rest-azure');
 var credentials = msRestAzure.ApiSubscriptionKeyCredentials('<YourSubscriptionKey>');
 ```

### Query the Entity Search API

 ```javascript
 var search = require('azure-cognitiveservices-search');

 var entitySearchApi = new search.EntitySearchAPI(credentials);
 var query = 'seahawks';
 var options = {'market': 'en-us'};
 var response = entitySearchApi.entitiesOperations.search(query, options, function(err, result, request, response){
     console.log(err);
     console.log(result);
     console.log(request);
     console.log(response);
 });
 ```

## More Detailed Information

https://azure.microsoft.com/en-us/try/cognitive-services/ under "Search"