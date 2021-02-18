exports.pasedate = (strdt) => {
    if (Date.parse(strdt))
        return new Date(strdt);
    throw new Error(`error date string:${strdt}`);
};

exports.parseint = (strint) => {
    if (parseInt(strint))
        return parseInt(strint);
    throw new Error(`error int string:${strint}`);
};

exports.formatDateToDbDate = (dt) => {
    return JSON.stringify(dt)
        .replace(/"/g, '')
        .replace('T', ' ')
        .replace(/\-/g, '/')
        .substring(0, 20);
}