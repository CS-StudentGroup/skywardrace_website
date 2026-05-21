---
title: "Godot 4.6 Port"
summary: "Migrate from pygame-ce to Godot 4.6 to unlock features the original engine can't support."
status: in-progress
startedAt: 2026-05-15
target: "v1.0"
order: 1
featured: true
---

The pygame-ce build proved the game works — networked rooms, spectators, race
loop, all running. But the engine ceiling is starting to show:

- Custom rendering, input, and audio code we'd otherwise get for free
- No scene/editor workflow, so iteration on levels is slow
- Networking layer is hand-rolled and brittle under load

**Porting to Godot 4.6 buys us:**

- A real scene tree and editor for fast level work
- Built-in high-level multiplayer (RPCs, MultiplayerSpawner) instead of bespoke sockets
- A path to web and mobile builds later without rewriting the engine layer

This isn't a cosmetic rewrite — it's the foundation for everything past v1.
Track progress in the devlog below.
