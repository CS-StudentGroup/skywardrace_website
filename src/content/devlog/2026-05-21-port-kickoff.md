---
title: "Kicking off the Godot 4.6 port"
date: 2026-05-21
status: in-progress
summary: "First commit on the port/godot branch — establishing the project layout and porting plan."
---

The pygame-ce build is shipping, but the engine ceiling is starting to show.
This is the start of the Godot 4.6 port, living on the `port/godot` branch
in a `/godot` subdirectory of the main repo.

**Goals for v1 of the port:**

- Match feature parity with the pygame-ce build (race, spectator, results).
- Replace ad-hoc networking with Godot's high-level multiplayer API.
- Set up a tile-based world that can grow into a hub later.

More entries to follow as systems get ported.
