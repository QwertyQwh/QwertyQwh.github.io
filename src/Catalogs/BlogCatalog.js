import Blog_Acadia from "../BlogContents/Blog_Acadia"
import Blog_AnimPianist from "../BlogContents/Blog_AnimPianist"
import Blog_Auguscript from "../BlogContents/Blog_Auguscript"
import Blog_Test from "../BlogContents/Blog_Test"

export default {
    auguscript:{
        title:"陋室翻新其二——Auguscript",
        content: <Blog_Auguscript />,
        date: {
            month:8,
            day:24,
            year:2023,
        },
        about: '赶在25岁生日之前花两周把长久拖欠的网站做完。主要介绍两年来积攒的dev流程，还有经验教训。',
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
        thumbnail: 'Animation',
        sectionId: 'art',
    },



}