const Command = require("../../structures/command")
const { MessageEmbed } = require("discord.js")
module.exports = class McBodyCommand extends Command {
	constructor(client) {
		super(client, {
			name: "mcbody",
			category: "minecraft",
			aliases: [],
			UserPermission: null,
			ClientPermission: ["EMBED_LINKS"],
			OnlyDevs: false
		})
	}
	run({ message, args, server }, t) {

		if (!args[0]) return message.chinoReply("error", t("commands:mc"))
		const body = `https://mc-heads.net/body/${args[0]}`
		const embed = new MessageEmbed()
			.setTimestamp()
			.setColor(this.client.colors.mine)
			.setImage(body)
			.setDescription(`[[Download]](${body})`)
		message.channel.send(embed)
	}
}