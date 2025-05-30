// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ItemHttp extends pulumi.CustomResource {
    /**
     * Get an existing ItemHttp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ItemHttpState, opts?: pulumi.CustomResourceOptions): ItemHttp {
        return new ItemHttp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'zabbix:index/itemHttp:ItemHttp';

    /**
     * Returns true if the given object is an instance of ItemHttp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ItemHttp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ItemHttp.__pulumiType;
    }

    /**
     * Application IDs to associate this item with
     */
    public readonly applications!: pulumi.Output<string[] | undefined>;
    /**
     * HTTP auth type, one of: none, basic, ntlm, kerberos
     */
    public readonly authType!: pulumi.Output<string | undefined>;
    /**
     * Item Delay period
     */
    public readonly delay!: pulumi.Output<string | undefined>;
    /**
     * follow http redirects
     */
    public readonly followRedirects!: pulumi.Output<boolean | undefined>;
    public readonly headers!: pulumi.Output<{[key: string]: string} | undefined>;
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
    /**
     * Authentication Password
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * HTTP post type, one of: json, xml, raw
     */
    public readonly postType!: pulumi.Output<string | undefined>;
    /**
     * POST data to send in request
     */
    public readonly posts!: pulumi.Output<string | undefined>;
    public readonly preprocessors!: pulumi.Output<outputs.ItemHttpPreprocessor[] | undefined>;
    /**
     * HTTP proxy connection string
     */
    public readonly proxy!: pulumi.Output<string | undefined>;
    /**
     * HTTP request method, one of: post, put, head, get
     */
    public readonly requestMethod!: pulumi.Output<string | undefined>;
    /**
     * HTTP retrieve mode, one of: body, headers, both
     */
    public readonly retrieveMode!: pulumi.Output<string | undefined>;
    /**
     * http status code
     */
    public readonly statusCodes!: pulumi.Output<string | undefined>;
    public readonly tags!: pulumi.Output<outputs.ItemHttpTag[] | undefined>;
    /**
     * http request timeout
     */
    public readonly timeout!: pulumi.Output<string | undefined>;
    /**
     * Item Trends
     */
    public readonly trends!: pulumi.Output<string>;
    /**
     * url to probe
     */
    public readonly url!: pulumi.Output<string>;
    /**
     * Authentication Username
     */
    public readonly username!: pulumi.Output<string | undefined>;
    /**
     * Item Value Type, one of: float, character, log, unsigned, text
     */
    public readonly valuetype!: pulumi.Output<string>;
    /**
     * https verify host
     */
    public readonly verifyHost!: pulumi.Output<boolean | undefined>;
    /**
     * https verify peer
     */
    public readonly verifyPeer!: pulumi.Output<boolean | undefined>;

    /**
     * Create a ItemHttp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ItemHttpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ItemHttpArgs | ItemHttpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ItemHttpState | undefined;
            resourceInputs["applications"] = state ? state.applications : undefined;
            resourceInputs["authType"] = state ? state.authType : undefined;
            resourceInputs["delay"] = state ? state.delay : undefined;
            resourceInputs["followRedirects"] = state ? state.followRedirects : undefined;
            resourceInputs["headers"] = state ? state.headers : undefined;
            resourceInputs["history"] = state ? state.history : undefined;
            resourceInputs["hostid"] = state ? state.hostid : undefined;
            resourceInputs["interfaceid"] = state ? state.interfaceid : undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["postType"] = state ? state.postType : undefined;
            resourceInputs["posts"] = state ? state.posts : undefined;
            resourceInputs["preprocessors"] = state ? state.preprocessors : undefined;
            resourceInputs["proxy"] = state ? state.proxy : undefined;
            resourceInputs["requestMethod"] = state ? state.requestMethod : undefined;
            resourceInputs["retrieveMode"] = state ? state.retrieveMode : undefined;
            resourceInputs["statusCodes"] = state ? state.statusCodes : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
            resourceInputs["trends"] = state ? state.trends : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
            resourceInputs["valuetype"] = state ? state.valuetype : undefined;
            resourceInputs["verifyHost"] = state ? state.verifyHost : undefined;
            resourceInputs["verifyPeer"] = state ? state.verifyPeer : undefined;
        } else {
            const args = argsOrState as ItemHttpArgs | undefined;
            if ((!args || args.hostid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostid'");
            }
            if ((!args || args.key === undefined) && !opts.urn) {
                throw new Error("Missing required property 'key'");
            }
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            if ((!args || args.valuetype === undefined) && !opts.urn) {
                throw new Error("Missing required property 'valuetype'");
            }
            resourceInputs["applications"] = args ? args.applications : undefined;
            resourceInputs["authType"] = args ? args.authType : undefined;
            resourceInputs["delay"] = args ? args.delay : undefined;
            resourceInputs["followRedirects"] = args ? args.followRedirects : undefined;
            resourceInputs["headers"] = args ? args.headers : undefined;
            resourceInputs["history"] = args ? args.history : undefined;
            resourceInputs["hostid"] = args ? args.hostid : undefined;
            resourceInputs["interfaceid"] = args ? args.interfaceid : undefined;
            resourceInputs["key"] = args ? args.key : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["postType"] = args ? args.postType : undefined;
            resourceInputs["posts"] = args ? args.posts : undefined;
            resourceInputs["preprocessors"] = args ? args.preprocessors : undefined;
            resourceInputs["proxy"] = args ? args.proxy : undefined;
            resourceInputs["requestMethod"] = args ? args.requestMethod : undefined;
            resourceInputs["retrieveMode"] = args ? args.retrieveMode : undefined;
            resourceInputs["statusCodes"] = args ? args.statusCodes : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["trends"] = args ? args.trends : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["valuetype"] = args ? args.valuetype : undefined;
            resourceInputs["verifyHost"] = args ? args.verifyHost : undefined;
            resourceInputs["verifyPeer"] = args ? args.verifyPeer : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ItemHttp.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ItemHttp resources.
 */
export interface ItemHttpState {
    /**
     * Application IDs to associate this item with
     */
    applications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * HTTP auth type, one of: none, basic, ntlm, kerberos
     */
    authType?: pulumi.Input<string>;
    /**
     * Item Delay period
     */
    delay?: pulumi.Input<string>;
    /**
     * follow http redirects
     */
    followRedirects?: pulumi.Input<boolean>;
    headers?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
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
    /**
     * Authentication Password
     */
    password?: pulumi.Input<string>;
    /**
     * HTTP post type, one of: json, xml, raw
     */
    postType?: pulumi.Input<string>;
    /**
     * POST data to send in request
     */
    posts?: pulumi.Input<string>;
    preprocessors?: pulumi.Input<pulumi.Input<inputs.ItemHttpPreprocessor>[]>;
    /**
     * HTTP proxy connection string
     */
    proxy?: pulumi.Input<string>;
    /**
     * HTTP request method, one of: post, put, head, get
     */
    requestMethod?: pulumi.Input<string>;
    /**
     * HTTP retrieve mode, one of: body, headers, both
     */
    retrieveMode?: pulumi.Input<string>;
    /**
     * http status code
     */
    statusCodes?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.ItemHttpTag>[]>;
    /**
     * http request timeout
     */
    timeout?: pulumi.Input<string>;
    /**
     * Item Trends
     */
    trends?: pulumi.Input<string>;
    /**
     * url to probe
     */
    url?: pulumi.Input<string>;
    /**
     * Authentication Username
     */
    username?: pulumi.Input<string>;
    /**
     * Item Value Type, one of: float, character, log, unsigned, text
     */
    valuetype?: pulumi.Input<string>;
    /**
     * https verify host
     */
    verifyHost?: pulumi.Input<boolean>;
    /**
     * https verify peer
     */
    verifyPeer?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a ItemHttp resource.
 */
export interface ItemHttpArgs {
    /**
     * Application IDs to associate this item with
     */
    applications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * HTTP auth type, one of: none, basic, ntlm, kerberos
     */
    authType?: pulumi.Input<string>;
    /**
     * Item Delay period
     */
    delay?: pulumi.Input<string>;
    /**
     * follow http redirects
     */
    followRedirects?: pulumi.Input<boolean>;
    headers?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
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
    /**
     * Authentication Password
     */
    password?: pulumi.Input<string>;
    /**
     * HTTP post type, one of: json, xml, raw
     */
    postType?: pulumi.Input<string>;
    /**
     * POST data to send in request
     */
    posts?: pulumi.Input<string>;
    preprocessors?: pulumi.Input<pulumi.Input<inputs.ItemHttpPreprocessor>[]>;
    /**
     * HTTP proxy connection string
     */
    proxy?: pulumi.Input<string>;
    /**
     * HTTP request method, one of: post, put, head, get
     */
    requestMethod?: pulumi.Input<string>;
    /**
     * HTTP retrieve mode, one of: body, headers, both
     */
    retrieveMode?: pulumi.Input<string>;
    /**
     * http status code
     */
    statusCodes?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.ItemHttpTag>[]>;
    /**
     * http request timeout
     */
    timeout?: pulumi.Input<string>;
    /**
     * Item Trends
     */
    trends?: pulumi.Input<string>;
    /**
     * url to probe
     */
    url: pulumi.Input<string>;
    /**
     * Authentication Username
     */
    username?: pulumi.Input<string>;
    /**
     * Item Value Type, one of: float, character, log, unsigned, text
     */
    valuetype: pulumi.Input<string>;
    /**
     * https verify host
     */
    verifyHost?: pulumi.Input<boolean>;
    /**
     * https verify peer
     */
    verifyPeer?: pulumi.Input<boolean>;
}
