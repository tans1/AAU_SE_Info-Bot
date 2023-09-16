const { Telegraf } = require("telegraf");
const { StartMesage } = require("./data/start message");
const {
  firstYear_firstsemester,
  firstYear_secondsemester,
  firstYear_Intro
} = require("./data/Introductions/firstYear");
require("dotenv").config();

const {
  CallBackQueryHandler
} = require("./Services/handlers/callBackQueryHandler");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(StartMesage(), {
    parse_mode: "HTML"
  });
});

bot.command("first_year", (ctx) => {
  ctx.reply(firstYear_Intro(), {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "1st semester", callback_data: "first_year_first_semester" },
          { text: "2nd semester", callback_data: "first_year_second_semester" }
        ]
      ]
    }
  });
});

bot.command("second_year", (ctx) => {
  ctx.reply("second year", {
    parse_mode: "HTML"
  });
});
bot.command("third_year", (ctx) => {
  ctx.reply("third_year", {
    parse_mode: "HTML"
  });
});
bot.command("fourth_year", (ctx) => {
  ctx.reply("fourth_year", {
    parse_mode: "HTML"
  });
});
bot.command("fifth_year", (ctx) => {
  ctx.reply("fifth_year", {
    parse_mode: "HTML"
  });
});

bot.on("callback_query", (ctx) => {
  CallBackQueryHandler(ctx);
});

bot.launch();
