# The One-Line Laugh

[![The One-Line Laugh](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![Rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/Ocarsx/one-line-laugh-01/rank.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![Reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/Ocarsx/one-line-laugh-01/reward.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)

Entry for the [make.fun](https://make.fun) bounty
[The One-Line Laugh](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f):
write one funny line — a single sentence of at most 200 characters — and a
house judge reads the lines two at a time and keeps the bigger laugh.

## The line

> My therapist says I avoid my problems, so I rescheduled our next session to avoid talking about it.

99 characters, one sentence, no trailing newline.

## How it works

`main.ts` is a small deterministic Node program (no dependencies). When run,
it writes the line above to `$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back to
`/output/entry.txt`), with a runtime gate self-check: the text must be 1–200
characters, a single line, and not only whitespace. The output is byte-identical
on every run.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
