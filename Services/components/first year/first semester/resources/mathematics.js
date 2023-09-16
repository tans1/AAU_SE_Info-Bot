const MathematicsResource = (ctx) => {
  ctx.reply("GENERAL MATHEMATICS", {
    parse_mode: "HTML"
  });
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/mathematics/Math 231A Fina exam 2006-07.doc"
    },
    {
      parse_mode: "HTML",
      caption: "Math 231A Final exam 2006-07.doc"
    }
  );
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/mathematics/Math 231A mid exam 2005-06 Extennstion.doc"
    },
    {
      parse_mode: "HTML",
      caption: "Math 231A mid exam 2005-06 Extension.doc"
    }
  );
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/mathematics/Math 231A Mid exam 2007-08.doc"
    },
    {
      parse_mode: "HTML",
      caption: "Math 231A Mid exam 2007-08.doc"
    }
  );
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/mathematics/Math 231B Final 2007-08 (Yewalewshet).doc"
    },
    {
      parse_mode: "HTML",
      caption: "Math 231B Final 2007-08 .doc"
    }
  );
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/mathematics/Math 231B final exam Sem I 2006-07.doc"
    },
    {
      parse_mode: "HTML",
      caption: "Math 231B final exam Sem I 2006-07.doc"
    }
  );
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/mathematics/Math 231B Mid exam 2008-09 (Dr. Adinew).doc"
    },
    {
      parse_mode: "HTML",
      caption: "Math 231B Mid exam 2008-09 .doc"
    }
  );
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/mathematics/Math 231B MidR-06.doc"
    },
    {
      parse_mode: "HTML",
      caption: "Math 231B MidR-06.doc"
    }
  );
  ctx.replyWithDocument(
    {
      source:
        "./data/resources/first year/first semester/mathematics/Maths Worksheet.pdf"
    },
    {
      parse_mode: "HTML",
      caption: "Maths Worksheet.pdf"
    }
  );
};

module.exports = {
  MathematicsResource
};
