import ModelInk from "../Pages/Sections/Colorie/ModelInk"
import ModelKeyboard from "../Pages/Sections/Colorie/ModelKeyboard"
import ModelPortal from "../Pages/Sections/Colorie/ModelPortal"
import Section_Colorie from "../Pages/Sections/Colorie/Section_Colorie"
export default {
    coding: {
        id : "coding",
        name : "coding",
        model: <ModelKeyboard />

    },
    writing:{
        name:'writing',
        id:'writing',
        model: <ModelInk />
    },
    art:{
        name: 'art',
        id: 'art',
        model: <ModelPortal />
    }
}