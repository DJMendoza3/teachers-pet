import config from "ezforms.config.js";

export default (styleName: string): any => {
  const displayTheme = config.themes["default"];
  console.log("displayTheme", displayTheme);
  const theme = config.themes[styleName];
  console.log("theme", theme);
  

  if(theme !== "default" && theme) {
    //loop through default theme and replace or add values 3 levels deep from theme if they exist
    for (const [key, value] of Object.entries(displayTheme)) {
        if (theme[key]) {
            for (const [key2, value2] of Object.entries(value)) {
                if (theme[key][key2]) {
                    for (const [key3, value3] of Object.entries(value2)) {
                        if (theme[key][key2][key3]) {
                            displayTheme[key][key2][key3] = theme[key][key2][key3];
                        }
                    }
                }
            }
        }
    }
    }
    console.log("final theme", displayTheme);
  const styles = {
    form: {
      color: displayTheme.styles.textColor.primary,
    },
    dropdown: {
      backgroundColor: "rgb(59 130 246)",
    },
  };

  return styles;
};
