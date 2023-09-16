const PhysicsResource = (ctx) => {
  ctx.reply("GENERAL PHYSICS", {
    parse_mode: "HTML"
  });
  ctx.replyWithDocument(
    {
      source: "./data/resources/first year/first semester/Physics/physics 1.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "physics Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source: "./data/resources/first year/first semester/Physics/physics 2.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "physics Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source: "./data/resources/first year/first semester/Physics/physics 3.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "physics Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source: "./data/resources/first year/first semester/Physics/physics 4.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "physics Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source: "./data/resources/first year/first semester/Physics/physics 5.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "physics Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source: "./data/resources/first year/first semester/Physics/physics 6.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "physics Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source: "./data/resources/first year/first semester/Physics/physics 7.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "physics Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/Physics/Aau physics all exams.pdf"
    },
    {
      parse_mode: "HTML",
      caption: "physics Exam.pdf"
    }
  );
};
module.exports = {
  PhysicsResource
};
