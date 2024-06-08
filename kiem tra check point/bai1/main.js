function tinhGiaiThua(n) { 
    // khoi tao bien ket qua
    let giaiThua = 1;
    // su dung vong lap de tinh giai thua
    for (let i = 1; i <= n; i++) {
        giaiThua *=i;
    }
    // in ket qua ra man hinh
console.log(`giai thua cua ${n} = 
${giaiThua}`);

}
// goi ham voi gia tri vi du
let n = 5; // ban co the thay doi gia tri nay de thu voi cac gia tri khac
tinhGiaiThua(n);