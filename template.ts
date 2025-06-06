// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Template extends pulumi.CustomResource {
    /**
     * Get an existing Template resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TemplateState, opts?: pulumi.CustomResourceOptions): Template {
        return new Template(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'zabbix:index/template:Template';

    /**
     * Returns true if the given object is an instance of Template.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Template {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Template.__pulumiType;
    }

    /**
     * Template description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Host Group IDs
     */
    public readonly groups!: pulumi.Output<string[]>;
    /**
     * Template hostname (internal name)
     */
    public readonly host!: pulumi.Output<string>;
    public readonly macros!: pulumi.Output<outputs.TemplateMacro[] | undefined>;
    /**
     * Template Display Name (defaults to host)
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * linked templates
     */
    public readonly templates!: pulumi.Output<string[] | undefined>;

    /**
     * Create a Template resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TemplateArgs | TemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TemplateState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["groups"] = state ? state.groups : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["macros"] = state ? state.macros : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["templates"] = state ? state.templates : undefined;
        } else {
            const args = argsOrState as TemplateArgs | undefined;
            if ((!args || args.groups === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groups'");
            }
            if ((!args || args.host === undefined) && !opts.urn) {
                throw new Error("Missing required property 'host'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["groups"] = args ? args.groups : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["macros"] = args ? args.macros : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["templates"] = args ? args.templates : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Template.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Template resources.
 */
export interface TemplateState {
    /**
     * Template description
     */
    description?: pulumi.Input<string>;
    /**
     * Host Group IDs
     */
    groups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Template hostname (internal name)
     */
    host?: pulumi.Input<string>;
    macros?: pulumi.Input<pulumi.Input<inputs.TemplateMacro>[]>;
    /**
     * Template Display Name (defaults to host)
     */
    name?: pulumi.Input<string>;
    /**
     * linked templates
     */
    templates?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Template resource.
 */
export interface TemplateArgs {
    /**
     * Template description
     */
    description?: pulumi.Input<string>;
    /**
     * Host Group IDs
     */
    groups: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Template hostname (internal name)
     */
    host: pulumi.Input<string>;
    macros?: pulumi.Input<pulumi.Input<inputs.TemplateMacro>[]>;
    /**
     * Template Display Name (defaults to host)
     */
    name?: pulumi.Input<string>;
    /**
     * linked templates
     */
    templates?: pulumi.Input<pulumi.Input<string>[]>;
}
