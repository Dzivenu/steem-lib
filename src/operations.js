"use strict";

var types = require("./types");
var SerializerImpl = require("./serializer");

var int16 = types.int16;
var uint16 = types.uint16;
var uint32 = types.uint32;
var int64 = types.int64;
var uint64 = types.uint64;
var string = types.string;
var string_binary = types.string_binary;
var bytes = types.bytes;
var bool = types.bool;
var array = types.array;
var fixed_array = types.fixed_array;
var object_id_type = types.object_id_type;
var vote_id = types.vote_id;
var static_variant = types.static_variant;
var map = types.map;
var set = types.set;
var public_key = types.public_key;
var address = types.address;
var time_point_sec = types.time_point_sec;
var optional = types.optional;
var asset = types.asset;

var version = types.version;
var comment_payout_beneficiaries = types.void;
var future_extensions = static_variant([types.void]);
var block_header_extensions = static_variant();
var work = static_variant();

// Place-holder, their are dependencies on "operation" .. The final list of
// operations is not avialble until the very end of the generated code.
// See: operation.st_operations = ...
var operation = static_variant();
module.exports["operation"] = operation;

// For module.exports
var Serializer = function Serializer(operation_name, serilization_types_object) {
    var s = new SerializerImpl(operation_name, serilization_types_object);
    return module.exports[operation_name] = s;
};

// Custom-types follow Generated code:

// ##  Generated code follows
// # npm i -g decaffeinate
// # programs/js_operation_serializer > ops.coffee && decaffeinate ops.coffee
// # open ops.txt, copy to Chain/ChainTypes and operations.js
// ## -------------------------------
var signed_transaction = new Serializer("signed_transaction", {
    ref_block_num: uint16,
    ref_block_prefix: uint32,
    expiration: time_point_sec,
    operations: array(operation),
    extensions: set(future_extensions),
    signatures: array(bytes(65))
});

var signed_block = new Serializer("signed_block", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: string,
    transaction_merkle_root: bytes(20),
    extensions: set(block_header_extensions),
    witness_signature: bytes(65),
    transactions: array(signed_transaction)
});

var block_header = new Serializer("block_header", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: string,
    transaction_merkle_root: bytes(20),
    extensions: set(block_header_extensions)
});

var signed_block_header = new Serializer("signed_block_header", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: string,
    transaction_merkle_root: bytes(20),
    extensions: set(block_header_extensions),
    witness_signature: bytes(65)
});

var vote = new Serializer("vote", {
    voter: string,
    author: string,
    permlink: string,
    weight: uint16
});

var comment = new Serializer("comment", {
    parent_author: string,
    parent_permlink: string,
    author: string,
    permlink: string,
    title: string,
    body: string,
    json_metadata: string
});


var transfer = new Serializer("transfer", {
    from: string,
    to: string,
    amount: asset,
    memo: string
});

var transfer_to_vesting = new Serializer("transfer_to_vesting", {
    from: string,
    to: string,
    amount: asset
});

var withdraw_vesting = new Serializer("withdraw_vesting", {
    account: string,
    vesting_shares: asset
});

var limit_order_create = new Serializer("limit_order_create", {
    owner: string,
    orderid: uint32,
    amount_to_sell: asset,
    min_to_receive: asset,
    fill_or_kill: bool,
    expiration: time_point_sec
});

var limit_order_cancel = new Serializer("limit_order_cancel", {
    owner: string,
    orderid: uint32
});

var price = new Serializer("price", {
    base: asset,
    quote: asset
});

var feed_publish = new Serializer("feed_publish", {
    publisher: string,
    exchange_rate: price
});

var convert = new Serializer("convert", {
    owner: string,
    requestid: uint32,
    amount: asset
});

var authority = new Serializer("authority", {
    weight_threshold: uint32,
    account_auths: map(string, uint16),
    key_auths: map(public_key, uint16)
});

var account_create = new Serializer("account_create", {
    fee: asset,
    creator: string,
    new_account_name: string,
    owner: authority,
    active: authority,
    posting: authority,
    memo_key: public_key,
    json_metadata: string
});

var account_update = new Serializer("account_update", {
    account: string,
    owner: optional(authority),
    active: optional(authority),
    posting: optional(authority),
    memo_key: public_key,
    json_metadata: string
});

var chain_properties = new Serializer("chain_properties", {
    account_creation_fee: asset,
    maximum_block_size: uint32,
    sbd_interest_rate: uint16
});

var witness_update = new Serializer("witness_update", {
    owner: string,
    url: string,
    block_signing_key: public_key,
    props: chain_properties,
    fee: asset
});

var account_witness_vote = new Serializer("account_witness_vote", {
    account: string,
    witness: string,
    approve: bool
});

var account_witness_proxy = new Serializer("account_witness_proxy", {
    account: string,
    proxy: string
});

var pow = new Serializer("pow", {
    worker: public_key,
    input: bytes(32),
    signature: bytes(65),
    work: bytes(32)
});

var custom = new Serializer("custom", {
    required_auths: set(string),
    id: uint16,
    data: bytes()
});

var report_over_production = new Serializer("report_over_production", {
    reporter: string,
    first_block: signed_block_header,
    second_block: signed_block_header
});

var delete_comment = new Serializer("delete_comment", {
    author: string,
    permlink: string
});

var custom_json = new Serializer("custom_json", {
    required_auths: set(string),
    required_posting_auths: set(string),
    id: string,
    json: string
});

var comment_options = new Serializer("comment_options", {
    author: string,
    permlink: string,
    max_accepted_payout: asset,
    percent_steem_dollars: uint16,
    allow_votes: bool,
    allow_curation_rewards: bool,
    extensions: set(static_variant([
        comment_payout_beneficiaries
    ]))
});

var set_withdraw_vesting_route = new Serializer("set_withdraw_vesting_route", {
    from_account: string,
    to_account: string,
    percent: uint16,
    auto_vest: bool
});

var limit_order_create2 = new Serializer("limit_order_create2", {
    owner: string,
    orderid: uint32,
    amount_to_sell: asset,
    exchange_rate: price,
    fill_or_kill: bool,
    expiration: time_point_sec
});

var challenge_authority = new Serializer("challenge_authority", {
    challenger: string,
    challenged: string,
    require_owner: bool
});

var prove_authority = new Serializer("prove_authority", {
    challenged: string,
    require_owner: bool
});

var request_account_recovery = new Serializer("request_account_recovery", {
    recovery_account: string,
    account_to_recover: string,
    new_owner_authority: authority,
    extensions: set(future_extensions)
});

var recover_account = new Serializer("recover_account", {
    account_to_recover: string,
    new_owner_authority: authority,
    recent_owner_authority: authority,
    extensions: set(future_extensions)
});

var change_recovery_account = new Serializer("change_recovery_account", {
    account_to_recover: string,
    new_recovery_account: string,
    extensions: set(future_extensions)
});

var escrow_transfer = new Serializer("escrow_transfer", {
    from: string,
    to: string,
    sbd_amount: asset,
    steem_amount: asset,
    escrow_id: uint32,
    agent: string,
    fee: asset,
    json_meta: string,
    ratification_deadline: time_point_sec,
    escrow_expiration: time_point_sec
});

var escrow_dispute = new Serializer("escrow_dispute", {
    from: string,
    to: string,
    agent: string,
    who: string,
    escrow_id: uint32
});

var escrow_release = new Serializer("escrow_release", {
    from: string,
    to: string,
    agent: string,
    who: string,
    receiver: string,
    escrow_id: uint32,
    sbd_amount: asset,
    steem_amount: asset
});

var pow2 = new Serializer("pow2", {
    work: work,
    new_owner_key: optional(public_key),
    props: chain_properties
});

var escrow_approve = new Serializer("escrow_approve", {
    from: string,
    to: string,
    agent: string,
    who: string,
    escrow_id: uint32,
    approve: bool
});

var transfer_to_savings = new Serializer("transfer_to_savings", {
    from: string,
    to: string,
    amount: asset,
    memo: string
});

var transfer_from_savings = new Serializer("transfer_from_savings", {
    from: string,
    request_id: uint32,
    to: string,
    amount: asset,
    memo: string
});

var cancel_transfer_from_savings = new Serializer("cancel_transfer_from_savings", {
    from: string,
    request_id: uint32
});

var custom_binary = new Serializer("custom_binary", {
    required_owner_auths: set(string),
    required_active_auths: set(string),
    required_posting_auths: set(string),
    required_auths: array(authority),
    id: string,
    data: bytes()
});

var decline_voting_rights = new Serializer("decline_voting_rights", {
    account: string,
    decline: bool
});

var reset_account = new Serializer("reset_account", {
    reset_account: string,
    account_to_reset: string,
    new_owner_authority: authority
});

var set_reset_account = new Serializer("set_reset_account", {
    account: string,
    current_reset_account: string,
    reset_account: string
});

var claim_reward_balance = new Serializer("claim_reward_balance", {
    account: string,
    reward_steem: asset,
    reward_sbd: asset,
    reward_vests: asset
});

var delegate_vesting_shares = new Serializer("delegate_vesting_shares", {
    delegator: string,
    delegatee: string,
    vesting_shares: asset
});

var account_create_with_delegation = new Serializer("account_create_with_delegation", {
    fee: asset,
    delegation: asset,
    creator: string,
    new_account_name: string,
    owner: authority,
    active: authority,
    posting: authority,
    memo_key: public_key,
    json_metadata: string,
    extensions: set(future_extensions)
});

var fill_convert_request = new Serializer("fill_convert_request", {
    owner: string,
    requestid: uint32,
    amount_in: asset,
    amount_out: asset
});

var author_reward = new Serializer("author_reward", {
    author: string,
    permlink: string,
    sbd_payout: asset,
    vesting_payout: asset
});

var curation_reward = new Serializer("curation_reward", {
    curator: string,
    reward: asset,
    comment_author: string,
    comment_permlink: string
});

var comment_reward = new Serializer("comment_reward", {
    author: string,
    permlink: string,
    sbd_payout: asset,
    vesting_payout: asset
});

var liquidity_reward = new Serializer("liquidity_reward", {
    owner: string,
    payout: asset
});

var interest = new Serializer("interest", {
    owner: string,
    interest: asset
});

var fill_vesting_withdraw = new Serializer("fill_vesting_withdraw", {
    from_account: string,
    to_account: string,
    withdrawn: asset,
    deposited: asset
});

var fill_order = new Serializer("fill_order", {
    current_owner: string,
    current_orderid: uint32,
    current_pays: asset,
    open_owner: string,
    open_orderid: uint32,
    open_pays: asset
});

var shutdown_witness = new Serializer("shutdown_witness", {
    owner: string
});

var fill_transfer_from_savings = new Serializer("fill_transfer_from_savings", {
    from: string,
    to: string,
    amount: asset,
    request_id: uint32,
    memo: string
});

var hardfork = new Serializer("hardfork", {
    hardfork_id: uint32
});

var comment_payout_update = new Serializer("comment_payout_update", {
    author: string,
    permlink: string
});

var return_vesting_delegation = new Serializer("return_vesting_delegation", {
    account: string,
    vesting_shares: asset
});

var comment_benefactor_reward = new Serializer("comment_benefactor_reward", {
    benefactor: string,
    author: string,
    permlink: string,
    reward: asset
});

operation.st_operations = [
    vote,    
    comment,    
    transfer,    
    transfer_to_vesting,    
    withdraw_vesting,    
    limit_order_create,    
    limit_order_cancel,    
    feed_publish,    
    convert,    
    account_create,    
    account_update,    
    witness_update,    
    account_witness_vote,    
    account_witness_proxy,    
    pow,    
    custom,    
    report_over_production,    
    delete_comment,    
    custom_json,    
    comment_options,    
    set_withdraw_vesting_route,    
    limit_order_create2,    
    challenge_authority,    
    prove_authority,    
    request_account_recovery,    
    recover_account,    
    change_recovery_account,    
    escrow_transfer,    
    escrow_dispute,    
    escrow_release,
    pow2,    
    escrow_approve,    
    transfer_to_savings,    
    transfer_from_savings,    
    cancel_transfer_from_savings,    
    custom_binary,    
    decline_voting_rights, 
    reset_account,
    set_reset_account,
    claim_reward_balance,    
    delegate_vesting_shares,    
    account_create_with_delegation,

    fill_convert_request, 
    author_reward,    
    curation_reward,         
    comment_reward,    
    liquidity_reward,    
    interest,    
    fill_vesting_withdraw,    
    fill_order,
    shutdown_witness,
    fill_transfer_from_savings,
    hardfork,    
    comment_payout_update,    
    return_vesting_delegation,    
    comment_benefactor_reward
]

// --------------------------------------------


var hardfork_version_vote = new Serializer("hardfork_version_vote",{
    hf_version: version,
    hf_time: time_point_sec,
});

block_header_extensions.st_operations = [
    future_extensions,
    version,
    hardfork_version_vote
];

// ---------------------------------------------
var pow2_input = new Serializer("pow2_input",{
    worker_account: string,
    prev_block: bytes(20),
    nonce: uint64
});

var pow2_work = new Serializer("pow2_work",{
    input: pow2_input,
    pow_summary: uint32,
});

var equihash_proof = new Serializer("equihash_proof",{
    n: uint32,
    k: uint32,
    seed: bytes(32),
    inputs: array(uint32)
});

var equihash_pow = new Serializer("equihash_pow",{
    input: pow2_input,
    proof: equihash_proof,
    prev_block: bytes(20),
    pow_summary: uint32,
});

work.st_operations = [
    pow2_work,
    equihash_pow
];

// ------------------------------------------------------
var transaction = new Serializer("transaction", {
    ref_block_num: uint16,
    ref_block_prefix: uint32,
    expiration: time_point_sec,
    operations: array(operation),
    extensions: set(future_extensions)
});


//# -------------------------------
//#  Generated code end
//# -------------------------------

var encrypted_memo = new Serializer("encrypted_memo", {
    from: public_key,
    to: public_key,
    nonce: uint64,
    check: uint32,
    encrypted: string_binary}
);