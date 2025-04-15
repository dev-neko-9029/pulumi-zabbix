// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ItemSnmp extends pulumi.CustomResource {
    /**
     * Get an existing ItemSnmp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ItemSnmpState, opts?: pulumi.CustomResourceOptions): ItemSnmp {
        return new ItemSnmp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'zabbix:index/itemSnmp:ItemSnmp';

    /**
     * Returns true if the given object is an instance of ItemSnmp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ItemSnmp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ItemSnmp.__pulumiType;
    }

    /**
     * Application IDs to associate this item with
     */
    public readonly applications!: pulumi.Output<string[] | undefined>;
    /**
     * Item Delay period
     */
    public readonly delay!: pulumi.Output<string | undefined>;
    /**
     * Item History
     */
    public readonly history!: pulumi.Output<string | undefined>;
    /**
     * Host ID
     */
    public readonly hostid!: pulumi.Output<string>;
    /**
     * Host Interface ID
     */
    public readonly interfaceid!: pulumi.Output<string | undefined>;
    /**
     * Item KEY
     */
    public readonly key!: pulumi.Output<string>;
    /**
     * Item Name
     */
    public readonly name!: pulumi.Output<string>;
    public readonly preprocessors!: pulumi.Output<outputs.ItemSnmpPreprocessor[] | undefined>;
    /**
     * Authentication Passphrase (v3 only)
     */
    public readonly snmp3Authpassphrase!: pulumi.Output<string | undefined>;
    /**
     * Authentication Protocol (v3 only), one of: md5, sha
     */
    public readonly snmp3Authprotocol!: pulumi.Output<string | undefined>;
    /**
     * Context Name (v3 only)
     */
    public readonly snmp3Contextname!: pulumi.Output<string | undefined>;
    /**
     * Priv Passphrase (v3 only)
     */
    public readonly snmp3Privpassphrase!: pulumi.Output<string | undefined>;
    /**
     * Priv Protocol (v3 only), one of: des, aes
     */
    public readonly snmp3Privprotocol!: pulumi.Output<string | undefined>;
    /**
     * Security Level (v3 only), one of: noauthnopriv, authnopriv, authpriv
     */
    public readonly snmp3Securitylevel!: pulumi.Output<string | undefined>;
    /**
     * Security Name (v3 only)
     */
    public readonly snmp3Securityname!: pulumi.Output<string | undefined>;
    /**
     * SNMP Community (v1/v2 only)
     */
    public readonly snmpCommunity!: pulumi.Output<string | undefined>;
    /**
     * SNMP OID
     */
    public readonly snmpOid!: pulumi.Output<string>;
    /**
     * SNMP Version, one of: 3, 1, 2
     */
    public readonly snmpVersion!: pulumi.Output<string | undefined>;
    public readonly tags!: pulumi.Output<outputs.ItemSnmpTag[] | undefined>;
    /**
     * Item Trends
     */
    public readonly trends!: pulumi.Output<string>;
    /**
     * Item Value Type, one of: float, character, log, unsigned, text
     */
    public readonly valuetype!: pulumi.Output<string>;

    /**
     * Create a ItemSnmp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ItemSnmpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ItemSnmpArgs | ItemSnmpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ItemSnmpState | undefined;
            resourceInputs["applications"] = state ? state.applications : undefined;
            resourceInputs["delay"] = state ? state.delay : undefined;
            resourceInputs["history"] = state ? state.history : undefined;
            resourceInputs["hostid"] = state ? state.hostid : undefined;
            resourceInputs["interfaceid"] = state ? state.interfaceid : undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["preprocessors"] = state ? state.preprocessors : undefined;
            resourceInputs["snmp3Authpassphrase"] = state ? state.snmp3Authpassphrase : undefined;
            resourceInputs["snmp3Authprotocol"] = state ? state.snmp3Authprotocol : undefined;
            resourceInputs["snmp3Contextname"] = state ? state.snmp3Contextname : undefined;
            resourceInputs["snmp3Privpassphrase"] = state ? state.snmp3Privpassphrase : undefined;
            resourceInputs["snmp3Privprotocol"] = state ? state.snmp3Privprotocol : undefined;
            resourceInputs["snmp3Securitylevel"] = state ? state.snmp3Securitylevel : undefined;
            resourceInputs["snmp3Securityname"] = state ? state.snmp3Securityname : undefined;
            resourceInputs["snmpCommunity"] = state ? state.snmpCommunity : undefined;
            resourceInputs["snmpOid"] = state ? state.snmpOid : undefined;
            resourceInputs["snmpVersion"] = state ? state.snmpVersion : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["trends"] = state ? state.trends : undefined;
            resourceInputs["valuetype"] = state ? state.valuetype : undefined;
        } else {
            const args = argsOrState as ItemSnmpArgs | undefined;
            if ((!args || args.hostid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostid'");
            }
            if ((!args || args.key === undefined) && !opts.urn) {
                throw new Error("Missing required property 'key'");
            }
            if ((!args || args.snmpOid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'snmpOid'");
            }
            if ((!args || args.valuetype === undefined) && !opts.urn) {
                throw new Error("Missing required property 'valuetype'");
            }
            resourceInputs["applications"] = args ? args.applications : undefined;
            resourceInputs["delay"] = args ? args.delay : undefined;
            resourceInputs["history"] = args ? args.history : undefined;
            resourceInputs["hostid"] = args ? args.hostid : undefined;
            resourceInputs["interfaceid"] = args ? args.interfaceid : undefined;
            resourceInputs["key"] = args ? args.key : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["preprocessors"] = args ? args.preprocessors : undefined;
            resourceInputs["snmp3Authpassphrase"] = args ? args.snmp3Authpassphrase : undefined;
            resourceInputs["snmp3Authprotocol"] = args ? args.snmp3Authprotocol : undefined;
            resourceInputs["snmp3Contextname"] = args ? args.snmp3Contextname : undefined;
            resourceInputs["snmp3Privpassphrase"] = args ? args.snmp3Privpassphrase : undefined;
            resourceInputs["snmp3Privprotocol"] = args ? args.snmp3Privprotocol : undefined;
            resourceInputs["snmp3Securitylevel"] = args ? args.snmp3Securitylevel : undefined;
            resourceInputs["snmp3Securityname"] = args ? args.snmp3Securityname : undefined;
            resourceInputs["snmpCommunity"] = args ? args.snmpCommunity : undefined;
            resourceInputs["snmpOid"] = args ? args.snmpOid : undefined;
            resourceInputs["snmpVersion"] = args ? args.snmpVersion : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["trends"] = args ? args.trends : undefined;
            resourceInputs["valuetype"] = args ? args.valuetype : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ItemSnmp.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ItemSnmp resources.
 */
export interface ItemSnmpState {
    /**
     * Application IDs to associate this item with
     */
    applications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Item Delay period
     */
    delay?: pulumi.Input<string>;
    /**
     * Item History
     */
    history?: pulumi.Input<string>;
    /**
     * Host ID
     */
    hostid?: pulumi.Input<string>;
    /**
     * Host Interface ID
     */
    interfaceid?: pulumi.Input<string>;
    /**
     * Item KEY
     */
    key?: pulumi.Input<string>;
    /**
     * Item Name
     */
    name?: pulumi.Input<string>;
    preprocessors?: pulumi.Input<pulumi.Input<inputs.ItemSnmpPreprocessor>[]>;
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
     * SNMP Community (v1/v2 only)
     */
    snmpCommunity?: pulumi.Input<string>;
    /**
     * SNMP OID
     */
    snmpOid?: pulumi.Input<string>;
    /**
     * SNMP Version, one of: 3, 1, 2
     */
    snmpVersion?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.ItemSnmpTag>[]>;
    /**
     * Item Trends
     */
    trends?: pulumi.Input<string>;
    /**
     * Item Value Type, one of: float, character, log, unsigned, text
     */
    valuetype?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ItemSnmp resource.
 */
export interface ItemSnmpArgs {
    /**
     * Application IDs to associate this item with
     */
    applications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Item Delay period
     */
    delay?: pulumi.Input<string>;
    /**
     * Item History
     */
    history?: pulumi.Input<string>;
    /**
     * Host ID
     */
    hostid: pulumi.Input<string>;
    /**
     * Host Interface ID
     */
    interfaceid?: pulumi.Input<string>;
    /**
     * Item KEY
     */
    key: pulumi.Input<string>;
    /**
     * Item Name
     */
    name?: pulumi.Input<string>;
    preprocessors?: pulumi.Input<pulumi.Input<inputs.ItemSnmpPreprocessor>[]>;
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
     * SNMP Community (v1/v2 only)
     */
    snmpCommunity?: pulumi.Input<string>;
    /**
     * SNMP OID
     */
    snmpOid: pulumi.Input<string>;
    /**
     * SNMP Version, one of: 3, 1, 2
     */
    snmpVersion?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.ItemSnmpTag>[]>;
    /**
     * Item Trends
     */
    trends?: pulumi.Input<string>;
    /**
     * Item Value Type, one of: float, character, log, unsigned, text
     */
    valuetype: pulumi.Input<string>;
}
