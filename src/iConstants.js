

import {informationNotify} from './Notifications'



const getDepartments = async () =>{
   try{
    const response = await fetch('/packConfigurationApi/deptNbrs');
    if(response.ok){
      let department = await response.json();
    
      return department;  
    }else{
      let department =  [859,808,839,859];
     
      //error = "Status: "+response.status +" "+ response.statusText+". Please Contact your Admin.";
      return department;
    }
   
   }catch(e){

    let department =  [859,808,839,859];
    console.log(e)
   
    return department;
   }
   
}



const getDeptData = async (dept) =>{

  if(dept === null){
    return [];
  }
    try{
    const response = await fetch('/packConfigurationApi/deptNbrs/'+dept)
    if(response.ok){
    let data = await response.json();
    console.log(data)
    return data;
    }else{
      let exampleData = [];
      exampleData = [
          { deptNbr : 859 , masterclassNbr: 10 ,masterclassDesc: 'Cold Weather',classNbr:59 , classDesc: 'PERFORMANCE PANTS', pid: 'CRM7093H-44028', pidDesc: 'CVC ENDURANCE FLEECE', colorNbr:'021' , colorDesc: 'DARK GRAY', availQty :  12 , currentPack: 'Multi-Of:1', sizeCode : 10965 , sizeDesc : 'S', qtyPerPack: null ,packType:'Eaches', wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 859 , masterclassNbr: 10 ,masterclassDesc: 'Cold Weather',classNbr:59 , classDesc: 'PERFORMANCE PANTS', pid: 'CRM7093H-44028', pidDesc: 'CVC ENDURANCE FLEECE', colorNbr:'021' , colorDesc: 'DARK GRAY', availQty :  200 , currentPack: 'Multi-Of:1', sizeCode : 10970 , sizeDesc : 'M', qtyPerPack:null ,packType:'Eaches',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 859 , masterclassNbr: 10 ,masterclassDesc: 'Cold Weather',classNbr:59 , classDesc: 'PERFORMANCE PANTS', pid: 'CRM7093H-44028', pidDesc: 'CVC ENDURANCE FLEECE', colorNbr:'021' , colorDesc: 'DARK GRAY', availQty :  400 , currentPack: 'Multi-Of:1', sizeCode : 10975 , sizeDesc : 'L', qtyPerPack: null ,packType:'Eaches',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 859 , masterclassNbr: 10 ,masterclassDesc: 'Cold Weather',classNbr:59 , classDesc: 'PERFORMANCE PANTS', pid: 'CRM7093H-44028', pidDesc: 'CVC ENDURANCE FLEECE', colorNbr:'021' , colorDesc: 'DARK GRAY', availQty :  298 , currentPack: 'Multi-Of:1', sizeCode : 10980 , sizeDesc : 'XL', qtyPerPack: null ,packType:'Eaches',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 859 , masterclassNbr: 10 ,masterclassDesc: 'Cold Weather',classNbr:60 , classDesc: 'PERFORMANCE HOODIES', pid: 'RMT1536-68818', pidDesc: 'Kermit the Frog Hoodie', colorNbr:'300' , colorDesc: 'GREEN', availQty :  20 , currentPack: '7PS - 1', sizeCode : 10965 , sizeDesc : 'S', qtyPerPack: null ,packType:'Multi-Size Packs',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 859 , masterclassNbr: 10 ,masterclassDesc: 'Cold Weather',classNbr:60 , classDesc: 'PERFORMANCE HOODIES', pid: 'RMT1536-68818', pidDesc: 'Kermit the Frog Hoodie', colorNbr:'300' , colorDesc: 'GREEN', availQty :  40 , currentPack: '7PS - 2', sizeCode : 10970 , sizeDesc : 'M', qtyPerPack: null ,packType:'Multi-Size Packs',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 859 , masterclassNbr: 10 ,masterclassDesc: 'Cold Weather',classNbr:60 , classDesc: 'PERFORMANCE HOODIES', pid: 'RMT1536-68818', pidDesc: 'Kermit the Frog Hoodie', colorNbr:'300' , colorDesc: 'GREEN', availQty :  40 , currentPack: '7PS - 2', sizeCode : 10975 , sizeDesc : 'L', qtyPerPack: null ,packType:'Multi-Size Packs',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 859 , masterclassNbr: 10 ,masterclassDesc: 'Cold Weather',classNbr:60 , classDesc: 'PERFORMANCE HOODIES', pid: 'RMT1536-68818', pidDesc: 'Kermit the Frog Hoodie', colorNbr:'300' , colorDesc: 'GREEN', availQty :  20 , currentPack: '7PS - 1', sizeCode : 10980 , sizeDesc : 'XL', qtyPerPack: null ,packType:'Multi-Size Packs',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 859 , masterclassNbr: 10 ,masterclassDesc: 'Cold Weather',classNbr:60 , classDesc: 'PERFORMANCE HOODIES', pid: 'RMT1536-68818', pidDesc: 'Kermit the Frog Hoodie', colorNbr:'300' , colorDesc: 'GREEN', availQty :  20 , currentPack: '7PS - 1', sizeCode : 10985 , sizeDesc : 'XXL', qtyPerPack: null ,packType:'Multi-Size Packs',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 808 , masterclassNbr: 15 ,masterclassDesc: 'Businesswear',classNbr:41 , classDesc: 'SKIRTS', pid: '31321SB-3849-13347', pidDesc: 'WHT CROCHET 3 TIER S', colorNbr:'100' , colorDesc: 'WHITE', availQty :  60 , currentPack: '6PS - 1', sizeCode : 32044 , sizeDesc : 'SMALL', qtyPerPack: null ,packType:'Multi-Size Packs',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 808 , masterclassNbr: 15 ,masterclassDesc: 'Businesswear',classNbr:41 , classDesc: 'SKIRTS', pid: '31321SB-3849-13347', pidDesc: 'WHT CROCHET 3 TIER S', colorNbr:'100' , colorDesc: 'WHITE', availQty :  119 , currentPack: '6PS - 2', sizeCode : 32045 , sizeDesc : 'MEDIUM', qtyPerPack: null ,packType:'Multi-Size Packs',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 808 , masterclassNbr: 15 ,masterclassDesc: 'Businesswear',classNbr:41 , classDesc: 'SKIRTS', pid: '31321SB-3849-13347', pidDesc: 'WHT CROCHET 3 TIER S', colorNbr:'100' , colorDesc: 'WHITE', availQty :  120 , currentPack: '6PS - 2', sizeCode : 32046 , sizeDesc : 'LARGE', qtyPerPack: null ,packType:'Multi-Size Packs',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 808 , masterclassNbr: 15 ,masterclassDesc: 'Businesswear',classNbr:41 , classDesc: 'SKIRTS', pid: '31321SB-3849-13347', pidDesc: 'WHT CROCHET 3 TIER S', colorNbr:'100' , colorDesc: 'WHITE', availQty :  60 , currentPack: '6PS - 1', sizeCode : 32047 , sizeDesc : 'XLARGE', qtyPerPack: null ,packType:'Multi-Size Packs',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 808 , masterclassNbr: 18 ,masterclassDesc: 'Womens Pants',classNbr:42 , classDesc: 'ALTERNATIVE LENGTHS', pid: 'DA1214-25563', pidDesc: 'BLK SUZANNE DS CARGO', colorNbr:'001' , colorDesc: 'BLACK', availQty :  1 , currentPack: '6PS - 1', sizeCode : 32044 , sizeDesc : 'SMALL', qtyPerPack: null ,packType:'Multi-Size Packs',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 808 , masterclassNbr: 18 ,masterclassDesc: 'Womens Pants',classNbr:42 , classDesc: 'ALTERNATIVE LENGTHS', pid: 'DA1214-25563', pidDesc: 'BLK SUZANNE DS CARGO', colorNbr:'001' , colorDesc: 'BLACK', availQty :  60 , currentPack: '6PS - 2', sizeCode : 32045 , sizeDesc : 'MEDIUM', qtyPerPack: null ,packType:'Multi-Size Packs',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 808 , masterclassNbr: 18 ,masterclassDesc: 'Womens Pants',classNbr:42 , classDesc: 'ALTERNATIVE LENGTHS', pid: 'DA1214-25563', pidDesc: 'BLK SUZANNE DS CARGO', colorNbr:'001' , colorDesc: 'BLACK', availQty :  120 , currentPack: '6PS - 2', sizeCode : 32046 , sizeDesc : 'LARGE', qtyPerPack: null ,packType:'Multi-Size Packs',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 808 , masterclassNbr: 18 ,masterclassDesc: 'Womens Pants',classNbr:42 , classDesc: 'ALTERNATIVE LENGTHS', pid: 'DA1214-25563', pidDesc: 'BLK SUZANNE DS CARGO', colorNbr:'001' , colorDesc: 'BLACK', availQty :  60 , currentPack: '6PS - 1', sizeCode : 32047 , sizeDesc : 'XLARGE', qtyPerPack: null ,packType:'Multi-Size Packs',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 839 , masterclassNbr: 20 ,masterclassDesc: 'Womens Tops',classNbr:23 , classDesc: 'WOVEN TOPS', pid: 'ETWS3025-51584', pidDesc: 'WHT/BLK STRIPE RFFL', colorNbr:'100' , colorDesc: 'WHITE', availQty :  10 , currentPack: '10PS - 1', sizeCode : 33901 , sizeDesc : 'XS', qtyPerPack: null ,packType:'Multi-Size Packs',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 839 , masterclassNbr: 20 ,masterclassDesc: 'Womens Tops',classNbr:23 , classDesc: 'WOVEN TOPS', pid: 'ETWS3025-51584', pidDesc: 'WHT/BLK STRIPE RFFL', colorNbr:'100' , colorDesc: 'WHITE', availQty :  200 , currentPack: '10PS - 2', sizeCode : 33902 , sizeDesc : 'S', qtyPerPack: null ,packType:'Multi-Size Packs',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 839 , masterclassNbr: 20 ,masterclassDesc: 'Womens Tops',classNbr:23 , classDesc: 'WOVEN TOPS', pid: 'ETWS3025-51584', pidDesc: 'WHT/BLK STRIPE RFFL', colorNbr:'100' , colorDesc: 'WHITE', availQty :  40 , currentPack: '10PS - 4', sizeCode : 33903 , sizeDesc : 'M', qtyPerPack: null ,packType:'Multi-Size Packs',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 839 , masterclassNbr: 20 ,masterclassDesc: 'Womens Tops',classNbr:23 , classDesc: 'WOVEN TOPS', pid: 'ETWS3025-51584', pidDesc: 'WHT/BLK STRIPE RFFL', colorNbr:'100' , colorDesc: 'WHITE', availQty :  20 , currentPack: '10PS - 2', sizeCode : 33904 , sizeDesc : 'L', qtyPerPack: null ,packType:'Multi-Size Packs',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 839 , masterclassNbr: 20 ,masterclassDesc: 'Womens Tops',classNbr:23 , classDesc: 'WOVEN TOPS', pid: 'ETWS3025-51584', pidDesc: 'WHT/BLK STRIPE RFFL', colorNbr:'100' , colorDesc: 'WHITE', availQty :  10 , currentPack: '10PS - 1', sizeCode : 33905 , sizeDesc : 'XL', qtyPerPack: null ,packType:'Multi-Size Packs',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 803 , masterclassNbr: 24 ,masterclassDesc: 'Short Sleeve Tops',classNbr:'09' , classDesc: 'SHORT WOVEN', pid: '111303-73033', pidDesc: '2216D STRP SHRT DRES', colorNbr:'660' , colorDesc: 'MED PINK', availQty :  160 , currentPack: 'Eaches:1', sizeCode : 33902 , sizeDesc : 'S', qtyPerPack: null ,packType:'Eaches',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 803 , masterclassNbr: 24 ,masterclassDesc: 'Short Sleeve Tops',classNbr:'09' , classDesc: 'SHORT WOVEN', pid: '111303-73033', pidDesc: '2216D STRP SHRT DRES', colorNbr:'660', colorDesc: 'MED PINK', availQty :  100 , currentPack: 'Eaches:1', sizeCode : 33903 , sizeDesc : 'M', qtyPerPack: null ,packType:'Eaches',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 803 , masterclassNbr: 24 ,masterclassDesc: 'Short Sleeve Tops',classNbr:'09' , classDesc: 'SHORT WOVEN', pid: '111303-73033', pidDesc: '2216D STRP SHRT DRES', colorNbr:'660' , colorDesc: 'MED PINK', availQty :  240 , currentPack: 'Eaches:1', sizeCode : 33904 , sizeDesc : 'L', qtyPerPack: null ,packType:'Eaches',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 803 , masterclassNbr: 24 ,masterclassDesc: 'Short Sleeve Tops',classNbr:'09' , classDesc: 'SHORT WOVEN', pid: '111303-73033', pidDesc: '2216D STRP SHRT DRES', colorNbr:'660' , colorDesc: 'MED PINK', availQty :  240 , currentPack: 'Eaches:1', sizeCode : 33905 , sizeDesc : 'XL', qtyPerPack: null ,packType:'Eaches',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 803 , masterclassNbr: 24 ,masterclassDesc: 'Short Sleeve Tops',classNbr:'09' , classDesc: 'SHORT WOVEN', pid: '111606-73049', pidDesc: '2160NR SL TIEWST PKT', colorNbr:'700' , colorDesc: 'YELLOW', availQty :  100 , currentPack: 'Eaches:1', sizeCode : 33902 , sizeDesc : 'S', qtyPerPack: null ,packType:'Eaches',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 803 , masterclassNbr: 24 ,masterclassDesc: 'Short Sleeve Tops',classNbr:'09' , classDesc: 'SHORT WOVEN', pid: '111606-73049', pidDesc: '2160NR SL TIEWST PKT', colorNbr:'700' , colorDesc: 'YELLOW', availQty :  200 , currentPack: 'Eaches:1', sizeCode : 33903 , sizeDesc : 'M', qtyPerPack: null ,packType:'Eaches',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 803 , masterclassNbr: 24 ,masterclassDesc: 'Short Sleeve Tops',classNbr:'09' , classDesc: 'SHORT WOVEN', pid: '111606-73049', pidDesc: '2160NR SL TIEWST PKT', colorNbr:'700' , colorDesc: 'YELLOW', availQty :  300 , currentPack: 'Eaches:1', sizeCode : 33904 , sizeDesc : 'L', qtyPerPack: null ,packType:'Eaches',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 803 , masterclassNbr: 24 ,masterclassDesc: 'Short Sleeve Tops',classNbr:'09' , classDesc: 'SHORT WOVEN', pid: '111606-73049', pidDesc: '2160NR SL TIEWST PKT', colorNbr:'700' , colorDesc: 'YELLOW', availQty :  400 , currentPack: 'Eaches:1', sizeCode : 33905 , sizeDesc : 'XL', qtyPerPack: null ,packType:'Eaches',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 803 , masterclassNbr: 24 ,masterclassDesc: 'Short Sleeve Tops',classNbr:'09' , classDesc: 'SHORT WOVEN', pid: '111187-73057', pidDesc: 'ASST PPK TR SHKRBT P', colorNbr:'960' , colorDesc: 'OPEN', availQty :  900 , currentPack: 'Eaches:1', sizeCode : 33902 , sizeDesc : 'S', qtyPerPack: null ,packType:'Eaches',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 803 , masterclassNbr: 24 ,masterclassDesc: 'Short Sleeve Tops',classNbr:'09' , classDesc: 'SHORT WOVEN', pid: '111187-73057', pidDesc: 'ASST PPK TR SHKRBT P', colorNbr:'960' , colorDesc: 'OPEN', availQty :  300 , currentPack: 'Eaches:1', sizeCode : 33903 , sizeDesc : 'M', qtyPerPack: null ,packType:'Eaches',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 803 , masterclassNbr: 24 ,masterclassDesc: 'Short Sleeve Tops',classNbr:'09' , classDesc: 'SHORT WOVEN', pid: '111187-73057', pidDesc: 'ASST PPK TR SHKRBT P', colorNbr:'960' , colorDesc: 'OPEN', availQty :  400 , currentPack: 'Eaches:1', sizeCode : 33904 , sizeDesc : 'L', qtyPerPack: null ,packType:'Eaches',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 803 , masterclassNbr: 24 ,masterclassDesc: 'Short Sleeve Tops',classNbr:'09' , classDesc: 'SHORT WOVEN', pid: '111187-73057', pidDesc: 'ASST PPK TR SHKRBT P', colorNbr:'960' , colorDesc: 'OPEN', availQty :  12 , currentPack: 'Eaches:1', sizeCode : 33905 , sizeDesc : 'XL', qtyPerPack: null ,packType:'Eaches',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 859 , masterclassNbr: 10 ,masterclassDesc: 'Cold Weather',classNbr:59 , classDesc: 'PERFORMANCE PANTS', pid: '2209-29269', pidDesc: 'USPA TRAINER JOGGER', colorNbr:'010' , colorDesc: 'CHARCOAL', availQty :  35 , currentPack: 'Multi-Of: 12', sizeCode : '00000' , sizeDesc : 'NO SIZE', qtyPerPack: null ,packType:'Multi-Of',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 859 , masterclassNbr: 10 ,masterclassDesc: 'Cold Weather',classNbr:59 , classDesc: 'PERFORMANCE PANTS', pid: '2207-29268', pidDesc: 'ZIP PKT FLCE PANT LT', colorNbr:'050' , colorDesc: 'LIGHT/PAST', availQty :  40 , currentPack: 'Multi-Of: 2', sizeCode : '00000' , sizeDesc : 'NO SIZE', qtyPerPack: null ,packType:'Multi-Of',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 859 , masterclassNbr: 10 ,masterclassDesc: 'Cold Weather',classNbr:59 , classDesc: 'PERFORMANCE PANTS', pid: '2207-29267', pidDesc: 'ZIP PKT FLCE PANT CP', colorNbr:'010', colorDesc: 'CHARCOAL', availQty :  40 , currentPack: 'Multi-Of: 4', sizeCode : '00000' , sizeDesc : 'NO SIZE', qtyPerPack: null ,packType:'Multi-Of',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 859 , masterclassNbr: 10 ,masterclassDesc: 'Cold Weather',classNbr:59 , classDesc: 'PERFORMANCE PANTS', pid: '2207-29266', pidDesc: 'ZIP PKT FLCE PANT CL', colorNbr:'410' , colorDesc: 'NAVY', availQty :  39 , currentPack: 'Multi-Of: 2', sizeCode : '00000' , sizeDesc : 'NO SIZE', qtyPerPack: null ,packType:'Multi-Of',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 859 , masterclassNbr: 10 ,masterclassDesc: 'Cold Weather',classNbr:59 , classDesc: 'PERFORMANCE PANTS', pid: '2210-29270', pidDesc: 'EMBOSSED SIDE LEG JO', colorNbr:'050' , colorDesc: 'LIGHT/PAST', availQty :  42 , currentPack: 'Multi-Of: 6', sizeCode : '00000' , sizeDesc : 'NO SIZE', qtyPerPack: null ,packType:'Multi-Of',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 803 , masterclassNbr: 24 ,masterclassDesc: 'Short Sleeve Tops',classNbr:26 , classDesc: 'MAXI/MIDI WOVEN', pid: '24-488-58075', pidDesc: 'OFF WHITE 3Q CROCHET', colorNbr:'110' , colorDesc: 'OPEN WHITE', availQty :  35 , currentPack: 'Multi-Of: 6', sizeCode : '00000' , sizeDesc : 'NO SIZE', qtyPerPack: null ,packType:'Multi-Of',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 803 , masterclassNbr: 24 ,masterclassDesc: 'Short Sleeve Tops',classNbr:26 , classDesc: 'MAXI/MIDI WOVEN', pid: '24-7004-58068', pidDesc: 'TURQ YELLOW DIPDYE S', colorNbr:'440' , colorDesc: 'TURQUOISE/', availQty :  35 , currentPack: 'Multi-Of: 6', sizeCode : '00000' , sizeDesc : 'NO SIZE', qtyPerPack: null ,packType:'Multi-Of',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 803 , masterclassNbr: 24 ,masterclassDesc: 'Short Sleeve Tops',classNbr:26 , classDesc: 'MAXI/MIDI WOVEN', pid: '22-011-58073', pidDesc: 'OFF WHITE BROWN TRIM', colorNbr:'110' , colorDesc: 'OPEN WHITE', availQty :  42 , currentPack: 'Multi-Of: 6', sizeCode : '00000' , sizeDesc : 'NO SIZE', qtyPerPack: null ,packType:'Multi-Of',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 803 , masterclassNbr: 24 ,masterclassDesc: 'Short Sleeve Tops',classNbr:26 , classDesc: 'MAXI/MIDI WOVEN', pid: '24-7003-58067', pidDesc: 'PINK TURQ DIPDYE PAI', colorNbr:'650' , colorDesc: 'PINK', availQty :  36 , currentPack: 'Multi-Of: 6', sizeCode : '00000' , sizeDesc : 'NO SIZE', qtyPerPack: null ,packType:'Multi-Of',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' },
          { deptNbr : 803 , masterclassNbr: 24 ,masterclassDesc: 'Short Sleeve Tops',classNbr:26 , classDesc: 'MAXI/MIDI WOVEN', pid: '24-460-58071', pidDesc: 'OFF WHITE SLS CRCHT', colorNbr:'110' , colorDesc: 'OPEN WHITE', availQty :  37 , currentPack: 'Multi-Of: 6', sizeCode : '00000' , sizeDesc : 'NO SIZE', qtyPerPack: null ,packType:'Multi-Of',  wlpsKey:'123',lineSequence:'12',onOrderBalance:'23',retailPrice:'234',poLineComments:'what',upc:'234',packId:'1234456' }
  
      ];
      
      let data = exampleData.filter((item) => ((item.deptNbr === dept) ));
    
      return (data);
    }

    }
    catch(e){
     console.log(e);
    }
    }


    const submitData  = async (data) =>{ 

      if(data.length === 0){
        informationNotify();
      }else{
        console.log(data);
      try{
        const response= await fetch('/packConfigurationApi/packsData', {
          method: 'POST',
          headers:{'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        })

       if(await response.ok){
        return(1);
       }else{
        console.log(response)
       
        return(0);
       }

      }catch(e){
        console.log(e);
        return(0);
      }
    }

    }


  

export {getDepartments, getDeptData, submitData};

