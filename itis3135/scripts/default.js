$(function() {
    console.log("made it here")
    const pathname = String(location.pathname.split("/").splice(-1))
    const links = {
        "1": {
            "url": "index.html",
            "text": "Home",
            "alt": "Example Homepage"
        },
        "2": {
            "url": "template.html",
            "text": "Template Page",
            "alt": "Template Link"
        },
        "3": {
            "url": "tables.html",
            "text": "HTML Tables",
            "alt": "Simple and Complex Table Demonstration"
        }
    };

    const linkSeperator = " | ";
    let htmlString = "";

    for (var id in links) {
        if (pathname === links[id]['url']) {
            htmlString += links[id]['text'];
        } else {
            htmlString += '<a href="' + links[id]['url'] + '">' + links[id]['text'] + '</a>';
        }
        if (Number(id) < Object.keys(links).length) {
            htmlString += linkSeperator;
        }
    }

    $('#siteLinks').html(htmlString);

    $('p').css('background-color', 'yellow')
    $('footer').css('padding', '100px')
    $('footer').css('background-color', 'green')

});