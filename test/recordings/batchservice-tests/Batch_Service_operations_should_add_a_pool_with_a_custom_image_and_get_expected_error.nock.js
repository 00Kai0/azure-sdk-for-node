// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test4.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2020-03-01.11.0', '*')
  .reply(400, "{\r\n  \"odata.metadata\":\"https://test4.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"InvalidPropertyValue\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The value provided for one of the properties in the request body is invalid.\\nRequestId:0153a480-bb5c-410f-a2b0-559ab43f3643\\nTime:2020-03-21T02:05:16.8260335Z\"\r\n  },\"values\":[\r\n    {\r\n      \"key\":\"PropertyName\",\"value\":\"virtualMachineImageId\"\r\n    },{\r\n      \"key\":\"PropertyValue\",\"value\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test/providers/Microsoft.Compute/images/FakeImage\"\r\n    },{\r\n      \"key\":\"Reason\",\"value\":\"The specified resource id must be of the format /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions/{galleryImageVersionName}\"\r\n    }\r\n  ]\r\n}", { 'content-length': '903',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '0153a480-bb5c-410f-a2b0-559ab43f3643',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Sat, 21 Mar 2020 02:05:15 GMT',
  connection: 'close' });
 return result; }]];