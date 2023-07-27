const express = require('express');
const router = express.Router();

router.get('/skylineinf', function (req, res) {
    res.render('products',{
        'title':'數位地球 | skyline介紹',
        'description':'Skyline 為地理空間創造3D多樣性，將建構地圖點線面，轉換高解析度的3D數位模型，透過可視化的位置服務，構建創新的多元服務體驗。',
        'stylefile':'../assets/css/products.css'
    });
})

router.get('/freetrial', function (req, res) {
    res.render('freetrial',{
        'title':'數位地球 | 軟體試用',
        'description':'Skyline 提供軟體試用服務，透過簡單步驟輕鬆申請3D地理資訊服務。',
        'stylefile':'../assets/css/freetrial.css'
    });
})

router.get('/download', function (req, res) {
    res.render('skylinedownload',{
        'title':'數位地球 | 軟體下載',
        'description':'Skyline 提供軟體下載，支援各項作業系統及各款裝置，提供符合實際作業需求。',
        'stylefile':'../assets/css/skylinedownload.css'
    });
})


module.exports = router;