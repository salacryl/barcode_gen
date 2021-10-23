var jsbarcode = require("jsbarcode")
const { DOMImplementation, XMLSerializer } = require('xmldom');

const generateHTMLTagBarcode = (data, res) => {
    const xmlSerializer = new XMLSerializer();
    const document = new DOMImplementation().createDocument('http://www.w3.org/1999/xhtml', 'html', null);
    const svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    
    jsbarcode(svgNode, 'test', {
        xmlDocument: document,
    });
    
    const svgText = xmlSerializer.serializeToString(svgNode);
        
         res.render("barcodes", {barcode: svgText,layout: "barcodeHTML"});


//res.render("barcodes", {barcode: code39,layout: "barcodeHTML"});

};

export default {
    generate : generateHTMLTagBarcode
}