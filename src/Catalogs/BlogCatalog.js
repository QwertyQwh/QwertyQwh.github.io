import Blog_Acadia from "../BlogContents/Blog_Acadia"
import Blog_AnimPianist from "../BlogContents/Blog_AnimPianist"
import Blog_Test from "../BlogContents/Blog_Test"

export default {
    test1:{
        content: <Blog_Test />,
        title: "This is the title中文也要考虑",
        date: {
            month:8,
            day:25,
            year:2023,
        },
        about:"A bunch of desc",
        sectionId: 'coding',
        thumbnail: '0',
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
    testwriting:{
        content: <Blog_Test />,
        title: "Thie is TestWriting",
        date: {
            month:8,
            day:25,
            year:2023,
        },
        about:"A bunch of desc",
        thumbnail: '5',
        sectionId: 'writing'
    },
    testArt:{
        content: <Blog_Test />,
        title: "Thie is TestArt",
        date: {
            month:8,
            day:25,
            year:2023,
        },
        about:"A bunch of desc",
        thumbnail: '5',
        sectionId: 'art'
    }

}