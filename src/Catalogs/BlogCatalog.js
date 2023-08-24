import Blog_Acadia from "../BlogContents/Blog_Acadia"
import Blog_AnimPianist from "../BlogContents/Blog_AnimPianist"
import Blog_Auguscript from "../BlogContents/Blog_Auguscript"
import Blog_Diary from "../BlogContents/Blog_Diary"
import Blog_Test from "../BlogContents/Blog_Test"
import Blog_Tibet from "../BlogContents/Blog_Tibet"

export default {
    auguscript:{
        title:"陋室翻新其二——Auguscript",
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