class Equation {
    oper1;
    oper2;
    op;
    constructor(oper1,oper2,op)
    {
        [this.oper1,this.oper2,this.op]=[oper1,oper2,op];
    }
    getTable()
    {
        var [oper1,oper2,op]=[this.oper1,this.oper2,this.op];
        var table=$("<table width=70% height=100% align=center border=0 cellspacing=0 />").css("border-collapse","collapse");
        var row1=$(`<tr style='height:33%'/>`).append(`<td/>`);
        var row2=$(`<tr style='height:33%'/>`)
        var length=`${oper1}`.length+1;
        `${oper1}`.split("").forEach(function(c){
            row1.append(`<td>${c}</td>`);
        });
        row2.append(`<td >${op}</td>`);
        `${oper2}`.padStart(`${oper1}`.length).split("").forEach(function(c){
            row2.append(`<td>${c}</td>`);
        });
        row2.css("border-bottom","solid 1px black");
        table.append(row1).append(row2).append(`<tr style='height:33%'/>`);
        return table;
    }
    getLine()
    {
        var [oper1,oper2,op]=[this.oper1,this.oper2,this.op];
        var line=$(`<span>${oper1} ${op} ${oper2} =</span>`);
        return line;
    }
}