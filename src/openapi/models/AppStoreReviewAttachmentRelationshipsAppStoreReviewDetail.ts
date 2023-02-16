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
import type { AppCategoryRelationshipsSubcategoriesLinks } from './AppCategoryRelationshipsSubcategoriesLinks';
import {
    AppCategoryRelationshipsSubcategoriesLinksFromJSON,
    AppCategoryRelationshipsSubcategoriesLinksFromJSONTyped,
    AppCategoryRelationshipsSubcategoriesLinksToJSON,
} from './AppCategoryRelationshipsSubcategoriesLinks';
import type { AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData } from './AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData';
import {
    AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataFromJSON,
    AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataFromJSONTyped,
    AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataToJSON,
} from './AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData';

/**
 * 
 * @export
 * @interface AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail
 */
export interface AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail {
    /**
     * 
     * @type {AppCategoryRelationshipsSubcategoriesLinks}
     * @memberof AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail
     */
    links?: AppCategoryRelationshipsSubcategoriesLinks;
    /**
     * 
     * @type {AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData}
     * @memberof AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail
     */
    data?: AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData;
}

/**
 * Check if a given object implements the AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail interface.
 */
export function instanceOfAppStoreReviewAttachmentRelationshipsAppStoreReviewDetail(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailFromJSON(json: any): AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail {
    return AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailFromJSONTyped(json, false);
}

export function AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppCategoryRelationshipsSubcategoriesLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataFromJSON(json['data']),
    };
}

export function AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailToJSON(value?: AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppCategoryRelationshipsSubcategoriesLinksToJSON(value.links),
        'data': AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataToJSON(value.data),
    };
}
