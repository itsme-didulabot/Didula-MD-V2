const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID === undefined ? 'put your session id' : process.env.PRABATH-MD~8yM2wBzK#AO6dRPXb2Al4eCGp1Es8sKQKoYpDaLs9XBP-Xhejp2g,
    PREFIX: process.env.PREFIX || '.',
    FOOTER: process.env.FOOTER || "*✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦*",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/za6ytm.jpg",
    PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
HEART_REACT: process.env.HEART_REACT || 'false',
    SUDO: process.env.SUDO === undefined ? '94741671668,94771820962' : process.env.SUDO,
    ALIVE_MSG: process.env.ALIVE_MSG === undefined ? "*Hello, I am alive now!!*" : process.env.ALIVE_MSG,
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ? "true" : process.env.AUTO_READ_STATUS,
    MODE: process.env.MODE === undefined ? "public" : process.env.MODE,
    ANTI_BAD: process.env.ANTI_BAD === undefined ? "false" : process.env.ANTI_BAD,
    ANTI_LINK: process.env.ANTI_LINK === undefined ? "false" : process.env.ANTI_LINK,
    ANTI_CALL: process.env.ANTI_CALL === undefined ? "false" : process.env.ANTI_CALL,
    ANTI_DELETE: process.env.ANTI_DELETE === undefined ? "false" : process.env.ANTI_DELETE,
    ANTI_BOT: process.env.ANTI_BOT === undefined ? "false" : process.env.ANTI_BOT,
    READ_CMD: process.env.READ_CMD === undefined ? "false" : process.env.READ_CMD,
    RECORDING: process.env.RECORDING === undefined ? "false" : process.env.RECORDING,
    AI_CHAT: process.env.AI_CHAT === undefined ? "false" : process.env.AI_CHAT,
    AUTO_SONG_SENDER: process.env.AUTO_SONG_SENDER === undefined ? "false" : process.env.AUTO_SONG_SENDER
};
