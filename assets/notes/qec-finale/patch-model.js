/* Fixed nine-qubit convention from the seminar notes. Qubit 1 is bit 0. */
(function(root){
const hx=[3,54,216,384], hz=[27,432,72,36];
const parity=x=>{let p=0;for(;x;x&=x-1)p^=1;return p};
const syndrome=x=>hz.map(r=>parity(r&x));
const same=(a,b)=>a.every((x,i)=>x===b[i]);
let row=[0];for(const r of hx)row=row.concat(row.map(x=>x^r));
const weight=x=>x.toString(2).replace(/0/g,'').length;
function decode(s){let best;for(let x=0;x<512;x++)if(same(syndrome(x),s)&&
(best===undefined||weight(x)<weight(best)))best=x;return best}
const status=(e,c)=>!same(syndrome(e),syndrome(c))?'inconsistent':row.includes(e^c)?'success':'logical';
const model={hx,hz,parity,syndrome,same,row,weight,decode,status};
if(typeof module!=='undefined')module.exports=model;root.PatchModel=model;
})(typeof globalThis!=='undefined'?globalThis:this);
