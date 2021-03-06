/* 暴力法(基因演算法)求函數的根
f(x) = 0
x0 → f(x0) = y0
x1 → f(x1) = y1
if |y1| < |y0|, x0 = x1
if |y1| >= |y0|, reset x1
*/
// Standard Normal variate using Box-Muller transform.
function randn_bm(){
    var u = 1 - Math.random(); // Subtraction to flip [0, 1) to (0, 1].
    var v = 1 - Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}
var M = Math;
//f(x) = e^x - 2x -2
function f(x){
    return M.exp(x) - 2*x - 2;
}
var x0 = 0.68;
var accuracy = M.pow(10, -5);
var n = 0;
while(M.abs(f(x0)) > accuracy)
{
    n++;
    var x1 = randn_bm();
    if(M.abs(f(x1)) < M.abs(f(x0)))
        x0 = x1;
}
console.log('run ' + n + ' steps');
console.log('x0 = ' + x0);
console.log('f(x0) = ' + f(x0));