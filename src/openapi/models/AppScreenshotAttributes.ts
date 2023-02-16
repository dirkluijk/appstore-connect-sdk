/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AppMediaAssetState } from './AppMediaAssetState';
import {
    AppMediaAssetStateFromJSON,
    AppMediaAssetStateFromJSONTyped,
    AppMediaAssetStateToJSON,
} from './AppMediaAssetState';
import type { ImageAsset } from './ImageAsset';
import {
    ImageAssetFromJSON,
    ImageAssetFromJSONTyped,
    ImageAssetToJSON,
} from './ImageAsset';
import type { UploadOperation } from './UploadOperation';
import {
    UploadOperationFromJSON,
    UploadOperationFromJSONTyped,
    UploadOperationToJSON,
} from './UploadOperation';

/**
 * 
 * @export
 * @interface AppScreenshotAttributes
 */
export interface AppScreenshotAttributes {
    /**
     * 
     * @type {number}
     * @memberof AppScreenshotAttributes
     */
    fileSize?: number;
    /**
     * 
     * @type {string}
     * @memberof AppScreenshotAttributes
     */
    fileName?: string;
    /**
     * 
     * @type {string}
     * @memberof AppScreenshotAttributes
     */
    sourceFileChecksum?: string;
    /**
     * 
     * @type {ImageAsset}
     * @memberof AppScreenshotAttributes
     */
    imageAsset?: ImageAsset;
    /**
     * 
     * @type {string}
     * @memberof AppScreenshotAttributes
     */
    assetToken?: string;
    /**
     * 
     * @type {string}
     * @memberof AppScreenshotAttributes
     */
    assetType?: string;
    /**
     * 
     * @type {Array<UploadOperation>}
     * @memberof AppScreenshotAttributes
     */
    uploadOperations?: Array<UploadOperation>;
    /**
     * 
     * @type {AppMediaAssetState}
     * @memberof AppScreenshotAttributes
     */
    assetDeliveryState?: AppMediaAssetState;
}

/**
 * Check if a given object implements the AppScreenshotAttributes interface.
 */
export function instanceOfAppScreenshotAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppScreenshotAttributesFromJSON(json: any): AppScreenshotAttributes {
    return AppScreenshotAttributesFromJSONTyped(json, false);
}

export function AppScreenshotAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fileSize': !exists(json, 'fileSize') ? undefined : json['fileSize'],
        'fileName': !exists(json, 'fileName') ? undefined : json['fileName'],
        'sourceFileChecksum': !exists(json, 'sourceFileChecksum') ? undefined : json['sourceFileChecksum'],
        'imageAsset': !exists(json, 'imageAsset') ? undefined : ImageAssetFromJSON(json['imageAsset']),
        'assetToken': !exists(json, 'assetToken') ? undefined : json['assetToken'],
        'assetType': !exists(json, 'assetType') ? undefined : json['assetType'],
        'uploadOperations': !exists(json, 'uploadOperations') ? undefined : ((json['uploadOperations'] as Array<any>).map(UploadOperationFromJSON)),
        'assetDeliveryState': !exists(json, 'assetDeliveryState') ? undefined : AppMediaAssetStateFromJSON(json['assetDeliveryState']),
    };
}

export function AppScreenshotAttributesToJSON(value?: AppScreenshotAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fileSize': value.fileSize,
        'fileName': value.fileName,
        'sourceFileChecksum': value.sourceFileChecksum,
        'imageAsset': ImageAssetToJSON(value.imageAsset),
        'assetToken': value.assetToken,
        'assetType': value.assetType,
        'uploadOperations': value.uploadOperations === undefined ? undefined : ((value.uploadOperations as Array<any>).map(UploadOperationToJSON)),
        'assetDeliveryState': AppMediaAssetStateToJSON(value.assetDeliveryState),
    };
}
