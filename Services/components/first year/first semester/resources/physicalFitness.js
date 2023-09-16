const PhysicalFitnessResource = (ctx) => {
  ctx.reply("PHYSICAL FITNESS", {
    parse_mode: "HTML"
  });
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/Pysical fitness/physical fitness 1.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "physical fitness Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/Pysical fitness/physical fitness 2.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "physical fitness Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/Pysical fitness/physical fitness 3.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "physical fitness Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/Pysical fitness/physical fitness 4.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "physical fitness Exam"
    }
  );
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/Pysical fitness/physical fitness 5.jpg"
    },
    {
      parse_mode: "HTML",
      caption: "physical fitness Exam"
    }
  );
};

module.exports = {
  PhysicalFitnessResource
};
