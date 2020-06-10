# Contextual Console

A replacement for console.log. This was born out of a need to have a console log with contextual colors that I could disable on production automatically.

## Installation and Configuration

Listed below are the available configuration options.

| Option           | Default   | Description                                                                                                |
| ---------------- | --------- | ---------------------------------------------------------------------------------------------------------- |
| enabled          | true      | Sets if the plugin's console logging is enabled. Useful in only setting it to true under development mode. |
| colors.primary   | "#3490DC" | Color for \$console.primary();                                                                             |
| colors.secondary | "#9561E2" | Color for \$console.secondary();                                                                           |
| colors.info      | "#38C172" | Color for \$console.info();                                                                                |
| colors.success   | "#BCDEFA" | Color for \$console.success();                                                                             |
| colors.warning   | "#F6993F" | Color for \$console.warning();                                                                             |
| colors.error     | "#E3342F" | Color for \$console.error();                                                                               |
| colors.warn      | ""        | Color for \$console.warn();                                                                                |
| colors.error     | ""        | Color for \$console.error();          

```javascript
import ContextualConsole from "contextual-console";

const $console = new ContextualConsole({
	enabled: process.env.NODE_ENV == "development",
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
});
```

## Usage

After installation, you may now use it like below.

```javascript
$console.success("I've successfully installed the package!");
```