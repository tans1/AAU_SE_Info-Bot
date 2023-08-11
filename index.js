const { Telegraf } = require('telegraf');
const { StartMesage } = require('./data/components');
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(
    (ctx) => {
        ctx.reply(
            StartMesage(),
            {
                parse_mode : "HTML",
            },
        );
    }
)


bot.command('first_year',(ctx)=>{
    ctx.reply(
        "first year",
        {
            parse_mode : "HTML",
        },
    );
})
bot.command('second_year',(ctx)=>{
    ctx.reply(
        "second year",
        {
            parse_mode : "HTML",
        },
    );
})
bot.command('third_year',(ctx)=>{
    ctx.reply(
        "third_year",
        {
            parse_mode : "HTML",
        },
    );
})
bot.command('fourth_year',(ctx)=>{
    ctx.reply(
        "fourth_year",
        {
            parse_mode : "HTML",
        },
    );
})
bot.command('fifth_year',(ctx)=>{
    ctx.reply(
        "fifth_year",
        {
            parse_mode : "HTML",
        },
    );
})

bot.launch();