document.documentElement.classList.add('js');
(function(){
  // landing pages: blocks marked data-r rise in the first time they are seen
  var els=document.querySelectorAll('[data-r]');
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window)){Array.prototype.forEach.call(els,function(e){e.classList.add('in')}); return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in'); io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  Array.prototype.forEach.call(els,function(e){io.observe(e)});
})();
(function(){
  // SEO, Google ads and influencer showcases: each plays its entrance once it is on screen; the SEO report switches by tab
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var secs=document.querySelectorAll('.sv,.ga,.ig');
  if(!reduce&&'IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in'); io.unobserve(e.target)}})},{threshold:.18});
    Array.prototype.forEach.call(secs,function(el){
      if(el.classList.contains('ga')) el.classList.add('ga-js');
      if(el.classList.contains('ig')) el.classList.add('ig-js');
      io.observe(el);
    });
  } else Array.prototype.forEach.call(secs,function(el){el.classList.add('in')});
  var tl=document.querySelector('.sv-tabs'); if(!tl) return;
  var tabs=Array.prototype.slice.call(tl.querySelectorAll('.sv-tab'));
  function pick(i,focus){
    tabs.forEach(function(t,j){
      var on=j===i, panel=document.getElementById(t.getAttribute('aria-controls'));
      t.setAttribute('aria-selected',on?'true':'false'); t.tabIndex=on?0:-1;
      panel.hidden=!on; panel.classList.remove('on');
      if(on){void panel.offsetWidth; panel.classList.add('on')}
    });
    if(focus) tabs[i].focus();
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){pick(i)});
    t.addEventListener('keydown',function(e){
      if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault(); pick((i+(e.key==='ArrowRight'?1:tabs.length-1))%tabs.length,true)}
    });
  });
})();
(function(){
  // influencer dashboard: once on screen the count runs up to 10,000, then the niche filter steps along and the list follows
  var root=document.getElementById('infl-work'); if(!root) return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window)) return;
  var num=root.querySelector('.ig-num'), chips=root.querySelectorAll('.ig-chips span'), list=root.querySelector('.ig-list'), rows=list.querySelectorAll('li');
  var cities=['Kochi','Kozhikode','Thiruvananthapuram','Thrissur','Kannur','Kollam','Malappuram','Palakkad','Kottayam','Alappuzha'];
  var tiers=['Nano','Micro','Mid-tier','Macro'], first=['Food','Fashion','Tech','Travel'], step=0, timer=null, started=false;
  function count(){
    var to=+num.getAttribute('data-to'), t0=null;
    function f(ts){if(t0===null) t0=ts; var k=Math.min(1,(ts-t0)/1600); num.textContent=Math.round(to*(1-Math.pow(1-k,3))).toLocaleString('en-IN'); if(k<1) requestAnimationFrame(f)}
    requestAnimationFrame(f);
  }
  function next(){
    step=(step+1)%chips.length;
    Array.prototype.forEach.call(chips,function(c,i){c.classList.toggle('on',i===step)});
    var niche=chips[step].textContent;
    list.classList.add('swap');
    setTimeout(function(){
      Array.prototype.forEach.call(rows,function(li,i){
        li.querySelector('b').textContent=(step===0?first[i]:niche)+' creator';
        li.querySelector('div span').textContent=cities[(step*3+i*2)%cities.length]+' · Malayalam';
        li.querySelector('em').textContent=tiers[(step+i)%tiers.length];
        li.style.setProperty('--r',(55+((step*17+i*23)%42))+'%');
      });
      list.classList.remove('swap');
    },380);
  }
  new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){if(!started){started=true; count()} if(!timer) timer=setInterval(next,2000)}
    else {clearInterval(timer); timer=null}
  })},{threshold:.2}).observe(root);
})();
