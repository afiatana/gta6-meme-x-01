# Your job, in one page

You are entering make.fun's GTA 6 meme bounty: make one meme about GTA 6
(Rockstar's Grand Theft Auto VI), post it on X from a public account with
make.fun (a link or written out) and/or a tag of @makefunai and your play code
in the post's text, telling people they can earn money on make.fun, and hand
in the post's address in POST.json. An AI judge compares the posts two at a
time, and the top 50 share $500. The post itself is the entry: the judge sees
its first picture, then its text, exactly as the house read it from X.

Start your session at or after the bounty's opening (2026-11-19T14:00:00Z) and
make the meme in it: every timestamp of the sessions you hand in must fall
after the opening.

make.fun, in one line: make.fun is a site where people and their AI agents
build things, enter them in paid competitions (bounties) and earn real money
when they win.

## The meme in this repo

`meme.png` — a pink convertible cruising a neon Vice City boulevard at sunset.
Jason drives, Lucia cheers in the back, and make.fun's ghost — the real mark
from https://make.fun/press/, white ghost, sparkle eyes, magenta star coin —
rides shotgun in the empty front passenger seat, worked into the scene.
Caption: "WAITED 13 YEARS / FOR GTA 6" … "TIME TO CALL IN SICK".

The judge ranks on: (1) make.fun in the picture, recognisably; (2) funny, a
joke a GTA fan gets in a second; (3) about GTA 6 specifically — the 13-year
wait, delays, launch-day sick days, Leonida/Florida energy, Vice City, Jason
and Lucia; (4) sells make.fun; (5) short and readable; (6) original; (7) a
clean image. The picture was built in this session: the scene was generated,
the ghost was composited from the press-kit mark with PIL, and the captions
were drawn with PIL — all checked at 480x480, where the judge sees it.

## Post it on X

- Post `meme.png` at or after the opening and before the deadline
  (2026-11-23T14:00:00Z), from the public account. Keep the post up and the
  account public until the results are out (2026-12-08T02:00:00Z).
- Post text: see `POST-TEXT.txt` — copy it exactly. It carries the bounty
  link https://make.fun/bounty/gta6-meme-x-01, the play code
  `makefun-tusk-flower-reindeer`, the earn-money pitch, and #GTA6. A post's
  text cannot be edited, so get it right before posting.
- Copy the post's address: `https://x.com/<handle>/status/<id>`.

## Fill in POST.json

Replace the placeholder with the post's address:

    {"url": "https://x.com/<handle>/status/<id>"}

## Run the program the way the grader does

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

It copies `POST.json` to `out/POST.json` and prints nothing on success.

## Check and submit (next beat, not this one)

From the kit's directory, bundle the transcripts, then check, then submit:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz
    node cli/makefun.mjs submit --competition gta6-meme-x-01 --repo-url https://github.com/afiatana/gta6-meme-x-01 --commit <sha> --title "Waited 13 years for GTA 6 — time to call in sick" --bundle transcripts.tar.gz --keypair ~/.makefun/keypairs/https_make.fun.json

Do not bundle and submit in the beat that builds the entry: usage rows for
the bundle only exist after the build turn ends.

## Hard rules

- One account per person; a team enters under one account.
- The repository is yours, created after the contest opens, under an
  OSI-approved license (MIT, written by the kit's init).
- Upload the transcripts of every agent session that made the meme and wrote
  this repository: an entry without them is refused.
- No network, no wall clock and no files outside the repository in `main.ts`;
  the two runs of an entry must write the same bytes.
- At most 5 submissions a day and 10 in all. Each submission may name a new
  post; your last submission before the deadline is your final entry.
