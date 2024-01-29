<!-- Render -->
const enter = document.createElement('br')
function renderSpan (i) {
	var dom = document.createElement('span');
  	dom.innerHTML = i;
  	dom.style.color = 'red';
  	return dom
}
function renderH (str) {
	var dom = document.createElement('h5');
  	dom.innerHTML = str;
  	return dom
}
function renderTitlePass (i, bt) {
	const sB = document.createElement('div')
	const sTB = document.createElement('div')
	const sT = document.createElement('h5')
	const sI = document.createElement('img')
	sI.src = i
	sI.alt = bt
	sI.className = 'skill-img'
	sT.innerText = bt
	sT.className = 'skill-title'
	sTB.className = 'tbox'
	sB.className = 'd-f'
	sB.appendChild(sI)
	sB.appendChild(sTB)
	sTB.appendChild(sT)
	placeContent.appendChild(sB)
}
function renderTitleSkill (i, bt, cd, mc) {
	const sB = document.createElement('div')
	const sTB = document.createElement('div')
	const sDB = document.createElement('div')
	const sT = document.createElement('h5')
	const sCD = document.createElement('p')
	const sDT = document.createElement('p')
	const sI = document.createElement('img')
	sI.src = i
	sI.alt = bt
	sI.className = 'skill-img'
	sT.innerText = bt
	sT.className = 'skill-title'
	sTB.className = 'tbox'
	sCD.innerText = maindetail.cd  + ': ' + cd + 's'
	sDT.innerText = maindetail.manacost + ': ' + mc
	sDB.appendChild(sCD)
	sDB.appendChild(sDT)
	sDB.classList.add('d-f', 'detail-skill')
	sB.className = 'd-f'
	sB.appendChild(sI)
	sB.appendChild(sTB)
	sTB.appendChild(sT)
	sTB.appendChild(sDB)
	placeContent.appendChild(sB)
}
function renderTable6Level (m, title, data, add, sub) {
  let tS = document.createElement('table')
  tS.className = 'skill-table'
  let fr = "<tr class='cl'><th class='header-tS'>Cấp chiêu</th><td class='contenttS'>Lv1</td><td class='contenttS'>Lv2</td><td class='contenttS'>Lv3</td><td class='contenttS'>Lv4</td><td class='contenttS'>Lv5</td><td class='contenttS'>Lv6</td></tr>"
  let total = ""
  let r = []
  let d = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < 6; j++) {
    	d[j] = data[i] + add[i] * j - sub[i] * j
    }
    <!-- Checkking title -->
    if (title [i] == maindetail.cd) {
    	for (let i = 0; i < 6; i ++) {
        	d[i] = d[i] + "s"
        }
    }
    if (title [i] == maindetail.attspd || title [i] == maindetail.slow || title [i] == maindetail.rst) {
    	for (let i = 0; i < 3; i ++) {
        	d[i] = d[i] + "%"
        }
    }
      r[i] = "<tr class='cl'><th class='header-tS'>" + title[i] + "</th><td class='contenttS'>" + d[0] + "</td><td class='contenttS'>" + d[1] + "</td><td class='contenttS'>" + d[2] + "</td><td class='contenttS'>" + d[3] + "</td><td class='contenttS'>" + d[4] + "</td><td class='contenttS'>" + d[5] + "</td></tr>"
    total = total + r[i]
  }
  tS.innerHTML = fr + total
  placeContent.appendChild(tS)
}
  function renderTable3Level (m, title, data, add, sub) {
  let tS = document.createElement('table')
  tS.className = 'skill-table'
  let fr = "<tr class='cl'><th class='header-tS'>Cấp chiêu</th><td class='contenttS'>Lv1</td><td class='contenttS'>Lv2</td><td class='contenttS'>Lv3</td></tr>"
  let total = ""
  let r = []
  let d = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < 3; j++) {
    	d[j] = data[i] + add[i] * j - sub[i] * j
    }
    <!-- Checkking title -->
    if (title [i] == maindetail.cd) {
    	for (let i = 0; i < 3; i ++) {
        	d[i] = d[i] + "s"
        }
    }
    if (title [i] == maindetail.attspd || title [i] == maindetail.slow  || title [i] == maindetail.rst) {
    	for (let i = 0; i < 3; i ++) {
        	d[i] = d[i] + "%"
        }
    }
      r[i] = "<tr class='cl'><th class='header-tS'>" + title[i] + "</th><td class='contenttS'>" + d[0] + "</td><td class='contenttS'>" + d[1] + "</td><td class='contenttS'>" + d[2] + "</td></tr>"
    total = total + r[i]
  }
  tS.innerHTML = fr + total
  placeContent.appendChild(tS)
}