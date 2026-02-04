// @ts-check

const CUSTOM_ACTION_APPCACHE_REMOVE = "appcache-remove";

/**
 * @typedef {Object} PayloadInfo
 * @property {string} displayTitle
 * @property {string} description
 * @property {string} fileName - path relative to the payloads folder
 * @property {string} author
 * @property {string} projectSource
 * @property {string} binarySource - should be direct download link to the included version, so that you can verify the hashes
 * @property {string} version
 * @property {string[]?} [supportedFirmwares] - optional, these are interpreted as prefixes, so "" would match all, and "4." would match 4.xx, if not set, the payload is assumed to be compatible with all firmwares
 * @property {number?} [toPort] - optional, if the payload should be sent to "127.0.0.1:<port>" instead of loading directly, if specified it'll show up in webkit-only mode too
 * @property {string?} [customAction]
 */

/**
 * @type {PayloadInfo[]}
*/
const payload_map = [
    // { // auto-loaded
    //     displayTitle: "PS5 Payload ELF Loader",
    //     description: "Uses port 9021. Persistent network elf loader",
    //     fileName: "elfldr-ps5.elf",
    //     author: "john-tornblom",
    //     projectSource: "https://github.com/ps5-payload-dev/elfldr",
    //     binarySource: "https://github.com/ps5-payload-dev/elfldr/releases/latest/download/elfldr-ps5.elf",
    //     version: "0.21.2",
    //     supportedFirmwares: ["1.", "2.", "3.", "4.", "5."]
    // },
	    {
        displayTitle: "etaHEN-2.5B",
        description: "AIO HEN",
        fileName: "etaHEN-2.5B.bin",
        author: "LightningMods, Buzzer, sleirsgoevy, ChendoChap, astrelsky, illusion, CTN, SiSTR0, Nomadic",
        projectSource: "https://github.com/etaHEN/etaHEN",
        binarySource: "https://github.com/etaHEN/etaHEN/releases/download/2.5B/etaHEN-2.5B.bin",
        version: "2.5B",
        toPort: 9021
    },
	{
        displayTitle: "Kstuff 1.6.7",
        description: "Kstuff 3.00-10.01",
        fileName: "kstuff.elf",
        author: "sleirsgoevy, zecoxao, flatz, idlesauce, buzzer-re",
        projectSource: "https://https://github.com/EchoStretch/kstuff",
        binarySource: "https://github.com/EchoStretch/kstuff/releases/download/v1.6.7/kstuff.elf",
        version: "1.3",
        toPort: 9020
    },
	{
        displayTitle: "ShadowMount 1.3",
        description: "ShadowMount 1.3",
        fileName: "shadowmount.elf",
        author: "adel-ailane",
        projectSource: "https://github.com/adel-ailane/ShadowMount",
        binarySource: "https://github.com/adel-ailane/ShadowMount/releases/download/v1.3-beta-NVME/shadowmount.elf",
        version: "1.3",
        toPort: 9020
    },
	{
        displayTitle: "ps5-backpork 0.1",
        description: "ps5-backpork",
        fileName: "ps5-backpork.elf",
        author: "BestPig",
        projectSource: "https://github.com/BestPig/BackPork",
        binarySource: "https://github.com/BestPig/BackPork/releases/download/0.1/ps5-backpork.elf",
        version: "0.1",
        toPort: 9020
    },
    {
        // https://github.com/Storm21CH/PS5_Browser_appCache_remove
        displayTitle: "Browser appcache remover",
        description: "Deletes for only the current user in webkit-only mode",
        fileName: "",
        author: "Storm21CH, idlesauce",
        projectSource: "",
        binarySource: "",
        version: "1.0",
        customAction: CUSTOM_ACTION_APPCACHE_REMOVE
    }
];









