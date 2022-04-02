
export const tareasReducer = (state = [], action) => {

    switch (action?.type) {
        case 'agregar':

            return [...state, action.payload]

        case 'borrar':

            return state.filter(tarea => tarea.id !== action.payload)
            
        case 'actualizar':
            return state.map(tarea => 
                (tarea.id === action.payload) 
                ? { ...tarea, terminada: !tarea.terminada } 
                : tarea
                )

        /*  case 'actualizar' :
 
             return state.map(tarea => {
                 if(tarea.id === action.payload){
                     return {
                         ...tarea,
                         terminada : !tarea.terminada
                     }
                 }else{
                     return tarea
                 }
             }) */

        default:
            return state;
    }

};
