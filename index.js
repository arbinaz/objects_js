var student={
    name:'John',
    age:'25',
    mobile:8147162961,
    adress:{
        city:'Bangalore',
        state:'KA',
        pin:560063
    }
}
// getting value using dot notation
console.log(student.name)
// getting value using bracket notation
console.log(student['name']);
// adding key-value to the object 
student.graduated=true;
console.log(student);
// function inside object and array inside object
var music={
    name:'acess101 js',
    play:function(){
        console.log('Video played')
        return true
    },
    timer:[0.32,45]
}
console.log(music.name);
console.log(music.play());
console.log(music.timer[1])

// Assigning one object to another
var student2=student
console.log(student2)
