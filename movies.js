const movies = [
    {title : 'a' , year : 2022 , rating :4.5},
    {title : 'b' , year : 2021 , rating :3.5},
    {title : 'c' , year : 2022 , rating :3.5},
    {title : 'd' , year : 2022 , rating :5}
];

const result = movies
    .filter(value=>value.year === 2022 && value.rating >= 4)
    .sort((m1 , m2)=>{
        m1.rating-m2.rating
    })
    .reverse()
    .map(value => value.title)

    console.log(result)