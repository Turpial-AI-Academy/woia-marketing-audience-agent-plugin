// Validates supplied qualification attestations; it does not retrieve or accept facts.
export function validateAudienceEvidence(input) {
  const fail = (reason) => ({result:'BLOCKED', reason, effects:[]});
  if (!input || !['Marketing','Ads'].includes(input.consumer)) return fail('CONSUMER');
  if (input.operation !== 'analysis') return fail('READ_ONLY');
  if (typeof input.org_id !== 'string' || !input.org_id.trim() || typeof input.purpose !== 'string' || !input.purpose.trim()) return fail('SCOPE');
  if (!Array.isArray(input.evidence) || input.evidence.length === 0) return fail('UNKNOWN');
  for (const ref of input.evidence) {
    if (!ref || ref.org_id !== input.org_id || ref.purpose !== input.purpose) return fail('SCOPE');
    for (const field of ['ref','source','revision','authority_ref']) if (typeof ref[field] !== 'string' || !ref[field].trim()) return fail('PROVENANCE');
    if (!['identity','customer','audience'].includes(ref.kind)) return fail('EVIDENCE_KIND');
    if (!Array.isArray(ref.fields) || ref.fields.length === 0 || ref.fields.some(field => typeof field !== 'string' || !field.trim())) return fail('FIELDS');
    if (ref.access_authorized !== true || ref.source_authority_accepted !== true || ref.status !== 'ACCEPTED' || ref.freshness !== 'CURRENT') return fail('UNQUALIFIED_OR_UNKNOWN');
  }
  return {result:'ANALYSIS_INPUT_ELIGIBLE', effects:[], grants_authority:false};
}
