/**
 * Created with JetBrains WebStorm.
 * User: youxiachai
 * Date: 13-4-6
 * Time: ����11:04
 * @param {Object} opts Several options (see README for documentation)
 * @return {Object} jQuery Object
 * To change this template use File | Settings | File Templates.
 */


jQuery.fn.menuIndex = function (opts) {

    opts = jQuery.extend({
        content: "#post",
        ulClass: "nav nav-list affix",
        h1Class: "",
        h2Class: "",
        h3Class: "offset1"
    }, opts || {});

    var h2 = [], h3 = [], tmpl = '<ul class="'+ opts.ulClass+ '">', h2index = 0;
    $.each($('h2,h3', $(opts.content)), function (index, item) {
        if (item.tagName.toLowerCase() == 'h2') {
            var h2item = {};
            h2item.name = $(item).text();
            h2item.id =  'menuIndex'+index;
            h2.push(h2item);
            h2index++;
            console.log("h2-->" + index);
        } else {
            var h3item = {};
            h3item.name = $(item).text();
            h3item.id = 'menuIndex'+index;
            if (!h3[h2index - 1]) {
                h3[h2index - 1] = [];
            }
            h3[h2index - 1].push(h3item);
            console.log("h3-->" + index);
        }
        item.id = 'menuIndex'+index;
    });

    //���h1 ����ӱ���
  //  tmpl += '<li class="active"><a href="#" data-top="0">' + $('h1').text() + '</a></li>';

    for (var i = 0; i < h2.length; i++) {
        tmpl += '<li class="'+opts.h2Class+'"><a href="'+'#' + h2[i].id + '"   >' + h2[i].name + '</a></li>';
        if (h3[i]) {
            for (var j = 0; j < h3[i].length; j++) {
                tmpl += '<li class="'+opts.h3Class+'"><a href="'+'#' + h3[i][j].id + '"   >' + h3[i][j].name + '</a></li>';
            }
        }
    }

    tmpl += '</ul>';
    jQuery(this).append(tmpl);
//
    return this;
}

