/* Worked example — coursework and submissions.
   Shows: a locked submission the assistant cannot fix, a draft that must be
   sent by the person, and the done_for_you block carrying work already finished. */

window.CONFIG = {
  storageKey : "aq-v1-ifp030",
  bandLabels : { now: "DO TODAY", week: "THIS WEEK" },
  deferLabels: { later: "Later today", tomorrow: "Tomorrow", park: "Park it" },
  laterHours : 4,
  tomorrowAt : 9,
  calendarHeading : "Your dated commitments",
  calendarSub     : "Tap any one to open it."
};

window.QUEUE = {
  title: "IFP030 Queue",
  updated: "29 Oct 2026",

  done_for_you: {
    heading: "Three things are already done for you",
    note: "Pulled from Quercus just now.",
    items: [
      { d:"Done", m:"", title:"Both assignment briefs downloaded",
        note:"In your folder under Feedback. Neither needed you." },
      { d:"Done", m:"", title:"Proposal grade retrieved: 88/100",
        note:"All nine criteria in Above Expectation. Marked-up rubric saved." },
      { d:"Done", m:"", title:"Quiz windows checked against your VOI dates",
        note:"Quizzes 2 and 6 fall OUTSIDE the window. Only 3, 4 and 5 are inside." }
    ]
  },

  tasks: [
    {
      id: "email-kim",
      band: "now",
      minutes: 1,
      title: "Email Ms Kim about the two locked assignments",
      line: "Both are <mark class='flag'>LOCKED</mark>, not late. There is no upload box.",
      why: "Quercus says the assignments were locked on 16 and 19 October at 11:59pm. Nothing can be submitted unless she reopens them, so finishing the work first would be wasted effort. Both were also in-class group activities, which changes what you are asking her for — you are asking to make up a Week 6 workshop you missed while ill, not to hand in late homework.",
      steps: [
        "Copy the message.",
        "Open Outlook below. To Ms Kim, copy Tyson Seburn.",
        "Send from your UofT address.",
        "Do not start the assignments until she replies. They cannot be submitted."
      ],
      links: [["Open Outlook","https://outlook.office.com/mail/"]],
      draft: "Subject: IFP030 - UTM118 and APA Summarize, locked submissions after medical absence\n\nDear Ms Kim,\n\nI was away ill from 28 September to 13 October and have a VOI covering that period. I am back and caught up on the material.\n\nTwo workshop submissions are now showing as locked rather than late: UTM118 (locked 16 Oct) and APA Summarize and Citation (locked 19 Oct). Both were in-class group activities, so I was not present for the group work either. Could you tell me whether there is a route to make these up?\n\nSeparately, quizzes 3, 4 and 5 fall inside my VOI window. Quizzes 2 and 6 fall outside it, so I am not asking for those.\n\nI am happy to do the work in whatever form suits you.\n\nThank you,\nNiko Abuladze"
    },
    {
      id: "reflection-draft",
      band: "week",
      minutes: 15,
      title: "Draft the Reflection, due 21 Nov",
      line: "Three weeks out and nothing written.",
      why: "It is marked on the Driscoll model: what, so what, now what. The part people lose marks on is the second question, where 'what I learned' turns into a summary of what happened. It has to be about you, not the event.",
      steps: [
        "Pick the experience now, not in November.",
        "Write the three answers by hand in 60 minutes, timed.",
        "Leave it a week, then cut anything that describes rather than reflects."
      ]
    }
  ],

  calendar: [
    { d:"Sat 21", m:"Nov", title:"IFP030 Reflection due", note:"Driscoll model. In class.", url:"" },
    { d:"Fri 5",  m:"Dec", title:"IFP030 Final Report due", note:"15%. Built on the 88/100 proposal.", url:"" }
  ]
};
