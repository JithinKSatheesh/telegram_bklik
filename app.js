const {Telegraf, Markup} = require('telegraf');

const bot = new Telegraf('5629200875:AAGS_3_6TW2OdWpXkqHXRvYFIoOvECx7pus');

const web_link = "https://bklik-test-telegram.web.app"
 
// bot.command('start', ctx => {
//     console.log(ctx.from)
//     bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot.', {
//     })
// })

bot.command('start', ctx => {
    console.log(ctx.from), "Shop"
    ctx.setChatMenuButton({
            type : "web_app",
            text : "Shop",
            web_app : {url : web_link}
        })
    
    const keyboard = Markup.inlineKeyboard([
        Markup.button.webApp("Order now", web_link)
    ]);
    ctx.replyWithHTML("<b>Let's get started 🎁</b>\n\n<b>Shop through Bklik 🛒 </b>\n\nPress button below to launch the app!", keyboard)
    
})



bot.command("custom", async ctx => {
	return await ctx.reply(
		"Custom buttons keyboard",
		Markup.keyboard([
			["🔍 Search", "😎 Popular"], // Row1 with 2 buttons
			["☸ Setting", "📞 Feedback"], // Row2 with 2 buttons
			["📢 Ads", "⭐️ Rate us", "👥 Share"], // Row3 with 3 buttons
		])
			.oneTime()
			.resize(),
	);
    // ctx.reply("Click on keybord and open our webapp", {
    //     reply_markup : {
    //         keyboard : [[{
    //             text : "Shop on Bklik",
    //             web_app : {url : web_link},
    //             one_time_keyboard : true
    //         }]]
    //     }
    // })
    // ctx.reply("Click on keybord and open our webapp", {
    //     reply_markup : { 
    //         remove_keyboard: true ,
        
    //     }
    // })
});

bot.launch();

console.log("Started bot")