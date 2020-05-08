module.exports = (word, lng) => {
    const mapper={
        'ES': w => w.endsWith('S') ? w.slice(0, w.length -1) : w,
        'AR': w => w.startsWith('S') ? w.slice(1) : w,
        'default': w => w
    }

    return mapper[lng] ? mapper[lng](word) : mapper['default'](word);
} 