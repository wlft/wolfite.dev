const backgrounds = [
    // 'https://cdn.wolfite.net/bg/m/1.png',
    // 'https://cdn.wolfite.net/bg/m/2.png',
    // 'https://cdn.wolfite.net/bg/m/3.png'
    // '/WDW_BG_t1.png',
    // '/WDW_BG_t2.png',
    // '/WDW_BG_t3.png',
    // '/WDW_BG_t4.png',
    // '/WDW_BG_t5.png',
    // '/WDW_BG_t6.png',
    // '/WDW_BG_t7.png'
    {
        img: 'https://wwstatic.com/ss1/backgrounds/wlftgbg/v1/collections/default-1/SDCORemorseless1.png',
        creator: 'Moho',
        link: 'https://www.roblox.com/users/3532314235/profile'
    },
    {
        img: 'https://wwstatic.com/ss1/backgrounds/wlftgbg/v1/collections/default-1/SDCOTerrifyingInsane1.png',
        creator: 'Moho',
        link: 'https://www.roblox.com/users/3532314235/profile'
    },
    {
        img: 'https://wwstatic.com/ss1/backgrounds/wlftgbg/v1/collections/default-1/SDCOMonthlyObby1.png',
        creator: 'Moho',
        link: 'https://www.roblox.com/users/3532314235/profile'
    },
    {
        img: 'https://wwstatic.com/ss1/backgrounds/wlftgbg/v1/collections/default-1/SDCOMedium.png',
        creator: 'Moho',
        link: 'https://www.roblox.com/users/3532314235/profile'
    },
    {
        img: 'https://wwstatic.com/ss1/backgrounds/wlftgbg/v1/collections/default-1/SDCOImpossibleTower1.png',
        creator: 'or_ob',
        link: 'https://www.roblox.com/users/328437756/profile'
    },
    {
        img: 'https://wwstatic.com/ss1/backgrounds/wlftgbg/v1/collections/default-1/SDCODifficult1.png',
        creator: 'Moho',
        link: 'https://www.roblox.com/users/3532314235/profile'
    },
    {
        img: 'https://wwstatic.com/ss1/backgrounds/wlftgbg/v1/collections/default-1/SDCODifficult2.png',
        creator: 'Moho',
        link: 'https://www.roblox.com/users/3532314235/profile'
    },
    {
        img: 'https://wwstatic.com/ss1/backgrounds/wlftgbg/v1/collections/default-1/XDCOV2MediumEasyVeryEasyEffortless1.png',
        creator: 'Wolfite',
        link: '/'
    },
    // {
    //     img: 'https://cdn.wolfite.net/display/wos/WOS_BG.png',
    //     creator: 'Wolfite',
    //     link: '/'
    // },
    {
        img: 'https://wwstatic.com/ss1/backgrounds/wlftgbg/v1/collections/default-1/XDCOV3Medium1.png',
        creator: 'Wolfite',
        link: '/'
    },
    {
        img: 'https://wwstatic.com/ss1/backgrounds/wlftgbg/v1/collections/default-1/XDCOV3VeryEasy.png',
        creator: 'Wolfite',
        link: '/'
    },
    {
        img: 'https://wwstatic.com/ss1/backgrounds/wlftgbg/v1/collections/default-1/XDCOV3Medium2.png',
        creator: 'Wolfite',
        link: '/'
    }
];

const chosen = backgrounds[Math.floor(Math.random() * backgrounds.length)];
const backgroundElement = document.querySelector('.background');
backgroundElement.style.backgroundImage = `url('${chosen.img}')`;
// const chosen = backgrounds[Math.floor(Math.random() * backgrounds.length)];
// const backgroundElement = document.querySelector('.background');
// backgroundElement.style.backgroundImage = `url('${chosen}')`;

backgroundElement.classList.add('loaded'); // Add the "loaded" class

document.addEventListener("DOMContentLoaded", function(){
//     // setTimeout(() => {  document.getElementById("top").style.top = "0px"; document.getElementById("top").style.opacity = "100%"; }, 100);
    document.getElementById('js-bg-cl-maintext').innerHTML = chosen.creator
    document.getElementById('js-bg-cl-maintext').href = chosen.link
});