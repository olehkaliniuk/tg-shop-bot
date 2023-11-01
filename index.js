const { Telegraf } = require("telegraf");

const bot = new Telegraf("6487417964:AAGxBsSHw91q9i2dX-6nk_7W49NbhAcWGSc");

bot.start((msg) => {
  msg.reply("Select language", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Русский", callback_data: "russian" }],
        [{ text: "English", callback_data: "english" }],
      ],
    },
  });
});
bot.action("russian", (msg) => {
  msg.telegram.sendMessage(
    msg.chat.id,
    "Вас приветствует бот Power Puff, в котором вы можете сделать заказ",
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Ассортимент", callback_data: "assort" }],
          [{ text: "Информация о доставке", callback_data: "dostavka" }],
          [{ text: "Оплата", callback_data: "oplata" }],
        ],
      },
    }
  );
});

bot.action("oplata", (msg) => {
  msg.telegram.sendMessage(
    msg.chat.id,
    "Оплата\nPaypal - XXXX XXXX XXXX XXXX\nRevolut - XXXX XXXX XXXX XXXX\nУкраинская карта - XXXX XXXX XXXX XXXX\nЧтобы мы смогли отправит вам заказ, вам нужно отправить на аккаунт @PowerPuffDE\n1)название выброного вами товара\n2)адрес доставки\n3)скрин об преводе нужной сумммы\n4)при потребности дополнительную информацию или пожелания по поводу заказа"
  );
});

bot.action("dostavka", (msg) => {
  msg.telegram.sendMessage(msg.chat.id, "Доставка", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Доставка Берлин/Потсдам", callback_data: "p1" }],
        [{ text: "Самовывоз", callback_data: "p2" }],
      ],
    },
  });
});

bot.action("p1", (msg) => {
  msg.telegram.sendMessage(
    msg.chat.id,
    "Доставка Берлин/Потсдам\nДоставка в почтовый ящик/ Личная встреча\nОтправьте ваш адрес и прикрепите скриншот об оплате на этот аккаунт: @PowerPuffDЕ , после прочтения он сразу скажет вам когда будет возможна доставка. Условия доставки:от 3-х штук: 5€ сектор А B (7 € сектор С, по субботам возможен Потсдам, уточняйте) от 5 штук: бесплатная (A B) Так же 10 курилку вы получаете бесплатно (самую низкую по стоимости в чеке)"
  );
});
bot.action("p2", (msg) => {
  msg.telegram.sendMessage(
    msg.chat.id,
    "Самовывоз на точках\n3 раза в неделю будет возможность забрать свои товары на точках самовывоза. Вам не нужно платить за доставку и вы можете спокойно рассчитать время где и когда вам будет удобнее их забрать. Для этого вам нужно скинуть админу (@PowerPuffDE) список желаемых товаров и подготовить наличные для встречи или скинуть чек об оплате. В Берлине эти точки всегда будут меняться, так что уточняйте у администратора (@PowerPuffDE). Каждую субботу будет возможность забрать в Потсдаме (время уточняйте).Оплата желательно наличкой"
  );
});

bot.action("assort", (msg) => {
  msg.telegram.sendMessage(msg.chat.id, "Ассортимент", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "ELFBAR", callback_data: "e1" },
          { text: "ELFBAR Liquids", callback_data: "e2" },
        ],
      ],
    },
  });
});

//elfbar
bot.action("e1", (msg) => {
  msg.telegram.sendMessage(msg.chat.id, "ELFBAR", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "❇️ELFBAR BC 5000 Ultra - 27€❇️", callback_data: "e11" }],
        [{ text: "❇️ELFBAR PI 7000 - 30€❇️", callback_data: "e12" }],
        [{ text: "❇️ELFBAR BB3000 - 20€❇️", callback_data: "e13" }],
        [{ text: "❇️ELFBAR 1500 - 12€❇️", callback_data: "e14" }],
        [{ text: "❇️ELFBAR BC 4000 - 24€❇️", callback_data: "e15" }],
      ],
    },
  });
});
//goods elfbar
bot.action("e11", (msg) => {
  msg.telegram.sendMessage(
    msg.chat.id,
    "❇️ELFBAR BC 5000 Ultra - 27€❇️\n🔸Watermelon ice\n🔸Tropical rainbow blast\n🔸Strawberry watermelon bubble gum\n🔸Raspberry watermelon\n🔸Orange soda\n🔸Strawberry watermelon peach\n🔸Kiwi dragon fruit berry\n🔸Grape honeydew\n🔸Dragon Fruit banana berry\n🔸Blue razz ice"
  );
});
bot.action("e12", (msg) => {
  msg.telegram.sendMessage(
    msg.chat.id,
    "❇️ELFBAR PI 7000 - 30€❇️\n🔸Blue razz ice\n🔸Double apple\n🔸Blackcurrant juice\n🔸Fresh berry sorbet\n🔸French kissing\n🔸Champagne strawberry ice cream\n🔸Pineapple mint\n🔸Mango peach watermelon\n🔸Lemon rum\n🔸Grape energy\n🔸Lemon lime\n🔸Rainbow cloudz\n🔸Watermelon ice\n🔸Super berry"
  );
});
bot.action("e13", (msg) => {
  msg.telegram.sendMessage(
    msg.chat.id,
    "❇️ELFBAR BB3000 - 20€❇️\n🔸Grape\n🔸Blueberry jam\n🔸Strawberry sundae\n🔸Watermelon bubble gum\n🔸Mango peach\n🔸Cranberry soda\n🔸Kiwi passion fruit guava\n🔸Energy\n🔸Pineapple coconut\n🎄Elf bar TE 5000 New Year edition🎄\n🔸Chocolate Brownie Cookies\n🔸Hazel Toffee\n🔸Ginger Man"
  );
});
bot.action("e14", (msg) => {
  msg.telegram.sendMessage(
    msg.chat.id,
    "❇️ELFBAR 1500 - 12€❇️\n🔸Kiwi passion fruit guava\n🔸Apple peach\n🔸Coconut melon\n🔸Pink lemonade\n🔸Neon rain\n🔸Cola\n🔸Strawberry kiwi\n🔸Siberian forest\n🔸Blue razz lemonade\n🔸Blueberry\n🔸Pink lemonade\n🔸Watermelon\n🔸Grape\n🔸RedBull strawberry\n🔸RedBull grape\n🔸Sour Apple"
  );
});
bot.action("e15", (msg) => {
  msg.telegram.sendMessage(
    msg.chat.id,
    "❇️ELFBAR BC 4000 - 24€❇️\n🔸Blue Razz ice\n🔸Peach mango watermelon\n🔸Cranberry grape\n🔸Red Mojito\n🔸Sakura grape\n🔸Strawberry kiwi\n🔸Strawberry kiwi\n🔸Watermelon ice\n🔸Strawberry mango\n🔸Lemon mint\n🔸Blueberry ice\n🔸Green apple\n🔸Kiwi passion fruit guav\n🔸Passion fruit orange guava\n🔸Triple berry ice"
  );
});

//elfbar liquids
bot.action("e2", (msg) => {
  msg.telegram.sendMessage(msg.chat.id, "Liquids", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "❇️Chaser BLACK/LUX Ice 30ml 50mg - 16€❇️",
            callback_data: "e21",
          },
        ],
        [{ text: "❇️Chaser BLACK 30ml 50mg - 14€❇️", callback_data: "e22" }],
        [{ text: "❇️Chaser For Pods 30ml - 14€❇️", callback_data: "e23" }],
      ],
    },
  });
});
//goods elfbar liquids
bot.action("e21", (msg) => {
  msg.telegram.sendMessage(
    msg.chat.id,
    "❇️Chaser BLACK/LUX Ice 30ml 50mg - 16€❇️\n🔸LUX Berry lemonade ice\n🔸LUX Energetic ice\n🔸LUX Kiwi passion fruit guava ice\n🔸LUX Tropical punch ice\n🔸LUX Vitamin ice\n🔸BLACK Energy grape ice\n🔸BLACK Forest mix ice\n🔸BLACK Kiwi wild strawberry ice\n🔸BLACK Pink lemonade ice\n🔸BLACK Strawberry blueberry ice\n🔸BLACK Watermelon lemon ice"
  );
});
bot.action("e22", (msg) => {
  msg.telegram.sendMessage(
    msg.chat.id,
    "❇️Chaser BLACK 30ml 50mg - 14€❇️\n🔸Bali\n🔸Blackberry sour raspberry\n🔸Blackcurant peach apple\n🔸Bubble gum\n🔸Energy grape\n🔸Energy raspberry\n🔸Flirt\n🔸Forest mix\n🔸Kiwi wild strawberry\n🔸Lemon mint\n🔸Pink lemonade\n🔸Strawberry blueberry\n🔸Triple berry\n🔸Triple raspberry\n🔸Triple sour apple\n🔸Watermelon lemon"
  );
});
bot.action("e23", (msg) => {
  msg.telegram.sendMessage(
    msg.chat.id,
    "❇️Chaser For Pods 30ml - 14€❇️\n🔸Ananas\n🔸Bali Dreifach-Schuss\n🔸Banane\n🔸Blaue Himbeere\n🔸Weintrauben\n🔸Kirsche\n🔸Wassermelone\n🔸Mango\n🔸Mandarine\n🔸Minze\n🔸Pfirsich\n🔸Erdbeere\n🔸Johannisbeere Menthol\n🔸Tobacco\n🔸Heidelbeere Menthol\n🔸Apfel\n🔸Beeren"
  );
});

bot.launch();

//english

bot.action("english", (msg) => {
  msg.telegram.sendMessage(
    msg.chat.id,
    "The Powerpuff bot welcomes you, here you can place an order",
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Assortment", callback_data: "assort" }],
          [
            {
              text: "Information about delivery",
              callback_data: "dostavkaeng",
            },
          ],
          [{ text: "Payment information", callback_data: "oplataeng" }],
        ],
      },
    }
  );
});
bot.action("oplataeng", (msg) => {
  msg.telegram.sendMessage(
    msg.chat.id,
    "Payment information\nPaypal - XXXX XXXX XXXX XXXX\nRevolut - XXXX XXXX XXXX XXXX\nYou need to send to the @PowerPuffDE account\n1) the name of the product you have chosen\n2) the delivery address\n3) a screenshot of the transfer of the required amount\n4) if necessary, additional information or wishes regarding the order"
  );
});
bot.action("dostavkaeng", (msg) => {
  msg.telegram.sendMessage(msg.chat.id, "Delivery", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Delivery Berlin/Potsdam", callback_data: "p1eng" }],
        [{ text: "Pickup", callback_data: "p2eng" }],
      ],
    },
  });
});

bot.action("p1eng", (msg) => {
  msg.telegram.sendMessage(
    msg.chat.id,
    "Delivery Berlin/Potsdam\nDelivery to mailbox/Personal meeting\nSend your address and attach a screenshot of payment to this account: @PowerPuffDE, after reading it, it will immediately tell you when delivery will be possible. Delivery conditions: from 3 pieces: 5 € sector A B (7 € sector C, Potsdam is possible on Saturdays, check) from 5 pieces: free (A B) You also get 10 smoking rooms for free (the lowest price in the receipt)"
  );
});
bot.action("p2eng", (msg) => {
  msg.telegram.sendMessage(
    msg.chat.id,
    "Pickup at points\n3 times a week you will be able to pick up your goods at pickup points. You do not need to pay for delivery and you can easily calculate the time where and when it will be more convenient for you to pick them up. To do this, you need to send the admin (@PowerPuffDE) a list of desired products and prepare cash for the meeting or send a receipt for payment. In Berlin these points will always change, so check with the admin (@PowerPuffDE). Every Saturday there will be an opportunity to pick up in Potsdam. Please pay with cash"
  );
});
