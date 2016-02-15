// url: http://www.gamefaqs.com/vita/757436-digimon-story-cyber-sleuth/faqs/71778?single=1#section707

var stat_elems = $('a:contains(Level 99 Raw Stats)');

var hps = [];
var sps = [];
var atks = [];
var ints = [];
var defs = [];
var spds = [];

stat_elems.parents('.section').find('table').each(function(idx, elem) {
    // the results are reverted hence we need to use unshift
    $(elem).find('td').each(function(idx2, elem2) {
        var value = parseInt(elem2.innerHTML.replace(/,/g,''), 10);
        switch (idx2) {
            case 0:
                hps.unshift(value);
                break;
            case 1:
                sps.unshift(value);
                break;
            case 2:
                atks.unshift(value);
                break;
            case 3:
                ints.unshift(value);
                break;
            case 4:
                defs.unshift(value);
                break;
            case 5:
                spds.unshift(value);
                break;
        }
    });
});

// find digimon names
var names = [];
var name_elems = stat_elems.parents('.section').prev().prev().find('h4 a');

// the results are reverted hence we need to use unshift
name_elems.each(function(idx, elem) {
    names.unshift(elem.innerHTML.replace(/[^a-z\s\(\)]*/gi, '').replace(/\(\)/, '').trimRight());
});
