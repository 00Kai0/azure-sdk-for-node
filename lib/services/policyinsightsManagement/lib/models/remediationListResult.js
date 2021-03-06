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

/**
 * List of remediations.
 */
class RemediationListResult extends Array {
  /**
   * Create a RemediationListResult.
   * @property {string} [nextLink] The URL to get the next set of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RemediationListResult
   *
   * @returns {object} metadata of RemediationListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RemediationListResult',
      type: {
        name: 'Composite',
        className: 'RemediationListResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RemediationElementType',
                  type: {
                    name: 'Composite',
                    className: 'Remediation'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RemediationListResult;
