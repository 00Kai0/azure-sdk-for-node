// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'e0b81f36-36ba-44f7-b550-7c9344a35893';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/eventHubEndpoints/events/ConsumerGroups/testconsumergroup?api-version=2016-02-03')
  .reply(200, "{\"tags\":null,\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub\",\"name\":\"testconsumergroup\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '173',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-request-id': '738e340c-19e4-4fb4-8465-56b6dff20c0c',
  'x-ms-correlation-request-id': '738e340c-19e4-4fb4-8465-56b6dff20c0c',
  'x-ms-routing-request-id': 'CENTRALUS:20160920T221335Z:738e340c-19e4-4fb4-8465-56b6dff20c0c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 20 Sep 2016 22:13:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/eventHubEndpoints/events/ConsumerGroups/testconsumergroup?api-version=2016-02-03')
  .reply(200, "{\"tags\":null,\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub\",\"name\":\"testconsumergroup\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '173',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-request-id': '738e340c-19e4-4fb4-8465-56b6dff20c0c',
  'x-ms-correlation-request-id': '738e340c-19e4-4fb4-8465-56b6dff20c0c',
  'x-ms-routing-request-id': 'CENTRALUS:20160920T221335Z:738e340c-19e4-4fb4-8465-56b6dff20c0c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 20 Sep 2016 22:13:35 GMT',
  connection: 'close' });
 return result; }]];