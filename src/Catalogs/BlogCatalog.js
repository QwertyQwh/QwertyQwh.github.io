import Blog_Acadia from "../BlogContents/Blog_Acadia"
import Blog_AnimPianist from "../BlogContents/Blog_AnimPianist"
import Blog_Auguscript from "../BlogContents/Blog_Auguscript"
import Blog_Automaton from "../BlogContents/Blog_Automaton"
import Blog_Diary from "../BlogContents/Blog_Diary"
import Blog_Hyperbolic from "../BlogContents/Blog_Hyperbolic"
import Blog_MeetFresh from "../BlogContents/Blog_Meetfresh"
import Blog_Renovate from "../BlogContents/Blog_Renovate"
import Blog_JSF from "../BlogContents/Blog_SJF"
import Blog_Solidity from "../BlogContents/Blog_Solidity"
import Blog_Test from "../BlogContents/Blog_Test"
import Blog_Tibet from "../BlogContents/Blog_Tibet"

export default {
    sjf:{
        title:'读书笔记————What\'s Our Problem',
        content: <Blog_JSF />,
        date: {
            month:11,
            day:10,
            year:2023,
        },
        about: "",
        thumbnail: 'What\'s Our Problem',
        sectionId: 'writing',
    },
    auguscript:{
        title:"陋室翻新·其二——Auguscript",
        content: <Blog_Auguscript />,
        date: {
            month:8,
            day:24,
            year:2023,
        },
        about: '赶在25岁生日之前花两周把长久拖欠的网站做完。主要介绍一下两年来积攒的dev流程，还有关于时间利用的一点感想。',
        thumbnail: 'Auguscript',
        sectionId: 'coding',
    },
    mouseAutomaton:{
        title:'Automaton Animation',
        content: <Blog_Automaton />,
        date: {
            month:6,
            day:28,
            year:2023,
        },
        about: '做了一只上发条的老鼠。',
        thumbnail: 'Automaton',
        sectionId: 'art',
    },
    meetFresh:{
        title:'MeetFresh Illustration',
        content: <Blog_MeetFresh />,
        date: {
            month:6,
            day:7,
            year:2023,
        },
        about: 'Illustration of a boba shop in Newport',
        thumbnail: 'MeetFresh',
        sectionId: 'art',
    },
    tibet1:{
        title:'西藏·壹',
        content: <Blog_Tibet />,
        date: {
            month:5,
            day:20,
            year:2023,
        },
        about: '五月底了，正是上海封城一周年。去年从上海逃跑，一路辗转去骑川藏的这月余，无论是于宏大的国家还是于我渺小的个人，都可以算是“历史事件”',
        thumbnail: '西藏·壹',
        sectionId: 'writing',
    },
    acadia:{
        content: <Blog_Acadia />,
        title: "Acadia",
        date: {
            month:12,
            day:31,
            year:2022,
        },
        about:"2022最后一天补交作业。",
        thumbnail: 'Acadia',
        sectionId: 'writing'
    },
    glmaze:{
        external: true,
        title:'GLMaze',
        date: {
            month:4,
            day:30,
            year:2023,
        },
        about: 'A random maze generator using WebGL, featuring wire/solid modes, color modes, real-time shadows etc. ',
        thumbnail:'GLMaze',
        sectionId: 'coding',
        url: "https://glmaze.netlify.app",
    },
    solidity:{
        title:'Solidity x Unity',
        content: <Blog_Solidity />,
        date: {
            month:2,
            day:25,
            year:2022,
        },
        about: '这次用智能合约和Unity做了一个简单的石头剪刀布Demo。 ',
        thumbnail:'Solidity',
        sectionId: 'coding',
    },
    jsBalloon:{
        external: true,
        title:'JS Balloons',
        date: {
            month:2,
            day:14,
            year:2022,
        },
        about: 'A javascript widget for valentine ) ',
        thumbnail:'JSBalloon',
        sectionId: 'coding',
        url: "https://jsheart.netlify.app/",
    },

    renovate:{
        title:'陋室翻新·其一',
        content: <Blog_Renovate />,
        date: {
            month:1,
            day:8,
            year:2022,
        },
        about: '大约一个礼拜前收到了2021年最后一张信用卡账单，上面清清楚楚记载了12月以来的无度挥霍——我指买了永远也不会看的书。',
        thumbnail: '陋室翻新',
        sectionId: 'writing',
    },
    animPianist:{
        title:'小动画——Masked Pianist',
        content: <Blog_AnimPianist />,
        date: {
            month:10,
            day:8,
            year:2021,
        },
        about: '21年中秋假期憋在家做的小动画',
        thumbnail: '小动画',
        sectionId: 'art',
    },
    hyperbolic:{
        title:'Hyperbolic Raytracer',
        content: <Blog_Hyperbolic />,
        date: {
            month:5,
            day:1,
            year:2020,
        },
        about: 'A brief journey into the hyperbolic space, where five squares share a common corner.',
        thumbnail: 'Hyperbolic',
        sectionId: 'coding',
    },
    diary1:{
        title:'日记碎片',
        content: <Blog_Diary />,
        date: {
            month:10,
            day:10,
            year:2018,
        },
        about: '',
        thumbnail: '日记',
        sectionId: 'writing',
    },




}