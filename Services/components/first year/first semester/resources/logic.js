const LogicResource = (ctx) => {
  ctx.reply("LOGIC and CRITICAL THINKING", {
    parse_mode: "HTML"
  });
  ctx.replyWithDocument(
    {
      source: "./data/resources/first year/first semester/logic/logic 1.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "Logic Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source: "./data/resources/first year/first semester/logic/logic 2.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "Logic Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source: "./data/resources/first year/first semester/logic/logic 3.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "Logic Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source: "./data/resources/first year/first semester/logic/logic 4.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "Logic Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source: "./data/resources/first year/first semester/logic/logic 5.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "Logic Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source: "./data/resources/first year/first semester/logic/logic 6.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "Logic Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source: "./data/resources/first year/first semester/logic/logic 7.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "Logic Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source: "./data/resources/first year/first semester/logic/logic 8.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "Logic Exam"
    }
  );

  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/logic/AAU_LOGIC_FINAL_EXAM.pdf"
    },
    {
      parse_mode: "HTML",
      caption: "Logic Exam.pdf"
    }
  );
};

module.exports = {
  LogicResource
};
