const menuData = []; // Заполняется только точными данными из исходного меню.

function startLearning(){
  showSection('menu');
  window.scrollTo({top:document.getElementById('content').offsetTop-10,behavior:'smooth'});
}

function showSection(type){
  const content=document.getElementById('content');
  if(type==='menu'){
    content.innerHTML='<h3>Изучение меню</h3><p class="notice">Здесь будут только позиции и формулировки из исходных файлов BRO&N.</p><div id="menuList"></div>';
    renderMenu();
  } else if(type==='tests'){
    content.innerHTML='<h3>Тестирование</h3><p class="notice">Тесты будут составлены только на основании загруженных исходных материалов. Лишних фактов не будет.</p>';
  } else {
    content.innerHTML='<h3>Результаты</h3><p class="notice">После прохождения тестов здесь появятся баллы, процент и статус прохождения.</p>';
  }
}

function renderMenu(){
  const list=document.getElementById('menuList');
  if(!menuData.length) return;
  list.innerHTML=menuData.map(d=>`<article class="dish"><h4>${escapeHtml(d.name)}</h4><p>${escapeHtml(d.description)}</p></article>`).join('');
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
}

renderMenu();
