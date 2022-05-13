let sequence1 =  [23, 0, -23, 1, 5, 0];

let sequence = sequence1.filter(function(element, position)
    {return sequence1.indexOf(element) == position;
    })
console.log(sequence);