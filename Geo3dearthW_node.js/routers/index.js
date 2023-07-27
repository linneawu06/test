const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
    res.render('index',{
        'title':'數位地球',
        'description':'數位地球科技 有限公司 ，以 skyline 多維 地理空間 資訊服務結合多產業的跨領域發展， 數位地球科技 為各項專案提供3D可視化技術，導入創新服務進行規模性管理、降低工作成本、計畫性風險評估、分析衡量投入資源、檢核系統汰換等，用智慧科技深入城市，用技術解決產業難題。',
        'stylefile':'../assets/css/index.css'
    });
})

router.get('/about', function (req, res) {
    res.render('about',{
        'title':'數位地球 | 關於我們',
        'description':'數位地球為地理資訊服務平台(SkylineGlobe)台灣地區總代理，有最專業的技術支援服務，多年的開發經驗落實運用於環境影響評估、資源管理、國土規劃、都市和區域計畫、交通管理、森林經營、運輸規劃、生態保育、考古調查等領域。',
        'stylefile':'../assets/css/about.css'
    });
})

router.get('/contact', function (req, res) {
    res.render('contact',{
        'title':'數位地球 | 聯絡我們',
        'description':'數位地球專業服務，詳細合作方案請於我們聯絡洽詢。',
        'stylefile':'../assets/css/contact.css'
    });
})

router.get('/privacy', function (req, res) {
    res.render('privacy',{
        'title':'數位地球 | 隱私權政策',
        'description':'為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策。',
        'stylefile':'../assets/css/privacy.css'
    });
})

router.get('/sitmap', function (req, res) {
    res.render('sitmap',{
        'title':'數位地球 | 網站導覽',
        'description':'提供給您相關 Skyline軟體 與 3D地理空間資訊 網站瀏覽服務。',
        'stylefile':'../assets/css/sitmap.css'
    });
})

module.exports = router;