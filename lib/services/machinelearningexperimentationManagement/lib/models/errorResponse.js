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
 * The error response send when an operation fails.
 *
 */
class ErrorResponse {
  /**
   * Create a ErrorResponse.
   * @member {string} code error code
   * @member {string} message error message
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorResponse
   *
   * @returns {object} metadata of ErrorResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorResponse',
      type: {
        name: 'Composite',
        className: 'ErrorResponse',
        modelProperties: {
          code: {
            required: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorResponse;
