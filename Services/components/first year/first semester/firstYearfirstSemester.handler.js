const {
  firstYear_firstsemester,
  firstYear_secondsemester,
  firstYear_Intro
} = require("../../../../data/Introductions/firstYear");

const FirstYearFistsemesterHandler = (ctx) => {
  ctx.reply(firstYear_firstsemester(), {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "resources / exams",
            callback_data: "first_year_first_semester_resources"
          }
        ],
        [{ text: "2nd semester", callback_data: "first_year_second_semester" }]
      ]
    }
  });
};

const FirstYearSecondsemesterHandler = (ctx) => {};

const FirstYearFistsemester_ResourceHandler = (ctx) => {
  ctx.reply(
    "We tried to collect resources for this semester as much as possible , we will try to improve it more on the upcoming version\n" +
      "Choose your appropriate Course / Subject\n",
    {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Geography", callback_data: "Geography" },
            { text: "Psychology", callback_data: "Psychology" }
          ],
          [
            { text: "Physical Fitness", callback_data: "PhysicalFitness" },
            { text: "Physics", callback_data: "Physics" }
          ],
          [
            { text: "Logic", callback_data: "Logic" },
            { text: "English", callback_data: "English" }
          ],
          [{ text: "Mathematics", callback_data: "Mathematics" }],
          [
            {
              text: "2nd semester",
              callback_data: "first_year_second_semester"
            }
          ]
        ]
      }
    }
  );
};

module.exports = {
  FirstYearFistsemesterHandler,
  FirstYearSecondsemesterHandler,
  FirstYearFistsemester_ResourceHandler
};
