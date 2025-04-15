// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ProtoItemAgent extends pulumi.CustomResource {
    /**
     * Get an existing ProtoItemAgent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProtoItemAgentState, opts?: pulumi.CustomResourceOptions): ProtoItemAgent {
        return new ProtoItemAgent(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'zabbix:index/protoItemAgent:ProtoItemAgent';

    /**
     * Returns true if the given object is an instance of ProtoItemAgent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProtoItemAgent {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProtoItemAgent.__pulumiType;
    }

    /**
     * Active zabbix agent Item
     */
    public readonly active!: pulumi.Output<boolean | undefined>;
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
    public readonly preprocessors!: pulumi.Output<outputs.ProtoItemAgentPreprocessor[] | undefined>;
    /**
     * LLD Rule ID
     */
    public readonly ruleid!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.ProtoItemAgentTag[] | undefined>;
    /**
     * Item Trends
     */
    public readonly trends!: pulumi.Output<string>;
    /**
     * Item Value Type, one of: float, character, log, unsigned, text
     */
    public readonly valuetype!: pulumi.Output<string>;

    /**
     * Create a ProtoItemAgent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProtoItemAgentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ProtoItemAgentArgs | ProtoItemAgentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ProtoItemAgentState | undefined;
            resourceInputs["active"] = state ? state.active : undefined;
            resourceInputs["applications"] = state ? state.applications : undefined;
            resourceInputs["delay"] = state ? state.delay : undefined;
            resourceInputs["history"] = state ? state.history : undefined;
            resourceInputs["hostid"] = state ? state.hostid : undefined;
            resourceInputs["interfaceid"] = state ? state.interfaceid : undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["preprocessors"] = state ? state.preprocessors : undefined;
            resourceInputs["ruleid"] = state ? state.ruleid : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["trends"] = state ? state.trends : undefined;
            resourceInputs["valuetype"] = state ? state.valuetype : undefined;
        } else {
            const args = argsOrState as ProtoItemAgentArgs | undefined;
            if ((!args || args.hostid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostid'");
            }
            if ((!args || args.key === undefined) && !opts.urn) {
                throw new Error("Missing required property 'key'");
            }
            if ((!args || args.ruleid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ruleid'");
            }
            if ((!args || args.valuetype === undefined) && !opts.urn) {
                throw new Error("Missing required property 'valuetype'");
            }
            resourceInputs["active"] = args ? args.active : undefined;
            resourceInputs["applications"] = args ? args.applications : undefined;
            resourceInputs["delay"] = args ? args.delay : undefined;
            resourceInputs["history"] = args ? args.history : undefined;
            resourceInputs["hostid"] = args ? args.hostid : undefined;
            resourceInputs["interfaceid"] = args ? args.interfaceid : undefined;
            resourceInputs["key"] = args ? args.key : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["preprocessors"] = args ? args.preprocessors : undefined;
            resourceInputs["ruleid"] = args ? args.ruleid : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["trends"] = args ? args.trends : undefined;
            resourceInputs["valuetype"] = args ? args.valuetype : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ProtoItemAgent.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ProtoItemAgent resources.
 */
export interface ProtoItemAgentState {
    /**
     * Active zabbix agent Item
     */
    active?: pulumi.Input<boolean>;
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
    preprocessors?: pulumi.Input<pulumi.Input<inputs.ProtoItemAgentPreprocessor>[]>;
    /**
     * LLD Rule ID
     */
    ruleid?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.ProtoItemAgentTag>[]>;
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
 * The set of arguments for constructing a ProtoItemAgent resource.
 */
export interface ProtoItemAgentArgs {
    /**
     * Active zabbix agent Item
     */
    active?: pulumi.Input<boolean>;
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
    preprocessors?: pulumi.Input<pulumi.Input<inputs.ProtoItemAgentPreprocessor>[]>;
    /**
     * LLD Rule ID
     */
    ruleid: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.ProtoItemAgentTag>[]>;
    /**
     * Item Trends
     */
    trends?: pulumi.Input<string>;
    /**
     * Item Value Type, one of: float, character, log, unsigned, text
     */
    valuetype: pulumi.Input<string>;
}
