var router = require('express').Router();
var sqlite3 = require('sqlite3');
var cmn = require('../mycommon');
const dbfile = './data/database.db';
var sql = '\
    select                  \
        r.recv_date recv_date ,                \
        r.wl        wl         \
      from                  \
        river r, typeid i, type t             \
     where r.typeid_id = i.id   \
       and i.type_id = t.id     \
       and t.name = ?                   \
       and i.name = ?                   \
       and r.recv_date between ? and ? \
';

router.get('/type/:type/id/:id/attr/:attr', (req, res) => {
    var jsnret = [];
    // var strtyp = 'river';
    // var strid = 'river.1';
    // var dttmFrm = '2021/01/01 00:00:00';
    // var dttmTo = '2021/12/31 23:59:59';
    // var strattr = 'wl';
    var strtyp = req.params.type.toString();
    var strid = req.params.id.toString();
    console.log(req.query);
    var dttmFrm = cmn.formatDateToDbDate(cmn.pasedate(req.query['fromdate']));
    var dttmTo = cmn.formatDateToDbDate(cmn.pasedate(req.query['todate']));
    var strattr = req.params.attr.toString();
    var db = new sqlite3.Database(dbfile);
    db.on('trace', (sql) => console.log(sql));
    db.serialize(() => {
        // db.all('select * from river where recv_date > ?',['2021/01/01 00:00:00'], (err, rows) => res.json(rows));
        db.all(
            sql,
            [strtyp, strid, dttmFrm, dttmTo],
            (err, rows) => {
                if (err) {
                    res.json({Message: err});
                } else {
                    rows.forEach(row => {
                        var jsnadd = {
                            date: row['recv_date'],
                        };
                        jsnadd[strattr] = row[strattr];
                        jsnret.push(jsnadd);
                    });
                    res.json(jsnret);
                }
            });
    });
});

module.exports = router;