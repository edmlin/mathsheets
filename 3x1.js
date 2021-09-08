class Eq3x1 extends Equation {
    static *equationGenerator() {
        var equations=[];
        for(var i=101;i<1000;i++)
        {
            for(var j=2;j<10;j++)
            {
                equations.push(new Eq3x1(i, j, "&times;"))
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
    static generator=Eq3x1.equationGenerator();
    static next() {
        return Eq3x1.generator.next().value;
    }
    show() {
        return this.getTable();
    }
}