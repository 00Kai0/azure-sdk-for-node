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
 * Describes a Virtual Machine Extension.
 *
 * @extends models['Resource']
 */
class VirtualMachineExtension extends models['Resource'] {
  /**
   * Create a VirtualMachineExtension.
   * @property {string} [forceUpdateTag] How the extension handler should be
   * forced to update even if the extension configuration has not changed.
   * @property {string} [publisher] The name of the extension handler
   * publisher.
   * @property {string} [virtualMachineExtensionType] Specifies the type of the
   * extension; an example is "CustomScriptExtension".
   * @property {string} [typeHandlerVersion] Specifies the version of the
   * script handler.
   * @property {boolean} [autoUpgradeMinorVersion] Indicates whether the
   * extension should use a newer minor version if one is available at
   * deployment time. Once deployed, however, the extension will not upgrade
   * minor versions unless redeployed, even with this property set to true.
   * @property {object} [settings] Json formatted public settings for the
   * extension.
   * @property {object} [protectedSettings] The extension can contain either
   * protectedSettings or protectedSettingsFromKeyVault or no protected
   * settings at all.
   * @property {string} [provisioningState] The provisioning state, which only
   * appears in the response.
   * @property {object} [instanceView] The virtual machine extension instance
   * view.
   * @property {string} [instanceView.name] The virtual machine extension name.
   * @property {string} [instanceView.type] Specifies the type of the
   * extension; an example is "CustomScriptExtension".
   * @property {string} [instanceView.typeHandlerVersion] Specifies the version
   * of the script handler.
   * @property {array} [instanceView.substatuses] The resource status
   * information.
   * @property {array} [instanceView.statuses] The resource status information.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of VirtualMachineExtension
   *
   * @returns {object} metadata of VirtualMachineExtension
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualMachineExtension',
      type: {
        name: 'Composite',
        className: 'VirtualMachineExtension',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
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
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: true,
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
          forceUpdateTag: {
            required: false,
            serializedName: 'properties.forceUpdateTag',
            type: {
              name: 'String'
            }
          },
          publisher: {
            required: false,
            serializedName: 'properties.publisher',
            type: {
              name: 'String'
            }
          },
          virtualMachineExtensionType: {
            required: false,
            serializedName: 'properties.type',
            type: {
              name: 'String'
            }
          },
          typeHandlerVersion: {
            required: false,
            serializedName: 'properties.typeHandlerVersion',
            type: {
              name: 'String'
            }
          },
          autoUpgradeMinorVersion: {
            required: false,
            serializedName: 'properties.autoUpgradeMinorVersion',
            type: {
              name: 'Boolean'
            }
          },
          settings: {
            required: false,
            serializedName: 'properties.settings',
            type: {
              name: 'Object'
            }
          },
          protectedSettings: {
            required: false,
            serializedName: 'properties.protectedSettings',
            type: {
              name: 'Object'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          instanceView: {
            required: false,
            serializedName: 'properties.instanceView',
            type: {
              name: 'Composite',
              className: 'VirtualMachineExtensionInstanceView'
            }
          }
        }
      }
    };
  }
}

module.exports = VirtualMachineExtension;
