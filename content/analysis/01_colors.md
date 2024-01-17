---
Title: Colors
Description: This is my colors page.
Template: technologies
---

Colors
=======================

Detta är en utvärdering av tre webbplatsers färgpalett, typografi och allmänna utseende. Stilen bedöms utefter den profil som webbplatsen verkar sikta på.

Urval
-----------------------

Jag har valt att undersöka webbplatserna för Wikipedia, PHP och MDN baserat på deras populäritet och även deras relevans för webbteknologier då PHP vanligtvis används till webbplatsers backend/server och MDN fokuserar på att dokumentera webbteknologier.

Metod
-----------------------

Jag använde mig främst av webbläsares verktyg att inspektera webbsidor, vilket innefattar vilka typer av element som tillämpas samt deras färger och typsnitt. Jag använde även [Color Contrast Accessibility Validator](https://color.a11y.com/Contrast/) för att bedöma lämpligheten av färgvalen baserat på tillgänglighet.
<br>
För att inspektera element på en webbsida kan man högerklicka på något såsom en paragraf, rubrik eller kontainer och välja alternativet "inspektera", man får då det elementet markerat i ens inspekterings-menu som visas och därmed elementets stil-regler med bland annat eventuell satt färg och typsnitt. Angående det nämnda verktyget som bedömer en webbsidas kontraster så kräver den endast att webbsidans länk anges och då kopierar man över den till verktygets inmatningsfält.

Resultat
-----------------------

### Wikipedia
![Wikipedia's home page](%assets_url%/img/snapshots/wikipedia.jpg)
<br>
*Wikipedias hemsida*

Wikipedias färgpalett är vitt och svart för bakgrund respektive text, två nyanser av gråt för bakgrunden till hemsidans välkomstmeddelande och kategorier för övrigt, samt grönt, blått och lila för vissa rubrikers bakgrund. Det är ett komplement färgschema som används eftersom färger tillämpas från motsatta sidan färghjulet, såsom grönt och lila. Dock syns flest olika färger på hemsidan till skillnad från artiklarna på alla möjliga ämnen. Färgschemat visualiseras nedan.

<div class="color-palette">
  <table>
    <tr>
      <td style="background-color: rgb(255, 255, 255)">
      <td style="background-color: rgb(55, 57, 57)">
      <td style="background-color: rgb(249, 249, 249)">
      <td style="background-color: rgb(238, 238, 238)">
      <td style="background-color: rgb(206, 242, 224)">
      <td style="background-color: rgb(206, 223, 242)">
      <td style="background-color: rgb(221, 206, 242)">
    </tr>
  </table>
</div>

Typsnitten som används är <code class="language-css">font-family: 'Linux Libertine','Georgia','Times','Source Serif Pro',serif;</code> med prioritet i den ordningen för rubriker och <code class="language-css">font-family: sans-serif;</code> för brödtext. Jag anser att typografin och färgvalen överrensstämmer med webbplatsens helhetsintryck vilket för mig förefaller som en proper samt enkel stil i samband med webbplatsens rent informativa ändamål.

### PHP
![PHP's home page](%assets_url%/img/snapshots/php.jpg)
<br>
*PHPs hemsida*

PHPs färgpalett är vitt och svart för bakgrund respektive text gällande det huvudsakliga innehållet, i övrigt är webbsidans bakgrund svart med vitt text och har två nyanser av blått för navigeringsfältet och knappar. När man hovrar över en knapp så övergår den till en mörklila bakgrund och tillbaka när man slutar. Det är ett analogt färgschema som används eftersom närliggande färger tillämpas såsom blått och mörklila. Färgschemat visualiseras nedan.

<div class="color-palette">
  <table>
    <tr>
      <td style="background-color: rgb(242, 242, 242)">
      <td style="background-color: rgb(56, 56, 56)">
      <td style="background-color: rgb(122, 134, 184)">
      <td style="background-color: rgb(79, 91, 147)">
      <td style="background-color: rgb(121, 56, 98)">
      <td style="background-color: rgb(255, 255, 255)">
    </tr>
  </table>
</div>

Typsnitten som används är <code class="language-css">font-family: "Fira Sans", "Source Sans Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";</code> med prioritet i den ordningen för både rubriker och brödtext. Jag anser att typografin och färgvalen i stort matchar webbplatsens helhetsintryck vilket för mig förefaller som en ändamålsenlig design som reflekterar den nedladdningsbara produktens design i utseende.

### MDN
![MDN's home page](%assets_url%/img/snapshots/mdn.jpg)
<br>
*MDNs hemsida*

MDNs färgpalett (för sitt mörka tema) är svart och vitt för bakgrund respektive text samt lila längs vänster sida av både notifikationer och bokmärken för en artikel. Bakgrunden är mörkblå och grå för notifikationer respektive aktiva bokmärken. Indikatorn i webbsidans sökfält är ljuslila. Grönt och rött tillämpas längst ner på en artikel för att betona vilka versioner av vilka webbläsare som stödjer funktionaliteten som artikeln angår, där det är grönt om det stödjs och annars rött. Det är ett monokromatiskt färgschema som används eftersom det huvudsakligen är flera nyanser av samma färg som tillämpas, då utifrån svart och lila. Färgschemat visualiseras nedan.

<div class="color-palette">
  <table>
    <tr>
      <td style="background-color: rgb(27, 27, 27)">
      <td style="background-color: rgb(244, 244, 244)">
      <td style="background-color: rgb(174, 138, 255)">
      <td style="background-color: rgb(140, 180, 255)">
      <td style="background-color: rgb(24, 38, 49)">
      <td style="background-color: rgb(52, 52, 52)">
      <td style="background-color: rgb(3, 181, 86)">
      <td style="background-color: rgb(255, 112, 127)">
    </tr>
  </table>
</div>

Typsnitten som används är <code class="language-css">font-family: BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;</code> med prioritet i den ordningen för både rubriker och brödtext. Jag anser att typografin och färgvalen matchar webbplatsens profil vilket för mig förefaller som stilren med fokus på att redogöra hur man använder webbteknologier i samband med uppvisning av kodexempel.

Analys
-----------------------

Resultaten visade på att färgvalen var hyfsat sparsamma. I och med att kontrasterna var tydliga, utan särskilt många olika starka färger tillsammans, och att typsnitten var lättlästa så gjorde det webbplatserna enkla att läsa av och därmed också enklare att interagera med. Om man följer de grunderna med anpassning för ens tema så verkar webbplatsen bli allmänt användarvänlig och till viss mån estetiskt tilltalande.

Referenser
-----------------------

- Inspekterade webbsidor
  - [Wikipedia](https://en.wikipedia.org/wiki/Main_Page)
  - [MDN](https://developer.mozilla.org/en-US/)
  - [PHP](https://www.php.net/)
- Använda verktyg via webbsidor
  - [Color Contrast Accessibility Validator](https://color.a11y.com/Contrast/)

Övrigt
-----------------------

Författad av Erik Pehrsson.