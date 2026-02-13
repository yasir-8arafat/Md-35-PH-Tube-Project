// All Load fatching Function
const loadCategorys = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCategorys(data))
}
const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((res) => res.json())
        .then((data) => displayVideos(data))
}


// All Executive Function

// category executation functioon
const displayCategorys = (obj) => {
    let arrOfObj = obj.categories;
    let container = document.getElementById("category-Container");
    for (let cat of arrOfObj) {
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button class="btn hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;
        container.appendChild(btnDiv);
    }
}

// videos executation function
// by using for OFF loop
// const displayvideos = (videoobj) => {
//     let arrfromObj = videoobj.videos;
//     let Cardcontainer = document.getElementById("video-card-container");
//     for (let vid of arrfromObj) {
//         const videoDiv = document.createElement("div");
//         videoDiv.innerHTML = `
//          <!-- img thumnail Div -->
//                 <div class="w-full rounded-lg relative">
//                     <!-- duration -->
//                     <button
//                         class="text-xs font-normalF text-white py-1 px-2 rounded-md bg-[#171717] absolute bottom-3 right-3">3hrs
//                         56
//                         min ago</button>
//                     <!-- thubnail img -->
//                     <img class="w-full h-52 rounded-lg" src="${vid.thumbnail}" alt="">
//                 </div>
//                 <!-- profile Title DIv -->
//                 <div class="flex gap-3 mt-4 px-1">
//                     <!-- profile PIC DIV -->
//                     <div class="w-[50px] h-[50px] rounded-full">
//                         <img class="w-full h-full rounded-full border-2 border-gray-400" src="${vid.authors[0].profile_picture}" alt="">
//                     </div>
//                     <!-- title Description Div -->
//                     <div class="space-y-2">
//                         <h2 class="text-base font-bold text-[#171717]">${vid.title}</h2>
//                         <!-- profile name -->
//                         <p class="text-sm font-normal text-[#17171770]">${vid.authors[0].profile_name}<span
//                                 class="text-[#2568EF] ml-2"><i class="fa-solid fa-certificate"></i></span></p>
//                         <p class="text-sm font-normal text-[#17171770]">${vid.others.views} views</p>
//                     </div>
//                 </div>
//         `;
//         videoDiv.className = "w-[300px] bg-white drop-shadow-lg rounded-lg pb-3"
//         Cardcontainer.appendChild(videoDiv);
//     }
// }


// by using for each loop & according to video
const displayVideos = (VidArr) => {
    const videosArr = VidArr.videos;
    const videoContainer = document.getElementById("video-container");
    videosArr.forEach(video => {
        const videoCard = document.createElement("div");
        videoCard.innerHTML = `
        <!-- card - 1 -->
            <div class="card bg-base-100 w-[300px]">
                <figure class="relative">
                    <img class="w-full h-48 object-cover" src="${video.thumbnail}" alt="Shoes" />
                    <span class="text-xs text-white font-normal bg-[#171717] absolute right-3 bottom-3 p-1 rounded">3hrs
                        56 min
                        ago</span>
                </figure>
                <!-- profile details -->
                <div class="flex gap-3 pt-5 pb-3 pl-1">
                    <!-- profilePic -->
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-10 h-10 rounded-full ring-2 ring-offset-2">
                            <img class="w-full h-full object-cover" src="${video.authors[0].profile_picture}" />
                        </div>
                    </div>
                    <!-- intro -->
                    <div class="space-y-2">
                        <h2 class="text-base font-bold text-[#171717]">${video.title}</h2>
                        <div class="flex items-center gap-1">
                            <p class="text-sm font-normal text-[#17171770]">${video.authors[0].profile_name}</p>
                            <img class="w-5" src="asset/icons8-verified-48.png" alt="">
                        </div>
                        <p class="text-sm font-normal text-[#17171770]">${video.others.views}</p>
                    </div>
                </div>
            </div>
        `
        videoContainer.appendChild(videoCard);
    });
}



// all function clling
loadCategorys();
loadVideos();