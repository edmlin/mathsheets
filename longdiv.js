class longDiv extends Equation {
    static *equationGenerator() {
        var equations=[];
        for(var i=101;i<1000;i++)
        {
            for(var j=2;j<10;j++)
            {
                equations.push(new longDiv(i, j, "longDiv"))
            }
        }
        while(1)
        {
            shuffle(equations);
            for(let index=0;index<equations.length;index++)
            {
                yield equations[index];
            }
        }
    }
    static generator=longDiv.equationGenerator();
    static next() {
        return longDiv.generator.next().value;
    }
    show() {
        var div=$("<div style='height:100%;margin:5pt;padding-top: 40pt'>");
        var span1=$("<span style='border-right: 1px black solid; border-radius: 0px 0px 10px 0px'>");
        span1.text(this.oper2);
        var span2=$("<span style='border-top: 1px black solid; '>");
        span2.text(this.oper1);
        div.append(span1).append(span2);
        return div;
    }
}