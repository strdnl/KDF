var key = new Uint32Array(8);
window.crypto.getRandomValues(key);

function kdf(input){tm=Date.now();
return asp(build(input));}	

function asp(a){
function x(){	var z=a.length, i=0,l=z/2,op=new BigUint64Array(l),p=((2n**64n)-59n);z-=1;
	while(i<l){
		op[i]=(a[i]*a[z-i])%p;
		i++;}a=op;}
while (a.length>8){x();}
console.log((Date.now()-tm)/1000);
return (a)}

function build(k){
bd=new BigUint64Array(65536);
var pP=((2n**64n)-83n),m=2**16,tp,i=0,x=bd.length,ac=0n;
for (i in bd){
	bd[i]=ac;
	tp=BigInt(k[0]*(k[4]%m))%pP
	bd[i]=(bd[i]+tp)%pP;
	tp=BigInt(k[1]*(k[5]%m-1))%pP
	bd[i]=(bd[i]+tp)%pP;
	tp=BigInt(k[2]*(k[6]%m-3))%pP;
	bd[i]=(bd[i]+tp)%pP;
	tp=BigInt(k[3]*(k[7]%m-2))%pP;
bd[i]=(bd[i]+tp)%pP;
ac=bd[i]}
return bd}
