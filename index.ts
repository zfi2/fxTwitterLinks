import definePlugin from "@utils/types";

export default definePlugin({
    name: "fxTwitterLinks",
    description: "Automatically replaces x.com links with fxtwitter.com",
    authors: [{ name: "1a1n", id: 528319770601455636n }],

    onBeforeMessageSend(_channelId, msg) {
        msg.content = msg.content.replace(/\bx\.com(?=\/\w+\/status\/\d+)/g, "fxtwitter.com");
    },
});
