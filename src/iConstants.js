

const getDepartments = () =>{
    let department = [];

    fetch('http://localhost:8080/packConfigurationApi/deptNbrs')
    .then(response => response.json())
    .then(json => department = json)
    .catch(error => console.error(error));

    if(department.length !== 0){
        console.log(department)
        return (department);
    }else{
         department = [{dept:859},{dept:808},{dept:839},{dept:859}];
        return (department);        
 }
}



const getData = (dept) =>{

    let exampleData = []

    fetch('http://localhost:8080/packConfigurationApi/deptNbrs/'+dept)
    .then(response => response.json())
    .then(json => exampleData = json)
    .catch(error => console.error(error));

    if(exampleData.length !== 0){
        console.log(exampleData)
        return (exampleData);
    }else{
    exampleData = [
        { dept : 859 , Z_OPEN_70: 10 , Z_OPEN_71: 'Cold Weather',CLASS_NBR:59 , CLASS_NAME: 'PERFORMANCE PANTS', STYLE_MASTER_SKU: 'CRM7093H-44028', PRODUCT_NAME: 'CVC ENDURANCE FLEECE', COLOR_NBR:'021' , COLOR_NAME: 'DARK GRAY', ON_HAND_TOTAL :  12 , current_pack: 'Multi-Of:1', SIZE_NBR : 10965 , SIZE_NAME : 'S', QTY_PER_PACK: 1 ,Z_OPEN_48:'Eaches', multi:true},
        { dept : 859 , Z_OPEN_70: 10 , Z_OPEN_71: 'Cold Weather',CLASS_NBR:59 , CLASS_NAME: 'PERFORMANCE PANTS', STYLE_MASTER_SKU: 'CRM7093H-44028', PRODUCT_NAME: 'CVC ENDURANCE FLEECE', COLOR_NBR:'021' , COLOR_NAME: 'DARK GRAY', ON_HAND_TOTAL :  200 , current_pack: 'Multi-Of:1', SIZE_NBR : 10970 , SIZE_NAME : 'M', QTY_PER_PACK: 1 ,Z_OPEN_48:'Eaches', multi:true},
        { dept : 859 , Z_OPEN_70: 10 , Z_OPEN_71: 'Cold Weather',CLASS_NBR:59 , CLASS_NAME: 'PERFORMANCE PANTS', STYLE_MASTER_SKU: 'CRM7093H-44028', PRODUCT_NAME: 'CVC ENDURANCE FLEECE', COLOR_NBR:'021' , COLOR_NAME: 'DARK GRAY', ON_HAND_TOTAL :  400 , current_pack: 'Multi-Of:1', SIZE_NBR : 10975 , SIZE_NAME : 'L', QTY_PER_PACK: 1 ,Z_OPEN_48:'Eaches', multi:true},
        { dept : 859 , Z_OPEN_70: 10 , Z_OPEN_71: 'Cold Weather',CLASS_NBR:59 , CLASS_NAME: 'PERFORMANCE PANTS', STYLE_MASTER_SKU: 'CRM7093H-44028', PRODUCT_NAME: 'CVC ENDURANCE FLEECE', COLOR_NBR:'021' , COLOR_NAME: 'DARK GRAY', ON_HAND_TOTAL :  298 , current_pack: 'Multi-Of:1', SIZE_NBR : 10980 , SIZE_NAME : 'XL', QTY_PER_PACK: 1 ,Z_OPEN_48:'Eaches', multi:true},
        { dept : 859 , Z_OPEN_70: 10 , Z_OPEN_71: 'Cold Weather',CLASS_NBR:60 , CLASS_NAME: 'PERFORMANCE HOODIES', STYLE_MASTER_SKU: 'RMT1536-68818', PRODUCT_NAME: 'Kermit the Frog Hoodie', COLOR_NBR:'300' , COLOR_NAME: 'GREEN', ON_HAND_TOTAL :  20 , current_pack: '7PS - 1', SIZE_NBR : 10965 , SIZE_NAME : 'S', QTY_PER_PACK: 1 ,Z_OPEN_48:'Multi-Size Packs', multi:true},
        { dept : 859 , Z_OPEN_70: 10 , Z_OPEN_71: 'Cold Weather',CLASS_NBR:60 , CLASS_NAME: 'PERFORMANCE HOODIES', STYLE_MASTER_SKU: 'RMT1536-68818', PRODUCT_NAME: 'Kermit the Frog Hoodie', COLOR_NBR:'300' , COLOR_NAME: 'GREEN', ON_HAND_TOTAL :  40 , current_pack: '7PS - 2', SIZE_NBR : 10970 , SIZE_NAME : 'M', QTY_PER_PACK: 2 ,Z_OPEN_48:'Multi-Size Packs', multi:true},
        { dept : 859 , Z_OPEN_70: 10 , Z_OPEN_71: 'Cold Weather',CLASS_NBR:60 , CLASS_NAME: 'PERFORMANCE HOODIES', STYLE_MASTER_SKU: 'RMT1536-68818', PRODUCT_NAME: 'Kermit the Frog Hoodie', COLOR_NBR:'300' , COLOR_NAME: 'GREEN', ON_HAND_TOTAL :  40 , current_pack: '7PS - 2', SIZE_NBR : 10975 , SIZE_NAME : 'L', QTY_PER_PACK: 2 ,Z_OPEN_48:'Multi-Size Packs', multi:true},
        { dept : 859 , Z_OPEN_70: 10 , Z_OPEN_71: 'Cold Weather',CLASS_NBR:60 , CLASS_NAME: 'PERFORMANCE HOODIES', STYLE_MASTER_SKU: 'RMT1536-68818', PRODUCT_NAME: 'Kermit the Frog Hoodie', COLOR_NBR:'300' , COLOR_NAME: 'GREEN', ON_HAND_TOTAL :  20 , current_pack: '7PS - 1', SIZE_NBR : 10980 , SIZE_NAME : 'XL', QTY_PER_PACK: 1 ,Z_OPEN_48:'Multi-Size Packs', multi:true},
        { dept : 859 , Z_OPEN_70: 10 , Z_OPEN_71: 'Cold Weather',CLASS_NBR:60 , CLASS_NAME: 'PERFORMANCE HOODIES', STYLE_MASTER_SKU: 'RMT1536-68818', PRODUCT_NAME: 'Kermit the Frog Hoodie', COLOR_NBR:'300' , COLOR_NAME: 'GREEN', ON_HAND_TOTAL :  20 , current_pack: '7PS - 1', SIZE_NBR : 10985 , SIZE_NAME : 'XXL', QTY_PER_PACK: 1 ,Z_OPEN_48:'Multi-Size Packs', multi:true},
        { dept : 808 , Z_OPEN_70: 15 , Z_OPEN_71: 'Businesswear',CLASS_NBR:41 , CLASS_NAME: 'SKIRTS', STYLE_MASTER_SKU: '31321SB-3849-13347', PRODUCT_NAME: 'WHT CROCHET 3 TIER S', COLOR_NBR:'100' , COLOR_NAME: 'WHITE', ON_HAND_TOTAL :  60 , current_pack: '6PS - 1', SIZE_NBR : 32044 , SIZE_NAME : 'SMALL', QTY_PER_PACK: 1 ,Z_OPEN_48:'Multi-Size Packs', multi:true},
        { dept : 808 , Z_OPEN_70: 15 , Z_OPEN_71: 'Businesswear',CLASS_NBR:41 , CLASS_NAME: 'SKIRTS', STYLE_MASTER_SKU: '31321SB-3849-13347', PRODUCT_NAME: 'WHT CROCHET 3 TIER S', COLOR_NBR:'100' , COLOR_NAME: 'WHITE', ON_HAND_TOTAL :  119 , current_pack: '6PS - 2', SIZE_NBR : 32045 , SIZE_NAME : 'MEDIUM', QTY_PER_PACK: 2 ,Z_OPEN_48:'Multi-Size Packs', multi:true},
        { dept : 808 , Z_OPEN_70: 15 , Z_OPEN_71: 'Businesswear',CLASS_NBR:41 , CLASS_NAME: 'SKIRTS', STYLE_MASTER_SKU: '31321SB-3849-13347', PRODUCT_NAME: 'WHT CROCHET 3 TIER S', COLOR_NBR:'100' , COLOR_NAME: 'WHITE', ON_HAND_TOTAL :  120 , current_pack: '6PS - 2', SIZE_NBR : 32046 , SIZE_NAME : 'LARGE', QTY_PER_PACK: 2 ,Z_OPEN_48:'Multi-Size Packs', multi:true},
        { dept : 808 , Z_OPEN_70: 15 , Z_OPEN_71: 'Businesswear',CLASS_NBR:41 , CLASS_NAME: 'SKIRTS', STYLE_MASTER_SKU: '31321SB-3849-13347', PRODUCT_NAME: 'WHT CROCHET 3 TIER S', COLOR_NBR:'100' , COLOR_NAME: 'WHITE', ON_HAND_TOTAL :  60 , current_pack: '6PS - 1', SIZE_NBR : 32047 , SIZE_NAME : 'XLARGE', QTY_PER_PACK: 1 ,Z_OPEN_48:'Multi-Size Packs', multi:true},
        { dept : 808 , Z_OPEN_70: 18 , Z_OPEN_71: 'Womens Pants',CLASS_NBR:42 , CLASS_NAME: 'ALTERNATIVE LENGTHS', STYLE_MASTER_SKU: 'DA1214-25563', PRODUCT_NAME: 'BLK SUZANNE DS CARGO', COLOR_NBR:'001' , COLOR_NAME: 'BLACK', ON_HAND_TOTAL :  1 , current_pack: '6PS - 1', SIZE_NBR : 32044 , SIZE_NAME : 'SMALL', QTY_PER_PACK: 1 ,Z_OPEN_48:'Multi-Size Packs', multi:true},
        { dept : 808 , Z_OPEN_70: 18 , Z_OPEN_71: 'Womens Pants',CLASS_NBR:42 , CLASS_NAME: 'ALTERNATIVE LENGTHS', STYLE_MASTER_SKU: 'DA1214-25563', PRODUCT_NAME: 'BLK SUZANNE DS CARGO', COLOR_NBR:'001' , COLOR_NAME: 'BLACK', ON_HAND_TOTAL :  60 , current_pack: '6PS - 2', SIZE_NBR : 32045 , SIZE_NAME : 'MEDIUM', QTY_PER_PACK: 2 ,Z_OPEN_48:'Multi-Size Packs', multi:true},
        { dept : 808 , Z_OPEN_70: 18 , Z_OPEN_71: 'Womens Pants',CLASS_NBR:42 , CLASS_NAME: 'ALTERNATIVE LENGTHS', STYLE_MASTER_SKU: 'DA1214-25563', PRODUCT_NAME: 'BLK SUZANNE DS CARGO', COLOR_NBR:'001' , COLOR_NAME: 'BLACK', ON_HAND_TOTAL :  120 , current_pack: '6PS - 2', SIZE_NBR : 32046 , SIZE_NAME : 'LARGE', QTY_PER_PACK: 2 ,Z_OPEN_48:'Multi-Size Packs', multi:true},
        { dept : 808 , Z_OPEN_70: 18 , Z_OPEN_71: 'Womens Pants',CLASS_NBR:42 , CLASS_NAME: 'ALTERNATIVE LENGTHS', STYLE_MASTER_SKU: 'DA1214-25563', PRODUCT_NAME: 'BLK SUZANNE DS CARGO', COLOR_NBR:'001' , COLOR_NAME: 'BLACK', ON_HAND_TOTAL :  60 , current_pack: '6PS - 1', SIZE_NBR : 32047 , SIZE_NAME : 'XLARGE', QTY_PER_PACK: 1 ,Z_OPEN_48:'Multi-Size Packs', multi:true},
        { dept : 839 , Z_OPEN_70: 20 , Z_OPEN_71: 'Womens Tops',CLASS_NBR:23 , CLASS_NAME: 'WOVEN TOPS', STYLE_MASTER_SKU: 'ETWS3025-51584', PRODUCT_NAME: 'WHT/BLK STRIPE RFFL', COLOR_NBR:'100' , COLOR_NAME: 'WHITE', ON_HAND_TOTAL :  10 , current_pack: '10PS - 1', SIZE_NBR : 33901 , SIZE_NAME : 'XS', QTY_PER_PACK: 1 ,Z_OPEN_48:'Multi-Size Packs', multi:true},
        { dept : 839 , Z_OPEN_70: 20 , Z_OPEN_71: 'Womens Tops',CLASS_NBR:23 , CLASS_NAME: 'WOVEN TOPS', STYLE_MASTER_SKU: 'ETWS3025-51584', PRODUCT_NAME: 'WHT/BLK STRIPE RFFL', COLOR_NBR:'100' , COLOR_NAME: 'WHITE', ON_HAND_TOTAL :  200 , current_pack: '10PS - 2', SIZE_NBR : 33902 , SIZE_NAME : 'S', QTY_PER_PACK: 2 ,Z_OPEN_48:'Multi-Size Packs', multi:true},
        { dept : 839 , Z_OPEN_70: 20 , Z_OPEN_71: 'Womens Tops',CLASS_NBR:23 , CLASS_NAME: 'WOVEN TOPS', STYLE_MASTER_SKU: 'ETWS3025-51584', PRODUCT_NAME: 'WHT/BLK STRIPE RFFL', COLOR_NBR:'100' , COLOR_NAME: 'WHITE', ON_HAND_TOTAL :  40 , current_pack: '10PS - 4', SIZE_NBR : 33903 , SIZE_NAME : 'M', QTY_PER_PACK: 4 ,Z_OPEN_48:'Multi-Size Packs', multi:true},
        { dept : 839 , Z_OPEN_70: 20 , Z_OPEN_71: 'Womens Tops',CLASS_NBR:23 , CLASS_NAME: 'WOVEN TOPS', STYLE_MASTER_SKU: 'ETWS3025-51584', PRODUCT_NAME: 'WHT/BLK STRIPE RFFL', COLOR_NBR:'100' , COLOR_NAME: 'WHITE', ON_HAND_TOTAL :  20 , current_pack: '10PS - 2', SIZE_NBR : 33904 , SIZE_NAME : 'L', QTY_PER_PACK: 2 ,Z_OPEN_48:'Multi-Size Packs', multi:true},
        { dept : 839 , Z_OPEN_70: 20 , Z_OPEN_71: 'Womens Tops',CLASS_NBR:23 , CLASS_NAME: 'WOVEN TOPS', STYLE_MASTER_SKU: 'ETWS3025-51584', PRODUCT_NAME: 'WHT/BLK STRIPE RFFL', COLOR_NBR:'100' , COLOR_NAME: 'WHITE', ON_HAND_TOTAL :  10 , current_pack: '10PS - 1', SIZE_NBR : 33905 , SIZE_NAME : 'XL', QTY_PER_PACK: 1 ,Z_OPEN_48:'Multi-Size Packs', multi:true},
        { dept : 803 , Z_OPEN_70: 24 , Z_OPEN_71: 'Short Sleeve Tops',CLASS_NBR:'09' , CLASS_NAME: 'SHORT WOVEN', STYLE_MASTER_SKU: '111303-73033', PRODUCT_NAME: '2216D STRP SHRT DRES', COLOR_NBR:'660' , COLOR_NAME: 'MED PINK', ON_HAND_TOTAL :  160 , current_pack: 'Eaches:1', SIZE_NBR : 33902 , SIZE_NAME : 'S', QTY_PER_PACK: 1 ,Z_OPEN_48:'Eaches', multi:true},
        { dept : 803 , Z_OPEN_70: 24 , Z_OPEN_71: 'Short Sleeve Tops',CLASS_NBR:'09' , CLASS_NAME: 'SHORT WOVEN', STYLE_MASTER_SKU: '111303-73033', PRODUCT_NAME: '2216D STRP SHRT DRES', COLOR_NBR:'660', COLOR_NAME: 'MED PINK', ON_HAND_TOTAL :  100 , current_pack: 'Eaches:1', SIZE_NBR : 33903 , SIZE_NAME : 'M', QTY_PER_PACK: 1 ,Z_OPEN_48:'Eaches', multi:true},
        { dept : 803 , Z_OPEN_70: 24 , Z_OPEN_71: 'Short Sleeve Tops',CLASS_NBR:'09' , CLASS_NAME: 'SHORT WOVEN', STYLE_MASTER_SKU: '111303-73033', PRODUCT_NAME: '2216D STRP SHRT DRES', COLOR_NBR:'660' , COLOR_NAME: 'MED PINK', ON_HAND_TOTAL :  240 , current_pack: 'Eaches:1', SIZE_NBR : 33904 , SIZE_NAME : 'L', QTY_PER_PACK: 1 ,Z_OPEN_48:'Eaches', multi:true},
        { dept : 803 , Z_OPEN_70: 24 , Z_OPEN_71: 'Short Sleeve Tops',CLASS_NBR:'09' , CLASS_NAME: 'SHORT WOVEN', STYLE_MASTER_SKU: '111303-73033', PRODUCT_NAME: '2216D STRP SHRT DRES', COLOR_NBR:'660' , COLOR_NAME: 'MED PINK', ON_HAND_TOTAL :  240 , current_pack: 'Eaches:1', SIZE_NBR : 33905 , SIZE_NAME : 'XL', QTY_PER_PACK: 1 ,Z_OPEN_48:'Eaches', multi:true},
        { dept : 803 , Z_OPEN_70: 24 , Z_OPEN_71: 'Short Sleeve Tops',CLASS_NBR:'09' , CLASS_NAME: 'SHORT WOVEN', STYLE_MASTER_SKU: '111606-73049', PRODUCT_NAME: '2160NR SL TIEWST PKT', COLOR_NBR:'700' , COLOR_NAME: 'YELLOW', ON_HAND_TOTAL :  100 , current_pack: 'Eaches:1', SIZE_NBR : 33902 , SIZE_NAME : 'S', QTY_PER_PACK: 1 ,Z_OPEN_48:'Eaches', multi:true},
        { dept : 803 , Z_OPEN_70: 24 , Z_OPEN_71: 'Short Sleeve Tops',CLASS_NBR:'09' , CLASS_NAME: 'SHORT WOVEN', STYLE_MASTER_SKU: '111606-73049', PRODUCT_NAME: '2160NR SL TIEWST PKT', COLOR_NBR:'700' , COLOR_NAME: 'YELLOW', ON_HAND_TOTAL :  200 , current_pack: 'Eaches:1', SIZE_NBR : 33903 , SIZE_NAME : 'M', QTY_PER_PACK: 1 ,Z_OPEN_48:'Eaches', multi:true},
        { dept : 803 , Z_OPEN_70: 24 , Z_OPEN_71: 'Short Sleeve Tops',CLASS_NBR:'09' , CLASS_NAME: 'SHORT WOVEN', STYLE_MASTER_SKU: '111606-73049', PRODUCT_NAME: '2160NR SL TIEWST PKT', COLOR_NBR:'700' , COLOR_NAME: 'YELLOW', ON_HAND_TOTAL :  300 , current_pack: 'Eaches:1', SIZE_NBR : 33904 , SIZE_NAME : 'L', QTY_PER_PACK: 1 ,Z_OPEN_48:'Eaches', multi:true},
        { dept : 803 , Z_OPEN_70: 24 , Z_OPEN_71: 'Short Sleeve Tops',CLASS_NBR:'09' , CLASS_NAME: 'SHORT WOVEN', STYLE_MASTER_SKU: '111606-73049', PRODUCT_NAME: '2160NR SL TIEWST PKT', COLOR_NBR:'700' , COLOR_NAME: 'YELLOW', ON_HAND_TOTAL :  400 , current_pack: 'Eaches:1', SIZE_NBR : 33905 , SIZE_NAME : 'XL', QTY_PER_PACK: 1 ,Z_OPEN_48:'Eaches', multi:true},
        { dept : 803 , Z_OPEN_70: 24 , Z_OPEN_71: 'Short Sleeve Tops',CLASS_NBR:'09' , CLASS_NAME: 'SHORT WOVEN', STYLE_MASTER_SKU: '111187-73057', PRODUCT_NAME: 'ASST PPK TR SHKRBT P', COLOR_NBR:'960' , COLOR_NAME: 'OPEN', ON_HAND_TOTAL :  900 , current_pack: 'Eaches:1', SIZE_NBR : 33902 , SIZE_NAME : 'S', QTY_PER_PACK: 1 ,Z_OPEN_48:'Eaches', multi:true},
        { dept : 803 , Z_OPEN_70: 24 , Z_OPEN_71: 'Short Sleeve Tops',CLASS_NBR:'09' , CLASS_NAME: 'SHORT WOVEN', STYLE_MASTER_SKU: '111187-73057', PRODUCT_NAME: 'ASST PPK TR SHKRBT P', COLOR_NBR:'960' , COLOR_NAME: 'OPEN', ON_HAND_TOTAL :  300 , current_pack: 'Eaches:1', SIZE_NBR : 33903 , SIZE_NAME : 'M', QTY_PER_PACK: 1 ,Z_OPEN_48:'Eaches', multi:true},
        { dept : 803 , Z_OPEN_70: 24 , Z_OPEN_71: 'Short Sleeve Tops',CLASS_NBR:'09' , CLASS_NAME: 'SHORT WOVEN', STYLE_MASTER_SKU: '111187-73057', PRODUCT_NAME: 'ASST PPK TR SHKRBT P', COLOR_NBR:'960' , COLOR_NAME: 'OPEN', ON_HAND_TOTAL :  400 , current_pack: 'Eaches:1', SIZE_NBR : 33904 , SIZE_NAME : 'L', QTY_PER_PACK: 1 ,Z_OPEN_48:'Eaches', multi:true},
        { dept : 803 , Z_OPEN_70: 24 , Z_OPEN_71: 'Short Sleeve Tops',CLASS_NBR:'09' , CLASS_NAME: 'SHORT WOVEN', STYLE_MASTER_SKU: '111187-73057', PRODUCT_NAME: 'ASST PPK TR SHKRBT P', COLOR_NBR:'960' , COLOR_NAME: 'OPEN', ON_HAND_TOTAL :  12 , current_pack: 'Eaches:1', SIZE_NBR : 33905 , SIZE_NAME : 'XL', QTY_PER_PACK: 1 ,Z_OPEN_48:'Eaches', multi:true},
        { dept : 859 , Z_OPEN_70: 10 , Z_OPEN_71: 'Cold Weather',CLASS_NBR:59 , CLASS_NAME: 'PERFORMANCE PANTS', STYLE_MASTER_SKU: '2209-29269', PRODUCT_NAME: 'USPA TRAINER JOGGER', COLOR_NBR:'010' , COLOR_NAME: 'CHARCOAL', ON_HAND_TOTAL :  35 , current_pack: 'Multi-Of: 12', SIZE_NBR : '00000' , SIZE_NAME : 'NO SIZE', QTY_PER_PACK: 12 ,Z_OPEN_48:'Multi-Of', multi:true},
        { dept : 859 , Z_OPEN_70: 10 , Z_OPEN_71: 'Cold Weather',CLASS_NBR:59 , CLASS_NAME: 'PERFORMANCE PANTS', STYLE_MASTER_SKU: '2207-29268', PRODUCT_NAME: 'ZIP PKT FLCE PANT LT', COLOR_NBR:'050' , COLOR_NAME: 'LIGHT/PAST', ON_HAND_TOTAL :  40 , current_pack: 'Multi-Of: 2', SIZE_NBR : '00000' , SIZE_NAME : 'NO SIZE', QTY_PER_PACK: 2 ,Z_OPEN_48:'Multi-Of', multi:true},
        { dept : 859 , Z_OPEN_70: 10 , Z_OPEN_71: 'Cold Weather',CLASS_NBR:59 , CLASS_NAME: 'PERFORMANCE PANTS', STYLE_MASTER_SKU: '2207-29267', PRODUCT_NAME: 'ZIP PKT FLCE PANT CP', COLOR_NBR:'010', COLOR_NAME: 'CHARCOAL', ON_HAND_TOTAL :  40 , current_pack: 'Multi-Of: 4', SIZE_NBR : '00000' , SIZE_NAME : 'NO SIZE', QTY_PER_PACK: 4 ,Z_OPEN_48:'Multi-Of', multi:true},
        { dept : 859 , Z_OPEN_70: 10 , Z_OPEN_71: 'Cold Weather',CLASS_NBR:59 , CLASS_NAME: 'PERFORMANCE PANTS', STYLE_MASTER_SKU: '2207-29266', PRODUCT_NAME: 'ZIP PKT FLCE PANT CL', COLOR_NBR:'410' , COLOR_NAME: 'NAVY', ON_HAND_TOTAL :  39 , current_pack: 'Multi-Of: 2', SIZE_NBR : '00000' , SIZE_NAME : 'NO SIZE', QTY_PER_PACK: 2 ,Z_OPEN_48:'Multi-Of', multi:true},
        { dept : 859 , Z_OPEN_70: 10 , Z_OPEN_71: 'Cold Weather',CLASS_NBR:59 , CLASS_NAME: 'PERFORMANCE PANTS', STYLE_MASTER_SKU: '2210-29270', PRODUCT_NAME: 'EMBOSSED SIDE LEG JO', COLOR_NBR:'050' , COLOR_NAME: 'LIGHT/PAST', ON_HAND_TOTAL :  42 , current_pack: 'Multi-Of: 6', SIZE_NBR : '00000' , SIZE_NAME : 'NO SIZE', QTY_PER_PACK: 6 ,Z_OPEN_48:'Multi-Of', multi:true},
        { dept : 803 , Z_OPEN_70: 24 , Z_OPEN_71: 'Short Sleeve Tops',CLASS_NBR:26 , CLASS_NAME: 'MAXI/MIDI WOVEN', STYLE_MASTER_SKU: '24-488-58075', PRODUCT_NAME: 'OFF WHITE 3Q CROCHET', COLOR_NBR:'110' , COLOR_NAME: 'OPEN WHITE', ON_HAND_TOTAL :  35 , current_pack: 'Multi-Of: 6', SIZE_NBR : '00000' , SIZE_NAME : 'NO SIZE', QTY_PER_PACK: 6 ,Z_OPEN_48:'Multi-Of', multi:true},
        { dept : 803 , Z_OPEN_70: 24 , Z_OPEN_71: 'Short Sleeve Tops',CLASS_NBR:26 , CLASS_NAME: 'MAXI/MIDI WOVEN', STYLE_MASTER_SKU: '24-7004-58068', PRODUCT_NAME: 'TURQ YELLOW DIPDYE S', COLOR_NBR:'440' , COLOR_NAME: 'TURQUOISE/', ON_HAND_TOTAL :  35 , current_pack: 'Multi-Of: 6', SIZE_NBR : '00000' , SIZE_NAME : 'NO SIZE', QTY_PER_PACK: 6 ,Z_OPEN_48:'Multi-Of', multi:true},
        { dept : 803 , Z_OPEN_70: 24 , Z_OPEN_71: 'Short Sleeve Tops',CLASS_NBR:26 , CLASS_NAME: 'MAXI/MIDI WOVEN', STYLE_MASTER_SKU: '22-011-58073', PRODUCT_NAME: 'OFF WHITE BROWN TRIM', COLOR_NBR:'110' , COLOR_NAME: 'OPEN WHITE', ON_HAND_TOTAL :  42 , current_pack: 'Multi-Of: 6', SIZE_NBR : '00000' , SIZE_NAME : 'NO SIZE', QTY_PER_PACK: 6 ,Z_OPEN_48:'Multi-Of', multi:true},
        { dept : 803 , Z_OPEN_70: 24 , Z_OPEN_71: 'Short Sleeve Tops',CLASS_NBR:26 , CLASS_NAME: 'MAXI/MIDI WOVEN', STYLE_MASTER_SKU: '24-7003-58067', PRODUCT_NAME: 'PINK TURQ DIPDYE PAI', COLOR_NBR:'650' , COLOR_NAME: 'PINK', ON_HAND_TOTAL :  36 , current_pack: 'Multi-Of: 6', SIZE_NBR : '00000' , SIZE_NAME : 'NO SIZE', QTY_PER_PACK: 6 ,Z_OPEN_48:'Multi-Of', multi:true},
        { dept : 803 , Z_OPEN_70: 24 , Z_OPEN_71: 'Short Sleeve Tops',CLASS_NBR:26 , CLASS_NAME: 'MAXI/MIDI WOVEN', STYLE_MASTER_SKU: '24-460-58071', PRODUCT_NAME: 'OFF WHITE SLS CRCHT', COLOR_NBR:'110' , COLOR_NAME: 'OPEN WHITE', ON_HAND_TOTAL :  37 , current_pack: 'Multi-Of: 6', SIZE_NBR : '00000' , SIZE_NAME : 'NO SIZE', QTY_PER_PACK: 6 ,Z_OPEN_48:'Multi-Of', multi:true}

    ];

    let data = exampleData.filter((item) => ((item.dept === dept) ));
  
    return (data);
    }
    }


    const submitData = (data) =>{ 
             fetch('http://localhost:8080/packConfigurationApi/packsData', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({data})
            })
            .catch(error => alert(error));
    }

export {getDepartments, getData, submitData};

