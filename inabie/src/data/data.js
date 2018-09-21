var data =[{
    title: "All Day - prueba ",
    startTime: new Date(2018, 8, 24),
    endTime: new Date(2018, 8, 24),
    allDay: true
}
    , {
        title: "Comida ",
        startTime: new Date(2018, 8, 25),
        endTime: new Date(2018, 8, 25),
        allDay: true
    }


]

function getData() {
    return data;
}



export {getData};