let projects = [];

function addProject(){

    let projectName = document.getElementById("input-name").value;
    let projectDesc = document.getElementById("input-desc").value;
    let startDate = document.getElementById("input-start-date").value;
    let endDate = document.getElementById("input-end-date").value;
    let checkboxes = document.querySelectorAll('input[name="icon"]:checked');
    let image = document.getElementById("input-project-image").files[0];

    image = URL.createObjectURL(image);


    // MENGAMBIL CHECKBOX
    let icon = "";
    for(let i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
          icon = icon + checkboxes[i].value +" ";
        }
    }
    // MENGHITUNG DURASI 
    let startM = new Date (startDate).getMonth();
    let endM = new Date (endDate).getMonth()
    let startY = new Date (startDate).getFullYear();
    let endY= new Date (endDate).getFullYear();
    let selisihHasil = (startM+12*endY)-(endM+12*startY);
    let hasilFinish = Math.abs(selisihHasil);

    console.log(hasilFinish);

    let project = {
    pnm: projectName,
    image: image,
    description: projectDesc,
    icon: icon,
    hasilFinish: hasilFinish,
  };

  projects.push(project);
  renderProject();
}

function renderProject() {
  let hasilList = document.getElementById("project-list");

  hasilList.innerHTML = posting;

  projects.forEach((data) => {
    hasilList.innerHTML += `<div class="grid-item" id="grid-item">
    <div>
    <a href="detail-project.html" target="_blank" style="text-decoration: none; color: black"><img src="${data.image}" alt="">
    <div class="title">
        <h2>${data.pnm}</a></h2>
        <p>durasi: ${data.hasilFinish}  bulan</p>
    </div>
    <p>${data.description}</p>
    <div class="tech-icon">
    ${data.icon}
    </div>
    <div class="button-group">
        <button type="button" onclick="">edit</button>
        <button type="button" onclick="">delete</button>
    </div>
  </div>`;
  });
}

let posting = `
<div class="grid-item" id="grid-item">
<div>
<a href="detail-project.html" target="_blank" style="text-decoration: none; color: black"><img src="asset/blog-img.png" alt="">
<div class="title">
    <h2>Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a></h2>
    <p>durasi : 3 bulan</p>
</div>
<p> Ketimpangan sumber daya manusia (SDM) di sektor digital masih
    menjadi isu yang belum terpecahkan. Berdasarkan penelitian
    ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
    meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
    dolor sit amet consectetur adipisicing elit. Quam, molestiae
    numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
    eligendi debitis?</p>
<div class="tech-icon">
    <i class="fa-brands node-js"></i>
    <i class="fa-brands fa-react"></i>
    <i class="fa-brands fa-android"></i>
</div>
<div class="button-group">
    <button type="button" onclick="">edit</button>
    <button type="button" onclick="">delete</button>
</div>
</div>

`

// function durasi(hasilFinish){
//   let startDate = document.getElementById("input-start-date").value;
//   let endDate = document.getElementById("input-end-date").value;
  
//   let startM = new Date (startDate).getMonth();
//   let endM = new Date (endDate).getMonth()
//   let startY = new Date (startDate).getFullYear();
//   let endY= new Date (endDate).getFullYear();
//  let selisihHasil = (startM+12*endY)-(endM+12*startY);
//  let hasilFinish = Math.abs(selisihHasil)
//   console.log(hasilFinish);

// }

// durasi (new Date())