/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure";
import * as moment from "moment";

export {

  BaseResource,
  CloudError
};

/**
 * Request parameters to initiate transfer.
 */
export interface InitiateTransferRequest {
  /**
   * Target Usage context for devTest subscriptions.
   */
  billingProfileId?: string;
  /**
   * Email Id of recipient for transfer.
   */
  recipientEmailId?: string;
}

/**
 * Address details.
 */
export interface Address {
  /**
   * First Name.
   */
  firstName?: string;
  /**
   * Last Name.
   */
  lastName?: string;
  /**
   * Company Name.
   */
  companyName?: string;
  /**
   * Address Line1.
   */
  addressLine1?: string;
  /**
   * Address Line2.
   */
  addressLine2?: string;
  /**
   * Address Line3.
   */
  addressLine3?: string;
  /**
   * Address City.
   */
  city?: string;
  /**
   * Address Region.
   */
  region?: string;
  /**
   * Country code uses ISO2, 2-digit format.
   */
  country?: string;
  /**
   * Address Postal Code.
   */
  postalCode?: string;
}

/**
 * Result of the address validation
 */
export interface ValidateAddressResponse {
  /**
   * status of the address validation. Possible values include: 'Valid', 'Invalid'
   */
  status?: string;
  /**
   * list of suggested addresses.
   */
  suggestedAddresses?: Address[];
  /**
   * Validation error message.
   */
  validationMessage?: string;
}

/**
 * Details of the product to be transferred.
 */
export interface ProductDetails {
  /**
   * Type of the product to be transferred. Possible values include: 'AzureSubscription',
   * 'AzureReservation'
   */
  productType?: string;
  /**
   * Id of product to be transferred.
   */
  productId?: string;
}

/**
 * Request parameters to accept transfer.
 */
export interface AcceptTransferRequest {
  /**
   * Request parameters to accept transfer.
   */
  productDetails?: ProductDetails[];
}

/**
 * Error details for transfer execution.
 */
export interface ErrorModel {
  /**
   * Error code.
   */
  readonly errorCode?: string;
  /**
   * Error message.
   */
  readonly errorMessage?: string;
}

/**
 * Detailed transfer status.
 */
export interface DetailedTransferStatus {
  /**
   * Type of product being transferred. Possible values include: 'AzureSubscription',
   * 'AzureReservation'
   */
  readonly productType?: string;
  /**
   * Id of product being transferred.
   */
  readonly productId?: string;
  /**
   * Transfer status. Possible values include: 'NotStarted', 'InProgress', 'Completed', 'Failed'
   */
  readonly transferStatus?: string;
  /**
   * Error details for transfer execution.
   */
  errorDetails?: ErrorModel;
}

/**
 * Details of the transfer.
 */
export interface TransferDetails {
  /**
   * Transfer creation time.
   */
  readonly creationTime?: Date;
  /**
   * Transfer expiration time.
   */
  readonly expirationTime?: Date;
  /**
   * Target invoice section Id.
   */
  readonly invoiceSectionId?: string;
  /**
   * Target billing account Id.
   */
  readonly billingAccountId?: string;
  /**
   * Overall transfer status. Possible values include: 'Pending', 'InProgress', 'Completed',
   * 'CompletedWithErrors', 'Failed', 'Canceled', 'Declined'
   */
  readonly transferStatus?: string;
  /**
   * Email Id of recipient of transfer.
   */
  readonly recipientEmailId?: string;
  /**
   * Email Id of initiator of transfer.
   */
  readonly initiatorEmailId?: string;
  /**
   * Email Id who user canceled the transfer.
   */
  readonly canceledBy?: string;
  /**
   * Transfer last modification time.
   */
  readonly lastModifiedTime?: Date;
  /**
   * Detailed transfer status.
   */
  readonly detailedTransferStatus?: DetailedTransferStatus[];
}

/**
 * Details of the transfer.
 */
export interface RecipientTransferDetails {
  /**
   * Transfer creation time.
   */
  readonly creationTime?: Date;
  /**
   * Transfer expiration time.
   */
  readonly expirationTime?: Date;
  /**
   * Type of subscriptions that can be transferred.
   */
  readonly allowedProductType?: string[];
  /**
   * Overall transfer status. Possible values include: 'Pending', 'InProgress', 'Completed',
   * 'CompletedWithErrors', 'Failed', 'Canceled', 'Declined'
   */
  readonly transferStatus?: string;
  /**
   * Email Id of recipient of transfer.
   */
  readonly recipientEmailId?: string;
  /**
   * Email Id of initiator of transfer.
   */
  readonly initiatorEmailId?: string;
  /**
   * Email Id who user canceled the transfer.
   */
  readonly canceledBy?: string;
  /**
   * Transfer last modification time.
   */
  readonly lastModifiedTime?: Date;
  /**
   * Detailed transfer status.
   */
  readonly detailedTransferStatus?: DetailedTransferStatus[];
}

/**
 * The properties of the product to initiate a transfer.
 */
export interface TransferProductRequestProperties {
  /**
   * The destination invoice section id.
   */
  destinationInvoiceSectionId?: string;
  /**
   * The destination billing profile id.
   */
  destinationBillingProfileId?: string;
}

/**
 * Request parameters to transfer billing subscription.
 */
export interface TransferBillingSubscriptionResult {
  /**
   * The destination billing subscription id.
   */
  billingSubscriptionName?: string;
}

/**
 * Request parameters to transfer billing subscription.
 */
export interface TransferBillingSubscriptionRequestProperties {
  /**
   * The destination invoice section id.
   */
  destinationInvoiceSectionId?: string;
  /**
   * The destination billing profile id.
   */
  destinationBillingProfileId?: string;
}

/**
 * Request parameters to transfer billing subscription.
 */
export interface TransferBillingSubscriptionRequest {
  /**
   * The destination invoice section id.
   */
  destinationInvoiceSectionId?: string;
  /**
   * The destination billing profile id.
   */
  destinationBillingProfileId?: string;
}

/**
 * Error details of the transfer eligibility validation
 */
export interface ValidateSubscriptionTransferEligibilityError {
  /**
   * Error code for the product transfer validation. Possible values include: 'InvalidSource',
   * 'SubscriptionNotActive', 'InsufficientPermissionOnSource',
   * 'InsufficientPermissionOnDestination', 'DestinationBillingProfilePastDue',
   * 'SubscriptionTypeNotSupported', 'CrossBillingAccountNotAllowed',
   * 'NotAvailableForDestinationMarket'
   */
  code?: string;
  /**
   * The error message.
   */
  message?: string;
  /**
   * Detailed error message explaining the error.
   */
  details?: string;
}

/**
 * Result of the transfer eligibility validation.
 */
export interface ValidateSubscriptionTransferEligibilityResult {
  /**
   * Specifies whether the transfer is eligible or not.
   */
  readonly isTransferEligible?: boolean;
  /**
   * Validation error details.
   */
  errorDetails?: ValidateSubscriptionTransferEligibilityError;
}

/**
 * Summary of cancel product operation
 */
export interface UpdateAutoRenewOperationSummary {
  /**
   * The end date of this asset
   */
  endDate?: Date;
}

/**
 * Details about the enabled azure sku.
 */
export interface EnabledAzureSKUs {
  /**
   * The sku id.
   */
  readonly skuId?: string;
  /**
   * The sku description.
   */
  readonly skuDescription?: string;
}

/**
 * The Resource model definition.
 */
export interface Resource extends BaseResource {
  /**
   * Resource Id.
   */
  readonly id?: string;
  /**
   * Resource name.
   */
  readonly name?: string;
  /**
   * Resource type.
   */
  readonly type?: string;
}

/**
 * A billing profile resource.
 */
export interface BillingProfile extends Resource {
  /**
   * The billing profile name.
   */
  displayName?: string;
  /**
   * Purchase order number.
   */
  poNumber?: string;
  /**
   * Billing address.
   */
  address?: Address;
  /**
   * If the billing profile is opted in to receive invoices via email.
   */
  readonly invoiceEmailOptIn?: boolean;
  /**
   * Is OMS bootstrapped billing profile.
   */
  readonly isClassic?: boolean;
  /**
   * Invoice day.
   */
  readonly invoiceDay?: number;
  /**
   * The currency associated with the billing profile.
   */
  readonly currency?: string;
  /**
   * Information about the product.
   */
  enabledAzureSKUs?: EnabledAzureSKUs[];
  /**
   * The invoice sections associated to the billing profile.
   */
  invoiceSections?: InvoiceSection[];
}

/**
 * An InvoiceSection resource.
 */
export interface InvoiceSection extends Resource {
  /**
   * The name of the InvoiceSection.
   */
  displayName?: string;
  /**
   * The billing profiles associated to the billing account.
   */
  billingProfiles?: BillingProfile[];
}

/**
 * The attributes associated with legacy enrollment
 */
export interface EnrollmentPolicies {
  /**
   * The accountOwnerViewCharges flag for Enrollment
   */
  readonly accountOwnerViewCharges?: boolean;
  /**
   * The departmentAdminViewCharges flag for Enrollment
   */
  readonly departmentAdminViewCharges?: boolean;
  /**
   * The marketplaces flag for Enrollment
   */
  readonly marketplacesEnabled?: boolean;
  /**
   * The reserved instances flag for Enrollment
   */
  readonly reservedInstancesEnabled?: boolean;
}

/**
 * Current entity level details
 */
export interface Enrollment {
  /**
   * Enrollment Start Date
   */
  startDate?: Date;
  /**
   * Enrollment End Date
   */
  endDate?: Date;
  /**
   * The currency associated with enrollment
   */
  readonly currency?: string;
  /**
   * The channel for Enrollment
   */
  readonly channel?: string;
  /**
   * The attributes associated with legacy enrollment.
   */
  readonly policies?: EnrollmentPolicies;
  /**
   * The language for Enrollment
   */
  readonly language?: string;
  /**
   * The countryCode for Enrollment
   */
  readonly countryCode?: string;
  /**
   * Enrollment status
   */
  readonly status?: string;
  /**
   * Enrollment billing cycle
   */
  readonly billingCycle?: string;
}

/**
 * An account resource.
 */
export interface EnrollmentAccount extends Resource {
  /**
   * The account name.
   */
  accountName?: string;
  /**
   * The cost center name.
   */
  costCenter?: string;
  /**
   * The account owner
   */
  accountOwner?: string;
  /**
   * The status for account.
   */
  status?: string;
  /**
   * Account Start Date
   */
  startDate?: Date;
  /**
   * Account End Date
   */
  endDate?: Date;
  /**
   * Associated department. By default this is not populated, unless it's specified in $expand.
   */
  department?: Department;
}

/**
 * A department resource.
 */
export interface Department extends Resource {
  /**
   * The name for department.
   */
  departmentName?: string;
  /**
   * The cost center name.
   */
  costCenter?: string;
  /**
   * The status for department.
   */
  status?: string;
  /**
   * Associated enrollment accounts. By default this is not populated, unless it's specified in
   * $expand.
   */
  enrollmentAccounts?: EnrollmentAccount[];
}

/**
 * A billing account resource.
 */
export interface BillingAccount extends Resource {
  /**
   * The billing account name.
   */
  readonly displayName?: string;
  /**
   * The billing account Type. Possible values include: 'Organization', 'Enrollment'
   */
  readonly accountType?: string;
  /**
   * The address associated with billing account.
   */
  address?: Address;
  /**
   * Company Name.
   */
  readonly company?: string;
  /**
   * Country Name.
   */
  readonly country?: string;
  /**
   * The invoice sections associated to the billing account. By default this is not populated,
   * unless it's specified in $expand.
   */
  invoiceSections?: InvoiceSection[];
  /**
   * The billing profiles associated to the billing account. By default this is not populated,
   * unless it's specified in $expand.
   */
  billingProfiles?: BillingProfile[];
  /**
   * The details about the associated legacy enrollment. By default this is not populated, unless
   * it's specified in $expand.
   */
  readonly enrollmentDetails?: Enrollment;
  /**
   * The departments associated to the enrollment.
   */
  departments?: Department[];
  /**
   * The accounts associated to the enrollment.
   */
  enrollmentAccounts?: EnrollmentAccount[];
  /**
   * Specifies whether the user has read access on billing account.
   */
  readonly hasReadAccess?: boolean;
}

/**
 * Result of listing billing accounts.
 */
export interface BillingAccountListResult {
  /**
   * The list of billing accounts.
   */
  readonly value?: BillingAccount[];
  /**
   * The link (url) to the next page of results.
   */
  readonly nextLink?: string;
}

/**
 * The properties of the billing account that can be updated.
 */
export interface BillingAccountUpdateProperties {
  /**
   * The billing account name.
   */
  readonly displayName?: string;
  /**
   * The billing account Type. Possible values include: 'Organization', 'Enrollment'
   */
  readonly accountType?: string;
  /**
   * The address associated with billing account.
   */
  address?: Address;
  /**
   * Company Name.
   */
  readonly company?: string;
  /**
   * Country Name.
   */
  readonly country?: string;
  /**
   * The invoice sections associated to the billing account. By default this is not populated,
   * unless it's specified in $expand.
   */
  invoiceSections?: InvoiceSection[];
  /**
   * The billing profiles associated to the billing account. By default this is not populated,
   * unless it's specified in $expand.
   */
  billingProfiles?: BillingProfile[];
  /**
   * The details about the associated legacy enrollment. By default this is not populated, unless
   * it's specified in $expand.
   */
  readonly enrollmentDetails?: Enrollment;
  /**
   * The departments associated to the enrollment.
   */
  departments?: Department[];
  /**
   * The accounts associated to the enrollment.
   */
  enrollmentAccounts?: EnrollmentAccount[];
  /**
   * Specifies whether the user has read access on billing account.
   */
  readonly hasReadAccess?: boolean;
}

/**
 * A billing property resource.
 */
export interface BillingProperty extends Resource {
  /**
   * Billing tenant Id.
   */
  readonly billingTenantId?: string;
  /**
   * Billing account Id.
   */
  readonly billingAccountId?: string;
  /**
   * Billing account name.
   */
  readonly billingAccountName?: string;
  /**
   * Billing profile Id.
   */
  readonly billingProfileId?: string;
  /**
   * Billing profile name.
   */
  readonly billingProfileName?: string;
  /**
   * Cost center name.
   */
  readonly costCenter?: string;
  /**
   * Invoice Section Id.
   */
  readonly invoiceSectionId?: string;
  /**
   * Invoice Section name.
   */
  readonly invoiceSectionName?: string;
  /**
   * Product Id.
   */
  readonly productId?: string;
  /**
   * Product name.
   */
  readonly productName?: string;
  /**
   * SKU Id.
   */
  readonly skuId?: string;
  /**
   * SKU description.
   */
  readonly skuDescription?: string;
}

/**
 * Result of listing departments.
 */
export interface DepartmentListResult {
  /**
   * The list of departments.
   */
  readonly value?: Department[];
  /**
   * The link (url) to the next page of results.
   */
  readonly nextLink?: string;
}

/**
 * Result of listing enrollment accounts.
 */
export interface EnrollmentAccountListResult {
  /**
   * The list of enrollment accounts.
   */
  readonly value?: EnrollmentAccount[];
  /**
   * The link (url) to the next page of results.
   */
  readonly nextLink?: string;
}

/**
 * Result of listing billing profiles.
 */
export interface BillingProfileListResult {
  /**
   * The list of billing profiles.
   */
  readonly value?: BillingProfile[];
  /**
   * The link (url) to the next page of results.
   */
  readonly nextLink?: string;
}

/**
 * The properties of an InvoiceSection.
 */
export interface InvoiceSectionCreationRequest {
  /**
   * The name of the InvoiceSection.
   */
  displayName?: string;
  /**
   * The billing profile id.
   */
  billingProfileId?: string;
}

/**
 * Result of listing invoice sections.
 */
export interface InvoiceSectionListResult {
  /**
   * The list of invoice sections.
   */
  readonly value?: InvoiceSection[];
  /**
   * The link (url) to the next page of results.
   */
  readonly nextLink?: string;
}

/**
 * status of the Billing POST/PUT operation.
 */
export interface OperationStatus {
  /**
   * The operation Id.
   */
  readonly id?: string;
  /**
   * Status of the pending operation
   */
  status?: string;
  /**
   * Status Detail of the pending operation
   */
  statusDetail?: string;
}

/**
 * A secure URL that can be used to download a an entity until the URL expires.
 */
export interface DownloadUrl {
  /**
   * The time in UTC at which this download URL will expire.
   */
  readonly expiryTime?: Date;
  /**
   * The URL to the PDF file.
   */
  readonly url?: string;
}

/**
 * The details of the error.
 */
export interface ErrorDetails {
  /**
   * Error code.
   */
  readonly code?: string;
  /**
   * Error message indicating why the operation failed.
   */
  readonly message?: string;
  /**
   * The target of the particular error.
   */
  readonly target?: string;
}

/**
 * Error response indicates that the service is not able to process the incoming request. The
 * reason is provided in the error message.
 */
export interface ErrorResponse {
  /**
   * The details of the error.
   */
  error?: ErrorDetails;
}

/**
 * The Amount.
 */
export interface Amount {
  /**
   * The currency for the amount value.
   */
  readonly currency?: string;
  /**
   * Amount value.
   */
  value?: number;
}

/**
 * The properties of the invoice download.
 */
export interface DownloadProperties {
  /**
   * Document type. Possible values include: 'Invoice', 'VoidNote', 'Receipt', 'CreditNote'
   */
  readonly kind?: string;
  /**
   * Document URL.
   */
  readonly url?: string;
}

/**
 * The properties of the payment.
 */
export interface PaymentProperties {
  /**
   * The type of payment.
   */
  readonly paymentType?: string;
  /**
   * The paid amount.
   */
  readonly amount?: Amount;
  /**
   * The date of the payment.
   */
  readonly date?: Date;
}

/**
 * An invoice resource.
 */
export interface InvoiceSummary extends Resource {
  /**
   * The due date for invoice.
   */
  readonly dueDate?: Date;
  /**
   * The date when invoice was created.
   */
  readonly invoiceDate?: Date;
  /**
   * Invoice status. Possible values include: 'PastDue', 'Due', 'Paid', 'Void'
   */
  readonly status?: string;
  /**
   * Amount due.
   */
  readonly amountDue?: Amount;
  /**
   * Amount billed.
   */
  readonly billedAmount?: Amount;
  /**
   * The start date of the billing period.
   */
  readonly invoicePeriodStartDate?: Date;
  /**
   * The end date of the billing period.
   */
  readonly invoicePeriodEndDate?: Date;
  /**
   * The billing profile id this invoice belongs to.
   */
  readonly billingProfileId?: string;
  /**
   * The profile name this invoice belongs to.
   */
  readonly billingProfileName?: string;
  /**
   * The purchase identifier for the invoice.
   */
  readonly purchaseOrderNumber?: string;
  /**
   * List of document urls available to download including invoice and tax documents.
   */
  readonly documentUrls?: DownloadProperties[];
  /**
   * List of payments.
   */
  readonly payments?: PaymentProperties[];
}

/**
 * Result of listing invoices.
 */
export interface InvoiceListResult {
  /**
   * The list of invoices.
   */
  readonly value?: InvoiceSummary[];
  /**
   * The link (url) to the next page of results.
   */
  readonly nextLink?: string;
}

/**
 * A product summary resource.
 */
export interface ProductSummary extends Resource {
  /**
   * The display name of the product.
   */
  readonly displayName?: string;
  /**
   * The date of purchase.
   */
  readonly purchaseDate?: Date;
  /**
   * The product type id.
   */
  readonly productTypeId?: string;
  /**
   * The type of product.
   */
  readonly productType?: string;
  /**
   * Product status. Possible values include: 'Active', 'Inactive', 'PastDue', 'Expiring',
   * 'Expired', 'Disabled', 'Cancelled', 'AutoRenew'
   */
  status?: string;
  /**
   * end date.
   */
  readonly endDate?: Date;
  /**
   * Billing frequency. Possible values include: 'OneTime', 'Monthly', 'UsageBased'
   */
  billingFrequency?: string;
  /**
   * Last month charges.
   */
  readonly lastCharge?: Amount;
  /**
   * The date of the last charge.
   */
  readonly lastChargeDate?: Date;
  /**
   * The purchased product quantity.
   */
  readonly quantity?: number;
  /**
   * Sku Id.
   */
  readonly skuId?: string;
  /**
   * Sku description.
   */
  readonly skuDescription?: string;
  /**
   * Availability Id.
   */
  readonly availabilityId?: string;
  /**
   * Parent Product Id.
   */
  readonly parentProductId?: string;
  /**
   * Invoice section id to which this product belongs.
   */
  readonly invoiceSectionId?: string;
  /**
   * Invoice section name to which this product belongs.
   */
  readonly invoiceSectionName?: string;
  /**
   * Billing Profile id to which this product belongs.
   */
  readonly billingProfileId?: string;
  /**
   * Billing Profile name to which this product belongs.
   */
  readonly billingProfileName?: string;
}

/**
 * Error details of the product transfer eligibility validation.
 */
export interface ValidateProductTransferEligibilityError {
  /**
   * Error code for the product transfer validation. Possible values include: 'InvalidSource',
   * 'ProductNotActive', 'InsufficientPermissionOnSource', 'InsufficientPermissionOnDestination',
   * 'DestinationBillingProfilePastDue', 'ProductTypeNotSupported',
   * 'CrossBillingAccountNotAllowed', 'NotAvailableForDestinationMarket',
   * 'OneTimePurchaseProductTransferNotAllowed'
   */
  code?: string;
  /**
   * The error message.
   */
  message?: string;
  /**
   * Detailed error message explaining the error.
   */
  details?: string;
}

/**
 * Result of the product transfer eligibility validation.
 */
export interface ValidateProductTransferEligibilityResult {
  /**
   * Specifies whether the transfer is eligible or not.
   */
  readonly isTransferEligible?: boolean;
  /**
   * Validation error details.
   */
  errorDetails?: ValidateProductTransferEligibilityError;
}

/**
 * A billing Subscription summary resource.
 */
export interface BillingSubscriptionSummary extends Resource {
  /**
   * display name.
   */
  readonly displayName?: string;
  /**
   * Subscription Id.
   */
  readonly subscriptionId?: string;
  /**
   * Subscription billing status. Possible values include: 'Active', 'Inactive', 'Abandoned',
   * 'Deleted', 'Warning'
   */
  subscriptionBillingStatus?: string;
  /**
   * Last month charges.
   */
  readonly lastMonthCharges?: Amount;
  /**
   * Month to date charges.
   */
  readonly monthToDateCharges?: Amount;
  /**
   * Billing Profile id to which this product belongs.
   */
  readonly billingProfileId?: string;
  /**
   * Billing Profile name to which this product belongs.
   */
  readonly billingProfileName?: string;
  /**
   * Invoice section id to which this product belongs.
   */
  readonly invoiceSectionId?: string;
  /**
   * Invoice section name to which this product belongs.
   */
  readonly invoiceSectionName?: string;
  /**
   * The sku id.
   */
  skuId?: string;
  /**
   * The sku description.
   */
  readonly skuDescription?: string;
}

/**
 * The rating context.
 */
export interface EnrollmentAccountContext {
  /**
   * The cost center name.
   */
  costCenter?: string;
  /**
   * Account Start Date
   */
  startDate?: Date;
  /**
   * Account End Date
   */
  endDate?: Date;
  /**
   * The enrollment account id.
   */
  enrollmentAccountName?: string;
}

/**
 * A reservation transaction summary resource.
 */
export interface TransactionsSummary extends Resource {
  /**
   * The kind of transaction. Choices are all and reservation. Possible values include: 'all',
   * 'reservation'
   */
  kind?: string;
  /**
   * The date of reservation transaction.
   */
  readonly date?: Date;
  /**
   * Invoice number or 'pending' if not invoiced.
   */
  readonly invoice?: string;
  /**
   * The reservation order id.
   */
  readonly orderId?: string;
  /**
   * The reservation order name.
   */
  readonly orderName?: string;
  /**
   * The product family.
   */
  readonly productFamily?: string;
  /**
   * The product type id.
   */
  readonly productTypeId?: string;
  /**
   * The type of product.
   */
  readonly productType?: string;
  /**
   * Product description.
   */
  readonly productDescription?: string;
  /**
   * Transaction types. Possible values include: 'Purchase', 'Usage Charge'
   */
  transactionType?: string;
  /**
   * Last charge associated with the purchase.
   */
  readonly transactionAmount?: Amount;
  /**
   * Purchase quantity.
   */
  readonly quantity?: number;
  /**
   * Invoice section id to which this product belongs.
   */
  readonly invoiceSectionId?: string;
  /**
   * Invoice section name to which this product belongs.
   */
  readonly invoiceSectionName?: string;
  /**
   * Billing Profile id to which this product belongs.
   */
  readonly billingProfileId?: string;
  /**
   * Billing Profile name to which this product belongs.
   */
  readonly billingProfileName?: string;
  /**
   * The subscription id.
   */
  readonly subscriptionId?: string;
  /**
   * The subscription name.
   */
  readonly subscriptionName?: string;
}

/**
 * The Policy.
 */
export interface Policy extends Resource {
  /**
   * The marketplacePurchasesAllowed flag.
   */
  marketplacePurchasesAllowed?: boolean;
  /**
   * The reservationPurchasesAllowed flag.
   */
  reservationPurchasesAllowed?: boolean;
  /**
   * The subscriptionOwnerCanViewCharges flag.
   */
  subscriptionOwnerCanViewCharges?: boolean;
}

/**
 * Latest available balance on Monetary Credit PI.
 */
export interface AvailableBalance extends Resource {
  /**
   * Balance Amount.
   */
  readonly amount?: Amount;
}

/**
 * A payment method resource.
 */
export interface PaymentMethod extends Resource {
  /**
   * Payment method type. Possible values include: 'Credits', 'ChequeWire'
   */
  paymentMethodType?: string;
  /**
   * Details about the payment method.
   */
  readonly details?: string;
  /**
   * Expiration date.
   */
  readonly expiration?: Date;
  /**
   * The currency associated with the payment method.
   */
  readonly currency?: string;
}

/**
 * Request parameters to update auto renew for support product.
 */
export interface UpdateAutoRenewRequest {
  /**
   * Request parameters to update auto renew policy a product. Possible values include: 'true',
   * 'false'
   */
  autoRenew?: string;
}

/**
 * The object that represents the operation.
 */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft.Billing.
   */
  readonly provider?: string;
  /**
   * Resource on which the operation is performed: Invoice, etc.
   */
  readonly resource?: string;
  /**
   * Operation type: Read, write, delete, etc.
   */
  readonly operation?: string;
}

/**
 * A Billing REST API operation.
 */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{operation}.
   */
  readonly name?: string;
  /**
   * The object that represents the operation.
   */
  display?: OperationDisplay;
}

/**
 * The payload use to update role assignment on a scope
 */
export interface BillingRoleAssignmentPayload {
  /**
   * The user's principal id that the role gets assigned to
   */
  principalId?: string;
  /**
   * The role definition id
   */
  billingRoleDefinitionId?: string;
}

/**
 * a role assignment
 */
export interface BillingRoleAssignment extends Resource {
  /**
   * the date the role assignment is created
   */
  readonly createdOn?: string;
  /**
   * the creator's tenant Id
   */
  readonly createdByPrincipalTenantId?: string;
  /**
   * the creator's principal Id
   */
  readonly createdByPrincipalId?: string;
  /**
   * the name of the role assignment
   */
  readonly billingRoleAssignmentName?: string;
  /**
   * The user's principal id that the role gets assigned to
   */
  readonly principalId?: string;
  /**
   * The role definition id
   */
  readonly roleDefinitionName?: string;
  /**
   * The scope the role get assigned to
   */
  readonly scope?: string;
}

/**
 * Result of get list of role assignments
 */
export interface BillingRoleAssignmentListResult {
  /**
   * The list role assignments
   */
  readonly value?: BillingRoleAssignment[];
}

/**
 * The set of allowed action and not allowed actions a caller has on a billing account
 */
export interface BillingPermissionsProperties {
  /**
   * The set of actions that the caller is allowed to do
   */
  readonly actions?: string[];
  /**
   * The set of actions the caller is not allowed to do
   */
  readonly notActions?: string[];
}

/**
 * Result of list billingPermissions a caller has on a billing account.
 */
export interface BillingPermissionsListResult {
  /**
   * The list OF billingPermissions a caller has on a billing account.
   */
  readonly value?: BillingPermissionsProperties[];
}

/**
 * Result of get role definition for a role.
 */
export interface BillingRoleDefinition extends Resource {
  /**
   * The role description
   */
  readonly description?: string;
  /**
   * The list OF billingPermissions a caller has on a billing account.
   */
  readonly value?: BillingPermissionsProperties[];
  /**
   * The name of the role
   */
  readonly roleName?: string;
}

/**
 * list the role definitions.
 */
export interface BillingRoleDefinitionListResult {
  /**
   * The list of role definitions.
   */
  readonly value?: BillingRoleDefinition[];
}

/**
 * Details about the participant or signer.
 */
export interface Participants {
  /**
   * The signing status
   */
  readonly status?: string;
  /**
   * The date when status got changed.
   */
  readonly statusDate?: Date;
  /**
   * The email address of the participant or signer.
   */
  readonly email?: string;
}

/**
 * An agreement resource.
 */
export interface Agreement extends Resource {
  /**
   * The link to the agreement.
   */
  readonly agreementLink?: string;
  /**
   * Effective date.
   */
  readonly effectiveDate?: Date;
  /**
   * Expiration date.
   */
  readonly expirationDate?: Date;
  /**
   * Participants or signer of the agreement.
   */
  participants?: Participants[];
  /**
   * The agreement status
   */
  readonly status?: string;
}

/**
 * Result of listing agreements.
 */
export interface AgreementListResult {
  /**
   * The list of agreements.
   */
  readonly value?: Agreement[];
  /**
   * The link (url) to the next page of results.
   */
  readonly nextLink?: string;
}

/**
 * Line of credit resource.
 */
export interface LineOfCredit extends Resource {
  /**
   * The current credit limit.
   */
  creditLimit?: Amount;
  /**
   * The reason for the line of credit status when not approved.
   */
  readonly reason?: string;
  /**
   * Remaining balance.
   */
  readonly remainingBalance?: Amount;
  /**
   * The line of credit status. Possible values include: 'Approved', 'Rejected'
   */
  status?: string;
}

/**
 * Result of listing payment methods.
 */
export interface PaymentMethodsListResult extends Array<PaymentMethod> {
  /**
   * The link (url) to the next page of results.
   */
  readonly nextLink?: string;
}

/**
 * Result of listing billing subscriptions summary.
 */
export interface BillingSubscriptionsListResult extends Array<BillingSubscriptionSummary> {
  /**
   * The link (url) to the next page of results.
   */
  readonly nextLink?: string;
}

/**
 * Result of listing products summary. It contains a list of available products summaries in
 * reverse chronological order by purchase date.
 */
export interface ProductsListResult extends Array<ProductSummary> {
  /**
   * The link (url) to the next page of results.
   */
  readonly nextLink?: string;
}

/**
 * Result of listing reservation transactions summary.
 */
export interface TransactionsListResult extends Array<TransactionsSummary> {
  /**
   * The link (url) to the next page of results.
   */
  readonly nextLink?: string;
}

/**
 * Result of listing details of the transfer initiated by caller.
 */
export interface TransferDetailsListResult extends Array<TransferDetails> {
  /**
   * The link (url) to the next page of results.
   */
  readonly nextLink?: string;
}

/**
 * Result of listing details of the transfer received by caller.
 */
export interface RecipientTransferDetailsListResult extends Array<RecipientTransferDetails> {
  /**
   * The link (url) to the next page of results.
   */
  readonly nextLink?: string;
}

/**
 * Result listing billing operations. It contains a list of operations and a URL link to get the
 * next set of results.
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * URL to get the next set of operation list results if there are any.
   */
  readonly nextLink?: string;
}
