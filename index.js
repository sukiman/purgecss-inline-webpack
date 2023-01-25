var process = {
    noDeprecation: true,
    throwDeprecation: false,
    traceDeprecation: false,
    ENV: {
        lang: 'en'
    },
    pid: 0,
    version: '',
    platform: '',
    nextTick: function() {},
    cwd: function() {}
}

const {purgeCss} = require('../purgecss-inline/packages/purgecss/bin/purgecss');

export async function purge (strCss, strContent, options) {
    const result = await purgeCss(strCss, strContent, options);
    return result;
};

