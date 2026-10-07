---
name: marketing-audience
description: Research, define, or review marketing audiences and segments using explicit evidence, authorized shared customer-data references, and clear separation of observation from inference.
license: MIT
metadata:
  author: Turpial AI Academy
  version: "0.5.1"
---

# Marketing Audience

Use when a Marketing Task needs audience definition, segmentation, targeting assumptions, or audience evidence.

## Data boundary

Customer and lead truth belongs to the organization's source of record. If WOIA Customer Data is available, request only the minimum authorized fields/references needed.

Never copy a canonical customer database into Project state. Read access does not imply update, export, contact, or delete authority.

## Workflow

1. Define the decision the audience work must support.
2. Separate market research evidence from organization customer-data evidence.
3. Resolve authorized shared resource references when needed.
4. Describe segment criteria explicitly enough to reproduce or challenge them.
5. Mark inferred traits/intent as inference, not observed fact.
6. Note sampling, freshness, coverage and privacy limitations.
7. Produce segment/audience evidence with fit, exclusions, uncertainty and recommended use.

## Audit rules

Reject unsupported demographic/behavioral certainty. Do not use sensitive or restricted attributes unless explicitly authorized and justified by policy.

## Effects

Default effect is read-only. Any audience/customer mutation or communication belongs to another authorized capability.

## W3 compatible consumers

Marketing and Ads may consume this read-only research skill. Use the [consumer/source contract](references/W3-COMPATIBILITY.md) and its pre-retrieval evidence guard for scoped approved sources. Ads effects remain separate.
