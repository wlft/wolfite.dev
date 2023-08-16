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
        img: 'https://cdn.wolfite.net/bg/v2/WDWBG_1.png',
        creator: 'Moho',
        link: 'https://www.roblox.com/users/3532314235/profile'
    },
    {
        img: 'https://cdn.wolfite.net/bg/v2/WDWBG_2.png',
        creator: 'Moho',
        link: 'https://www.roblox.com/users/3532314235/profile'
    },
    {
        img: 'https://cdn.wolfite.net/bg/v2/WDWBG_3.png',
        creator: 'Moho',
        link: 'https://www.roblox.com/users/3532314235/profile'
    },
    {
        img: 'https://cdn.wolfite.net/bg/v2/WDWBG_4.png',
        creator: 'Moho',
        link: 'https://www.roblox.com/users/3532314235/profile'
    },
    {
        img: 'https://cdn.wolfite.net/bg/v2/WDWBG_5.png',
        creator: 'or_ob',
        link: 'https://www.roblox.com/users/328437756/profile'
    },
    {
        img: 'https://cdn.wolfite.net/bg/v2/WDWBG_6.png',
        creator: 'Moho',
        link: 'https://www.roblox.com/users/3532314235/profile'
    },
    {
        img: 'https://cdn.wolfite.net/bg/v2/WDWBG_7.png',
        creator: 'Moho',
        link: 'https://www.roblox.com/users/3532314235/profile'
    },
    {
        img: 'https://cdn.wolfite.net/bg/v2/WDWBG_8.png',
        creator: 'Wolfite',
        link: '/'
    },
    {
        img: 'https://cdn.wolfite.net/display/wos/WOS_BG.png',
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