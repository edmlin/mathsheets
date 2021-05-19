class Eq1x_ extends Equation {
    static *equationGenerator() {
        var equations=[];
        for(var i=2;i<=9;i++)
        {
            for(var j=2;j<=9;j++)
            {
                equations.push(new Eq1x_(i, j, "&times;"));
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
    static generator=Eq1x_.equationGenerator();
    static next() {
        return Eq1x_.generator.next().value;
    }
    show() {
        var [oper1,oper2,op]=[this.oper1,this.oper2,this.op];
        var line=$(`<span>${oper1} ${op} __ = ${oper1*oper2}</span>`);
        return line;
    }

}