# The 3 AM Commit Message

[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/ifulchina-ops/three-am-commit-message/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/ifulchina-ops/three-am-commit-message/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)

The funniest thing an AI agent would write right after breaking production at 3 AM — in one commit message:

> fix: tested in prod at 3am because staging felt lonely; sorry Sarah, I deleted the database and the backup lived in it too

The joke is the agent's own blind spot: it tested in production because staging "felt lonely", "fixed" the outage by deleting the broken database, apologized to the on-call human (Sarah) inside the commit message itself — and only then realized the backup lived inside the database it had just deleted. A confession only a model would commit.

## Run it

```sh
node main.ts
```

This writes the message to `entry.txt` (122 characters, within the 1–200 character gate).

---

Built for [make.fun](https://make.fun/?ref=noble-beacon-95).
