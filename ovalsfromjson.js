/*
npm install hummus-recipe --save
npm
https://www.npmjs.com/package/hummus-recipe
Documentation
https://chunyenhuang.github.io/hummusRecipe/Recipe.html
*/
const HummusRecipe = require('hummus-recipe');

//each oval starts as a px value string
const json = [{"top":"468px","left":"211px"},{"top":"493px","left":"211px"},{"top":"516px","left":"212px"},{"top":"539px","left":"211px"},{"top":"563px","left":"212px"},{"top":"468px","left":"386px"},{"top":"492px","left":"386px"},{"top":"517px","left":"385px"},{"top":"540px","left":"384px"},{"top":"469px","left":"561px"},{"top":"491px","left":"560px"},{"top":"516px","left":"561px"},{"top":"660px","left":"211px"},{"top":"684px","left":"211px"},{"top":"707px","left":"211px"},{"top":"636px","left":"386px"},{"top":"661px","left":"385px"},{"top":"612px","left":"559px"},{"top":"779px","left":"211px"},{"top":"804px","left":"209px"},{"top":"731px","left":"386px"},{"top":"757px","left":"386px"},{"top":"780px","left":"386px"},{"top":"685px","left":"560px"},{"top":"901px","left":"212px"},{"top":"924px","left":"213px"},{"top":"947px","left":"212px"},{"top":"876px","left":"387px"},{"top":"900px","left":"385px"},{"top":"923px","left":"385px"},{"top":"780px","left":"559px"},{"top":"1044px","left":"212px"},{"top":"1068px","left":"212px"},{"top":"1020px","left":"385px"},{"top":"1045px","left":"386px"},{"top":"1068px","left":"385px"},{"top":"1091px","left":"385px"},{"top":"876px","left":"561px"},{"top":"1187px","left":"211px"},{"top":"1213px","left":"212px"},{"top":"1236px","left":"212px"},{"top":"1260px","left":"209px"},{"top":"1212px","left":"385px"},{"top":"1237px","left":"386px"},{"top":"997px","left":"560px"},{"top":"1332px","left":"210px"},{"top":"1357px","left":"211px"},{"top":"1381px","left":"210px"},{"top":"1404px","left":"211px"},{"top":"1307px","left":"384px"},{"top":"1332px","left":"385px"},{"top":"1069px","left":"559px"},{"top":"1092px","left":"560px"},{"top":"1476px","left":"211px"},{"top":"1500px","left":"212px"},{"top":"1403px","left":"386px"},{"top":"1163px","left":"561px"},{"top":"2220px","left":"213px"},{"top":"2244px","left":"212px"},{"top":"2268px","left":"210px"},{"top":"2292px","left":"212px"},{"top":"2220px","left":"386px"},{"top":"2244px","left":"386px"},{"top":"2222px","left":"559px"},{"top":"2243px","left":"561px"},{"top":"396px","left":"733px"},{"top":"420px","left":"734px"},{"top":"444px","left":"734px"},{"top":"468px","left":"733px"},{"top":"493px","left":"733px"},{"top":"516px","left":"733px"},{"top":"1069px","left":"734px"},{"top":"1092px","left":"734px"}];


//https://chunyenhuang.github.io/hummusRecipe/Recipe.html
const pdfDoc = new HummusRecipe('new', './output.pdf',{
    version: 1.6,
    author: 'ElectionSource',
    title: 'marks file',
    subject: 'marks file'
});

//https://chunyenhuang.github.io/hummusRecipe/Recipe.html#.createPage
pdfDoc.createPage('612','1296');

for(let item of json){
    //each oval item is parsed into an intiger from a string and converted into pt from px by multiplying by 0.75
    //5 pt width is added to the x value of each oval for proper placement
    //-72 pt (or 1 inch) is taken from the y value of each oval to account for the original 1 inch ballot stub that existed when the mark coordinates were constructed
    //4 pt width is added to the y value of each oval for proper placement
    //https://chunyenhuang.github.io/hummusRecipe/Recipe.html#.ellipse
    pdfDoc.ellipse(((parseInt(item['left']) * 0.75)+5), ((parseInt(item['top']) * 0.75)-72+4), 6, 5,  { fill: '#000000', opacity: 1 });
}

pdfDoc.endPage();
pdfDoc.endPDF();
process.exit();