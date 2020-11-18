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
return new Uint32Array(a.buffer,[0])}


function build(k){
bd=new BigUint64Array(1024);
var pP=((2n**64n)-83n),tp,i=0,x=bd.length,ac=0n,k4,k5,k6,k7;
for (i in bd){
	var Bi=(i+1);
	k4=BigInt(k[4]*(Bi))%pP;
	k5=BigInt(k[5]*(Bi+1))%pP;
	k6=BigInt(k[6]*(Bi+2))%pP;
	k7=BigInt(k[7]*(Bi+3))%pP;
	bd[i]=ac;
	tp=(BigInt(k[0])*k4)%pP;
	bd[i]=(bd[i]+tp)%pP;
	tp=(BigInt(k[1])*k5)%pP;
	bd[i]=(bd[i]+tp)%pP;
	tp=(BigInt(k[2])*k6)%pP;
	bd[i]=(bd[i]+tp)%pP;
	tp=(BigInt(k[3])*k7)%pP;
bd[i]=(bd[i]+tp)%pP;
ac=bd[i]}
return bd}
