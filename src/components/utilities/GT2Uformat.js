export const date = (val, defaultActual) => {
    if (!val && !defaultActual)
        return '';
    if (val && val.length > 19) val = val.substring(0, 19)
    let d = new Date(val);
    return (d.getDate() < 10 ? "0" : "") + d.getDate()
        + "." + (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1)
        + "." + d.getFullYear();
}

export const isoDate = (val) => {
    let v = val.split(".");
    let d = new Date(v[2] + '-' + v[1] + '-' + v[0]);
    return d.toISOString();
}

export const time = (val) => {
    if (val && val.length > 19) val = val.substring(0, 19)
    let d = new Date(val);
    return (d.getHours() < 10 ? "0" : "") + d.getHours()
        + ":" + (d.getMinutes() < 10 ? "0" : "") + d.getMinutes()
        + ":" + (d.getSeconds() < 10 ? "0" : "") + d.getSeconds();
}

export const datetime = (val, sec) => {
    if (val && val.length > 19) val = val.substring(0, 19)
    let d = new Date(val);
    return (d.getDate() < 10 ? "0" : "") + d.getDate()
        + "." + (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1)
        + "." + d.getFullYear()
        + " " + (d.getHours() < 10 ? "0" : "") + d.getHours()
        + ":" + (d.getMinutes() < 10 ? "0" : "") + d.getMinutes()
        + (sec ? ":" + (d.getSeconds() < 10 ? "0" : "") + d.getSeconds() : "");
}

export const cutText = (text, length) => {
    var tool = "";
    if (length > 3 && text.length > length) {
        tool = text;
        text = text.substring(0, length - 3) + "...";
    }
    return { text, tool };
}

export const testICO = (x) => {
    try {
        x = x.trim();
        if (x.length !== 8) throw 1;
        var a = 0;
        var b = x.split('');
        var c = 0;
        for (var i = 0; i < 7; i++) a += (parseInt(b[i]) * (8 - i));
        a = a % 11;
        c = 11 - a;
        if (a === 1) c = 0;
        if (a === 0) c = 1;
        if (a === 10) c = 1;
        if (parseInt(b[7]) !== c) throw 1;
    }
    catch (e) {
        return false;
    }
    return true;
}

export const czWeekdaysNarrow = ['N', 'P', 'Ú', 'S', 'Č', 'P', 'S'];
export const czMonthsFull = ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'];
export const czMonthsShort = ['Led', 'Úno', 'Bře', 'Dub', 'Kvě', 'Čer', 'Črc', 'Srp', 'Zář', 'Říj', 'Lis', 'Pro'];

const GT2Uformat = { date, isoDate, time, datetime, cutText, testICO, czWeekdaysNarrow, czMonthsFull, czMonthsShort };

export default GT2Uformat;
