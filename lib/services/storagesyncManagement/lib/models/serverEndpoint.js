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
 * Server Endpoint object.
 *
 * @extends models['ProxyResource']
 */
class ServerEndpoint extends models['ProxyResource'] {
  /**
   * Create a ServerEndpoint.
   * @property {string} [serverLocalPath] Server Local path.
   * @property {string} [cloudTiering] Cloud Tiering. Possible values include:
   * 'on', 'off'
   * @property {number} [volumeFreeSpacePercent] Level of free space to be
   * maintained by Cloud Tiering if it is enabled.
   * @property {number} [tierFilesOlderThanDays] Tier files older than days.
   * @property {string} [friendlyName] Friendly Name
   * @property {string} [serverResourceId] Server Resource Id.
   * @property {string} [provisioningState] ServerEndpoint Provisioning State
   * @property {string} [lastWorkflowId] ServerEndpoint lastWorkflowId
   * @property {string} [lastOperationName] Resource Last Operation Name
   * @property {object} [syncStatus] Server Endpoint sync status
   * @property {string} [syncStatus.downloadHealth] Download Health Status.
   * Possible values include: 'Healthy', 'Error', 'SyncBlockedForRestore',
   * 'SyncBlockedForChangeDetectionPostRestore', 'NoActivity'
   * @property {string} [syncStatus.uploadHealth] Upload Health Status.
   * Possible values include: 'Healthy', 'Error', 'SyncBlockedForRestore',
   * 'SyncBlockedForChangeDetectionPostRestore', 'NoActivity'
   * @property {string} [syncStatus.combinedHealth] Combined Health Status.
   * Possible values include: 'Healthy', 'Error', 'SyncBlockedForRestore',
   * 'SyncBlockedForChangeDetectionPostRestore', 'NoActivity'
   * @property {string} [syncStatus.syncActivity] Sync activity. Possible
   * values include: 'Upload', 'Download', 'UploadAndDownload'
   * @property {number} [syncStatus.totalPersistentFilesNotSyncingCount] Total
   * count of persistent files not syncing (combined upload + download).
   * Reserved for future use.
   * @property {date} [syncStatus.lastUpdatedTimestamp] Last Updated Timestamp
   * @property {object} [syncStatus.uploadStatus] Upload Status
   * @property {number} [syncStatus.uploadStatus.lastSyncResult] Last sync
   * result (HResult)
   * @property {date} [syncStatus.uploadStatus.lastSyncTimestamp] Last sync
   * timestamp
   * @property {date} [syncStatus.uploadStatus.lastSyncSuccessTimestamp] Last
   * sync success timestamp
   * @property {number} [syncStatus.uploadStatus.lastSyncPerItemErrorCount]
   * Last sync per item error count.
   * @property {number}
   * [syncStatus.uploadStatus.persistentFilesNotSyncingCount] Count of
   * persistent files not syncing. Reserved for future use.
   * @property {number} [syncStatus.uploadStatus.transientFilesNotSyncingCount]
   * Count of transient files not syncing. Reserved for future use.
   * @property {array} [syncStatus.uploadStatus.filesNotSyncingErrors] Array of
   * per-item errors coming from the last sync session. Reserved for future
   * use.
   * @property {object} [syncStatus.downloadStatus] Download Status
   * @property {number} [syncStatus.downloadStatus.lastSyncResult] Last sync
   * result (HResult)
   * @property {date} [syncStatus.downloadStatus.lastSyncTimestamp] Last sync
   * timestamp
   * @property {date} [syncStatus.downloadStatus.lastSyncSuccessTimestamp] Last
   * sync success timestamp
   * @property {number} [syncStatus.downloadStatus.lastSyncPerItemErrorCount]
   * Last sync per item error count.
   * @property {number}
   * [syncStatus.downloadStatus.persistentFilesNotSyncingCount] Count of
   * persistent files not syncing. Reserved for future use.
   * @property {number}
   * [syncStatus.downloadStatus.transientFilesNotSyncingCount] Count of
   * transient files not syncing. Reserved for future use.
   * @property {array} [syncStatus.downloadStatus.filesNotSyncingErrors] Array
   * of per-item errors coming from the last sync session. Reserved for future
   * use.
   * @property {object} [syncStatus.uploadActivity] Upload sync activity
   * @property {date} [syncStatus.uploadActivity.timestamp] Timestamp when
   * properties were updated
   * @property {number} [syncStatus.uploadActivity.perItemErrorCount] Per item
   * error count
   * @property {number} [syncStatus.uploadActivity.appliedItemCount] Applied
   * item count.
   * @property {number} [syncStatus.uploadActivity.totalItemCount] Total item
   * count (if available)
   * @property {number} [syncStatus.uploadActivity.appliedBytes] Applied bytes
   * @property {number} [syncStatus.uploadActivity.totalBytes] Total bytes (if
   * available)
   * @property {object} [syncStatus.downloadActivity] Download sync activity
   * @property {date} [syncStatus.downloadActivity.timestamp] Timestamp when
   * properties were updated
   * @property {number} [syncStatus.downloadActivity.perItemErrorCount] Per
   * item error count
   * @property {number} [syncStatus.downloadActivity.appliedItemCount] Applied
   * item count.
   * @property {number} [syncStatus.downloadActivity.totalItemCount] Total item
   * count (if available)
   * @property {number} [syncStatus.downloadActivity.appliedBytes] Applied
   * bytes
   * @property {number} [syncStatus.downloadActivity.totalBytes] Total bytes
   * (if available)
   * @property {string} [syncStatus.offlineDataTransferStatus] Offline Data
   * Transfer State. Possible values include: 'InProgress', 'Stopping',
   * 'NotRunning', 'Complete'
   * @property {string} [offlineDataTransfer] Offline data transfer. Possible
   * values include: 'on', 'off'
   * @property {string} [offlineDataTransferStorageAccountResourceId] Offline
   * data transfer storage account resource ID
   * @property {string} [offlineDataTransferStorageAccountTenantId] Offline
   * data transfer storage account tenant ID
   * @property {string} [offlineDataTransferShareName] Offline data transfer
   * share name
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ServerEndpoint
   *
   * @returns {object} metadata of ServerEndpoint
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServerEndpoint',
      type: {
        name: 'Composite',
        className: 'ServerEndpoint',
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
          serverLocalPath: {
            required: false,
            serializedName: 'properties.serverLocalPath',
            type: {
              name: 'String'
            }
          },
          cloudTiering: {
            required: false,
            serializedName: 'properties.cloudTiering',
            type: {
              name: 'String'
            }
          },
          volumeFreeSpacePercent: {
            required: false,
            serializedName: 'properties.volumeFreeSpacePercent',
            constraints: {
              InclusiveMaximum: 100,
              InclusiveMinimum: 0
            },
            type: {
              name: 'Number'
            }
          },
          tierFilesOlderThanDays: {
            required: false,
            serializedName: 'properties.tierFilesOlderThanDays',
            constraints: {
              InclusiveMaximum: 2147483647,
              InclusiveMinimum: 0
            },
            type: {
              name: 'Number'
            }
          },
          friendlyName: {
            required: false,
            serializedName: 'properties.friendlyName',
            type: {
              name: 'String'
            }
          },
          serverResourceId: {
            required: false,
            serializedName: 'properties.serverResourceId',
            type: {
              name: 'String'
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
          lastWorkflowId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.lastWorkflowId',
            type: {
              name: 'String'
            }
          },
          lastOperationName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.lastOperationName',
            type: {
              name: 'String'
            }
          },
          syncStatus: {
            required: false,
            readOnly: true,
            serializedName: 'properties.syncStatus',
            type: {
              name: 'Composite',
              className: 'ServerEndpointSyncStatus'
            }
          },
          offlineDataTransfer: {
            required: false,
            serializedName: 'properties.offlineDataTransfer',
            type: {
              name: 'String'
            }
          },
          offlineDataTransferStorageAccountResourceId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.offlineDataTransferStorageAccountResourceId',
            type: {
              name: 'String'
            }
          },
          offlineDataTransferStorageAccountTenantId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.offlineDataTransferStorageAccountTenantId',
            type: {
              name: 'String'
            }
          },
          offlineDataTransferShareName: {
            required: false,
            serializedName: 'properties.offlineDataTransferShareName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ServerEndpoint;
