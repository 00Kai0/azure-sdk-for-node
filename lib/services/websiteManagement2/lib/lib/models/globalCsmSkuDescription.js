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
 * A Global SKU Description.
 *
 */
class GlobalCsmSkuDescription {
  /**
   * Create a GlobalCsmSkuDescription.
   * @member {string} [name] Name of the resource SKU.
   * @member {string} [tier] Service Tier of the resource SKU.
   * @member {string} [size] Size specifier of the resource SKU.
   * @member {string} [family] Family code of the resource SKU.
   * @member {object} [capacity] Min, max, and default scale values of the SKU.
   * @member {number} [capacity.minimum] Minimum number of workers for this App
   * Service plan SKU.
   * @member {number} [capacity.maximum] Maximum number of workers for this App
   * Service plan SKU.
   * @member {number} [capacity.default] Default number of workers for this App
   * Service plan SKU.
   * @member {string} [capacity.scaleType] Available scale configurations for
   * an App Service plan.
   * @member {array} [locations] Locations of the SKU.
   * @member {array} [capabilities] Capabilities of the SKU, e.g., is traffic
   * manager enabled?
   */
  constructor() {
  }

  /**
   * Defines the metadata of GlobalCsmSkuDescription
   *
   * @returns {object} metadata of GlobalCsmSkuDescription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GlobalCsmSkuDescription',
      type: {
        name: 'Composite',
        className: 'GlobalCsmSkuDescription',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          tier: {
            required: false,
            serializedName: 'tier',
            type: {
              name: 'String'
            }
          },
          size: {
            required: false,
            serializedName: 'size',
            type: {
              name: 'String'
            }
          },
          family: {
            required: false,
            serializedName: 'family',
            type: {
              name: 'String'
            }
          },
          capacity: {
            required: false,
            serializedName: 'capacity',
            type: {
              name: 'Composite',
              className: 'SkuCapacity'
            }
          },
          locations: {
            required: false,
            serializedName: 'locations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          capabilities: {
            required: false,
            serializedName: 'capabilities',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CapabilityElementType',
                  type: {
                    name: 'Composite',
                    className: 'Capability'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = GlobalCsmSkuDescription;