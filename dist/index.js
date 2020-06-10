/**
 * Contextual Console.
 * @author Jonathan Tordesillas <yamato.takato@gmail.com>
 */

const defaultOptions = {
    enabled: true,
	colors: {
		primary: "#3490DC",
		secondary: "#9561E2",
		success: "#38C172",
		info: "#BCDEFA",
		caution: "#F6993F",
		danger: "#E3342F",
		warn: "",
		error: "",
	},
};

class contextualConsole {
    /**
     * Constructor
     */
    constructor({ options: userOptions = {} }) {
        this.options = {
            ...defaultOptions,
            ...userOptions,
        };
    };

    logger(message, type) {
        if (this.options.enabled) {
            switch (type) {
                case "log":
                    console.log(message);
                    break;
                case "table":
                    console.table(message);
                    break;
                case "warn":
                    console.warn(`%c${message}`, `color:${this.options.colors[type]}`);
                    break;
                case "error":
                    console.error(`%c${message}`, `color:${this.options.colors[type]}`);
                    break;
                default:
                    console.log(`%c${message}`, `color:${this.options.colors[type]}`);
            }
        }
    };

    log(message) {
        this.logger(message, "log");
    };

    table(data)  {
        this.logger(data, "table");
    };

    warn(message)  {
        this.logger(message, "warn");
    };

    error(message)  {
        this.logger(message, "error");
    };

    primary(message) {
        this.logger(message, "primary");
    };

    secondary(message)  {
        this.logger(message, "secondary");
    };

    success(message) {
        this.logger(message, "success");
    };
    
    info(message) {
        this.logger(message, "info");
    };

    caution(message)  {
        this.logger(message, "caution");
    };

    danger(message) {
        this.logger(message, "danger");
    };

    test() {
        this.log("Log");
        this.table([["ID", "Name"], ["1", "Default item."]]);
        this.warn("Warn");
        this.error("Error");
        this.primary("Primary");
        this.secondary("Secondary");
        this.success("Success");
        this.info("Info");
        this.caution("Caution");
        this.danger("Danger");
    };
};

export default contextualConsole;
