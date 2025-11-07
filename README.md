# PS2 Survival Horror – Shared types and utilities

`ps2-horror-shared` is a centralized repository of TypeScript types and utility functions used across both back-end and front-end repositories of the PS2 Survival Horror project, addressing the challenge of duplicated / inconsistent definitions. Managed independently via Git, this module is intended to be included as a submodule and is automatically built during installation with the `prepare` script.

## Usage

It is designed for explicit imports only, to clearly distinguish type and function imports:

```ts
import type { GameItem } from 'ps2-horror-shared/types';
import { toCamelCase } from 'ps2-horror-shared/utils';
```
