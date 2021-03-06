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
 * Backup resource vault config details.
 *
 */
class BackupResourceVaultConfig {
  /**
   * Create a BackupResourceVaultConfig.
   * @member {string} [storageModelType] Storage type. Possible values include:
   * 'Invalid', 'GeoRedundant', 'LocallyRedundant'
   * @member {string} [storageType] Storage type. Possible values include:
   * 'Invalid', 'GeoRedundant', 'LocallyRedundant'
   * @member {string} [storageTypeState] Locked or Unlocked. Once a machine is
   * registered against a resource, the storageTypeState is always Locked.
   * Possible values include: 'Invalid', 'Locked', 'Unlocked'
   * @member {string} [enhancedSecurityState] Enabled or Disabled. Possible
   * values include: 'Invalid', 'Enabled', 'Disabled'
   */
  constructor() {
  }

  /**
   * Defines the metadata of BackupResourceVaultConfig
   *
   * @returns {object} metadata of BackupResourceVaultConfig
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BackupResourceVaultConfig',
      type: {
        name: 'Composite',
        className: 'BackupResourceVaultConfig',
        modelProperties: {
          storageModelType: {
            required: false,
            serializedName: 'storageModelType',
            type: {
              name: 'String'
            }
          },
          storageType: {
            required: false,
            serializedName: 'storageType',
            type: {
              name: 'String'
            }
          },
          storageTypeState: {
            required: false,
            serializedName: 'storageTypeState',
            type: {
              name: 'String'
            }
          },
          enhancedSecurityState: {
            required: false,
            serializedName: 'enhancedSecurityState',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BackupResourceVaultConfig;
