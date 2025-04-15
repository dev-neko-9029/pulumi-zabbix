// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Trigger extends pulumi.CustomResource {
    /**
     * Get an existing Trigger resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TriggerState, opts?: pulumi.CustomResourceOptions): Trigger {
        return new Trigger(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'zabbix:index/trigger:Trigger';

    /**
     * Returns true if the given object is an instance of Trigger.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Trigger {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Trigger.__pulumiType;
    }

    /**
     * Trigger comments
     */
    public readonly comments!: pulumi.Output<string | undefined>;
    /**
     * correlation tag
     */
    public readonly correlationTag!: pulumi.Output<string | undefined>;
    /**
     * Trigger Dependencies
     */
    public readonly dependencies!: pulumi.Output<string[] | undefined>;
    /**
     * Enable this trigger
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Trigger Expression
     */
    public readonly expression!: pulumi.Output<string>;
    /**
     * Manual resolution
     */
    public readonly manualClose!: pulumi.Output<boolean | undefined>;
    /**
     * generate multiple events
     */
    public readonly multiple!: pulumi.Output<boolean | undefined>;
    /**
     * Trigger name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Trigger Priority level, one of: not_classified, info, warn, average, high, disaster
     */
    public readonly priority!: pulumi.Output<string | undefined>;
    /**
     * use recovery expression (recovery_none must not be true)
     */
    public readonly recoveryExpression!: pulumi.Output<string | undefined>;
    /**
     * set recovery mode to none
     */
    public readonly recoveryNone!: pulumi.Output<boolean | undefined>;
    public readonly tags!: pulumi.Output<outputs.TriggerTag[] | undefined>;
    /**
     * link to url relevent to trigger
     */
    public readonly url!: pulumi.Output<string | undefined>;

    /**
     * Create a Trigger resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TriggerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TriggerArgs | TriggerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TriggerState | undefined;
            resourceInputs["comments"] = state ? state.comments : undefined;
            resourceInputs["correlationTag"] = state ? state.correlationTag : undefined;
            resourceInputs["dependencies"] = state ? state.dependencies : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["expression"] = state ? state.expression : undefined;
            resourceInputs["manualClose"] = state ? state.manualClose : undefined;
            resourceInputs["multiple"] = state ? state.multiple : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["recoveryExpression"] = state ? state.recoveryExpression : undefined;
            resourceInputs["recoveryNone"] = state ? state.recoveryNone : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as TriggerArgs | undefined;
            if ((!args || args.expression === undefined) && !opts.urn) {
                throw new Error("Missing required property 'expression'");
            }
            resourceInputs["comments"] = args ? args.comments : undefined;
            resourceInputs["correlationTag"] = args ? args.correlationTag : undefined;
            resourceInputs["dependencies"] = args ? args.dependencies : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["expression"] = args ? args.expression : undefined;
            resourceInputs["manualClose"] = args ? args.manualClose : undefined;
            resourceInputs["multiple"] = args ? args.multiple : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["recoveryExpression"] = args ? args.recoveryExpression : undefined;
            resourceInputs["recoveryNone"] = args ? args.recoveryNone : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Trigger.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Trigger resources.
 */
export interface TriggerState {
    /**
     * Trigger comments
     */
    comments?: pulumi.Input<string>;
    /**
     * correlation tag
     */
    correlationTag?: pulumi.Input<string>;
    /**
     * Trigger Dependencies
     */
    dependencies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Enable this trigger
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Trigger Expression
     */
    expression?: pulumi.Input<string>;
    /**
     * Manual resolution
     */
    manualClose?: pulumi.Input<boolean>;
    /**
     * generate multiple events
     */
    multiple?: pulumi.Input<boolean>;
    /**
     * Trigger name
     */
    name?: pulumi.Input<string>;
    /**
     * Trigger Priority level, one of: not_classified, info, warn, average, high, disaster
     */
    priority?: pulumi.Input<string>;
    /**
     * use recovery expression (recovery_none must not be true)
     */
    recoveryExpression?: pulumi.Input<string>;
    /**
     * set recovery mode to none
     */
    recoveryNone?: pulumi.Input<boolean>;
    tags?: pulumi.Input<pulumi.Input<inputs.TriggerTag>[]>;
    /**
     * link to url relevent to trigger
     */
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Trigger resource.
 */
export interface TriggerArgs {
    /**
     * Trigger comments
     */
    comments?: pulumi.Input<string>;
    /**
     * correlation tag
     */
    correlationTag?: pulumi.Input<string>;
    /**
     * Trigger Dependencies
     */
    dependencies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Enable this trigger
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Trigger Expression
     */
    expression: pulumi.Input<string>;
    /**
     * Manual resolution
     */
    manualClose?: pulumi.Input<boolean>;
    /**
     * generate multiple events
     */
    multiple?: pulumi.Input<boolean>;
    /**
     * Trigger name
     */
    name?: pulumi.Input<string>;
    /**
     * Trigger Priority level, one of: not_classified, info, warn, average, high, disaster
     */
    priority?: pulumi.Input<string>;
    /**
     * use recovery expression (recovery_none must not be true)
     */
    recoveryExpression?: pulumi.Input<string>;
    /**
     * set recovery mode to none
     */
    recoveryNone?: pulumi.Input<boolean>;
    tags?: pulumi.Input<pulumi.Input<inputs.TriggerTag>[]>;
    /**
     * link to url relevent to trigger
     */
    url?: pulumi.Input<string>;
}
