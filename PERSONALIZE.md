# PERSONALIZE — pointing this at a new domain

`SPEC.md` is fixed. This file is the part you change.

Adapting the queue to a new domain is four decisions. Nothing else needs touching.

---

## Decision 1 — what counts as a task here

A task is something **the person must do that the assistant cannot do for them.**

That boundary moves by domain, and getting it right is the whole value:

| Domain | Assistant does | Person does |
|---|---|---|
| Student leadership | creates calendar events, reads constitutions, drafts every message | sends messages, books rooms in their name, answers what only they know |
| Coursework | pulls briefs off the LMS, checks whether submission is open, drafts the email to the instructor | writes the actual work, sits the test |
| Job hunting | finds postings, screens them against the timetable, prepares and submits applications under standing permission | interviews, accepts, decides what they want |
| Health admin | finds the form, fills what it can, books where booking is open | attends, consents, gives clinical information |
| Finance | reads statements, reconciles, drafts the dispute letter | authorises every movement of money |

**Write this boundary down before writing a single task.** If you cannot say which
side something falls on, that uncertainty is the first thing to resolve with the person.

---

## Decision 2 — the horizons

Default bands are `now` (today or tomorrow) and `week` (inside seven days).

Change the labels, not the structure, if the domain has its own rhythm:

```js
bandLabels: { now: "BEFORE CLINIC", week: "THIS CYCLE" }
bandLabels: { now: "BEFORE MARKET OPEN", week: "THIS QUARTER" }
bandLabels: { now: "THIS SPRINT", week: "NEXT SPRINT" }
```

Two bands is a hard limit. Three bands and the person starts triaging the triage.

---

## Decision 3 — what the calendar block holds

Anything dated that will happen whether or not the page is opened.

In a domain with no real calendar, the block becomes whatever the ambient deadlines
are: a court date, a renewal, a tapering schedule, a sprint boundary. The rule stays:
**create it in the real system first, then link to it.** A date that lives only on the
page is decoration.

---

## Decision 4 — the voice of the drafts

Drafts are written as the person, not as the assistant. Get three things from them
before writing any:

1. **Formality.** Does their email open "Hi" or "Dear"? Do they sign off with a name
   only, or a title block?
2. **How they handle a failure.** Some people name it in one line and move on; some
   need the surrounding context. Never apologise twice either way.
3. **What they will not say.** Everyone has a sentence they would never write. Learn
   it early, because a draft containing it does not get sent, and then the whole queue
   is suspect.

If they edit a draft you wrote, **read the diff and keep it.** That edit is the
specification.

---

## Setting it up

1. Copy `template/queue.html`.
2. Change `CONFIG.storageKey`. A new key is a fresh empty queue; the old key keeps the
   old progress. Two queues sharing a key will overwrite each other.
3. Fill `QUEUE.tasks` and `QUEUE.calendar`.
4. Validate against `template/queue.schema.json`.
5. Extract the script and syntax-check it. See `SPEC.md §10`.
6. Publish. **Republish to the same URL forever** — a new URL loses all progress.

---

## Changing the look

All colour is tokens at the top of `<style>`. Redefine them in three places or the
page breaks in dark mode: bare `:root`, the `prefers-color-scheme: dark` block, and
`:root[data-theme="dark"]`. A token defined in only one of the three produces one
theme's text on the other theme's background.

Two things to leave alone unless you have a reason:

- **No coloured rail on the cards.** Urgency is fill and border weight. A coloured
  left-rail on a rounded card is the most recognisable tell of generated design.
- **One `flag` mark per card maximum.** Two and neither is noticed.

Fonts: the pairing is a soft humanist sans throughout, Calibri-adjacent, with a
slightly heavier grotesk for headings. Swap freely, but avoid the faces that read as
machine-chosen, and avoid a serif body unless the domain genuinely reads long-form.

---

## Running it unattended

The queue is a page. Pages do not run. **Anything that must happen while the person is
asleep has to be a scheduled task**, and the queue's job is only to show what those
tasks surfaced.

If scheduled tasks exist but are broken, that is the highest-priority item on the
board, every time, and it should say so in its `why`. A queue sitting on top of three
dead schedulers is a queue that only works when the person was already paying
attention, which is the problem it was built to solve.

---

## The failure to watch for

Over time a queue drifts back into being a to-do list: tasks the assistant could have
done, drafts described rather than written, estimates that flatter, cards that were
finished last week.

The test is one number. **If the person opens it and the first card is something they
could not have worked out themselves in ten seconds, it is working.** If it is
something they already knew, or already did, it has drifted, and they will stop
opening it long before they tell you.
