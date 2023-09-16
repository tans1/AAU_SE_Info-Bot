const { StartMesage } = require("../../data/start message");
const { firstYear_Intro } = require("../../data/Introductions/firstYear");

const CommandHandler = (ctx) => {
  const command = ctx.message.text;
  switch (command) {
    case "/first_year":
      ctx.reply(firstYear_Intro(), {
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "1st semester",
                callback_data: "first_year_first_semester"
              },
              {
                text: "2nd semester",
                callback_data: "first_year_second_semester"
              }
            ]
          ]
        }
      });
      break;
    default:
      ctx.reply(StartMesage());
      break;
  }
};

module.exports = { CommandHandler };
