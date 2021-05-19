class Eq1x1 extends Equation {
    static *equationGenerator() {
        var equations=[];
        for(var i=2;i<=9;i++)
        {
            for(var j=2;j<=9;j++)
            {
                equations.push(new Eq1x1(i, j, "&times;"));
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
    static generator=Eq1x1.equationGenerator();
    static next() {
        return this.generator.next().value;
    }
    show() {
        return this.getLine();
    }

}