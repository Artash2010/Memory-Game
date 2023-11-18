let all = document.querySelectorAll(".but");
let img = [
  "https://i.pinimg.com/originals/09/9b/49/099b499707d33fef23120c6cc0414811.jpg",
  "https://www.advantour.com/russia/images/symbolics/russia-flag.jpg",
  "https://img.freepik.com/premium-photo/3d-illustration-flag-of-ukraine-flag-ukraine-background-closeup-of-the-flag-of-the-ukraine_42071-2234.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Flag_of_Georgia_official.svg/1200px-Flag_of_Georgia_official.svg.png",
  "https://png.pngtree.com/thumb_back/fw800/background/20220620/pngtree-japan-flag-background-image_1414709.jpg",
  "https://flagfs.ru/content/flagi-stran/frans.jpeg",
  "https://images.prom.ua/3103938624_bolshoj-gosudarstvennyj-flag.jpg",
  "https://images.prom.ua/1679701640_w640_h640_flag-germanii.jpg",
  "https://img.freepik.com/premium-vector/spanish-flag-spain-country-national-identity_8071-1617.jpg",
  "https://images.prom.ua/3129178610_w600_h600_3129178610.jpg",
  "https://napoli1.com/_pu/22/24241471.jpg",
  "https://s9.travelask.ru/system/images/files/001/453/442/wysiwyg_jpg/329176-alexfas01.jpg?1611669406",
  "https://img.freepik.com/premium-vector/netherlands-flag-design-waving-netherlands-flag-made-of-satin-or-silk-fabric-vector-illustration_191567-111.jpg",
  "https://img.freepik.com/free-photo/flag-of-brazil_1401-76.jpg",
  "https://flag.by/assets/images/flagi-mira/flag-argentina.jpg",
  "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_england1.jpg",
  "https://premiumflag.ru/upload/static/985/1.jpg",
  "https://premiumflag.ru/upload/static/985/11.jpg",
  "https://premiumflag.ru/upload/static/985/22.jpg",
  "https://ogeo.info/wp-content/uploads/2023/05/flag-egipta-foto.png",
  "https://i.pinimg.com/1200x/7b/d2/66/7bd266d99771ab1f3c04c83fc9ab2889.jpg",
  "https://cdn.pixabay.com/photo/2020/04/14/10/15/flag-of-india-5041783_960_720.jpg",
];
let towImg = [];
let newarr = [];
let p=0
let w=0
let toid=[]



all.forEach((e) => {
  e.addEventListener("click", function () {
    let n = e.id;
    newarr = [];
    document.getElementById("col").innerHTML = "";
    document.getElementById("col").style=`width:${n*50}px;`
    

    for (i = 0; i < n; i++) {
      if (i % 2 == 0) {
        random();
      }

      let news = document.createElement("img");
      news.id = "id" + i;
      news.src = "https://cdn-icons-png.flaticon.com/512/10146/10146599.png";
      news.onclick = function () {
        let id = +this.id.slice(2);
        this.src = newarr[id];
        toid.push(this.id)
        console.log(toid)
        
        if(p<2){
          p++
        }
        else{
          p=1
        }
        console.log(p)
        if(p==2){
          if((document.getElementById(toid[0]).src)!==(document.getElementById(toid[1]).src)){
            setTimeout(function(){ 
              document.getElementById(toid[0]).src="https://cdn-icons-png.flaticon.com/512/10146/10146599.png"
              document.getElementById(toid[1]).src="https://cdn-icons-png.flaticon.com/512/10146/10146599.png"
             toid=[]
            }, 250);
          }
          else{
            w++
            if(w==n/2){
              setTimeout(function(){
              alert("CONGRULUTIONS!!!")
              w=0
            }, 100)
          }
            toid=[]
          }

          
        }
      };
      document.getElementById("col").append(news);
     
      
      
    

    }
    
  });
});

function random() {
  let x = Math.floor(Math.random() * img.length);
  if (newarr.length > 0) {
    if (!newarr.includes(img[x])) {
      newarr.push(img[x]);
      newarr.push(img[x]);
    } else {
      random();
    }
  } else {
    newarr.push(img[x]);
    newarr.push(img[x]);
  }
  newarr = newarr.sort(function () {
    return 0.5 - Math.random();
  });
}
