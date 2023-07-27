const express = require('express');
const router = express.Router();

// router.get('/', function (req, res) {
//     res.render('protfoliointroduct',{
//         'title':'數位地球 | 專案介紹',
//         'description':'數位地球提供多元的3D地理空間服務，並提供skyline軟體的多元服務應用及客製化功能，能使用於各式場景中。',
//         'stylefile':'../assets/css/protfolio.css'
//     });
// })


router.get('/topfive', function (req, res) {
    res.render('protfolio',{
        'title':'數位地球 | top5專案',
        'description':'我們提供多樣的3D地理空間資訊，為各項產業提供最佳的客製化服務，執行的服務專案有陽明山國家公園3D導覽、高雄港三維地理資訊系統、海洋深層水展示平台、原住民族地區溫泉資訊系統等資訊系統服務。',
        'stylefile':'../assets/css/protfolio.css'
    });
})


module.exports = router;