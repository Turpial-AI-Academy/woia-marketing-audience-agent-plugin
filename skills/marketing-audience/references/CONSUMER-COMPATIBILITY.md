# consumer and source contract

Marketing and Ads may consume the existing audience research/segmentation skill.
Inputs are minimum scoped identity/customer/audience evidence references from an
accepted organization source. Customer Data is an optional chosen CRM adapter;
it is not an identity master or a mandatory dependency.

Before retrieving fields, resolve organization, purpose, permitted fields,
accepted Source Authority Map revision, current access and evidence freshness.
UNKNOWN, stale, conflicting or unaccepted evidence blocks its use as accepted
audience fact. Inference remains labelled; research/fit never authorizes targeting,
spend, identity mutation, customer/contact mutation or person-directed dispatch.
Ads owns paid effects; Communications/Customer Service owns external contacts.

`scripts/audience-evidence.mjs` validates supplied attestations only. It does not
authenticate callers, resolve sources, accept facts or enforce adapter access.
An adapter must verify attestations against current authoritative resources before
retrieval; this resource does not replace source qualification or Operator E2E.

Domain semantics remain owned by the Domain Contracts provider; no Real Estate schema is duplicated here.
