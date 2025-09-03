//在后续的wps版本中，wps的所有枚举值都会通过wps.Enum对象来自动支持，现阶段先人工定义
var WPS_Enum = {
    msoCTPDockPositionLeft: 0,
    msoCTPDockPositionRight: 2
}

function GetUrlPath() {
    let e = document.location.toString()
    e = decodeURI(e)
    if (-1 !== e.indexOf("/"))
        e = e.substring(0, e.lastIndexOf("/"))
    return e
}

function TestSetCellFormula() 
{
	var cells = Application.ActiveWorkbook.ActiveSheet.Cells;
	let date = new Date();
	let start = date.getTime();
	for(var i = 1; i <= 10; ++i) 
	{ 
		for(var j = 1; j <= 10; ++j) 
		{
			cells.Item(i, j).Formula = i + j; 
		} 
	} 
	date = new Date(); 
	let end = date.getTime(); 
	alert(end - start); return; 
}

function Test() {
    console.log("Test function called");
}

function test2() {
    Application.Worksheets.Item("Sheet1").Activate()
    //Range is on the active sheet
    Application.Range("A1:H8").Formula = "=Rand()"
}

export default {
    WPS_Enum,
    GetUrlPath,
    TestSetCellFormula,
    Test,
    test2
}
