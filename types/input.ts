// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface GetHostMacro {
    id?: string;
    /**
     * Macro Name (key)
     */
    name: string;
    /**
     * Macro Value
     */
    value: string;
}

export interface GetHostMacroArgs {
    id?: pulumi.Input<string>;
    /**
     * Macro Name (key)
     */
    name: pulumi.Input<string>;
    /**
     * Macro Value
     */
    value: pulumi.Input<string>;
}

export interface GetHostTag {
    /**
     * Tag Key
     */
    key: string;
    /**
     * Tag Value
     */
    value?: string;
}

export interface GetHostTagArgs {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface GetTemplateMacro {
    id?: string;
    /**
     * Macro Name (key)
     */
    name: string;
    /**
     * Macro Value
     */
    value: string;
}

export interface GetTemplateMacroArgs {
    id?: pulumi.Input<string>;
    /**
     * Macro Name (key)
     */
    name: pulumi.Input<string>;
    /**
     * Macro Value
     */
    value: pulumi.Input<string>;
}

export interface GraphItem {
    /**
     * color
     */
    color: pulumi.Input<string>;
    /**
     * Draw Type, one of: line, filled, bold, dot, dashed, gradient
     */
    drawtype?: pulumi.Input<string>;
    /**
     * Function, one of: average, max, all, last, min
     */
    function?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * itemid
     */
    itemid: pulumi.Input<string>;
    /**
     * sort order
     */
    sortorder?: pulumi.Input<string>;
    /**
     * Type, one of: simple, sum
     */
    type?: pulumi.Input<string>;
    /**
     * Y Axis Side, one of: left, right
     */
    yaxisSide?: pulumi.Input<string>;
}

export interface HostInterface {
    /**
     * Interface DNS name
     */
    dns?: pulumi.Input<string>;
    /**
     * Interface ID (internally generated)
     */
    id?: pulumi.Input<string>;
    /**
     * Interface IP address
     */
    ip?: pulumi.Input<string>;
    /**
     * Primary interface of this type
     */
    main?: pulumi.Input<boolean>;
    /**
     * Destination Port
     */
    port?: pulumi.Input<number>;
    /**
     * Authentication Passphrase (v3 only)
     */
    snmp3Authpassphrase?: pulumi.Input<string>;
    /**
     * Authentication Protocol (v3 only), one of: md5, sha
     */
    snmp3Authprotocol?: pulumi.Input<string>;
    /**
     * Context Name (v3 only)
     */
    snmp3Contextname?: pulumi.Input<string>;
    /**
     * Priv Passphrase (v3 only)
     */
    snmp3Privpassphrase?: pulumi.Input<string>;
    /**
     * Priv Protocol (v3 only), one of: des, aes
     */
    snmp3Privprotocol?: pulumi.Input<string>;
    /**
     * Security Level (v3 only), one of: noauthnopriv, authnopriv, authpriv
     */
    snmp3Securitylevel?: pulumi.Input<string>;
    /**
     * Security Name (v3 only)
     */
    snmp3Securityname?: pulumi.Input<string>;
    /**
     * SNMP Bulk
     */
    snmpBulk?: pulumi.Input<boolean>;
    /**
     * HSNMP Community (v1/v2 only)
     */
    snmpCommunity?: pulumi.Input<string>;
    /**
     * SNMP Version, one of: 1, 2, 3
     */
    snmpVersion?: pulumi.Input<string>;
    /**
     * Interface type
     */
    type?: pulumi.Input<string>;
}

export interface HostInventory {
    /**
     * Inventory alias
     */
    alias?: pulumi.Input<string>;
    /**
     * Inventory asset_tag
     */
    assetTag?: pulumi.Input<string>;
    /**
     * Inventory chassis
     */
    chassis?: pulumi.Input<string>;
    /**
     * Inventory contact
     */
    contact?: pulumi.Input<string>;
    /**
     * Inventory contract_number
     */
    contractNumber?: pulumi.Input<string>;
    /**
     * Inventory date_hw_decomm
     */
    dateHwDecomm?: pulumi.Input<string>;
    /**
     * Inventory date_hw_expiry
     */
    dateHwExpiry?: pulumi.Input<string>;
    /**
     * Inventory date_hw_install
     */
    dateHwInstall?: pulumi.Input<string>;
    /**
     * Inventory date_hw_purchase
     */
    dateHwPurchase?: pulumi.Input<string>;
    /**
     * Inventory deployment_status
     */
    deploymentStatus?: pulumi.Input<string>;
    /**
     * Inventory hardware
     */
    hardware?: pulumi.Input<string>;
    /**
     * Inventory hardware_full
     */
    hardwareFull?: pulumi.Input<string>;
    /**
     * Inventory host_netmask
     */
    hostNetmask?: pulumi.Input<string>;
    /**
     * Inventory host_networks
     */
    hostNetworks?: pulumi.Input<string>;
    /**
     * Inventory host_router
     */
    hostRouter?: pulumi.Input<string>;
    /**
     * Inventory hw_arch
     */
    hwArch?: pulumi.Input<string>;
    /**
     * Inventory installer_name
     */
    installerName?: pulumi.Input<string>;
    /**
     * Inventory location
     */
    location?: pulumi.Input<string>;
    /**
     * Inventory location_lat
     */
    locationLat?: pulumi.Input<string>;
    /**
     * Inventory location_lon
     */
    locationLon?: pulumi.Input<string>;
    /**
     * Inventory macaddress_a
     */
    macaddressA?: pulumi.Input<string>;
    /**
     * Inventory macaddress_b
     */
    macaddressB?: pulumi.Input<string>;
    /**
     * Inventory model
     */
    model?: pulumi.Input<string>;
    /**
     * Inventory name
     */
    name?: pulumi.Input<string>;
    /**
     * Inventory notes
     */
    notes?: pulumi.Input<string>;
    /**
     * Inventory oob_ip
     */
    oobIp?: pulumi.Input<string>;
    /**
     * Inventory oob_netmask
     */
    oobNetmask?: pulumi.Input<string>;
    /**
     * Inventory oob_router
     */
    oobRouter?: pulumi.Input<string>;
    /**
     * Inventory os
     */
    os?: pulumi.Input<string>;
    /**
     * Inventory os_full
     */
    osFull?: pulumi.Input<string>;
    /**
     * Inventory os_short
     */
    osShort?: pulumi.Input<string>;
    /**
     * Inventory poc_1_cell
     */
    poc1Cell?: pulumi.Input<string>;
    /**
     * Inventory poc_1_email
     */
    poc1Email?: pulumi.Input<string>;
    /**
     * Inventory poc_1_name
     */
    poc1Name?: pulumi.Input<string>;
    /**
     * Inventory poc_1_notes
     */
    poc1Notes?: pulumi.Input<string>;
    /**
     * Inventory poc_1_phone_a
     */
    poc1PhoneA?: pulumi.Input<string>;
    /**
     * Inventory poc_1_phone_b
     */
    poc1PhoneB?: pulumi.Input<string>;
    /**
     * Inventory poc_1_screen
     */
    poc1Screen?: pulumi.Input<string>;
    /**
     * Inventory poc_2_cell
     */
    poc2Cell?: pulumi.Input<string>;
    /**
     * Inventory poc_2_email
     */
    poc2Email?: pulumi.Input<string>;
    /**
     * Inventory poc_2_name
     */
    poc2Name?: pulumi.Input<string>;
    /**
     * Inventory poc_2_notes
     */
    poc2Notes?: pulumi.Input<string>;
    /**
     * Inventory poc_2_phone_a
     */
    poc2PhoneA?: pulumi.Input<string>;
    /**
     * Inventory poc_2_phone_b
     */
    poc2PhoneB?: pulumi.Input<string>;
    /**
     * Inventory poc_2_screen
     */
    poc2Screen?: pulumi.Input<string>;
    /**
     * Inventory serialno_a
     */
    serialnoA?: pulumi.Input<string>;
    /**
     * Inventory serialno_b
     */
    serialnoB?: pulumi.Input<string>;
    /**
     * Inventory site_address_a
     */
    siteAddressA?: pulumi.Input<string>;
    /**
     * Inventory site_address_b
     */
    siteAddressB?: pulumi.Input<string>;
    /**
     * Inventory site_address_c
     */
    siteAddressC?: pulumi.Input<string>;
    /**
     * Inventory site_city
     */
    siteCity?: pulumi.Input<string>;
    /**
     * Inventory site_country
     */
    siteCountry?: pulumi.Input<string>;
    /**
     * Inventory site_notes
     */
    siteNotes?: pulumi.Input<string>;
    /**
     * Inventory site_rack
     */
    siteRack?: pulumi.Input<string>;
    /**
     * Inventory site_state
     */
    siteState?: pulumi.Input<string>;
    /**
     * Inventory site_zip
     */
    siteZip?: pulumi.Input<string>;
    /**
     * Inventory software
     */
    software?: pulumi.Input<string>;
    /**
     * Inventory software_app_a
     */
    softwareAppA?: pulumi.Input<string>;
    /**
     * Inventory software_app_b
     */
    softwareAppB?: pulumi.Input<string>;
    /**
     * Inventory software_app_c
     */
    softwareAppC?: pulumi.Input<string>;
    /**
     * Inventory software_app_d
     */
    softwareAppD?: pulumi.Input<string>;
    /**
     * Inventory software_app_e
     */
    softwareAppE?: pulumi.Input<string>;
    /**
     * Inventory software_full
     */
    softwareFull?: pulumi.Input<string>;
    /**
     * Inventory tag
     */
    tag?: pulumi.Input<string>;
    /**
     * Inventory type
     */
    type?: pulumi.Input<string>;
    /**
     * Inventory type_full
     */
    typeFull?: pulumi.Input<string>;
    /**
     * Inventory url_a
     */
    urlA?: pulumi.Input<string>;
    /**
     * Inventory url_b
     */
    urlB?: pulumi.Input<string>;
    /**
     * Inventory url_c
     */
    urlC?: pulumi.Input<string>;
    /**
     * Inventory vendor
     */
    vendor?: pulumi.Input<string>;
}

export interface HostMacro {
    id?: pulumi.Input<string>;
    /**
     * Macro Name (key)
     */
    name: pulumi.Input<string>;
    /**
     * Macro Value
     */
    value: pulumi.Input<string>;
}

export interface HostTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface ItemAgentPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface ItemAgentTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface ItemAggregatePreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface ItemAggregateTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface ItemCalculatedPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface ItemCalculatedTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface ItemDependentPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface ItemDependentTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface ItemExternalPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface ItemExternalTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface ItemHttpPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface ItemHttpTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface ItemInternalPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface ItemInternalTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface ItemSimplePreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface ItemSimpleTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface ItemSnmpPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface ItemSnmpTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface ItemSnmptrapPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface ItemSnmptrapTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface ItemTrapperPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface ItemTrapperTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface LldAgentCondition {
    id?: pulumi.Input<string>;
    /**
     * Filter Macro
     */
    macro: pulumi.Input<string>;
    /**
     * Operator, one of: match, notmatch
     */
    operator?: pulumi.Input<string>;
    /**
     * Filter Value
     */
    value: pulumi.Input<string>;
}

export interface LldAgentMacro {
    /**
     * Macro
     */
    macro: pulumi.Input<string>;
    /**
     * Macro Path
     */
    path: pulumi.Input<string>;
}

export interface LldAgentPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface LldDependentCondition {
    id?: pulumi.Input<string>;
    /**
     * Filter Macro
     */
    macro: pulumi.Input<string>;
    /**
     * Operator, one of: match, notmatch
     */
    operator?: pulumi.Input<string>;
    /**
     * Filter Value
     */
    value: pulumi.Input<string>;
}

export interface LldDependentMacro {
    /**
     * Macro
     */
    macro: pulumi.Input<string>;
    /**
     * Macro Path
     */
    path: pulumi.Input<string>;
}

export interface LldDependentPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface LldExternalCondition {
    id?: pulumi.Input<string>;
    /**
     * Filter Macro
     */
    macro: pulumi.Input<string>;
    /**
     * Operator, one of: match, notmatch
     */
    operator?: pulumi.Input<string>;
    /**
     * Filter Value
     */
    value: pulumi.Input<string>;
}

export interface LldExternalMacro {
    /**
     * Macro
     */
    macro: pulumi.Input<string>;
    /**
     * Macro Path
     */
    path: pulumi.Input<string>;
}

export interface LldExternalPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface LldHttpCondition {
    id?: pulumi.Input<string>;
    /**
     * Filter Macro
     */
    macro: pulumi.Input<string>;
    /**
     * Operator, one of: match, notmatch
     */
    operator?: pulumi.Input<string>;
    /**
     * Filter Value
     */
    value: pulumi.Input<string>;
}

export interface LldHttpMacro {
    /**
     * Macro
     */
    macro: pulumi.Input<string>;
    /**
     * Macro Path
     */
    path: pulumi.Input<string>;
}

export interface LldHttpPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface LldInternalCondition {
    id?: pulumi.Input<string>;
    /**
     * Filter Macro
     */
    macro: pulumi.Input<string>;
    /**
     * Operator, one of: match, notmatch
     */
    operator?: pulumi.Input<string>;
    /**
     * Filter Value
     */
    value: pulumi.Input<string>;
}

export interface LldInternalMacro {
    /**
     * Macro
     */
    macro: pulumi.Input<string>;
    /**
     * Macro Path
     */
    path: pulumi.Input<string>;
}

export interface LldInternalPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface LldSimpleCondition {
    id?: pulumi.Input<string>;
    /**
     * Filter Macro
     */
    macro: pulumi.Input<string>;
    /**
     * Operator, one of: match, notmatch
     */
    operator?: pulumi.Input<string>;
    /**
     * Filter Value
     */
    value: pulumi.Input<string>;
}

export interface LldSimpleMacro {
    /**
     * Macro
     */
    macro: pulumi.Input<string>;
    /**
     * Macro Path
     */
    path: pulumi.Input<string>;
}

export interface LldSimplePreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface LldSnmpCondition {
    id?: pulumi.Input<string>;
    /**
     * Filter Macro
     */
    macro: pulumi.Input<string>;
    /**
     * Operator, one of: match, notmatch
     */
    operator?: pulumi.Input<string>;
    /**
     * Filter Value
     */
    value: pulumi.Input<string>;
}

export interface LldSnmpMacro {
    /**
     * Macro
     */
    macro: pulumi.Input<string>;
    /**
     * Macro Path
     */
    path: pulumi.Input<string>;
}

export interface LldSnmpPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface LldTrapperCondition {
    id?: pulumi.Input<string>;
    /**
     * Filter Macro
     */
    macro: pulumi.Input<string>;
    /**
     * Operator, one of: match, notmatch
     */
    operator?: pulumi.Input<string>;
    /**
     * Filter Value
     */
    value: pulumi.Input<string>;
}

export interface LldTrapperMacro {
    /**
     * Macro
     */
    macro: pulumi.Input<string>;
    /**
     * Macro Path
     */
    path: pulumi.Input<string>;
}

export interface LldTrapperPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface ProtoGraphItem {
    /**
     * color
     */
    color: pulumi.Input<string>;
    /**
     * Draw Type, one of: line, filled, bold, dot, dashed, gradient
     */
    drawtype?: pulumi.Input<string>;
    /**
     * Function, one of: average, max, all, last, min
     */
    function?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * itemid
     */
    itemid: pulumi.Input<string>;
    /**
     * sort order
     */
    sortorder?: pulumi.Input<string>;
    /**
     * Type, one of: simple, sum
     */
    type?: pulumi.Input<string>;
    /**
     * Y Axis Side, one of: left, right
     */
    yaxisSide?: pulumi.Input<string>;
}

export interface ProtoItemAgentPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface ProtoItemAgentTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface ProtoItemAggregatePreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface ProtoItemAggregateTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface ProtoItemCalculatedPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface ProtoItemCalculatedTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface ProtoItemDependentPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface ProtoItemDependentTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface ProtoItemExternalPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface ProtoItemExternalTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface ProtoItemHttpPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface ProtoItemHttpTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface ProtoItemInternalPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface ProtoItemInternalTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface ProtoItemSimplePreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface ProtoItemSimpleTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface ProtoItemSnmpPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface ProtoItemSnmpTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface ProtoItemSnmptrapPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface ProtoItemSnmptrapTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface ProtoItemTrapperPreprocessor {
    errorHandler?: pulumi.Input<string>;
    errorHandlerParams?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Preprocessor parameters
     */
    params?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Preprocessor type, zabbix identifier number
     */
    type: pulumi.Input<string>;
}

export interface ProtoItemTrapperTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface ProtoTriggerTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}

export interface TemplateMacro {
    id?: pulumi.Input<string>;
    /**
     * Macro Name (key)
     */
    name: pulumi.Input<string>;
    /**
     * Macro Value
     */
    value: pulumi.Input<string>;
}

export interface TriggerTag {
    /**
     * Tag Key
     */
    key: pulumi.Input<string>;
    /**
     * Tag Value
     */
    value?: pulumi.Input<string>;
}
