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
 * Describes a virtual machine scale set storage profile.
 *
 */
class VirtualMachineScaleSetUpdateStorageProfile {
  /**
   * Create a VirtualMachineScaleSetUpdateStorageProfile.
   * @property {object} [imageReference] The image reference.
   * @property {string} [imageReference.publisher] The image publisher.
   * @property {string} [imageReference.offer] Specifies the offer of the
   * platform image or marketplace image used to create the virtual machine.
   * @property {string} [imageReference.sku] The image SKU.
   * @property {string} [imageReference.version] Specifies the version of the
   * platform image or marketplace image used to create the virtual machine.
   * The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and
   * Build are decimal numbers. Specify 'latest' to use the latest version of
   * an image available at deploy time. Even if you use 'latest', the VM image
   * will not automatically update after deploy time even if a new version
   * becomes available.
   * @property {object} [osDisk] The OS disk.
   * @property {string} [osDisk.caching] The caching type. Possible values
   * include: 'None', 'ReadOnly', 'ReadWrite'
   * @property {boolean} [osDisk.writeAcceleratorEnabled] Specifies whether
   * writeAccelerator should be enabled or disabled on the disk.
   * @property {number} [osDisk.diskSizeGB] Specifies the size of the operating
   * system disk in gigabytes. This element can be used to overwrite the size
   * of the disk in a virtual machine image. <br><br> This value cannot be
   * larger than 1023 GB
   * @property {object} [osDisk.image] The Source User Image VirtualHardDisk.
   * This VirtualHardDisk will be copied before using it to attach to the
   * Virtual Machine. If SourceImage is provided, the destination
   * VirtualHardDisk should not exist.
   * @property {string} [osDisk.image.uri] Specifies the virtual hard disk's
   * uri.
   * @property {array} [osDisk.vhdContainers] The list of virtual hard disk
   * container uris.
   * @property {object} [osDisk.managedDisk] The managed disk parameters.
   * @property {string} [osDisk.managedDisk.storageAccountType] Specifies the
   * storage account type for the managed disk. NOTE: UltraSSD_LRS can only be
   * used with data disks, it cannot be used with OS Disk. Possible values
   * include: 'Standard_LRS', 'Premium_LRS', 'StandardSSD_LRS', 'UltraSSD_LRS'
   * @property {array} [dataDisks] The data disks.
   */
  constructor() {
  }

  /**
   * Defines the metadata of VirtualMachineScaleSetUpdateStorageProfile
   *
   * @returns {object} metadata of VirtualMachineScaleSetUpdateStorageProfile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualMachineScaleSetUpdateStorageProfile',
      type: {
        name: 'Composite',
        className: 'VirtualMachineScaleSetUpdateStorageProfile',
        modelProperties: {
          imageReference: {
            required: false,
            serializedName: 'imageReference',
            type: {
              name: 'Composite',
              className: 'ImageReference'
            }
          },
          osDisk: {
            required: false,
            serializedName: 'osDisk',
            type: {
              name: 'Composite',
              className: 'VirtualMachineScaleSetUpdateOSDisk'
            }
          },
          dataDisks: {
            required: false,
            serializedName: 'dataDisks',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'VirtualMachineScaleSetDataDiskElementType',
                  type: {
                    name: 'Composite',
                    className: 'VirtualMachineScaleSetDataDisk'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = VirtualMachineScaleSetUpdateStorageProfile;
