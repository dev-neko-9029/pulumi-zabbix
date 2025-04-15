// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LldSnmp extends pulumi.CustomResource {
    /**
     * Get an existing LldSnmp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LldSnmpState, opts?: pulumi.CustomResourceOptions): LldSnmp {
        return new LldSnmp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'zabbix:index/lldSnmp:LldSnmp';

    /**
     * Returns true if the given object is an instance of LldSnmp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LldSnmp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LldSnmp.__pulumiType;
    }

    public readonly conditions!: pulumi.Output<outputs.LldSnmpCondition[] | undefined>;
    /**
     * LLD Delay period
     */
    public readonly delay!: pulumi.Output<string | undefined>;
    /**
     * EvalType, one of: andor, and, or, custom
     */
    public readonly evaltype!: pulumi.Output<string | undefined>;
    /**
     * Formula
     */
    public readonly formula!: pulumi.Output<string | undefined>;
    /**
     * Host ID
     */
    public readonly hostid!: pulumi.Output<string>;
    /**
     * Host Interface ID
     */
    public readonly interfaceid!: pulumi.Output<string | undefined>;
    /**
     * LLD KEY
     */
    public readonly key!: pulumi.Output<string>;
    /**
     * LLD Stale Item Lifetime
     */
    public readonly lifetime!: pulumi.Output<string | undefined>;
    public readonly macros!: pulumi.Output<outputs.LldSnmpMacro[] | undefined>;
    /**
     * LLD Name
     */
    public readonly name!: pulumi.Output<string>;
    public readonly preprocessors!: pulumi.Output<outputs.LldSnmpPreprocessor[] | undefined>;
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

    /**
     * Create a LldSnmp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LldSnmpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LldSnmpArgs | LldSnmpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LldSnmpState | undefined;
            resourceInputs["conditions"] = state ? state.conditions : undefined;
            resourceInputs["delay"] = state ? state.delay : undefined;
            resourceInputs["evaltype"] = state ? state.evaltype : undefined;
            resourceInputs["formula"] = state ? state.formula : undefined;
            resourceInputs["hostid"] = state ? state.hostid : undefined;
            resourceInputs["interfaceid"] = state ? state.interfaceid : undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["lifetime"] = state ? state.lifetime : undefined;
            resourceInputs["macros"] = state ? state.macros : undefined;
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
        } else {
            const args = argsOrState as LldSnmpArgs | undefined;
            if ((!args || args.hostid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostid'");
            }
            if ((!args || args.key === undefined) && !opts.urn) {
                throw new Error("Missing required property 'key'");
            }
            if ((!args || args.snmpOid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'snmpOid'");
            }
            resourceInputs["conditions"] = args ? args.conditions : undefined;
            resourceInputs["delay"] = args ? args.delay : undefined;
            resourceInputs["evaltype"] = args ? args.evaltype : undefined;
            resourceInputs["formula"] = args ? args.formula : undefined;
            resourceInputs["hostid"] = args ? args.hostid : undefined;
            resourceInputs["interfaceid"] = args ? args.interfaceid : undefined;
            resourceInputs["key"] = args ? args.key : undefined;
            resourceInputs["lifetime"] = args ? args.lifetime : undefined;
            resourceInputs["macros"] = args ? args.macros : undefined;
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
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LldSnmp.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering LldSnmp resources.
 */
export interface LldSnmpState {
    conditions?: pulumi.Input<pulumi.Input<inputs.LldSnmpCondition>[]>;
    /**
     * LLD Delay period
     */
    delay?: pulumi.Input<string>;
    /**
     * EvalType, one of: andor, and, or, custom
     */
    evaltype?: pulumi.Input<string>;
    /**
     * Formula
     */
    formula?: pulumi.Input<string>;
    /**
     * Host ID
     */
    hostid?: pulumi.Input<string>;
    /**
     * Host Interface ID
     */
    interfaceid?: pulumi.Input<string>;
    /**
     * LLD KEY
     */
    key?: pulumi.Input<string>;
    /**
     * LLD Stale Item Lifetime
     */
    lifetime?: pulumi.Input<string>;
    macros?: pulumi.Input<pulumi.Input<inputs.LldSnmpMacro>[]>;
    /**
     * LLD Name
     */
    name?: pulumi.Input<string>;
    preprocessors?: pulumi.Input<pulumi.Input<inputs.LldSnmpPreprocessor>[]>;
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
}

/**
 * The set of arguments for constructing a LldSnmp resource.
 */
export interface LldSnmpArgs {
    conditions?: pulumi.Input<pulumi.Input<inputs.LldSnmpCondition>[]>;
    /**
     * LLD Delay period
     */
    delay?: pulumi.Input<string>;
    /**
     * EvalType, one of: andor, and, or, custom
     */
    evaltype?: pulumi.Input<string>;
    /**
     * Formula
     */
    formula?: pulumi.Input<string>;
    /**
     * Host ID
     */
    hostid: pulumi.Input<string>;
    /**
     * Host Interface ID
     */
    interfaceid?: pulumi.Input<string>;
    /**
     * LLD KEY
     */
    key: pulumi.Input<string>;
    /**
     * LLD Stale Item Lifetime
     */
    lifetime?: pulumi.Input<string>;
    macros?: pulumi.Input<pulumi.Input<inputs.LldSnmpMacro>[]>;
    /**
     * LLD Name
     */
    name?: pulumi.Input<string>;
    preprocessors?: pulumi.Input<pulumi.Input<inputs.LldSnmpPreprocessor>[]>;
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
}
