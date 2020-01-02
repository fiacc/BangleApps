Bangle.setLCDPower(1);
Bangle.setLCDTimeout(0);

g.clear();

let settings = { a: true, b:false };

const boolFormat = (v) => v ? "Oh" : "No";

function showMainMenu() {
    const mainmenu = {
        '': { 'title': 'Stuff' },
        'A': {
            value: settings.a,
            format: boolFormat,
            onchange: () => {
                settings.abc = !settings.abc;
            }
        },
        'B': {
            value: settings.b,
            format: boolFormat,
            onchange: () => {
                settings.abc = !settings.abc;
            }
        },
        '< Back': load
    };
    return Bangle.menu(mainmenu);
}




showMainMenu();
