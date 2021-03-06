class Eq2_1 extends Equation {
    static *equationGenerator() {
        var equations=[];
        for(var i=11;i<=89;i++)
        {
            for(var j=10-(i%10);j<=9;j++)
            {
                equations.push(new Eq2_1(i, j, "&plus;"));
                equations.push(new Eq2_1(i+j, j, "&minus;"));
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
    static generator=Eq2_1.equationGenerator();
    static next() {
        return Eq2_1.generator.next().value;
    }
    show() {
        return this.getLine();
    }
}