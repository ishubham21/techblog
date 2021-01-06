// window.addEventListener('load', () => {
//     const loader = document.querySelector('.loader')
//     loader.classList.add('hide-loader')
// })

//function to fetch data from Medium
async function getBlogData() {
    try {
        const req = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40ishubham21&api_key=6aeot173lmt9ws2eeszxffmqlvwifk6rkuw0f4wh')

        const parsedReq = await req.json()

        return parsedReq
    } catch (error) {
        console.log('There is some error in fetching the request');
    }
    
}

var blogData = getBlogData()
blogData.then(data => {console.log(data.items[0]);})
.catch(err => console.log('Maybe an error has occured'))