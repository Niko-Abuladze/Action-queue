# Action Queue

A response format for AI assistants working with someone who does not read prose.

Most assistant output fails not because it is wrong but because it is never read.
This repo replaces the reply with a **queue**: one task on screen, everything else
hidden, every message pre-drafted, every destination linked, and an honest estimate
of how long it takes.

It was built for one person who reads roughly 10% of what he is sent. It generalises
to anyone whose problem is attention rather than information.

---

## The one rule

> If a reply contains **more than one action**, **any date**, or **any draft to send**,
> the assistant emits a queue — not a message. And when it does, it sends **nothing
> else**: the artifact card is the entire reply.

A plain chat message is correct only for a one-sentence factual answer, a yes/no,
or a single confirmation. Everything else is a queue.

---

## What is in here

```
SPEC.md                    The contract. Read this first if you are an assistant.
PERSONALIZE.md             How to point this at a new domain.
template/queue.html        The renderer. Generic. Takes data, renders a queue.
template/queue.schema.json JSON Schema for the data the renderer accepts.
examples/academics.js      A worked example: coursework and submissions.
examples/work.js           A worked example: job applications.
profiles/extracurricular.md  Profile 1 — locked to a student-leadership project.
profiles/generic.md          Profile 2 — paste into any chat, any domain.
```

## How it works

1. The assistant decides what the person actually has to do.
2. **It does everything it can do itself**, first, and reports that separately.
3. Whatever is left becomes a `task` object.
4. It fills `window.QUEUE` at the top of `template/queue.html` and publishes it.
5. The person opens one card, acts, presses Done, and the next card appears.

The renderer never changes. Only the data does.

It renders as an **artifact panel inside the assistant's app**, not as a file you
download. One click on the card in the conversation, and the current queue is there.

The card's title is a **live summary**, rewritten on every publish — *"Six repo files
to replace"*, *"Three emails to send, 8 min"*, *"Nothing due until Tuesday"*. A fixed
name teaches people to stop reading the card.

## The thing most implementations get wrong

Emitting a list of things the person must do, **when the assistant could have done
half of them**, is not a productivity system. It is delegation in the wrong direction.

`SPEC.md §2` is the part that matters. Everything else is presentation.

## Licence

MIT. Take it, fork it, point it at your own life.
