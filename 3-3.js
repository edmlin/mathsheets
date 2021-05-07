class Eq3_3 extends Equation {
    static next() {
        var oper1,oper2,op;
        if(random(1,4)==1)
        {
            oper1=random(100,999);
            op="&plus;";
            oper2=random(100,999);
        }
        else
        {
            op="&minus;";
            if(random(1,2)==1)
            {
                oper1=random(100,999);
                oper2=random(10,oper1);
            }
            else
            {
                if(random(1,3)>1)
                {
                    oper2=random(10,899);
                    oper1=random(Math.floor(oper2/100)+1,9)*100 + random(0,oper2%100);
                }
                else
                {
                    oper2=random(1,89)*10+random(1,9);
                    oper1=random(Math.floor(oper2/100)+1,9)*100+random(0,oper2%10);
                }
            }
        }
        return new Eq3_3(oper1,oper2,op);
    }
    show(height) {
        return this.getTable(height);
    }
}