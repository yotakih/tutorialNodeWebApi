const cmn = require('../mycommon');

// var jsn = [
//     {
//         c1: "hoge",
//     }
// ];
// jsn.push({
//     c2: "fuga",
// });
// var cl = 'c3';
// var vl = 'piyo';
// var jsnadd = {};
// jsnadd[cl] = vl;
// jsn.push(jsnadd);

// console.log(jsn);
try {
    var dt = '';
    dt = '2021-02-18T12:34:59.000Z';
    console.log(cmn.pasedate(dt).toISOString());
    console.log(cmn.formatDateToDbDate(cmn.pasedate(dt)));
    // dt = '2021-02-18X12:34:59.000Z';    // error date string
    // console.log(JSON.stringify(cmn.pasedate(dt)));
    var i = '';
    i = '55';
    console.log(cmn.parseint(i).toString());
    i = 'x';    // error int string
    console.log(cmn.parseint(i).toString());
} catch (e) {
    console.log(`catch the error: ${e}`);
}
