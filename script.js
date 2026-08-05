const header=document.querySelector('.site-header'),menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav'),topBtn=document.querySelector('.back-to-top');function s(){header.classList.toggle('scrolled',scrollY>20);topBtn.classList.toggle('show',scrollY>600)}addEventListener('scroll',s,{passive:true});s();menu.addEventListener('click',()=>{const o=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!o));nav.classList.toggle('open',!o)});document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));topBtn.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));document.getElementById('year').textContent=new Date().getFullYear();
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('#product-grid article');

  if (cards.length >= 2) {
    cards[0].setAttribute(
      'data-search',
      '傷口保護清潔慕斯 L3-023 300ml pH5.5 Poloxamer 188'
    );

    cards[0].innerHTML = `
      <div class="card-icon">＋</div>
      <span>L3-023｜300ml</span>
      <h3>傷口保護清潔慕斯</h3>
      <p>
        pH5.5 弱酸、免沖洗泡沫，含 Poloxamer 188、
        玻尿酸、胺基酸與 CMC。
      </p>
      <a href="wound-cleansing-mousse.html">查看產品介紹 →</a>
    `;

    cards[1].setAttribute(
      'data-search',
      '無痛隱形保膚膜 L1-006 100ml 矽氧烷 透氣 防水'
    );

    cards[1].innerHTML = `
      <div class="card-icon">◇</div>
      <span>L1-006｜100ml</span>
      <h3>無痛隱形保膚膜</h3>
      <p>
        醫療級矽氧烷噴塗成膜，具透氣防水特性，
        含泛醇 B5 與維生素 E。
      </p>
      <a href="barrier-film.html">查看產品介紹 →</a>
    `;
  }
});
