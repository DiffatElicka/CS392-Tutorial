// const getTimeslot = (course) => {
//     return course.meets;
// }


const timeStringToNumber = (course) => {
    // console.log(course);
    var meets = course.meets;
    if(meets == '') return [0,0];
    var [days, times] = meets.split(' ');
    var [begin, end] = times.split('-');
    // console.log([days, begin, end]);
    return [days, begin, end];
}


//write some stupid code
const areTimesConflicting = (timeStr1, timeStr2) => {
    const days1 = timeStr1.split(" ")[0];
    const time1 = timeStr1.split(" ")[1];
    const days2 = timeStr2.split(" ")[0];
    const time2 = timeStr2.split(" ")[1];
  
    // Check for overlapping days
    const overlappingDays = [...days1].some((day1) => [...days2].includes(day1));
    // console.log(overlappingDays);
    if (!overlappingDays) {
      return false;
    }
  
    // Parse time ranges
    const [start1, end1] = time1.split("-").map((t) => parseInt(t.replace(":", ""), 10));
    const [start2, end2] = time2.split("-").map((t) => parseInt(t.replace(":", ""), 10));
  
    // Check for overlapping time ranges
    const overlappingTime = (start1 < end2 && start2 < end1);
    console.log(overlappingTime);
    return overlappingTime;
  }


const isConflict = (currents, select ) => {
    // var [days, begin, end] = timeStringToNumber(select);

    for (const e of currents) {
        if(areTimesConflicting(select.meets, e.meets) && select != e){
            return true;
        }
    }
        

    return false;

}

export default isConflict;