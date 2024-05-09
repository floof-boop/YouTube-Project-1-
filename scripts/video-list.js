const video = [
    {
        name: "Talking Tech and AI with Google CEO Sundar Pichai!",
        author: "Marques Brownlee",
        stats: "3.4M views &#183; 6 months ago",
        thumbnail: "thumbnails/thumbnail-1.webp",
        time: "14:20",
        channel: "channel_preview/channel-1.jpeg"
    },
    {
        name: "Try Not To Laugh Challenge #9",
        author: "Markiplier",
        stats: "19M views &#183; 4 years ago",
        thumbnail: "thumbnails/thumbnail-2.webp",
        time: "8:22",
        channel: "channel_preview/channel-2.jpeg"
    },
    {
        name: "5 weird motherboards that shouldn't exist",
        author: "Linus Tech Tips",
        stats: "3.8M views &#183; 2 years ago",
        thumbnail: "thumbnails/thumbnail-3.webp",
        time: "14:22",
        channel: "channel_preview/channel-3.jpeg"
    },
    {
        name: "The Simplest Math Problem No One Can Solve - Collatz Conjecture",
        author: "Veritasium",
        stats: "18M views &#183; 4 months ago",
        thumbnail: "thumbnails/thumbnail-4.webp",
        time: "22:09",
        channel: "channel_preview/channel-4.jpeg"
    },
    {
        name: "Anything You Can Fit In The Circle I&apos;ll Pay For",
        author: "MrBeast",
        stats: "141M views &#183; 1 year ago",
        thumbnail: "thumbnails/thumbnail-6.webp",
        time: "19:59",
        channel: "channel_preview/channel-6.jpeg"
    },
    {
        name: "Kadane's Algorithm to Maximum Sum Subarray Problem",
        author: "CS Dojo",
        stats: "519K views &#183; 5 years ago",
        thumbnail: "thumbnails/thumbnail-5.webp",
        time: "11:17",
        channel: "channel_preview/channel-5.jpeg"
    },
    {
        name: "I TOLD YOU AMD Would RELEASE IT!",
        author: "Gamer Meld",
        stats: "2.6K views &#183; 1 hour ago",
        thumbnail: "thumbnails/thumbnail-7.webp",
        time: "4:46",
        channel: "channel_preview/channel-7.jpeg"
    },
    {
        name: "Nvidia G-Sync vs AMD FreeSync vs Adaptive Sync in 2024",
        author: "Monitors Unboxed",
        stats: "374K views &#183; 2 months ago",
        thumbnail: "thumbnails/thumbnail-8.webp",
        time: "16:42",
        channel: "channel_preview/channel-8.jpeg"
    },
    {
        name: "The Deadliest Virus on Earth",
        author: "Kurzgesagt &#8722; In a Nutshell",
        stats: "14M views &#183; 1 year ago",
        thumbnail: "thumbnails/thumbnail-9.webp",
        time: "18:23",
        channel: "channel_preview/channel-9.jpeg"
    },
    {
        name: "WHY IS THE HEAP SO SLOW?",
        author: "Core Dumped",
        stats: "143K views &#183; 2 months ago",
        thumbnail: "thumbnails/thumbnail-10.webp",
        time: "17:53",
        channel: "channel_preview/channel-10.jpeg"
    }
];

let vidHTML = '';

video.forEach((vd)=>{
    vidHTML += `
        <div class="video-preview">
            <div class="thumbnail-row">
                <img class="thumbnail1" src="${vd.thumbnail}">
                <div class="video-time">${vd.time}</div>
            </div>
            <div class="video-info-grid">
                <div class="channel-div">
                    <img class="profile-pic" src="${vd.channel}">
                </div>
                <div class="video-info">
                    <p class="video-title">
                        ${vd.name}
                    </p>
                    <p class="video-author">
                        ${vd.author}
                    </p>
                    <p class="video-stats">
                        ${vd.stats}
                    </p>
                </div>
            </div>          
        </div>
    `;
});
document.querySelector('.js-grid').innerHTML = vidHTML;