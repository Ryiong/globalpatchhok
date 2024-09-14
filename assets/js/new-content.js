const newPosts = document.querySelectorAll('.news-homepage');
const newPostsTitle = document.querySelectorAll('.news-homepage .news-homepage_title');
const newPostsDate = document.querySelectorAll('.news-homepage .news-homepage_date');

const swiperContentLastest = document.querySelectorAll(".swiper-slide-content.relative.loading-newskin_homepage")
const tagSkinLastest = document.querySelectorAll(".swiper-slide-content i")
const thumbContentLastest = document.querySelectorAll(".swiper-slide-content img")
const titleContentLastest = document.querySelectorAll(".swiper-slide-content p")
// Get data
fetch('https://script.google.com/macros/s/AKfycbz-V3Acodgu-QF-4qYy0Vsp3GfrGKIAUho6SujvtcQMwlLBIS0AV1FVIwG4IVKkukAi/exec')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        thumbContentLastest.forEach((item, index) => {
            item.src = data.data[index].bigImg;
            item.alt = data.data[index].nameSkinVN;
        })
        titleContentLastest.forEach((item, index) => {
            item.innerText = data.data[index].nameHeroVN + "_" + data.data[index].nameSkinVN;
        })
        tagSkinLastest.forEach((item, index) => {
            item.style.background = "url('" + data.data[index].tagSkin + "') 0 0 /100% 100% no-repeat"
        })
        swiperContentLastest.forEach((item) => {
            item.classList.remove('loading-newskin_homepage')
        })
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

$.ajax({
    url: 'https://globalhok.blogspot.com/feeds/posts/summary?alt=json&start-index=1&max-results=4',
    type: 'GET',
    dataType: 'jsonp',
    data: {
        'orderby': 'published',
        'max-results': '4',
        alt: 'json'
    },
}).done(function (json) {
    json.feed.entry.forEach((item, index) => {
        item.link.forEach((link, indexLink) => {
            if (link.rel == 'alternate') {
                newPosts[index].href = link.href
            }
        })
        newPostsTitle[index].innerText = item.title.$t
        newPostsDate[index].innerText = item.published.$t.slice(8, 10) + "/" + item.published.$t.slice(5, 7)
        console.log(item)
    })
})