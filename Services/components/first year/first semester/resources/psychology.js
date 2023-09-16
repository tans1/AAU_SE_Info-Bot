const PsychologyResource = (ctx) => {
  ctx.reply("PSYCHOLOGY", {
    parse_mode: "HTML"
  });
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/psychology/psychology 1.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "Psychology Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/psychology/psychology 2.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "Psychology Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/psychology/psychology 3.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "Psychology Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/psychology/psychology 4.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "Psychology Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/psychology/psychology 5.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "Psychology Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/psychology/psychology 6.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "Psychology Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/psychology/psychology 7.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "Psychology Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/psychology/psychology 8.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "Psychology Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/psychology/psychology _FINAL_AAU.pdf"
    },
    {
      parse_mode: "HTML",
      caption: "Psychology AAU Final Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/psychology/psychology 500 questions.pdf"
    },
    {
      parse_mode: "HTML",
      caption: "Psychology 500 Questions"
    }
  );
};

module.exports = {
  PsychologyResource
};
