const EnglishResource = (ctx) => {
  ctx.reply("COMMUNICATIVE ENGLISH I", {
    parse_mode: "HTML"
  });
  ctx.replyWithDocument(
    {
      source: "./data/resources/first year/first semester/english/english 1.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "English Exams"
    }
  );
  ctx.replyWithDocument(
    {
      source: "./data/resources/first year/first semester/english/english 2.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "English Exams"
    }
  );
  ctx.replyWithDocument(
    {
      source: "./data/resources/first year/first semester/english/english 3.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "English Exams"
    }
  );

  ctx.replyWithDocument(
    {
      source: "./data/resources/first year/first semester/english/english 4.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "English Exams"
    }
  );

  ctx.replyWithDocument(
    {
      source: "./data/resources/first year/first semester/english/english 5.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "English Exams"
    }
  );
  ctx.replyWithDocument(
    {
      source: "./data/resources/first year/first semester/english/english 6.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "English Exams"
    }
  );
  ctx.replyWithDocument(
    {
      source: "./data/resources/first year/first semester/english/english 7.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "English Exams"
    }
  );

  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/english/communication I.docx"
    },
    {
      parse_mode: "HTML",
      caption: "English Exams.docx"
    }
  );
};

module.exports = {
  EnglishResource
};
