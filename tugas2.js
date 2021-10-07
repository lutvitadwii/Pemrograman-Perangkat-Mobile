/* 
Nama : Lutvita Dwi Iklima
NIM : 20190040059
Mata Kuliah : Pemrograman Perangkat Mobile
*/
//penggunaan const dan let
misalkan  umur  =  0
misalkan  tinggi  =  0

// fungsi panah
const  Tarif  =  ( umur ,  tinggi )  =>  {
    //operator Terner
    kembali  ( umur  <  1 ) ? "Dilarang Masuk"
        : ( umur  <  3  &&  tinggi  <  70 ) ? `Tarif Anda Rp. ${ 30000 } `
        : ( umur  >=  2  &&  umur  <=  3  &&  tinggi  >  70 ) ? `Tarif Anda Rp. ${ 30000 } + ${ 10000 } = Rp. ${ 30000  +  10.000 } `
        : ( umur  <  7  &&  tinggi  <  120  ) ? `Tarif Anda Rp. ${ 40000 } `
        : ( umur  >=  4  &&  umur  <=  7  &&  tinggi  >  120 ) ? `Tarif Anda Rp. ${ 40000 } + Rp. ${ 15000 } = Rp. ${ 40000  +  15000 } `
        : ( umur  <  10  &&  tinggi  <  150 ) ? `Tarif Anda Rp. ${ 50000 } `
        : ( umur  >=  8  &&  umur  <=  10  &&  tinggi  >  150 ) ? `Tarif Anda Rp. ${ 50000 } + Rp. ${ 20000 } = Rp. ${ 50000  +  20000 } `
        : `Tarif Anda ${ 80000 } `
}

// literal templat
misalkan  total  =  Tarif ( 7 , 125 )
konsol . log ( `hasil:\n ${ total } `
