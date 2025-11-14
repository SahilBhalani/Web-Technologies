//* Evaluate Grades Based on Total Marks and Final Exam

const exam_status = (totalmarks , is_exam) => {
    if(is_exam) {
        return totalmarks >= 90;
    } else {
        return (totalmarks >=89 && totalmarks <=100);
    }
}

//log the result
console.log(exam_status("78", ""));
console.log(exam_status("89", "true"));
console.log(exam_status("99", "true"));