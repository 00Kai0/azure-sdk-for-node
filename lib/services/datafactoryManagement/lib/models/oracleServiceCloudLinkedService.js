/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Oracle Service Cloud linked service.
 *
 * @extends models['LinkedService']
 */
class OracleServiceCloudLinkedService extends models['LinkedService'] {
  /**
   * Create a OracleServiceCloudLinkedService.
   * @member {object} host The URL of the Oracle Service Cloud instance.
   * @member {object} username The user name that you use to access Oracle
   * Service Cloud server.
   * @member {object} password The password corresponding to the user name that
   * you provided in the username key.
   * @member {string} [password.type] Polymorphic Discriminator
   * @member {object} [useEncryptedEndpoints] Specifies whether the data source
   * endpoints are encrypted using HTTPS. The default value is true. Type:
   * boolean (or Expression with resultType boolean).
   * @member {object} [useHostVerification] Specifies whether to require the
   * host name in the server's certificate to match the host name of the server
   * when connecting over SSL. The default value is true. Type: boolean (or
   * Expression with resultType boolean).
   * @member {object} [usePeerVerification] Specifies whether to verify the
   * identity of the server when connecting over SSL. The default value is
   * true. Type: boolean (or Expression with resultType boolean).
   * @member {object} [encryptedCredential] The encrypted credential used for
   * authentication. Credentials are encrypted using the integration runtime
   * credential manager. Type: string (or Expression with resultType string).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of OracleServiceCloudLinkedService
   *
   * @returns {object} metadata of OracleServiceCloudLinkedService
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OracleServiceCloud',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'LinkedService',
        className: 'OracleServiceCloudLinkedService',
        modelProperties: {
          connectVia: {
            required: false,
            serializedName: 'connectVia',
            type: {
              name: 'Composite',
              className: 'IntegrationRuntimeReference'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          parameters: {
            required: false,
            serializedName: 'parameters',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ParameterSpecificationElementType',
                  type: {
                    name: 'Composite',
                    className: 'ParameterSpecification'
                  }
              }
            }
          },
          annotations: {
            required: false,
            serializedName: 'annotations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          host: {
            required: true,
            serializedName: 'typeProperties.host',
            type: {
              name: 'Object'
            }
          },
          username: {
            required: true,
            serializedName: 'typeProperties.username',
            type: {
              name: 'Object'
            }
          },
          password: {
            required: true,
            serializedName: 'typeProperties.password',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'type',
                clientName: 'type'
              },
              uberParent: 'SecretBase',
              className: 'SecretBase'
            }
          },
          useEncryptedEndpoints: {
            required: false,
            serializedName: 'typeProperties.useEncryptedEndpoints',
            type: {
              name: 'Object'
            }
          },
          useHostVerification: {
            required: false,
            serializedName: 'typeProperties.useHostVerification',
            type: {
              name: 'Object'
            }
          },
          usePeerVerification: {
            required: false,
            serializedName: 'typeProperties.usePeerVerification',
            type: {
              name: 'Object'
            }
          },
          encryptedCredential: {
            required: false,
            serializedName: 'typeProperties.encryptedCredential',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = OracleServiceCloudLinkedService;