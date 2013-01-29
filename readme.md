Detta är ett demoprojekt för kursen [RIA-utveckling med JavaScript][1]. Just nu innehåller det...

*    Implementation av **Brocco**. Dokumentationen av Brocco är usel, så det kan vara svårt att få det up and running. Tjuvkika här & stjäl!
*    Grundläggande RequireJS-användning, inkluderandes...
    *    byggandet av egen [Backbonemodul][5]. Jag har valt att först sätta ihop `purebackbone`, med `jQuery` och `underscore` som beroenden. Jag använder också `purebackbone` som beroende för Backbone-plugins (relational och localStorage). Sedan deklarerar jag min egna modul `backbone`, som är beroende av `purebackbone` samt de båda pluginsen. Därefter kan jag använda `backbone`-modulen i övrig kod, och den kommer då innehålla all funktionalitet jag vill ha. Se kod i `bootstrap.js` samt `lib/backbone/backbone.js`.
    *    användning av RequireJS-plugins för [CoffeeScript][2] och [SweetJS][3]. Eftersom projektet skall vara körbart direkt via Github Pages och vi inte får ha något byggsteg, så måste vi parsa CoffeeScript/Sweetmakron direkt i webbläsaren.
    *    [testsvit med Jasmine][4], inladdad med RequireJS. Några av er hade lite svårt att få det att fungera, så släng ett öga här! Observera hur jag valt att grena koden i `bootstrap.js`, för att bara behöva konfigurera RequireJS en enda gång.

[1]: https://coursepress.lnu.se/kurs/ria-utveckling-med-javascript/
[2]: https://coursepress.lnu.se/kurs/ria-utveckling-med-javascript/coffeescript/
[3]: https://coursepress.lnu.se/kurs/ria-utveckling-med-javascript/sweet-js/
[4]: https://coursepress.lnu.se/kurs/ria-utveckling-med-javascript/test-driven-utveckling
[5]: https://coursepress.lnu.se/kurs/ria-utveckling-med-javascript/backbone/