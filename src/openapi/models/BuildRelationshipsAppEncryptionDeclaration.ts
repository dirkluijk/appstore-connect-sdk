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
import type { AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData } from './AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData';
import {
    AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataFromJSON,
    AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataFromJSONTyped,
    AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataToJSON,
} from './AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData';

/**
 * 
 * @export
 * @interface BuildRelationshipsAppEncryptionDeclaration
 */
export interface BuildRelationshipsAppEncryptionDeclaration {
    /**
     * 
     * @type {AppCategoryRelationshipsSubcategoriesLinks}
     * @memberof BuildRelationshipsAppEncryptionDeclaration
     */
    links?: AppCategoryRelationshipsSubcategoriesLinks;
    /**
     * 
     * @type {AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData}
     * @memberof BuildRelationshipsAppEncryptionDeclaration
     */
    data?: AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData;
}

/**
 * Check if a given object implements the BuildRelationshipsAppEncryptionDeclaration interface.
 */
export function instanceOfBuildRelationshipsAppEncryptionDeclaration(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BuildRelationshipsAppEncryptionDeclarationFromJSON(json: any): BuildRelationshipsAppEncryptionDeclaration {
    return BuildRelationshipsAppEncryptionDeclarationFromJSONTyped(json, false);
}

export function BuildRelationshipsAppEncryptionDeclarationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildRelationshipsAppEncryptionDeclaration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppCategoryRelationshipsSubcategoriesLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataFromJSON(json['data']),
    };
}

export function BuildRelationshipsAppEncryptionDeclarationToJSON(value?: BuildRelationshipsAppEncryptionDeclaration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppCategoryRelationshipsSubcategoriesLinksToJSON(value.links),
        'data': AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataToJSON(value.data),
    };
}
