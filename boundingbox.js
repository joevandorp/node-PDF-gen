/*
npm install hummus-recipe --save
npm
https://www.npmjs.com/package/hummus-recipe
Documentation
https://chunyenhuang.github.io/hummusRecipe/Recipe.html
*/

const HummusRecipe = require('hummus-recipe');

//https://chunyenhuang.github.io/hummusRecipe/Recipe.html
const pdfDoc = new HummusRecipe('new', './output.pdf',{
    version: 1.6,
    author: 'ElectionSource',
    title: 'marks file',
    subject: 'marks file'
});

//https://chunyenhuang.github.io/hummusRecipe/Recipe.html#.createPage
pdfDoc.createPage('612','1296');

//https://chunyenhuang.github.io/hummusRecipe/Recipe.html#.rectangle
pdfDoc.rectangle(0, 0, 612, 1296, {
    stroke: '#000000',
    lineWidth: 6,
    opacity: 1
})

pdfDoc.endPage();
pdfDoc.endPDF();
process.exit();