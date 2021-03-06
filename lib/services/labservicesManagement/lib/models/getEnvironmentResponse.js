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
 * Represents the environments details
 *
 */
class GetEnvironmentResponse {
  /**
   * Create a GetEnvironmentResponse.
   * @property {object} [environment] Details of the environment
   * @property {string} [environment.name] Name of the Environment
   * @property {string} [environment.description] Description of the
   * Environment
   * @property {string} [environment.id] Resource Id of the environment
   * @property {string} [environment.provisioningState] The provisioning state
   * of the environment. This also includes LabIsFull and NotYetProvisioned
   * status.
   * @property {object} [environment.virtualMachineDetails] Details of backing
   * DTL virtual machine with compute and network details.
   * @property {string} [environment.virtualMachineDetails.provisioningState]
   * Provisioning state of the Dtl VM
   * @property {string} [environment.virtualMachineDetails.rdpAuthority]
   * Connection information for Windows
   * @property {string} [environment.virtualMachineDetails.sshAuthority]
   * Connection information for Linux
   * @property {string} [environment.virtualMachineDetails.privateIpAddress]
   * PrivateIp address of the compute VM
   * @property {string} [environment.virtualMachineDetails.userName] Compute VM
   * login user name
   * @property {string} [environment.virtualMachineDetails.lastKnownPowerState]
   * Last known compute power state captured in DTL
   * @property {object} [environment.latestOperationResult] The details of the
   * latest operation. ex: status, error
   * @property {string} [environment.latestOperationResult.status] The current
   * status of the operation.
   * @property {string} [environment.latestOperationResult.errorCode] Error
   * code on failure.
   * @property {string} [environment.latestOperationResult.errorMessage] The
   * error message.
   * @property {string} [environment.latestOperationResult.requestUri] Request
   * URI of the operation.
   * @property {string} [environment.latestOperationResult.httpMethod] The
   * HttpMethod - PUT/POST/DELETE for the operation.
   * @property {string} [environment.latestOperationResult.operationUrl] The
   * URL to use to check long-running operation status
   * @property {string} [environment.environmentState] Publishing state of the
   * environment setting Possible values are Creating, Created, Failed
   * @property {moment.duration} [environment.totalUsage] How long the
   * environment has been used by a lab user
   * @property {date} [environment.passwordLastReset] When the password was
   * last reset on the environment.
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetEnvironmentResponse
   *
   * @returns {object} metadata of GetEnvironmentResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetEnvironmentResponse',
      type: {
        name: 'Composite',
        className: 'GetEnvironmentResponse',
        modelProperties: {
          environment: {
            required: false,
            readOnly: true,
            serializedName: 'environment',
            type: {
              name: 'Composite',
              className: 'EnvironmentDetails'
            }
          }
        }
      }
    };
  }
}

module.exports = GetEnvironmentResponse;
