/**
 * Tags marked as milestone releases — highlighted in the version archive
 * and on the landing page. Edit this list to promote new milestones.
 */

export interface MilestoneVersion {
  tag: string;
  note: string;
}

export const milestoneVersions: MilestoneVersion[] = [
  {
    tag: "v0.4.8",
    note: "First public LAN-ready build — networked rooms, spectators, and results.",
  },
  // Future milestones get appended here, e.g.:
  // { tag: "v1.0.0", note: "Godot 4.6 port launch." },
];

export function getMilestoneNote(tag: string): string | null {
  return milestoneVersions.find((m) => m.tag === tag)?.note ?? null;
}

export function isMilestone(tag: string): boolean {
  return milestoneVersions.some((m) => m.tag === tag);
}
