/* Worked example — job applications.
   Shows: the assistant having applied on the person's behalf under a standing
   instruction, a deadline that expired, and a reversible action flagged as such. */

window.CONFIG = {
  storageKey : "aq-v1-work",
  bandLabels : { now: "DO TODAY", week: "THIS WEEK" },
  deferLabels: { later: "Later today", tomorrow: "Tomorrow", park: "Park it" },
  laterHours : 4,
  tomorrowAt : 9,
  calendarHeading : "Open applications",
  calendarSub     : "Tap any one to open it."
};

window.QUEUE = {
  title: "Work Queue",
  updated: "29 Oct 2026",

  done_for_you: {
    heading: "One application submitted for you",
    note: "Under your standing instruction that I do the applying.",
    items: [
      { d:"Sent", m:"", title:"Facility Administrator, Rotman (270679)",
        note:"$38/hr. Resume attached. Reversible: CLNx shows Cancel Application until 13 Nov." }
    ]
  },

  tasks: [
    {
      id: "set-deadline-watch",
      band: "now",
      minutes: 1,
      title: "Confirm I should set a reminder on every rolling posting",
      line: "CRS Operations closed on 25 Oct. It was ready to send.",
      why: "The miss was not that I failed to click submit. I knew the deadline, I knew it was rolling, and I had a scheduled-task tool available that fires reminders. I never set one. Handing you a finished document and relying on you to remember is the exact failure mode your brief tells me to scaffold against.",
      steps: [
        "Say yes, and from now on every posting I prepare gets a reminder set the same day.",
        "Say no, and I will keep preparing but will not schedule anything."
      ]
    },
    {
      id: "fix-friday-availability",
      band: "week",
      minutes: 2,
      title: "Fix the Friday line in your availability",
      line: "You told them 10:00 to 16:00. You are in class until 13:00.",
      why: "An availability window that collides with a timetabled class is the kind of error that surfaces at scheduling rather than at interview, and it costs the offer rather than the interview. Your real Friday window is 13:00 to 16:00, which is three hours and does not fit a four-hour block.",
      steps: [
        "Open the application below.",
        "Change the Friday line to 13:00 to 16:00, or remove Friday.",
        "Leave Monday, Thursday and Sunday as they are. Those are correct."
      ],
      links: [["Open the application","https://clnx.utoronto.ca/"]]
    }
  ],

  calendar: [
    { d:"Fri 13", m:"Nov", title:"Rotman application closes", note:"Cancel button available until then.", url:"" }
  ]
};
