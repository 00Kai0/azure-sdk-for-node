/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the PowerShellSessionResource class.
 * @constructor
 * A powershell session resource (practically equivalent to a runspace
 * instance)
 * @member {string} [sessionId] the PowerShell Session Id.
 * 
 * @member {string} [state] The runspace state.
 * 
 * @member {string} [runspaceAvailability] The availability of the runspace.
 * 
 * @member {date} [disconnectedOn] Timestamp of last time the service
 * disconnected from the runspace.
 * 
 * @member {date} [expiresOn] Timestamp when the runspace expires.
 * 
 * @member {object} [version]
 * 
 * @member {number} [version.major] the leftmost number of the version
 * 
 * @member {number} [version.minor] the second leftmost number of the version
 * 
 * @member {number} [version.build] the third number of the version
 * 
 * @member {number} [version.revision] the fourth number of the version
 * 
 * @member {number} [version.majorRevision] the MSW of the fourth part
 * 
 * @member {number} [version.minorRevision] the LSW of the fourth part
 * 
 * @member {string} [powerShellSessionResourceName] Name of the runspace
 * 
 */
function PowerShellSessionResource() {
  PowerShellSessionResource['super_'].call(this);
}

util.inherits(PowerShellSessionResource, models['Resource']);

/**
 * Defines the metadata of PowerShellSessionResource
 *
 * @returns {object} metadata of PowerShellSessionResource
 *
 */
PowerShellSessionResource.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PowerShellSessionResource',
    type: {
      name: 'Composite',
      className: 'PowerShellSessionResource',
      modelProperties: {
        id: {
          required: false,
          readOnly: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          readOnly: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          readOnly: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        location: {
          required: false,
          readOnly: true,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        etag: {
          required: false,
          serializedName: 'etag',
          type: {
            name: 'String'
          }
        },
        sessionId: {
          required: false,
          serializedName: 'properties.sessionId',
          type: {
            name: 'String'
          }
        },
        state: {
          required: false,
          serializedName: 'properties.state',
          type: {
            name: 'String'
          }
        },
        runspaceAvailability: {
          required: false,
          serializedName: 'properties.runspaceAvailability',
          type: {
            name: 'String'
          }
        },
        disconnectedOn: {
          required: false,
          serializedName: 'properties.disconnectedOn',
          type: {
            name: 'DateTime'
          }
        },
        expiresOn: {
          required: false,
          serializedName: 'properties.expiresOn',
          type: {
            name: 'DateTime'
          }
        },
        version: {
          required: false,
          serializedName: 'properties.version',
          type: {
            name: 'Composite',
            className: 'Version'
          }
        },
        powerShellSessionResourceName: {
          required: false,
          serializedName: 'properties.name',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PowerShellSessionResource;