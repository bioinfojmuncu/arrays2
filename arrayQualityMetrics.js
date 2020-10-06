// (C) Wolfgang Huber 2010-2011

// Script parameters - these are set up by R in the function 'writeReport' when copying the 
//   template for this script from arrayQualityMetrics/inst/scripts into the report.

var highlightInitial = [ false, false, false, false, false, false, false, false, true, false, false, true, false, true, false, false, true, false, false, true, true, true, true, false, false, false, false, true, false, false, false, true, false, false, false, true, false, true, true, false, false, true, false, false, false, false, false, false, true, true, true, false, false, true, true, true, false, true, true, false, false, false, false, false, true, false, false, false, true, false, false, false, false, true, false, true, false, true, false, true, true, false, true, false, true, true, true, true, false, false, true, false, true, false, true, true, true, false, false, true, false, false, false, false, true, false, false, false, false, false ];
var arrayMetadata    = [ [ "1", "ClaS_FL_1", "1", "", "NA", "1,00" ], [ "2", "ClaS_FL_1.11", "2", "NO_RC", "NA", "2,00" ], [ "3", "ClaS_FL_1.13", "3", "RC", "1", "2,00" ], [ "4", "ClaS_FL_1.14", "4", "RC", "1", "2,00" ], [ "5", "ClaS_FL_1.16", "5", "RC", "1.5", "2,00" ], [ "6", "ClaS_FL_1.17", "6", "", "NA", "2,00" ], [ "7", "ClaS_FL_1.18", "7", "NO_RC", "1", "2,00" ], [ "8", "ClaS_FL_1.20", "8", "RC", "1", "2,00" ], [ "9", "ClaS_FL_1.21", "9", "NO_RC", "1", "2,00" ], [ "10", "ClaS_FL_1.22", "10", "RC", "4", "3,00" ], [ "11", "ClaS_FL_1.24", "11", "NO_RC", "1", "3,00" ], [ "12", "ClaS_FL_1.25", "12", "NO_RC", "3", "4,00" ], [ "13", "ClaS_FL_1.26", "13", "NO_RC", "1", "4,00" ], [ "14", "ClaS_FL_1.27", "14", "NO_RC", "3", "4,00" ], [ "15", "ClaS_FL_1.29", "15", "NO_RC", "1", "5,00" ], [ "16", "ClaS_FL_1.30", "16", "NO_RC", "1", "5,00" ], [ "17", "ClaS_FL_1.31", "17", "RC", "1", "3,00" ], [ "18", "ClaS_FL_1.32", "18", "RC", "1", "3,00" ], [ "19", "ClaS_FL_1.33", "19", "NO_RC", "1", "5,00" ], [ "20", "ClaS_FL_1.34", "20", "NO_RC", "1", "6,00" ], [ "21", "ClaS_FL_1.36", "21", "RC", "1", "3,00" ], [ "22", "ClaS_FL_1.37", "22", "NO_RC", "4", "6,00" ], [ "23", "ClaS_FL_1.38", "23", "RC", "1", "3,00" ], [ "24", "ClaS_FL_1.39", "24", "NO_RC", "1", "6,00" ], [ "25", "ClaS_FL_1.40", "25", "NO_RC", "1", "7,00" ], [ "26", "ClaS_FL_1.41", "26", "NO_RC", "1", "7,00" ], [ "27", "ClaS_FL_1.42", "27", "RC", "1", "3,00" ], [ "28", "ClaS_FL_1.43", "28", "RC", "1", "3,00" ], [ "29", "ClaS_FL_1.44", "29", "NO_RC", "1", "7,00" ], [ "30", "ClaS_FL_1.45", "30", "NO_RC", "1", "8,00" ], [ "31", "ClaS_FL_1.46", "31", "RC", "1", "4,00" ], [ "32", "ClaS_FL_1.47", "32", "NO_RC", "1", "8,00" ], [ "33", "ClaS_FL_1.48", "33", "NO_RC", "1", "8,00" ], [ "34", "ClaS_FL_1.49", "34", "NO_RC", "1", "9,00" ], [ "35", "ClaS_FL_1.5", "35", "RC", "1", "1,00" ], [ "36", "ClaS_FL_1.51", "36", "RC", "1", "1,00" ], [ "37", "ClaS_FL_1.52", "37", "RC", "1", "4,00" ], [ "38", "ClaS_FL_1.53", "38", "?", "NA", "2,00" ], [ "39", "ClaS_FL_1.54", "39", "RC", "1", "4,00" ], [ "40", "ClaS_FL_1.55", "40", "RC", "1", "4,00" ], [ "41", "ClaS_FL_1.57", "41", "RC", "NA", "4,00" ], [ "42", "ClaS_FL_1.58", "42", "RC", "NA", "4,00" ], [ "43", "ClaS_FL_1.59", "43", "RC", "NA", "5,00" ], [ "44", "ClaS_FL_1.61", "44", "RC", "1", "1,00" ], [ "45", "ClaS_FL_1.64", "45", "RC", "1", "5,00" ], [ "46", "ClaS_FL_1.7", "46", "RC", "1.5", "1,00" ], [ "47", "ClaS_FL_1.8", "47", "NO_RC", "3", "1,00" ], [ "48", "ClaS_FL_1.9", "48", "RC", "1.5", "2,00" ], [ "49", "ClaS_FL_10", "49", "", "NA", "3,00" ], [ "50", "ClaS_FL_12", "50", "", "NA", "3,00" ], [ "51", "ClaS_FL_13", "51", "", "NA", "4,00" ], [ "52", "ClaS_FL_18", "52", "", "NA", "4,00" ], [ "53", "ClaS_FL_2", "53", "", "NA", "1,00" ], [ "54", "ClaS_FL_20", "54", "", "NA", "" ], [ "55", "ClaS_FL_21", "55", "", "NA", "4,00" ], [ "56", "ClaS_FL_23", "56", "", "NA", "5,00" ], [ "57", "ClaS_FL_25", "57", "", "NA", "5,00" ], [ "58", "ClaS_FL_27", "58", "", "NA", "5,00" ], [ "59", "ClaS_FL_3", "59", "", "NA", "1,00" ], [ "60", "ClaS_FL_32", "60", "", "NA", "6,00" ], [ "61", "ClaS_FL_33", "61", "", "NA", "6,00" ], [ "62", "ClaS_FL_37", "62", "", "NA", "6,00" ], [ "63", "ClaS_FL_38", "63", "", "NA", "7,00" ], [ "64", "ClaS_FL_39", "64", "", "NA", "7,00" ], [ "65", "ClaS_FL_41", "65", "", "NA", "" ], [ "66", "ClaS_FL_42", "66", "", "NA", "7,00" ], [ "67", "ClaS_FL_43", "67", "", "NA", "8,00" ], [ "68", "ClaS_FL_44", "68", "", "NA", "8,00" ], [ "69", "ClaS_FL_45", "69", "", "NA", "8,00" ], [ "70", "ClaS_FL_46", "70", "", "NA", "9,00" ], [ "71", "ClaS_FL_47", "71", "", "NA", "9,00" ], [ "72", "ClaS_FL_48", "72", "", "NA", "9,00" ], [ "73", "ClaS_FL_5", "73", "", "NA", "2,00" ], [ "74", "ClaS_FL_51", "74", "RC", "1", "1,00" ], [ "75", "ClaS_FL_52", "75", "NO_RC", "1", "1,00" ], [ "76", "ClaS_FL_53", "76", "RC", "1.5", "" ], [ "77", "ClaS_FL_54", "77", "NO_RC", "1.5", "9,00" ], [ "78", "ClaS_FL_55", "78", "RC", "NA", "5,00" ], [ "79", "ClaS_FL_56", "79", "", "NA", "" ], [ "80", "ClaS_FL_57", "80", "RC", "1", "5,00" ], [ "81", "ClaS_FL_58", "81", "RC", "1.5", "5,00" ], [ "82", "ClaS_FL_59", "82", "", "NA", "9,00" ], [ "83", "ClaS_FL_60", "83", "RC", "1", "" ], [ "84", "ClaS_FL_61", "84", "RC", "1", "5,00" ], [ "85", "ClaS_FL_62", "85", "RC", "1.5", "6,00" ], [ "86", "ClaS_FL_64", "86", "RC", "1", "6,00" ], [ "87", "ClaS_FL_65", "87", "RC", "1.5", "6,00" ], [ "88", "ClaS_FL_66", "88", "RC", "1", "6,00" ], [ "89", "ClaS_FL_67", "89", "RC", "1", "" ], [ "90", "ClaS_FL_69", "90", "RC", "1.5", "6,00" ], [ "91", "ClaS_FL_70", "91", "RC", "1", "7,00" ], [ "92", "ClaS_FL_72", "92", "RC", "3", "10,00" ], [ "93", "ClaS_FL_73", "93", "RC", "2", "7,00" ], [ "94", "ClaS_FL_74", "94", "RC", "3", "9,00" ], [ "95", "ClaS_FL_75", "95", "RC", "1", "7,00" ], [ "96", "ClaS_FL_76", "96", "RC", "1", "7,00" ], [ "97", "ClaS_FL_77", "97", "RC", "1", "7,00" ], [ "98", "ClaS_FL_78", "98", "RC", "1.5", "7,00" ], [ "99", "ClaS_FL_79", "99", "RC", "1.5", "8,00" ], [ "100", "ClaS_FL_8", "100", "", "NA", "3,00" ], [ "101", "ClaS_FL_80", "101", "RC", "1", "8,00" ], [ "102", "ClaS_FL_81", "102", "RC", "1", "8,00" ], [ "103", "ClaS_FL_82", "103", "RC", "1", "8,00" ], [ "104", "ClaS_FL_83", "104", "RC", "1", "8,00" ], [ "105", "ClaS_FL_84", "105", "NO_RC", "1.5", "10,00" ], [ "106", "ClaS_FL_85", "106", "", "NA", "10,00" ], [ "107", "ClaS_FL_86", "107", "RC", "1.5", "" ], [ "108", "ClaS_FL_87", "108", "RC", "1", "8,00" ], [ "109", "ClaS_FL_88", "109", "RC", "3", "10,00" ], [ "110", "ClaS_FL_89", "110", "", "NA", "10,00" ] ];
var svgObjectNames   = [ "pca", "dens" ];

var cssText = ["stroke-width:1; stroke-opacity:0.4",
               "stroke-width:3; stroke-opacity:1" ];

// Global variables - these are set up below by 'reportinit'
var tables;             // array of all the associated ('tooltips') tables on the page
var checkboxes;         // the checkboxes
var ssrules;


function reportinit() 
{
 
    var a, i, status;

    /*--------find checkboxes and set them to start values------*/
    checkboxes = document.getElementsByName("ReportObjectCheckBoxes");
    if(checkboxes.length != highlightInitial.length)
	throw new Error("checkboxes.length=" + checkboxes.length + "  !=  "
                        + " highlightInitial.length="+ highlightInitial.length);
    
    /*--------find associated tables and cache their locations------*/
    tables = new Array(svgObjectNames.length);
    for(i=0; i<tables.length; i++) 
    {
        tables[i] = safeGetElementById("Tab:"+svgObjectNames[i]);
    }

    /*------- style sheet rules ---------*/
    var ss = document.styleSheets[0];
    ssrules = ss.cssRules ? ss.cssRules : ss.rules; 

    /*------- checkboxes[a] is (expected to be) of class HTMLInputElement ---*/
    for(a=0; a<checkboxes.length; a++)
    {
	checkboxes[a].checked = highlightInitial[a];
        status = checkboxes[a].checked; 
        setReportObj(a+1, status, false);
    }

}


function safeGetElementById(id)
{
    res = document.getElementById(id);
    if(res == null)
        throw new Error("Id '"+ id + "' not found.");
    return(res)
}

/*------------------------------------------------------------
   Highlighting of Report Objects 
 ---------------------------------------------------------------*/
function setReportObj(reportObjId, status, doTable)
{
    var i, j, plotObjIds, selector;

    if(doTable) {
	for(i=0; i<svgObjectNames.length; i++) {
	    showTipTable(i, reportObjId);
	} 
    }

    /* This works in Chrome 10, ssrules will be null; we use getElementsByClassName and loop over them */
    if(ssrules == null) {
	elements = document.getElementsByClassName("aqm" + reportObjId); 
	for(i=0; i<elements.length; i++) {
	    elements[i].style.cssText = cssText[0+status];
	}
    } else {
    /* This works in Firefox 4 */
    for(i=0; i<ssrules.length; i++) {
        if (ssrules[i].selectorText == (".aqm" + reportObjId)) {
		ssrules[i].style.cssText = cssText[0+status];
		break;
	    }
	}
    }

}

/*------------------------------------------------------------
   Display of the Metadata Table
  ------------------------------------------------------------*/
function showTipTable(tableIndex, reportObjId)
{
    var rows = tables[tableIndex].rows;
    var a = reportObjId - 1;

    if(rows.length != arrayMetadata[a].length)
	throw new Error("rows.length=" + rows.length+"  !=  arrayMetadata[array].length=" + arrayMetadata[a].length);

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = arrayMetadata[a][i];
}

function hideTipTable(tableIndex)
{
    var rows = tables[tableIndex].rows;

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = "";
}


/*------------------------------------------------------------
  From module 'name' (e.g. 'density'), find numeric index in the 
  'svgObjectNames' array.
  ------------------------------------------------------------*/
function getIndexFromName(name) 
{
    var i;
    for(i=0; i<svgObjectNames.length; i++)
        if(svgObjectNames[i] == name)
	    return i;

    throw new Error("Did not find '" + name + "'.");
}


/*------------------------------------------------------------
  SVG plot object callbacks
  ------------------------------------------------------------*/
function plotObjRespond(what, reportObjId, name)
{

    var a, i, status;

    switch(what) {
    case "show":
	i = getIndexFromName(name);
	showTipTable(i, reportObjId);
	break;
    case "hide":
	i = getIndexFromName(name);
	hideTipTable(i);
	break;
    case "click":
        a = reportObjId - 1;
	status = !checkboxes[a].checked;
	checkboxes[a].checked = status;
	setReportObj(reportObjId, status, true);
	break;
    default:
	throw new Error("Invalid 'what': "+what)
    }
}

/*------------------------------------------------------------
  checkboxes 'onchange' event
------------------------------------------------------------*/
function checkboxEvent(reportObjId)
{
    var a = reportObjId - 1;
    var status = checkboxes[a].checked;
    setReportObj(reportObjId, status, true);
}


/*------------------------------------------------------------
  toggle visibility
------------------------------------------------------------*/
function toggle(id){
  var head = safeGetElementById(id + "-h");
  var body = safeGetElementById(id + "-b");
  var hdtxt = head.innerHTML;
  var dsp;
  switch(body.style.display){
    case 'none':
      dsp = 'block';
      hdtxt = '-' + hdtxt.substr(1);
      break;
    case 'block':
      dsp = 'none';
      hdtxt = '+' + hdtxt.substr(1);
      break;
  }  
  body.style.display = dsp;
  head.innerHTML = hdtxt;
}
