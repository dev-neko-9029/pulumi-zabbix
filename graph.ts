// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Graph extends pulumi.CustomResource {
    /**
     * Get an existing Graph resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GraphState, opts?: pulumi.CustomResourceOptions): Graph {
        return new Graph(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'zabbix:index/graph:Graph';

    /**
     * Returns true if the given object is an instance of Graph.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Graph {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Graph.__pulumiType;
    }

    /**
     * Show 3d graph
     */
    public readonly do3d!: pulumi.Output<boolean | undefined>;
    /**
     * Height
     */
    public readonly height!: pulumi.Output<string>;
    public readonly items!: pulumi.Output<outputs.GraphItem[]>;
    /**
     * Show legend
     */
    public readonly legend!: pulumi.Output<boolean | undefined>;
    /**
     * Graph Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Left percentile
     */
    public readonly percentLeft!: pulumi.Output<string | undefined>;
    /**
     * Right percentile
     */
    public readonly percentRight!: pulumi.Output<string | undefined>;
    /**
     * Type, one of: exploded, normal, stacked, pie
     */
    public readonly type!: pulumi.Output<string | undefined>;
    /**
     * Width
     */
    public readonly width!: pulumi.Output<string>;
    /**
     * Show work period
     */
    public readonly workPeriod!: pulumi.Output<boolean | undefined>;
    /**
     * Y Axis Max
     */
    public readonly ymax!: pulumi.Output<string | undefined>;
    /**
     * Y Axis Max ItemId
     */
    public readonly ymaxItemid!: pulumi.Output<string | undefined>;
    /**
     * Y Axis Max Type, one of: calculated, fixed, item
     */
    public readonly ymaxType!: pulumi.Output<string | undefined>;
    /**
     * Y Axis Min
     */
    public readonly ymin!: pulumi.Output<string | undefined>;
    /**
     * Y Axis Min ItemId
     */
    public readonly yminItemid!: pulumi.Output<string | undefined>;
    /**
     * Y Axis Min Type, one of: calculated, fixed, item
     */
    public readonly yminType!: pulumi.Output<string | undefined>;

    /**
     * Create a Graph resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GraphArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GraphArgs | GraphState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GraphState | undefined;
            resourceInputs["do3d"] = state ? state.do3d : undefined;
            resourceInputs["height"] = state ? state.height : undefined;
            resourceInputs["items"] = state ? state.items : undefined;
            resourceInputs["legend"] = state ? state.legend : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["percentLeft"] = state ? state.percentLeft : undefined;
            resourceInputs["percentRight"] = state ? state.percentRight : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["width"] = state ? state.width : undefined;
            resourceInputs["workPeriod"] = state ? state.workPeriod : undefined;
            resourceInputs["ymax"] = state ? state.ymax : undefined;
            resourceInputs["ymaxItemid"] = state ? state.ymaxItemid : undefined;
            resourceInputs["ymaxType"] = state ? state.ymaxType : undefined;
            resourceInputs["ymin"] = state ? state.ymin : undefined;
            resourceInputs["yminItemid"] = state ? state.yminItemid : undefined;
            resourceInputs["yminType"] = state ? state.yminType : undefined;
        } else {
            const args = argsOrState as GraphArgs | undefined;
            if ((!args || args.height === undefined) && !opts.urn) {
                throw new Error("Missing required property 'height'");
            }
            if ((!args || args.items === undefined) && !opts.urn) {
                throw new Error("Missing required property 'items'");
            }
            if ((!args || args.width === undefined) && !opts.urn) {
                throw new Error("Missing required property 'width'");
            }
            resourceInputs["do3d"] = args ? args.do3d : undefined;
            resourceInputs["height"] = args ? args.height : undefined;
            resourceInputs["items"] = args ? args.items : undefined;
            resourceInputs["legend"] = args ? args.legend : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["percentLeft"] = args ? args.percentLeft : undefined;
            resourceInputs["percentRight"] = args ? args.percentRight : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["width"] = args ? args.width : undefined;
            resourceInputs["workPeriod"] = args ? args.workPeriod : undefined;
            resourceInputs["ymax"] = args ? args.ymax : undefined;
            resourceInputs["ymaxItemid"] = args ? args.ymaxItemid : undefined;
            resourceInputs["ymaxType"] = args ? args.ymaxType : undefined;
            resourceInputs["ymin"] = args ? args.ymin : undefined;
            resourceInputs["yminItemid"] = args ? args.yminItemid : undefined;
            resourceInputs["yminType"] = args ? args.yminType : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Graph.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Graph resources.
 */
export interface GraphState {
    /**
     * Show 3d graph
     */
    do3d?: pulumi.Input<boolean>;
    /**
     * Height
     */
    height?: pulumi.Input<string>;
    items?: pulumi.Input<pulumi.Input<inputs.GraphItem>[]>;
    /**
     * Show legend
     */
    legend?: pulumi.Input<boolean>;
    /**
     * Graph Name
     */
    name?: pulumi.Input<string>;
    /**
     * Left percentile
     */
    percentLeft?: pulumi.Input<string>;
    /**
     * Right percentile
     */
    percentRight?: pulumi.Input<string>;
    /**
     * Type, one of: exploded, normal, stacked, pie
     */
    type?: pulumi.Input<string>;
    /**
     * Width
     */
    width?: pulumi.Input<string>;
    /**
     * Show work period
     */
    workPeriod?: pulumi.Input<boolean>;
    /**
     * Y Axis Max
     */
    ymax?: pulumi.Input<string>;
    /**
     * Y Axis Max ItemId
     */
    ymaxItemid?: pulumi.Input<string>;
    /**
     * Y Axis Max Type, one of: calculated, fixed, item
     */
    ymaxType?: pulumi.Input<string>;
    /**
     * Y Axis Min
     */
    ymin?: pulumi.Input<string>;
    /**
     * Y Axis Min ItemId
     */
    yminItemid?: pulumi.Input<string>;
    /**
     * Y Axis Min Type, one of: calculated, fixed, item
     */
    yminType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Graph resource.
 */
export interface GraphArgs {
    /**
     * Show 3d graph
     */
    do3d?: pulumi.Input<boolean>;
    /**
     * Height
     */
    height: pulumi.Input<string>;
    items: pulumi.Input<pulumi.Input<inputs.GraphItem>[]>;
    /**
     * Show legend
     */
    legend?: pulumi.Input<boolean>;
    /**
     * Graph Name
     */
    name?: pulumi.Input<string>;
    /**
     * Left percentile
     */
    percentLeft?: pulumi.Input<string>;
    /**
     * Right percentile
     */
    percentRight?: pulumi.Input<string>;
    /**
     * Type, one of: exploded, normal, stacked, pie
     */
    type?: pulumi.Input<string>;
    /**
     * Width
     */
    width: pulumi.Input<string>;
    /**
     * Show work period
     */
    workPeriod?: pulumi.Input<boolean>;
    /**
     * Y Axis Max
     */
    ymax?: pulumi.Input<string>;
    /**
     * Y Axis Max ItemId
     */
    ymaxItemid?: pulumi.Input<string>;
    /**
     * Y Axis Max Type, one of: calculated, fixed, item
     */
    ymaxType?: pulumi.Input<string>;
    /**
     * Y Axis Min
     */
    ymin?: pulumi.Input<string>;
    /**
     * Y Axis Min ItemId
     */
    yminItemid?: pulumi.Input<string>;
    /**
     * Y Axis Min Type, one of: calculated, fixed, item
     */
    yminType?: pulumi.Input<string>;
}
