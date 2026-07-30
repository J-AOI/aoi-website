"use client";

import { useMemo, useState } from "react";

export default function ClaimMap({ claims, entries }) {
  const [selectedClaim, setSelectedClaim] = useState("all");
  const [expandedClaims, setExpandedClaims] = useState({});

  const visibleClaims = useMemo(() => {
    if (selectedClaim === "all") {
      return claims;
    }
    return claims.filter(([claimId]) => claimId === selectedClaim);
  }, [claims, selectedClaim]);

  const sourcesByClaim = useMemo(() => {
    return Object.fromEntries(
      claims.map(([claimId]) => [
        claimId,
        entries.filter((entry) => entry.claims?.includes(claimId)),
      ]),
    );
  }, [claims, entries]);

  const toggleClaim = (claimId) => {
    setExpandedClaims((current) => ({
      ...current,
      [claimId]: !current[claimId],
    }));
  };

  return (
    <div className="mt-10">
      <label
        htmlFor="claim-map-filter"
        className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/42"
      >
        Claim filter
      </label>
      <select
        id="claim-map-filter"
        value={selectedClaim}
        onChange={(event) => setSelectedClaim(event.target.value)}
        className="mt-3 w-full max-w-sm border border-white/16 bg-aoi-black px-3 py-3 text-sm text-white outline-none transition focus:border-aoi-red focus:ring-2 focus:ring-aoi-red/35"
      >
        <option value="all">All claims</option>
        {claims.map(([claimId, claim]) => (
          <option key={claimId} value={claimId}>
            {claimId} - {claim.label}
          </option>
        ))}
      </select>

      <div className="mt-6 overflow-x-auto border border-white/12">
        <table className="min-w-[960px] border-collapse text-left">
          <thead className="bg-white/[0.04] text-xs font-semibold uppercase tracking-[0.18em] text-white/46">
            <tr>
              <th className="w-24 border-b border-white/12 p-4">Claim</th>
              <th className="w-56 border-b border-white/12 p-4">Label</th>
              <th className="w-36 border-b border-white/12 p-4">Type</th>
              <th className="border-b border-white/12 p-4">Coverage</th>
              <th className="w-72 border-b border-white/12 p-4">Sources</th>
            </tr>
          </thead>
          <tbody>
            {visibleClaims.map(([claimId, claim]) => {
              const relatedEntries = sourcesByClaim[claimId] || [];
              const isExpanded = Boolean(expandedClaims[claimId]);
              const visibleEntries = isExpanded ? relatedEntries : relatedEntries.slice(0, 1);
              const remainingCount = Math.max(relatedEntries.length - 1, 0);

              return (
                <tr key={claimId} className="border-b border-white/10 align-top last:border-b-0">
                  <td className="p-4 text-sm font-semibold text-aoi-red">{claimId}</td>
                  <td className="p-4">
                    <p className="text-base font-semibold text-white">{claim.label}</p>
                    <p className="mt-3 text-sm leading-6 text-white/54">{claim.gloss}</p>
                  </td>
                  <td className="p-4 text-sm text-white/66">{claim.type}</td>
                  <td className="p-4 text-sm leading-7 text-white/72">{claim.coverage}</td>
                  <td className="p-4">
                    <div className="flex w-72 max-w-full flex-col gap-3">
                      {visibleEntries.map((entry) => (
                        <a
                          key={entry.id}
                          href={`#${entry.id}`}
                          className="group border border-white/10 p-3 transition hover:border-aoi-red/70 focus:border-aoi-red focus:outline-none focus:ring-2 focus:ring-aoi-red/35"
                        >
                          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40 group-hover:text-aoi-red">
                            {entry.id} - {entry.relation}
                          </span>
                          <span className="mt-2 block text-sm leading-5 text-white/72">
                            {entry.title}
                          </span>
                        </a>
                      ))}

                      {remainingCount > 0 ? (
                        <button
                          type="button"
                          aria-expanded={isExpanded}
                          onClick={() => toggleClaim(claimId)}
                          className="border border-white/12 px-3 py-2 text-left text-xs font-semibold uppercase tracking-[0.16em] text-white/46 transition hover:border-white/28 hover:text-white focus:border-aoi-red focus:outline-none focus:ring-2 focus:ring-aoi-red/35"
                        >
                          {isExpanded
                            ? "Show fewer sources"
                            : `+${remainingCount} more sources`}
                        </button>
                      ) : null}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
