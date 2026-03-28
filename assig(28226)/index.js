
const stud = [{name:"shaik",marks:[100,85,70]},
{name:"mohammed",marks:[72,63,78]},
{name:"fairoz",marks:[55,65,78]}];



function Calmarks(marks){
    const total = marks.reduce((sum,mark)=>sum+mark,0);
    return(
        (total/marks.length).toFixed(1)
    );
}


stud.forEach((student)=>{
    const avg = Calmarks(student.marks);
    console.log(student.name+":"+"average marks"+avg);
})